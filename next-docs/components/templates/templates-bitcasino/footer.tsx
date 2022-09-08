import React, { useState } from "react";
import Image from 'next/image';
import { Accordion } from '@heathmont/moon-core-tw';
import { Switch } from '@heathmont/moon-core';
import { ControlsChevronDown, ControlsChevronRight } from "@heathmont/moon-icons-tw";
import icon18 from '../../../public/templates/bitcasino/18+icon.png';
import awards1 from '../../../public/templates/bitcasino/awards1.png';
import awards2 from '../../../public/templates/bitcasino/awards2.png';
import awards3 from '../../../public/templates/bitcasino/awards3.png';
import bitcasinoLogo from '../../../public/templates/bitcasino/BitcasinoLogo.png';
import hubb from '../../../public/templates/bitcasino/Hubb.png';
import image1 from '../../../public/templates/bitcasino/image1.png';
import licences1 from '../../../public/templates/bitcasino/licences1.png';
import uk from '../../../public/templates/bitcasino/uk.png';
import Cardano from "../../../pages/templates/icons/cardano";
import Bitcasino from "../../../pages/templates/icons/bitcasino";
import LtchLogo from "../../../pages/templates/icons/ltchLogo";
import TronLogo from "../../../pages/templates/icons/tronLogo";
import EthereumIc from "../../../pages/templates/icons/ethereumIc";
import UsdIc from "../../../pages/templates/icons/usdtIc";
import XAbove from "../../../pages/templates/icons/xAbove";
import DogeCoin from "../../../pages/templates/icons/dogeCoin";
import Telegram from "../../../pages/templates/icons/telegram";
import Youtube from "../../../pages/templates/icons/youtube";
import Twitter from "../../../pages/templates/icons/twitter";
import Instagram from "../../../pages/templates/icons/instagram";
import Tiktok from "../../../pages/templates/icons/tiktok";

