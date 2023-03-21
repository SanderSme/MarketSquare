import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../store/modules/products";
import Header from "../Header";


const SingleProduct = () => {
    let {id} = useParams();
    const dispatch = useDispatch()
    const {singleProduct} = useSelector(state => state.products);


    useEffect(() => {
      dispatch(fetchSingleProduct(id))
    }, [dispatch, id])

    console.log(singleProduct);


  return (<div>
    <Header/>
    {singleProduct && <div className="bg-white">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{singleProduct.title}</h2>
        <p className="mt-4 text-gray-500">
          {singleProduct.description}
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{singleProduct.title}</dt>
              <dd className="mt-2 text-sm text-gray-500">{singleProduct.brand} {singleProduct.category}</dd>
              <dd className="mt-2 text-sm text-gray-500">Price: {singleProduct.price}$</dd>
              <dd className="mt-2 text-sm text-gray-500">Rating: {singleProduct.rating}/5</dd>
            </div>
        </dl>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        {singleProduct.images.map((image) => (
          <img
          key={image}
          src={image}
          alt="product"
          className="rounded-lg bg-gray-100"
        />
        ))}
      </div>
    </div>
  </div>}</div>
  )
}

export default SingleProduct