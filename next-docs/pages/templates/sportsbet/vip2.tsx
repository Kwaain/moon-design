import React, {ReactNode} from "react";
import {Carousel} from '@heathmont/moon-components';
import {Button} from '@heathmont/moon-core-tw';
import Image from 'next/image';
import AdriaticSea from '../private/AdriaticSea.png';
import Arsenal from '../private/Arsenal.png';
import BackPhoto from '../private/BackPhoto.png';
import VipLounge from '../private/Bitcasino_VIPlounge 1.png';
import Croatia from '../private/croatia.png';
import Detail from '../private/Detail.png';
import Envelope from '../private/Envelope.png';
import Flamengo from '../private/Flamengo.png';
import MagicMan from '../private/magicman.png';
import PastEvents from '../private/PastEvents.png';
import Russia_2018 from '../private/russia-2018.png';
import Russia2018 from '../private/russia2018.png';
import SouthamptonFC from '../private/southamptonFC.png';
import Star from '../private/Star.png';
import Suit from '../private/Suit.png';
import VipLounge2 from '../private/VIPLounge.png';
import WatfordFC from '../private/WatfordFC.png';

interface VipItemProps {
  title: string;
  text: string[];
  icon: any;
  link: {
    label: string;
    url: string;
  }
}

interface Partnership {
  title: string;
  text: string[];
  icon: any;
}

