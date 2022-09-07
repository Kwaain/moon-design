import React, { ReactNode, useEffect, useState } from 'react';
import { Button } from '@heathmont/moon-core-tw';
import Image from 'next/image';
import CTA from '../../../components/templates/cta';
import Experience from '../../../components/templates/experience';
import Explore from '../../../components/templates/explore';
import Family from '../../../components/templates/family';
import Header from '../../../components/templates/header';
import Headline from '../../../components/templates/headline';
import LayoutSportsbet from '../../../components/templates/layout-sportsbet';
import Social from '../../../components/templates/social';
import Subtitle from '../../../components/templates/subtitle';
import Title from '../../../components/templates/title';
import SportsbetLogo from '../../../public/templates/sportsbet/logo.png';
import { experienceItems, exploreItems } from '../../../components/templates/templates-sportsbet/carouselItems';
import SeoSection from '../../../components/templates/templates-sportsbet/seoSection';
import Footer from '../../../components/templates/templates-sportsbet/footer';
import Hero from '../../../components/templates/templates-sportsbet/heroSportsbet';

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
    <div className="w-full flex flex-col grow overflow-hidden">
      <Header
        height={30}
        isScrolled={isScrolled}
        logo={
          <div className="mt-2">
            <Image src={SportsbetLogo} alt="Logo" />
          </div>
        }
      />
      <Hero
        headline={
          <Headline
            text="Sportsbet VIP: For money can’t buy experiences"
            classes="break-words sm:px-0 "
          />
        }
        subtitle={
          <Subtitle
            classes="break-words items-center mt-3 sm:px-0 sm:text-left sm:text-[18px] sm:leading-6 md:text-[24px] md:leading-8"
            text="Join the VIP Bitcasino Club - An exclusive world of crypto leaders and high-rollers who dare to take risks and enjoy life to its fullest."
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
        heroImage={
          <div
            className="w-full h-full bg-contain bg-bottom bg-no-repeat min-w-[100vw] min-h-[40vh] sm:min-w-[44vw] sm:min-h-[auto]"
            style={{
              backgroundImage: 'url(/templates/sportsbet/ambasadors.png)',
            }}
          />
        }
        bottomGradient="linear-gradient(rgba(35, 42, 51, 0) 0%, rgba(35, 42, 51, 0.8) 49.48%, rgba(35, 42, 51, 0.95) 100%)"
      />
      <div className="flex flex-col items-center self-center mt-[264px] sm:w-full sm:mt-[124px]">
        <Experience
          title={
            <Title
              text="A VIP experience tailored to your liking"
              classes="w-[380px] leading-10 mb-4 sm:mb-0 xl:w-[944px] sm:w-[600px] sm:leading-0 md:flex-wrap"
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
          carouselItemBackground="gohan"
        />

        <div className="mt-[6] sm:mt-[70px] md:w-[80%] lg:mt-[200px] xl:w-[1136px]">
          <Explore
            title={
              <Title
                text="Explore the world in true VIP style!"
                classes="mb-4 text-center leading-10 sm:pl-0 sm:leading-0 xl:text-left"
              />
            }
            subtitle={
              <Subtitle
                classes="text-center px-5 sm:px-0 xl:text-left"
                text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
              />
            }
            carouselItems={exploreItems}
            carouselItemBackground="gohan"
          />
        </div>
        <Family
          title={
            <Title
              text="VIP runs in the family"
              classes="mb-4 leading-10 sm:text-center md:text-left md:self-start lg:w-[420px] xl:w-[510px]"
            />
          }
          subtitle={
            <Subtitle
              classes="text-center w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%] md:text-left md:self-start lg:w-[420px] xl:w-[510px]"
              text="Sportsbet has legendary athletes in our VIP club. Join our high
              profile community of crypto leaders and high-rollers!"
            />
          }
          image="/templates/sportsbet/partnership.png"
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
            title="Stay connected with us via social media"
            onClick={(social: string) => console.log(`Social link - ${social}`)}
          />
        </div>
      </div>
      <div className="flex flex-col m-auto sm:w-[80%] sm:mt-[124px] lg:w-[90%] xl:w-[1136px]">
        <SeoSection/>
        <Footer />
      </div>
    </div>
  );
};

Vip.getLayout = function getLayout(page: ReactNode) {
  return (
    <LayoutSportsbet
      sidebar={
        <div className="w-full h-full p-5">
          <Image src={SportsbetLogo} alt="Logo" />
        </div>
      }
    >
      <Vip />
    </LayoutSportsbet>
  );
};

export default Vip;
