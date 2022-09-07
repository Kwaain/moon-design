import React, { ReactNode, useEffect, useState } from 'react';
import { Button} from '@heathmont/moon-core-tw';
import Image from 'next/image';
import CTA from '../../../components/templates/cta';
import Experience from '../../../components/templates/experience';
import Explore from '../../../components/templates/explore';
import Family from '../../../components/templates/family';
import Header from '../../../components/templates/header';
import Headline from '../../../components/templates/headline';
import Hero from '../../../components/templates/hero';
import LayoutBitcasino from '../../../components/templates/layout-bitcasino';
import Social from '../../../components/templates/social';
import Subtitle from '../../../components/templates/subtitle';
import Title from '../../../components/templates/title';
import KingKaka from '../../../public/templates/bitcasino/kingKaka.png';
import BitcasinoLogo from '../icons/bitcasino-logo';
import SeoSection from '../../../components/templates/templates-bitcasino/seoSection';
import Footer from '../../../components/templates/templates-bitcasino/footer';
import { experienceItems, exploreItems } from '../../../components/templates/templates-bitcasino/carouselItems';

const Vip = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const toggleHeaderBackground = (e: Event) => {
      setIsScrolled(window.scrollY >= 30);
    };

    window.addEventListener('scroll', toggleHeaderBackground);

    return () => {
      window.removeEventListener('scroll', toggleHeaderBackground);
    };
  }, []);

  return (
    <div className="w-full flex flex-col grow overflow-hidden  sm:p-0">
      <Header height={30} isScrolled={isScrolled} logo={<BitcasinoLogo />} />
      <Hero
        headline={
          <Headline
            text="Bitcasino VIP: For money can’t buy experiences!"
            classes="break-words sm:px-0 "
          />
        }
        subtitle={
          <Subtitle
            classes="break-words items-center mt-3 sm:px-0 sm:text-left sm:text-[18px] sm:leading-6 md:text-[24px] md:leading-8"
            text=" Join the VIP Bitcasino Club - An exclusive world of crypto leaders
                and high-rollers who dare to take risks and enjoy life to its
                fullest."
          />
        }
        button={
          <Button
            variant="primary"
            width={124}
            height={48}
            className="btn-primary py-3 px-4 gap-1 text-moon-16 rounded-moon-i-sm mx-3 my-6 sm:mx-0 sm:px-0 sm:self-start w-full sm:w-[124px] "
          >
            Sign up now
          </Button>
        }
        wrapperClasses="sm:bg-[url('/templates/bitcasino/pattern.png')]"
        heroImage={
          <Image
            src={KingKaka}
            objectFit="contain"
            alt="Bitcasino VIP: For money can’t buy experiences!"
          />
        }
        bottomGradient="linear-gradient(180deg, rgba(36, 3, 63, 0)  0%, rgba(36, 3, 63, 0.55)  49.48%, #24033F 100%"
      />
      <div className="flex flex-col items-center self-center mt-[264px] sm:mt-[124px]">
        <Experience
          title={
            <Title
              text="A VIP experience tailored to your liking"
              classes="
              w-[380px] leading-10 mb-4 sm:mb-0 xl:w-[944px] sm:w-[600px] sm:leading-0 md:flex-wrap"
            />
          }
          subtitle={
            <Subtitle
              classes="w-[348px] p-5 lg:w-[700px] sm:w-[650px] sm:p-0 sm:pt-4"
              text="Enjoy exclusive bonuses and invites to prestigious events for free.
              Get all your indulgences taken care of."
            />
          }
          carouselItems={experienceItems}
        />
        <div className="mt-[6] sm:mt-[70px] sm:px-8 md:mt-[120px] xl:mt-[200px]">
          <Explore
            title={
              <Title
                text="Explore the world in true VIP style!"
                classes="mb-4 text-center leading-10 sm:pl-0 sm:leading-0 md:flex-wrap xl:text-left"
              />
            }
            subtitle={
              <Subtitle
                classes="text-center px-5 sm:px-0 xl:text-left"
                text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
              />
            }
            carouselItems={exploreItems}
          />
        </div>
        <Family
          title={
            <Title
              text="VIP runs in the family"
              classes="mb-4 leading-10 sm:text-center md:text-left md:self-start lg:w-[510px]"
            />
          }
          subtitle={
            <Subtitle
              classes="text-center w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%] md:text-left md:self-start lg:w-[510px]"
              text="From artists to visionaries, Bitcasino has the most talented individuals in our VIP club. Join our high profile group of crypto leaders and high-rollers!"
            />
          }
          image="/templates/bitcasino/partnership.png"
        />
        <CTA
          title={
            <Title
              text="Ready to step up the game?"
              classes="mb-4 p-5 leading-10"
            />
          }
          subtitle={
            <Subtitle
              text="Entry into our VIP Club is by invitation only. Get in touch with us
            to see what a tailored VIP package could look like for you. Join the
            family now!"
              classes="w-[100%] mb-4 p-5"
            />
          }
          handleSignup={() => console.log('SIGN UP clicked')}
          handleContact={() => console.log('CONTACT clicked')}
        />
        <div className="mt-[70px] sm:mt-[88px]">
          <Social
            title="Join us and talk to us"
            onClick={(social: string) => console.log(`Social link - ${social}`)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center h-full px-5 mt-16 sm:w-[100%] sm:mt-[124px] md:w-[90%] lg:self-center xxl:w-[1232px]">
        <SeoSection/>
        <Footer />
      </div>
    </div>
  );
};

Vip.getLayout = function getLayout(page: ReactNode) {
  return (
    <LayoutBitcasino
      sidebar={
        <div className="w-full h-full p-5">
          <BitcasinoLogo />
        </div>
      }
    >
      <Vip />
    </LayoutBitcasino>
  );
};

export default Vip;
