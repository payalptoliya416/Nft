import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
   const { t } = useTranslation();
  return (
    <>
    <div className="bg-[#0e121c] sm:pt-[110px] pt-[40px] mt-[-1px] overflow-hidden">
       <div className="lg:custom-container container mx-auto px-[20px] xl:px-0">
        <div className="grid grid-cols-12 pb-[46px]">
           <div className="xl:col-span-4 lg:col-span-3 sm:col-span-6 col-span-12 mb-[30px] sm:mb-0">
            <img src="images/logo.png" alt=""  className='sm:mb-[35px] mx-auto sm:mx-0 mb-[15px]'/>
            <p className='sm:text-lg font-normal sm:leading-[32px] sm:mb-[40px] text-[#8F99AC] w-full max-w-[410px] text-center sm:text-left text-[12px] leading-[20px] mb-[30px]'>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.")}</p>
            <ul className="flex gap-4 justify-center sm:justify-start">
                <li className='flex justify-center items-cener p-[12px] bg-[#181F2D] rounded-full'><FaFacebookF className='text-white' /></li>
                <li className='flex justify-center items-center p-[12px] bg-[#181F2D] rounded-full'><FaInstagram  className='text-white' /></li>
                <li className='flex justify-center items-center p-[12px] bg-[#181F2D] rounded-full'><FaLinkedinIn  className='text-white' /></li>
                <li className='flex justify-center items-center p-[12px] bg-[#181F2D] rounded-full'><FaTwitter  className='text-white' /></li>
            </ul>
           </div>
           <div className="xl:col-span-2 lg:col-span-3 sm:col-span-6 col-span-12 text-center sm:text-left">
           <h3 className='sm:text-[25px] mb-[15px] leading-[32px] font-semibold text-white sm:b-[35px] text-lg'>{t("Product")}</h3>
            <ul className='flex justify-center gap-10 sm:flex-col sm:gap-0'>
            <div>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] font-normal leading-[2px] text-[#8F99AC] '>{t("Features")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Integration")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500  sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Docs")}</Link></li>
            </div>
            <div>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Store")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t('Marketplace')}</Link></li>
               <li className='sm:mb-[0px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t('Download')}</Link></li>
            </div>
            </ul>
           </div>
           <div className="lg:col-span-3 sm:col-span-6 col-span-12 ps-5 text-center sm:text-left" >
           <h3 className='sm:text-[25px] mb-[15px] leading-[32px] font-semibold text-white sm:b-[35px] text-lg'>{t("Company")}</h3>
            <ul className='flex justify-center gap-10 sm:flex-col sm:gap-0'>
            <div>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Home")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t('About us')}</Link></li>
            </div>
            <div>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Artwork")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t('Contact')}</Link></li>
            </div>
            </ul>
           </div>
           <div className="lg:col-span-3 sm:col-span-6 col-span-12 text-center sm:text-left">
           <h3 className='sm:text-[25px] mb-[15px] leading-[32px] font-semibold text-white sm:b-[35px] text-lg'>{t("Resources")}</h3>
            <ul className='flex justify-center gap-10 sm:flex-col sm:gap-0'>
            <div>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Developer")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("API")}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("QAI")}</Link></li>
            </div>
            <div>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t('Terms of service')}</Link></li>
               <li className='sm:mb-[30px] mb-[20px]'><Link className='hover:text-[#3181FE] transition-all duration-500 sm:text-xl text-[14px] leading-[14px] font-normal sm:leading-[22px] text-[#8F99AC] '>{t("Policy")}</Link></li>         
            </div>
                  </ul>
           </div>
        </div>
        <div className="text-center border-t py-[40px] border-[#283043]">
         <h4 className='text-white text-[22px] leading-[32px] font-normal'>{t("@Copyright All Rights Reserved by")} </h4>
        </div>
       </div>
    </div>  
    </>
  )
}

export default Footer
