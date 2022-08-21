import React, { useRef, useState } from 'react';
import { useTheme } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { MapData, MapProps, TextProps } from '../types/MapProps';
import { TooltipWrapper, Item, ColorPreview } from './Tooltip';
import worldMap from './World110m';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Text: React.FC<TextProps> = ({ children, size }) => {
  return (
    <p
      className={classNames(`text-xs`)}
      style={{ fontSize: rem(size), color: '#000000' }}
    >
      {children}
    </p>
  );
};

const Container: React.FC = ({ children }) => {
  return (
    <div
      className={classNames('relative h-full flex flex-col items-center')}
      style={{ width: '60%', justifyContent: 'center' }}
    >
      {children}
    </div>
  );
};

export const Map: React.FC<MapProps> = ({ data }) => {
  const theme = useTheme();
  const defaultColor = themed('color', 'goku.80')(theme);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [hoveredItem, setHoveredItem] =
    useState<MapData | null | undefined>(null);
  const isCountryCode = (
    code: string,
    country: { ISO_A2: string; ISO_A3: string }
  ) => {
    if (!code) return false;
    return code.length === 2
      ? code === country.ISO_A2
      : code === country.ISO_A3;
  };

  return (
    <Container>
      <TooltipWrapper
        ref={tooltipRef}
        passStyle={{
          visibility: hoveredItem ? 'visible' : 'hidden',
          position: 'absolute',
          left: 0,
          top: 0,
          transition: 'transform 0.4s ease',
          boxShadow:
            '0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
        }}
      >
        {!!hoveredItem && (
          <Item>
            <>
              <ColorPreview
                style={{
                  background: hoveredItem.color,
                  opacity: hoveredItem.opacity,
                }}
              />
              <Text size={12}>{hoveredItem.label}</Text> • {hoveredItem.value}
            </>
          </Item>
        )}
      </TooltipWrapper>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [0, 50],
        }}
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geography: any, index: number) => {
              const country = geography.properties;
              const activeItem = data.find((item) =>
                isCountryCode(item.code, country)
              );
              const fillColor = activeItem ? activeItem.color : defaultColor;
              const opacity = activeItem ? activeItem.opacity : 1;

              return (
                <Geography
                  // eslint-disable-next-line
                  key={`${country.ISO_A3}-${index}`}
                  tabIndex={-1}
                  geography={geography}
                  style={{
                    default: { fill: fillColor, outline: 'none', opacity },
                    hover: { fill: fillColor, outline: 'none' },
                    pressed: { fill: fillColor, outline: 'none' },
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                  }}
                  onMouseMove={(event) => {
                    setHoveredItem(activeItem);
                    const ref = tooltipRef && tooltipRef.current;
                    if (!ref) return;
                    const parentElement = ref.parentElement;
                    if (!parentElement) return;
                    const parentRect = parentElement.getBoundingClientRect();
                    const tooltipRect = ref.getBoundingClientRect();
                    const x =
                      event.clientX - parentRect.left - tooltipRect.width / 2;
                    const y =
                      event.clientY - parentRect.top - tooltipRect.height * 1.2;
                    ref.style.transform = `translate(${x}px, ${y}px)`;
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </Container>
  );
};
