import React from 'react';

interface HeaderProps {
  title?: string | JSX.Element;
  description?: string | JSX.Element;
  seeAllButton?: boolean;
}

const HeaderSection: React.FC<HeaderProps> = ({
  title, 
  description, 
  seeAllButton
}) => {
  return (
    <div className="w-full flex">
      <div>
        <div className="text-xl leading-8">
          {title || null}
        </div>
        <p className="text-trunks">
          {description || null}
        </p>
      </div>

      <div>
        {seeAllButton || null}
      </div>
    </div>
  );
};

export default HeaderSection;