Partage de Connexion Windows
=======

Application développée par Florian B.
NodeJs - Electron - 2017

## Tout ce code, c'est quoi ?

> J'ai remarqué que sur une version de Windows inférieure à la version windows 10, il était très compliqué pour un simple utilisateur du système d'exploitation d'activer la fonctionnalité "Partage de connexion". Cette fonctionnalité permet aux usagers de faire de leurs ordinateurs un émetteur Wi-Fi, à partir de la connexion d'un câble Ethernet.

De ce fait, j'ai entrepris de réaliser une application permettant d'utiliser simplement cette fonctionnalité cachée de Windows, afin d'utiliser cette application à des buts personnels, mais aussi afin de perfectionner mes connaissances dans les technologies de développement choisies.

## L'application, comment est-elle réalisée ?

L'application à été réalisée grâce aux technologies suivantes :

- NodeJs : Pour utiliser le langage Javascript sur un projet "`back`"
- Electron : Pour créer des Applications "`Desktops`" à partir d'un code NodeJs

J'ai également utilisé des modules Javascript que j'ai installé via l'outil `npm` :

- Socket-io : Utilisé pour gérer la communication entre l'interface et le code de l'application.
- Sudo-prompt : Utilisé pour demander aux utilisateurs de l'application les droits d'administrateurs. (Droits nécessaires au bon fonctionnement du partage de connexion)
- Eelectron-packager : Utilisé pour compiler l'application dans un `.exe` une fois qu'elle était terminée.

## Comment télécharger et utiliser l'Application ?

Vous pouvez télécharger l'application sur cette page : https://github.com/fkeloks/Partage-de-Connexion-Windows/releases

Informations concernant l'utilisation de l'application :

- Le partage de connexion via WiFi s'éteint par défaut lors du lancement de l'application
- Le partage de connexion via WiFi ne s'éteint pas automatiquement lors de la fermeture de l'application. Un bouton est prévu pour cet effet.

## Capture d'écran

![Capture d'écran de l'interface de l'application](http://i.imgur.com/4HBXfDx.png)