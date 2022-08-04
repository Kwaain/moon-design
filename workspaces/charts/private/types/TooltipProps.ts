export type Props = {
  payload?: {
    name: string;
    dataKey: string;
    color: string;
    value: any;
    payload: {
      date?: string;
      label?: string;
      fill?: string;
      dataKey?: string;
    };
  }[];
  active?: boolean;
  formatFn: (props: { value: any; key: string }) => any;
};

export type ColorPreviewProps = {
  background?: string;
};
