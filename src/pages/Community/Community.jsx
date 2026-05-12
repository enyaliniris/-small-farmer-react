import React from 'react'
import { HOST } from '../../components/api_config'
import { LOGIN } from '../../components/api_config'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../contexts/AuthContext'

//引入樣式
import '../../css/members.css'
import '../../css/community.css'

function Community() {
const [myForm, setMyForm] = useState({
    account: '',
    password: '',
  })
  const { setMyAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [shownPassword, setHidePassword] = useState(false)
  const { myAuth, logout } = useContext(AuthContext)


    return (
        <div className='m-session d-flex justify-content-center pb-5'>
            {/* 功能列 */}
            <div className='cm-container d-flex flex-column  col-10 h-100 mt-2'>
                <div className='w-100 d-flex justify-content-between'>
                    <div className='cm-select-bar d-flex justify-align-content-between align-items-center gap-2 mt-3 ms-2 me-2 text-center '>
                        <div className='cm-select-bar-btn d-flex justify-content-center align-items-center'>
                            <a href='/AddArtical'><p className='cm-pbt'>發表新文章</p></a>
                        </div>
                        <div className='cm-select-bar-btn d-flex justify-content-center align-items-center'>
                            <p className='cm-pbt'>我的文章</p>
                        </div>
                    </div>
                    <div className='cm-select-bar  d-flex justify-align-content-between align-items-center gap-2 mt-3 ms-2 me-2 text-center '>
                        <div className='cm-select-bar-btn  d-flex justify-content-center align-items-center'>
                            <p>文章排列方式:</p>
                        </div>
                        <div className='cm-select-bar-btn d-flex justify-content-center align-items-center'>
                            <p className='cm-pbt'>發文時間</p>
                        </div>
                        <div className='cm-select-bar-btn d-flex justify-content-center align-items-center'>
                            <p className='cm-pbt'>熱門迴響</p>
                        </div>
                    </div>
                </div>
                {/* 功能列 結束*/}

                {/* 文章卡片 */}
                {/* 擺放卡片位置的地方vvvv */}
                <div className='cm-artical-session d-flex justify-content-center align-items-start  col-12 h-100 mt-5'>

                    {/* 可以用迴圈生出來的卡片vvv */}
                    <div className='cm-artical-card mt-1'>
                        <div className='cm-artical-innerimg' >
                            <img src={`${HOST}/images/community/1.jpg`}></img>
                        </div>
                        <div className='cm-member-info w-100 d-flex align-items-end ms-3'>
                            <div className='cm-member-ava'>
                                <img src='/images/teacher04.png'></img>
                            </div>
                            <div className='d-flex flex-column ms-2 '>
                                <div className='cm-member-detail'>
                                    <span className='fs-6'>BY 王曉農</span>
                                    <span className='fs-6'> 發表於:2020-04-05</span>
                                </div>
                            </div>
                        </div>

                        {/* 點讚區 */}

                        <div className='d-flex justify-content-around cm-like-area'>
                            <div className='cm-like-comments w-50 m-4 d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <img src='/icons/like.png'></img>
                                    <div className='cm-like-span text-success fs-6'>(23)</div>
                                </div>

                                <div className='d-flex gap-2 align-items-center'>
                                    <img src='/icons/comment.png'></img>
                                    <div className='cm-like-span  fs-6'>(20)</div>
                                </div>
                            </div>


                            <div className='cm-like-comments w-50 m-4 d-flex align-items-center justify-content-end gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <img src='/icons/instagram.png'></img>
                                </div>

                                <div className='d-flex gap-2 align-items-center'>
                                    <img src='/icons/facebook.png'></img>
                                </div>
                            </div>
                        </div>

                        {/* 文章 */}
                        <div className='cm-arti-show d-flex justify-content-around w-100 h-100 bg-white'>
                            <div className='cm-artical-contain-area w-100 h-100 bg-white d-flex'>
                                <div className='cm-artical ms-5 me-5 mt-4 w-100'>
                                    <h3>文章標題</h3>
                                    <span className='fs-6'>屬性本來的薇薇安在這裡學會了鋼琴、小提琴等樂功能就是用來設計區塊的陰影效果，網頁中的許多元素都可以使用區塊的式來呈，例如圖</span>
                                    <span className='fs-5 text-warning'>....[點我看更多]</span>
                                </div>
                            </div>
                        </div>




                    </div>


                </div>
                {/* 文章卡片 */}
            </div>
        </div>
    )
}

export default Community
