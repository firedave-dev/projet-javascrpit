export async function getCountryData(name) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) throw new Error("Pays non trouvé");
        const data = await response.json();
        return data[0]; // On prend le premier résultat
    } catch (error) {
        throw error;
    }
}

export async function getWeatherData(lat, lon) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m`);
        if (!response.ok) throw new Error("Météo indisponible");
        return await response.json();
    } catch (error) {
        throw error;
    }
}