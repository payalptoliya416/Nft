import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 575);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const [isNavbarOpen, setIsNavbarOpen] = useState(false);

const toggleNavbar = () => {
  setIsNavbarOpen(!isNavbarOpen);
};
const { t } = useTranslation(); 
const [language, setLanguage] = useState(""); 
useEffect(() => {
  setLanguage(i18n.language || "en"); 
}, []);
const handleLanguageChange = (e) => {
  const newLanguage = e.target.value;
  setLanguage(newLanguage);
  i18n.changeLanguage(newLanguage); 
};
  return (
    <>
      <nav className="bg-[#192234] z-[99999]">
       <div className='lg:custom-container container mx-auto md:py-[35px] py-[25px]'>
           <div className="flex justify-between items-center gap-10 relative">
           <div>
           <Link to='/'><img src="images/logo.png" alt="" className='md:w-36 lg:w-full w-[100px]' /></Link>
           </div>
           {
            isMobile ? (
             <>
             <div className="">
           <img src="images/Frame.png" alt="" onClick={toggleNavbar}/>
           {
            isNavbarOpen && (
              <><div className={`bg-headercolor  min-[400px] w-[370px] z-[9999] max-[768px] fixed h-[300px]  rounded-md  ${isNavbarOpen ? 'h-[340px]' : 'h-0'}`}>
           <div className='flex xl:gap-12 gap-7 flex-col justify-center items-center pt-5'>
           <Link className='lg:text-[26px] font-normal leading-10 text-white text-[22px]'>Home</Link>
           <Link className='lg:text-[26px] font-normal leading-10 text-white text-[22px]'>About</Link>
           <Link className='lg:text-[26px] font-normal leading-10 text-white text-[22px]'>Artwork</Link>
           <Link className='lg:text-[26px] font-normal leading-10 text-white text-[22px]'>Contact</Link>
           <select className='lg:text-[26px] font-normal leading-10 text-white text-[22px]' id="language-select" value={language} onChange={handleLanguageChange}>
           <option value="en">English</option>
           <option value="ru">Russion</option>
           </select>
           
           </div>
            <button className='xl:py-4 xl:px-16 lg:px-10 py-2 px-4  rounded-full font-normal xl:text-[26px] lg:text-xl text-base text-white hover:border-0 lg:leading-10 header-btn gradiunt-border relative after:rounded-full mx-auto my-0 flex mt-5'>Shop NFT </button>
             </div>
              </>
            )
           }
           </div>
             </>
            ) : (
                <>
                <div className='flex xl:gap-12 gap-7 '>
           <Link className='lg:text-[26px] font-normal leading-10  text-[#A456FF] text-[22px] relative after:absolute after:content-[""]  after:w-full  after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-l from-blue-500 to-purple-800 after:transition-all after:duration-[0.5s] transition-all duration-[0.5s]'> {t("Home")}</Link>
           <Link className='lg:text-[26px] font-normal leading-10 text-white  hover:text-[#A456FF] text-[22px] relative after:absolute after:content-[""] after:w-0 hover:after:w-full  after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-l from-blue-500 to-purple-800 after:transition-all after:duration-[0.5s] transition-all duration-[0.5s]'>{t("About")} </Link>
           <Link className='lg:text-[26px] font-normal leading-10 text-white  hover:text-[#A456FF] text-[22px] relative after:absolute after:content-[""] after:w-0 hover:after:w-full  after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-l from-blue-500 to-purple-800 after:transition-all after:duration-[0.5s] transition-all duration-[0.5s]'>{t('Artwork')}</Link>
           <Link className='lg:text-[26px] font-normal leading-10 text-white  hover:text-[#A456FF] text-[22px] relative after:absolute after:content-[""] after:w-0 hover:after:w-full  after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-l from-blue-500 to-purple-800 after:transition-all after:duration-[0.5s] transition-all duration-[0.5s]'>{t("Contact")}</Link>
        
           <select id="language-select" value={language} onChange={handleLanguageChange} className='bg-transparent focus:border-none focus:outline-none lg:text-[26px] font-normal leading-10 text-white  hover:text-[#A456FF] text-[22px] relative after:absolute after:content-[""] after:w-0 hover:after:w-full  after:h-[2px] after:bottom-0 after:left-0 after:bg-gradient-to-l from-blue-500 to-purple-800 after:transition-all after:duration-[0.5s] transition-all duration-[0.5s]'>
            <option value="en">English</option>
            <option value="ru">Russion</option>
          </select>
           </div>
           <div>
            <button className='xl:py-4 xl:px-16 lg:px-10 py-2 px-4  rounded-full font-normal xl:text-[26px] lg:text-xl text-base text-white hover:border-0 lg:leading-10 header-btn gradiunt-border relative after:rounded-full transition-all duration-[0.5s]'> {t("Shop NFT")} </button>
           </div>
                </>
            )
           }
           </div>
         
       </div>
      </nav>
    </>
  )
}

export default Header
