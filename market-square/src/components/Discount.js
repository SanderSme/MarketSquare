const Discount = (orgPrice, percent) => {
    if(percent) {
        return <><span className="text-lg text-green-600">${Math.round(orgPrice - orgPrice * percent / 100)}</span><strike className="ml-2 text-lg text-red-600">${orgPrice}</strike></>
    } else {
        return <><span className="text-lg">${orgPrice}</span></>
    }
}

export default Discount