export interface Pillar {
  title: string;
  description: string;
}

export interface ModuleItem {
  icon: string;
  title: string;
  description: string;
  benefit?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  subtitle: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface ComparisonRow {
  feature: string;
  paper: string;
  classic: string;
  ours: string;
}

export interface Software {
  id: string;
  name: string;
  brandName?: string;
  tagline: string;
  description: string;
  summaryHighlight?: string;
  category: string;
  price: string;
  image?: string;
  gallery?: string[];
  videoUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  whatsappPhone?: string;
  badge?: string;
  heroBadges?: string[];
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  features: string[];
  problemSection?: {
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
    transition: string;
  };
  pillars?: Pillar[];
  modulesSectionTitle?: string;
  modulesSectionSubtitle?: string;
  modules?: ModuleItem[];
  stepsSection?: {
    title: string;
    steps: { number: string; title: string; description: string }[];
  };
  comparisonSection?: {
    title: string;
    rows: ComparisonRow[];
  };
  testimonialsSection?: {
    title: string;
    items: TestimonialItem[];
  };
  pricingSection?: {
    title: string;
    subtitle: string;
    tiers: PricingTier[];
  };
  faqs?: FaqItem[];
  ctaFinal?: {
    title: string;
    subtitle?: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  pitchCopy?: string;
}

export const softwares: Software[] = [
  {
    id: "optic-pro",
    name: "OpticPro Maroc",
    tagline:
      "Gagnez du temps au comptoir, éliminez les oublis de commandes, automatisez vos relances clients sur WhatsApp et suivez chaque dirham encaissé — conçu 100 % sur-mesure pour les opticiens au Maroc.",
    description:
      "OpticPro Maroc : Le logiciel tout-en-un qui pilote, modernise et rentabilise votre magasin d'optique.",
    category: "Optique & Gestion",
    price: "Licence / Devis",
    badge: "100% Maroc",
    image: "/screenshots/opticpro-1.png",
    gallery: [
      "/screenshots/opticpro-1.png",
      "/screenshots/opticpro-2.png",
      "/screenshots/opticpro-3.png",
    ],
    demoUrl: "https://opticprodemo.web.app/",
    downloadUrl: "/downloads/OpticPro-Setup.exe",
    whatsappPhone: "212658204441",
    features: [
      "Routine du Matin (60s) & Chasse aux montures oubliées",
      "Dossiers patients, réfraction & simulateur d'épaisseur / Bug Eye (1.50 à 1.74) + Mode Démo Client",
      "Atelier & catalogue verriers automatisé (Essilor, Indo, Novacel, Hoya) + alertes WhatsApp",
      "Lentilles de contact (30j, 90j, 180j) & relances WhatsApp 10 jours avant épuisement",
      "Suivi mutuelles (CNOPS, CNSS, AXA, Wafa Assurance, Sanlam, RMA) & scan des pièces",
      "Stock intelligent, dates de péremption, catalogue mobile & suivi des expéditions",
      "Devis A4, reçus 80 mm, facturation ICE, crédits clients, charges & bilan mensuel/annuel",
    ],
    pillars: [
      {
        title: "Zéro oubli, zéro perte d'argent",
        description:
          "De la prise de mesure jusqu'à la remise des lunettes, chaque dossier est tracé. La Routine du Matin en 60 secondes et la Chasse aux montures oubliées vous alertent dès qu'un client ou un règlement attend.",
      },
      {
        title: "Vendez plus facilement au comptoir",
        description:
          "Impressionnez vos patients avec le Simulateur d'épaisseur et d'effet « Bug Eye » pour justifier l'achat de verres amincis (1.60, 1.67, 1.74), et passez en Mode Démo Client en un clic pour masquer vos prix d'achat et marges devant le patient.",
      },
      {
        title: "Pensé pour le marché marocain",
        description:
          "Gestion native des mutuelles et assurances (CNOPS, CNSS, AXA, Wafa Assurance, Sanlam, RMA), catalogue des verriers marocains (Essilor, Indo, Novacel, Hoya), facturation avec ICE, et relances directes sur WhatsApp sans frais de SMS.",
      },
      {
        title: "Synchronisation Cloud & Application Mobile Client",
        description:
          "Vos données sont accessibles en toute sécurité depuis votre magasin ou à distance, accompagnées d'une application mobile dédiée à votre enseigne pour présenter votre catalogue et recevoir des prises de rendez-vous en ligne.",
      },
    ],
    modules: [
      {
        icon: "🌅",
        title: "Routine du Matin (60s) & Chasse aux Montures Oubliées",
        description:
          "Commencez chaque journée avec une vision claire : dossiers urgents du jour, montures prêtes à remettre, échéances de paiement et relance amicale en un clic pour les équipements qui dorment en rayon depuis plus de deux semaines.",
      },
      {
        icon: "👓",
        title: "Dossiers Patients, Réfraction & Simulateur de Verres",
        description:
          "Centralisez l'historique complet de chaque patient (corrections OD/OG, additions, mutuelle, parrainage). Utilisez le simulateur visuel interactif pour montrer concrètement au client la différence d'esthétique et de finesse entre un verre standard (1.50) et un verre aminci (1.67 / 1.74).",
      },
      {
        icon: "🔧",
        title: "Atelier & Catalogue Verriers Automatisé",
        description:
          "Suivez l'avancement de chaque montage (Commandé → Verres reçus → En montage → Prêt à livrer → Client prévenu). Générez vos bons de commande verriers avec schéma de centrage automatique (écart pupillaire, hauteur, addition) et prévenez le patient par WhatsApp dès que ses lunettes sont prêtes.",
      },
      {
        icon: "👁️",
        title: "Lentilles de Contact & Relances Automatiques",
        description:
          "Ne laissez plus vos porteurs de lentilles renouveler ailleurs : OpticPro calcule automatiquement la date de fin de boîte (30j, 90j, 180j) et prépare un message WhatsApp personnalisé 10 jours avant épuisement.",
      },
      {
        icon: "🏥",
        title: "Suivi Mutuelles & Scan des Pièces",
        description:
          "Suivez chaque dossier de remboursement (Préparé, Déposé, En cours, Remboursé, Rejeté), comparez les montants attendus face aux montants encaissés, et archivez directement les scans de l'ordonnance, de la CIN, du devis et des certificats verres.",
      },
      {
        icon: "🕶️",
        title: "Stock Intelligent & Expéditions",
        description:
          "Maîtrisez vos quantités, alertes de stock bas et dates de péremption (solutions et lentilles). Publiez vos montures en un clic sur votre catalogue mobile, gérez vos commandes fournisseurs avec fiche de contrôle réception, et suivez vos livraisons (coursier, taxi, messagerie, postal).",
      },
      {
        icon: "💳",
        title: "Facturation Souple, Crédit Client & Bilan Financier",
        description:
          "Éditez vos devis A4, reçus thermiques 80 mm et factures conformes. Gérez les acomptes, facilités de paiement et échéances avec alertes d'impayés, suivez vos charges (magasin et personnel) et imprimez votre bilan financier mensuel ou annuel.",
      },
    ],
    pitchCopy: `Opticiens au Maroc : modernisez votre magasin avec OpticPro Maroc ! 👓
Fini les carnets papier, les montures oubliées en atelier et les relances manuelles :
✅ Dossiers patients, réfraction & simulateur d'épaisseur de verres
✅ Suivi Atelier + Catalogue Verriers (Essilor, Indo, Novacel, Hoya)
✅ Alertes automatiques de renouvellement lentilles sur WhatsApp
✅ Suivi Mutuelles (CNOPS, CNSS, AXA, Wafa...) avec scan des pièces
✅ Stock intelligent, devis, reçus thermiques, crédits clients & bilan net
✅ Application mobile dédiée à votre magasin incluse
🔗 Testez gratuitement la démo en direct ici : https://opticprodemo.web.app/
📲 Contact WhatsApp : +212 6 58 20 44 41`,
  },
  {
    id: "autoloc-mobile",
    name: "LocationAuto (autoloc-mobile)",
    brandName: "LocationAuto",
    tagline:
      "Fini les carnets papier, les fichiers Excel compliqués et les oublis de caution. Gérez votre planning, générez vos contrats en 30 secondes et suivez la rentabilité réelle de chaque véhicule, même sans connexion internet.",
    description:
      "Pilotez votre agence de location avec zéro stress et une rentabilité maximale.",
    category: "Location Auto",
    price: "Dès 1 à +30 véhicules",
    badge: "Logiciel N°1 pour agences de location de voitures",
    heroBadges: [
      "Installation rapide en 15 min",
      "Fonctionne 100 % hors-ligne & en ligne",
      "Aucune compétence informatique requise",
    ],
    primaryCtaLabel: "Demander une démonstration gratuite",
    secondaryCtaLabel: "Voir le logiciel en action",
    image: "/screenshots/autoloc-1.png",
    gallery: [
      "/screenshots/autoloc-1.png",
      "/screenshots/autoloc-2.png",
      "/screenshots/autoloc-3.png",
    ],
    demoUrl: "https://locationauto-demo-naxe.vercel.app/",
    downloadUrl: "/downloads/AutoLoc-Setup.exe",
    whatsappPhone: "212658204441",
    features: [
      "Planning visuel & anti-conflits de réservation",
      "Contrats & documents générés en 30 secondes",
      "Gestion sécurisée des cautions & états des lieux photo",
      "Rentabilité réelle par véhicule (ROI) & alertes entretien",
      "Suivi instantané des radars, liste noire & connexion WhatsApp / Aéroport",
    ],
    problemSection: {
      title: "Gérer une agence de location ne devrait pas être un casse-tête quotidien",
      subtitle: "Vous reconnaissez-vous dans ces situations ?",
      items: [
        {
          title: "Perte de temps au comptoir",
          description:
            "Recopier manuellement les informations du permis et de la CIN pendant que le client attend à l'aéroport ou à l'agence.",
        },
        {
          title: "Cautions et litiges mal suivis",
          description:
            "Oublier si une caution a été rendue, perdre la trace d'un chèque de garantie ou manquer de preuves photo sur une nouvelle rayure.",
        },
        {
          title: "Flou sur la rentabilité",
          description:
            "Encaisser des loyers sans savoir combien chaque voiture coûte réellement en vidanges, pneus, assurance et réparations.",
        },
        {
          title: "Infractions et radars",
          description:
            "Recevoir une contravention des semaines plus tard et chercher pendant une heure qui conduisait le véhicule ce jour-là.",
        },
      ],
      transition:
        "Avec LocationAuto, reprenez le contrôle total de votre activité dès aujourd'hui.",
    },
    modulesSectionTitle:
      "Tout ce dont votre agence a besoin, réuni dans un seul logiciel",
    modulesSectionSubtitle:
      "Conçu avec des gérants d'agences pour répondre aux réalités du terrain.",
    modules: [
      {
        icon: "📅",
        title: "Planning Visuel & Anti-Conflits",
        description:
          "Visualisez en un coup d'œil vos voitures disponibles, en cours de location, réservées ou en entretien. LocationAuto empêche automatiquement les doubles réservations et vous aide à optimiser le taux d'occupation de votre flotte.",
      },
      {
        icon: "⚡",
        title: "Contrats & Documents en 30 Secondes",
        description:
          "Enregistrez le client une seule fois : ses informations (CIN, passeport, permis) sont sauvegardées. À chaque nouvelle location, générez et imprimez un contrat professionnel prêt à signer en quelques clics.",
      },
      {
        icon: "🛡️",
        title: "Gestion Sécurisée des Cautions & États des Lieux",
        description:
          "Suivez chaque caution (espèces, chèque, empreinte bancaire) avec alertes de restitution et génération de reçu de décharge. Documentez l'état du véhicule avec photos au départ et au retour pour éliminer les litiges.",
      },
      {
        icon: "📈",
        title: "Rentabilité Réelle par Véhicule (ROI)",
        description:
          "Suivez au centime près ce que chaque voiture vous rapporte et ce qu'elle vous coûte (crédit, assurance, vidange, lavage, pièces). Identifiez immédiatement vos véhicules les plus rentables et ceux qu'il faut revendre.",
      },
      {
        icon: "🔧",
        title: "Alertes Entretien & Documents de Bord",
        description:
          "Ne ratez plus jamais une vidange, une visite technique ou un renouvellement d'assurance. Le logiciel vous alerte automatiquement selon le kilométrage réel et les dates d'échéance.",
      },
      {
        icon: "🚨",
        title: "Suivi Instantané des Radars & Infractions",
        description:
          "Saisissez simplement la date et l'heure d'une contravention reçue : LocationAuto retrouve immédiatement le contrat et le conducteur concerné, et génère la lettre de justification ou la facture de refacturation.",
      },
      {
        icon: "📱",
        title: "Connexion WhatsApp & Suivi Aéroport",
        description:
          "Envoyez les devis, contrats PDF et rappels de retour directement sur WhatsApp. Gérez facilement vos livraisons à l'aéroport et restez connecté à votre activité où que vous soyez.",
      },
      {
        icon: "🔒",
        title: "Liste Noire & Contrôle Interne",
        description:
          "Soyez automatiquement alerté lors de la création d'un contrat si un client possède un historique de retard, d'impayé ou de dégradation. Gardez un historique complet de toutes les opérations de caisse.",
      },
    ],
    stepsSection: {
      title: "Opérationnel dans votre agence en 3 étapes simples",
      steps: [
        {
          number: "Étape 1",
          title: "Importez votre flotte",
          description:
            "Ajoutez vos véhicules, leurs tarifs journaliers/saisonniers et leurs prochaines échéances d'entretien en quelques minutes.",
        },
        {
          number: "Étape 2",
          title: "Créez vos premiers contrats",
          description:
            "Saisissez vos réservations, encaissez vos acomptes et imprimez des contrats impeccables à l'image de votre agence.",
        },
        {
          number: "Étape 3",
          title: "Pilotez vos bénéfices",
          description:
            "Suivez votre chiffre d'affaires, vos dépenses et la disponibilité de vos voitures en temps réel depuis votre bureau ou votre téléphone.",
        },
      ],
    },
    comparisonSection: {
      title: "Pensé pour la réalité des agences modernes",
      rows: [
        {
          feature: "Rapidité de création de contrat",
          paper: "Lent (5 à 10 min)",
          classic: "Moyen",
          ours: "Ultra-rapide (30 sec)",
        },
        {
          feature: "Fonctionnement sans internet",
          paper: "Oui",
          classic: "Non (bloqué si coupure)",
          ours: "Oui (100 % autonome)",
        },
        {
          feature: "Calcul du bénéfice net par voiture",
          paper: "Très difficile",
          classic: "Incomplet",
          ours: "Automatique en temps réel",
        },
        {
          feature: "Suivi des cautions & chèques",
          paper: "Risque d'oubli élevé",
          classic: "Basique",
          ours: "Sécurisé avec alertes",
        },
        {
          feature: "Prise en main par l'équipe",
          paper: "Simple mais risqué",
          classic: "Longue formation",
          ours: "Intuitive en 15 minutes",
        },
      ],
    },
    testimonialsSection: {
      title: "Ils ont modernisé leur agence avec LocationAuto",
      items: [
        {
          quote:
            "Avant LocationAuto, je passais mes soirées à vérifier mes carnets et mes cautions. Aujourd'hui, je sais exactement combien chaque voiture me rapporte et mes contrats sortent en 30 secondes au comptoir.",
          author: "Karim B.",
          role: "Gérant d'agence (18 véhicules)",
        },
        {
          quote:
            "La fonction de recherche d'infractions et les alertes de vidange m'ont déjà fait économiser des milliers de dirhams. L'interface est tellement simple que mes agents l'ont maîtrisée dès le premier jour.",
          author: "Youssef M.",
          role: "Directeur de flotte (32 véhicules)",
        },
      ],
    },
    pricingSection: {
      title: "Une solution adaptée à la taille de votre flotte",
      subtitle: "Pas de frais cachés. Démarrez sereinement et évoluez à votre rythme.",
      tiers: [
        {
          name: "Pack Démarrage (1 à 10 véhicules)",
          subtitle: "Idéal pour lancer et structurer son agence",
          features: [
            "Planning complet & contrats illimités",
            "Gestion des clients, cautions et paiements",
            "Alertes entretien & assurance",
          ],
          ctaLabel: "Demander le tarif",
        },
        {
          name: "Pack Croissance (11 à 30 véhicules)",
          subtitle: "Tout le Pack Démarrage +",
          badge: "Le plus choisi",
          highlighted: true,
          features: [
            "Calculateur de rentabilité (ROI) par véhicule",
            "Gestion multi-utilisateurs avec permissions",
            "Module infractions / radars & Liste noire",
            "Envoi WhatsApp automatisé & support prioritaire",
          ],
          ctaLabel: "Demander le tarif",
        },
        {
          name: "Pack Flotte & Multi-Agences (+30 véhicules)",
          subtitle: "Tout le Pack Croissance +",
          features: [
            "Gestion multi-agences centralisée",
            "Portail de réservation & compagnon mobile terrain",
            "Accompagnement et paramétrage sur-mesure",
          ],
          ctaLabel: "Contacter l'équipe",
        },
      ],
    },
    faqs: [
      {
        question: "Le logiciel fonctionne-t-il si ma connexion internet coupe ?",
        answer:
          "Oui. LocationAuto est conçu pour fonctionner de manière fluide même en cas de coupure internet. Vous continuez à créer vos contrats, encaisser et consulter votre planning sans aucune interruption.",
      },
      {
        question:
          "Puis-je personnaliser le contrat avec le logo et les conditions de mon agence ?",
        answer:
          "Absolument. Vos contrats, devis et factures sont entièrement personnalisés avec votre logo, vos coordonnées, vos mentions légales et vos conditions générales de location.",
      },
      {
        question: "Est-ce difficile à utiliser pour mes employés ?",
        answer:
          "Non. L'interface a été pensée pour être claire et intuitive. Une présentation de 15 minutes suffit pour que toute votre équipe soit autonome.",
      },
      {
        question: "Mes données clients et financières sont-elles sécurisées ?",
        answer:
          "Oui. Vos données vous appartiennent exclusivement et bénéficient de sauvegardes régulières pour garantir qu'aucune information ne soit jamais perdue.",
      },
    ],
    ctaFinal: {
      title: "Prêt à faire passer votre agence au niveau supérieur ?",
      subtitle:
        "Découvrez comment LocationAuto peut vous faire gagner des heures chaque semaine et sécuriser vos revenus. Réservez votre démonstration gratuite et sans engagement.",
      primaryLabel: "Réserver ma démo gratuite maintenant",
      secondaryLabel: "Discuter sur WhatsApp",
    },
    pitchCopy: `Agences de location de voitures : pilotez votre flotte avec zéro stress grâce à LocationAuto ! 🚗
✅ Planning visuel anti-conflits & contrats générés en 30 secondes
✅ Gestion sécurisée des cautions & états des lieux avec photos
✅ Rentabilité réelle (ROI) par véhicule & alertes entretien automatiques
✅ Recherche instantanée des radars & infractions + Liste noire clients
✅ Fonctionne 100 % hors-ligne & en ligne + connexion WhatsApp / Aéroport
🔗 Testez le logiciel en action ici : https://locationauto-demo-naxe.vercel.app/
📲 Contact WhatsApp : +212 6 58 20 44 41`,
  },
  {
    id: "visa-agency",
    name: "VisaPro Maroc",
    tagline:
      "Du premier prospect jusqu'à la délivrance du visa, VisaPro réunit vos dossiers clients, vos rendez-vous consulaires, vos paiements et factures, vos partenaires, vos documents PDF et le suivi de vos équipes dans un outil clair et structuré.",
    description:
      "Centralisez toute votre agence de visa au Maroc dans un seul logiciel rapide et fiable",
    summaryHighlight:
      "L'essentiel en un coup d'œil : Finis les tableaux dispersés, les suivis approximatifs et les pertes de temps sur les pièces consulaires. Votre agence garde une vision nette sur chaque dossier et chaque encaissement.",
    category: "Agences de Visa",
    price: "Licence / Devis",
    badge: "100% Maroc",
    image: "/screenshots/visa-agency.png",
    whatsappPhone: "212658204441",
    features: [
      "Dossiers & Clients : suivi par destination et type de visa (Tourisme, Affaires, Études, Travail, Regroupement familial)",
      "Documents, OCR & PDF : scan/extraction passeport & MRZ, fusion, compression sous seuil et découpage multi-pages",
      "Comptabilité & Factures : calcul automatique du total, des avances, soldes impayés et impression de factures",
      "Planning RDV & WhatsApp : vue claire des rendez-vous consulaires, échéances proches et rappels WhatsApp",
      "Partenaires & CRM : suivi traducteurs, hôtels, compagnies aériennes, commissions apporteurs et protocole SAV refus",
      "Pilotage & Performance : tableau de bord par destination, impayés et activité par agent",
    ],
    pillars: [
      {
        title: "Gestion complète de A à Z",
        description:
          "Regroupez l'identité du client, le passeport, la destination, le type de visa, l'avancement du dossier et les pièces justificatives au même endroit.",
      },
      {
        title: "Travail fluide même sans connexion internet",
        description:
          "Continuez à saisir et consulter vos dossiers en local, puis synchronisez vos données dès le retour du réseau avec gestion des conflits de modification.",
      },
      {
        title: "Suivi financier rigoureux",
        description:
          "Visualisez en un instant le montant total, l'avance versée et le reste à payer, avec édition de factures prêtes à imprimer.",
      },
      {
        title: "Gain de temps sur les documents et passeports",
        description:
          "Extrayez rapidement les informations de passeport/MRZ, assemblez ou découpez vos PDF multi-pages et rangez chaque fichier proprement dans le bon dossier.",
      },
      {
        title: "Accompagnement client jusqu'au bout",
        description:
          "Suivez les rendez-vous, envoyez des messages rapides sur WhatsApp, préparez les entretiens consulaires et gérez les recours en cas de refus.",
      },
    ],
    modules: [
      {
        icon: "📁",
        title: "Dossiers & Clients",
        description:
          "Suivi par destination et type de visa (Tourisme, Affaires, Études, Travail, Regroupement familial), statuts d'avancement, codes de suivi et notes.",
        benefit: "Zéro dossier oublié, information accessible en quelques secondes",
      },
      {
        icon: "🛂",
        title: "Documents, OCR & PDF",
        description:
          "Scan/extraction passeport & MRZ, fusion et compression de PDF sous seuil, découpage multi-pages et classement automatique dans le dossier client.",
        benefit: "Gain de temps considérable et dossiers conformes aux exigences",
      },
      {
        icon: "💳",
        title: "Comptabilité & Factures",
        description:
          "Calcul automatique du total, des avances et des soldes impayés, modes de règlement et impression de factures.",
        benefit: "Meilleure maîtrise de la trésorerie et des créances clients",
      },
      {
        icon: "📅",
        title: "Planning RDV & WhatsApp",
        description:
          "Vue claire des rendez-vous consulaires, repérage des échéances proches et envoi de rappels ou liens d'accès via WhatsApp.",
        benefit: "Moins d'oublis et communication client fluide",
      },
      {
        icon: "🤝",
        title: "Partenaires & CRM",
        description:
          "Suivi des traducteurs, hôtels, compagnies aériennes, commissions apporteurs, pipeline prospects et protocole SAV en cas de refus.",
        benefit: "Pilotage global de la rentabilité et fidélisation client",
      },
      {
        icon: "📊",
        title: "Pilotage & Performance",
        description:
          "Tableau de bord avec volumes par destination, dossiers impayés, activité par agent et indicateurs clés.",
        benefit: "Décisions rapides appuyées sur des chiffres fiables",
      },
    ],
    faqs: [
      {
        question: "Le logiciel fonctionne-t-il si la connexion internet est instable ou coupée ?",
        answer:
          "Oui. VisaPro est pensé pour garder vos données accessibles en local et synchroniser les opérations lorsque la connexion est disponible, afin de ne pas bloquer le travail de l'agence.",
      },
      {
        question: "Peut-on suivre facilement les clients qui paient en plusieurs fois ?",
        answer:
          "Oui. Chaque dossier affiche clairement le montant global, l'avance réglée et le reste à payer, avec un filtre dédié aux soldes impayés pour relancer au bon moment.",
      },
      {
        question: "Est-il adapté aux agences qui traitent plusieurs destinations et types de visa ?",
        answer:
          "Oui. Vous pouvez gérer les demandes selon la destination, le type de visa, le statut d'avancement, la date de rendez-vous et le résultat final du dossier.",
      },
      {
        question: "Comment se passe la prise en main pour l'équipe ?",
        answer:
          "L'interface est organisée par sections claires (Tableau de Bord, Dossiers & Clients, Planning RDV, Comptabilité, Partenaires & Apporteurs, CRM & Prospects, et outils documents) afin que l'équipe adopte l'outil rapidement.",
      },
    ],
    ctaFinal: {
      title: "Prêt à Structurer Votre Agence de Visa ?",
      primaryLabel: "Demander une démo personnalisée",
      secondaryLabel: "Recevoir une offre adaptée à votre agence",
    },
    pitchCopy: `Agences de visa au Maroc : centralisez toute votre activité dans un seul logiciel rapide et fiable avec VisaPro Maroc ! 🛂
✅ Dossiers clients par destination & type de visa (Tourisme, Études, Affaires, Travail...)
✅ Scan/extraction passeport & MRZ + fusion/compression PDF conforme aux consulats
✅ Planning RDV consulaires & rappels automatiques sur WhatsApp
✅ Suivi financier (total, avances, soldes impayés) & impression de factures
✅ Fonctionne même sans connexion internet avec synchronisation automatique
📲 Contact WhatsApp : +212 6 58 20 44 41`,
  },
  {
    id: "parapro-suite",
    name: "ParaPro POS",
    tagline: "Point de vente et gestion de stock haute vitesse pour parapharmacies.",
    description:
      "Encaissement rapide, scan code-barres, gestion du stock et suivi des règlements clients avec synchronisation et coordination simplifiée.",
    category: "Point de Vente",
    price: "Licence unique",
    image: "/screenshots/parapro.png",
    demoUrl: "https://parapro-maroc.web.app",
    downloadUrl: "/downloads/ParaPro-Setup.exe",
    whatsappPhone: "212658204441",
    features: [
      "Scan code-barres ultra-rapide",
      "Gestion des crédits et paiements partiels",
      "Synchronisation mobile temps réel",
    ],
  },
];