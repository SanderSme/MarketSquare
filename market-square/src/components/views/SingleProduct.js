import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/modules/products";
import Discount from "../Discount";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { addSingleItemToCart } from "../../store/modules/cartSlice";


const SingleProduct = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const {singleProduct, isError} = useSelector(state => state.products);


    useEffect(() => {
      if(id){
        dispatch(fetchSingleProduct(id))
      }
    }, [dispatch, id])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }


  return (<div>
    {singleProduct && !isError && <div className="bg-white max-w-6xl mx-auto">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{singleProduct.title}</h2>
        <p className="mt-4 text-gray-500">
          {singleProduct.description}
        </p>
        <button type="submit" onClick={() => dispatch(addSingleItemToCart(singleProduct))} className="rounded-md w-2/3 mt-4 bg-blue-700 py-1.5 px-2.5 text-sm font-semibold text-white hover:bg-blue-900">Add to cart</button>
        <div className="mt-4 px-2 py-1 bg-red-500 w-fit text-center text-white rounded-md">{singleProduct.discountPercentage}% off</div>
        <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{singleProduct.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">{singleProduct.brand} {singleProduct.category}</dd>
              <dd className="mt-2 text-sm text-gray-500">Price: <span className="text-lg text-green-600">{Discount(singleProduct.price, singleProduct.discountPercentage)}$</span><strike className="ml-4 text-lg text-red-600">{singleProduct.price}$</strike></dd>
              <dd className="mt-2 text-sm text-gray-500">Rating: {singleProduct.rating}/5</dd>
            </div>
        </dl>
      </div>
      <Slider {...settings}>
    {singleProduct.images &&
      singleProduct.images.length &&
      singleProduct.images.map((image) => (
        <div key={image}>
          <img src={image} alt="product" className="rounded-lg bg-gray-100" />
        </div>
      ))}
  </Slider>
    </div>
  </div>}
  {isError && <h1>Sorry there was an Error</h1>}</div>
  )
}

export default SingleProduct