const Footer = () => {
  const [state, setState] = useState(true);

return (
  <div className="p-0 mx-6 md:mr-auto lg:p-5 lg:mx-auto md:w-full xxl:w-[1262px]">
    <div className="py-4 flex flex-row justify-start items-center border border-x-0 border-y-beerus">
      <Image src={bitcasinoLogo} alt="Logo" />
      <ControlsChevronRight className="mx-3" />
      <p>Mainpage </p>
    </div>
    <div className="flex flex-col py-3 mb-3 w-full md:border md:border-x-0 md:border-t-0 md:border-b-beerus md:flex-row md:justify-between">
      <div className="grow-1 mb-7 lg:mr-0 lg:mb-0 md:mr-4">
        <h2 className="text-bulma text-sm font-bold mb-7">
          About Bitcasino.io
        </h2>
        <p className="text-xs text-trunks md:w-[255px]">
          Bitcasino.io is owned and operated by Moon Technologies B.V. It is
          licensed and regulated by the Government of Curaçao under the gaming
          license 1668/JAZ.
        </p>
      </div>
      <div className="hidden grow-3 lg:mr-0 md:block ">
        <ul>
          <li className="text-bulma text-sm font-bold mb-5">Games</li>
          <li className="mb-3 text-trunks text-xs">Slots</li>
          <li className="mb-3 text-trunks text-xs">Roulette</li>
          <li className="mb-3 text-trunks text-xs">Live Baccarat</li>
          <li className="mb-3 text-trunks text-xs">Blackjack</li>
          <li className="mb-3 text-trunks text-xs">Live Casino</li>
          <li className="mb-3 text-trunks text-xs">Sportsbook</li>
          <li className="mb-3 text-trunks text-xs">Providers</li>
          <li className="mb-3 text-trunks text-xs">Live Poker</li>
          <li className="mb-3 text-trunks text-xs">Live Game Shows</li>
          <li className="mb-3 text-trunks text-xs">Casual Games</li>
          <li className="mb-3 text-trunks text-xs">Multiplayer</li>
        </ul>
      </div>
      <div className="grow-3 hidden lg:mr-0 md:flex md:mr-4 flex-wrap">
        <ul>
          <li className="text-bulma text-sm font-bold mb-5">About</li>
          <li className="mb-3 text-trunks text-xs">Loyalty Club</li>
          <li className="mb-3 text-trunks text-xs">VIP</li>
          <li className="mb-3 text-trunks text-xs">Rewards</li>
          <li className="mb-3 text-trunks text-xs">Blog</li>
          <li className="mb-3 text-trunks text-xs">Affiliates</li>
          <li className="mb-3 text-trunks text-xs">Help Centre</li>
          <li className="mb-3 text-trunks text-xs">Gaming License</li>
        </ul>
      </div>
      <div className="grow-3 hidden md:mr-0 md:flex">
        <ul>
          <li className="text-bulma text-sm font-bold mb-5">Info</li>
          <li className="mb-3 text-trunks text-xs">
            General Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">
            Reward Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">
            Self-Exclusion Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">
            Affiliate Terms & Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">Privacy Policy</li>
          <li className="mb-3 text-trunks text-xs">Responsible Gambling</li>
        </ul>
      </div>
      <div className="flex flex-col md:hidden">
        <ul className=" mb-2">
          <Accordion title={'Games'} isContentInside={true}>
            <li className="mb-0.5 text-trunks text-s leading-6">Slots</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Roulette</li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Live Baccarat
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">Blackjack</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Live Casino</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Sportsbook</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Providers</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Live Poker</li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Live Game Shows
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Casual Games
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">Multiplayer</li>
          </Accordion>
        </ul>
        <ul className="mb-2">
          <Accordion title={'About'} isContentInside={true}>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Loyalty Club
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">VIP</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Rewards</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Blog</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Affiliates</li>
            <li className="mb-0.5 text-trunks text-s leading-6">Help Centre</li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Gaming License
            </li>
          </Accordion>
        </ul>
        <ul className="mb-2">
          <Accordion title={'Info'} isContentInside={true}>
            <li className="mb-0.5 text-trunks text-s leading-6">
              General Terms and Conditions
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Reward Terms and Conditions
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Self-Exclusion Terms and Conditions
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Affiliate Terms & Conditions
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Privacy Policy
            </li>
            <li className="mb-0.5 text-trunks text-s leading-6">
              Responsible Gambling
            </li>
          </Accordion>
        </ul>
      </div>
      <div className="grow-4 flex justify-center mt-6 sm:mt-0 sm:block">
        <ul className="hidden mb-4 justify-between items-center md:w-[65%] md:flex">
          <li className="leading-4 text-[10px] font-semibold text-trunks">
            AM
          </li>
          <Switch
            id="test-switch-3"
            checked={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState(e.target.checked)
            }
            colorScheme={true}
          />
          <li className="leading-4 text-[10px] font-semibold text-trunks">
            PM
          </li>
        </ul>
        <div className="hidden rounded-[100px] flex-col bg-gohan mb-4 lg:flex">
          <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
            <div className="flex items-center">
              <Image src={uk} className="rounded-full" alt="Flag" />
              <span className="text-trunks text-xs ml-[5px]">English</span>
            </div>
            <div className="cursor-pointer">
              <ControlsChevronDown />
            </div>
          </div>
        </div>
        <div className="rounded-[100px] bg-gohan flex justify-center align-middle lg:w-full">
          <span className="flex items-center justify-center my-[6px] ml-3 mr-[17px]">
            <Image src={image1} className="mt-[6px]" alt="Exchange rate" />
          </span>
        </div>
      </div>
    </div>
    <div className="flex flex-col py-3 mb-3 justify-between border border-x-0 border-t-0 border-b-beerus md:flex-row">
      <div className="mb-7 lg:mb-0">
        <h2 className="text-bulma text-sm font-bold mb-5">Payment methods</h2>
        <div className="flex flex-row lg:flex-nowrap sm:flex-wrap">
          <div className="bg-bardock rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Bitcasino />
          </div>
          <div className="bg-marron rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <div className="bg-goten rounded-full">
              <LtchLogo />
            </div>
          </div>
          <div className="bg-bulla rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <TronLogo />
          </div>
          <div className="bg-videl rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <EthereumIc />
          </div>
          <div className="bg-broly rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <UsdIc />
          </div>
          <div className="bg-puar rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <XAbove />
          </div>
          <div className="bg-korin rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Cardano />
          </div>
          <div className="bg-oolong rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <DogeCoin />
          </div>
        </div>
      </div>
      <div className="mb-7 lg:mb-0 lg:ml-3 lg:mr-3">
        <h2 className="text-bulma text-sm font-bold mb-5">Follow us</h2>
        <div className="flex flex-row lg:flex-nowrap sm:flex-wrap">
          <div className="bg-pan rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Telegram />
          </div>
          <div className="bg-kami rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Youtube />
          </div>
          <div className="bg-bardock rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Bitcasino />
          </div>
          <div className="bg-launch rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Twitter />
          </div>
          <div className="rounded-full mr-2 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Instagram />
          </div>
          <div className="bg-popo rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px]">
            <Tiktok />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-bulma text-sm font-bold mb-5">Licences</h2>
        <div className="flex flex-wrap items-center">
          <Image src={licences1} alt="Curacao license" />
          <div className="mx-4">
            <Image src={icon18} alt="18+" />
          </div>
          <Image src={hubb} alt="Hub88" />
        </div>
      </div>
    </div>
    <div className="mb-7">
      <h2 className="text-bulma text-sm font-bold mb-5">Awards</h2>
      <div className="flex items-center gap-2">
        <Image src={awards1} alt="Award 1" />
        <Image src={awards3} alt="Award 2" />
        <Image src={awards2} alt="Award 3" />
      </div>
    </div>
  </div>
);
}

export default Footer;