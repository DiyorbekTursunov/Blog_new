import Image from "next/image"

import contact_us_bg from "@/components/images/contact_us/contact_us_bg.png"
import form_bg from "@/components/images/contact_us/form_bg.png"
import form_logo from "@/components/images/contact_us/form_logo.png"
import icon_1 from "@/components/images/contact_us/icon_1.png"
import icon_2 from "@/components/images/contact_us/icon_2.png"
import icon_3 from "@/components/images/contact_us/icon_3.png"
import "../../styles/home_and_blog.css"

export default function ContactUs() {
    return (
        <>
            <section
                className="pb-[220px]"
                style={{
                    backgroundImage: `url(${contact_us_bg.src})`,
                    backgroundPosition: "center -150px",
                }}
            >
                <div className="max-w-[1150px] mx-auto px-3 pt-[145px]  flex justify-between items-center  md:flex-row flex-col gap-y-5">
                    <div className="max-w-[400px]">
                        <button
                            className="py-[14px] px-4 rounded-[100px] font-aventa text-[14px] leading-[17.29px] mb-[46px] hover:opacity-55 active:opacity-45 transition-all duration-300"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(8, 5, 32, 0.4) 0%, rgba(38, 42, 84, 0.4) 100%)",
                                color: "linear-gradient(90deg, #B9C3F4 0%, #6C728E 100%)",
                                border: "1px solid #FFFFFF1A",
                            }}
                        >
                            Let’s connect
                        </button>

                        <h1
                            className="text-[55px] mb-8"
                            style={{
                                background:
                                    "linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%)",
                                color: "transparent",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text", // For WebKit browsers
                                display: "inline-block",
                            }}
                        >
                            Contact us
                        </h1>

                        <p
                            className="mb-[48px]"
                            style={{
                                background:
                                    "linear-gradient(90.89deg, #D0D8FC 0.76%, #6C728E 91.98%)",
                                color: "transparent",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text", // For WebKit browsers
                                display: "inline-block",
                            }}
                        >
                            If you are interested in becoming an FXIFY
                            affiliate, please fill out the form, and our team
                            will contact you as soon as possible.
                        </p>

                        <div className="flex flex-col gap-y-8">
                            <div className="flex items-center gap-6">
                                <Image src={icon_1} alt="icon" />

                                <div>
                                    <h3 className="font-aventa text-[16px] font-normal leading-[19.76px] tracking-[-0.05em]">
                                        New Broad Street House, 35 New Broad
                                        Street,London, United Kingdom, EC2M 1NH{" "}
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <Image src={icon_2} alt="icon" />

                                <div>
                                    <span className="text-[20px] opacity-60">
                                        Hours
                                    </span>
                                    <h3 className="font-aventa text-[16px] font-normal leading-[19.76px] tracking-[-0.05em]">
                                        24/5 for Emails and Live Chat
                                    </h3>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <Image src={icon_3} alt="icon" />

                                <div>
                                    <span className="text-[20px] opacity-60">
                                        Email
                                    </span>
                                    <h3 className="font-aventa text-[16px] font-normal leading-[19.76px] tracking-[-0.05em]">
                                        partnerships@fxify.com
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="max-w-[427px]  p-8  shadow-lg rounded-[25.62px] px-9"
                        style={{
                            backgroundImage: `url(${form_bg.src})`, // Ensure form_bg.src is the correct URL path
                            backgroundSize: "contain", // Adjust size if needed
                            backgroundRepeat: "no-repeat", // Prevent image repeating
                        }}
                    >
                        <div className="flex flex-col items-center mb-6 ">
                            <div className="">
                                <Image
                                    src={form_logo}
                                    alt="Logo"
                                    // className="h-12 w-12"
                                    width="169.33"
                                    height="99.97"
                                    // style={{
                                    //     aspectRatio: "50/50",
                                    //     objectFit: "cover",
                                    // }}
                                />
                            </div>
                            <h1 className="text-[28px] font-bold text-white">
                                Have questions?
                            </h1>
                        </div>
                        <form className="">
                            <div className="flex justify-between gap-[9px]">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-medium text-white"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        placeholder="Your first name"
                                        className="w-full  opacity-40 py-[15px] pl-[13px] mt-1 text-white bg-transparent rounded-md"
                                        style={{
                                            background: "#4852F50A;",
                                            border: "0.91px solid #FFFFFF0D",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-medium text-white"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        placeholder="Your last name"
                                        className="w-full  opacity-40 py-[15px] pl-[13px] mt-1 text-white bg-transparent rounded-md"
                                        style={{
                                            background: "#4852F50A;",
                                            border: "0.91px solid #FFFFFF0D",
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mt-1">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="w-full  opacity-40 py-[15px] pl-[13px] mt-1 text-white bg-transparent rounded-[10.98px]"
                                    style={{
                                        background: "#4852F50A;",
                                        border: "1px solid #FFFFFF0D",
                                    }}
                                />
                            </div>
                            <div className="mt-1">
                                <label
                                    htmlFor="phone-number"
                                    className="block text-sm font-medium text-white"
                                >
                                    Phone number
                                </label>
                                <input
                                    type="text"
                                    id="phone-number"
                                    placeholder="Your phone number"
                                    className="w-full  opacity-40 py-[15px] pl-[13px] mt-1 text-white bg-transparent rounded-[10.98px]"
                                    style={{
                                        background: "#4852F50A;",
                                        border: "1px solid #FFFFFF0D",
                                    }}
                                />
                            </div>
                            <div className="mt-1">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-white"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="Please provide information about yourself"
                                    className="w-full min-h-[123.51px] opacity-40 py-[15px] pl-[13px] mt-1 text-white bg-transparent rounded-[10.98px]"
                                    style={{
                                        background: "#4852F50A;",
                                        border: "1px solid #FFFFFF0D",
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-md"
                                >
                                    Submit
                                    {/* <ArrowRightIcon className="ml-2" /> */}
                                </button>
                            </div>

                            <div className="flex items-center mt-2">
                                <input
                                    type="checkbox"
                                    id="agreement"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="agreement"
                                    className="ml-2 text-sm font-medium text-white opacity-50"
                                >
                                    I agree to the processing of personal data.
                                    Principles of personal data processing.
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="social">
                <div className="socila_container flex-wrap" style={{maxWidth: "1462px"}}>
                    <div className="social_card email">
                        <h2 className="social_card_title">
                            Subscribe to our newsletter
                        </h2>
                        <p className="social_text">
                            Be the first to know about promotions and discounts
                        </p>
                        <form className="social_form">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="social_email"
                                placeholder="Enter your email"
                                required
                            />
                            <button className="social_email_submit_btn">
                                <span className="social_email_submit_btn_arrow">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2.91602 10H16.941"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="social_email_submit_btn_elipse">
                                    <svg
                                        width="44"
                                        height="32"
                                        viewBox="0 0 44 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_f_1163_7766)">
                                            <ellipse
                                                cx="21.5"
                                                cy="31.5"
                                                rx="16.5"
                                                ry="11.5"
                                                fill="#BDBBF5"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_f_1163_7766"
                                                x="-15"
                                                y="0"
                                                width="73"
                                                height="63"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood
                                                    floodOpacity="0"
                                                    result="BackgroundImageFix"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                />
                                                <feGaussianBlur
                                                    stdDeviation="10"
                                                    result="effect1_foregroundBlur_1163_7766"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </span>
                            </button>
                        </form>
                    </div>
                    <div className="social_card telegram">
                        <h2 className="social_card_title">
                            Follow us on Telegram Channel
                        </h2>
                        <p className="social_text">
                            Get an insight from other users about FXIFY and
                            their experience
                        </p>
                        <a href="#" className="social_telegram_link">
                            <div>
                                <span className="social_telegram_link_text">
                                    Join FXIFY Telegram
                                </span>
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.0254 5.72778L17.0837 10.7861L12.0254 15.8444"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.91602 10.7861H16.941"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="social_telegram_link_elipse">
                                <svg
                                    width="218"
                                    height="45"
                                    viewBox="0 0 218 45"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_f_1163_7773)">
                                        <ellipse
                                            cx="106.682"
                                            cy="57.1094"
                                            rx="93.5"
                                            ry="27.5"
                                            fill="#BDBBF5"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_1163_7773"
                                            x="-16.8184"
                                            y="-0.390625"
                                            width="247"
                                            height="115"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood
                                                floodOpacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="15"
                                                result="effect1_foregroundBlur_1163_7773"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div className="social_card discord">
                        <h2 className="social_card_title">
                            Join Our Discord Community
                        </h2>
                        <p className="social_text">
                            Get an insight from other users about FXIFY and
                            their experience
                        </p>
                        <a href="#" className="social_discord_link">
                            <div>
                                <span className="social_discord_link_text">
                                    Join FXIFY Discord
                                </span>
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.0254 5.72778L17.0837 10.7861L12.0254 15.8444"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2.91602 10.7861H16.941"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span className="social_discord_link_elipse">
                                <svg
                                    width="218"
                                    height="45"
                                    viewBox="0 0 218 45"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_f_1163_7773)">
                                        <ellipse
                                            cx="106.682"
                                            cy="57.1094"
                                            rx="93.5"
                                            ry="27.5"
                                            fill="#BDBBF5"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_f_1163_7773"
                                            x="-16.8184"
                                            y="-0.390625"
                                            width="247"
                                            height="115"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood
                                                floodOpacity="0"
                                                result="BackgroundImageFix"
                                            />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="15"
                                                result="effect1_foregroundBlur_1163_7773"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
