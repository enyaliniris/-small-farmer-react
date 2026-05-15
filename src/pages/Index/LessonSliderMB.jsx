import React, { useEffect, useState } from 'react'
import { HOST, getLessonList } from '../../api/api'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import '../../css/index.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
function LessonSliderMB() {
  const [imageIndex, setImageIndex] = useState(0)
  const settings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => {
      console.log({ current, next, imageIndex })
      if (next == -2) {
        setImageIndex(1)
      } else {
        setImageIndex(next)
      }
    },
  }

  const [lessonData, setLessonData] = useState([])

  // const [lessonIndex, setLessonIndex] = useState(0)
  //課程篩選
  const lessonOptions = ['農耕', '採收', '親子', '生態']
  const [lessonCategoryFilter, setLessonCategoryFilter] = useState('農耕')
  const [leftbtn, setLeftbtn] = useState(0)
  const getLessonData = async () => {
    const res = await getLessonList()
    setLessonData(res)
  }

  //純函式-傳入資料陣列,以lessonCategory進行過濾=>回傳過濾後的資料陣列
  const filterByCategory = (lessonData, lessonCategoryFilter) => {
    switch (lessonCategoryFilter) {
      case '生態':
        return lessonData.filter((v, i) => {
          return v.lesson_category_sid === 4
        })

      case '親子':
        return lessonData.filter((v, i) => {
          return v.lesson_category_sid === 3
        })
      case '採收':
        return lessonData.filter((v, i) => {
          return v.lesson_category_sid === 2
        })
      case '農耕':
        return lessonData.filter((v, i) => {
          return v.lesson_category_sid === 1
        })
      default:
        return lessonData.filter((v, i) => {
          return v.lesson_category_sid === 1 && v.lesson_img === 1
        })
    }
  }

  function lessonInfoData() {
    setTimeout(() => {
      const info2 = document.querySelectorAll('.lesson_info2')
      //console.log({ info2 })
      const lesson_id = document
        .querySelector('.slick-active img.class-list2')
        ?.getAttribute('data-lid')
      //console.log({ lesson_id })
      // console.log(document.querySelector('.slick-active').querySelector('img').getAttribute('data-lid'))
      info2.forEach((div) => {
        if (div.getAttribute('data-lid') === lesson_id) {
          div.style.display = 'block'
        } else {
          div.style.display = 'none'
        }
      })
    }, 500)
  }

  //初始化
  useEffect(() => {
    getLessonData()
  }, [])

  useEffect(() => {
    lessonInfoData()
  }, [lessonCategoryFilter, imageIndex])
  return (
    <>
      <h2 className="w-100 m-auto">
        <div className="d-flex flex-column justify-content-center m-auto align-items-start">
          <div>
            <span className="f-32 f-Yellow font-B sp-3">小農</span>
            <span className="f-32 f-LightGreen font-B sp-3">ＧＯ活動</span>
          </div>
          <div>
            <span className="f-38 f-Yellow font-B sp-3">
              新<span className="a-bottomline position-relative">小農</span>活
            </span>
            <span className="f-16 f-Red font-B sp-2">系列課程</span>
          </div>
        </div>
      </h2>
      <div className="d-flex a-lesson-btn">
        {lessonOptions.map((v, i) => {
          return (
            <button
              className={
                leftbtn === i
                  ? 'a-lesson-type font-B f-16 f-Red sp-2 me-1 text-center a-lesson-type-seleted'
                  : 'a-lesson-type font-B f-16 f-Gray sp-2 me-1 text-center'
              }
              key={i}
              onClick={() => {
                setLessonCategoryFilter(v)
                setLeftbtn(i)
              }}
            >
              {v}
            </button>
          )
        })}
      </div>
      <div className="a-slider-wrapper">
        <div className="a-lesson-img-layout"></div>
        <Slider
          {...settings}
          onSwipe={(e) => {
            lessonInfoData()
          }}
        >
          {filterByCategory(lessonData, lessonCategoryFilter).map((v, i) => {
            let imgarr = v.lesson_img.split(',')
            return (
              <div className="d-flex justify-content-center" key={i}>
                <div
                  key={i}
                  className={
                    i === imageIndex
                      ? 'a-lesson-slide aaa'
                      : 'a-lesson-slide a-lesson-activeSlide'
                  }
                >
                  <div className="a-slide-drag-main">
                    <img
                      className="class-list2"
                      data-lid={v.lesson_id}
                      src={`${HOST}/images/lesson/${imgarr[0]}`}
                      alt={v.lesson_img}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

      {filterByCategory(lessonData, lessonCategoryFilter).map((v, i) => {
        return (
          <div
            key={i}
            className="lesson_info2"
            data-lid={v.lesson_id}
            style={{ display: 'none' }}
          >
            <p className="font-B f-24 f-Brown sp-2 mt-4 d-none d-lg-block">
              {v.lesson_name}
            </p>
            <p className="font-B f-20 f-Yellow sp-2 d-none d-lg-block">
              {v.lesson_date}{' '}
            </p>

            <p className="font-R f-20 f-Brown sp-2 a-lesson-paragraph flex-wrap">
              {v.lesson_info2}
            </p>
            <div className="w-100 m-auto">
              <Link
                to={`/lesson/${v.sid}`}
                className="container buttonYS font-B f-20 f-Brown sp-1 text-center mt-3"
              >
                我想瞭解更多
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default LessonSliderMB
