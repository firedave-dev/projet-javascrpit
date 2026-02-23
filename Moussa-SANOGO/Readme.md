# 🏢 Système de Gestion de Contacts RH

Une application web moderne et performante de gestion de personnel conçue pour les départements RH. Cette solution offre une interface utilisateur **Dark Premium** haut de gamme avec une gestion de données fluide et sécurisée.

## ✨ Fonctionnalités Principales

-   **💾 Persistance des données** : Sauvegarde automatique dans le `localStorage` du navigateur.
-   **⚡ CRUD Complet** : Ajout, affichage, modification inline et suppression de contacts.
-   **🔍 Recherche Dynamique** : Filtrage en temps réel par Nom, Prénom ou Rôle.
-   **📝 Édition Inline** : Modification directe des informations dans le tableau (technologie `contentEditable`).
-   **📤 Import/Export JSON** : Sauvegarde externe des données et restauration via un format JSON sécurisé.
-   **🛡️ Validation Intégrée** : Vérification stricte des formats Email et Téléphone (Regex).

## 🚀 Architecture du Projet (Modulaire)

Le projet respecte les principes de la programmation modulaire (ES6 Modules) pour une maintenance facilitée :

-   `main.js` : Point d'entrée, gestionnaire des événements globaux et coordination.
-   `contacts.js` : Logique métier (CRUD, filtrage, validation).
-   `ui.js` : Manipulation du DOM, rendu du tableau et interactions visuelles.
-   `storage.js` : Gestion du stockage local et des opérations de fichiers JSON.
-   `style.css` : Design système moderne utilisant des variables CSS et des animations fluides.

## 🎨 Charte Graphique

L'interface utilise une palette de couleurs **"Midnight Blue & Gold"** pour un aspect institutionnel et technologique :
-   **Fond** : Midnight Blue (`#020617`) avec gradients radiaux.
-   **Accent** : Or Ambré (`#fbbf24`) pour les éléments de prestige.
-   **Interactivité** : Effets de lueur (Glow), transitions fluides et feedback visuel au survol.

## 🛠️ Installation et Utilisation

1.  **Cloner ou télécharger** les fichiers du projet.
2.  Assurez-vous que tous les fichiers sont dans le même dossier.
3.  Lancez le projet via un serveur local (ex: *Live Server* sur VS Code) pour supporter les modules ES6.
4.  Ouvrez `index.html` dans votre navigateur.

## 📋 Structure des Données (JSON)

Exemple d'objet contact utilisé par le système :

```json
{
  "id": "1735458001",
  "nom": "Traoré",
  "prenom": "Oumar",
  "email": "oumar.traore@entreprise.ml",
  "tel": "+22370000001",
  "role": "directeur_general"
}