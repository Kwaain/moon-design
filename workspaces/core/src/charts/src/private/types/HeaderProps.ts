export type Props = {
  icon: React.ReactNode;
  title: string;
  filter?: React.ReactNode;
  isActive?: boolean;
};

export type TitleProps = {
  isActive?: boolean;
  theme?: {
    colorNew: {
      bulma: string;
    };
  };
};

export type FilterWrapperProps = {
  isActive?: boolean;
  theme?: {
    colorNew: {
      goten: string;
    };
  };
};
