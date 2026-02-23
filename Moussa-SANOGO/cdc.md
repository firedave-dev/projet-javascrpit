📑 Cahier des Charges : Application de Gestion RH "SANOGO S.A.R.L"

1. Présentation du Projet
L'objectif est de concevoir une application web monopage (SPA) permettant de gérer les contacts du département des Ressources Humaines d'une entreprise. L'accent est mis sur l'ergonomie (Dark Mode), la rapidité de recherche et la persistance des données.

2. Objectifs Fonctionnels :
L'application doit remplir les fonctions suivantes :

Gestion des fiches employés : Ajouter un employé avec son nom, prénom, email, téléphone et rôle.

Visualisation : Affichage des employés dans un tableau dynamique.

Édition "Inline" : Modification des informations directement dans les cellules du tableau sans changer de page.

Filtrage prédictif : Recherche instantanée par nom ou par rôle.

Interopérabilité : Possibilité d'exporter la base de données au format JSON et d'importer une liste externe.

3. Spécifications Techniques :
Le projet repose sur une architecture moderne sans frameworks lourds (Vanilla JavaScript) pour garantir la légèreté :

A. Architecture Logicielle
Le code est découpé en modules ES6 pour respecter le principe de responsabilité unique (SRP) :

contacts.js : Moteur de données et algorithmes de filtrage.

ui.js : Gestion de l'interface et manipulation fine du DOM.

storage.js : Communication avec l'API localStorage.

main.js : Contrôleur principal et gestion des événements.

B. Sécurité et Validation
Validation des données : Utilisation d'expressions régulières (Regex) pour valider le format des emails et des numéros de téléphone.

Sécurité DOM : Utilisation de textContent pour prévenir les failles XSS (Cross-Site Scripting).

C. Design & Expérience Utilisateur (UX)
Thème : Dark Mode Premium (Midnight Blue & Gold).

Réactivité : Transitions CSS fluides (300ms) et feedback visuel au survol des lignes du tableau.

Accessibilité : Mise en évidence des champs en focus.

4. Contraintes de Stockage
Les données ne doivent pas être perdues après la fermeture du navigateur.

Local : Utilisation de Window.localStorage.

Structure : Les contacts sont stockés sous forme de tableau d'objets JSON.

5. Livrables attendus
Code source : Fichiers HTML, CSS et JS organisés.

Documentation : Fichier README.md détaillant l'installation.

Jeu de données : Un fichier JSON de test contenant au moins 50 contacts.