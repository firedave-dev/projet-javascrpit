const STORAGE_KEY = 'meteo_favs';
const HISTORY_KEY = 'search_history';

export function toggleFavorite(data) {
    let favs = getFavorites();
    const index = favs.findIndex(f => f.name === data.name);
    
    if (index > -1) {
        favs.splice(index, 1);
    } else {
        favs.push(data);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function addToHistory(search) {
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    history = [search, ...history.filter(h => h !== search)].slice(0, 5);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    return history;
}