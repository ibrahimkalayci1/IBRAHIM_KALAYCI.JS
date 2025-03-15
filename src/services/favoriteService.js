const FAVORITES_KEY = "favorite_products";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || {};
}

export function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function toggleFavorite(productId) {
    const favorites = getFavorites();
    favorites[productId] = !favorites[productId];
    saveFavorites(favorites);
    return favorites[productId];
}
