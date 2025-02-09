export const fetchCurrencySymbol = (currencyCode: string) => {
    if (currencyCode == "NGN") {
        return ["NGN", "₦"]
    }
    return ["USD", "$"]
}