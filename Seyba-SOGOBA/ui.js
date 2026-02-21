export const elements = {
    searchForm: document.querySelector('#search-form'),
    searchInput: document.querySelector('#search-input'),
    resultContainer: document.querySelector('#result'),
    loader: document.querySelector('#loader'),
    historyList: document.querySelector('#history')
};

export function displayLoading(show) {
    elements.loader.style.display = show ? 'block' : 'none';
    if (show) elements.resultContainer.innerHTML = '';
}

export function displayError(message) {
    elements.resultContainer.innerHTML = `<p class="error">${message}</p>`;
}

export function renderResult(country, weather, isFav) {
    elements.resultContainer.innerHTML = `
        <div class="card">
            <img src="${country.flags.svg}" width="100">
            <h2>${country.name.common} (${country.capital})</h2>
            <p>Population: ${country.population.toLocaleString()}</p>
            <div class="weather">
                <p>Température: ${weather.current_weather.temperature}°C</p>
                <p>Vitesse vent: ${weather.current_weather.windspeed} km/h</p>
            </div>
            <button id="fav-btn">${isFav ? '⭐ Retirer des favoris' : '☆ Ajouter aux favoris'}</button>
        </div>
    `;
}