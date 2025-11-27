  

# Gestion des commentaires - React + Redux Toolkit

## Description

Ce projet est une petite application React utilisant **Redux Toolkit** pour gérer des commentaires en temps réel.

L'application permet aux utilisateurs de :

-   Ajouter un commentaire avec leur nom et le texte du commentaire.
-   Afficher la liste des commentaires en temps réel.
-   Réinitialiser la liste des commentaires si nécessaire.

## Technologies utilisées

-   React
-   Redux Toolkit
-   React Redux
-   JavaScript (ES6)
-   CSS simple pour le style

## Structure du projet
```
src/

├── app/

│ └── store.js # Configuration du store Redux

├── features/comments/

│ ├── commentsSlice.js # Slice Redux pour gérer les commentaires

│ └── CommentsList.jsx # Composant principal pour ajouter et afficher les commentaires

├── App.jsx # Composant racine

└── index.js # Point d'entrée React, connecte Redux
```
## Installation

1.  Cloner le projet :
2.  git clone <URL\_DE\_VOTRE\_REPO>
3.  cd comment-app
4.  Installer les dépendances :
5.  npm install
6.  Lancer l'application :
7.  npm start

L'application sera disponible sur [http://localhost:3000](http://localhost:3000/).

## Utilisation

1.  Saisir votre nom dans le champ "Votre nom".
2.  Saisir le commentaire dans le champ "Votre commentaire".
3.  Cliquer sur **Ajouter le commentaire** pour l'ajouter à la liste.
4.  Cliquer sur **Réinitialiser** pour supprimer tous les commentaires.

## Fonctionnalités

-   **Ajout de commentaires** : Redux Toolkit met à jour l'état global avec chaque nouveau commentaire.
-   **Affichage en temps réel** : Les commentaires sont affichés immédiatement après l'ajout.
-   **Réinitialisation** : Vide la liste des commentaires.

## Auteur

-   **Ayoub Aguezar**

## Licence

Ce projet est open-source et libre d'utilisation.
