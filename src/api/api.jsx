import instance from './axios'

export const HOST = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3033'

export const getLessons = () => instance.get('/lessons')

export const getLessonById = (id) => instance.get(`/lessons/${id}`)

// GET商品清單資料
//export const PRODUCT_DATA = `${HOST}/product/api`
export const getProductData = (params) =>
  instance.get('/product/productList', { params })

// GET商品頁面資料/:sid
export const getProductPageData = (sid, params) =>
  instance.get(`/product/${sid}`, { params })

// POST商品收藏/:type
//export const BOOKMARK_ADD = `${HOST}/bookmark/add`
export const addBookmarkProduct = (productSid) =>
  instance.post('/bookmark/add/product', { product_sid: productSid })

// POST課程收藏/:type
export const addBookmarkLesson = (lessonSid) =>
  instance.post('/bookmark/add/lesson', { lesson_sid: lessonSid })

// DELETE商品收藏/:type/:sid
//export const BOOKMARK_DELETE = `${HOST}/bookmark/delete`
export const deleteBookmarkProduct = (productSid) =>
  instance.delete(`/bookmark/delete/product/${productSid}`)

export const deleteBookmarkLesson = (lessonSid) =>
  instance.delete(`/bookmark/delete/lesson/${lessonSid}`)

// GET商品收藏
//export const BOOKMARK_DATA = `${HOST}/bookmark/mybookmark`
export const getBookmarkData = (params) =>
  instance.get('/bookmark/mybookmark', { params })
// GET會員評論
//export const MY_COMMENT_DATA = `${HOST}/comment/mycomment`
export const getMyCommentData = (params) =>
  instance.get('/comment/mycomment', { params })
// GET首頁評論
//export const COMMENT_DATA = `${HOST}/comment/api`
export const getCommentData = (params) =>
  instance.get('/comment/api', { params })

// POST商品評論/:type
//export const COMMENT_ADD = `${HOST}/comment/add`
export const postAddComment = (APItype, data) =>
  instance.post(`/comment/add/${APItype}`, { data })

// PUT修改商品評論/:type
//export const COMMENT_EDIT = `${HOST}/comment/edit`
export const postEditComment = (APItype, data) =>
  instance.post(`/comment/edit/${APItype}`, { data })

// 登入, POST
export const LOGIN = `${HOST}/login`

//Coupon資料
export const COUPON_DATA = `${HOST}/coupon`
//POST發送兔飽飽券及徽章
export const COUPON_RABBIT = `${HOST}/coupon/addRabbit`
//POST判斷有無玩過遊戲
export const DONE_RABBIT = `${HOST}/coupon/doneRabbit`

//寄送地址資料
export const MY_ADDRESS_DATA = `${HOST}/myaddress`

// GET課程列表
//export const LESSON_DATA = `${HOST}/lesson/lessonList`
export const getLessonList = () => instance.get(`/lesson/lessonList`)
//會員註冊用API
export const Register = `${HOST}/register/api`

//登入登出/取得會員資料
export const myDataDetail = `${HOST}/myDataDetail/api`

// GET課程詳細
export const LESSON_DETAIL_DATA = `${HOST}/lesson`

//訂單詳細
export const MY_ORDER_DETAILS = `${HOST}/orderdetails`

//我的課程日記
export const MY_WEEK_C = `${HOST}/weekcalender`

//更新會員資料
export const MY_EDIT_MEMBER = `${HOST}/member/edit`

//更新送貨地址
export const MY_EDIT_ADDRESS = `${HOST}/member/editaddress`

//訂單
export const MY_ORDER = `${HOST}/order`

//我的會員右邊
export const MY_MEMBER = `${HOST}/mymember`
