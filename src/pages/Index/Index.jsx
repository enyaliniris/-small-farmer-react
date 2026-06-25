import '../../css/index.css'
// import Navbar from './Navbar'
import Footer from './Footer'
import LessonSlider from './LessonSlider'
import LessonSliderMB from './LessonSliderMB'
// import Footer from './Footer'
import SlideShow from './SlideShow'
import SlideShowMobile from './SlideShowMobile'
import IndexRiver from '../IndexRiver/IndexRiver'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import LoginGuard from '../../components/LoginGuard'

function Index() {
  const [showLoginAlert, setShowLoginAlert] = useState(false)
  // 顯示登入提醒
  return (
    <>
      <LoginGuard
        show={showLoginAlert}
        setClose={setShowLoginAlert}
        to="/Rabbit"
      />
      <section id="a-mainslide">
        <div className="a-homeslide">
          <div className="slider-desktop-only ">
            <SlideShow />
          </div>

          <div className="slider-mobile-only">
            <SlideShowMobile />
          </div>
        </div>
      </section>
      <section id="a-top_about">
        <div className="a-slide_imgleft"></div>
        <div className="a-slide_imgright"></div>
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
          <span className="f-32 sp-3 font-B f-Brown">
            <span className="f-LightGreen">環境</span>與
            <span className="f-Yellow ">人</span>
            的永續共存
          </span>
          <span className="f-32 sp-3 font-B f-Brown">親子都能放心遨遊在</span>
          <span className="f-32 sp-3 font-B f-Brown">無毒友善的大自然懷抱</span>

          <div>
            <a
              href="#/"
              className="container buttonYL font-B f-20 f-Brown sp-3 mt-3"
            >
              關於小農遊
            </a>
          </div>
        </div>
      </section>
      <section id="a-lesson">
        <div className="slider-desktop-only">
          <LessonSlider />
        </div>
        <div className="slider-mobile-only">
          <LessonSliderMB />
        </div>
      </section>
      <section
        id="a-products-news-mb"
        className="d-block d-lg-none mt-2 mt-lg-0 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="m-auto">
          <div className="f-32 f-Yellow font-B sp-3 a-products-title1">
            <span>小農遊</span>
            <span>產地直送</span>
            <div>
              <span>在地</span>
              <span className="f-LightGreen">新鮮商品</span>
            </div>
          </div>
          <div className="a-products-title font-L f-16 f-Brown sp-2">
            最新消息!生態農場所栽種的作物每次活動約可認識與接觸到十種以上小農作物。
          </div>
        </div>
        <div className="px-4">
          <Link to={'/Product?cate=2'} className="a-products-mb my-5">
            <img
              src="./Buttons/a-products-vegetable.png"
              width="112px"
              height="127px"
              alt=""
            />
            <img
              src="./svg/indexProduct-M-V.png"
              width="186px"
              height="91px"
              alt=""
            />
          </Link>
          <Link to={'/Product?cate=1'} className="a-products-mb my-5">
            <img
              src="./svg/indexProduct-M-F.png"
              width="196px"
              height="117px"
              alt=""
            />
            <img
              src="./Buttons/a-products-fruit.png"
              width="112px"
              height="127px"
              alt=""
            />
          </Link>
          <Link to={'/Product?cate=3'} className="a-products-mb my-5">
            <img
              src="./Buttons/a-products-processed.png"
              width="112px"
              height="127px"
              alt=""
            />
            <img
              src="./svg/indexProduct-M-P.png"
              width="202px"
              height="93px"
              alt=""
            />
          </Link>
        </div>
      </section>
      <IndexRiver />
      <section className="d-sm-none d-lg-block" id="a-products-news">
        <div className="a-products-img">
          <div className="a-products-title">
            <div className="f-42 f-Yellow font-B sp-3 a-products-title1">
              <span>小農遊</span>
              <span>產地直送</span>
              <div>
                <span>在地</span>
                <span className="f-LightGreen">新鮮商品</span>
              </div>
            </div>
            <div className="a-products-title2">
              <img src="./svg/a-products-title-img.png" alt="" />
              <span className="font-R f-16 f-Brown sp-2 a-news-paragraph">
                最新消息!生態農場所栽種的作物約30~40種，每次活動約可認識與接觸到十種以上小農作物。
              </span>
            </div>
          </div>

          <Link to={'/Product?cate=2'} className="a-products-vegetable"></Link>
          <Link to={'/Product?cate=1'} className="a-products-fruit"></Link>
          <Link to={'/Product?cate=3'} className="a-products-processed"></Link>
          <a
            href="#/"
            className="a-products-address"
            onClick={(e) => {
              e.preventDefault()
              setShowLoginAlert(true)
            }}
          ></a>
        </div>
      </section>

      <section id="a-address">
        <div className="d-flex justify-content-evenly align-content-center m-auto">
          <div className="a-address-title">
            <div className="d-flex flex-column gap-1 justify-content-center align-items-start">
              <span className="f-42 f-Yellow font-B sp-1">
                從都市到<span className="f-LightGreen">鄉村</span>
              </span>
              <span className="f-38 f-Yellow font-B sp-1">比想像中近</span>
              <p className="f-Brown f-20 font-R sp-1">
                313新竹縣尖石鄉嘉樂村2鄰70號
              </p>
              <p className="font-R f-20 f-Brown sp-2">
                小農遊在台灣四處踏查，拜訪農友，尋找台灣在地好糧好食好蔬果，搭起產地與餐桌的橋樑。
              </p>
              <div>
                <Link
                  to={'/map'}
                  className="buttonYL font-B fontmap f-Brown sp-3"
                >
                  小農友地圖
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src="./svg/a-address-map.png"
              className="a-address-map"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
