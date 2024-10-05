"use client";


import Image from "next/image";
import blog_header_image from "../../components/images/blog_header.png";
import blog_header_bg from "../../components/images/blog_header_bg.png";
import blog_author from "../../components/images/blog_author.png";
import Link from "next/link";
import "../../styles/home_and_blog.css"
import { BorderGradientLight } from "shared/components/border-gradient-light";
import { useState } from "react";

export default function BlogArticle() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="bg-[#04030D] w-full pt-16">
      <div className="bg-cover max-w-[1512px] mx-auto"
        style={{
          backgroundImage: `url(${blog_header_bg.src})`,
          backgroundPosition: "center 200px",
        }}
      >
        <div className="max-w-[1150px] mx-auto flex items-center gap-16 pt-[96px] pb-[174px] text-[#fff]">
          <Image src={blog_header_image} alt="blog header image site" />

          <div className="max-w-[700px] mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <button
                className="py-[14px] px-4 rounded-[100px] font-aventa text-[14px] leading-[17.29px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8, 5, 32, 0.4) 0%, rgba(38, 42, 84, 0.4) 100%)",
                  color: "linear-gradient(90deg, #B9C3F4 0%, #6C728E 100%)",
                  border: "1px solid #FFFFFF1A",
                }}
              >
                Market Insights
              </button>
              <span className="opacity-40 text-[#fff] uppercase">
                24 april 2024
              </span>
            </div>

            <h1
              className="text-[44px] leading-[48.4px]"
              style={{
                color:
                  "linear-gradient(0deg, #D3D5E5, #D3D5E5),linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%)",
              }}
            >
              Current Trends Shaping the Global Market in 2024
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1150px] mx-auto flex  justify-between text-[#fff]">
        {/* Main content */}
        <div className="max-w-[714px] md:col-span-3">
          {/* Section: Sustainability Takes Center Stage */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Sustainability Takes Center Stage
            </h2>
            179.8
            <p className="text-lg leading-7 opacity-60 ">
              As environmental concerns continue to rise, the global shift
              towards sustainability is no longer a niche trend but a central
              focus for governments, corporations, and investors. Green energy,
              eco-friendly technologies, and sustainable business practices are
              driving investments in renewable energy projects, carbon-neutral
              initiatives, and ESG (Environmental, Social, and Governance)
              portfolios.
            </p>
          </section>

          {/* Section: AI Industries */}
          <section className="mb-8">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color:
                  "linear-gradient(0deg, #D3D5E5, #D3D5E5),linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%)",
              }}
            >
              AI Industries
            </h2>
            <p
              className="text-lg leading-7 opacity-60"
              style={{
                color:
                  "linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%);",
              }}
            >
              Artificial Intelligence (AI) and automation are transforming the
              landscape of various industries, acting as catalysts for
              innovation and efficiency. From finance and healthcare to
              manufacturing and retail, these technologies are no longer
              optional but essential tools for companies looking to stay
              competitive in an increasingly digital world. AI&apos;s ability to
              process vast amounts of data, identify patterns, and make
              predictions in real time is reshaping how businesses operate, make
              decisions, and engage with customers.
            </p>
            <p
              className="text-lg leading-7 mt-4 opacity-60"
              style={{
                color:
                  "linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%);",
              }}
            >
              In finance, AI is being used for everything from fraud detection
              to algorithmic trading. Automated systems are enabling faster,
              more accurate decision-making processes that improve profitability
              and reduce risk. AI-powered robo-advisors are providing
              personalized investment advice at a fraction of the cost of
              traditional financial planners, making financial services more
              accessible to a broader audience.
            </p>
            <p
              className="text-lg leading-7 mt-4 opacity-60"
              style={{
                color:
                  "linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%);",
              }}
            >
              Healthcare is experiencing a similar transformation, with AI
              assisting in diagnostics, personalized treatment plans, and even
              drug discovery. Machine learning algorithms are helping doctors
              diagnose diseases more accurately and at an earlier stage, while
              AI-driven tools are streamlining administrative tasks, reducing
              paperwork, and allowing healthcare professionals to focus more on
              patient care. Automation in hospital settings, from robotic
              surgery assistants to AI-based patient monitoring, is improving
              outcomes and efficiency.
            </p>
          </section>

          {/* Section: The Rise of Digital Currencies */}
          <section className="mb-8">
            <h2
              className="text-3xl font-bold mb-4"
              style={{
                color:
                  "linear-gradient(0deg, #D3D5E5, #D3D5E5),linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%)",
              }}
            >
              The Rise of Digital Currencies
            </h2>
            <p
              className="text-lg leading-7 opacity-60"
              style={{
                color:
                  "linear-gradient(179.8deg, #D3D5E5 0.17%, #AEB0C9 99.83%);",
              }}
            >
              With central banks around the world exploring digital currencies,
              the financial landscape is evolving quickly. The increasing
              acceptance of cryptocurrencies, combined with the development of
              Central Bank Digital Currencies (CBDCs), could revolutionize
              cross-border payments, making them faster, more secure, and
              accessible. Traders and investors are keeping a close eye on these
              developments.
            </p>
          </section>
        </div>

        {/* Sidebar: In this article */}
        <aside className="md:col-span-1 ">
          <div className="sticky top-[120px] text-sm">
            <h3 className="font-bold mb-2 opacity-40">IN THIS ARTICLE</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#6F78FF] hover:text-[#B9C3F4]">
                  Sustainability Takes Center Stage
                </a>
              </li>
              <li>
                <a href="#" className="text-[#fff] hover:text-[#B9C3F4]">
                  The Rise of Digital Currencies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#fff] hover:text-[#B9C3F4]">
                  AI Industries
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-bold mb-2 opacity-90">Author</h4>
              <div className="flex items-center">
                <Image
                  src={blog_author}
                  alt="Anna Miller"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="text-lg font-semibold">Anna Miller</p>
                  <p className="text-sm text-[#6C728E]">Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Category Section */}
      <section className="category">
        <div className="category_container">
          <div className="category_top">
            <h2 className="font-normal text-[40px] max-md:text-2xl text-center">Explore by category</h2>
            
          </div>
          <div className="category_card_box">
            {[
              {
                imgSrc: blog_header_image,
                title: "Best FTMO Alternatives in 2024",
                text: "Let’s look at prop firms offering similar or better services, programs...",
              },
              {
                imgSrc: blog_header_image,
                title: "Best FTMO Alternatives in 2024",
                text: "Let’s look at prop firms offering similar or better services, programs...",
              },
              {
                imgSrc: blog_header_image,
                title: "Best FTMO Alternatives in 2024",
                text: "Let’s look at prop firms offering similar or better services, programs...",
              },
            ].map((category, index) => (
              <div className="category_card" key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <BorderGradientLight
                  isActive={hoverIndex === index}
                  customStyle={{
                    opacity: hoverIndex === index ? 1 : 0,  // Change opacity based on hover state
                  }}
                />
                <div className="category_card_top_box">
                  <div className="category_card_top">
                    <p className="category_info_text">Market insights</p>
                    <Image
                      src={category.imgSrc}
                      alt={`Category image ${index + 1}`}
                      className="category_top_img"
                    />
                  </div>
                </div>
                <div className="category_card_bottom">
                  <h2 className="category_card_subtitle">24 April 2024</h2>
                  <h3 className="category_card_title">{category.title}</h3>
                  <p className="category_card_text">{category.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="social">
        <div className="socila_container">
          <div className="social_card email">
            <h2 className="social_card_title">Subscribe to our newsletter</h2>
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <h2 className="social_card_title">Follow us on Telegram Channel</h2>
            <p className="social_text">
              Get an insight from other users about FXIFY and their experience
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
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            <h2 className="social_card_title">Join Our Discord Community</h2>
            <p className="social_text">
              Get an insight from other users about FXIFY and their experience
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
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
    </div>
  );
}
