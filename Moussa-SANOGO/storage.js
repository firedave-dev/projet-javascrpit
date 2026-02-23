const STORAGE_KEY = 'contacts_rh_data';

export const saveToLocalStorage = (contacts) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};

export const loadFromLocalStorage = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const downloadJSON = (contacts) => {
    const dataStr = JSON.stringify(contacts, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'contacts_rh.json');
    linkElement.click();
};

export const parseImportJSON = (jsonString) => {
    try {
        const data = JSON.parse(jsonString);
        if (!Array.isArray(data)) {
            alert("Erreur : Le format doit être un tableau de contacts.");
            return null;
        }
        return data;
    } catch (error) {
        alert("Erreur : JSON non valide.");
        return null;
    }
};