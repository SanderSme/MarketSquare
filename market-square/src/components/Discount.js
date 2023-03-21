const Discount = (orgPrice, percent) => {
    return Math.round(orgPrice - orgPrice * percent / 100)
}

export default Discount