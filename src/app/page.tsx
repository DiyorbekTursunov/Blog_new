import Image from "next/image";
import headerLogo from "@/components/images/header/header_logo.svg";
import articleRight from "@/components/images/article/article_right.png";
import category1 from "@/components/images/category/category_1.png";
import category2 from "@/components/images/category/category_2.png";
import category3 from "@/components/images/category/category_3.png";
import category4 from "@/components/images/category/category_4.png";
import category5 from "@/components/images/category/category_5.png";
import category6 from "@/components/images/category/category_6.png";
import footerBg from "@/components/images/footer/footer_bg.png";
import Link from "next/link";

export default function Home() {
  return (
<>
  <div className="galaxy_bg"></div>


  <header className="header">
    <div className="header-conatiner">
      <a href="#" className="header_logo_link">
        <Image
          src={headerLogo}
          className="header_logo"
          alt="FCIFY Futures"
        />
      </a>
      <ul className="header_nav_list">
        <li>
          <a href="#" className="header_nav_link">
            {" "}
            <span>0.1 /</span> Plans{" "}
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
            {" "}
            <span>0.4 /</span> FAQ{" "}
          </a>
        </li>
      </ul>
      <a href="#" className="header_discord_link">
        <svg
          width={20}
          height={20}
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
        <span className="elipse">
          <svg
            width={161}
            height={44}
            viewBox="0 0 161 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1163_7608)">
              <ellipse
                cx="78.1816"
                cy="56.3232"
                rx={65}
                ry="27.5"
                fill="#BDBBF5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1163_7608"
                x="-16.8184"
                y="-1.17676"
                width={190}
                height={115}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={15}
                  result="effect1_foregroundBlur_1163_7608"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </button>
    </div>
  </header>
  <section className="hero">
    <div className="hero_container">
      <span className="hero_elipse">
        <svg
          width={683}
          height={469}
          viewBox="0 0 683 469"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_1163_11618)">
            <ellipse
              cx="341.5"
              cy="234.5"
              rx="241.5"
              ry="134.5"
              fill="#020716"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1163_11618"
              x={0}
              y={0}
              width={683}
              height={469}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={50}
                result="effect1_foregroundBlur_1163_11618"
              />
            </filter>
          </defs>
        </svg>
      </span>
      <h1 className="hero_title">Our Blog</h1>
      <p className="hero_text">
        Your go-to source for the latest updates, trading tips, and more from
        FXIFY
      </p>
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
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
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
  <section className="articles">
    <div className="articles_container">
      <a href="#" className="article_link">
        <span>Featured Articles</span>
      </a>
      <div className="article_card_box">
        <div className="article_card">
          <div className="article_left">
            <h2 className="article_card_subtitle">28 april, 2024</h2>
            <h3 className="article_card_title">
              Master the Markets with FXify: Your Ultimate Trading Partner
            </h3>
            <p className="article_card_text">
              In today’s fast-paced financial world, having the right tools and
              expertise is essential for success in trading. FXify is here to be
              your ultimate partner, offering cutting-edge technology...
            </p>
            <a href="#" className="article_card_link">
              <span className="article_card_link_text">Read more</span>
              <span className="article_card_link_bg">
                <svg
                  width={120}
                  height={44}
                  viewBox="0 0 120 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_5001_8485)">
                    <ellipse
                      cx="67.5"
                      cy={44}
                      rx={40}
                      ry={18}
                      fill="#4852F5"
                      fillOpacity="0.6"
                    />
                  </g>
                  <g filter="url(#filter1_f_5001_8485)">
                    <ellipse
                      cx="107.5"
                      cy={51}
                      rx={40}
                      ry={18}
                      fill="#3FB9FE"
                      fillOpacity="0.6"
                    />
                  </g>
                  <g filter="url(#filter2_d_5001_8485)">
                    <circle
                      cx="0.824219"
                      cy="0.824219"
                      r="0.824219"
                      transform="matrix(-1 0 0 1 100.148 35)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 47.3242 41)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter4_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 78.3242 29)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter5_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 114.324 41)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter6_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 81.3242 38)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_5001_8485"
                      x="-12.5"
                      y={-14}
                      width={160}
                      height={116}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={20}
                        result="effect1_foregroundBlur_5001_8485"
                      />
                    </filter>
                    <filter
                      id="filter1_f_5001_8485"
                      x="27.5"
                      y={-7}
                      width={160}
                      height={116}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={20}
                        result="effect1_foregroundBlur_5001_8485"
                      />
                    </filter>
                    <filter
                      id="filter2_d_5001_8485"
                      x="97.2384"
                      y="33.7384"
                      width="4.17161"
                      height="4.17161"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter3_d_5001_8485"
                      x="45.2384"
                      y="39.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter4_d_5001_8485"
                      x="76.2384"
                      y="27.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter5_d_5001_8485"
                      x="112.238"
                      y="39.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter6_d_5001_8485"
                      x="79.2384"
                      y="36.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
          <div className="article_right">
            <Image
              src={articleRight}
              alt=""
              className="article_right_img"
            />
          </div>
        </div>
        <div className="article_card article_card_2">
          <div className="article_left">
            <h2 className="article_card_subtitle">28 april, 2024</h2>
            <h3 className="article_card_title">
              Master the Markets with FXify: Your Ultimate Trading Partner
            </h3>
            <p className="article_card_text">
              In today’s fast-paced financial world, having the right tools and
              expertise is essential for success in trading. FXify is here to be
              your ultimate partner, offering cutting-edge technology...
            </p>
            <a href="#" className="article_card_link">
              <span className="article_card_link_text">Read more</span>
              <span className="article_card_link_bg">
                <svg
                  width={120}
                  height={44}
                  viewBox="0 0 120 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_5001_8485)">
                    <ellipse
                      cx="67.5"
                      cy={44}
                      rx={40}
                      ry={18}
                      fill="#4852F5"
                      fillOpacity="0.6"
                    />
                  </g>
                  <g filter="url(#filter1_f_5001_8485)">
                    <ellipse
                      cx="107.5"
                      cy={51}
                      rx={40}
                      ry={18}
                      fill="#3FB9FE"
                      fillOpacity="0.6"
                    />
                  </g>
                  <g filter="url(#filter2_d_5001_8485)">
                    <circle
                      cx="0.824219"
                      cy="0.824219"
                      r="0.824219"
                      transform="matrix(-1 0 0 1 100.148 35)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter3_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 47.3242 41)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter4_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 78.3242 29)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter5_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 114.324 41)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <g filter="url(#filter6_d_5001_8485)">
                    <circle
                      cx="0.412109"
                      cy="0.412109"
                      r="0.412109"
                      transform="matrix(-1 0 0 1 81.3242 38)"
                      fill="#8EC9FF"
                      fillOpacity="0.88"
                      shapeRendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_5001_8485"
                      x="-12.5"
                      y={-14}
                      width={160}
                      height={116}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={20}
                        result="effect1_foregroundBlur_5001_8485"
                      />
                    </filter>
                    <filter
                      id="filter1_f_5001_8485"
                      x="27.5"
                      y={-7}
                      width={160}
                      height={116}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={20}
                        result="effect1_foregroundBlur_5001_8485"
                      />
                    </filter>
                    <filter
                      id="filter2_d_5001_8485"
                      x="97.2384"
                      y="33.7384"
                      width="4.17161"
                      height="4.17161"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter3_d_5001_8485"
                      x="45.2384"
                      y="39.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter4_d_5001_8485"
                      x="76.2384"
                      y="27.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter5_d_5001_8485"
                      x="112.238"
                      y="39.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter6_d_5001_8485"
                      x="79.2384"
                      y="36.7384"
                      width="3.34739"
                      height="3.34739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="0.630792" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5001_8485"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5001_8485"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </span>
            </a>
          </div>
          <div className="article_right">
            <Image
              src={articleRight}
              alt=""
              className="article_right_img"
            />
          </div>
        </div>
      </div>
      <div className="article_line_box">
        <span className="article_bottom_line_star">
          <svg
            width={43}
            height={37}
            viewBox="0 0 43 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1163_7648)">
              <ellipse
                cx="12.0057"
                cy="21.1081"
                rx="0.132706"
                ry="0.134651"
                transform="rotate(-90 12.0057 21.1081)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter1_d_1163_7648)">
              <ellipse
                cx="28.2733"
                cy="22.3082"
                rx="0.132706"
                ry="0.134651"
                transform="rotate(-90 28.2733 22.3082)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter2_d_1163_7648)">
              <ellipse
                cx="40.6893"
                cy="34.8673"
                rx="0.132706"
                ry="0.134651"
                transform="rotate(-90 40.6893 34.8673)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter3_d_1163_7648)">
              <ellipse
                cx="8.86696"
                cy="16.199"
                rx="0.265412"
                ry="0.269302"
                transform="rotate(-90 8.86696 16.199)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter4_d_1163_7648)">
              <ellipse
                cx="7.38649"
                cy="2.26544"
                rx="0.265412"
                ry="0.269302"
                transform="rotate(-90 7.38649 2.26544)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter5_d_1163_7648)">
              <ellipse
                cx="29.1111"
                cy="10.4663"
                rx="0.265412"
                ry="0.269302"
                transform="rotate(-90 29.1111 10.4663)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <g filter="url(#filter6_d_1163_7648)">
              <ellipse
                cx="2.2693"
                cy="28.9381"
                rx="0.265412"
                ry="0.269302"
                transform="rotate(-90 2.2693 28.9381)"
                fill="#8EC9FF"
                fillOpacity="0.88"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1163_7648"
                x="10.6095"
                y="19.7138"
                width="2.7927"
                height="2.78858"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_1163_7648"
                x="26.8771"
                y="20.9139"
                width="2.7927"
                height="2.78858"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_1163_7648"
                x="39.2931"
                y="33.473"
                width="2.7927"
                height="2.78858"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_d_1163_7648"
                x="7.33607"
                y="14.672"
                width="3.06223"
                height="3.05399"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_d_1163_7648"
                x="5.8556"
                y="0.738446"
                width="3.06223"
                height="3.05399"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_d_1163_7648"
                x="27.5802"
                y="8.93928"
                width="3.06223"
                height="3.05399"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_d_1163_7648"
                x="0.738415"
                y="27.4111"
                width="3.06223"
                height="3.05399"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="0.630792" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.815686 0 0 0 0 0.937255 0 0 0 0 0.901961 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1163_7648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1163_7648"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
        <div className="article_bottom_line">
          <span className="article_bottom_small_line" />
        </div>
      </div>
    </div>
  </section>
  <section className="category">
    <div className="category_container">
      <div className="category_top">
        <h2 className="caregory_title">Explore by category</h2>
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
        <span className="category_filter_btn_line" />
      </div>
      <div className="category_card_box">
        <div className="category_card">
          <div className="category_card_top_box">
            <div className="category_card_top">
              <p className="category_info_text">Market insights</p>
              <Image
                src={category1}
                alt=""
                className="category_top_img"
              />
            </div>
          </div>
          <div className="category_card_bottom">
            <h2 className="category_card_subtitle">24 april 2024</h2>
            <h3 className="category_card_title">
              Best FTMO Alterna tives <br /> in 2024
            </h3>
            <p className="category_card_text">
              Let’s look at prop firms offering similar or better services,
              programs...
            </p>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_top_box">
            <div className="category_card_top">
              <p className="category_info_text">Market insights</p>
              <Image
                src={category2}
                alt=""
                className="category_top_img"
              />
            </div>
          </div>
          <div className="category_card_bottom">
            <h2 className="category_card_subtitle">24 april 2024</h2>
            <h3 className="category_card_title">
              Best FTMO Alterna tives <br /> in 2024
            </h3>
            <p className="category_card_text">
              Let’s look at prop firms offering similar or better services,
              programs...
            </p>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_top_box">
            <div className="category_card_top">
              <p className="category_info_text">Market insights</p>
              <Image
                src={category3}
                alt=""
                className="category_top_img"
              />
            </div>
          </div>
          <div className="category_card_bottom">
            <h2 className="category_card_subtitle">24 april 2024</h2>
            <h3 className="category_card_title">
              Best FTMO Alterna tives <br /> in 2024
            </h3>
            <p className="category_card_text">
              Let’s look at prop firms offering similar or better services,
              programs...
            </p>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_top_box">
            <div className="category_card_top">
              <p className="category_info_text">Market insights</p>
              <Image
                src={category4}
                alt=""
                className="category_top_img"
              />
            </div>
          </div>
          <div className="category_card_bottom">
            <h2 className="category_card_subtitle">24 april 2024</h2>
            <h3 className="category_card_title">
              Best FTMO Alterna tives <br /> in 2024
            </h3>
            <p className="category_card_text">
              Let’s look at prop firms offering similar or better services,
              programs...
            </p>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_top_box">
            <div className="category_card_top">
              <p className="category_info_text">Market insights</p>
              <Image
                src={category5}
                alt=""
                className="category_top_img"
              />
            </div>
          </div>
          <div className="category_card_bottom">
            <h2 className="category_card_subtitle">24 april 2024</h2>
            <h3 className="category_card_title">
              Best FTMO Alterna tives <br /> in 2024
            </h3>
            <p className="category_card_text">
              Let’s look at prop firms offering similar or better services,
              programs...
            </p>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_top_box">
            <div className="category_card_top">
              <p className="category_info_text">Market insights</p>
              <Image
                src={category6}
                alt=""
                className="category_top_img"
              />
            </div>
          </div>
          <div className="category_card_bottom">
            <h2 className="category_card_subtitle">24 april 2024</h2>
            <h3 className="category_card_title">
              Best FTMO Alterna tives <br /> in 2024
            </h3>
            <p className="category_card_text">
              Let’s look at prop firms offering similar or better services,
              programs...
            </p>
          </div>
        </div>
      </div>
      <Link href="/blog_article" className="category_bottom_btn">
        <div>
          <span className="category_bottom_btn_text">View more</span>
          <svg
            width={20}
            height={21}
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0586 12.1162L10.0003 17.1745L4.94193 12.1162"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 3.00684L10 17.0318"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="category_bottom_btn_elipse">
          <svg
            width={152}
            height={45}
            viewBox="0 0 152 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_1163_7659)">
              <ellipse
                cx="73.6816"
                cy="56.4141"
                rx="60.5"
                ry="27.5"
                fill="#BDBBF5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_1163_7659"
                x="-16.8184"
                y="-1.08594"
                width={181}
                height={115}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={15}
                  result="effect1_foregroundBlur_1163_7659"
                />
              </filter>
            </defs>
          </svg>
        </span>
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

          />
          <button className="social_email_submit_btn">
            <span className="social_email_submit_btn_arrow">
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
            </span>
            <span className="social_email_submit_btn_elipse">
              <svg
                width={44}
                height={32}
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
                    x={-15}
                    y={0}
                    width={73}
                    height={63}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={10}
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
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0254 5.72778L17.0837 10.7861L12.0254 15.8444"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91602 10.7861H16.941"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="social_telegram_link_elipse">
            <svg
              width={218}
              height={45}
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
                  width={247}
                  height={115}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={15}
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
            <span className="social_discord_link_text">Join FXIFY Discord</span>
            <svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0254 5.72778L17.0837 10.7861L12.0254 15.8444"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.91602 10.7861H16.941"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="social_discord_link_elipse">
            <svg
              width={218}
              height={45}
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
                  width={247}
                  height={115}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation={15}
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
</>

  );
}
