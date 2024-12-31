import React from 'react'
import { FaStar } from 'react-icons/fa6';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from 'react-i18next';

function Testimonial() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" 2xl:pt-[110px] pt-[50px] testimonial mt-[-1px] relative">
      <div className="div-4"></div>
      <div className="lg:custom-container container mx-auto px-[20px] xl:px-0 ">
      <div className='relative z-[1] sm:mb-[65px] mb-[10]'>
    <h2  style={{ fontFamily: "Urbanist, sans-serif" }} className='uppercase font-bold text-center sm:text-[74px] text-[28px] leading-[32px] gradient-text sm:leading-[95px]'>{t('testimonials')}</h2>
    <img src="images/Ellipse 5.png" alt="" className='absolute sm:top-0 sm:left-[30%] top-0 left-6 -z-[1]  w-[35px] sm:w-[100px]'  />
    </div>
    </div>
    <div className="px-[20px] lg:px-0">
<OwlCarousel 
             loop
              center
              items={3}
              autoplay
              autoplayTimeout={2000}
              smartSpeed={450}
              nav={false}
              dots={false}
              responsive={{
                0: {
                  items: 1
                },
                768: {
                  items: 1
                },
                1170: {
                  items: 3
                }
              }}>
    <div class='item '>
    <div className="rounded-2xl">
             <div className="sm:px-[50px] 2xl:px-[80px] px-[29px] pb-[34px] text-center">
             <img src="images/Ellipse 18 (3).png" alt="" className='mx-auto  icon-img' />
             <div className='relative'> 
             <img src="images/noun.png" alt=""  className='absolute -top-3 left-0 '/>
             <h3 className='text-xl fonr-normal leading-[28px] text-white mb-[6px]'>{t('Dianne Russell')}</h3>
             </div>
             <div className="flex gap-3 justify-center items-center mb-[19px]">
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             </div>
             <p className='italic font-normal leadng-[27px] text-[#8F99AC] text-[9px] sm:text-[17px]'>{t('“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate”')}</p>
             </div>
          </div>
    </div>
    <div class='item'>
    <div className="rounded-2xl">
             <div className="sm:px-[50px] 2xl:px-[80px] px-[29px] pb-[34px] text-center">
             <img src="images/Ellipse 18-1.png" alt="" className='mx-auto  icon-img' />
             <div className='relative'> 
             <img src="images/noun.png" alt=""  className='absolute -top-3 left-0 '/>
             <h3 className='text-xl fonr-normal leading-[28px] text-white mb-[6px]'>{t("Kathryn Murphy")}</h3>
             </div>
             <div className="flex gap-3 justify-center items-center mb-[19px]">
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             </div>
             <p className='italic font-normal leadng-[27px] text-[#8F99AC] text-[9px] sm:text-[17px]'>{t("“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate”")}</p>
             </div>
          </div>
    </div>
    <div class='item'>
    <div className="rounded-2xl">
             <div className="sm:px-[50px] 2xl:px-[80px] px-[29px] pb-[34px] text-center">
             <img src="images/Ellipse 18-4.png" alt="" className='mx-auto  icon-img' />
             <div className='relative'> 
             <img src="images/noun.png" alt=""  className='absolute -top-3 left-0 '/>
             <h3 className='text-xl fonr-normal leading-[28px] text-white mb-[6px]'>{t('Courtney Henry')}</h3>
             </div>
             <div className="flex gap-3 justify-center items-center mb-[19px]">
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             <FaStar className='text-[#D3A70B]' />
             </div>
             <p className='italic font-normal leadng-[27px] text-[#8F99AC] text-[9px] sm:text-[17px]'>{t("“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate”")}</p>
             </div>
          </div>
    </div>
 
</OwlCarousel>
    </div>
 </div>
     
    </>
  )
}

export default Testimonial
