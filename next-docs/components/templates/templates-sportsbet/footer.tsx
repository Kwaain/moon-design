import React from "react";
import Image from 'next/image';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { Accordion } from '@heathmont/moon-core-tw';
import image1 from '../../../public/templates/bitcasino/image1.png';
import Plus18 from '../../../public/templates/sportsbet/18plus.png';
import Award1 from '../../../public/templates/sportsbet/award1.png';
import Award2 from '../../../public/templates/sportsbet/award2.png';
import Award3 from '../../../public/templates/sportsbet/award3.png';
import Curacao from '../../../public/templates/sportsbet/curacao.png';
import SbcAwards from '../../../public/templates/sportsbet/sbc-awards.png';
import Bitcasino from "../../../pages/templates/icons/bitcasino";
import LtchLogo from "../../../pages/templates/icons/ltchLogo";
import TronLogo from "../../../pages/templates/icons/tronLogo";
import EthereumIc from "../../../pages/templates/icons/ethereumIc";
import UsdIc from "../../../pages/templates/icons/usdtIc";
import XAbove from "../../../pages/templates/icons/xAbove";
import Cardano from "../../../pages/templates/icons/cardano";
import BrazilianIc from "../../../pages/templates/icons/brazilianIc";
import EuroIcon from "../../../pages/templates/icons/euro";
import JapanesIc from "../../../pages/templates/icons/japanesIc";
import IndianIc from "../../../pages/templates/icons/indianIc";
import Telegram from "../../../pages/templates/icons/telegram";
import Youtube from "../../../pages/templates/icons/youtube";
import Twitter from "../../../pages/templates/icons/twitter";
import Instagram from "../../../pages/templates/icons/instagram";
import Tiktok from "../../../pages/templates/icons/tiktok";
import Arsenal from "../../../pages/templates/icons/arsenal";
import Southampton from "../../../pages/templates/icons/southampton";
import Flamengo from "../../../pages/templates/icons/flamengo";
import Watford from "../../../pages/templates/icons/watford";
import Mastercard from "../../../pages/templates/icons/mastercard";
import Visa from "../../../pages/templates/icons/visa";
import Scril from "../../../pages/templates/icons/skrill";
import Neteller from "../../../pages/templates/icons/neteller";
import PlusFive from "../../../pages/templates/icons/plusFive";

