const API_URL = "https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json";
const LOCAL_STORAGE_KEY = "saved_products";

export async function getProducts() {
    let products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!products) {
        const response = await fetch(API_URL);
        products = await response.json();
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
    }
    return products;
}
