"use client"

import "../../styles/home_and_blog.css";
import Link from 'next/link'
import React, { useState } from 'react'
import { BorderGradientLight } from 'shared/components/border-gradient-light'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Faqs_article() {
    const [isHover, setIsHover] = useState<boolean>(false)
    const faqs_articles = [
        {
            id: 1,
            title: "Introduction to FXIFY"
        },
        {
            id: 2,
            title: "Navigating Your Dashboard"
        },
        {
            id: 3,
            title: "Finding Your Perfect Evaluation at FXIFY"
        },
        {
            id: 4,
            title: "Getting the Most Out of FXIFY Support"
        },
        {
            id: 5,
            title: "FXIFY Affiliate Program"
        },
        {
            id: 6,
            title: "Can I use someone else's card?"
        },
        {
            id: 7,
            title: "KYC/AML Policies"
        },
        {
            id: 8,
            title: "Futures Instrument List"
        },
        {
            id: 9,
            title: "Ongoing AML Monitoring"
        },
        {
            id: 10,
            title: "Ongoing KYC/Documentation Monitoring"
        }
    ];
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string): string {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    return (
        <>
            <section className="hero_article pt-[148px] pb-[64px]">
                <div className="max-w-[1148px] w-full mx-auto">
                    <div className="flex items-center gap-2 mb-[97px]">
                        <Link href="#" className="flex items-center gap-1 font-normal text-sm  text-[#8B8FD680]">
                            <span className='hero_link'>All collections</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17L15 12L10 7" stroke="#8B8FD6" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>
                        <Link href="#" className="font-normal text-sm text-white ">
                            <span className='hero_link'>Getting Started</span>
                        </Link>
                    </div>
                    <div className="max-w-[738px] mx-auto px-5 flex flex-col items-center">
                        <a href="#" className="article_link mb-10 max-md:mb-5">
                            <span>Getting Started</span>
                        </a>
                        <h1 className="font-normal text-[64px] text-center mb-10 leading-[45px] w-full max-md:mb-5">Get Started with FXIFY</h1>
                        <form className="hero_inp_box"
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <BorderGradientLight isActive={isHover}
                                customStyle={{
                                    opacity: isHover ? 1 : 0,  // Change opacity based on hover state
                                    transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
                                }} />
                            <input
                                type="search"
                                name="hero_search"
                                className="hero_input"
                                id="hero_search"
                                placeholder="Search for articles..."
                            />
                            <button className="hero_search_btn">
                                <div>
                                    <span>Search</span>
                                    <svg
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.12501C15.75 5.18998 12.56 2.00001 8.625 2.00001C4.68997 2.00001 1.5 5.18998 1.5 9.12501C1.5 13.06 4.68997 16.25 8.625 16.25Z"
                                            stroke="white"
                                            strokeWidth="1.35"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M16.5 17L15 15.5"
                                            stroke="white"
                                            strokeWidth="1.35"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="hero_search_btn_elipse">
                                    <svg
                                        width={125}
                                        height={45}
                                        viewBox="0 0 125 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_f_1163_7618)">
                                            <ellipse
                                                cx="60.1816"
                                                cy="56.8232"
                                                rx={47}
                                                ry="27.5"
                                                fill="#BDBBF5"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_f_1163_7618"
                                                x="-16.8184"
                                                y="-0.676758"
                                                width={154}
                                                height={115}
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood
                                                    floodOpacity={0}
                                                    result="BackgroundImageFix"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                />
                                                <feGaussianBlur
                                                    stdDeviation={15}
                                                    result="effect1_foregroundBlur_1163_7618"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                            <span className="search_elipse">
                                <svg
                                    width={543}
                                    height={61}
                                    viewBox="0 0 543 61"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_f_1163_7614)">
                                        <ellipse
                                            cx="271.5"
                                            cy="30.5"
                                            rx="191.5"
                                            ry="30.5"
                                            fill="#4852F5"
                                            fillOpacity="0.2"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_1163_7614"
                                            x={0}
                                            y={-80}
                                            width={543}
                                            height={221}
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood
                                                floodOpacity={0}
                                                result="BackgroundImageFix"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation={40}
                                                result="effect1_foregroundBlur_1163_7614"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </span>
                        </form>
                    </div>
                </div>
            </section>
            <section className="pb-[191px] max-md:pb-[100px]">
                <div className="max-w-[688px] mx-auto">
                    <Swiper
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={pagination}
                        modules={[Pagination, Navigation]}
                        className="mySwiper bg-transparent"
                    >
                        <SwiperSlide>
                            <div className=" border border-[#1E1E2B] rounded-[40px] p-9"
                                style={{
                                    background: 'linear-gradient(160.99deg, rgba(255, 255, 255, 0.036) 5.45%, rgba(255, 255, 255, 0.015) 99.45%)',
                                    backdropFilter: 'blur(40px)'
                                }}
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                            >
                                <BorderGradientLight isActive={isHover}
                                    customStyle={{
                                        opacity: isHover ? 1 : 0,  // Change opacity based on hover state
                                        transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
                                    }} />
                                <h2
                                    className="text-left font-normal text-sm mb-9"
                                    style={{
                                        background: 'linear-gradient(90deg, #B9C3F4 0%, #6C728E 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent'
                                    }}
                                >Articles</h2>
                                <ul className="flex flex-col gap-[30px]">
                                    {faqs_articles.map(item => (
                                        <li key={item.id} className="hover:opacity-50 transition-all duration-300">
                                            <a href="#" className="flex items-center justify-between">
                                                <span className="font-normal text-xl text-white">{item.title}</span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" border border-[#1E1E2B] rounded-[40px] p-9"
                                style={{
                                    background: 'linear-gradient(160.99deg, rgba(255, 255, 255, 0.036) 5.45%, rgba(255, 255, 255, 0.015) 99.45%)',
                                    backdropFilter: 'blur(40px)'
                                }}>
                                <h2
                                    className="text-left font-normal text-sm mb-9"
                                    style={{
                                        background: 'linear-gradient(90deg, #B9C3F4 0%, #6C728E 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        color: 'transparent'
                                    }}
                                >Articles</h2>
                                <ul className="flex flex-col gap-[30px]">
                                    {faqs_articles.map(item => (
                                        <li key={item.id} className="hover:opacity-50 transition-all duration-300">
                                            <a href="#" className="flex items-center justify-between">
                                                <span className="font-normal text-xl text-white">{item.title}</span>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
