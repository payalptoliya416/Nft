import { t } from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const data = [
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price:"2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/mask1.png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (8).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (13).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (14).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (15).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (16).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (17).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (18).png"
    },
];
const Data2 = [
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (19).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (20).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (21).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (22).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (23).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (24).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (25).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (26).png"
    },
];
const Data3 = [
  
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (22).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (23).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (24).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (25).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (26).png"
    },
];
const Data4 = [
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (19).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/mask1.png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (8).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (13).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (14).png"
    },
];
const Data5 = [
   
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (23).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (24).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (25).png"
    },
    {
        id: 1,
        name: "The Dori Samurai",
        button: "#123",
        price: "2.23 $",
        lastSale: "Last sale: 26.32 $",
        image: "images/Mask group (26).png"
    },
];

function Works() {
const [changeTabs ,setChangeTabs] = useState("all");
const { t } = useTranslation();
  return (
    <>
    <div className=" lg:py-[90px] py-[60px] 2xl:py-[109px] mt-[-1px] z-[9]   bg-overflow">
    <div className="div-12 relative"></div>

    <div className="lg:custom-container container mx-auto px-[20px] xl:px-0 ">
      <div className='relative z-[1] sm:mb-[65px] mb-[21px]'>
    <h2 style={{ fontFamily: "Urbanist, sans-serif" }} className='uppercase font-bold text-center sm:text-[74px] text-[28px] leading-[28px] gradient-text sm:leading-[120px]'>{t("Art works")}</h2>
    <img src="images/Ellipse 5.png" alt="" className='absolute sm:top-[6px] sm:left-[33.5%] -z-[1] w-10 sm:w-[100px] -top-1 left-[22%]'/>
    </div>
    <div className="flex items-center lg:gap-6 gap-4 sm:mb-[76px] mb-[15px] justify-center sm:justify-start flex-wrap">
        <button className={`  relative after:rounded-full rounded-full  sm:text-lg text-xs font-normal leading-5  btn-br1  ${changeTabs === 'all' ? 'btn-br realtive text-white bg-white bg-opacity-[40%]': 'text-[#8F99AC] bg-[#10172621]'}  sm:px-[32px] px-[24px] py-[8px]  duration-300`} onClick={() => setChangeTabs("all")}> {t("All art's")}</button>
        <button className={`  relative after:rounded-full rounded-full sm:text-lg text-xs font-normal leading-5 btn-br1 ${changeTabs === 'popular' ? 'btn-br realtive text-white bg-white bg-opacity-[40%]': 'text-[#8F99AC] bg-[#10172621]'} sm:px-[32px] px-[24px] py-[8px] lg:px-duration-300`} onClick={() => setChangeTabs("popular")}> {t("Popular")}</button>
        <button className={` relative after:rounded-full rounded-full sm:text-lg text-xs font-normal leading-5 btn-br1 ${changeTabs === 'newart' ? 'btn-br realtive text-white bg-white bg-opacity-[40%]': 'text-[#8F99AC] bg-[#10172621]'} sm:px-[32px] px-[24px] py-[8px] lg:px- duration-300`} onClick={() => setChangeTabs("newart")}>{t("New Art’s")}</button>
        <button className={`  relative after:rounded-full rounded-full sm:text-lg text-xs font-normal leading-5 btn-br1 ${changeTabs === 'morden' ? 'btn-br realtive text-white bg-white bg-opacity-[40%]': 'text-[#8F99AC] bg-[#10172621]'} sm:px-[32px] px-[24px] py-[8px] lg:px- duration-300'`} onClick={() => setChangeTabs("morden")}>{t
        ("Morden")}</button>
        <button className={`  relative after:rounded-full rounded-full sm:text-lg text-xs font-normal leading-5 btn-br1 ${changeTabs === 'other' ? 'btn-br realtive text-white bg-white bg-opacity-[40%]': 'text-[#8F99AC] bg-[#10172621]'} sm:px-[32px] px-[24px] py-[8px] lg:px- duration-300`} onClick={() => setChangeTabs("other")}> {t("Others")}</button>
    </div>
    <div className="grid grid-cols-12 sm:gap-6  transition-opacity duration-500">
    { changeTabs === 'all'? (
          <>
            {data.map((item) => (
                <div key={item.id} className="mb-[30px] sm:mb-0 lg:col-span-3 sm:col-span-6 col-span-12 bg-[#8F99AC33] bg-opacity-[20%] group rounded-xl p-[16px] relative after:rounded-xl hover:border-transparent border-work1 ">
                    <div className='overflow-hidden rounded-xl '>
                        <img src={item.image} alt={item.name} className='w-full object-cover group-hover:scale-[1.2] transform group-hover:-rotate-12 transition-transform duration-500 ease-in-out' />
                    </div>
                    <div className="pt-[20px]">
    <div className="flex justify-between">
        <h3 className="text-lg font-normal leading-5 text-white">
            {t(item.name)}
        </h3>
        <button
            className="py-[8px] px-[16px] text-base font-medium leading-[15px] text-white rounded-md bg-white bg-opacity-[40%] border-work relative after:rounded-md"
        >
            {t(item.button)}
        </button>
    </div>
    <h4 className="text-[#7600FF] font-medium text-xl leading-5 mb-[10px]">
        {t(item.price)}
    </h4>
    <h4 className="text-[#8F99AC] text-lg font-normal leading-5">
        {t(item.lastSale)}
    </h4>
</div>

                </div>
            ))}
          
          </>
        ) : changeTabs === 'popular'? (
            <>
            {Data2.map((item) => (
                <div key={item.id} className="mb-[30px] sm:mb-0 lg:col-span-3 sm:col-span-6 col-span-12 bg-[#8F99AC33] bg-opacity-[20%] group rounded-xl p-[16px] relative after:rounded-xl hover:border-transparent border-work1  ">
                    <div className='overflow-hidden'>
                        <img src={item.image} alt={item.name} className='w-full object-cover group-hover:scale-[1.2] transform group-hover:-rotate-12 transition-transform duration-500 ease-in-out' />
                    </div>
                    <div className="pt-[20px]">
                        <div className="flex justify-between">
                            <h3 className='text-lg font-normal leading-5 text-white'>{t(item.name)}</h3>
                            <button className='py-[8px] px-[16px] text-base font-medium leading-[15px] text-white rounded-md bg-white bg-opacity-[40%] border-work relative after:rounded-md'>{t(item.button)}</button>
                        </div>
                        <h4 className='text-[#7600FF] font-medium text-xl leading-5 mb-[10px]'>{t(item.price)}</h4>
                        <h4 className='text-[#8F99AC] text-lg font-normal leading-5'>{t(item.lastSale)}</h4>
                    </div>
                </div>
            ))}
            </>
        ) :  changeTabs === 'newart'? (
           <>

           {Data3.map((item) => (
                <div key={item.id} className="mb-[30px] sm:mb-0 lg:col-span-3 sm:col-span-6 col-span-12 bg-[#8F99AC33] bg-opacity-[20%] group rounded-xl p-[16px] relative after:rounded-xl hover:border-transparent border-work1 ">
                    <div className='overflow-hidden rounded-xl '>
                        <img src={item.image} alt={item.name} className='w-full object-cover group-hover:scale-[1.2] transform group-hover:-rotate-12 transition-transform duration-500 ease-in-out' />
                    </div>
                    <div className="pt-[20px]">
                        <div className="flex justify-between">
                            <h3 className='text-lg font-normal leading-5 text-white '>{t(item.name)}</h3>
                            <button className='py-[8px] px-[16px] text-base font-medium leading-[15px] text-white rounded-md bg-white bg-opacity-[40%] border-work relative after:rounded-md' >{t(item.button)}</button>
                        </div>
                        <h4 className='text-[#7600FF] font-medium text-xl leading-5 mb-[10px]'>{t(item.price)}</h4>
                        <h4 className='text-[#8F99AC] text-lg font-normal leading-5'>{t(item.lastSale)}</h4>
                    </div>
                </div>
            ))}
           </>
        ) : changeTabs === 'morden'? (
           <>
           {Data4.map((item) => (
                <div key={item.id} className="mb-[30px] sm:mb-0 lg:col-span-3 sm:col-span-6 col-span-12 bg-[#8F99AC33] bg-opacity-[20%] group rounded-xl p-[16px] relative after:rounded-xl hover:border-transparent border-work1 ">
                    <div className='overflow-hidden rounded-xl '>
                        <img src={item.image} alt={item.name} className='w-full object-cover group-hover:scale-[1.2] transform group-hover:-rotate-12 transition-transform duration-500 ease-in-out' />
                    </div>
                    <div className="pt-[20px]">
                        <div className="flex justify-between">
                            <h3 className='text-lg font-normal leading-5 text-white '>{t(item.name)}</h3>
                            <button className='py-[8px] px-[16px] text-base font-medium leading-[15px] text-white rounded-md bg-white bg-opacity-[40%] border-work relative after:rounded-md' >{t(item.button)}</button>
                        </div>
                        <h4 className='text-[#7600FF] font-medium text-xl leading-5 mb-[10px]'>{t(item.price)}</h4>
                        <h4 className='text-[#8F99AC] text-lg font-normal leading-5'>{t(item.lastSale)}</h4>
                    </div>
                </div>
            ))}
           </>
        ) : changeTabs === 'other'? (
            <>
            {Data5.map((item) => (
                <div key={item.id} className="mb-[30px] sm:mb-0 lg:col-span-3 sm:col-span-6 col-span-12 bg-[#8F99AC33] bg-opacity-[20%] group rounded-xl p-[16px] relative after:rounded-xl hover:border-transparent border-work1 ">
                    <div className='overflow-hidden rounded-xl '>
                        <img src={item.image} alt={item.name} className='w-full object-cover group-hover:scale-[1.2] transform group-hover:-rotate-12 transition-transform duration-500 ease-in-out' />
                    </div>
                    <div className="pt-[20px]">
                        <div className="flex justify-between">
                            <h3 className='text-lg font-normal leading-5 text-white '>{t(item.name)}</h3>
                            <button className='py-[8px] px-[16px] text-base font-medium leading-[15px] text-white rounded-md bg-white bg-opacity-[40%] border-work relative after:rounded-md' >{t(item.button)}</button>
                        </div>
                        <h4 className='text-[#7600FF] font-medium text-xl leading-5 mb-[10px]'>{t(item.price)}</h4>
                        <h4 className='text-[#8F99AC] text-lg font-normal leading-5'>{t(item.lastSale)}</h4>
                    </div>
                </div>
            ))}
            </>
        ) : (
          ""
        )}
        </div>
  
    </div>
    </div>
    </>
  )
}

export default Works
