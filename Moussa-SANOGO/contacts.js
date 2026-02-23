let contacts = [];

/**
 * Valide le format de l'email et du téléphone
 * Requis par le point 5 de l'énoncé
 */
const validateData = (email, tel) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Format simple : 8 chiffres pour le téléphone
    const telRegex = /^\+?[0-9]{8}$/;
    
    if (!emailRegex.test(email)) throw new Error("Format Email invalide");
    if (!telRegex.test(tel)) throw new Error("Format Téléphone invalide (8 chiffres)");
};

export const addContact = (contactObj) => {
    // Validation avant ajout
    validateData(contactObj.email, contactObj.tel);

    const newContact = {
        id: Date.now().toString(),
        ...contactObj
    };
    contacts.push(newContact);
    return newContact;
};

export const deleteContact = (id) => {
    contacts = contacts.filter(c => c.id !== id);
};

export const updateContact = (id, updatedData) => {
    // Si on met à jour l'email ou le tel, on valide
    if (updatedData.email || updatedData.tel) {
        const contact = contacts.find(c => c.id === id);
        validateData(
            updatedData.email || contact.email, 
            updatedData.tel || contact.tel
        );
    }

    contacts = contacts.map(c => 
        c.id === id ? { ...c, ...updatedData } : c
    );
};

export const setContacts = (newContacts) => {
    contacts = Array.isArray(newContacts) ? newContacts : [];
};

export const getContacts = () => [...contacts];

export const searchContacts = (term) => {
    const lowerTerm = term.toLowerCase().trim();
    return contacts.filter(c => 
        c.nom.toLowerCase().includes(lowerTerm) || 
        (c.prenom && c.prenom.toLowerCase().includes(lowerTerm)) ||
        c.role.toLowerCase().includes(lowerTerm)
    );
};