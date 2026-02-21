import * as api from './api.js';
import * as ui from './ui.js';
import * as favs from './favorites.js';

ui.elements.searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = ui.elements.searchInput.value.trim();
    if (!query) return;

    ui.displayLoading(true);

    try {
        // 1. Recherche Pays
        const country = await api.getCountryData(query);
        const [lat, lon] = country.latlng;

        // 2. Recherche Météo
        const weather = await api.getWeatherData(lat, lon);

        // 3. Historique et Affichage
        favs.addToHistory(country.name.common);
        const isFav = favs.getFavorites().some(f => f.name === country.name.common);
        
        ui.displayLoading(false);
        ui.renderResult(country, weather, isFav);

        // 4. Gestion clic favoris
        document.querySelector('#fav-btn').addEventListener('click', () => {
            favs.toggleFavorite({ name: country.name.common, lat, lon });
            alert("Favoris mis à jour !");
        });

    } catch (error) {
        ui.displayLoading(false);
        ui.displayError("Aucun résultat trouvé pour cette recherche.");
    }
});