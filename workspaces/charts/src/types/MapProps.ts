export type Props = {
  data: {
    label: string | React.ReactNode;
    code: string;
    value: number;
    opacity: number;
    color: string;
  }[];
};

export interface MapData {
  label: string | React.ReactNode;
  code: string;
  value: number;
  opacity: number;
  color: string;
}

export interface MapProps {
  data: MapData[];
}

export type TextProps = {
  size: number;
}
