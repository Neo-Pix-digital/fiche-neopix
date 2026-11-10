/* ---------- Schéma ---------- */
function T(l,o){return Object.assign({t:"t",l:l},o)}
function A(l,o){return Object.assign({t:"a",l:l},o)}
function C(l,opts,o){return Object.assign({t:"c",l:l,opts:opts},o)}
function R(l,opts,o){return Object.assign({t:"r",l:l,opts:opts},o)}
var S=[
{n:1,title:"Coordonnées et activité",f:[
 T("Nom de l’entreprise / enseigne"),T("Nom et fonction de l’interlocuteur"),T("Téléphone / e-mail"),
 T("Secteur d’activité et zone géographique"),T("Site actuel et réseaux sociaux (liens)"),A("Description de l’activité en 2 à 3 phrases")]},
{n:2,title:"Contexte et objectifs",f:[
 C("Projet",["Nouveau site","Refonte","Autre"],{more:"Précisions"}),A("Pourquoi souhaitez-vous créer ou refaire ce site ?"),
 C("Objectifs prioritaires",["Être visible","Obtenir des contacts","Vendre","Réserver","Informer","Autre"],{more:"Précisions"}),
 A("Quels résultats attendez-vous dans les 6 premiers mois ?"),A("Quels sont les problèmes du site actuel, le cas échéant ?")]},
{n:3,title:"Public cible et positionnement",f:[
 R("Clients visés",["Particuliers","Professionnels","Les deux"]),T("Zone de clientèle et langues du site"),
 A("Principaux services ou produits à mettre en avant"),A("Vos avantages par rapport à la concurrence"),A("Exemples de sites que vous aimez (liens et raisons)")]},
{n:4,title:"Structure et contenus",f:[
 C("Pages souhaitées",["Accueil","À propos","Prestations","Réalisations","Tarifs","FAQ","Contact","Blog","Boutique"]),
 T("Autres pages / rubriques nécessaires"),R("Textes disponibles ?",["Oui","Non","À rédiger"]),
 A("Logo, charte graphique, photos, vidéos disponibles ?"),T("Qui fournit les contenus et qui les valide ?"),
 A("Témoignages, avis, références ou réalisations à afficher ?")]},
{n:5,title:"Fonctionnalités",f:[
 C("Fonctions",["Formulaire","Appel / WhatsApp","Réservation","Calendrier","Paiement","Boutique","Newsletter","Multilingue"]),
 A("Autres fonctions / intégrations nécessaires"),A("Pour une boutique : nombre de produits, livraison, retours, moyens de paiement"),
 T("Quels e-mails doivent recevoir les demandes du site ?"),T("Souhaitez-vous pouvoir modifier vous-même le site ?")]},
{n:6,title:"Design et expérience utilisateur",f:[
 C("Ambiance souhaitée",["Moderne","Sobre","Premium","Colorée","Institutionnelle","Autre"],{more:"Précisions"}),
 A("Couleurs / polices / styles à privilégier ou éviter"),A("Priorités sur mobile et parcours client attendu"),A("Éléments indispensables sur la page d’accueil")]},
{n:7,title:"Référencement, suivi et conformité",f:[
 A("Mots-clés ou recherches sur lesquels vous souhaitez être trouvé"),T("Zones / villes ciblées pour le référencement local"),
 R("Fiche Google Business Profile existante ?",["Oui","Non"]),T("Outils de suivi souhaités (statistiques, Search Console, etc.)"),
 T("Données collectées (contact, commande, inscription...)"),T("Mentions légales, politique de confidentialité, cookies : qui fournit / valide les textes ?")]},
{n:8,title:"Technique et maintenance",f:[
 R("Nom de domaine existant ?",["Oui","Non"]),T("Si oui, lequel ?"),T("Hébergement / plateforme actuelle et accès disponibles"),
 T("Adresse e-mail professionnelle à créer ou connecter ?"),R("Maintenance souhaitée",["Autonome","Ponctuelle","Forfait mensuel"]),
 A("Besoins en sauvegarde, sécurité et formation à l’utilisation")]},
{n:9,title:"Budget, calendrier et validation",f:[
 R("Budget envisagé",["< 500 €","500–1 000 €","1 000–2 500 €","> 2 500 €","À définir"]),T("Date souhaitée de mise en ligne"),
 A("Contraintes, événements ou échéances à respecter"),T("Qui décide et valide le devis, les maquettes et la livraison ?"),A("Autres informations importantes")]},
{n:10,title:"Synthèse du rendez-vous",tag:"Réservé au prestataire",pro:true,f:[
 A("Besoin principal identifié"),A("Périmètre pressenti et éléments exclus"),A("Contenus / accès à récupérer"),A("Points à clarifier et risques"),
 T("Prochaine étape, responsable et date"),T("Date de l’entretien"),T("Nom du client")]},
{part:"Complément Squarespace",sub:"Informations de production, à remplir avant la création du site. Les champs ★ sont indispensables selon les fonctionnalités retenues."},
{n:11,title:"Arborescence et contenu de chaque page",f:[
 T("Liste définitive des pages, ordre du menu et pages à masquer",{star:1}),A("Pour chaque page : titre, objectif, message principal, texte, visuels et bouton d’action (CTA)",{star:1}),
 A("Page d’accueil : accroche, promesse, 3 avantages, services mis en avant, avis et appel à l’action"),
 A("Page À propos : histoire, équipe, valeurs, portrait et preuves de confiance"),
 A("Pages Prestations : nom, description, déroulement, zone desservie, prix indicatif, FAQ"),
 A("Page Contact : adresse publique, téléphone, e-mail, horaires, carte et itinéraire"),
 A("FAQ, blog, portfolio : catégories, articles, projets, autorisations de publication")]},
{n:12,title:"Identité visuelle et fichiers à transmettre",f:[
 T("Logo en PNG haute définition / SVG si disponible, versions claire et foncée",{star:1}),T("Codes couleurs HEX, polices autorisées, guide de marque et favicon"),
 T("Photos/vidéos originales, crédits et droits d’utilisation ; textes finaux"),T("Images à acheter ou prises de vues à prévoir ; responsable de la fourniture"),
 A("Exemples précis de sites et éléments visuels appréciés / refusés")]},
{n:13,title:"Formulaires et demandes clients",f:[
 T("Formulaires nécessaires (contact, devis, inscription, candidature, etc.)",{star:1}),A("Pour chaque formulaire : champs obligatoires, choix, cases à cocher, pièces jointes éventuelles"),
 T("Adresse(s) destinataire(s), message de confirmation et réponse automatique souhaitée"),T("Protection anti-spam, consentement, conservation et accès aux données"),
 T("Connexion souhaitée à une liste e-mail / outil CRM (à confirmer selon intégration)")]},
{n:14,title:"Prise de rendez-vous et réservation",tag:"Si nécessaire",f:[
 T("Prestation à réserver, durée, prix, acompte, délai minimum et disponibilité"),T("Calendrier et personnes concernées ; horaires, fuseau horaire, jours fermés"),
 T("Règles d’annulation, report, rappels, paiement et confirmation"),T("Outil prévu : Squarespace Scheduling / Acuity ou service tiers, abonnement à valider")]},
{n:15,title:"Boutique",tag:"Si nécessaire",f:[
 T("Nombre de produits et types : physiques, numériques, services ou cartes cadeaux",{star:1}),T("Pour chaque produit : nom, description, référence, prix, TVA, variantes, stock, poids, photos"),
 T("Catégories, collections, promotions, codes de réduction et produits phares"),T("Zones de vente et livraison : La Réunion, métropole, international ; tarifs et transporteurs"),
 T("Retrait sur place, délais, retours, remboursements, CGV et service après-vente"),T("Moyens de paiement souhaités et éligibilité à vérifier selon pays/compte"),
 T("Adresse d’expédition, facturation, notifications et e-mail de gestion des commandes")]},
{n:16,title:"Domaine, comptes et accès",f:[
 T("Domaine souhaité ou existant, registrar et date d’expiration",{star:1}),T("Propriétaire du domaine et de l’abonnement Squarespace ; responsable du règlement"),
 T("Compte Squarespace à créer ou à utiliser, administrateurs et rôles"),T("Adresse(s) e-mail professionnelle(s), prestataire mail, configuration DNS à prévoir"),
 T("Accès aux outils existants (à transmettre par invitation sécurisée, jamais par mot de passe sur cette fiche)"),T("Redirection des anciennes URL, reprise d’un site existant et migration de contenu")]},
{n:17,title:"Référencement et visibilité",f:[
 A("Nom commercial, activité, communes desservies et 5 expressions de recherche prioritaires",{star:1}),T("Titres SEO et descriptions par page, textes alternatifs des images et URL souhaitées"),
 T("Fiche établissement Google, adresse affichée et avis clients"),T("Google Search Console, statistiques Squarespace, éventuel outil analytique tiers"),
 T("Ancien domaine, pages déjà référencées, redirections 301 et blog à reprendre")]},
{n:18,title:"Obligations légales et confidentialité",f:[
 A("Identité de l’éditeur du site, coordonnées, immatriculation et responsable de publication",{star:1}),T("Mentions légales, politique de confidentialité, CGV/CGU si applicables",{star:1}),
 T("Données recueillies, finalités, durée de conservation et contact pour les droits RGPD"),T("Cookies et traceurs utilisés ; choix d’un bandeau/gestion du consentement adapté"),
 T("Newsletter : consentement, désinscription, prestataire et liste existante"),T("Validation juridique des textes par le client ou son conseil")]},
{n:19,title:"Validation, lancement et autonomie",f:[
 T("Contact décisionnaire et délai de retour sur les maquettes et contenus",{star:1}),T("Nombre de cycles de corrections inclus au devis et périmètre des modifications"),
 T("Contrôle mobile/tablette/ordinateur, liens, formulaires, achats et e-mails de test"),T("Validation SEO, favicon, domaine, certificat HTTPS et indexation avant publication"),
 T("Formation à l’édition Squarespace : personne à former, sujets et durée"),T("Maintenance : qui met à jour les textes, produits, images et extensions tierces ?"),
 T("Abonnements récurrents : Squarespace, domaine, Scheduling, e-mail et outils externes")]},
{n:20,title:"Éléments à récupérer avant démarrage",f:[
 C("Cochez ce que vous avez déjà préparé",["Logo et charte graphique","Photos/vidéos et droits","Textes par page","Coordonnées et horaires","Catalogue/prestations et tarifs","Témoignages autorisés","Informations légales","Domaine et propriétaire","Accès par invitation sécurisée","Contenus boutique (si applicable)","Règles de réservation (si applicable)","Budget/abonnements validés","Planning et interlocuteur de validation"])]},
{n:21,title:"Validation des informations",docsAfter:true,f:[
 C("Confirmation du client",["Je confirme que les informations ci-dessus sont exactes"]),T("Nom du client"),T("Date de validation du client"),
 T("NéoPix : nom du référent",{pro:true}),T("NéoPix : date",{pro:true})]}
];
var uid=0;S.forEach(function(s){(s.f||[]).forEach(function(f,i){f.k="s"+s.n+"_"+i;f.more&&(f.mk=f.k+"_more")})});