const Footer = () => {
return (
  <div className="w-full px-[38px] lg:p-5 lg:mx-auto">
    <div className="flex flex-col py-3 mb-3 lg:border lg:border-x-0 lg:border-t-0 lg:border-b-beerus lg:flex-row lg:justify-between">
      <div className="grow-1 mb-6  lg:mr-4 lg:mb-0">
        <h2 className="text-goten text-sm font-bold mb-7">
          About Sportsbet.io
        </h2>
        <p className="text-xs text-trunks w-full lg:w-[148px]">
          Sportsbet.io is owned and operated by mBet Solutions NV (Schout Bij
          Nacht Doormanweg 40, P.O. Box 4745, Curaçao). It is licensed and
          regulated by the Government of Curaçao under the gaming license
          1668/JAZ. Some payment methods are handled by its wholly owned
          subsidiary, mProcessing Solutions Ltd, Cyprus (Menandrou 4, 1066,
          Nicosia, Cyprus).
        </p>
      </div>
      <div className="grow-3 hidden lg:block lg:mr-4">
        <ul>
          <h2 className="text-goten text-sm font-bold mb-5">Sports</h2>
          <li className="mb-3 text-trunks text-xs">Promotions</li>
          <li className="mb-3 text-trunks text-xs">In play</li>
          <li className="mb-3 text-trunks text-xs">Upcoming</li>
        </ul>
      </div>
      <div className="grow-3 hidden lg:block lg:mr-4">
        <ul>
          <h2 className="text-goten text-sm font-bold mb-5">Casino</h2>
          <li className="mb-3 text-trunks text-xs">Casino</li>
          <li className="mb-3 text-trunks text-xs">Live Casino</li>
          <li className="mb-3 text-trunks text-xs">Bombay club</li>
        </ul>
      </div>
      <div className="grow-3 hidden lg:block lg:mr-4">
        <ul>
          <h2 className="text-goten text-sm font-bold mb-5">Support</h2>
          <li className="mb-3 text-trunks text-xs">Affiliate FAQ</li>
          <li className="mb-3 text-trunks text-xs">General Betting Rules</li>
          <li className="mb-3 text-trunks text-xs">Help Centre</li>
          <li className="mb-3 text-trunks text-xs">Payment Options</li>
          <li className="mb-3 text-trunks text-xs">Responsible Gambling</li>
          <li className="mb-3 text-trunks text-xs">
            Reward Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">
            Self-Exclusion Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">The Clubhouse FAQ</li>
        </ul>
      </div>
      <div className="grow-3 hidden lg:block lg:mr-4">
        <ul>
          <h2 className="text-goten text-sm font-bold mb-5">About</h2>
          <li className="mb-3 text-trunks text-xs">Sportsbet app</li>
          <li className="mb-3 text-trunks text-xs">Affiliates</li>
          <li className="mb-3 text-trunks text-xs">
            Affiliate Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">
            Crypto Currency How To Guide
          </li>
          <li className="mb-3 text-trunks text-xs">Privacy Policy</li>
          <li className="mb-3 text-trunks text-xs">Sportsbet.io Partnerships</li>
          <li className="mb-3 text-trunks text-xs">Terms and Conditions</li>
          <li className="mb-3 text-trunks text-xs">
            The Clubhouse Terms and Conditions
          </li>
          <li className="mb-3 text-trunks text-xs">Vip</li>
       </ul>
      </div>
      <div className="grow-4 hidden lg:block">
        <h2 className="text-goten text-sm font-bold mb-5">Preferences</h2>
        <div className="rounded-[100px] flex flex-col bg-beerus mb-4 ">
          <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
            <div className="flex items-center">
              <span className="texst-xs ml-[5px]">English </span>
            </div>
            <div className="cursor-pointer">
              <ControlsChevronDown />
            </div>
          </div>
        </div>
        <div className="rounded-[100px] bg-beerus flex justify-center align-middle">
          <span className="my-[6px] ml-3 mr-[17px]">
            <Image src={image1} className="mt-[6px]" alt="Exchange rate" />
          </span>
        </div>
      </div>
    </div>
    <div className="hidden py-3 mb-3 justify-between border border-x-0 border-t-0 border-b-beerus lg:flex ">
      <div>
        <h2 className="text-goten text-sm font-bold mb-5">Payment methods</h2>
        <div className="flex flex-row lg:w-[70%] sm:flex-wrap">
          <div className="bg-[#F7931A] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Bitcasino />
          </div>
          <div className="bg-[#345D9D] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <div className="bg-white rounded-full">
              <LtchLogo />
            </div>
          </div>
          <div className="bg-[#EC0928] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <TronLogo />
          </div>
          <div className="bg-[#7748FA] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <EthereumIc />
          </div>
          <div className="bg-[#2ABB92] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <UsdIc />
          </div>
          <div className="bg-[#02A6F0] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <XAbove />
          </div>
          <div className="bg-[#0033AD] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Cardano />
          </div>
          <div className="bg-[#0AB758] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <BrazilianIc />
          </div>
          <div className="bg-[#335DF4] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <EuroIcon />
          </div>
          <div className="bg-[#FF3D44] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <JapanesIc />
          </div>
          <div className="bg-[#FFE8BC] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <IndianIc />
          </div>
        </div>
      </div>
      <div className="hidden lg:block sm:ml-3 sm:mr-3">
        <h2 className="text-goten text-sm font-bold mb-5">Follow us</h2>
        <div className="flex flex-row lg:flex-nowrap sm:flex-wrap">
          <div className="bg-[#27A4DB] rounded-full mr-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Telegram />
          </div>
          <div className="bg-[#FF0000] rounded-full mr-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Youtube />
          </div>
          <div className="bg-[#F7931A] rounded-full mr-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Bitcasino />
          </div>
          <div className="bg-[#1DA1F2] rounded-full mr-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Twitter />
          </div>
          <div className="rounded-full mr-2 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Instagram />
          </div>
          <div className="bg-[#000000] rounded-full mr-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Tiktok />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-goten text-sm font-bold mb-5 hidden lg:block">
          Partnership
        </h2>
        <div className="flex items-center">
          <div className="bg-beerus mr-2 rounded-full flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Arsenal />
          </div>
          <div className="bg-beerus mr-2 rounded-full flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Southampton />
          </div>
          <div className="bg-beerus mr-2 rounded-full flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Flamengo />
          </div>
          <div className="bg-beerus mr-2 rounded-full flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
            <Watford />
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col lg:hidden">
      <div className="mb-2">
        <Accordion
          title={'List item'}
          isContentInside={true}
          backgroundColor="bg-gohan"
        />
      </div>
      <div className="mb-2">
        <Accordion
          title={'Casino'}
          isContentInside={true}
          backgroundColor="bg-gohan"
        >
          <ul className="flex flex-col">
            <li className="mb-3 text-trunks text-xs">Casino</li>
            <li className="mb-3 text-trunks text-xs">Live Casino</li>
            <li className="mb-3 text-trunks text-xs">Bombay club</li>
          </ul>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
          backgroundColor="bg-gohan"
          title={'Support'}
          isContentInside={true}
        >
          <ul className="flex flex-col">
            <li className="mb-3 text-trunks text-xs">Affiliate FAQ</li>
            <li className="mb-3 text-trunks text-xs">General Betting Rules</li>
            <li className="mb-3 text-trunks text-xs">Help Centre</li>
            <li className="mb-3 text-trunks text-xs">Payment Options</li>
            <li className="mb-3 text-trunks text-xs">Responsible Gambling</li>
            <li className="mb-3 text-trunks text-xs">
              Reward Terms and Conditions
            </li>
            <li className="mb-3 text-trunks text-xs">
              Self-Exclusion Terms and Conditions
            </li>
            <li className="mb-3 text-trunks text-xs">The Clubhouse FAQ</li>
          </ul>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
          backgroundColor="bg-gohan"
          title={'About'}
          isContentInside={true}
        >
          <ul className="flex flex-col">
            <li className="mb-3 text-trunks text-xs">Sportsbet app</li>
            <li className="mb-3 text-trunks text-xs">Affiliates</li>
            <li className="mb-3 text-trunks text-xs">
              Affiliate Terms and Conditions
            </li>
            <li className="mb-3 text-trunks text-xs">
              Crypto Currency How To Guide
            </li>
            <li className="mb-3 text-trunks text-xs">Privacy Policy</li>
            <li className="mb-3 text-trunks text-xs">
              Sportsbet.io Partnerships
            </li>
            <li className="mb-3 text-trunks text-xs">Terms and Conditions</li>
            <li className="mb-3 text-trunks text-xs">
              The Clubhouse Terms and Conditions
            </li>
            <li className="mb-3 text-trunks text-xs">Vip</li>
          </ul>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
          backgroundColor="bg-gohan"
          title={'Preferences'}
          isContentInside={true}
        >
          <div className="flex flex-col">
            <div className="rounded-[100px] flex flex-col bg-beerus mb-4 ">
              <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
                <div className="flex items-center">
                  <span className="texst-xs ml-[5px]">English </span>
                </div>
                <div className="cursor-pointer">
                  <ControlsChevronDown />
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
          backgroundColor="bg-gohan"
          title={'Accapted Methods'}
          isContentInside={true}
        >
          <div className="flex flex-col ">
            <div className="flex w-[70%] flex-wrap items-center ">
              <div className="bg-[#345D9D] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <XAbove />
              </div>
              <div className="bg-[#F7931A] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px] ">
                <Bitcasino />
              </div>
              <div className="bg-[#345D9D] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px] ">
                <div className="bg-bulma rounded-full">
                  <LtchLogo />
                </div>
              </div>
              <div className="bg-[#7748FA] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px] ">
                <TronLogo />
              </div>
              <div className="bg-[#2ABB92] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px] ">
                <BrazilianIc />
              </div>
              <div className="bg-popo rounded-full mr-2 mb-2 flex items-center justify-center w-[45px] h-[45px] ">
                <Mastercard />
              </div>
              <div className="bg-[#1A1F71] rounded-full mr-2 mb-2 flex items-center justify-center w-[45px] h-[45px] ">
                <Visa />
              </div>
              <div className="bg-[#5F1E5E] rounded-full mr-2 mb-2 flex items-center justify-center w-[45px] h-[45px] ">
                <Scril />
              </div>
              <div className="bg-[#83BA3B] rounded-full mr-2 mb-2 flex items-center justify-center w-[45px] h-[45px] ">
                <Neteller />
              </div>
              <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[45px] h-[45px] ">
                <PlusFive />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="mb-2">
        <Accordion
          backgroundColor="bg-gohan"
          title={'Follow Sportsbook.io'}
          isContentInside={true}
        >
          <div className="flex flex-col">
            <div className="flex flex-wrap">
              <div className="bg-[#27A4DB] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Telegram />
              </div>
              <div className="bg-[#FF0000] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Youtube />
              </div>
              <div className="bg-[#F7931A] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Bitcasino />
              </div>
              <div className="bg-[#1DA1F2] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Twitter />
              </div>
              <div className="rounded-full mr-2 bg-gradient-to-r from-yellow-500 to-pink-500 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Instagram />
              </div>
              <div className="bg-popo rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Tiktok />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="mb-5">
        <Accordion
          backgroundColor="bg-gohan"
          title={'Sponsorships'}
          isContentInside={true}
        >
          <div className="flex flex-wrap">
            <div className="flex flex-wrap">
              <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Arsenal />
              </div>
              <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Southampton />
              </div>
              <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Flamengo />
              </div>
              <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                <Watford />
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
    <div className="flex justify-center mb-6 lg:hidden">
      <div className="rounded-[100px] bg-beerus flex justify-center items-center">
        <span className="mt-[6px] ml-3 mr-[17px]">
          <Image src={image1} className="mt-[6px]" alt="Exchange rate" />
        </span>
      </div>
    </div>
    <div>
      <h2 className="text-goten text-sm font-bold mb-5">Awards</h2>
      <ul className="flex items-center flex-wrap lg:flex-nowrap">
        <li className="mr-2">
          <Image src={Curacao} alt="Curacao license" />
        </li>
        <li className="mr-2">
          <Image src={Award1} alt="Award 1" />
        </li>
        <li className="mr-2">
          <Image src={SbcAwards} alt="Award 2" />
        </li>
        <li className="mr-2">
          <Image src={Award2} alt="Award 3" />
        </li>
        <li className="mr-2">
          <Image src={Award3} alt="Award 4" />
        </li>
        <li className="mr-2">
          <Image src={Plus18} alt="18+" />
        </li>
      </ul>
    </div>
  </div>
);
};

export default Footer;