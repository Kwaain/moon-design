import React, {
  useEffect,
  useCallback,
  useState,
  MutableRefObject,
} from 'react';
import { rem } from '@heathmont/moon-utils';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const Wrapper: React.FC<VWrapperProps> = ({ visible, offset, children }) => {
  return (
    <div
      className={classNames(
        'absolute r-10 w-auto h-14 z-1 rounded-xl p-1 pointer-events-none	',
        visible ? 'opacity-1' : 'opacity-0'
      )}
      style={{
        bottom: rem(offset + 40),
        background: 'rgb(var(--gohan))',
        boxShadow:
          '0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
        transition: 'opacity 0.2s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

const Viewport: React.FC<ViewportProps> = ({ style, children }) => {
  return (
    <div
      className={classNames(
        'absolute w-0 h-0',
        `after:content['""'] after:absolute after:border-2 after:border-solid after:border[#4e46b4] after:w-full after:h-full`
      )}
      style={{ ...style, overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const Grid: React.FC = ({ children }) => {
  return (
    <div
      className={classNames('grid h-full gap-1 relative')}
      style={{ gridAutoFlow: 'column' }}
    >
      {children}
    </div>
  );
};

const Column: React.FC = ({ children }) => {
  return (
    <div
      className={classNames('h-full w-2 rounded-sm')}
      style={{ background: 'rgb(var(--goku))', opacity: 0.8 }}
    >
      {children}
    </div>
  );
};

type Props = {
  numberOfColumns: number;
  tableRef: MutableRefObject<HTMLElement | null>;
  footerRef: MutableRefObject<HTMLElement | null>;
};

type VWrapperProps = {
  visible: boolean;
  offset: number;
};

type ViewportProps = {
  style: React.CSSProperties;
};

let timeoutId: ReturnType<typeof setTimeout>;
const TIMEOUT = 150;

const Minimap: React.FC<Props> = ({ tableRef, footerRef, numberOfColumns }) => {
  const [styles, setStyles] = useState({});
  const [visible, setVisible] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleUpdateViewport = useCallback(() => {
    if (!tableRef.current) return {};

    const fullHeight = tableRef.current.scrollHeight;
    const fullWidth = tableRef.current.scrollWidth;

    const viewportHeight = tableRef.current.clientHeight;
    const viewportWidth = tableRef.current.clientWidth;

    const scrollTop = tableRef.current.scrollTop;
    const scrollLeft = tableRef.current.scrollLeft;

    setStyles({
      height: `${(viewportHeight / fullHeight) * 100}%`,
      width: `${(viewportWidth / fullWidth) * 100}%`,
      top: `${(scrollTop / fullHeight) * 100}%`,
      left: `${(scrollLeft / fullWidth) * 100}%`,
    });

    setVisible(true);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);
  }, [tableRef]);

  useEffect(() => {
    if (!footerRef || !footerRef.current) return;
    setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef, setFooterHeight]);

  useEffect(() => {
    if (!tableRef || !tableRef.current) return;
    const current = tableRef.current;

    handleUpdateViewport();
    current.addEventListener('scroll', handleUpdateViewport, { passive: true });
    return () => {
      current.removeEventListener('scroll', handleUpdateViewport);
      clearTimeout(timeoutId);
    };
  }, [tableRef, handleUpdateViewport]);

  return (
    <Wrapper visible={visible} offset={footerHeight}>
      <Grid>
        <Viewport style={styles} />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <Column key={index} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Minimap;
