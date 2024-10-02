import "../../styles/home_and_blog.css";

export default function FaqsHome() {
    return (
        <div className="pt-[20px]">
            <section className="faq_hero">
                <div className="hero_container">
                    <a href="#" className="faq_hero_link">
                        <span className="faq_hero_link_line" />
                        <span className="faq_hero_link_text">
                            frequently asked questions
                        </span>
                    </a>
                    <h1 className="faq_hero_title">FXIFY Help Center</h1>
                    <form className="hero_inp_box">
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
            </section>
            <section className="faq_cards">
                <div className="faq_bg_container">
                    <div className="vector_faq" />
                    <div className="faq_cards_container">
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Getting started
                                    </h2>
                                    <p className="faq_card_text">
                                        Get started with FXIFY
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        10 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.33398 10V7.03335C3.33398 3.35001 5.94232 1.84168 9.13398 3.68335L11.709 5.16668L14.284 6.65001C17.4757 8.49168 17.4757 11.5083 14.284 13.35L11.709 14.8333L9.13398 16.3167C5.94232 18.1583 3.33398 16.65 3.33398 12.9667V10Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Getting started
                                    </h2>
                                    <p className="faq_card_text">
                                        Get started with FXIFY
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        10 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.33398 10V7.03335C3.33398 3.35001 5.94232 1.84168 9.13398 3.68335L11.709 5.16668L14.284 6.65001C17.4757 8.49168 17.4757 11.5083 14.284 13.35L11.709 14.8333L9.13398 16.3167C5.94232 18.1583 3.33398 16.65 3.33398 12.9667V10Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Monthly Membership
                                    </h2>
                                    <p className="faq_card_text">
                                        Monthly Subscription <br />
                                        / Payment FAQ <br />/ Activition Fees
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        6 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12 7.5V16.5"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M22 6V2H18"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17 7L22 2"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Trading Platforms
                                    </h2>
                                    <p className="faq_card_text">
                                        Connection instruction <br />
                                        / Platform Settings <br />
                                        / RTrader Pro <br />
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        14 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M1.66602 14.2167H9.99935"
                                                stroke="white"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3.51599 11.25H8.14937C9.63271 11.25 9.99935 11.6167 9.99935 13.0833V16.5083C9.99935 17.975 9.63271 18.3417 8.14937 18.3417H3.51599C2.03266 18.3417 1.66602 17.975 1.66602 16.5083V13.0833C1.66602 11.6167 2.03266 11.25 3.51599 11.25Z"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M18.3333 12.5C18.3333 15.725 15.725 18.3333 12.5 18.3333L13.375 16.875"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1.66602 7.50002C1.66602 4.27502 4.27435 1.66669 7.49935 1.66669L6.62436 3.12502"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M15.416 9.16669C17.4871 9.16669 19.166 7.48775 19.166 5.41669C19.166 3.34562 17.4871 1.66669 15.416 1.66669C13.3449 1.66669 11.666 3.34562 11.666 5.41669C11.666 7.48775 13.3449 9.16669 15.416 9.16669Z"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Traders Evaluation
                                    </h2>
                                    <p className="faq_card_text">
                                        Evaluation FAQ/ <br />
                                        Rules &amp; Parameters
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        13 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M20.334 6.99996V9.01663C20.334 10.3333 19.5006 11.1666 18.184 11.1666H15.334V5.34163C15.334 4.41663 16.0923 3.66663 17.0173 3.66663C17.9257 3.67496 18.759 4.04163 19.359 4.64163C19.959 5.24996 20.334 6.08329 20.334 6.99996Z"
                                                stroke="white"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M3.66602 7.83329V19.5C3.66602 20.1916 4.44933 20.5833 4.99933 20.1666L6.42435 19.1C6.75768 18.85 7.22435 18.8833 7.52435 19.1833L8.90766 20.575C9.23266 20.9 9.76603 20.9 10.091 20.575L11.491 19.175C11.7827 18.8833 12.2494 18.85 12.5744 19.1L13.9994 20.1666C14.5494 20.575 15.3327 20.1833 15.3327 19.5V5.33329C15.3327 4.41663 16.0827 3.66663 16.9993 3.66663H7.83268H6.99935C4.49935 3.66663 3.66602 5.15829 3.66602 6.99996V7.83329Z"
                                                stroke="white"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7 9.5H12"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7.625 12.8333H11.375"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Funded Accounts
                                    </h2>
                                    <p className="faq_card_text">
                                        News Trading Policy/ Sim funded / Live
                                        funded
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        8 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 2V19C2 20.66 3.34 22 5 22H22"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeMiterlimit={10}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card">
                            <div className="hover_faq_card">
                                <h2 className="hover_faq_card_title">
                                    Introductory Articles
                                </h2>
                                <ul className="hover_faq_card_list">
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Introduction to FXIFY
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Starter Account Revamp
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Tradovate Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Rithmic FAQ/Login
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                Payout FAQs
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="mt-8">
                                        <a
                                            href="#"
                                            className="hover_faq_card_link"
                                        >
                                            <p className="hover_faq_card_link_text">
                                                News Trading Policy
                                            </p>
                                            <span className="hover_faq_card_link_arrow">
                                                <img
                                                    src="./img/faq/arrow.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="faq_hover_bg">
                        <img src="./img/faq/hover_bg.svg" alt="">
                    </div> */}
                            <div className="faq_card_box">
                                <div className="faq_card_top">
                                    <h2 className="faq_card_title">
                                        Payout inormation
                                    </h2>
                                    <p className="faq_card_text">
                                        Payout Policy/ Rice payroll <br />/ 14
                                        Day Payout
                                    </p>
                                </div>
                                <div className="faq_card_bottom">
                                    <p className="faq_article_counter">
                                        3 Articles
                                    </p>
                                    <button className="faq_card_bottom_btn">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.51602 2.36664L3.02435 5.86664C2.27435 6.44997 1.66602 7.69164 1.66602 8.63331V14.8083C1.66602 16.7416 3.24102 18.325 5.17435 18.325H14.8243C16.7577 18.325 18.3327 16.7416 18.3327 14.8166V8.74997C18.3327 7.74164 17.6577 6.44997 16.8327 5.87497L11.6827 2.26664C10.516 1.44997 8.64102 1.49164 7.51602 2.36664Z"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M13.75 9.58337L10.25 13.0834L8.91667 11.0834L6.25 13.75"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.084 9.58337H13.7507V11.25"
                                                stroke="white"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="faq_card_question">
                            <h2 className="faq_card_question_title">
                                Got a specific question?
                            </h2>
                            <a href="#" className="faq_card_question_link">
                                <div className="faq_card_question_link_box">
                                    <p className="faq_card_question_link_text">
                                        Contact us
                                    </p>
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M2.91602 10H16.941"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <span className="faq_card_question_elipse">
                                    <svg
                                        width={155}
                                        height={44}
                                        viewBox="0 0 155 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_f_1169_25943)">
                                            <ellipse
                                                cx="75.1816"
                                                cy="56.3232"
                                                rx={62}
                                                ry="27.5"
                                                fill="#BDBBF5"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_f_1169_25943"
                                                x="-16.8184"
                                                y="-1.17676"
                                                width={184}
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
                                                    result="effect1_foregroundBlur_1169_25943"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
