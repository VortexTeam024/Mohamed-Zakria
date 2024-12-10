import { Route, Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoryDetails from "./pages/CategoryDetails";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import VerifyCode from "./pages/auth/VerifyCode";
import NewPassword from "./pages/auth/NewPassword";
import NotFound from "./pages/NotFound";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => {
  const Router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<CategoryDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route path="/reset-password" element={<NewPassword />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ));
  return (
    <RouterProvider router={Router} />
  )
}

export default App