import { useSelector } from "react-redux"
import Discount from "../Discount"
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../store/modules/cartSlice"
import { NavLink } from "react-router-dom"

const CartCheckoutPage = () => {
  const {itemsInCart} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  let totalPrice = 0
  itemsInCart.forEach(item => {
    if(item.discountPercentage) {
        totalPrice += Math.round(item.price - item.price * item.discountPercentage / 100)
    } else {
        totalPrice += item.price;
    }
    
  });
  return (
    <div>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col overflow-y-scroll bg-white">
            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900"
                        id="slide-over-title">Shopping cart</h2>
                </div>
                <div className="mt-8">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {itemsInCart.length > 0 && itemsInCart.map((product) => (
                            <li key={product.id} className="flex py-6">
                            <div
                                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"/>
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div
                                        className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          {product.title}
                                        </h3>
                                        <p className="ml-4">{Discount(product.price, product.discountPercentage)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                </div>
                                <div
                                    className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 1</p>
                                    <div className="flex">
                                        <button type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                onClick={() => dispatch(removeItemFromCart(product.id))}
                                                >Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                          ))}
                        </ul>
                        {!itemsInCart.length && <div className="text-center text-lg">No items in cart</div>}
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at
                    checkout.</p>
                <div className="mt-6">
                    <a href="#"
                       className="w-1/2 mx-auto flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                        or
                        <NavLink to="/products"
                                className="font-medium text-indigo-600 hover:text-indigo-500">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartCheckoutPage