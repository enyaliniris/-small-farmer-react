// 引入react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// 換頁滾動視窗到頂端
import ScrollToTop from './components/ScrollToTop'

//Index
import IndexRiver from './pages/IndexRiver/IndexRiver'
import Index from './pages/Index/Index'
import Rabbit from './pages/Rabbit/Rabbit'

//Lesson
import Lesson from './pages/Lesson/Lesson'
import LessonDetail from './pages/LessonDetail/LessonDetail'

//Login
import Login from './pages/Login/LoginPage'
import Register from './pages/Register/Register'
import RegisterComfirm from './pages/Register/RegisterComfirm'
// import GoogleRegister from './pages/Register/GoogleRegister(nouse)'
import RegisterChecked from './pages/Register/RegisterChecked'
import { AuthContextProvider } from './contexts/AuthContext'

// Product
import Product from './pages/Product/Product'
import ProductPage from './pages/ProductPage/ProductPage'

//Cart
import { CartProvider } from './components/utils/useCart'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import ShoppingPayment from './pages/ShoppingCart/ShoppingPayment'
import ShoppingPayConfirm from './pages/ShoppingCart/ShoppingPayConfirm'
import LinePayCancel from './pages/ShoppingCart/LinePayCancel'
import ShoppingConfirm from './pages/ShoppingCart/ShoppingConfirm'

//Member
import MyBookmarkLeft from './pages/Member/MyBookmarkLeft'
import MyCommentLeft from './pages/Member/MyCommentLeft'
import MemberDetail from './pages/Member/MemberDetail'
import MemberLeft from './pages/Member/MemberLeft'
import MyOrderLeft from './pages/Member/MyOrderLeft'
import OrderDetailLeft from './pages/Member/OrderDetailLeft'
import MyCouponLeft from './pages/Member/MyCouponLeft'
import MyAwardsLeft from './pages/Member/MyAwardsLeft'

//Community
import Community from './pages/Community/Community'
import AddArtical from './pages/Community/Addartical'

import Navbar from './pages/Index/Navbar'
import Footer from './pages/Index/Footer'
import TryMap from './pages/TryMap/TryMap'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <AuthContextProvider>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/IndexRiver" element={<IndexRiver />} />
              <Route path="/Rabbit" element={<Rabbit />} />
              <Route path="/map" element={<TryMap />} />

              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Checked" element={<RegisterChecked />} />
              <Route path="/Comfirm" element={<RegisterComfirm />} />
              {/* <Route path="/GoogleR" element={<GoogleRegister />} /> */}

              <Route path="/lesson" element={<Lesson />} />
              <Route path="/lesson/:sid" element={<LessonDetail />} />

              <Route path="/Product" element={<Product />} />
              <Route path="/Product/:sid" element={<ProductPage />} />

              <Route path="/Cart" element={<ShoppingCart />} />
              <Route path="/Payment" element={<ShoppingPayment />} />
              <Route path="/PayConfirm" element={<ShoppingPayConfirm />} />
              <Route path="/LinePayCancel" element={<LinePayCancel />} />
              <Route path="/Confirm" element={<ShoppingConfirm />} />

              <Route path="MyMember" element={<MemberDetail />}>
                <Route index element={<MemberLeft />} />
                <Route path="MyOrder" element={<MyOrderLeft />} />
                <Route path="MyOrder/:uuid" element={<OrderDetailLeft />} />
                <Route path="MyCoupon" element={<MyCouponLeft />} />
                <Route path="MyBookmark" element={<MyBookmarkLeft />} />
                <Route path="MyComment" element={<MyCommentLeft />} />
                <Route path="MyAwards" element={<MyAwardsLeft />} />
              </Route>
              {/* 測試區 */}
              <Route path="/Community" element={<Community />} />
              <Route path="/AddArtical" element={<AddArtical />} />
            </Routes>
            <Footer />
          </AuthContextProvider>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
