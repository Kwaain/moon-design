import React from "react";
import { Button } from '@heathmont/moon-core-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

const SeoSection = () => {
  return (
    <div
      className="flex flex-col items-center self-center w-full h-full px-5 mt-16"
      style={{
        background: 'linear-gradient rgba(36, 3, 63, 0) 0% #24033F 100%',
      }}
    >
      <div className="flex flex-col lg:items-start">
        <p className="text-[24px] text-bulma !text-left leading-8 font-semibold sm:px-3 sm:text-left">
          Enjoy BTC gaming at the best Bitcoin casino
        </p>
        <p className="text-[18px] text-bulma opacity-60 !text-left !leading-8 my-2 sm:px-3 sm:text-left md:text-moon-16 lg:text-moon-16">
          The future of gaming is here, we are the number one bitcoin casino in
          2021 and into 2022. Our range of casino-slots consistently make the
          top ten across the bitcoin casino world. Read more.
        </p>
      </div>
      <div className="mt-3 mb-3">
        <Button
          className="flex justify-center items-center cursor-pointer bg-gohan w-[32px] h-[32px] rounded-full"
          onClick={() => console.log('Read More')}
        >
          <ControlsChevronDown />
        </Button>
      </div>
    </div>
  );
};

export default SeoSection;