const VipItem = ({title, icon, text, link}: VipItemProps) => {
  return (<div className='w-[330px] h-full bg-[#1A212A] rounded-lg flex flex-col p-2 2xl:w-[390px] xl:w-[335px] lg:w-[400px]'>
      <div className='flex flex-row justify-between items-center mb-8'>
        <Image src={Detail} className='rotate-90'/>
        <Image src={Detail} className='rotate-180'/>
      </div>
      <div className='h-4/5 px-12'>
        <div className='flex items-center justify-center pt-3 pb-4'>
          <Image src={icon} alt={title}/>
        </div>
        <p className='text-moon-20 text-center mb-4 px-3 w-full'>{title}</p>
        <div className='w-full list-disc'>
          {text?.map((text: string) => (
            <p className="text-moon-14 w-full text-center">{text}</p>
          ))}
        </div>
      </div>
      <a
        href={link.url}
        className='text-moon-14 text-raditz text-center mt-4 -mb-4 px-3 w-full'
      >{link.label}</a>
      <div className='flex flex-row justify-between items-center mb-0'>
        <Image src={Detail}/>
        <Image src={Detail} className='rotate-[260deg]'/>
      </div>
    </div>);
};
const PartnershipItems = ({title, icon, text}: Partnership) => {
  return (
    <div className='w-[275px] bg-gohan rounded-lg flex flex-col p-3 mt-8 '>
      <div className='flex flex-row justify-between items-center'>
        <Image src={Detail} className='rotate-90'/>
        <Image src={Detail} className='rotate-180'/>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <div className='bg-goku flex items-center justify-center w-[116px] h-[116px] rounded-full'>
          <Image src={icon} alt={title} className='mb-2'/>
        </div>
        <p className='text-moon-20 font-semibold text-center w-full pt-3'>{title}</p>
        <div className='w-full list-disc pl-2 pt-2'>
          {text?.map((text: string) => (
            <p className="text-moon-12 text-raditz text-center w-full">{text}</p>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-between items-center'>
        <Image src={Detail}/>
        <Image src={Detail} className='rotate-[260deg]'/>
      </div>
    </div>);
};

const Vip = () => {
  const VipClub = [
    {
      icon: Star,
      title: 'Unique offers, rewards and VIP promotions',
      text: ['From cashback to rebate, free spins, leaderboards, and more - we have you covered!'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Suit,
      title: 'VIP Manager',
      text: ['Personalised attention from one of the individuals below, who will always go the extra mile to meet your gaming needs and desires.'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Envelope,
      title: 'Invitations to prestigious events',
      text: ['Wheather it’s Bali or the Adriatics coast, travel the world with Bitcasino'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Star,
      title: 'Unique offers, rewards and VIP promotions',
      text: ['From cashback to rebate, free spins, leaderboards, and more - we have you covered!'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Suit,
      title: 'VIP Manager',
      text: ['Personalised attention from one of the individuals below, who will always go the extra mile to meet your gaming needs and desires.'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    },
    {
      icon: Envelope,
      title: 'Invitations to prestigious events',
      text: ['Wheather it’s Bali or the Adriatics coast, travel the world with Bitcasino'],
      link: {
        label: 'Learn more',
        url: 'https://google.com'
      }
    }
  ];
  const Partnership = [
    {
      icon: Arsenal,
      title: 'Arsenal FC',
      text: ['English Premiere League']
    },
    {
      icon: SouthamptonFC,
      title: 'Southampton FC',
      text: ['English Premiere League']
    },
    {
      icon: Flamengo,
      title: 'Flamengo',
      text: ['Campeonato Brasileiro']
    },
    {
      icon: WatfordFC,
      title: 'Watford FC',
      text: ['English Premiere League']
    },
    {
      icon: Arsenal,
      title: 'Arsenal FC',
      text: ['English Premiere League']
    },
    {
      icon: SouthamptonFC,
      title: 'Southampton FC',
      text: ['English Premiere League']
    },
    {
      icon: Flamengo,
      title: 'Flamengo',
      text: ['Campeonato Brasileiro']
    },
    {
      icon: WatfordFC,
      title: 'Watford FC',
      text: ['English Premiere League']
    }
  ];
  const Testimonials = [
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have played at so many other online casinos and there is always something missing, either a rigged software or a very, very and I repeat very delayed payout. One of the things I love about Bitcasino.io is an instant payout ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have played at so many other online casinos and there is always something missing, either a rigged software or a very, very and I repeat very delayed payout. One of the things I love about Bitcasino.io is an instant payout ...',
      name: 'Zyn*****'
    },
    {
      text: 'I have been in love and hate relation- ship with Bitcasino.io for a good period of time and I must rephrase my self and it\'s mostly love and thanks to my host Mia, who is all ways there on behalf of casino as ...',
      name: 'Zyn*****'
    }
  ];
  const Events = [
    {
      heroImage: AdriaticSea,
      backImage: BackPhoto,
      title: 'Getaways in Adriatic Sea',
      text: 'Entry to this exclusive club is by invitation only. The best way to get an invite is to keep on playing and we will alert you when you have reached the top tier of our Loyalty System.',
      link: {
        label: 'Learn more',
        url: 'https:/google.com'
      }
    },
    {
      heroImage: AdriaticSea,
      backImage: BackPhoto,
      title: 'Another Awesome Event',
      text: 'Entry to this exclusive club is by invitation only. The best way to get an invite is to keep on playing and we will alert you when you have reached the top tier of our Loyalty System.',
      link: {
        label: 'Learn more',
        url: 'https:/google.com'
      }
    }
  ];

  const EventsMobile = [
    {
      mainImage: Croatia,
      leftImage: Russia2018,
      rightImage: Russia_2018,
      title: '16 photos',
      text: 'Getaways in Adriatic Sea'
    },
     {
      mainImage: Croatia,
      leftImage: Russia2018,
      rightImage: Russia_2018,
      title: '16 photos',
      text: 'Getaways in Adriatic Sea'
    }
  ]

  return (<div className='flex flex-col sm:px-[10%] sm:py-20 sm:w-full'>
    <div className='max-w-full sm:relative'>
      <div className='flex flex-col max-w-full px-12 mb-6 z-10000 left-12 bottom-16 sm:w-[500px] sm:mb-0 sm:pb-0 sm:mt-[5%] sm:absolute'>
        <p className='mt-6 text-center text-moon-24 text-raditz lg:mt-[70px] lg:text-moon-24 sm:text-moon-18  sm:text-left'>Username</p>
        <p className='text-moon-32 text-center p-4 xl:text-moon-56 lg:text-moon-32 md:text-moon-24 sm:text-moon-16 sm:font-semibold sm:text-left sm:p-0 lg:mb-[17px] sm:mb-[1px]'>
          Take your seat in the VIP club
        </p>
        <p className='w-full text-moon-18 text-center px-3 pt-2 sm:text-moon-14 sm:text-left sm:p-0'>
          Precisely what you imagined your
          <span className='text-raditz'> VIP Experience</span> could be,
          <span className='sm:underline sm:decoration-[#D9BFA4] sm:decoration-1'> only more. </span>
        </p>
      </div>
      <div>
        <div className='sm:hidden'>
          <Image src={VipLounge}/>
        </div>
        <div className='hidden sm:inline'>
          <Image src={VipLounge2} sizes={'100%'}/>
        </div>
      </div>
    </div>
  
      <div className='w-full flex flex-col max-w-[100vw] overflow-hidden items-center justify-center py-8 px-6 sm:px-0 sm:py-0  sm:pl-0  '>
        <Carousel
          selectedIndex={0}
          hideScrollbar={true}
          items={VipClub.map((item) => (<VipItem
            title={item.title}
            text={item.text}
            icon={item.icon}
            link={item.link}
          />))}
        />
      
    </div>

    <div className=' mt-8'>
      <div className='flex flex-row justify-center items-center -mb-16 rounded-full h-8 bg-gohan md:w-[34%] sm:w-[50%] '>
        <div className='w-[50%] h-[90%] ml-0.5 flex justify-center items-center rounded-full bg-goku'>
          <p className='text-moon-14 xl:text-moon-14 md:text-moon-12 text-center text-raditz sm:text-moon-10 cursor-pointer'>
            Past events
          </p>
        </div>
        <p className='w-2/4 text-trunks text-moon-14 text-center xl:text-moon-14 md:text-moon-12 sm:text-moon-10 cursor-pointer'>
          Upcoming events
        </p>
      </div>

      <div className=' hidden overflow-hidden  xl:w-[1050px] lg:w-[900px] md:block md:w-[100%] sm:block '>
        <Carousel
          selectedIndex={0}
          hideScrollbar={true}
          items={Events.map((item) => (<div className='w-[500px] mt-24 lg:min-w-[1050px] sm:min-w-[-5%] relative '>
            <div className='lg:w-[80%] lg:h-[70%] sm:w-[55%] sm:h-[45%] '>
               <Image src={item.heroImage} sizes={'100%'}/>
             </div>
             <div className=' 2xl:translate-y-[-5%] md:w-[30%] md:h-[100%] sm:absolute sm:top-[-30px] sm:right-[10%] '>
               <Image src={item.backImage} sizes={'100%'} className='rounded-lg '/>
             </div>
             <div className='flex flex-col sm:absolute rounded-[12px] bg-[#1A212A] z-10000 lg:h-[70%] lg:w-[30%] sm:top-[-10px] sm:right-[15%] sm:h-[100%] sm:w-[35%]   2xl:translate-y-[-5%]   '>
              <div className='flex flex-row justify-between items-center m-2'>
                <Image src={Detail} className='rotate-90'/>
                <Image src={Detail} className='rotate-180'/>
              </div>
              <div className='flex flex-col items-left px-10 xl:justify-end shrink basis-full sm:justify-center sm:items-center '>
                <div>
                  <p className='md:text-left xl:text-moon-32 lg:text-moon-24 mb-4 sm:text-center'>
                    {item.title}
                  </p>
                  <p className='hidden xl:flex xl:text-moon-14 lg:text-moon-12 opacity-80 mb-4 xl'>
                    {item.text}
                  </p>
                  <a href={item.link.url} className='text-[#D9BFA4] text-moon-14 md:text-left sm:text-center'>{item.link.label}</a>
                </div>
              </div>
              <div className='flex flex-row m-2 justify-between items-center'>
                <Image src={Detail}/>
                <Image src={Detail} className='rotate-[260deg]'/>
              </div>
            </div>
         
         </div>))}
        />
      </div>
    </div>

    <div className='w-[100%] sm:hidden'>
      <Carousel 
          selectedIndex={0}
          hideScrollbar={true}
          items={EventsMobile.map((item) => (<div className="overflow-hidden w-[100%] min-w-[400px] max-w-[400px] h-[100%] mt-12"> 
              <div className="flex justify-between ">
               <span className="mr-[5%] "> <Image src={item.leftImage}  className='rounded-r-xl' /></span>
               <span className="relative"> 
                <Image src={item.mainImage} className='rounded-xl'/> 
                <span className="absolute left-[5%] bottom-8">
                  <p className="text-moon-14 font-medium">{item.title}</p>
                  <p className="text-moon-24 font-semibold"> {item.text}</p>
                </span>
                </span>
               <span className="ml-[5%]">
                <Image src={item.rightImage} className='rounded-l-xl'/> 
              </span>
              </div>
          </div> ))}/>
    </div>

    <div className='hidden mt-12 sm:block'>
      <p className='text-center pt-4 text-moon-32 font-semibold sm:pl-0'>Partnership</p>
      <div className=' md:mx-12 xl:w-[100%] lg:w-[100%] sm:mx-0 mr-0'>
        <Carousel
          scrollTo={0}
          hideScrollbar={true}
          items={Partnership.map((item) => (<PartnershipItems
            title={item.title}
            text={item.text}
            icon={item.icon}
          />))}
        />
      </div>
      <div className='mt-12 px-12'>
        <div className='flex flex-row items-center mt-6 mb-4 rounded-full h-8 bg-gohan md:w-[40%] sm:w-[45%] '>
          <div className='w-2/4 h-5/6 ml-0.5 rounded-full bg-goku'>
            <p className='text-moon-14 text-center text-raditz'>Football clubs</p>
          </div>
          <p className='w-2/4 text-trunks text-moon-14 text-center'>Ambassadors</p>
        </div>
      </div>
    </div>
    <p className='text-moon-32 px-5 mt-12 text-center sm:pl-0 sm:px-0'>Here’s what our customers say about being a VIP</p>
  
      <div className='w-[350] flex flex-col max-w-[100vw] items-center justify-center px-5 py-8 sm:pl-0 xl:pl-[10%] lg:pl-0 md:pl-0'>
        <Carousel
          scrollTo={0}
          hideScrollbar={true}
          items={Testimonials.map((item) => (
            <div className='w-[330px] h-full bg-[#1A212A] rounded-lg flex flex-col p-2 xl:w-[345px] lg:w-[330px]' >
              <div className='flex flex-row justify-between items-center'>
              <Image src={Detail} className='rotate-90' />
              <Image src={Detail} className='rotate-180' />
            </div>
            <div className='h-4/5 shrink basis-full'>
                <div className='flex items-center justify-center pt-3 pb-4 px-16 '>
                  {item.text}
                </div>
                <p className='text-moon-16 text-left mb-4 w-full px-16'>{item.name}</p>
              </div><div className='flex flex-row justify-between items-center '>
                <Image src={Detail} />
                <Image src={Detail} className='rotate-[260deg]' />

              </div>
              </div>))}
        />
      </div>
     
      <div className=' flex flex-col mx-12 sm:flex-row sm:py-20 sm:top-0 sm:items-center xl:pl-[7%] md:pl-0 sm:pl-[0%]'>
        <div className='flex flex-col max-w-full mt-6 sm:mr-12 sm:w-[600px] sm:justify-center '>
          <p className='text-center text-moon-24 sm:text-left sm:text-moon-32 sm:font-semibold'>How to become a VIP ?</p>
          <p className='text-moon-16 text-center p-2 sm:text-left sm:pl-0 sm:opacity-80 sm:pt-[12px]'>
            Entry to this exclusive club is by invitation only. The best way
            to get an invite is to keep on playing and we will alert you when you have reached the top tier of our
            <span className='text-raditz'> Loyalty System</span>
          </p>
          <p className='text-moon-16 text-center px-3 pt-2 sm:text-left sm:pl-0 sm:opacity-80'>
            Think you have what it takes? Ready to take things to the next level?
            <span className='text-raditz'> Don’t delay</span>
          </p>
          <Button className='mt-6 mx-5 mb-4 rounded-full h-12 bg-[#49B356] xl:w-[37%] lg:w-[55%] md:w-full sm:ml-0 sm:[100%]'>
            Create your account now!
          </Button>
        </div>
        <div className='hidden sm:inline'>
          <Image src={MagicMan}/>
        </div>
      </div>
    
  </div>);
}

Vip.getLayout = function getLayout(page: ReactNode) {
  return (<div className='w-full min-h-screen sb-dark bg-goku text-white'>{page}</div>);
};

export default Vip;
