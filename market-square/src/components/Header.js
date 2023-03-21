import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
        <header className="h-12 flex bg-gray-600 w-full">
        <div className="max-w-6xl mx-auto text-white my-auto">
            <Link to={`/products`}>
                <p className="text-xl hover:underline">Home</p>
            </Link>
        </div>
        </header>
    </div>
  )
}

export default Header