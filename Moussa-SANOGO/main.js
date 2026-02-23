import * as ContactLogic from './contacts.js';
import * as UI from './ui.js';
import * as Storage from './storage.js';

const init = () => {
    const savedContacts = Storage.loadFromLocalStorage();
    ContactLogic.setContacts(savedContacts);
    refreshUI();
    UI.setupTableEvents(handleDelete, handleUpdate);
};

const refreshUI = () => {
    const contacts = ContactLogic.getContacts();
    UI.renderContacts(contacts);
    // Storage.saveToLocalStorage est appelé ici pour garantir la persistance
    Storage.saveToLocalStorage(contacts);
};

const handleDelete = (id) => {
    ContactLogic.deleteContact(id);
    refreshUI();
};

const handleUpdate = (id, data) => {
    try {
        ContactLogic.updateContact(id, data);
        refreshUI();
    } catch (error) {
        alert(error.message);
        refreshUI(); // Annule visuellement la modification invalide
    }
};

// Ajouter un contact avec gestion d'erreur
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    try {
        const newContact = {
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom')?.value || '',
            email: document.getElementById('email').value,
            tel: document.getElementById('tel').value,
            role: document.getElementById('role').value
        };
        
        ContactLogic.addContact(newContact);
        e.target.reset();
        refreshUI();
    } catch (error) {
        alert(error.message); // Affiche "Format Email invalide" ou "Format Téléphone invalide"
    }
});

// Recherche live 
document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value;
    const filtered = ContactLogic.searchContacts(term);
    UI.renderContacts(filtered); 
});

// Export JSON
document.getElementById('btnExport').addEventListener('click', () => {
    Storage.downloadJSON(ContactLogic.getContacts());
});

// Import JSON
document.getElementById('btnImport').addEventListener('click', () => {
    const jsonArea = document.getElementById('jsonArea');
    const importedData = Storage.parseImportJSON(jsonArea.value);
    
    if (importedData) {
        ContactLogic.setContacts(importedData);
        refreshUI();
        jsonArea.value = '';
    }
});

init();