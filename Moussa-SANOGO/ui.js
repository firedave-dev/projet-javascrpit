const contactList = document.getElementById('contactList');

export const renderContacts = (contacts) => {
    contactList.innerHTML = ''; 

    contacts.forEach(contact => {
        const row = document.createElement('tr');
        row.dataset.id = contact.id;

        // Configuration des colonnes textuelles
        const columns = [
            { field: 'nom', value: contact.nom },
            { field: 'prenom', value: contact.prenom },
            { field: 'email', value: contact.email },
            { field: 'tel', value: contact.tel }
        ];

        columns.forEach(col => {
            const td = document.createElement('td');
            td.classList.add('editable');
            td.dataset.field = col.field;
            td.contentEditable = "true";
            td.textContent = col.value || ''; // Utilisation de textContent pour la sécurité
            row.appendChild(td);
        });

        // Colonne Rôle avec ta liste complète
        const tdRole = document.createElement('td');
        const select = document.createElement('select');
        select.classList.add('edit-role');
        
        const roles = {
            "directeur_general": "Directeur Général",
            "directeur_rh": "Directeur RH",
            "responsable_recrutement": "Responsable Recrutement",
            "gestionnaire_paie": "Gestionnaire de Paie",
            "assistant_rh": "Assistant RH",
            "responsable_formation": "Responsable Formation",
            "chef_projet": "Chef de Projet",
            "developpeur": "Développeur",
            "designer": "Designer / UI-UX",
            "analyste": "Analyste",
            "responsable_marketing": "Responsable Marketing",
            "commercial": "Commercial / Ventes",
            "comptable": "Comptable",
            "responsable_admin": "Responsable Administratif",
            "support_it": "Support IT",
            "stagiaire": "Stagiaire / Apprenti"
        };

        Object.entries(roles).forEach(([val, label]) => {
            const opt = new Option(label, val);
            if (contact.role === val) opt.selected = true;
            select.add(opt);
        });
        tdRole.appendChild(select);
        row.appendChild(tdRole);

        // Colonne Action
        const tdActions = document.createElement('td');
        const btnDelete = document.createElement('button');
        btnDelete.className = 'btn-delete';
        btnDelete.textContent = 'Supprimer';
        tdActions.appendChild(btnDelete);
        row.appendChild(tdActions);

        contactList.appendChild(row);
    });
};

export const setupTableEvents = (onDelete, onUpdate) => {
    // Délégation d'événement pour le clic (Suppression)
    contactList.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('btn-delete')) {
            event.stopPropagation(); // Requis par l'énoncé
            const id = target.closest('tr').dataset.id;
            if (confirm("Voulez-vous vraiment supprimer ce contact ?")) {
                onDelete(id);
            }
        }
    });

    // Délégation pour la modification de texte (Inline)
    contactList.addEventListener('focusout', (event) => {
        const target = event.target;
        if (target.classList.contains('editable')) {
            const id = target.closest('tr').dataset.id;
            const field = target.dataset.field;
            onUpdate(id, { [field]: target.textContent.trim() });
        }
    }, true);

    // Délégation pour le changement de rôle
    contactList.addEventListener('change', (event) => {
        const target = event.target;
        if (target.classList.contains('edit-role')) {
            const id = target.closest('tr').dataset.id;
            onUpdate(id, { role: target.value });
        }
    });
};