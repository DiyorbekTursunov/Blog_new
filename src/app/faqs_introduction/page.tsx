"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import faqs_bg from "@/components/images/faqs_home.png"
import Link from 'next/link'
import { BorderGradientLight } from './border-gradient-light';
import "../../styles/home_and_blog.css";


export default function Faqs_introduction() {
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <div>
            <div className="relative">
                <section className="relative z-20 hero_article pt-[148px] pb-[134px]">
                    <div className="max-w-[1188px] px-5 w-full mx-auto">
                        <div className="flex items-center gap-2 mb-[97px]">
                            <Link href="#" className="cursor-pointer flex items-center gap-1 font-normal text-sm text-[#8B8FD680]">
                                <span className="hero_link">All collections</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 17L15 12L10 7" stroke="#8B8FD6" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link href="#" className="cursor-pointer flex items-center gap-1 font-normal text-sm text-[#8B8FD680]">
                                <span className="hero_link">Getting Started</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 17L15 12L10 7" stroke="#8B8FD6" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link href="#" className="cursor-pointer font-normal text-sm text-white ">
                                <span className="hero_link">Introduction to FXIFY</span>
                            </Link>
                        </div>
                        <div className="max-w-[738px] mx-auto px-5 flex flex-col items-center">
                            <a href="#" className="article_link mb-10 max-md:mb-5">
                                <span>Getting Started</span>
                            </a>
                            <h1 className="font-normal text-[64px] text-center mb-10 leading-[45px] w-full max-md:mb-5">Introduction to FXIFY</h1>
                        </div>
                    </div>
                </section>
                <section className="pb-32 relative z-20">
                    <div className="max-w-[1188px] px-5 mx-auto flex items-start justify-between gap-5">
                        <div className="max-w-[680px]">
                            <h2 className="introduction_title">Introduction to FXIFY</h2>
                            <p className="introduction_text mb-[60px]">
                                Greetings, future trader! We're thrilled to have you onboard at MyFundedFutures (MFFU). Whether you're just dipping your toes into the world of futures trading or you're a seasoned pro, we've got your back
                            </p>
                            <h2 className="introduction_title">Why FXIFY?</h2>
                            <p className="introduction_text mb-[60px]">
                                MFFU isn't just another futures prop firm. We're a thriving community that champions growth, consistency, and profitability. Our mission? To empower traders like you with the tools, insights, and support you need to thrive in the futures market
                            </p>
                            <h2 className="introduction_title">Here's What We Offer:</h2>
                            <ul className="flex flex-col gap-8 list-disc list-outside pl-7">
                                <li className="introduction_text marker:text-[#C3C5D9] ">
                                    <span className='introduction_list_title'>Funded Trading Opportunities:</span> Prove your trading skills through our unique evaluation process and earn a funded trading account. Trade with our capital, and enjoy a generous share of the profits. It's your chance to elevate your trading journey.
                                </li>
                                <li className="introduction_text marker:text-[#C3C5D9]">
                                    <span className='introduction_list_title'>Stay Informed with Market Insights:</span> Navigate the markets confidently with our up-to-date news, analysis, and insights. Our Trader's Toolbox is your go-to resource for making well-informed decisions.
                                </li>
                                <li className="introduction_text marker:text-[#C3C5D9]">
                                    <span className='introduction_list_title'>Trade Responsibly with Risk Management Tools:</span> We're big on responsible trading. That's why we equip you with top-notch risk management tools and guidelines. Trade smart, protect your capital, and let us help you cultivate discipline in your trading habits.
                                </li>
                                <li className="introduction_text marker:text-[#C3C5D9]">
                                    <span className='introduction_list_title'>Join Our Thriving Community:</span> Connect, collaborate, and grow with our vibrant trading community on Discord. Share your experiences, learn from fellow traders, and find your tribe in our supportive environment.
                                </li>
                                <li className="introduction_text marker:text-[#C3C5D9]">
                                    <span className='introduction_list_title'> Transparency is Our Middle Name:</span> At MFFU, what you see is what you get. Our policies, from payouts to trading rules, are crystal clear, ensuring fairness for all our traders.
                                </li>
                            </ul>

                        </div>
                        <div className="max-w-[355px] w-full">
                            <h3 className="font-normal text-sm text-white opacity-60 mb-11 leading-[10px]">In this article</h3>
                            <p className="font-normal text-base text-[#6F78FF] mb-6 leading-[11px]">Introduction to FXIFY</p>
                            <p className="gardient_color font-normal text-base text-[#6F78FF] mb-6 leading-[11px]">Why FXIFY?</p>
                            <p className="gardient_color font-normal text-base text-[#6F78FF] mb-[71px]">Here's What We Offer</p>

                            <div className="introduction_right_card block pt-9 px-8 pb-[34px]"
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                            >
                                <BorderGradientLight
                                    isActive={isHover}
                                    customStyle={{
                                        opacity: isHover ? 1 : 0,
                                    }}
                                />
                                <h2 className="hover_faq_card_title">
                                    Related Articles
                                </h2>
                                <ul className="flex flex-col gap-5">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text leading-[13px]">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text leading-[13px]">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text leading-[13px]">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text leading-[13px]">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text leading-[13px]">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-2">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text leading-[13px]">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.91602 10H16.941" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="absolute top-0">
                    <Image src={faqs_bg} alt="" />
                </div>
            </div>
        </div>
    )
}
