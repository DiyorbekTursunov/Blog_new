import Image from "next/image";
import headerLogo from "@/components/images/header/header_logo.svg";
import blog_header_image from "@/components/images/blog_header.png";
import blog_header_bg from "@/components/images/blog_header_bg.png";
import blog_author from "@/components/images/blog_author.png";
import header_logo from "@/components/images/header/header_logo.svg";
import footerBg from "@/components/images/footer/footer_bg.png";
import Link from "next/link";


export default function BlogArticle() {
  return (
    <div className="bg-[#04030D] w-full">
         <header className="header">
            <div className="header-conatiner items-center">
                <Link href="/" className="header_logo_link">
                    <Image
                        src={header_logo}
                        className="header_logo"
                        alt="FCIFY Futures"
                    />
                </Link>
                <ul className="header_nav_list">
                    <li>
                        <a href="#" className="header_nav_link">
                            <span>0.1 /</span> Plans
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header_nav_link">
                            <span>0.2 /</span> How it Works
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header_nav_link">
                            <span>0.5 /</span> Affiliate
                        </a>
                    </li>
                    <li>
                        <a href="#" className="header_nav_link">
                            <span>0.4 /</span> FAQ
                        </a>
                    </li>
                </ul>
                <a href="/" className="header_discord_link">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.2407 8.38998C7.6707 8.38998 7.2207 8.88998 7.2207 9.49998C7.2207 10.11 7.6807 10.61 8.2407 10.61C8.8107 10.61 9.2607 10.11 9.2607 9.49998C9.2707 8.88998 8.8107 8.38998 8.2407 8.38998ZM11.8907 8.38998C11.3207 8.38998 10.8707 8.88998 10.8707 9.49998C10.8707 10.11 11.3307 10.61 11.8907 10.61C12.4607 10.61 12.9107 10.11 12.9107 9.49998C12.9107 8.88998 12.4607 8.38998 11.8907 8.38998Z"
                            fill="#8AA4FF"
                        />
                        <path
                            d="M16.7508 0H3.35078C2.22078 0 1.30078 0.92 1.30078 2.06V15.58C1.30078 16.72 2.22078 17.64 3.35078 17.64H14.6908L14.1608 15.79L15.4408 16.98L16.6508 18.1L18.8008 20V2.06C18.8008 0.92 17.8808 0 16.7508 0ZM12.8908 13.06C12.8908 13.06 12.5308 12.63 12.2308 12.25C13.5408 11.88 14.0408 11.06 14.0408 11.06C13.6308 11.33 13.2408 11.52 12.8908 11.65C12.3908 11.86 11.9108 12 11.4408 12.08C10.4808 12.26 9.60078 12.21 8.85078 12.07C8.28078 11.96 7.79078 11.8 7.38078 11.64C7.15078 11.55 6.90078 11.44 6.65078 11.3C6.62078 11.28 6.59078 11.27 6.56078 11.25C6.54078 11.24 6.53078 11.23 6.52078 11.22C6.34078 11.12 6.24078 11.05 6.24078 11.05C6.24078 11.05 6.72078 11.85 7.99078 12.23C7.69078 12.61 7.32078 13.06 7.32078 13.06C5.11078 12.99 4.27078 11.54 4.27078 11.54C4.27078 8.32 5.71078 5.71 5.71078 5.71C7.15078 4.63 8.52078 4.66 8.52078 4.66L8.62078 4.78C6.82078 5.3 5.99078 6.09 5.99078 6.09C5.99078 6.09 6.21078 5.97 6.58078 5.8C7.65078 5.33 8.50078 5.2 8.85078 5.17C8.91078 5.16 8.96078 5.15 9.02078 5.15C9.63078 5.07 10.3208 5.05 11.0408 5.13C11.9908 5.24 13.0108 5.52 14.0508 6.09C14.0508 6.09 13.2608 5.34 11.5608 4.82L11.7008 4.66C11.7008 4.66 13.0708 4.63 14.5108 5.71C14.5108 5.71 15.9508 8.32 15.9508 11.54C15.9508 11.54 15.1008 12.99 12.8908 13.06Z"
                            fill="#8AA4FF"
                        />
                    </svg>
                    Discord
                </a>
                <button className="header_login_btn">Login</button>
                <button className="header_get_futured_btn">
                    <div>
                        Get Funded
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
                    </div>
                    <span className="elipse">
                        <svg
                            width="161"
                            height="44"
                            viewBox="0 0 161 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g filter="url(#filter0_f_1163_7608)">
                                <ellipse
                                    cx="78.1816"
                                    cy="56.3232"
                                    rx="65"
                                    ry="27.5"
                                    fill="#BDBBF5"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_1163_7608"
                                    x="-16.8184"
                                    y="-1.17676"
                                    width="190"
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
                                        result="effect1_foregroundBlur_1163_7608"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </span>
                </button>
            </div>
        </header>

      <div
        className="bg-cover max-w-[1512px] mx-auto"
        style={{
          backgroundImage: `url(${blog_header_bg.src})`,
          backgroundPosition: "center 200px",
        }}
      >
        <div className="max-w-[1150px] mx-auto flex items-center gap-16 pt-[96px] pb-[174px] text-[#fff]">
          <Image src={blog_header_image} alt="blog header image site" />

          <div className="max-w-[700px] mx-auto">
            <div className="flex items-center gap-6">
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
        <aside className="md:col-span-1">
          <div className="sticky top-8 text-sm">
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
            <h2 className="category_title">Explore by category</h2>
            <div className="category_filter_box">
              <button className="category_filter_btn category_filter_btn_active">
                <span>All categories</span>
              </button>
              <button className="category_filter_btn">
                <span>Market Insights</span>
              </button>
              <button className="category_filter_btn">
                <span>Company News</span>
              </button>
              <button className="category_filter_btn">
                <span>Tips and Advice</span>
              </button>
            </div>
            <span className="category_filter_btn_line"></span>
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
              <div className="category_card" key={index}>
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
          <Link href="/blog_article" className="category_bottom_btn">
            <div>
              <span className="category_bottom_btn_text">View more</span>
            </div>
          </Link>
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

      <footer className="footer">
    <div className="footer_container">
      <div className="footer_bg">
        <Image src={footerBg} alt="star" />
      </div>
      <div className="foooter_top">
        <div className="footer_top_right">
          <a href="#" className="footer_logo_link">
            <Image
              src={headerLogo}
              className="footer_logo"
              alt="FCIFY Futures"
            />
          </a>
          <h2 className="footer_top_right_title">
            FXIFY&nbsp;is the premier futures prop trading firm for beginner and
            experienced traders alike
          </h2>
        </div>
        <div className="mr-123">
          <h3 className="footer_nav_title">Explore</h3>
          <ul className="footer_nav_list">
            <li>
              <a href="#" className="footer_nav_link">
                Affiliate
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="mr-123">
          <h3 className="footer_nav_title">Info</h3>
          <ul className="footer_nav_list">
            <li>
              <a href="#" className="footer_nav_link">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                Twitter (X)
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                Get Funded
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer_nav_title">Follow</h3>
          <ul className="footer_nav_list">
            <li>
              <a href="#" className="footer_nav_link">
                Cancellation
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="footer_nav_link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_center_line" />
      <div className="footer_bottom">
        <div>
          <div className="footer_bottom_info_box_left">
            <div className="footer_bottom_info_box">
              <p className="footer_info_text">
                FXIFY Futures Risk Disclosure: <br /> <br />
                Futures and forex trading contains substantial risk and is not
                for every investor. An investor could potentially lose all or
                more than the initial investment. Risk capital is money that can
                be lost without jeopardizing your financial security or
                lifestyle. Only risk capital should be used for trading and only
                those with sufficient risk capital should consider trading. Past
                performance is not necessarily indicative of future results.
              </p>
            </div>
            <div className="footer_bottom_info_box">
              <p className="footer_info_text">
                HYPOTHETICAL PERFORMANCE DISCLOSURE: <br /> <br />
                Hypothetical performance results have many significant
                performance and other limitations, some of which are described
                below. No representation is being made that any account will or
                is likely to achieve profits or losses similar to those shown on
                the website or any promotional material.
              </p>
            </div>
          </div>
          <p className="footer_bottom_text">
            © 2023 - 2024 FXIFY. All rights reserved.
          </p>
        </div>
        <div className="footer_bottom_info_box_right">
          <p className="footer_info_text">
            CFTC Rule 4.41: <br /> <br />
            Hypothetical or Simulated performance results have certain
            limitations. Unlike an actual performance record, simulated results
            do not represent actual trading. Also, because the trades have not
            actually been executed, the results may have under-or-over
            compensated for the impact, if any, of certain market factors, such
            as lack of liquidity. Simulated trading programs, in general, are
            also subject to the fact that they are designed with the benefit of
            hindsight. No representation is being made that any account will or
            is likely to achieve profit or losses similar to those shown. <br />
            Testimonials appearing on this website may not be representative of
            other clients or customers and is not a guarantee of future
            performance or success. No representation is being made that any
            evaluation account will achieve profit or losses similar to those
            shown here.
          </p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}
