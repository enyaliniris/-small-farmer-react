import React from 'react'
import '../../css/main.css'
import { Link } from 'react-router-dom'
import littlefarmLOGO from '../../icon/littlefarmLOGO.png'
import IconPhone from '../../icon/IconPhone.svg'
import iconCart from '../../icon/icon-cart.svg'
import iconIG from '../../icon/icon-ig.svg'
import iconFB from '../../icon/icon-fb.svg'
import footer3 from '../../icon/footer3.svg'
import footer2 from '../../icon/footer2.svg'
function Footer() {
  return (
    <>
      <section id="Footer">
        <div className="footer-card">
          <div className="d-flex justify-content-center">
            <img
              src={littlefarmLOGO}
              className="footer-logoimg "
              alt=""
            />
          </div>
          <p className="text-center f-Brown f-16 font-R sp-1">
            <img src={IconPhone} alt="" className="me-1" />
            0921-222-222
          </p>
          <p className="text-center f-Brown f-16 font-R sp-1">
            313新竹縣尖石鄉嘉樂村2鄰70號
          </p>
          <div className="d-flex justify-content-evenly mt-4 mt-md-2">
            <Link to={'/Product?cate=2'}>
              <div className="button-footer ">
                <img
                  src={iconCart}
                  alt="icon-cart"
                  width="40"
                  height="40"
                />
              </div>
            </Link>
            <a href="#/" className="">
              <div className="button-footer">
                <img
                  src={iconIG}
                  alt="icon-ig"
                  width="40"
                  height="40"
                />
              </div>
            </a>
            <a href="#/" className="">
              <div className="button-footer d-flex justify-content-center">
                <img
                  src={iconFB}
                  alt="icon-fb"
                  width="40"
                  height="40"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-img d-sm-none d-md-block">
          <img src={footer3} alt="" className="float-start" />
          <img src={footer2} alt="" className="float-end" />
        </div>
      </section>
    </>
  )
}

export default Footer
