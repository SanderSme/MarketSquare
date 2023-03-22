import {Route, Routes} from "react-router-dom"
import Products from "../components/views/Products"
import SingleProduct from "../components/views/SingleProduct"
import CartCheckoutPage from "../components/views/CartCheckoutPage"
import Contact from "../components/views/Contact"
import PageNotFound from "../components/views/PageNotFound"

function Router() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/product/:id" element={<SingleProduct/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>
                <Route path="/cart" element={<CartCheckoutPage/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}

export default Router