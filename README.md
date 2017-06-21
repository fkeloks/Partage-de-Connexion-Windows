Partage de Connexion Windows
=======

Application d�velopp�e par Florian B.
NodeJs - Electron - 2017

## Tout ce code, c'est quoi ?

> J'ai remarqu� que sur une version de Windows inf�rieure � la version windows 10, il �tait tr�s compliqu� pour un simple utilisateur du syst�me d'exploitation d'activer la fonctionnalit� "Partage de connexion". Cette fonctionnalit� permet aux usagers de faire de leurs ordinateurs un �metteur Wi-Fi, � partir de la connexion d'un c�ble Ethernet.

De ce fait, j'ai entrepris de r�aliser une application permettant d'utiliser simplement cette fonctionnalit� cach�e de Windows, afin d'utiliser cette application � des buts personnels, mais aussi afin de perfectionner mes connaissances dans les technologies de d�veloppement choisies.

## L'application, comment est-elle r�alis�e ?

L'application � �t� r�alis�e gr�ce aux technologies suivantes :

- NodeJs : Pour utiliser le langage Javascript sur un projet "`back`"
- Electron : Pour cr�er des Applications "`Desktops`" � partir d'un code NodeJs

J'ai �galement utilis� des modules Javascript que j'ai install� via l'outil `npm` :

- Socket-io : Utilis� pour g�rer la communication entre l'interface et le code de l'application.
- Sudo-prompt : Utilis� pour demander aux utilisateurs de l'application les droits d'administrateurs. (Droits n�cessaires au bon fonctionnement du partage de connexion)
- Eelectron-packager : Utilis� pour compiler l'application dans un `.exe` une fois qu'elle �tait termin�e.

## Comment t�l�charger et utiliser l'Application ?

Vous pouvez t�l�charger l'application sur cette page : https://github.com/fkeloks/Partage-de-Connexion-Windows/releases

Informations concernant l'utilisation de l'application :

- Le partage de connexion via WiFi s'�teint par d�faut lors du lancement de l'application
- Le partage de connexion via WiFi ne s'�teint pas automatiquement lors de la fermeture de l'application. Un bouton est pr�vu pour cet effet.

## Capture d'�cran

![Capture d'�cran de l'interface de l'application](http://i.imgur.com/4HBXfDx.png)