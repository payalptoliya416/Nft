import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function Member() {  
      const [isAnimating1, setIsAnimating1] = useState(false);
      const [isAnimating2, setIsAnimating2] = useState(false);
      const [isAnimating3, setIsAnimating3] = useState(false);
    
      const handleMouseEnter = (boxNumber) => {
        if (boxNumber === 1) {
          setIsAnimating1(true);
        } else if (boxNumber === 2) {
          setIsAnimating2(true);
        } else if (boxNumber === 3) {
          setIsAnimating3(true);
        }
      };
    
      const handleMouseLeave = (boxNumber) => {
        if (boxNumber === 1) {
          setIsAnimating1(false);
        } else if (boxNumber === 2) {
          setIsAnimating2(false);
        } else if (boxNumber === 3) {
          setIsAnimating3(false);
        }
      };
      const { t } = useTranslation();
  return (
    <>
       <div className="2xl:py-[109px] lg:py-[90px] sm:py-[70px] pt-[20px] sm:pt-[90px]  mt-[-1px] relative ">
       <div className=" lg:custom-container container mx-auto px-[20px] xl:px-0 ">
             <h2 style={{ fontFamily: "Urbanist, sans-serif"}} className=" uppercase gradient-text font-bold sm:text-[74px] text-[28px] sm:leading-[120px] mb-[25px]  text-center leading-[28px]">{t("Become a nft member")}</h2>
             <p className='sm:text-xl text-xs leading-[20px] font-normal sm:leading-10 mb-[55px] text-center text-[#5F6E8A] w-full sm:max-w-[70%] mx-auto'>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")}</p>
             <div className="grid grid-cols-12 sm:gap-10">
             <div className={`lg:col-span-4 sm:col-span-6 col-span-12 gradient-border-member hover:after:border-hidden  py-[15px] px-[22px]  bg-[#0B0A15] bg-opacity-[18%] flex flex-col justify-center items-center relative after:absolute  after:w-full after:h-0 hover:after:h-full after:top-0 after:left-0 after:transition-all after:duration-[0.8s]  box mb-[25px] overflow-hidden sm:mb-0 z-[1] after:z-[-1] transition-all duration-500 ${isAnimating1 ? 'animate' : ''}`}  onMouseEnter={() => handleMouseEnter(t("1"))}
              onMouseLeave={() => handleMouseLeave(t("1"))}>
                   <h4 className='sm:mb-[15px] mb-[11px] text-white text-[26px] font-medium sm:w-[75px] sm:h-[75px] w-[58px] h-[58px] flex justify-center items-center rounded-full gradiunt-border relative after:rounded-full'>1</h4>
                   <h5 className='sm:text-2xl text-lg text-normal leading-10 mt-[15px] text-white sm:mb-5 mb-[14px] text-center'>{t("Scarcity and membership NFTS")}</h5>
                   <p className='text-[#8F99AC] sm:text-lg text-xs font-normal leading-[26px] text-center' >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.")}</p>
                  </div>
             <div className={`lg:col-span-4 sm:col-span-6 col-span-12 gradient-border-member hover:after:border-hidden  py-[15px] px-[22px]  bg-[#0B0A15] bg-opacity-[18%] flex flex-col justify-center items-center relative after:absolute  after:w-full after:h-0 hover:after:h-full after:top-0 after:left-0 after:transition-all after:duration-[0.8s] overflow-hidden box mb-[25px]  sm:mb-0 z-[1] after:z-[-1] ${isAnimating2 ? 'animate' : ''}`}   onMouseEnter={() => handleMouseEnter(t("2"))}
              onMouseLeave={() => handleMouseLeave(t("2"))}>
                   <h4 className='sm:mb-[15px] mb-[11px] text-white text-[26px] font-medium sm:w-[75px] sm:h-[75px] w-[58px] h-[58px] flex justify-center items-center rounded-full gradiunt-border relative after:rounded-full'>2</h4>
                   <h5 className='sm:text-2xl text-lg text-normal leading-10 mt-[15px] text-white sm:mb-5 mb-[14px] text-center'>{t("But wait! Hurdles to consider")}</h5>
                   <p className='text-[#8F99AC] sm:text-lg text-xs font-normal leading-[26px] text-center' >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.")}</p>
                  </div>
             <div className={`lg:col-span-4 sm:col-span-6 col-span-12 gradient-border-member hover:after:border-hidden  py-[15px] px-[22px]  bg-[#0B0A15] bg-opacity-[18%] flex flex-col justify-center items-center relative after:absolute  after:w-full after:h-0 hover:after:h-full after:top-0 after:left-0 after:transition-all after:duration-[0.8s] overflow-hidden box mb-[25px]  sm:mb-0 z-[1] after:z-[-1] ${isAnimating3 ? 'animate' : ''}`}   onMouseEnter={() => handleMouseEnter(t("3"))}
              onMouseLeave={() => handleMouseLeave(t("3"))}>
                   <h4 className='sm:mb-[15px] mb-[11px] text-white text-[26px] font-medium sm:w-[75px] sm:h-[75px] w-[58px] h-[58px] flex justify-center items-center rounded-full gradiunt-border relative after:rounded-full'>3</h4>
                   <h5 className='sm:text-2xl text-lg text-normal leading-10 mt-[15px] text-white sm:mb-5 mb-[14px] text-center'>{t("Selling NFT membership tokens")}</h5>
                   <p className='text-[#8F99AC] sm:text-lg text-xs font-normal leading-[26px] text-center' >{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.")}</p>
                  </div>
                 
            </div>
       </div>
       </div>
    </>
  )
}

export default Member
