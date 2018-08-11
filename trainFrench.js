let smallTrainingData = [
    {input: "besoin", output: {M: 1} },
    {input: "personne", output: {F: 1} },
    {input: "fait", output: {M: 1} },
    {input: "affaire", output: {F: 1} },
    {input: "jeune", output: {M: 1} },
    {input: "histoire", output: {F: 1} },
    {input: "devoir", output: {M: 1} },
    {input: "madame", output: {F: 1} },
    {input: "problème", output: {M: 1} },
    {input: "tête", output: {F: 1} },
    {input: "amour", output: {M: 1} },
    {input: "dernier", output: {M: 1} },
    {input: "monsieur", output: {M: 1} },
    {input: "être", output: {M: 1} },
    {input: "vieux", output: {M: 1} },
    {input: "abbaye", output: {F: 1} },
    {input: "accession", output: {F: 1} },
    {input: "acciôn", output: {F: 1} },
    {input: "mélinite", output: {F: 1} },
    {input: "mémorialiste", output: {F: 1} },
];

let largeTrainingData = [
	{
		input: "a",
		output: {F: 1},
		
	},
	{
		input: "a",
		output: {M: 1},
		
	},
	{
		input: "abaissement",
		output: {M: 1},
		
	},
	{
		input: "abandon",
		output: {M: 1},
		
	},
	{
		input: "abaque",
		output: {M: 1},
		
	},
	{
		input: "abat",
		output: {M: 1},
		
	},
	{
		input: "abattage",
		output: {M: 1},
		
	},
	{
		input: "abattement",
		output: {M: 1},
		
	},
	{
		input: "abattis",
		output: {M: 1},
		
	},
	{
		input: "abattoir",
		output: {M: 1},
		
	},
	{
		input: "abbaye",
		output: {F: 1},
		
	},
	{
		input: "abbesse",
		output: {F: 1},
		
	},
	{
		input: "abbé",
		output: {M: 1},
		
	},
	{
		input: "abcès",
		output: {M: 1},
		
	},
	{
		input: "abdication",
		output: {F: 1},
		
	},
	{
		input: "abdomen",
		output: {M: 1},
		
	},
	{
		input: "abduction",
		output: {F: 1},
		
	},
	{
		input: "abeille",
		output: {F: 1},
		
	},
	{
		input: "aberration",
		output: {F: 1},
		
	},
	{
		input: "abjection",
		output: {F: 1},
		
	},
	{
		input: "abjuration",
		output: {F: 1},
		
	},
	{
		input: "ablatif",
		output: {M: 1},
		
	},
	{
		input: "ablation",
		output: {F: 1},
		
	},
	{
		input: "ablution",
		output: {F: 1},
		
	},
	{
		input: "abnégation",
		output: {F: 1},
		
	},
	{
		input: "aboiement",
		output: {M: 1},
		
	},
	{
		input: "abolición",
		output: {F: 1},
		
	},
	{
		input: "abolition",
		output: {F: 1},
		
	},
	{
		input: "abomination",
		output: {F: 1},
		
	},
	{
		input: "abondance",
		output: {F: 1},
		
	},
	{
		input: "abondant",
		output: {M: 1},
		
	},
	{
		input: "abondante",
		output: {F: 1},
		
	},
	{
		input: "abondement",
		output: {M: 1},
		
	},
	{
		input: "abonnement",
		output: {M: 1},
		
	},
	{
		input: "abonné",
		output: {M: 1},
		
	},
	{
		input: "abord",
		output: {M: 1},
		
	},
	{
		input: "abordage",
		output: {M: 1},
		
	},
	{
		input: "aboutissement",
		output: {M: 1},
		
	},
	{
		input: "abrasion",
		output: {F: 1},
		
	},
	{
		input: "abreuvoir",
		output: {M: 1},
		
	},
	{
		input: "abri",
		output: {M: 1},
		
	},
	{
		input: "abrogation",
		output: {F: 1},
		
	},
	{
		input: "abrupt",
		output: {M: 1},
		
	},
	{
		input: "abruti",
		output: {M: 1},
		
	},
	{
		input: "abrégé",
		output: {M: 1},
		
	},
	{
		input: "abréviation",
		output: {F: 1},
		
	},
	{
		input: "abscisse",
		output: {F: 1},
		
	},
	{
		input: "absence",
		output: {F: 1},
		
	},
	{
		input: "absent",
		output: {M: 1},
		
	},
	{
		input: "absentéisme",
		output: {M: 1},
		
	},
	{
		input: "abside",
		output: {F: 1},
		
	},
	{
		input: "absolu",
		output: {M: 1},
		
	},
	{
		input: "absolution",
		output: {F: 1},
		
	},
	{
		input: "absolutisation",
		output: {F: 1},
		
	},
	{
		input: "absolutisme",
		output: {M: 1},
		
	},
	{
		input: "absorption",
		output: {F: 1},
		
	},
	{
		input: "abstention",
		output: {F: 1},
		
	},
	{
		input: "abstentionnisme",
		output: {M: 1},
		
	},
	{
		input: "abstinence",
		output: {F: 1},
		
	},
	{
		input: "abstraction",
		output: {F: 1},
		
	},
	{
		input: "abstrait",
		output: {M: 1},
		
	},
	{
		input: "absurde",
		output: {M: 1},
		
	},
	{
		input: "absurdité",
		output: {F: 1},
		
	},
	{
		input: "abuela",
		output: {F: 1},
		
	},
	{
		input: "abundancia",
		output: {F: 1},
		
	},
	{
		input: "abus",
		output: {M: 1},
		
	},
	{
		input: "abécédaire",
		output: {M: 1},
		
	},
	{
		input: "abîme",
		output: {M: 1},
		
	},
	{
		input: "acacia",
		output: {M: 1},
		
	},
	{
		input: "académicien",
		output: {M: 1},
		
	},
	{
		input: "académie",
		output: {F: 1},
		
	},
	{
		input: "académisme",
		output: {M: 1},
		
	},
	{
		input: "acarien",
		output: {M: 1},
		
	},
	{
		input: "accablement",
		output: {M: 1},
		
	},
	{
		input: "accalmie",
		output: {F: 1},
		
	},
	{
		input: "accaparement",
		output: {M: 1},
		
	},
	{
		input: "accent",
		output: {M: 1},
		
	},
	{
		input: "accentuation",
		output: {F: 1},
		
	},
	{
		input: "acceptabilité",
		output: {F: 1},
		
	},
	{
		input: "acceptation",
		output: {F: 1},
		
	},
	{
		input: "accepteur",
		output: {M: 1},
		
	},
	{
		input: "acception",
		output: {F: 1},
		
	},
	{
		input: "accessibilité",
		output: {F: 1},
		
	},
	{
		input: "accession",
		output: {F: 1},
		
	},
	{
		input: "accessit",
		output: {M: 1},
		
	},
	{
		input: "accessoire",
		output: {M: 1},
		
	},
	{
		input: "accident",
		output: {M: 1},
		
	},
	{
		input: "accidenté",
		output: {M: 1},
		
	},
	{
		input: "acción",
		output: {F: 1},
		
	},
	{
		input: "acciôn",
		output: {F: 1},
		
	},
	{
		input: "acclamation",
		output: {F: 1},
		
	},
	{
		input: "acclimatation",
		output: {F: 1},
		
	},
	{
		input: "accolade",
		output: {F: 1},
		
	},
	{
		input: "accommodation",
		output: {F: 1},
		
	},
	{
		input: "accommodement",
		output: {M: 1},
		
	},
	{
		input: "accompagnateur",
		output: {M: 1},
		
	},
	{
		input: "accompagnement",
		output: {M: 1},
		
	},
	{
		input: "accompli",
		output: {M: 1},
		
	},
	{
		input: "accomplissement",
		output: {M: 1},
		
	},
	{
		input: "accord",
		output: {M: 1},
		
	},
	{
		input: "accordéon",
		output: {M: 1},
		
	},
	{
		input: "accordéoniste",
		output: {M: 1},
		
	},
	{
		input: "accouchement",
		output: {M: 1},
		
	},
	{
		input: "accoucheur",
		output: {M: 1},
		
	},
	{
		input: "accoucheuse",
		output: {F: 1},
		
	},
	{
		input: "accouchée",
		output: {F: 1},
		
	},
	{
		input: "accouplement",
		output: {M: 1},
		
	},
	{
		input: "accoutrement",
		output: {M: 1},
		
	},
	{
		input: "accoutumance",
		output: {F: 1},
		
	},
	{
		input: "accroc",
		output: {M: 1},
		
	},
	{
		input: "accrochage",
		output: {M: 1},
		
	},
	{
		input: "accroche",
		output: {F: 1},
		
	},
	{
		input: "accroissement",
		output: {M: 1},
		
	},
	{
		input: "accréditation",
		output: {F: 1},
		
	},
	{
		input: "accueil",
		output: {M: 1},
		
	},
	{
		input: "acculturation",
		output: {F: 1},
		
	},
	{
		input: "accumulateur",
		output: {M: 1},
		
	},
	{
		input: "accumulation",
		output: {F: 1},
		
	},
	{
		input: "accusateur",
		output: {M: 1},
		
	},
	{
		input: "accusatif",
		output: {M: 1},
		
	},
	{
		input: "accusation",
		output: {F: 1},
		
	},
	{
		input: "accès",
		output: {M: 1},
		
	},
	{
		input: "accélérateur",
		output: {M: 1},
		
	},
	{
		input: "accélération",
		output: {F: 1},
		
	},
	{
		input: "aceptación",
		output: {F: 1},
		
	},
	{
		input: "acharnement",
		output: {M: 1},
		
	},
	{
		input: "achat",
		output: {M: 1},
		
	},
	{
		input: "acheminement",
		output: {M: 1},
		
	},
	{
		input: "acheteur",
		output: {M: 1},
		
	},
	{
		input: "achèvement",
		output: {M: 1},
		
	},
	{
		input: "acide",
		output: {M: 1},
		
	},
	{
		input: "acidification",
		output: {F: 1},
		
	},
	{
		input: "acidité",
		output: {F: 1},
		
	},
	{
		input: "acidose",
		output: {F: 1},
		
	},
	{
		input: "acier",
		output: {M: 1},
		
	},
	{
		input: "aciérie",
		output: {F: 1},
		
	},
	{
		input: "acné",
		output: {F: 1},
		
	},
	{
		input: "acolyte",
		output: {M: 1},
		
	},
	{
		input: "acompte",
		output: {M: 1},
		
	},
	{
		input: "acoustique",
		output: {F: 1},
		
	},
	{
		input: "acque",
		output: {M: 1},
		
	},
	{
		input: "acquiescement",
		output: {M: 1},
		
	},
	{
		input: "acquis",
		output: {M: 1},
		
	},
	{
		input: "acquisition",
		output: {F: 1},
		
	},
	{
		input: "acquit",
		output: {M: 1},
		
	},
	{
		input: "acquittement",
		output: {M: 1},
		
	},
	{
		input: "acquéreur",
		output: {M: 1},
		
	},
	{
		input: "acre",
		output: {F: 1},
		
	},
	{
		input: "acre",
		output: {M: 1},
		
	},
	{
		input: "acrobate",
		output: {M: 1},
		
	},
	{
		input: "acrobatie",
		output: {F: 1},
		
	},
	{
		input: "acronyme",
		output: {M: 1},
		
	},
	{
		input: "acropole",
		output: {F: 1},
		
	},
	{
		input: "acrostiche",
		output: {M: 1},
		
	},
	{
		input: "actant",
		output: {M: 1},
		
	},
	{
		input: "acte",
		output: {M: 1},
		
	},
	{
		input: "acteur",
		output: {M: 1},
		
	},
	{
		input: "actif",
		output: {M: 1},
		
	},
	{
		input: "action",
		output: {F: 1},
		
	},
	{
		input: "actionnaire",
		output: {M: 1},
		
	},
	{
		input: "actionnariat",
		output: {M: 1},
		
	},
	{
		input: "actitud",
		output: {F: 1},
		
	},
	{
		input: "activateur",
		output: {M: 1},
		
	},
	{
		input: "activation",
		output: {F: 1},
		
	},
	{
		input: "actividad",
		output: {F: 1},
		
	},
	{
		input: "activisme",
		output: {M: 1},
		
	},
	{
		input: "activiste",
		output: {M: 1},
		
	},
	{
		input: "activite",
		output: {F: 1},
		
	},
	{
		input: "activité",
		output: {F: 1},
		
	},
	{
		input: "acto",
		output: {M: 1},
		
	},
	{
		input: "actrice",
		output: {F: 1},
		
	},
	{
		input: "actuación",
		output: {F: 1},
		
	},
	{
		input: "actualidad",
		output: {F: 1},
		
	},
	{
		input: "actualisation",
		output: {F: 1},
		
	},
	{
		input: "actualité",
		output: {F: 1},
		
	},
	{
		input: "acuité",
		output: {F: 1},
		
	},
	{
		input: "acumulación",
		output: {F: 1},
		
	},
	{
		input: "adage",
		output: {M: 1},
		
	},
	{
		input: "adagio",
		output: {M: 1},
		
	},
	{
		input: "adaptabilité",
		output: {F: 1},
		
	},
	{
		input: "adaptación",
		output: {F: 1},
		
	},
	{
		input: "adaptateur",
		output: {M: 1},
		
	},
	{
		input: "adaptation",
		output: {F: 1},
		
	},
	{
		input: "addendum",
		output: {M: 1},
		
	},
	{
		input: "addiction",
		output: {F: 1},
		
	},
	{
		input: "additif",
		output: {M: 1},
		
	},
	{
		input: "addition",
		output: {F: 1},
		
	},
	{
		input: "adduction",
		output: {F: 1},
		
	},
	{
		input: "adepte",
		output: {F: 1},
		
	},
	{
		input: "adepte",
		output: {M: 1},
		
	},
	{
		input: "adhérence",
		output: {F: 1},
		
	},
	{
		input: "adhérent",
		output: {M: 1},
		
	},
	{
		input: "adhésif",
		output: {M: 1},
		
	},
	{
		input: "adhésion",
		output: {F: 1},
		
	},
	{
		input: "adieu",
		output: {M: 1},
		
	},
	{
		input: "adjectif",
		output: {M: 1},
		
	},
	{
		input: "adjoint",
		output: {M: 1},
		
	},
	{
		input: "adjointe",
		output: {F: 1},
		
	},
	{
		input: "adjonction",
		output: {F: 1},
		
	},
	{
		input: "adjudant",
		output: {M: 1},
		
	},
	{
		input: "adjudication",
		output: {F: 1},
		
	},
	{
		input: "adjuvant",
		output: {M: 1},
		
	},
	{
		input: "administración",
		output: {F: 1},
		
	},
	{
		input: "administraciôn",
		output: {F: 1},
		
	},
	{
		input: "administrateur",
		output: {M: 1},
		
	},
	{
		input: "administration",
		output: {F: 1},
		
	},
	{
		input: "administré",
		output: {M: 1},
		
	},
	{
		input: "admirable",
		output: {F: 1},
		
	},
	{
		input: "admirable",
		output: {M: 1},
		
	},
	{
		input: "admirateur",
		output: {M: 1},
		
	},
	{
		input: "admiration",
		output: {F: 1},
		
	},
	{
		input: "admiratrice",
		output: {F: 1},
		
	},
	{
		input: "admission",
		output: {F: 1},
		
	},
	{
		input: "admonestation",
		output: {F: 1},
		
	},
	{
		input: "ado",
		output: {M: 1},
		
	},
	{
		input: "adolescence",
		output: {F: 1},
		
	},
	{
		input: "adolescent",
		output: {M: 1},
		
	},
	{
		input: "adolescente",
		output: {F: 1},
		
	},
	{
		input: "adopción",
		output: {F: 1},
		
	},
	{
		input: "adoption",
		output: {F: 1},
		
	},
	{
		input: "adorable",
		output: {F: 1},
		
	},
	{
		input: "adorable",
		output: {M: 1},
		
	},
	{
		input: "adorateur",
		output: {M: 1},
		
	},
	{
		input: "adoration",
		output: {F: 1},
		
	},
	{
		input: "adoucissement",
		output: {M: 1},
		
	},
	{
		input: "adquisición",
		output: {F: 1},
		
	},
	{
		input: "adressage",
		output: {M: 1},
		
	},
	{
		input: "adresse",
		output: {F: 1},
		
	},
	{
		input: "adsorption",
		output: {F: 1},
		
	},
	{
		input: "adulte",
		output: {F: 1},
		
	},
	{
		input: "adulte",
		output: {M: 1},
		
	},
	{
		input: "adultère",
		output: {M: 1},
		
	},
	{
		input: "adverbe",
		output: {M: 1},
		
	},
	{
		input: "adverbial",
		output: {M: 1},
		
	},
	{
		input: "adversaire",
		output: {F: 1},
		
	},
	{
		input: "adversaire",
		output: {M: 1},
		
	},
	{
		input: "adversité",
		output: {F: 1},
		
	},
	{
		input: "adénocarcinome",
		output: {M: 1},
		
	},
	{
		input: "adénome",
		output: {M: 1},
		
	},
	{
		input: "adénopathie",
		output: {F: 1},
		
	},
	{
		input: "adéquation",
		output: {F: 1},
		
	},
	{
		input: "affabilité",
		output: {F: 1},
		
	},
	{
		input: "affabulation",
		output: {F: 1},
		
	},
	{
		input: "affadissement",
		output: {M: 1},
		
	},
	{
		input: "affaiblissement",
		output: {M: 1},
		
	},
	{
		input: "affaire",
		output: {F: 1},
		
	},
	{
		input: "affairiste",
		output: {M: 1},
		
	},
	{
		input: "affaissement",
		output: {M: 1},
		
	},
	{
		input: "affamé",
		output: {M: 1},
		
	},
	{
		input: "affect",
		output: {M: 1},
		
	},
	{
		input: "affectation",
		output: {F: 1},
		
	},
	{
		input: "affection",
		output: {F: 1},
		
	},
	{
		input: "affectivité",
		output: {F: 1},
		
	},
	{
		input: "affermissement",
		output: {M: 1},
		
	},
	{
		input: "affichage",
		output: {M: 1},
		
	},
	{
		input: "affiche",
		output: {F: 1},
		
	},
	{
		input: "affichette",
		output: {F: 1},
		
	},
	{
		input: "afficheur",
		output: {M: 1},
		
	},
	{
		input: "affidavit",
		output: {M: 1},
		
	},
	{
		input: "affiliation",
		output: {F: 1},
		
	},
	{
		input: "affinage",
		output: {M: 1},
		
	},
	{
		input: "affinement",
		output: {M: 1},
		
	},
	{
		input: "affinité",
		output: {F: 1},
		
	},
	{
		input: "affirmation",
		output: {F: 1},
		
	},
	{
		input: "affixe",
		output: {M: 1},
		
	},
	{
		input: "affleurement",
		output: {M: 1},
		
	},
	{
		input: "affliction",
		output: {F: 1},
		
	},
	{
		input: "affluence",
		output: {F: 1},
		
	},
	{
		input: "affluent",
		output: {M: 1},
		
	},
	{
		input: "afflux",
		output: {M: 1},
		
	},
	{
		input: "affolement",
		output: {M: 1},
		
	},
	{
		input: "affranchi",
		output: {M: 1},
		
	},
	{
		input: "affranchie",
		output: {F: 1},
		
	},
	{
		input: "affranchissement",
		output: {M: 1},
		
	},
	{
		input: "affreux",
		output: {M: 1},
		
	},
	{
		input: "affront",
		output: {M: 1},
		
	},
	{
		input: "affrontement",
		output: {M: 1},
		
	},
	{
		input: "affrètement",
		output: {M: 1},
		
	},
	{
		input: "affréteur",
		output: {M: 1},
		
	},
	{
		input: "affût",
		output: {M: 1},
		
	},
	{
		input: "afin",
		output: {M: 1},
		
	},
	{
		input: "afirmación",
		output: {F: 1},
		
	},
	{
		input: "africain",
		output: {M: 1},
		
	},
	{
		input: "africanisation",
		output: {F: 1},
		
	},
	{
		input: "africaniste",
		output: {M: 1},
		
	},
	{
		input: "africanité",
		output: {F: 1},
		
	},
	{
		input: "agacement",
		output: {M: 1},
		
	},
	{
		input: "age",
		output: {M: 1},
		
	},
	{
		input: "agence",
		output: {F: 1},
		
	},
	{
		input: "agencement",
		output: {M: 1},
		
	},
	{
		input: "agenda",
		output: {M: 1},
		
	},
	{
		input: "agent",
		output: {M: 1},
		
	},
	{
		input: "agente",
		output: {F: 1},
		
	},
	{
		input: "aggiornamento",
		output: {M: 1},
		
	},
	{
		input: "agglomérat",
		output: {M: 1},
		
	},
	{
		input: "agglomération",
		output: {F: 1},
		
	},
	{
		input: "agglutination",
		output: {F: 1},
		
	},
	{
		input: "aggravation",
		output: {F: 1},
		
	},
	{
		input: "agilité",
		output: {F: 1},
		
	},
	{
		input: "agissement",
		output: {M: 1},
		
	},
	{
		input: "agitateur",
		output: {M: 1},
		
	},
	{
		input: "agitation",
		output: {F: 1},
		
	},
	{
		input: "agité",
		output: {M: 1},
		
	},
	{
		input: "agneau",
		output: {M: 1},
		
	},
	{
		input: "agnosie",
		output: {F: 1},
		
	},
	{
		input: "agnosticisme",
		output: {M: 1},
		
	},
	{
		input: "agnostique",
		output: {M: 1},
		
	},
	{
		input: "agonie",
		output: {F: 1},
		
	},
	{
		input: "agonisant",
		output: {M: 1},
		
	},
	{
		input: "agoniste",
		output: {M: 1},
		
	},
	{
		input: "agora",
		output: {F: 1},
		
	},
	{
		input: "agrafe",
		output: {F: 1},
		
	},
	{
		input: "agrandissement",
		output: {M: 1},
		
	},
	{
		input: "agresseur",
		output: {M: 1},
		
	},
	{
		input: "agression",
		output: {F: 1},
		
	},
	{
		input: "agressivité",
		output: {F: 1},
		
	},
	{
		input: "agriculteur",
		output: {M: 1},
		
	},
	{
		input: "agricultrice",
		output: {F: 1},
		
	},
	{
		input: "agricultura",
		output: {F: 1},
		
	},
	{
		input: "agriculture",
		output: {F: 1},
		
	},
	{
		input: "agronome",
		output: {M: 1},
		
	},
	{
		input: "agréable",
		output: {F: 1},
		
	},
	{
		input: "agréable",
		output: {M: 1},
		
	},
	{
		input: "agrégat",
		output: {M: 1},
		
	},
	{
		input: "agrégation",
		output: {F: 1},
		
	},
	{
		input: "agrégé",
		output: {M: 1},
		
	},
	{
		input: "agrément",
		output: {M: 1},
		
	},
	{
		input: "agénésie",
		output: {F: 1},
		
	},
	{
		input: "aide",
		output: {F: 1},
		
	},
	{
		input: "aide",
		output: {M: 1},
		
	},
	{
		input: "aigle",
		output: {F: 1},
		
	},
	{
		input: "aigle",
		output: {M: 1},
		
	},
	{
		input: "aigrette",
		output: {F: 1},
		
	},
	{
		input: "aigreur",
		output: {F: 1},
		
	},
	{
		input: "aiguillage",
		output: {M: 1},
		
	},
	{
		input: "aiguille",
		output: {F: 1},
		
	},
	{
		input: "aiguillon",
		output: {M: 1},
		
	},
	{
		input: "aiguière",
		output: {F: 1},
		
	},
	{
		input: "aile",
		output: {F: 1},
		
	},
	{
		input: "aileron",
		output: {M: 1},
		
	},
	{
		input: "ailleurs",
		output: {M: 1},
		
	},
	{
		input: "aimant",
		output: {M: 1},
		
	},
	{
		input: "aimantation",
		output: {F: 1},
		
	},
	{
		input: "air",
		output: {M: 1},
		
	},
	{
		input: "aire",
		output: {F: 1},
		
	},
	{
		input: "aire",
		output: {M: 1},
		
	},
	{
		input: "aisance",
		output: {F: 1},
		
	},
	{
		input: "aise",
		output: {F: 1},
		
	},
	{
		input: "ajournement",
		output: {M: 1},
		
	},
	{
		input: "ajout",
		output: {M: 1},
		
	},
	{
		input: "ajustage",
		output: {M: 1},
		
	},
	{
		input: "ajustement",
		output: {M: 1},
		
	},
	{
		input: "ajusteur",
		output: {M: 1},
		
	},
	{
		input: "al",
		output: {M: 1},
		
	},
	{
		input: "alambic",
		output: {M: 1},
		
	},
	{
		input: "alarme",
		output: {F: 1},
		
	},
	{
		input: "albatros",
		output: {M: 1},
		
	},
	{
		input: "albinos",
		output: {M: 1},
		
	},
	{
		input: "album",
		output: {M: 1},
		
	},
	{
		input: "alcalose",
		output: {F: 1},
		
	},
	{
		input: "alcaloïde",
		output: {M: 1},
		
	},
	{
		input: "alchimie",
		output: {F: 1},
		
	},
	{
		input: "alchimiste",
		output: {M: 1},
		
	},
	{
		input: "alcool",
		output: {M: 1},
		
	},
	{
		input: "alcoolique",
		output: {M: 1},
		
	},
	{
		input: "alcoolisation",
		output: {F: 1},
		
	},
	{
		input: "alcoolisme",
		output: {M: 1},
		
	},
	{
		input: "alcoolémie",
		output: {F: 1},
		
	},
	{
		input: "alcôve",
		output: {F: 1},
		
	},
	{
		input: "aldea",
		output: {F: 1},
		
	},
	{
		input: "alegría",
		output: {F: 1},
		
	},
	{
		input: "alerte",
		output: {F: 1},
		
	},
	{
		input: "alexandrin",
		output: {M: 1},
		
	},
	{
		input: "algarade",
		output: {F: 1},
		
	},
	{
		input: "algorithme",
		output: {M: 1},
		
	},
	{
		input: "algue",
		output: {F: 1},
		
	},
	{
		input: "algèbre",
		output: {F: 1},
		
	},
	{
		input: "algérien",
		output: {M: 1},
		
	},
	{
		input: "alias",
		output: {M: 1},
		
	},
	{
		input: "alibi",
		output: {M: 1},
		
	},
	{
		input: "alignement",
		output: {M: 1},
		
	},
	{
		input: "aliment",
		output: {M: 1},
		
	},
	{
		input: "alimentation",
		output: {F: 1},
		
	},
	{
		input: "alinéa",
		output: {M: 1},
		
	},
	{
		input: "aliénation",
		output: {F: 1},
		
	},
	{
		input: "aliéné",
		output: {M: 1},
		
	},
	{
		input: "allaitement",
		output: {M: 1},
		
	},
	{
		input: "allegro",
		output: {M: 1},
		
	},
	{
		input: "allemand",
		output: {M: 1},
		
	},
	{
		input: "allergie",
		output: {F: 1},
		
	},
	{
		input: "allergène",
		output: {M: 1},
		
	},
	{
		input: "allerretour",
		output: {M: 1},
		
	},
	{
		input: "alleu",
		output: {M: 1},
		
	},
	{
		input: "alliage",
		output: {M: 1},
		
	},
	{
		input: "alliance",
		output: {F: 1},
		
	},
	{
		input: "allitération",
		output: {F: 1},
		
	},
	{
		input: "allié",
		output: {M: 1},
		
	},
	{
		input: "alliée",
		output: {F: 1},
		
	},
	{
		input: "allocataire",
		output: {M: 1},
		
	},
	{
		input: "allocation",
		output: {F: 1},
		
	},
	{
		input: "allocutaire",
		output: {M: 1},
		
	},
	{
		input: "allocution",
		output: {F: 1},
		
	},
	{
		input: "allogreffe",
		output: {F: 1},
		
	},
	{
		input: "allongement",
		output: {M: 1},
		
	},
	{
		input: "allumage",
		output: {M: 1},
		
	},
	{
		input: "allumette",
		output: {F: 1},
		
	},
	{
		input: "allure",
		output: {F: 1},
		
	},
	{
		input: "allusion",
		output: {F: 1},
		
	},
	{
		input: "allègement",
		output: {M: 1},
		
	},
	{
		input: "allèle",
		output: {M: 1},
		
	},
	{
		input: "allée",
		output: {F: 1},
		
	},
	{
		input: "allégation",
		output: {F: 1},
		
	},
	{
		input: "allégeance",
		output: {F: 1},
		
	},
	{
		input: "allégement",
		output: {M: 1},
		
	},
	{
		input: "allégorie",
		output: {F: 1},
		
	},
	{
		input: "allégresse",
		output: {F: 1},
		
	},
	{
		input: "almanach",
		output: {M: 1},
		
	},
	{
		input: "alopécie",
		output: {F: 1},
		
	},
	{
		input: "alouette",
		output: {F: 1},
		
	},
	{
		input: "alourdissement",
		output: {M: 1},
		
	},
	{
		input: "alpage",
		output: {M: 1},
		
	},
	{
		input: "alpha",
		output: {M: 1},
		
	},
	{
		input: "alphabet",
		output: {M: 1},
		
	},
	{
		input: "alphabétisation",
		output: {F: 1},
		
	},
	{
		input: "alpiniste",
		output: {M: 1},
		
	},
	{
		input: "alta",
		output: {F: 1},
		
	},
	{
		input: "altemative",
		output: {F: 1},
		
	},
	{
		input: "alter",
		output: {M: 1},
		
	},
	{
		input: "altercation",
		output: {F: 1},
		
	},
	{
		input: "alternance",
		output: {F: 1},
		
	},
	{
		input: "alternancia",
		output: {F: 1},
		
	},
	{
		input: "alternateur",
		output: {M: 1},
		
	},
	{
		input: "alternative",
		output: {F: 1},
		
	},
	{
		input: "altitude",
		output: {F: 1},
		
	},
	{
		input: "alto",
		output: {M: 1},
		
	},
	{
		input: "altre",
		output: {M: 1},
		
	},
	{
		input: "altro",
		output: {M: 1},
		
	},
	{
		input: "altruisme",
		output: {M: 1},
		
	},
	{
		input: "altura",
		output: {F: 1},
		
	},
	{
		input: "altération",
		output: {F: 1},
		
	},
	{
		input: "altérité",
		output: {F: 1},
		
	},
	{
		input: "alvéole",
		output: {F: 1},
		
	},
	{
		input: "aléa",
		output: {M: 1},
		
	},
	{
		input: "amabilité",
		output: {F: 1},
		
	},
	{
		input: "amaigrissement",
		output: {M: 1},
		
	},
	{
		input: "amalgame",
		output: {M: 1},
		
	},
	{
		input: "amande",
		output: {F: 1},
		
	},
	{
		input: "amandier",
		output: {M: 1},
		
	},
	{
		input: "amant",
		output: {M: 1},
		
	},
	{
		input: "amante",
		output: {F: 1},
		
	},
	{
		input: "amarre",
		output: {F: 1},
		
	},
	{
		input: "amas",
		output: {M: 1},
		
	},
	{
		input: "amateur",
		output: {M: 1},
		
	},
	{
		input: "amateurisme",
		output: {M: 1},
		
	},
	{
		input: "amazone",
		output: {F: 1},
		
	},
	{
		input: "ambassade",
		output: {F: 1},
		
	},
	{
		input: "ambassadeur",
		output: {M: 1},
		
	},
	{
		input: "ambassadrice",
		output: {F: 1},
		
	},
	{
		input: "ambiance",
		output: {F: 1},
		
	},
	{
		input: "ambiente",
		output: {M: 1},
		
	},
	{
		input: "ambiguité",
		output: {F: 1},
		
	},
	{
		input: "ambiguïté",
		output: {F: 1},
		
	},
	{
		input: "ambigüedad",
		output: {F: 1},
		
	},
	{
		input: "ambition",
		output: {F: 1},
		
	},
	{
		input: "ambitus",
		output: {M: 1},
		
	},
	{
		input: "ambivalence",
		output: {F: 1},
		
	},
	{
		input: "amblyopie",
		output: {F: 1},
		
	},
	{
		input: "ambulance",
		output: {F: 1},
		
	},
	{
		input: "ame",
		output: {F: 1},
		
	},
	{
		input: "amenaza",
		output: {F: 1},
		
	},
	{
		input: "amende",
		output: {F: 1},
		
	},
	{
		input: "amendement",
		output: {M: 1},
		
	},
	{
		input: "amenuisement",
		output: {M: 1},
		
	},
	{
		input: "amer",
		output: {M: 1},
		
	},
	{
		input: "amertume",
		output: {F: 1},
		
	},
	{
		input: "ameublement",
		output: {M: 1},
		
	},
	{
		input: "ami",
		output: {M: 1},
		
	},
	{
		input: "amibe",
		output: {F: 1},
		
	},
	{
		input: "amicale",
		output: {F: 1},
		
	},
	{
		input: "amie",
		output: {F: 1},
		
	},
	{
		input: "amigo",
		output: {M: 1},
		
	},
	{
		input: "amincissement",
		output: {M: 1},
		
	},
	{
		input: "aminoside",
		output: {M: 1},
		
	},
	{
		input: "amiral",
		output: {M: 1},
		
	},
	{
		input: "amistad",
		output: {F: 1},
		
	},
	{
		input: "amitié",
		output: {F: 1},
		
	},
	{
		input: "amniocentèse",
		output: {F: 1},
		
	},
	{
		input: "amnistie",
		output: {F: 1},
		
	},
	{
		input: "amnésie",
		output: {F: 1},
		
	},
	{
		input: "amnésique",
		output: {M: 1},
		
	},
	{
		input: "amoindrissement",
		output: {M: 1},
		
	},
	{
		input: "amoncellement",
		output: {M: 1},
		
	},
	{
		input: "amont",
		output: {M: 1},
		
	},
	{
		input: "amor",
		output: {M: 1},
		
	},
	{
		input: "amorce",
		output: {F: 1},
		
	},
	{
		input: "amortissement",
		output: {M: 1},
		
	},
	{
		input: "amortisseur",
		output: {M: 1},
		
	},
	{
		input: "amorçage",
		output: {M: 1},
		
	},
	{
		input: "amour",
		output: {F: 1},
		
	},
	{
		input: "amour",
		output: {M: 1},
		
	},
	{
		input: "amourette",
		output: {F: 1},
		
	},
	{
		input: "amoureuse",
		output: {F: 1},
		
	},
	{
		input: "amoureux",
		output: {M: 1},
		
	},
	{
		input: "amphi",
		output: {M: 1},
		
	},
	{
		input: "amphithéâtre",
		output: {M: 1},
		
	},
	{
		input: "amphore",
		output: {F: 1},
		
	},
	{
		input: "ample",
		output: {F: 1},
		
	},
	{
		input: "ampleur",
		output: {F: 1},
		
	},
	{
		input: "ampliation",
		output: {F: 1},
		
	},
	{
		input: "amplificateur",
		output: {M: 1},
		
	},
	{
		input: "amplification",
		output: {F: 1},
		
	},
	{
		input: "amplitude",
		output: {F: 1},
		
	},
	{
		input: "ampoule",
		output: {F: 1},
		
	},
	{
		input: "amputation",
		output: {F: 1},
		
	},
	{
		input: "amputé",
		output: {M: 1},
		
	},
	{
		input: "amulette",
		output: {F: 1},
		
	},
	{
		input: "amusement",
		output: {M: 1},
		
	},
	{
		input: "amuseur",
		output: {M: 1},
		
	},
	{
		input: "amyotrophie",
		output: {F: 1},
		
	},
	{
		input: "amélioration",
		output: {F: 1},
		
	},
	{
		input: "aménagement",
		output: {M: 1},
		
	},
	{
		input: "aménageur",
		output: {M: 1},
		
	},
	{
		input: "aménité",
		output: {F: 1},
		
	},
	{
		input: "aménorrhée",
		output: {F: 1},
		
	},
	{
		input: "américain",
		output: {M: 1},
		
	},
	{
		input: "américaine",
		output: {F: 1},
		
	},
	{
		input: "américanisation",
		output: {F: 1},
		
	},
	{
		input: "an",
		output: {F: 1},
		
	},
	{
		input: "an",
		output: {M: 1},
		
	},
	{
		input: "anachorète",
		output: {M: 1},
		
	},
	{
		input: "anachronisme",
		output: {M: 1},
		
	},
	{
		input: "anagramme",
		output: {F: 1},
		
	},
	{
		input: "anagramme",
		output: {M: 1},
		
	},
	{
		input: "analepse",
		output: {F: 1},
		
	},
	{
		input: "analgésie",
		output: {F: 1},
		
	},
	{
		input: "analgésique",
		output: {M: 1},
		
	},
	{
		input: "analogie",
		output: {F: 1},
		
	},
	{
		input: "analogon",
		output: {M: 1},
		
	},
	{
		input: "analogue",
		output: {M: 1},
		
	},
	{
		input: "analphabète",
		output: {M: 1},
		
	},
	{
		input: "analphabétisme",
		output: {M: 1},
		
	},
	{
		input: "analysant",
		output: {M: 1},
		
	},
	{
		input: "analyse",
		output: {F: 1},
		
	},
	{
		input: "analyse",
		output: {M: 1},
		
	},
	{
		input: "analyseur",
		output: {M: 1},
		
	},
	{
		input: "analyste",
		output: {F: 1},
		
	},
	{
		input: "analyste",
		output: {M: 1},
		
	},
	{
		input: "analytique",
		output: {F: 1},
		
	},
	{
		input: "anamnèse",
		output: {F: 1},
		
	},
	{
		input: "anamorphose",
		output: {F: 1},
		
	},
	{
		input: "ananas",
		output: {M: 1},
		
	},
	{
		input: "anaphore",
		output: {F: 1},
		
	},
	{
		input: "anaphorique",
		output: {M: 1},
		
	},
	{
		input: "anarchie",
		output: {F: 1},
		
	},
	{
		input: "anarchisme",
		output: {M: 1},
		
	},
	{
		input: "anarchiste",
		output: {M: 1},
		
	},
	{
		input: "anastomose",
		output: {F: 1},
		
	},
	{
		input: "anathème",
		output: {M: 1},
		
	},
	{
		input: "anatomie",
		output: {F: 1},
		
	},
	{
		input: "anatomiste",
		output: {M: 1},
		
	},
	{
		input: "anche",
		output: {F: 1},
		
	},
	{
		input: "ancienneté",
		output: {F: 1},
		
	},
	{
		input: "ancrage",
		output: {M: 1},
		
	},
	{
		input: "ancre",
		output: {F: 1},
		
	},
	{
		input: "ancêtre",
		output: {F: 1},
		
	},
	{
		input: "ancêtre",
		output: {M: 1},
		
	},
	{
		input: "andante",
		output: {M: 1},
		
	},
	{
		input: "anecdote",
		output: {F: 1},
		
	},
	{
		input: "anesthésie",
		output: {F: 1},
		
	},
	{
		input: "anesthésique",
		output: {M: 1},
		
	},
	{
		input: "anesthésiste",
		output: {M: 1},
		
	},
	{
		input: "anfractuosité",
		output: {F: 1},
		
	},
	{
		input: "ange",
		output: {M: 1},
		
	},
	{
		input: "angelot",
		output: {M: 1},
		
	},
	{
		input: "angine",
		output: {F: 1},
		
	},
	{
		input: "angiographie",
		output: {F: 1},
		
	},
	{
		input: "angioplastie",
		output: {F: 1},
		
	},
	{
		input: "anglais",
		output: {M: 1},
		
	},
	{
		input: "angle",
		output: {M: 1},
		
	},
	{
		input: "anglicisme",
		output: {M: 1},
		
	},
	{
		input: "anglophone",
		output: {M: 1},
		
	},
	{
		input: "angoisse",
		output: {F: 1},
		
	},
	{
		input: "angor",
		output: {M: 1},
		
	},
	{
		input: "anguille",
		output: {F: 1},
		
	},
	{
		input: "angulation",
		output: {F: 1},
		
	},
	{
		input: "angustia",
		output: {F: 1},
		
	},
	{
		input: "angélisme",
		output: {M: 1},
		
	},
	{
		input: "animal",
		output: {M: 1},
		
	},
	{
		input: "animalité",
		output: {F: 1},
		
	},
	{
		input: "animateur",
		output: {M: 1},
		
	},
	{
		input: "animation",
		output: {F: 1},
		
	},
	{
		input: "animatrice",
		output: {F: 1},
		
	},
	{
		input: "animisme",
		output: {M: 1},
		
	},
	{
		input: "animosité",
		output: {F: 1},
		
	},
	{
		input: "animé",
		output: {M: 1},
		
	},
	{
		input: "anion",
		output: {M: 1},
		
	},
	{
		input: "anisotropie",
		output: {F: 1},
		
	},
	{
		input: "ankylose",
		output: {F: 1},
		
	},
	{
		input: "anneau",
		output: {M: 1},
		
	},
	{
		input: "annexe",
		output: {F: 1},
		
	},
	{
		input: "annexion",
		output: {F: 1},
		
	},
	{
		input: "annihilation",
		output: {F: 1},
		
	},
	{
		input: "anniversaire",
		output: {M: 1},
		
	},
	{
		input: "anno",
		output: {M: 1},
		
	},
	{
		input: "annonce",
		output: {F: 1},
		
	},
	{
		input: "annonceur",
		output: {M: 1},
		
	},
	{
		input: "annonciation",
		output: {F: 1},
		
	},
	{
		input: "annotation",
		output: {F: 1},
		
	},
	{
		input: "annuaire",
		output: {M: 1},
		
	},
	{
		input: "annuité",
		output: {F: 1},
		
	},
	{
		input: "annulation",
		output: {F: 1},
		
	},
	{
		input: "année",
		output: {F: 1},
		
	},
	{
		input: "année",
		output: {M: 1},
		
	},
	{
		input: "années",
		output: {F: 1},
		
	},
	{
		input: "anoblissement",
		output: {M: 1},
		
	},
	{
		input: "anode",
		output: {F: 1},
		
	},
	{
		input: "anomalie",
		output: {F: 1},
		
	},
	{
		input: "anomie",
		output: {F: 1},
		
	},
	{
		input: "anonymat",
		output: {M: 1},
		
	},
	{
		input: "anonyme",
		output: {M: 1},
		
	},
	{
		input: "anorak",
		output: {M: 1},
		
	},
	{
		input: "anorexie",
		output: {F: 1},
		
	},
	{
		input: "anormalité",
		output: {F: 1},
		
	},
	{
		input: "anoxie",
		output: {F: 1},
		
	},
	{
		input: "ans",
		output: {M: 1},
		
	},
	{
		input: "anse",
		output: {F: 1},
		
	},
	{
		input: "antagonisme",
		output: {M: 1},
		
	},
	{
		input: "antagoniste",
		output: {M: 1},
		
	},
	{
		input: "antalgique",
		output: {M: 1},
		
	},
	{
		input: "antenne",
		output: {F: 1},
		
	},
	{
		input: "anterior",
		output: {F: 1},
		
	},
	{
		input: "anthologie",
		output: {F: 1},
		
	},
	{
		input: "anthropocentrisme",
		output: {M: 1},
		
	},
	{
		input: "anthropologie",
		output: {F: 1},
		
	},
	{
		input: "anthropologue",
		output: {F: 1},
		
	},
	{
		input: "anthropologue",
		output: {M: 1},
		
	},
	{
		input: "anthropomorphisme",
		output: {M: 1},
		
	},
	{
		input: "anthroponyme",
		output: {M: 1},
		
	},
	{
		input: "anti",
		output: {F: 1},
		
	},
	{
		input: "anti",
		output: {M: 1},
		
	},
	{
		input: "antiaméricanisme",
		output: {M: 1},
		
	},
	{
		input: "antibiogramme",
		output: {M: 1},
		
	},
	{
		input: "antibioprophylaxie",
		output: {F: 1},
		
	},
	{
		input: "antibiothérapie",
		output: {F: 1},
		
	},
	{
		input: "antibiotique",
		output: {M: 1},
		
	},
	{
		input: "anticapitalisme",
		output: {M: 1},
		
	},
	{
		input: "antichambre",
		output: {F: 1},
		
	},
	{
		input: "anticipation",
		output: {F: 1},
		
	},
	{
		input: "anticlinal",
		output: {M: 1},
		
	},
	{
		input: "anticléricalisme",
		output: {M: 1},
		
	},
	{
		input: "anticoagulant",
		output: {M: 1},
		
	},
	{
		input: "anticoagulation",
		output: {F: 1},
		
	},
	{
		input: "anticolonialisme",
		output: {M: 1},
		
	},
	{
		input: "anticommunisme",
		output: {M: 1},
		
	},
	{
		input: "anticommuniste",
		output: {M: 1},
		
	},
	{
		input: "anticorps",
		output: {M: 1},
		
	},
	{
		input: "anticyclone",
		output: {M: 1},
		
	},
	{
		input: "antidote",
		output: {M: 1},
		
	},
	{
		input: "antidépresseur",
		output: {M: 1},
		
	},
	{
		input: "antienne",
		output: {F: 1},
		
	},
	{
		input: "antifascisme",
		output: {M: 1},
		
	},
	{
		input: "antifasciste",
		output: {M: 1},
		
	},
	{
		input: "antigua",
		output: {F: 1},
		
	},
	{
		input: "antigène",
		output: {M: 1},
		
	},
	{
		input: "antihéros",
		output: {M: 1},
		
	},
	{
		input: "antijudaïsme",
		output: {M: 1},
		
	},
	{
		input: "antilope",
		output: {F: 1},
		
	},
	{
		input: "antimilitarisme",
		output: {M: 1},
		
	},
	{
		input: "antinomie",
		output: {F: 1},
		
	},
	{
		input: "antiparlementarisme",
		output: {M: 1},
		
	},
	{
		input: "antipathie",
		output: {F: 1},
		
	},
	{
		input: "antiphrase",
		output: {F: 1},
		
	},
	{
		input: "antiquaire",
		output: {M: 1},
		
	},
	{
		input: "antique",
		output: {F: 1},
		
	},
	{
		input: "antique",
		output: {M: 1},
		
	},
	{
		input: "antiquité",
		output: {F: 1},
		
	},
	{
		input: "antiracisme",
		output: {M: 1},
		
	},
	{
		input: "antiseptique",
		output: {M: 1},
		
	},
	{
		input: "antisémite",
		output: {M: 1},
		
	},
	{
		input: "antisémitisme",
		output: {M: 1},
		
	},
	{
		input: "antithèse",
		output: {F: 1},
		
	},
	{
		input: "antivirus",
		output: {M: 1},
		
	},
	{
		input: "antonyme",
		output: {M: 1},
		
	},
	{
		input: "antre",
		output: {M: 1},
		
	},
	{
		input: "antropología",
		output: {F: 1},
		
	},
	{
		input: "antécédence",
		output: {F: 1},
		
	},
	{
		input: "antécédent",
		output: {M: 1},
		
	},
	{
		input: "antérieur",
		output: {M: 1},
		
	},
	{
		input: "antérieure",
		output: {F: 1},
		
	},
	{
		input: "antériorité",
		output: {F: 1},
		
	},
	{
		input: "anus",
		output: {M: 1},
		
	},
	{
		input: "anxiolytique",
		output: {M: 1},
		
	},
	{
		input: "anxiété",
		output: {F: 1},
		
	},
	{
		input: "análisis",
		output: {M: 1},
		
	},
	{
		input: "anéantissement",
		output: {M: 1},
		
	},
	{
		input: "anémie",
		output: {F: 1},
		
	},
	{
		input: "anémone",
		output: {F: 1},
		
	},
	{
		input: "anévrisme",
		output: {M: 1},
		
	},
	{
		input: "anévrysme",
		output: {M: 1},
		
	},
	{
		input: "août",
		output: {M: 1},
		
	},
	{
		input: "apaisement",
		output: {M: 1},
		
	},
	{
		input: "apanage",
		output: {M: 1},
		
	},
	{
		input: "aparición",
		output: {F: 1},
		
	},
	{
		input: "apariencia",
		output: {F: 1},
		
	},
	{
		input: "apartheid",
		output: {M: 1},
		
	},
	{
		input: "aparté",
		output: {M: 1},
		
	},
	{
		input: "apathie",
		output: {F: 1},
		
	},
	{
		input: "apatride",
		output: {M: 1},
		
	},
	{
		input: "aperception",
		output: {F: 1},
		
	},
	{
		input: "apertura",
		output: {F: 1},
		
	},
	{
		input: "aperçu",
		output: {M: 1},
		
	},
	{
		input: "apex",
		output: {M: 1},
		
	},
	{
		input: "aphasie",
		output: {F: 1},
		
	},
	{
		input: "aphasique",
		output: {M: 1},
		
	},
	{
		input: "aphorisme",
		output: {M: 1},
		
	},
	{
		input: "aphrodisiaque",
		output: {M: 1},
		
	},
	{
		input: "apiculteur",
		output: {M: 1},
		
	},
	{
		input: "aplanissement",
		output: {M: 1},
		
	},
	{
		input: "aplasie",
		output: {F: 1},
		
	},
	{
		input: "aplat",
		output: {M: 1},
		
	},
	{
		input: "aplatissement",
		output: {M: 1},
		
	},
	{
		input: "aplicación",
		output: {F: 1},
		
	},
	{
		input: "aplomb",
		output: {M: 1},
		
	},
	{
		input: "apnée",
		output: {F: 1},
		
	},
	{
		input: "apocalypse",
		output: {F: 1},
		
	},
	{
		input: "apocryphe",
		output: {M: 1},
		
	},
	{
		input: "apogée",
		output: {F: 1},
		
	},
	{
		input: "apogée",
		output: {M: 1},
		
	},
	{
		input: "apolitique",
		output: {M: 1},
		
	},
	{
		input: "apolitisme",
		output: {M: 1},
		
	},
	{
		input: "apologie",
		output: {F: 1},
		
	},
	{
		input: "apologiste",
		output: {M: 1},
		
	},
	{
		input: "apologue",
		output: {M: 1},
		
	},
	{
		input: "apologétique",
		output: {F: 1},
		
	},
	{
		input: "apoplexie",
		output: {F: 1},
		
	},
	{
		input: "aporie",
		output: {F: 1},
		
	},
	{
		input: "apostasie",
		output: {F: 1},
		
	},
	{
		input: "apostat",
		output: {M: 1},
		
	},
	{
		input: "apostille",
		output: {F: 1},
		
	},
	{
		input: "apostolat",
		output: {M: 1},
		
	},
	{
		input: "apostrophe",
		output: {F: 1},
		
	},
	{
		input: "apothicaire",
		output: {M: 1},
		
	},
	{
		input: "apothéose",
		output: {F: 1},
		
	},
	{
		input: "apparat",
		output: {M: 1},
		
	},
	{
		input: "apparatchik",
		output: {M: 1},
		
	},
	{
		input: "appareil",
		output: {M: 1},
		
	},
	{
		input: "appareillage",
		output: {M: 1},
		
	},
	{
		input: "apparence",
		output: {F: 1},
		
	},
	{
		input: "apparent",
		output: {M: 1},
		
	},
	{
		input: "apparentement",
		output: {M: 1},
		
	},
	{
		input: "appariement",
		output: {M: 1},
		
	},
	{
		input: "appariteur",
		output: {M: 1},
		
	},
	{
		input: "apparition",
		output: {F: 1},
		
	},
	{
		input: "appartement",
		output: {M: 1},
		
	},
	{
		input: "appartenance",
		output: {F: 1},
		
	},
	{
		input: "appauvrissement",
		output: {M: 1},
		
	},
	{
		input: "appel",
		output: {M: 1},
		
	},
	{
		input: "appellatif",
		output: {M: 1},
		
	},
	{
		input: "appellation",
		output: {F: 1},
		
	},
	{
		input: "appendice",
		output: {M: 1},
		
	},
	{
		input: "appendicectomie",
		output: {F: 1},
		
	},
	{
		input: "appendicite",
		output: {F: 1},
		
	},
	{
		input: "appentis",
		output: {M: 1},
		
	},
	{
		input: "applaudissement",
		output: {M: 1},
		
	},
	{
		input: "applicabilité",
		output: {F: 1},
		
	},
	{
		input: "application",
		output: {F: 1},
		
	},
	{
		input: "appoint",
		output: {M: 1},
		
	},
	{
		input: "appontement",
		output: {M: 1},
		
	},
	{
		input: "apport",
		output: {M: 1},
		
	},
	{
		input: "apporteur",
		output: {M: 1},
		
	},
	{
		input: "apposition",
		output: {F: 1},
		
	},
	{
		input: "apprenant",
		output: {M: 1},
		
	},
	{
		input: "apprenti",
		output: {M: 1},
		
	},
	{
		input: "apprentie",
		output: {F: 1},
		
	},
	{
		input: "apprentissage",
		output: {M: 1},
		
	},
	{
		input: "apprivoisement",
		output: {M: 1},
		
	},
	{
		input: "approbation",
		output: {F: 1},
		
	},
	{
		input: "approche",
		output: {F: 1},
		
	},
	{
		input: "approche",
		output: {M: 1},
		
	},
	{
		input: "approfondissement",
		output: {M: 1},
		
	},
	{
		input: "appropriation",
		output: {F: 1},
		
	},
	{
		input: "approvisionnement",
		output: {M: 1},
		
	},
	{
		input: "approximation",
		output: {F: 1},
		
	},
	{
		input: "appréciation",
		output: {F: 1},
		
	},
	{
		input: "appréhension",
		output: {F: 1},
		
	},
	{
		input: "apprêt",
		output: {M: 1},
		
	},
	{
		input: "appui",
		output: {M: 1},
		
	},
	{
		input: "appât",
		output: {M: 1},
		
	},
	{
		input: "appétence",
		output: {F: 1},
		
	},
	{
		input: "appétit",
		output: {M: 1},
		
	},
	{
		input: "apraxie",
		output: {F: 1},
		
	},
	{
		input: "aprèsmidi",
		output: {M: 1},
		
	},
	{
		input: "aptitude",
		output: {F: 1},
		
	},
	{
		input: "apurement",
		output: {M: 1},
		
	},
	{
		input: "apéritif",
		output: {M: 1},
		
	},
	{
		input: "apôtre",
		output: {M: 1},
		
	},
	{
		input: "aquaculture",
		output: {F: 1},
		
	},
	{
		input: "aquarelle",
		output: {F: 1},
		
	},
	{
		input: "aquarium",
		output: {M: 1},
		
	},
	{
		input: "aqueduc",
		output: {M: 1},
		
	},
	{
		input: "aquifère",
		output: {M: 1},
		
	},
	{
		input: "ar",
		output: {M: 1},
		
	},
	{
		input: "arabe",
		output: {M: 1},
		
	},
	{
		input: "arabesque",
		output: {F: 1},
		
	},
	{
		input: "arabisant",
		output: {M: 1},
		
	},
	{
		input: "arabisation",
		output: {F: 1},
		
	},
	{
		input: "araignée",
		output: {F: 1},
		
	},
	{
		input: "araire",
		output: {M: 1},
		
	},
	{
		input: "arbalète",
		output: {F: 1},
		
	},
	{
		input: "arbitrage",
		output: {M: 1},
		
	},
	{
		input: "arbitraire",
		output: {M: 1},
		
	},
	{
		input: "arbitre",
		output: {M: 1},
		
	},
	{
		input: "arborescence",
		output: {F: 1},
		
	},
	{
		input: "arbre",
		output: {M: 1},
		
	},
	{
		input: "arbrisseau",
		output: {M: 1},
		
	},
	{
		input: "arbuste",
		output: {M: 1},
		
	},
	{
		input: "arc",
		output: {M: 1},
		
	},
	{
		input: "arcade",
		output: {F: 1},
		
	},
	{
		input: "arcature",
		output: {F: 1},
		
	},
	{
		input: "arceau",
		output: {M: 1},
		
	},
	{
		input: "archange",
		output: {M: 1},
		
	},
	{
		input: "archaïsme",
		output: {M: 1},
		
	},
	{
		input: "arche",
		output: {F: 1},
		
	},
	{
		input: "archer",
		output: {M: 1},
		
	},
	{
		input: "archet",
		output: {M: 1},
		
	},
	{
		input: "archevêché",
		output: {M: 1},
		
	},
	{
		input: "archevêque",
		output: {M: 1},
		
	},
	{
		input: "archi",
		output: {F: 1},
		
	},
	{
		input: "archi",
		output: {M: 1},
		
	},
	{
		input: "archidiacre",
		output: {M: 1},
		
	},
	{
		input: "archiduc",
		output: {M: 1},
		
	},
	{
		input: "archiduchesse",
		output: {F: 1},
		
	},
	{
		input: "archipel",
		output: {M: 1},
		
	},
	{
		input: "architecte",
		output: {F: 1},
		
	},
	{
		input: "architecte",
		output: {M: 1},
		
	},
	{
		input: "architectonique",
		output: {F: 1},
		
	},
	{
		input: "architecture",
		output: {F: 1},
		
	},
	{
		input: "architrave",
		output: {F: 1},
		
	},
	{
		input: "archivage",
		output: {M: 1},
		
	},
	{
		input: "archive",
		output: {F: 1},
		
	},
	{
		input: "archiviste",
		output: {M: 1},
		
	},
	{
		input: "archivolte",
		output: {F: 1},
		
	},
	{
		input: "archéologie",
		output: {F: 1},
		
	},
	{
		input: "archéologue",
		output: {M: 1},
		
	},
	{
		input: "archétype",
		output: {M: 1},
		
	},
	{
		input: "ardent",
		output: {M: 1},
		
	},
	{
		input: "ardente",
		output: {F: 1},
		
	},
	{
		input: "ardeur",
		output: {F: 1},
		
	},
	{
		input: "ardoise",
		output: {F: 1},
		
	},
	{
		input: "are",
		output: {M: 1},
		
	},
	{
		input: "aree",
		output: {M: 1},
		
	},
	{
		input: "arena",
		output: {F: 1},
		
	},
	{
		input: "argent",
		output: {M: 1},
		
	},
	{
		input: "argile",
		output: {F: 1},
		
	},
	{
		input: "argot",
		output: {M: 1},
		
	},
	{
		input: "argument",
		output: {M: 1},
		
	},
	{
		input: "argumentaire",
		output: {M: 1},
		
	},
	{
		input: "argumentation",
		output: {F: 1},
		
	},
	{
		input: "aria",
		output: {F: 1},
		
	},
	{
		input: "aridité",
		output: {F: 1},
		
	},
	{
		input: "aristocracia",
		output: {F: 1},
		
	},
	{
		input: "aristocrate",
		output: {F: 1},
		
	},
	{
		input: "aristocrate",
		output: {M: 1},
		
	},
	{
		input: "aristocratie",
		output: {F: 1},
		
	},
	{
		input: "aristotélicien",
		output: {M: 1},
		
	},
	{
		input: "aristotélisme",
		output: {M: 1},
		
	},
	{
		input: "arithmétique",
		output: {F: 1},
		
	},
	{
		input: "armada",
		output: {F: 1},
		
	},
	{
		input: "armateur",
		output: {M: 1},
		
	},
	{
		input: "armature",
		output: {F: 1},
		
	},
	{
		input: "arme",
		output: {F: 1},
		
	},
	{
		input: "armement",
		output: {M: 1},
		
	},
	{
		input: "armi",
		output: {M: 1},
		
	},
	{
		input: "armistice",
		output: {M: 1},
		
	},
	{
		input: "armoire",
		output: {F: 1},
		
	},
	{
		input: "armure",
		output: {F: 1},
		
	},
	{
		input: "armurerie",
		output: {F: 1},
		
	},
	{
		input: "armurier",
		output: {M: 1},
		
	},
	{
		input: "armée",
		output: {F: 1},
		
	},
	{
		input: "arnaque",
		output: {F: 1},
		
	},
	{
		input: "arpent",
		output: {M: 1},
		
	},
	{
		input: "arpentage",
		output: {M: 1},
		
	},
	{
		input: "arpenteur",
		output: {M: 1},
		
	},
	{
		input: "arpège",
		output: {M: 1},
		
	},
	{
		input: "arquebuse",
		output: {F: 1},
		
	},
	{
		input: "arquitectura",
		output: {F: 1},
		
	},
	{
		input: "arrachage",
		output: {M: 1},
		
	},
	{
		input: "arrachement",
		output: {M: 1},
		
	},
	{
		input: "arracheur",
		output: {M: 1},
		
	},
	{
		input: "arrangement",
		output: {M: 1},
		
	},
	{
		input: "arrest",
		output: {M: 1},
		
	},
	{
		input: "arrestation",
		output: {F: 1},
		
	},
	{
		input: "arret",
		output: {M: 1},
		
	},
	{
		input: "arrimage",
		output: {M: 1},
		
	},
	{
		input: "arrivage",
		output: {M: 1},
		
	},
	{
		input: "arriviste",
		output: {M: 1},
		
	},
	{
		input: "arrivée",
		output: {F: 1},
		
	},
	{
		input: "arrière",
		output: {F: 1},
		
	},
	{
		input: "arrière",
		output: {M: 1},
		
	},
	{
		input: "arrièreplan",
		output: {M: 1},
		
	},
	{
		input: "arriération",
		output: {F: 1},
		
	},
	{
		input: "arriéré",
		output: {M: 1},
		
	},
	{
		input: "arrogance",
		output: {F: 1},
		
	},
	{
		input: "arrondi",
		output: {M: 1},
		
	},
	{
		input: "arrondissement",
		output: {M: 1},
		
	},
	{
		input: "arrosage",
		output: {M: 1},
		
	},
	{
		input: "arrosoir",
		output: {M: 1},
		
	},
	{
		input: "arrêt",
		output: {M: 1},
		
	},
	{
		input: "arrêté",
		output: {M: 1},
		
	},
	{
		input: "ars",
		output: {M: 1},
		
	},
	{
		input: "arsenal",
		output: {M: 1},
		
	},
	{
		input: "art",
		output: {F: 1},
		
	},
	{
		input: "art",
		output: {M: 1},
		
	},
	{
		input: "arte",
		output: {M: 1},
		
	},
	{
		input: "artefact",
		output: {M: 1},
		
	},
	{
		input: "arthrite",
		output: {F: 1},
		
	},
	{
		input: "arthrodèse",
		output: {F: 1},
		
	},
	{
		input: "arthroplastie",
		output: {F: 1},
		
	},
	{
		input: "arthrose",
		output: {F: 1},
		
	},
	{
		input: "arti",
		output: {M: 1},
		
	},
	{
		input: "artichaut",
		output: {M: 1},
		
	},
	{
		input: "article",
		output: {M: 1},
		
	},
	{
		input: "articles",
		output: {M: 1},
		
	},
	{
		input: "articulación",
		output: {F: 1},
		
	},
	{
		input: "articulateur",
		output: {M: 1},
		
	},
	{
		input: "articulation",
		output: {F: 1},
		
	},
	{
		input: "artifice",
		output: {M: 1},
		
	},
	{
		input: "artificialisation",
		output: {F: 1},
		
	},
	{
		input: "artillerie",
		output: {F: 1},
		
	},
	{
		input: "artilleur",
		output: {M: 1},
		
	},
	{
		input: "artisan",
		output: {M: 1},
		
	},
	{
		input: "artisanat",
		output: {M: 1},
		
	},
	{
		input: "artiste",
		output: {F: 1},
		
	},
	{
		input: "artiste",
		output: {M: 1},
		
	},
	{
		input: "artère",
		output: {F: 1},
		
	},
	{
		input: "artéfact",
		output: {M: 1},
		
	},
	{
		input: "artériographie",
		output: {F: 1},
		
	},
	{
		input: "artériopathie",
		output: {F: 1},
		
	},
	{
		input: "artérite",
		output: {F: 1},
		
	},
	{
		input: "artículo",
		output: {M: 1},
		
	},
	{
		input: "arythmie",
		output: {F: 1},
		
	},
	{
		input: "arène",
		output: {F: 1},
		
	},
	{
		input: "aréopage",
		output: {M: 1},
		
	},
	{
		input: "arête",
		output: {F: 1},
		
	},
	{
		input: "arôme",
		output: {M: 1},
		
	},
	{
		input: "as",
		output: {M: 1},
		
	},
	{
		input: "ascendance",
		output: {F: 1},
		
	},
	{
		input: "ascendant",
		output: {M: 1},
		
	},
	{
		input: "ascenseur",
		output: {M: 1},
		
	},
	{
		input: "ascension",
		output: {F: 1},
		
	},
	{
		input: "ascite",
		output: {F: 1},
		
	},
	{
		input: "ascèse",
		output: {F: 1},
		
	},
	{
		input: "ascète",
		output: {M: 1},
		
	},
	{
		input: "ascétisme",
		output: {M: 1},
		
	},
	{
		input: "asepsie",
		output: {F: 1},
		
	},
	{
		input: "ashram",
		output: {M: 1},
		
	},
	{
		input: "asile",
		output: {M: 1},
		
	},
	{
		input: "asistencia",
		output: {F: 1},
		
	},
	{
		input: "asociación",
		output: {F: 1},
		
	},
	{
		input: "aspect",
		output: {M: 1},
		
	},
	{
		input: "aspecto",
		output: {M: 1},
		
	},
	{
		input: "aspersion",
		output: {F: 1},
		
	},
	{
		input: "asphyxie",
		output: {F: 1},
		
	},
	{
		input: "aspirant",
		output: {M: 1},
		
	},
	{
		input: "aspirateur",
		output: {M: 1},
		
	},
	{
		input: "aspiration",
		output: {F: 1},
		
	},
	{
		input: "aspirine",
		output: {F: 1},
		
	},
	{
		input: "aspérité",
		output: {F: 1},
		
	},
	{
		input: "assaillant",
		output: {M: 1},
		
	},
	{
		input: "assainissement",
		output: {M: 1},
		
	},
	{
		input: "assaisonnement",
		output: {M: 1},
		
	},
	{
		input: "assassin",
		output: {M: 1},
		
	},
	{
		input: "assassinat",
		output: {M: 1},
		
	},
	{
		input: "assaut",
		output: {M: 1},
		
	},
	{
		input: "assemblage",
		output: {M: 1},
		
	},
	{
		input: "assemblée",
		output: {F: 1},
		
	},
	{
		input: "assentiment",
		output: {M: 1},
		
	},
	{
		input: "assertion",
		output: {F: 1},
		
	},
	{
		input: "asservissement",
		output: {M: 1},
		
	},
	{
		input: "assesseur",
		output: {M: 1},
		
	},
	{
		input: "assidu",
		output: {M: 1},
		
	},
	{
		input: "assiduité",
		output: {F: 1},
		
	},
	{
		input: "assiette",
		output: {F: 1},
		
	},
	{
		input: "assiettée",
		output: {F: 1},
		
	},
	{
		input: "assignat",
		output: {M: 1},
		
	},
	{
		input: "assignation",
		output: {F: 1},
		
	},
	{
		input: "assimilation",
		output: {F: 1},
		
	},
	{
		input: "assise",
		output: {F: 1},
		
	},
	{
		input: "assistanat",
		output: {M: 1},
		
	},
	{
		input: "assistance",
		output: {F: 1},
		
	},
	{
		input: "assistant",
		output: {M: 1},
		
	},
	{
		input: "assistante",
		output: {F: 1},
		
	},
	{
		input: "assisté",
		output: {M: 1},
		
	},
	{
		input: "association",
		output: {F: 1},
		
	},
	{
		input: "associé",
		output: {M: 1},
		
	},
	{
		input: "associée",
		output: {F: 1},
		
	},
	{
		input: "assoiffé",
		output: {M: 1},
		
	},
	{
		input: "assolement",
		output: {M: 1},
		
	},
	{
		input: "assombrissement",
		output: {M: 1},
		
	},
	{
		input: "assomption",
		output: {F: 1},
		
	},
	{
		input: "assonance",
		output: {F: 1},
		
	},
	{
		input: "assortiment",
		output: {M: 1},
		
	},
	{
		input: "assoupissement",
		output: {M: 1},
		
	},
	{
		input: "assouplissement",
		output: {M: 1},
		
	},
	{
		input: "assouvissement",
		output: {M: 1},
		
	},
	{
		input: "assujetti",
		output: {M: 1},
		
	},
	{
		input: "assujettissement",
		output: {M: 1},
		
	},
	{
		input: "assurance",
		output: {F: 1},
		
	},
	{
		input: "assureur",
		output: {M: 1},
		
	},
	{
		input: "assèchement",
		output: {M: 1},
		
	},
	{
		input: "asthmatique",
		output: {M: 1},
		
	},
	{
		input: "asthme",
		output: {M: 1},
		
	},
	{
		input: "asthénie",
		output: {F: 1},
		
	},
	{
		input: "astre",
		output: {M: 1},
		
	},
	{
		input: "astreinte",
		output: {F: 1},
		
	},
	{
		input: "astrolabe",
		output: {M: 1},
		
	},
	{
		input: "astrologie",
		output: {F: 1},
		
	},
	{
		input: "astrologue",
		output: {M: 1},
		
	},
	{
		input: "astronaute",
		output: {M: 1},
		
	},
	{
		input: "astronome",
		output: {M: 1},
		
	},
	{
		input: "astronomie",
		output: {F: 1},
		
	},
	{
		input: "astrophysicien",
		output: {M: 1},
		
	},
	{
		input: "astuce",
		output: {F: 1},
		
	},
	{
		input: "astérisque",
		output: {F: 1},
		
	},
	{
		input: "astérisque",
		output: {M: 1},
		
	},
	{
		input: "astéroïde",
		output: {M: 1},
		
	},
	{
		input: "asymptote",
		output: {F: 1},
		
	},
	{
		input: "asymétrie",
		output: {F: 1},
		
	},
	{
		input: "atavisme",
		output: {M: 1},
		
	},
	{
		input: "ataxie",
		output: {F: 1},
		
	},
	{
		input: "atelier",
		output: {M: 1},
		
	},
	{
		input: "atención",
		output: {F: 1},
		
	},
	{
		input: "athlète",
		output: {M: 1},
		
	},
	{
		input: "athée",
		output: {M: 1},
		
	},
	{
		input: "athéisme",
		output: {M: 1},
		
	},
	{
		input: "atlas",
		output: {M: 1},
		
	},
	{
		input: "atmosphère",
		output: {F: 1},
		
	},
	{
		input: "atoll",
		output: {M: 1},
		
	},
	{
		input: "atome",
		output: {M: 1},
		
	},
	{
		input: "atomisation",
		output: {F: 1},
		
	},
	{
		input: "atomisme",
		output: {M: 1},
		
	},
	{
		input: "atonie",
		output: {F: 1},
		
	},
	{
		input: "atout",
		output: {M: 1},
		
	},
	{
		input: "atrium",
		output: {M: 1},
		
	},
	{
		input: "atrocité",
		output: {F: 1},
		
	},
	{
		input: "atrophie",
		output: {F: 1},
		
	},
	{
		input: "attache",
		output: {F: 1},
		
	},
	{
		input: "attachement",
		output: {M: 1},
		
	},
	{
		input: "attaché",
		output: {M: 1},
		
	},
	{
		input: "attachée",
		output: {F: 1},
		
	},
	{
		input: "attaquant",
		output: {M: 1},
		
	},
	{
		input: "attaque",
		output: {F: 1},
		
	},
	{
		input: "attardé",
		output: {M: 1},
		
	},
	{
		input: "atteinte",
		output: {F: 1},
		
	},
	{
		input: "attelage",
		output: {M: 1},
		
	},
	{
		input: "attelle",
		output: {F: 1},
		
	},
	{
		input: "attendrissement",
		output: {M: 1},
		
	},
	{
		input: "attentat",
		output: {M: 1},
		
	},
	{
		input: "attente",
		output: {F: 1},
		
	},
	{
		input: "attention",
		output: {F: 1},
		
	},
	{
		input: "attentisme",
		output: {M: 1},
		
	},
	{
		input: "atterrissage",
		output: {M: 1},
		
	},
	{
		input: "attestation",
		output: {F: 1},
		
	},
	{
		input: "attique",
		output: {M: 1},
		
	},
	{
		input: "attirail",
		output: {M: 1},
		
	},
	{
		input: "attirance",
		output: {F: 1},
		
	},
	{
		input: "attitude",
		output: {F: 1},
		
	},
	{
		input: "attouchement",
		output: {M: 1},
		
	},
	{
		input: "attracteur",
		output: {M: 1},
		
	},
	{
		input: "attraction",
		output: {F: 1},
		
	},
	{
		input: "attractivité",
		output: {F: 1},
		
	},
	{
		input: "attrait",
		output: {M: 1},
		
	},
	{
		input: "attrape",
		output: {M: 1},
		
	},
	{
		input: "attribut",
		output: {M: 1},
		
	},
	{
		input: "attribution",
		output: {F: 1},
		
	},
	{
		input: "attroupement",
		output: {M: 1},
		
	},
	{
		input: "atténuation",
		output: {F: 1},
		
	},
	{
		input: "aubade",
		output: {F: 1},
		
	},
	{
		input: "aubaine",
		output: {F: 1},
		
	},
	{
		input: "aube",
		output: {F: 1},
		
	},
	{
		input: "auberge",
		output: {F: 1},
		
	},
	{
		input: "aubergiste",
		output: {M: 1},
		
	},
	{
		input: "auctoritas",
		output: {F: 1},
		
	},
	{
		input: "audace",
		output: {F: 1},
		
	},
	{
		input: "audacieux",
		output: {M: 1},
		
	},
	{
		input: "audelà",
		output: {M: 1},
		
	},
	{
		input: "audience",
		output: {F: 1},
		
	},
	{
		input: "audiencia",
		output: {F: 1},
		
	},
	{
		input: "audiovisuel",
		output: {M: 1},
		
	},
	{
		input: "audit",
		output: {M: 1},
		
	},
	{
		input: "auditeur",
		output: {M: 1},
		
	},
	{
		input: "audition",
		output: {F: 1},
		
	},
	{
		input: "auditoire",
		output: {M: 1},
		
	},
	{
		input: "auditorium",
		output: {M: 1},
		
	},
	{
		input: "auditrice",
		output: {F: 1},
		
	},
	{
		input: "auge",
		output: {F: 1},
		
	},
	{
		input: "augment",
		output: {M: 1},
		
	},
	{
		input: "augmentation",
		output: {F: 1},
		
	},
	{
		input: "augure",
		output: {M: 1},
		
	},
	{
		input: "auguste",
		output: {M: 1},
		
	},
	{
		input: "augustinisme",
		output: {M: 1},
		
	},
	{
		input: "aultre",
		output: {F: 1},
		
	},
	{
		input: "aultre",
		output: {M: 1},
		
	},
	{
		input: "aumento",
		output: {M: 1},
		
	},
	{
		input: "aumône",
		output: {F: 1},
		
	},
	{
		input: "aumônerie",
		output: {F: 1},
		
	},
	{
		input: "aumônier",
		output: {M: 1},
		
	},
	{
		input: "aune",
		output: {F: 1},
		
	},
	{
		input: "auprès",
		output: {F: 1},
		
	},
	{
		input: "auprès",
		output: {M: 1},
		
	},
	{
		input: "aura",
		output: {F: 1},
		
	},
	{
		input: "aura",
		output: {M: 1},
		
	},
	{
		input: "aurora",
		output: {F: 1},
		
	},
	{
		input: "aurore",
		output: {F: 1},
		
	},
	{
		input: "auréole",
		output: {F: 1},
		
	},
	{
		input: "auscultation",
		output: {F: 1},
		
	},
	{
		input: "ausencia",
		output: {F: 1},
		
	},
	{
		input: "austérité",
		output: {F: 1},
		
	},
	{
		input: "autarcie",
		output: {F: 1},
		
	},
	{
		input: "autel",
		output: {M: 1},
		
	},
	{
		input: "auteur",
		output: {M: 1},
		
	},
	{
		input: "auteure",
		output: {F: 1},
		
	},
	{
		input: "authenticité",
		output: {F: 1},
		
	},
	{
		input: "authentification",
		output: {F: 1},
		
	},
	{
		input: "authentique",
		output: {F: 1},
		
	},
	{
		input: "authentique",
		output: {M: 1},
		
	},
	{
		input: "autisme",
		output: {M: 1},
		
	},
	{
		input: "autiste",
		output: {M: 1},
		
	},
	{
		input: "auto",
		output: {F: 1},
		
	},
	{
		input: "auto",
		output: {M: 1},
		
	},
	{
		input: "autobiographie",
		output: {F: 1},
		
	},
	{
		input: "autobus",
		output: {M: 1},
		
	},
	{
		input: "autocar",
		output: {M: 1},
		
	},
	{
		input: "autocensure",
		output: {F: 1},
		
	},
	{
		input: "autochtone",
		output: {F: 1},
		
	},
	{
		input: "autochtone",
		output: {M: 1},
		
	},
	{
		input: "autoclave",
		output: {M: 1},
		
	},
	{
		input: "autocollant",
		output: {M: 1},
		
	},
	{
		input: "autocontrôle",
		output: {M: 1},
		
	},
	{
		input: "autocorrélation",
		output: {F: 1},
		
	},
	{
		input: "autocrate",
		output: {M: 1},
		
	},
	{
		input: "autocratie",
		output: {F: 1},
		
	},
	{
		input: "autocritique",
		output: {F: 1},
		
	},
	{
		input: "autodafé",
		output: {M: 1},
		
	},
	{
		input: "autodestruction",
		output: {F: 1},
		
	},
	{
		input: "autodidacte",
		output: {M: 1},
		
	},
	{
		input: "autodiscipline",
		output: {F: 1},
		
	},
	{
		input: "autodéfense",
		output: {F: 1},
		
	},
	{
		input: "autodétermination",
		output: {F: 1},
		
	},
	{
		input: "autofiction",
		output: {F: 1},
		
	},
	{
		input: "autofinancement",
		output: {M: 1},
		
	},
	{
		input: "autoformation",
		output: {F: 1},
		
	},
	{
		input: "autogestion",
		output: {F: 1},
		
	},
	{
		input: "autographe",
		output: {M: 1},
		
	},
	{
		input: "autolimitation",
		output: {F: 1},
		
	},
	{
		input: "automate",
		output: {F: 1},
		
	},
	{
		input: "automate",
		output: {M: 1},
		
	},
	{
		input: "automatisation",
		output: {F: 1},
		
	},
	{
		input: "automatisme",
		output: {M: 1},
		
	},
	{
		input: "automitrailleuse",
		output: {F: 1},
		
	},
	{
		input: "automne",
		output: {M: 1},
		
	},
	{
		input: "automobile",
		output: {F: 1},
		
	},
	{
		input: "automobiliste",
		output: {M: 1},
		
	},
	{
		input: "automédication",
		output: {F: 1},
		
	},
	{
		input: "autonomie",
		output: {F: 1},
		
	},
	{
		input: "autonomisation",
		output: {F: 1},
		
	},
	{
		input: "autonomía",
		output: {F: 1},
		
	},
	{
		input: "autoportrait",
		output: {M: 1},
		
	},
	{
		input: "autopsie",
		output: {F: 1},
		
	},
	{
		input: "autor",
		output: {M: 1},
		
	},
	{
		input: "autora",
		output: {F: 1},
		
	},
	{
		input: "autoridad",
		output: {F: 1},
		
	},
	{
		input: "autorisation",
		output: {F: 1},
		
	},
	{
		input: "autoritarisme",
		output: {M: 1},
		
	},
	{
		input: "autorité",
		output: {F: 1},
		
	},
	{
		input: "autoroute",
		output: {F: 1},
		
	},
	{
		input: "autoréflexion",
		output: {F: 1},
		
	},
	{
		input: "autoréférence",
		output: {F: 1},
		
	},
	{
		input: "autorégulation",
		output: {F: 1},
		
	},
	{
		input: "autosatisfaction",
		output: {F: 1},
		
	},
	{
		input: "autosuffisance",
		output: {F: 1},
		
	},
	{
		input: "autour",
		output: {F: 1},
		
	},
	{
		input: "autour",
		output: {M: 1},
		
	},
	{
		input: "autoévaluation",
		output: {F: 1},
		
	},
	{
		input: "autre",
		output: {F: 1},
		
	},
	{
		input: "autre",
		output: {M: 1},
		
	},
	{
		input: "autruche",
		output: {F: 1},
		
	},
	{
		input: "autrui",
		output: {M: 1},
		
	},
	{
		input: "auvent",
		output: {M: 1},
		
	},
	{
		input: "auxiliaire",
		output: {F: 1},
		
	},
	{
		input: "auxiliaire",
		output: {M: 1},
		
	},
	{
		input: "aval",
		output: {M: 1},
		
	},
	{
		input: "avalanche",
		output: {F: 1},
		
	},
	{
		input: "avance",
		output: {F: 1},
		
	},
	{
		input: "avancement",
		output: {M: 1},
		
	},
	{
		input: "avancée",
		output: {F: 1},
		
	},
	{
		input: "avant",
		output: {F: 1},
		
	},
	{
		input: "avant",
		output: {M: 1},
		
	},
	{
		input: "avantage",
		output: {M: 1},
		
	},
	{
		input: "avantgarde",
		output: {F: 1},
		
	},
	{
		input: "avantgoût",
		output: {M: 1},
		
	},
	{
		input: "avantprojet",
		output: {M: 1},
		
	},
	{
		input: "avantpropos",
		output: {M: 1},
		
	},
	{
		input: "avare",
		output: {M: 1},
		
	},
	{
		input: "avarice",
		output: {F: 1},
		
	},
	{
		input: "avarie",
		output: {F: 1},
		
	},
	{
		input: "avatar",
		output: {M: 1},
		
	},
	{
		input: "avenant",
		output: {M: 1},
		
	},
	{
		input: "avenir",
		output: {M: 1},
		
	},
	{
		input: "aventura",
		output: {F: 1},
		
	},
	{
		input: "aventure",
		output: {F: 1},
		
	},
	{
		input: "aventurier",
		output: {M: 1},
		
	},
	{
		input: "aventurière",
		output: {F: 1},
		
	},
	{
		input: "avenue",
		output: {F: 1},
		
	},
	{
		input: "averse",
		output: {F: 1},
		
	},
	{
		input: "aversion",
		output: {F: 1},
		
	},
	{
		input: "avertissement",
		output: {M: 1},
		
	},
	{
		input: "avertisseur",
		output: {M: 1},
		
	},
	{
		input: "aveu",
		output: {M: 1},
		
	},
	{
		input: "aveugle",
		output: {F: 1},
		
	},
	{
		input: "aveugle",
		output: {M: 1},
		
	},
	{
		input: "aveuglement",
		output: {M: 1},
		
	},
	{
		input: "aviateur",
		output: {M: 1},
		
	},
	{
		input: "aviation",
		output: {F: 1},
		
	},
	{
		input: "avidité",
		output: {F: 1},
		
	},
	{
		input: "avilissement",
		output: {M: 1},
		
	},
	{
		input: "avion",
		output: {M: 1},
		
	},
	{
		input: "aviron",
		output: {M: 1},
		
	},
	{
		input: "avis",
		output: {M: 1},
		
	},
	{
		input: "aviso",
		output: {M: 1},
		
	},
	{
		input: "avocat",
		output: {M: 1},
		
	},
	{
		input: "avocate",
		output: {F: 1},
		
	},
	{
		input: "avoir",
		output: {M: 1},
		
	},
	{
		input: "avortement",
		output: {M: 1},
		
	},
	{
		input: "avorton",
		output: {M: 1},
		
	},
	{
		input: "avoué",
		output: {M: 1},
		
	},
	{
		input: "avril",
		output: {M: 1},
		
	},
	{
		input: "avènement",
		output: {M: 1},
		
	},
	{
		input: "axe",
		output: {M: 1},
		
	},
	{
		input: "axiologie",
		output: {F: 1},
		
	},
	{
		input: "axiomatique",
		output: {F: 1},
		
	},
	{
		input: "axiomatisation",
		output: {F: 1},
		
	},
	{
		input: "axiome",
		output: {M: 1},
		
	},
	{
		input: "axone",
		output: {M: 1},
		
	},
	{
		input: "ayatollah",
		output: {M: 1},
		
	},
	{
		input: "ayuda",
		output: {F: 1},
		
	},
	{
		input: "azur",
		output: {M: 1},
		
	},
	{
		input: "aède",
		output: {M: 1},
		
	},
	{
		input: "aération",
		output: {F: 1},
		
	},
	{
		input: "aérodrome",
		output: {M: 1},
		
	},
	{
		input: "aérogare",
		output: {F: 1},
		
	},
	{
		input: "aérolithe",
		output: {M: 1},
		
	},
	{
		input: "aéronef",
		output: {M: 1},
		
	},
	{
		input: "aéroplane",
		output: {M: 1},
		
	},
	{
		input: "aéroport",
		output: {M: 1},
		
	},
	{
		input: "aérosol",
		output: {M: 1},
		
	},
	{
		input: "aérostat",
		output: {M: 1},
		
	},
	{
		input: "aîné",
		output: {M: 1},
		
	},
	{
		input: "aînée",
		output: {F: 1},
		
	},
	{
		input: "aïeul",
		output: {M: 1},
		
	},
	{
		input: "aïeule",
		output: {F: 1},
		
	},
	{
		input: "año",
		output: {M: 1},
		
	},
	{
		input: "b",
		output: {F: 1},
		
	},
	{
		input: "b",
		output: {M: 1},
		
	},
	{
		input: "ba",
		output: {F: 1},
		
	},
	{
		input: "ba",
		output: {M: 1},
		
	},
	{
		input: "baba",
		output: {M: 1},
		
	},
	{
		input: "babalawo",
		output: {M: 1},
		
	},
	{
		input: "babil",
		output: {M: 1},
		
	},
	{
		input: "babillage",
		output: {M: 1},
		
	},
	{
		input: "babiole",
		output: {F: 1},
		
	},
	{
		input: "babouin",
		output: {M: 1},
		
	},
	{
		input: "babouvisme",
		output: {M: 1},
		
	},
	{
		input: "baby",
		output: {M: 1},
		
	},
	{
		input: "bac",
		output: {M: 1},
		
	},
	{
		input: "baccalauréat",
		output: {M: 1},
		
	},
	{
		input: "bacchanale",
		output: {F: 1},
		
	},
	{
		input: "bacchante",
		output: {F: 1},
		
	},
	{
		input: "bachagha",
		output: {M: 1},
		
	},
	{
		input: "bachelier",
		output: {M: 1},
		
	},
	{
		input: "bachot",
		output: {M: 1},
		
	},
	{
		input: "bachotage",
		output: {M: 1},
		
	},
	{
		input: "bacille",
		output: {M: 1},
		
	},
	{
		input: "back",
		output: {M: 1},
		
	},
	{
		input: "background",
		output: {M: 1},
		
	},
	{
		input: "bacon",
		output: {M: 1},
		
	},
	{
		input: "bactérie",
		output: {F: 1},
		
	},
	{
		input: "bactériologie",
		output: {F: 1},
		
	},
	{
		input: "bactériophage",
		output: {M: 1},
		
	},
	{
		input: "bactériose",
		output: {F: 1},
		
	},
	{
		input: "bactériurie",
		output: {F: 1},
		
	},
	{
		input: "bactériémie",
		output: {F: 1},
		
	},
	{
		input: "badaud",
		output: {M: 1},
		
	},
	{
		input: "badge",
		output: {M: 1},
		
	},
	{
		input: "badigeon",
		output: {M: 1},
		
	},
	{
		input: "badigeonnage",
		output: {M: 1},
		
	},
	{
		input: "badin",
		output: {M: 1},
		
	},
	{
		input: "badinage",
		output: {M: 1},
		
	},
	{
		input: "carmin",
		output: {M: 1},
		
	},
	{
		input: "carmélite",
		output: {F: 1},
		
	},
	{
		input: "carnage",
		output: {M: 1},
		
	},
	{
		input: "carnassier",
		output: {M: 1},
		
	},
	{
		input: "carnation",
		output: {F: 1},
		
	},
	{
		input: "carnaval",
		output: {M: 1},
		
	},
	{
		input: "carnavalesque",
		output: {M: 1},
		
	},
	{
		input: "carnavalisation",
		output: {F: 1},
		
	},
	{
		input: "carne",
		output: {F: 1},
		
	},
	{
		input: "carnet",
		output: {M: 1},
		
	},
	{
		input: "carnitine",
		output: {F: 1},
		
	},
	{
		input: "carole",
		output: {F: 1},
		
	},
	{
		input: "carosse",
		output: {M: 1},
		
	},
	{
		input: "carotide",
		output: {F: 1},
		
	},
	{
		input: "carottage",
		output: {M: 1},
		
	},
	{
		input: "carotte",
		output: {F: 1},
		
	},
	{
		input: "carottier",
		output: {M: 1},
		
	},
	{
		input: "caroubier",
		output: {M: 1},
		
	},
	{
		input: "carpe",
		output: {F: 1},
		
	},
	{
		input: "carpe",
		output: {M: 1},
		
	},
	{
		input: "carpette",
		output: {F: 1},
		
	},
	{
		input: "carpocapse",
		output: {M: 1},
		
	},
	{
		input: "carquois",
		output: {M: 1},
		
	},
	{
		input: "carreau",
		output: {M: 1},
		
	},
	{
		input: "carrefour",
		output: {M: 1},
		
	},
	{
		input: "carrelage",
		output: {M: 1},
		
	},
	{
		input: "carrera",
		output: {F: 1},
		
	},
	{
		input: "carretera",
		output: {F: 1},
		
	},
	{
		input: "carrier",
		output: {M: 1},
		
	},
	{
		input: "carriere",
		output: {F: 1},
		
	},
	{
		input: "carriole",
		output: {F: 1},
		
	},
	{
		input: "carrière",
		output: {F: 1},
		
	},
	{
		input: "carriérisme",
		output: {M: 1},
		
	},
	{
		input: "carrosse",
		output: {M: 1},
		
	},
	{
		input: "carrosserie",
		output: {F: 1},
		
	},
	{
		input: "carrossier",
		output: {M: 1},
		
	},
	{
		input: "carrousel",
		output: {M: 1},
		
	},
	{
		input: "carroyage",
		output: {M: 1},
		
	},
	{
		input: "carrure",
		output: {F: 1},
		
	},
	{
		input: "carré",
		output: {M: 1},
		
	},
	{
		input: "carrée",
		output: {F: 1},
		
	},
	{
		input: "carta",
		output: {F: 1},
		
	},
	{
		input: "cartable",
		output: {M: 1},
		
	},
	{
		input: "carte",
		output: {F: 1},
		
	},
	{
		input: "carte",
		output: {M: 1},
		
	},
	{
		input: "cartel",
		output: {M: 1},
		
	},
	{
		input: "cartellisation",
		output: {F: 1},
		
	},
	{
		input: "carter",
		output: {M: 1},
		
	},
	{
		input: "cartilage",
		output: {M: 1},
		
	},
	{
		input: "cartographe",
		output: {M: 1},
		
	},
	{
		input: "cartographie",
		output: {F: 1},
		
	},
	{
		input: "cartomancie",
		output: {F: 1},
		
	},
	{
		input: "cartomancienne",
		output: {F: 1},
		
	},
	{
		input: "carton",
		output: {M: 1},
		
	},
	{
		input: "cartonnage",
		output: {M: 1},
		
	},
	{
		input: "cartonnerie",
		output: {F: 1},
		
	},
	{
		input: "cartothèque",
		output: {F: 1},
		
	},
	{
		input: "cartouche",
		output: {F: 1},
		
	},
	{
		input: "cartouche",
		output: {M: 1},
		
	},
	{
		input: "cartoucherie",
		output: {F: 1},
		
	},
	{
		input: "cartouchière",
		output: {F: 1},
		
	},
	{
		input: "cartulaire",
		output: {M: 1},
		
	},
	{
		input: "cartésianisme",
		output: {M: 1},
		
	},
	{
		input: "cartésien",
		output: {M: 1},
		
	},
	{
		input: "caryotype",
		output: {M: 1},
		
	},
	{
		input: "carène",
		output: {F: 1},
		
	},
	{
		input: "carénage",
		output: {M: 1},
		
	},
	{
		input: "carême",
		output: {M: 1},
		
	},
	{
		input: "cas",
		output: {F: 1},
		
	},
	{
		input: "cas",
		output: {M: 1},
		
	},
	{
		input: "casa",
		output: {F: 1},
		
	},
	{
		input: "casal",
		output: {M: 1},
		
	},
	{
		input: "casaque",
		output: {F: 1},
		
	},
	{
		input: "casbah",
		output: {F: 1},
		
	},
	{
		input: "cascade",
		output: {F: 1},
		
	},
	{
		input: "cascadeur",
		output: {M: 1},
		
	},
	{
		input: "case",
		output: {F: 1},
		
	},
	{
		input: "case",
		output: {M: 1},
		
	},
	{
		input: "casemate",
		output: {F: 1},
		
	},
	{
		input: "caserne",
		output: {F: 1},
		
	},
	{
		input: "casernement",
		output: {M: 1},
		
	},
	{
		input: "cash",
		output: {M: 1},
		
	},
	{
		input: "casier",
		output: {M: 1},
		
	},
	{
		input: "casino",
		output: {M: 1},
		
	},
	{
		input: "caso",
		output: {M: 1},
		
	},
	{
		input: "casoar",
		output: {M: 1},
		
	},
	{
		input: "caspase",
		output: {F: 1},
		
	},
	{
		input: "casque",
		output: {M: 1},
		
	},
	{
		input: "casquette",
		output: {F: 1},
		
	},
	{
		input: "cassage",
		output: {M: 1},
		
	},
	{
		input: "cassation",
		output: {F: 1},
		
	},
	{
		input: "cassave",
		output: {F: 1},
		
	},
	{
		input: "casse",
		output: {F: 1},
		
	},
	{
		input: "casse",
		output: {M: 1},
		
	},
	{
		input: "casserole",
		output: {F: 1},
		
	},
	{
		input: "cassette",
		output: {F: 1},
		
	},
	{
		input: "casseur",
		output: {M: 1},
		
	},
	{
		input: "cassis",
		output: {M: 1},
		
	},
	{
		input: "cassitérite",
		output: {F: 1},
		
	},
	{
		input: "cassolette",
		output: {F: 1},
		
	},
	{
		input: "cassonade",
		output: {F: 1},
		
	},
	{
		input: "cassoulet",
		output: {M: 1},
		
	},
	{
		input: "cassure",
		output: {F: 1},
		
	},
	{
		input: "castagne",
		output: {F: 1},
		
	},
	{
		input: "caste",
		output: {F: 1},
		
	},
	{
		input: "castel",
		output: {M: 1},
		
	},
	{
		input: "castelet",
		output: {M: 1},
		
	},
	{
		input: "castellum",
		output: {M: 1},
		
	},
	{
		input: "castillan",
		output: {M: 1},
		
	},
	{
		input: "casting",
		output: {M: 1},
		
	},
	{
		input: "castor",
		output: {M: 1},
		
	},
	{
		input: "castrat",
		output: {M: 1},
		
	},
	{
		input: "castration",
		output: {F: 1},
		
	},
	{
		input: "castrisme",
		output: {M: 1},
		
	},
	{
		input: "castrum",
		output: {M: 1},
		
	},
	{
		input: "casuel",
		output: {M: 1},
		
	},
	{
		input: "casuiste",
		output: {M: 1},
		
	},
	{
		input: "casuistique",
		output: {F: 1},
		
	},
	{
		input: "casus",
		output: {M: 1},
		
	},
	{
		input: "caséine",
		output: {F: 1},
		
	},
	{
		input: "cat",
		output: {M: 1},
		
	},
	{
		input: "catabase",
		output: {F: 1},
		
	},
	{
		input: "catabolisme",
		output: {M: 1},
		
	},
	{
		input: "catachrèse",
		output: {F: 1},
		
	},
	{
		input: "cataclysme",
		output: {M: 1},
		
	},
	{
		input: "catacombe",
		output: {F: 1},
		
	},
	{
		input: "catafalque",
		output: {M: 1},
		
	},
	{
		input: "catalan",
		output: {M: 1},
		
	},
	{
		input: "catalane",
		output: {F: 1},
		
	},
	{
		input: "catalanisme",
		output: {M: 1},
		
	},
	{
		input: "catalase",
		output: {F: 1},
		
	},
	{
		input: "catalepsie",
		output: {F: 1},
		
	},
	{
		input: "catalogage",
		output: {M: 1},
		
	},
	{
		input: "catalogue",
		output: {M: 1},
		
	},
	{
		input: "catalyse",
		output: {F: 1},
		
	},
	{
		input: "catalyseur",
		output: {M: 1},
		
	},
	{
		input: "catamaran",
		output: {M: 1},
		
	},
	{
		input: "cataphore",
		output: {F: 1},
		
	},
	{
		input: "cataplasme",
		output: {M: 1},
		
	},
	{
		input: "catapulte",
		output: {F: 1},
		
	},
	{
		input: "cataracte",
		output: {F: 1},
		
	},
	{
		input: "catarrhe",
		output: {M: 1},
		
	},
	{
		input: "catastrophe",
		output: {F: 1},
		
	},
	{
		input: "catastrophisme",
		output: {M: 1},
		
	},
	{
		input: "catatonie",
		output: {F: 1},
		
	},
	{
		input: "catch",
		output: {M: 1},
		
	},
	{
		input: "catedral",
		output: {F: 1},
		
	},
	{
		input: "categorie",
		output: {F: 1},
		
	},
	{
		input: "categoría",
		output: {F: 1},
		
	},
	{
		input: "catharisme",
		output: {M: 1},
		
	},
	{
		input: "catharsis",
		output: {F: 1},
		
	},
	{
		input: "cathode",
		output: {F: 1},
		
	},
	{
		input: "catholicisme",
		output: {M: 1},
		
	},
	{
		input: "catholicité",
		output: {F: 1},
		
	},
	{
		input: "catholicos",
		output: {M: 1},
		
	},
	{
		input: "catholique",
		output: {F: 1},
		
	},
	{
		input: "catholique",
		output: {M: 1},
		
	},
	{
		input: "cathèdre",
		output: {F: 1},
		
	},
	{
		input: "cathédrale",
		output: {F: 1},
		
	},
	{
		input: "cathéter",
		output: {M: 1},
		
	},
	{
		input: "cathétérisme",
		output: {M: 1},
		
	},
	{
		input: "catin",
		output: {F: 1},
		
	},
	{
		input: "cation",
		output: {M: 1},
		
	},
	{
		input: "catoptrique",
		output: {F: 1},
		
	},
	{
		input: "caté",
		output: {F: 1},
		
	},
	{
		input: "catéchisation",
		output: {F: 1},
		
	},
	{
		input: "catéchisme",
		output: {M: 1},
		
	},
	{
		input: "catéchiste",
		output: {M: 1},
		
	},
	{
		input: "catéchumène",
		output: {M: 1},
		
	},
	{
		input: "catéchuménat",
		output: {M: 1},
		
	},
	{
		input: "catéchèse",
		output: {F: 1},
		
	},
	{
		input: "catéchète",
		output: {M: 1},
		
	},
	{
		input: "catégorie",
		output: {F: 1},
		
	},
	{
		input: "catégories",
		output: {F: 1},
		
	},
	{
		input: "catégorisation",
		output: {F: 1},
		
	},
	{
		input: "caténaire",
		output: {F: 1},
		
	},
	{
		input: "cauchemar",
		output: {M: 1},
		
	},
	{
		input: "cauchois",
		output: {M: 1},
		
	},
	{
		input: "caucus",
		output: {M: 1},
		
	},
	{
		input: "caudale",
		output: {F: 1},
		
	},
	{
		input: "caudillisme",
		output: {M: 1},
		
	},
	{
		input: "caudillo",
		output: {M: 1},
		
	},
	{
		input: "cauri",
		output: {M: 1},
		
	},
	{
		input: "cauris",
		output: {M: 1},
		
	},
	{
		input: "causa",
		output: {F: 1},
		
	},
	{
		input: "causalisme",
		output: {M: 1},
		
	},
	{
		input: "causalité",
		output: {F: 1},
		
	},
	{
		input: "causatif",
		output: {M: 1},
		
	},
	{
		input: "causation",
		output: {F: 1},
		
	},
	{
		input: "cause",
		output: {F: 1},
		
	},
	{
		input: "cause",
		output: {M: 1},
		
	},
	{
		input: "causerie",
		output: {F: 1},
		
	},
	{
		input: "causette",
		output: {F: 1},
		
	},
	{
		input: "causeur",
		output: {M: 1},
		
	},
	{
		input: "causeuse",
		output: {F: 1},
		
	},
	{
		input: "causse",
		output: {M: 1},
		
	},
	{
		input: "causticité",
		output: {F: 1},
		
	},
	{
		input: "caution",
		output: {F: 1},
		
	},
	{
		input: "cautionnement",
		output: {M: 1},
		
	},
	{
		input: "cautère",
		output: {M: 1},
		
	},
	{
		input: "cautérisation",
		output: {F: 1},
		
	},
	{
		input: "cavalcade",
		output: {F: 1},
		
	},
	{
		input: "cavale",
		output: {F: 1},
		
	},
	{
		input: "cavalerie",
		output: {F: 1},
		
	},
	{
		input: "cavalier",
		output: {M: 1},
		
	},
	{
		input: "cavalière",
		output: {F: 1},
		
	},
	{
		input: "cavatine",
		output: {F: 1},
		
	},
	{
		input: "cave",
		output: {F: 1},
		
	},
	{
		input: "cave",
		output: {M: 1},
		
	},
	{
		input: "cavea",
		output: {F: 1},
		
	},
	{
		input: "caveau",
		output: {M: 1},
		
	},
	{
		input: "caverne",
		output: {F: 1},
		
	},
	{
		input: "cavet",
		output: {M: 1},
		
	},
	{
		input: "caviar",
		output: {M: 1},
		
	},
	{
		input: "cavitation",
		output: {F: 1},
		
	},
	{
		input: "cavité",
		output: {F: 1},
		
	},
	{
		input: "caye",
		output: {F: 1},
		
	},
	{
		input: "caza",
		output: {F: 1},
		
	},
	{
		input: "caza",
		output: {M: 1},
		
	},
	{
		input: "caída",
		output: {F: 1},
		
	},
	{
		input: "caïd",
		output: {M: 1},
		
	},
	{
		input: "caïdat",
		output: {M: 1},
		
	},
	{
		input: "caïman",
		output: {M: 1},
		
	},
	{
		input: "cc",
		output: {M: 1},
		
	},
	{
		input: "cceur",
		output: {M: 1},
		
	},
	{
		input: "cd",
		output: {M: 1},
		
	},
	{
		input: "cdu",
		output: {F: 1},
		
	},
	{
		input: "ceca",
		output: {F: 1},
		
	},
	{
		input: "ced",
		output: {F: 1},
		
	},
	{
		input: "cedh",
		output: {F: 1},
		
	},
	{
		input: "cee",
		output: {F: 1},
		
	},
	{
		input: "cei",
		output: {F: 1},
		
	},
	{
		input: "ceinture",
		output: {F: 1},
		
	},
	{
		input: "ceinturon",
		output: {M: 1},
		
	},
	{
		input: "celebración",
		output: {F: 1},
		
	},
	{
		input: "cella",
		output: {F: 1},
		
	},
	{
		input: "cellier",
		output: {M: 1},
		
	},
	{
		input: "cellophane",
		output: {F: 1},
		
	},
	{
		input: "cellulaire",
		output: {M: 1},
		
	},
	{
		input: "cellule",
		output: {F: 1},
		
	},
	{
		input: "cellulite",
		output: {F: 1},
		
	},
	{
		input: "cellulose",
		output: {F: 1},
		
	},
	{
		input: "celluloïd",
		output: {M: 1},
		
	},
	{
		input: "cellérier",
		output: {M: 1},
		
	},
	{
		input: "celtique",
		output: {M: 1},
		
	},
	{
		input: "celtisme",
		output: {M: 1},
		
	},
	{
		input: "cena",
		output: {F: 1},
		
	},
	{
		input: "cendre",
		output: {F: 1},
		
	},
	{
		input: "cendrier",
		output: {M: 1},
		
	},
	{
		input: "cendrée",
		output: {F: 1},
		
	},
	{
		input: "cenne",
		output: {F: 1},
		
	},
	{
		input: "cens",
		output: {M: 1},
		
	},
	{
		input: "cense",
		output: {F: 1},
		
	},
	{
		input: "censeur",
		output: {M: 1},
		
	},
	{
		input: "censier",
		output: {M: 1},
		
	},
	{
		input: "censitaire",
		output: {M: 1},
		
	},
	{
		input: "censive",
		output: {F: 1},
		
	},
	{
		input: "censura",
		output: {F: 1},
		
	},
	{
		input: "censure",
		output: {F: 1},
		
	},
	{
		input: "cent",
		output: {F: 1},
		
	},
	{
		input: "cent",
		output: {M: 1},
		
	},
	{
		input: "centaine",
		output: {F: 1},
		
	},
	{
		input: "centaure",
		output: {M: 1},
		
	},
	{
		input: "centenaire",
		output: {F: 1},
		
	},
	{
		input: "centenaire",
		output: {M: 1},
		
	},
	{
		input: "centime",
		output: {M: 1},
		
	},
	{
		input: "centimètre",
		output: {M: 1},
		
	},
	{
		input: "centième",
		output: {F: 1},
		
	},
	{
		input: "centième",
		output: {M: 1},
		
	},
	{
		input: "centon",
		output: {M: 1},
		
	},
	{
		input: "centrage",
		output: {M: 1},
		
	},
	{
		input: "centrale",
		output: {F: 1},
		
	},
	{
		input: "centralisation",
		output: {F: 1},
		
	},
	{
		input: "centralisme",
		output: {M: 1},
		
	},
	{
		input: "centralité",
		output: {F: 1},
		
	},
	{
		input: "centrante",
		output: {F: 1},
		
	},
	{
		input: "centranté",
		output: {F: 1},
		
	},
	{
		input: "centration",
		output: {F: 1},
		
	},
	{
		input: "centre",
		output: {F: 1},
		
	},
	{
		input: "centre",
		output: {M: 1},
		
	},
	{
		input: "centreville",
		output: {M: 1},
		
	},
	{
		input: "centrifugation",
		output: {F: 1},
		
	},
	{
		input: "centrifugeuse",
		output: {F: 1},
		
	},
	{
		input: "centrisme",
		output: {M: 1},
		
	},
	{
		input: "centriste",
		output: {M: 1},
		
	},
	{
		input: "centromère",
		output: {M: 1},
		
	},
	{
		input: "centuple",
		output: {M: 1},
		
	},
	{
		input: "centuriation",
		output: {F: 1},
		
	},
	{
		input: "centurie",
		output: {F: 1},
		
	},
	{
		input: "centurion",
		output: {M: 1},
		
	},
	{
		input: "cep",
		output: {M: 1},
		
	},
	{
		input: "cer",
		output: {F: 1},
		
	},
	{
		input: "cer",
		output: {M: 1},
		
	},
	{
		input: "ceramica",
		output: {F: 1},
		
	},
	{
		input: "cerbère",
		output: {M: 1},
		
	},
	{
		input: "cerceau",
		output: {M: 1},
		
	},
	{
		input: "cerclage",
		output: {M: 1},
		
	},
	{
		input: "cercle",
		output: {M: 1},
		
	},
	{
		input: "cercosporiose",
		output: {F: 1},
		
	},
	{
		input: "cercueil",
		output: {M: 1},
		
	},
	{
		input: "cerf",
		output: {M: 1},
		
	},
	{
		input: "cerfeuil",
		output: {M: 1},
		
	},
	{
		input: "cerisaie",
		output: {F: 1},
		
	},
	{
		input: "cerise",
		output: {F: 1},
		
	},
	{
		input: "cerisier",
		output: {M: 1},
		
	},
	{
		input: "cerne",
		output: {M: 1},
		
	},
	{
		input: "certificat",
		output: {M: 1},
		
	},
	{
		input: "certificateur",
		output: {M: 1},
		
	},
	{
		input: "certification",
		output: {F: 1},
		
	},
	{
		input: "certitude",
		output: {F: 1},
		
	},
	{
		input: "cerveau",
		output: {M: 1},
		
	},
	{
		input: "cervelet",
		output: {M: 1},
		
	},
	{
		input: "cervelle",
		output: {F: 1},
		
	},
	{
		input: "cervicalgie",
		output: {F: 1},
		
	},
	{
		input: "cervidé",
		output: {M: 1},
		
	},
	{
		input: "cervoise",
		output: {F: 1},
		
	},
	{
		input: "ces",
		output: {F: 1},
		
	},
	{
		input: "ces",
		output: {M: 1},
		
	},
	{
		input: "cessation",
		output: {F: 1},
		
	},
	{
		input: "cessez",
		output: {M: 1},
		
	},
	{
		input: "cessezle",
		output: {M: 1},
		
	},
	{
		input: "cessibilité",
		output: {F: 1},
		
	},
	{
		input: "cession",
		output: {F: 1},
		
	},
	{
		input: "cessionnaire",
		output: {M: 1},
		
	},
	{
		input: "ceuvre",
		output: {F: 1},
		
	},
	{
		input: "cfdt",
		output: {F: 1},
		
	},
	{
		input: "cftc",
		output: {F: 1},
		
	},
	{
		input: "cgt",
		output: {F: 1},
		
	},
	{
		input: "ch",
		output: {F: 1},
		
	},
	{
		input: "ch",
		output: {M: 1},
		
	},
	{
		input: "cha",
		output: {F: 1},
		
	},
	{
		input: "cha",
		output: {M: 1},
		
	},
	{
		input: "chabbat",
		output: {M: 1},
		
	},
	{
		input: "chablis",
		output: {M: 1},
		
	},
	{
		input: "chacal",
		output: {M: 1},
		
	},
	{
		input: "chaconne",
		output: {F: 1},
		
	},
	{
		input: "chafne",
		output: {F: 1},
		
	},
	{
		input: "chagrin",
		output: {M: 1},
		
	},
	{
		input: "chah",
		output: {M: 1},
		
	},
	{
		input: "chahada",
		output: {F: 1},
		
	},
	{
		input: "chahut",
		output: {M: 1},
		
	},
	{
		input: "chai",
		output: {M: 1},
		
	},
	{
		input: "chaine",
		output: {F: 1},
		
	},
	{
		input: "chair",
		output: {F: 1},
		
	},
	{
		input: "chaire",
		output: {F: 1},
		
	},
	{
		input: "chairman",
		output: {M: 1},
		
	},
	{
		input: "chaise",
		output: {F: 1},
		
	},
	{
		input: "chakra",
		output: {M: 1},
		
	},
	{
		input: "chaland",
		output: {M: 1},
		
	},
	{
		input: "chalcopyrite",
		output: {F: 1},
		
	},
	{
		input: "chalet",
		output: {M: 1},
		
	},
	{
		input: "chaleur",
		output: {F: 1},
		
	},
	{
		input: "challenge",
		output: {M: 1},
		
	},
	{
		input: "challenger",
		output: {M: 1},
		
	},
	{
		input: "chaloupe",
		output: {F: 1},
		
	},
	{
		input: "chalumeau",
		output: {M: 1},
		
	},
	{
		input: "chalut",
		output: {M: 1},
		
	},
	{
		input: "chalutage",
		output: {M: 1},
		
	},
	{
		input: "chalutier",
		output: {M: 1},
		
	},
	{
		input: "chamade",
		output: {F: 1},
		
	},
	{
		input: "chaman",
		output: {M: 1},
		
	},
	{
		input: "chamane",
		output: {F: 1},
		
	},
	{
		input: "chamane",
		output: {M: 1},
		
	},
	{
		input: "chamanisme",
		output: {M: 1},
		
	},
	{
		input: "chambardement",
		output: {M: 1},
		
	},
	{
		input: "chambellan",
		output: {M: 1},
		
	},
	{
		input: "chamboulement",
		output: {M: 1},
		
	},
	{
		input: "chambranle",
		output: {M: 1},
		
	},
	{
		input: "chambre",
		output: {F: 1},
		
	},
	{
		input: "chambrette",
		output: {F: 1},
		
	},
	{
		input: "chambrière",
		output: {F: 1},
		
	},
	{
		input: "chambrée",
		output: {F: 1},
		
	},
	{
		input: "chameau",
		output: {M: 1},
		
	},
	{
		input: "chamelier",
		output: {M: 1},
		
	},
	{
		input: "chamelle",
		output: {F: 1},
		
	},
	{
		input: "chamois",
		output: {M: 1},
		
	},
	{
		input: "chamotte",
		output: {F: 1},
		
	},
	{
		input: "champ",
		output: {F: 1},
		
	},
	{
		input: "champ",
		output: {M: 1},
		
	},
	{
		input: "champagne",
		output: {M: 1},
		
	},
	{
		input: "champart",
		output: {M: 1},
		
	},
	{
		input: "champignon",
		output: {M: 1},
		
	},
	{
		input: "champion",
		output: {M: 1},
		
	},
	{
		input: "championnat",
		output: {M: 1},
		
	},
	{
		input: "championne",
		output: {F: 1},
		
	},
	{
		input: "champs",
		output: {M: 1},
		
	},
	{
		input: "chan",
		output: {M: 1},
		
	},
	{
		input: "chance",
		output: {F: 1},
		
	},
	{
		input: "chancel",
		output: {M: 1},
		
	},
	{
		input: "chancelier",
		output: {M: 1},
		
	},
	{
		input: "chancelière",
		output: {F: 1},
		
	},
	{
		input: "chancellerie",
		output: {F: 1},
		
	},
	{
		input: "chancre",
		output: {M: 1},
		
	},
	{
		input: "chandail",
		output: {M: 1},
		
	},
	{
		input: "chandelier",
		output: {M: 1},
		
	},
	{
		input: "chandelle",
		output: {F: 1},
		
	},
	{
		input: "chanfrein",
		output: {M: 1},
		
	},
	{
		input: "change",
		output: {F: 1},
		
	},
	{
		input: "change",
		output: {M: 1},
		
	},
	{
		input: "changeant",
		output: {M: 1},
		
	},
	{
		input: "changement",
		output: {M: 1},
		
	},
	{
		input: "changeur",
		output: {M: 1},
		
	},
	{
		input: "chanoine",
		output: {M: 1},
		
	},
	{
		input: "chanoinesse",
		output: {F: 1},
		
	},
	{
		input: "chanson",
		output: {F: 1},
		
	},
	{
		input: "chansonnette",
		output: {F: 1},
		
	},
	{
		input: "chansonnier",
		output: {M: 1},
		
	},
	{
		input: "chant",
		output: {M: 1},
		
	},
	{
		input: "chantage",
		output: {M: 1},
		
	},
	{
		input: "chante",
		output: {F: 1},
		
	},
	{
		input: "chante",
		output: {M: 1},
		
	},
	{
		input: "chantefable",
		output: {F: 1},
		
	},
	{
		input: "chanterelle",
		output: {F: 1},
		
	},
	{
		input: "chanteur",
		output: {M: 1},
		
	},
	{
		input: "chanteuse",
		output: {F: 1},
		
	},
	{
		input: "chantier",
		output: {M: 1},
		
	},
	{
		input: "chantre",
		output: {M: 1},
		
	},
	{
		input: "chanté",
		output: {F: 1},
		
	},
	{
		input: "chanvre",
		output: {M: 1},
		
	},
	{
		input: "chaos",
		output: {M: 1},
		
	},
	{
		input: "chaouch",
		output: {M: 1},
		
	},
	{
		input: "chap",
		output: {M: 1},
		
	},
	{
		input: "chapardage",
		output: {M: 1},
		
	},
	{
		input: "chape",
		output: {F: 1},
		
	},
	{
		input: "chapeau",
		output: {M: 1},
		
	},
	{
		input: "chapelain",
		output: {M: 1},
		
	},
	{
		input: "chapelet",
		output: {M: 1},
		
	},
	{
		input: "chapelier",
		output: {M: 1},
		
	},
	{
		input: "chapelle",
		output: {F: 1},
		
	},
	{
		input: "chapellenie",
		output: {F: 1},
		
	},
	{
		input: "chapellerie",
		output: {F: 1},
		
	},
	{
		input: "chapelure",
		output: {F: 1},
		
	},
	{
		input: "chaperon",
		output: {M: 1},
		
	},
	{
		input: "chapiteau",
		output: {M: 1},
		
	},
	{
		input: "chapitre",
		output: {F: 1},
		
	},
	{
		input: "chapitre",
		output: {M: 1},
		
	},
	{
		input: "chapitres",
		output: {M: 1},
		
	},
	{
		input: "chapka",
		output: {F: 1},
		
	},
	{
		input: "chapon",
		output: {M: 1},
		
	},
	{
		input: "chappe",
		output: {F: 1},
		
	},
	{
		input: "chappelle",
		output: {F: 1},
		
	},
	{
		input: "chaptalisation",
		output: {F: 1},
		
	},
	{
		input: "char",
		output: {F: 1},
		
	},
	{
		input: "char",
		output: {M: 1},
		
	},
	{
		input: "charabia",
		output: {M: 1},
		
	},
	{
		input: "charade",
		output: {F: 1},
		
	},
	{
		input: "charançon",
		output: {M: 1},
		
	},
	{
		input: "charbon",
		output: {M: 1},
		
	},
	{
		input: "charbonnage",
		output: {M: 1},
		
	},
	{
		input: "charbonnerie",
		output: {F: 1},
		
	},
	{
		input: "charbonnier",
		output: {M: 1},
		
	},
	{
		input: "charbonnière",
		output: {F: 1},
		
	},
	{
		input: "charcuterie",
		output: {F: 1},
		
	},
	{
		input: "charcutier",
		output: {M: 1},
		
	},
	{
		input: "chardon",
		output: {M: 1},
		
	},
	{
		input: "chardonneret",
		output: {M: 1},
		
	},
	{
		input: "charette",
		output: {F: 1},
		
	},
	{
		input: "charge",
		output: {F: 1},
		
	},
	{
		input: "charge",
		output: {M: 1},
		
	},
	{
		input: "chargea",
		output: {M: 1},
		
	},
	{
		input: "chargeant",
		output: {M: 1},
		
	},
	{
		input: "chargement",
		output: {M: 1},
		
	},
	{
		input: "chargeur",
		output: {M: 1},
		
	},
	{
		input: "charia",
		output: {F: 1},
		
	},
	{
		input: "chariot",
		output: {M: 1},
		
	},
	{
		input: "charis",
		output: {F: 1},
		
	},
	{
		input: "charisme",
		output: {M: 1},
		
	},
	{
		input: "charité",
		output: {F: 1},
		
	},
	{
		input: "charivari",
		output: {M: 1},
		
	},
	{
		input: "charlatan",
		output: {M: 1},
		
	},
	{
		input: "charlatanerie",
		output: {F: 1},
		
	},
	{
		input: "charlatanisme",
		output: {M: 1},
		
	},
	{
		input: "charleston",
		output: {M: 1},
		
	},
	{
		input: "charlotte",
		output: {F: 1},
		
	},
	{
		input: "charmant",
		output: {M: 1},
		
	},
	{
		input: "charmante",
		output: {F: 1},
		
	},
	{
		input: "charme",
		output: {F: 1},
		
	},
	{
		input: "charme",
		output: {M: 1},
		
	},
	{
		input: "charmeur",
		output: {M: 1},
		
	},
	{
		input: "charmille",
		output: {F: 1},
		
	},
	{
		input: "charnel",
		output: {M: 1},
		
	},
	{
		input: "charnier",
		output: {M: 1},
		
	},
	{
		input: "charnière",
		output: {F: 1},
		
	},
	{
		input: "charognard",
		output: {M: 1},
		
	},
	{
		input: "charogne",
		output: {F: 1},
		
	},
	{
		input: "charpente",
		output: {F: 1},
		
	},
	{
		input: "charpenterie",
		output: {F: 1},
		
	},
	{
		input: "charpentier",
		output: {M: 1},
		
	},
	{
		input: "charpie",
		output: {F: 1},
		
	},
	{
		input: "charretier",
		output: {M: 1},
		
	},
	{
		input: "charreton",
		output: {M: 1},
		
	},
	{
		input: "charrette",
		output: {F: 1},
		
	},
	{
		input: "charretée",
		output: {F: 1},
		
	},
	{
		input: "charriage",
		output: {M: 1},
		
	},
	{
		input: "charroi",
		output: {M: 1},
		
	},
	{
		input: "charron",
		output: {M: 1},
		
	},
	{
		input: "charrue",
		output: {F: 1},
		
	},
	{
		input: "charte",
		output: {F: 1},
		
	},
	{
		input: "charter",
		output: {M: 1},
		
	},
	{
		input: "chartisme",
		output: {M: 1},
		
	},
	{
		input: "chartiste",
		output: {M: 1},
		
	},
	{
		input: "chartre",
		output: {F: 1},
		
	},
	{
		input: "chartreuse",
		output: {F: 1},
		
	},
	{
		input: "chartreux",
		output: {M: 1},
		
	},
	{
		input: "chartrier",
		output: {M: 1},
		
	},
	{
		input: "chas",
		output: {M: 1},
		
	},
	{
		input: "chascun",
		output: {M: 1},
		
	},
	{
		input: "chassa",
		output: {M: 1},
		
	},
	{
		input: "chasse",
		output: {F: 1},
		
	},
	{
		input: "chasse",
		output: {M: 1},
		
	},
	{
		input: "chasseresse",
		output: {F: 1},
		
	},
	{
		input: "chasseur",
		output: {M: 1},
		
	},
	{
		input: "chassis",
		output: {M: 1},
		
	},
	{
		input: "chassé",
		output: {M: 1},
		
	},
	{
		input: "chaste",
		output: {F: 1},
		
	},
	{
		input: "chaste",
		output: {M: 1},
		
	},
	{
		input: "chasteau",
		output: {M: 1},
		
	},
	{
		input: "chastel",
		output: {M: 1},
		
	},
	{
		input: "chasteté",
		output: {F: 1},
		
	},
	{
		input: "chasuble",
		output: {F: 1},
		
	},
	{
		input: "chat",
		output: {M: 1},
		
	},
	{
		input: "chateau",
		output: {M: 1},
		
	},
	{
		input: "chatière",
		output: {F: 1},
		
	},
	{
		input: "chatoiement",
		output: {M: 1},
		
	},
	{
		input: "chaton",
		output: {M: 1},
		
	},
	{
		input: "chatouillement",
		output: {M: 1},
		
	},
	{
		input: "chatte",
		output: {F: 1},
		
	},
	{
		input: "chaud",
		output: {M: 1},
		
	},
	{
		input: "chaude",
		output: {F: 1},
		
	},
	{
		input: "chaudière",
		output: {F: 1},
		
	},
	{
		input: "chaudron",
		output: {M: 1},
		
	},
	{
		input: "chaudronnerie",
		output: {F: 1},
		
	},
	{
		input: "chaudronnier",
		output: {M: 1},
		
	},
	{
		input: "chauffage",
		output: {M: 1},
		
	},
	{
		input: "chauffard",
		output: {M: 1},
		
	},
	{
		input: "chauffe",
		output: {F: 1},
		
	},
	{
		input: "chauffe",
		output: {M: 1},
		
	},
	{
		input: "chaufferette",
		output: {F: 1},
		
	},
	{
		input: "chaufferie",
		output: {F: 1},
		
	},
	{
		input: "chauffeur",
		output: {M: 1},
		
	},
	{
		input: "chauffoir",
		output: {M: 1},
		
	},
	{
		input: "chaulage",
		output: {M: 1},
		
	},
	{
		input: "chaume",
		output: {M: 1},
		
	},
	{
		input: "chaumière",
		output: {F: 1},
		
	},
	{
		input: "chaussage",
		output: {M: 1},
		
	},
	{
		input: "chausse",
		output: {F: 1},
		
	},
	{
		input: "chaussette",
		output: {F: 1},
		
	},
	{
		input: "chausson",
		output: {M: 1},
		
	},
	{
		input: "chaussure",
		output: {F: 1},
		
	},
	{
		input: "chaussée",
		output: {F: 1},
		
	},
	{
		input: "chauve",
		output: {F: 1},
		
	},
	{
		input: "chauve",
		output: {M: 1},
		
	},
	{
		input: "chauvesouris",
		output: {F: 1},
		
	},
	{
		input: "chauvinisme",
		output: {M: 1},
		
	},
	{
		input: "chaux",
		output: {F: 1},
		
	},
	{
		input: "chavirement",
		output: {M: 1},
		
	},
	{
		input: "chaykh",
		output: {M: 1},
		
	},
	{
		input: "chaînage",
		output: {M: 1},
		
	},
	{
		input: "chaîne",
		output: {F: 1},
		
	},
	{
		input: "chaînette",
		output: {F: 1},
		
	},
	{
		input: "chaînon",
		output: {M: 1},
		
	},
	{
		input: "che",
		output: {F: 1},
		
	},
	{
		input: "che",
		output: {M: 1},
		
	},
	{
		input: "check",
		output: {F: 1},
		
	},
	{
		input: "check",
		output: {M: 1},
		
	},
	{
		input: "chef",
		output: {F: 1},
		
	},
	{
		input: "chef",
		output: {M: 1},
		
	},
	{
		input: "chefferie",
		output: {F: 1},
		
	},
	{
		input: "cheflieu",
		output: {M: 1},
		
	},
	{
		input: "cheftaine",
		output: {F: 1},
		
	},
	{
		input: "cheik",
		output: {M: 1},
		
	},
	{
		input: "cheikh",
		output: {M: 1},
		
	},
	{
		input: "chemin",
		output: {M: 1},
		
	},
	{
		input: "chemineau",
		output: {M: 1},
		
	},
	{
		input: "cheminement",
		output: {M: 1},
		
	},
	{
		input: "cheminot",
		output: {M: 1},
		
	},
	{
		input: "cheminée",
		output: {F: 1},
		
	},
	{
		input: "chemise",
		output: {F: 1},
		
	},
	{
		input: "chemiserie",
		output: {F: 1},
		
	},
	{
		input: "chemisette",
		output: {F: 1},
		
	},
	{
		input: "chemisier",
		output: {M: 1},
		
	},
	{
		input: "chenal",
		output: {M: 1},
		
	},
	{
		input: "chenapan",
		output: {M: 1},
		
	},
	{
		input: "chenil",
		output: {M: 1},
		
	},
	{
		input: "chenille",
		output: {F: 1},
		
	},
	{
		input: "chenillette",
		output: {F: 1},
		
	},
	{
		input: "cheptel",
		output: {M: 1},
		
	},
	{
		input: "chercheur",
		output: {M: 1},
		
	},
	{
		input: "chercheure",
		output: {F: 1},
		
	},
	{
		input: "chercheuse",
		output: {F: 1},
		
	},
	{
		input: "cherté",
		output: {F: 1},
		
	},
	{
		input: "cheval",
		output: {M: 1},
		
	},
	{
		input: "chevalement",
		output: {M: 1},
		
	},
	{
		input: "chevalerie",
		output: {F: 1},
		
	},
	{
		input: "chevalet",
		output: {M: 1},
		
	},
	{
		input: "chevalier",
		output: {M: 1},
		
	},
	{
		input: "chevalière",
		output: {F: 1},
		
	},
	{
		input: "chevauchement",
		output: {M: 1},
		
	},
	{
		input: "chevauchée",
		output: {F: 1},
		
	},
	{
		input: "chevelu",
		output: {M: 1},
		
	},
	{
		input: "chevelure",
		output: {F: 1},
		
	},
	{
		input: "chevet",
		output: {M: 1},
		
	},
	{
		input: "cheveu",
		output: {M: 1},
		
	},
	{
		input: "cheville",
		output: {F: 1},
		
	},
	{
		input: "chevillette",
		output: {F: 1},
		
	},
	{
		input: "chevreau",
		output: {M: 1},
		
	},
	{
		input: "chevrette",
		output: {F: 1},
		
	},
	{
		input: "chevreuil",
		output: {M: 1},
		
	},
	{
		input: "chevrier",
		output: {M: 1},
		
	},
	{
		input: "chevron",
		output: {M: 1},
		
	},
	{
		input: "chewing",
		output: {M: 1},
		
	},
	{
		input: "chiac",
		output: {M: 1},
		
	},
	{
		input: "chiasma",
		output: {M: 1},
		
	},
	{
		input: "chiasme",
		output: {M: 1},
		
	},
	{
		input: "chiasse",
		output: {F: 1},
		
	},
	{
		input: "chiave",
		output: {F: 1},
		
	},
	{
		input: "chic",
		output: {M: 1},
		
	},
	{
		input: "chicane",
		output: {F: 1},
		
	},
	{
		input: "chicha",
		output: {F: 1},
		
	},
	{
		input: "chicorée",
		output: {F: 1},
		
	},
	{
		input: "chicot",
		output: {M: 1},
		
	},
	{
		input: "chicote",
		output: {F: 1},
		
	},
	{
		input: "chicotte",
		output: {F: 1},
		
	},
	{
		input: "chief",
		output: {M: 1},
		
	},
	{
		input: "chien",
		output: {M: 1},
		
	},
	{
		input: "chiendent",
		output: {M: 1},
		
	},
	{
		input: "chienlit",
		output: {F: 1},
		
	},
	{
		input: "chienne",
		output: {F: 1},
		
	},
	{
		input: "chiennerie",
		output: {F: 1},
		
	},
	{
		input: "chiesa",
		output: {F: 1},
		
	},
	{
		input: "chiese",
		output: {M: 1},
		
	},
	{
		input: "chiffe",
		output: {F: 1},
		
	},
	{
		input: "chiffon",
		output: {M: 1},
		
	},
	{
		input: "chiffonnier",
		output: {M: 1},
		
	},
	{
		input: "chiffrage",
		output: {M: 1},
		
	},
	{
		input: "chiffre",
		output: {M: 1},
		
	},
	{
		input: "chiffrement",
		output: {M: 1},
		
	},
	{
		input: "chignon",
		output: {M: 1},
		
	},
	{
		input: "chiisme",
		output: {M: 1},
		
	},
	{
		input: "chiite",
		output: {M: 1},
		
	},
	{
		input: "chimie",
		output: {F: 1},
		
	},
	{
		input: "chimio",
		output: {F: 1},
		
	},
	{
		input: "chimioprophylaxie",
		output: {F: 1},
		
	},
	{
		input: "chimiothérapie",
		output: {F: 1},
		
	},
	{
		input: "chimique",
		output: {M: 1},
		
	},
	{
		input: "chimisme",
		output: {M: 1},
		
	},
	{
		input: "chimisorption",
		output: {F: 1},
		
	},
	{
		input: "chimiste",
		output: {M: 1},
		
	},
	{
		input: "chimpanzé",
		output: {M: 1},
		
	},
	{
		input: "chimère",
		output: {F: 1},
		
	},
	{
		input: "chinchard",
		output: {M: 1},
		
	},
	{
		input: "chine",
		output: {F: 1},
		
	},
	{
		input: "chinois",
		output: {M: 1},
		
	},
	{
		input: "chinoiserie",
		output: {F: 1},
		
	},
	{
		input: "chiot",
		output: {M: 1},
		
	},
	{
		input: "chiourme",
		output: {F: 1},
		
	},
	{
		input: "chique",
		output: {F: 1},
		
	},
	{
		input: "chiquenaude",
		output: {F: 1},
		
	},
	{
		input: "chiralité",
		output: {F: 1},
		
	},
	{
		input: "chiromancie",
		output: {F: 1},
		
	},
	{
		input: "chirurgie",
		output: {F: 1},
		
	},
	{
		input: "chirurgien",
		output: {M: 1},
		
	},
	{
		input: "chitine",
		output: {F: 1},
		
	},
	{
		input: "chiton",
		output: {M: 1},
		
	},
	{
		input: "chitosane",
		output: {M: 1},
		
	},
	{
		input: "chlamyde",
		output: {F: 1},
		
	},
	{
		input: "chloramphénicol",
		output: {M: 1},
		
	},
	{
		input: "chloration",
		output: {F: 1},
		
	},
	{
		input: "chlore",
		output: {M: 1},
		
	},
	{
		input: "chlorhexidine",
		output: {F: 1},
		
	},
	{
		input: "chlorhydrate",
		output: {M: 1},
		
	},
	{
		input: "chlorite",
		output: {F: 1},
		
	},
	{
		input: "chloroforme",
		output: {M: 1},
		
	},
	{
		input: "chlorophylle",
		output: {F: 1},
		
	},
	{
		input: "chloroplaste",
		output: {M: 1},
		
	},
	{
		input: "chloroquine",
		output: {F: 1},
		
	},
	{
		input: "chlorose",
		output: {F: 1},
		
	},
	{
		input: "chlorpromazine",
		output: {F: 1},
		
	},
	{
		input: "chlorure",
		output: {M: 1},
		
	},
	{
		input: "choc",
		output: {M: 1},
		
	},
	{
		input: "chocolat",
		output: {M: 1},
		
	},
	{
		input: "chocolaterie",
		output: {F: 1},
		
	},
	{
		input: "chocolatier",
		output: {M: 1},
		
	},
	{
		input: "choeur",
		output: {M: 1},
		
	},
	{
		input: "chois",
		output: {M: 1},
		
	},
	{
		input: "choix",
		output: {F: 1},
		
	},
	{
		input: "choix",
		output: {M: 1},
		
	},
	{
		input: "cholestase",
		output: {F: 1},
		
	},
	{
		input: "cholestérol",
		output: {M: 1},
		
	},
	{
		input: "cholestérolémie",
		output: {F: 1},
		
	},
	{
		input: "choline",
		output: {F: 1},
		
	},
	{
		input: "cholinestérase",
		output: {F: 1},
		
	},
	{
		input: "cholécystectomie",
		output: {F: 1},
		
	},
	{
		input: "cholécystite",
		output: {F: 1},
		
	},
	{
		input: "choléra",
		output: {M: 1},
		
	},
	{
		input: "chomage",
		output: {M: 1},
		
	},
	{
		input: "chondrocalcinose",
		output: {F: 1},
		
	},
	{
		input: "chope",
		output: {F: 1},
		
	},
	{
		input: "chopine",
		output: {F: 1},
		
	},
	{
		input: "choque",
		output: {M: 1},
		
	},
	{
		input: "chora",
		output: {F: 1},
		
	},
	{
		input: "choral",
		output: {M: 1},
		
	},
	{
		input: "chorale",
		output: {F: 1},
		
	},
	{
		input: "chorde",
		output: {F: 1},
		
	},
	{
		input: "chorion",
		output: {M: 1},
		
	},
	{
		input: "chorographie",
		output: {F: 1},
		
	},
	{
		input: "choroïde",
		output: {F: 1},
		
	},
	{
		input: "chorus",
		output: {M: 1},
		
	},
	{
		input: "chorée",
		output: {F: 1},
		
	},
	{
		input: "chorégraphe",
		output: {F: 1},
		
	},
	{
		input: "chorégraphe",
		output: {M: 1},
		
	},
	{
		input: "chorégraphie",
		output: {F: 1},
		
	},
	{
		input: "chose",
		output: {F: 1},
		
	},
	{
		input: "chose",
		output: {M: 1},
		
	},
	{
		input: "choses",
		output: {F: 1},
		
	},
	{
		input: "chosification",
		output: {F: 1},
		
	},
	{
		input: "choséité",
		output: {F: 1},
		
	},
	{
		input: "chott",
		output: {M: 1},
		
	},
	{
		input: "chou",
		output: {M: 1},
		
	},
	{
		input: "chouan",
		output: {M: 1},
		
	},
	{
		input: "chouannerie",
		output: {F: 1},
		
	},
	{
		input: "chouchou",
		output: {M: 1},
		
	},
	{
		input: "choucroute",
		output: {F: 1},
		
	},
	{
		input: "chouette",
		output: {F: 1},
		
	},
	{
		input: "choura",
		output: {F: 1},
		
	},
	{
		input: "choux",
		output: {M: 1},
		
	},
	{
		input: "chrestienté",
		output: {F: 1},
		
	},
	{
		input: "chrisme",
		output: {M: 1},
		
	},
	{
		input: "christ",
		output: {M: 1},
		
	},
	{
		input: "christianisation",
		output: {F: 1},
		
	},
	{
		input: "christianisme",
		output: {M: 1},
		
	},
	{
		input: "christocentrisme",
		output: {M: 1},
		
	},
	{
		input: "christologie",
		output: {F: 1},
		
	},
	{
		input: "chromatine",
		output: {F: 1},
		
	},
	{
		input: "chromatisme",
		output: {M: 1},
		
	},
	{
		input: "chromatogramme",
		output: {M: 1},
		
	},
	{
		input: "chromatographe",
		output: {M: 1},
		
	},
	{
		input: "chromatographie",
		output: {F: 1},
		
	},
	{
		input: "chrome",
		output: {M: 1},
		
	},
	{
		input: "chromite",
		output: {F: 1},
		
	},
	{
		input: "chromo",
		output: {M: 1},
		
	},
	{
		input: "chromodynamique",
		output: {F: 1},
		
	},
	{
		input: "chromolithographie",
		output: {F: 1},
		
	},
	{
		input: "chromosome",
		output: {M: 1},
		
	},
	{
		input: "chromosphère",
		output: {F: 1},
		
	},
	{
		input: "chronaxie",
		output: {F: 1},
		
	},
	{
		input: "chronicisation",
		output: {F: 1},
		
	},
	{
		input: "chronicité",
		output: {F: 1},
		
	},
	{
		input: "chronique",
		output: {F: 1},
		
	},
	{
		input: "chroniqueur",
		output: {M: 1},
		
	},
	{
		input: "chroniqueuse",
		output: {F: 1},
		
	},
	{
		input: "chrono",
		output: {F: 1},
		
	},
	{
		input: "chrono",
		output: {M: 1},
		
	},
	{
		input: "chronobiologie",
		output: {F: 1},
		
	},
	{
		input: "chronogenèse",
		output: {F: 1},
		
	},
	{
		input: "chronogramme",
		output: {M: 1},
		
	},
	{
		input: "chronographie",
		output: {F: 1},
		
	},
	{
		input: "chronogénèse",
		output: {F: 1},
		
	},
	{
		input: "chronologie",
		output: {F: 1},
		
	},
	{
		input: "chronomètre",
		output: {M: 1},
		
	},
	{
		input: "chronométrage",
		output: {M: 1},
		
	},
	{
		input: "chronométrie",
		output: {F: 1},
		
	},
	{
		input: "chronophotographie",
		output: {F: 1},
		
	},
	{
		input: "chronostratigraphie",
		output: {F: 1},
		
	},
	{
		input: "chronothèse",
		output: {F: 1},
		
	},
	{
		input: "chronotope",
		output: {M: 1},
		
	},
	{
		input: "chronotype",
		output: {M: 1},
		
	},
	{
		input: "chrysalide",
		output: {F: 1},
		
	},
	{
		input: "chrysanthème",
		output: {M: 1},
		
	},
	{
		input: "chrématistique",
		output: {F: 1},
		
	},
	{
		input: "chrétien",
		output: {M: 1},
		
	},
	{
		input: "chrétienne",
		output: {F: 1},
		
	},
	{
		input: "chrétienté",
		output: {F: 1},
		
	},
	{
		input: "chrême",
		output: {M: 1},
		
	},
	{
		input: "chuchotement",
		output: {M: 1},
		
	},
	{
		input: "chuintement",
		output: {M: 1},
		
	},
	{
		input: "chute",
		output: {F: 1},
		
	},
	{
		input: "chyle",
		output: {M: 1},
		
	},
	{
		input: "chyme",
		output: {M: 1},
		
	},
	{
		input: "chymie",
		output: {F: 1},
		
	},
	{
		input: "châle",
		output: {M: 1},
		
	},
	{
		input: "châlit",
		output: {M: 1},
		
	},
	{
		input: "châsse",
		output: {F: 1},
		
	},
	{
		input: "châssis",
		output: {M: 1},
		
	},
	{
		input: "châtaigne",
		output: {F: 1},
		
	},
	{
		input: "châtaigneraie",
		output: {F: 1},
		
	},
	{
		input: "châtaignier",
		output: {M: 1},
		
	},
	{
		input: "château",
		output: {M: 1},
		
	},
	{
		input: "châtelain",
		output: {M: 1},
		
	},
	{
		input: "châtelaine",
		output: {F: 1},
		
	},
	{
		input: "châtelet",
		output: {M: 1},
		
	},
	{
		input: "châtellenie",
		output: {F: 1},
		
	},
	{
		input: "châtiment",
		output: {M: 1},
		
	},
	{
		input: "chèche",
		output: {M: 1},
		
	},
	{
		input: "chèque",
		output: {M: 1},
		
	},
	{
		input: "chèreté",
		output: {F: 1},
		
	},
	{
		input: "chèvre",
		output: {F: 1},
		
	},
	{
		input: "chèvrefeuille",
		output: {M: 1},
		
	},
	{
		input: "chéchia",
		output: {F: 1},
		
	},
	{
		input: "chéneau",
		output: {M: 1},
		
	},
	{
		input: "chéquier",
		output: {M: 1},
		
	},
	{
		input: "chéri",
		output: {M: 1},
		
	},
	{
		input: "chérif",
		output: {M: 1},
		
	},
	{
		input: "chérubin",
		output: {M: 1},
		
	},
	{
		input: "chênaie",
		output: {F: 1},
		
	},
	{
		input: "chêne",
		output: {M: 1},
		
	},
	{
		input: "chô",
		output: {M: 1},
		
	},
	{
		input: "chômage",
		output: {M: 1},
		
	},
	{
		input: "chômeur",
		output: {M: 1},
		
	},
	{
		input: "chôra",
		output: {F: 1},
		
	},
	{
		input: "chûte",
		output: {F: 1},
		
	},
	{
		input: "chœur",
		output: {M: 1},
		
	},
	{
		input: "cia",
		output: {F: 1},
		
	},
	{
		input: "ciblage",
		output: {M: 1},
		
	},
	{
		input: "cible",
		output: {F: 1},
		
	},
	{
		input: "ciboire",
		output: {M: 1},
		
	},
	{
		input: "ciborium",
		output: {M: 1},
		
	},
	{
		input: "ciboulette",
		output: {F: 1},
		
	},
	{
		input: "cicadelle",
		output: {F: 1},
		
	},
	{
		input: "cicatrice",
		output: {F: 1},
		
	},
	{
		input: "cicatrisation",
		output: {F: 1},
		
	},
	{
		input: "ciclosporine",
		output: {F: 1},
		
	},
	{
		input: "cicérone",
		output: {M: 1},
		
	},
	{
		input: "cidre",
		output: {M: 1},
		
	},
	{
		input: "ciel",
		output: {M: 1},
		
	},
	{
		input: "ciencia",
		output: {F: 1},
		
	},
	{
		input: "cierge",
		output: {M: 1},
		
	},
	{
		input: "cifra",
		output: {F: 1},
		
	},
	{
		input: "cigale",
		output: {F: 1},
		
	},
	{
		input: "cigare",
		output: {M: 1},
		
	},
	{
		input: "cigarette",
		output: {F: 1},
		
	},
	{
		input: "cigarillo",
		output: {M: 1},
		
	},
	{
		input: "cigogne",
		output: {F: 1},
		
	},
	{
		input: "ciguatera",
		output: {F: 1},
		
	},
	{
		input: "ciguë",
		output: {F: 1},
		
	},
	{
		input: "cil",
		output: {M: 1},
		
	},
	{
		input: "cilice",
		output: {M: 1},
		
	},
	{
		input: "cillement",
		output: {M: 1},
		
	},
	{
		input: "cimaise",
		output: {F: 1},
		
	},
	{
		input: "cime",
		output: {F: 1},
		
	},
	{
		input: "ciment",
		output: {M: 1},
		
	},
	{
		input: "cimentation",
		output: {F: 1},
		
	},
	{
		input: "cimenterie",
		output: {F: 1},
		
	},
	{
		input: "cimeterre",
		output: {M: 1},
		
	},
	{
		input: "cimetière",
		output: {M: 1},
		
	},
	{
		input: "cimier",
		output: {M: 1},
		
	},
	{
		input: "cimétidine",
		output: {F: 1},
		
	},
	{
		input: "cinabre",
		output: {M: 1},
		
	},
	{
		input: "cine",
		output: {M: 1},
		
	},
	{
		input: "cinema",
		output: {M: 1},
		
	},
	{
		input: "cinglé",
		output: {M: 1},
		
	},
	{
		input: "cingulum",
		output: {M: 1},
		
	},
	{
		input: "cinquantaine",
		output: {F: 1},
		
	},
	{
		input: "cinquantenaire",
		output: {M: 1},
		
	},
	{
		input: "cinquantième",
		output: {M: 1},
		
	},
	{
		input: "cinquième",
		output: {F: 1},
		
	},
	{
		input: "cinquième",
		output: {M: 1},
		
	},
	{
		input: "cintrage",
		output: {M: 1},
		
	},
	{
		input: "cintre",
		output: {M: 1},
		
	},
	{
		input: "ciné",
		output: {F: 1},
		
	},
	{
		input: "ciné",
		output: {M: 1},
		
	},
	{
		input: "cinéaste",
		output: {F: 1},
		
	},
	{
		input: "cinéaste",
		output: {M: 1},
		
	},
	{
		input: "cinéma",
		output: {M: 1},
		
	},
	{
		input: "cinémathèque",
		output: {F: 1},
		
	},
	{
		input: "cinématique",
		output: {F: 1},
		
	},
	{
		input: "cinématographe",
		output: {M: 1},
		
	},
	{
		input: "cinématographie",
		output: {F: 1},
		
	},
	{
		input: "cinéphile",
		output: {M: 1},
		
	},
	{
		input: "cinéphilie",
		output: {F: 1},
		
	},
	{
		input: "cinétique",
		output: {F: 1},
		
	},
	{
		input: "cinétisme",
		output: {M: 1},
		
	},
	{
		input: "cippe",
		output: {M: 1},
		
	},
	{
		input: "cir",
		output: {F: 1},
		
	},
	{
		input: "cirage",
		output: {M: 1},
		
	},
	{
		input: "circoncis",
		output: {M: 1},
		
	},
	{
		input: "circonciseur",
		output: {M: 1},
		
	},
	{
		input: "circoncision",
		output: {F: 1},
		
	},
	{
		input: "circonflexe",
		output: {M: 1},
		
	},
	{
		input: "circonférence",
		output: {F: 1},
		
	},
	{
		input: "circonlocution",
		output: {F: 1},
		
	},
	{
		input: "circonscription",
		output: {F: 1},
		
	},
	{
		input: "circonscrire",
		output: {F: 1},
		
	},
	{
		input: "circonscrit",
		output: {M: 1},
		
	},
	{
		input: "circonspection",
		output: {F: 1},
		
	},
	{
		input: "circonstance",
		output: {F: 1},
		
	},
	{
		input: "circonstanciel",
		output: {M: 1},
		
	},
	{
		input: "circonstancielle",
		output: {F: 1},
		
	},
	{
		input: "circonstant",
		output: {M: 1},
		
	},
	{
		input: "circonvallation",
		output: {F: 1},
		
	},
	{
		input: "circonvolution",
		output: {F: 1},
		
	},
	{
		input: "circuit",
		output: {M: 1},
		
	},
	{
		input: "circulación",
		output: {F: 1},
		
	},
	{
		input: "circulaire",
		output: {F: 1},
		
	},
	{
		input: "circulaire",
		output: {M: 1},
		
	},
	{
		input: "circularité",
		output: {F: 1},
		
	},
	{
		input: "circulation",
		output: {F: 1},
		
	},
	{
		input: "circumambulation",
		output: {F: 1},
		
	},
	{
		input: "circumnavigation",
		output: {F: 1},
		
	},
	{
		input: "cire",
		output: {F: 1},
		
	},
	{
		input: "cireur",
		output: {M: 1},
		
	},
	{
		input: "ciron",
		output: {M: 1},
		
	},
	{
		input: "cirque",
		output: {M: 1},
		
	},
	{
		input: "cirrhose",
		output: {F: 1},
		
	},
	{
		input: "ciré",
		output: {M: 1},
		
	},
	{
		input: "cisaille",
		output: {F: 1},
		
	},
	{
		input: "cisaillement",
		output: {M: 1},
		
	},
	{
		input: "ciseau",
		output: {M: 1},
		
	},
	{
		input: "ciseleur",
		output: {M: 1},
		
	},
	{
		input: "ciselure",
		output: {F: 1},
		
	},
	{
		input: "cisplatine",
		output: {M: 1},
		
	},
	{
		input: "ciste",
		output: {F: 1},
		
	},
	{
		input: "cit",
		output: {M: 1},
		
	},
	{
		input: "cita",
		output: {F: 1},
		
	},
	{
		input: "citadelle",
		output: {F: 1},
		
	},
	{
		input: "citadin",
		output: {M: 1},
		
	},
	{
		input: "citadine",
		output: {F: 1},
		
	},
	{
		input: "citadinité",
		output: {F: 1},
		
	},
	{
		input: "citation",
		output: {F: 1},
		
	},
	{
		input: "cite",
		output: {F: 1},
		
	},
	{
		input: "cite",
		output: {M: 1},
		
	},
	{
		input: "citerne",
		output: {F: 1},
		
	},
	{
		input: "cithare",
		output: {F: 1},
		
	},
	{
		input: "citoyen",
		output: {M: 1},
		
	},
	{
		input: "citoyenne",
		output: {F: 1},
		
	},
	{
		input: "citoyenneté",
		output: {F: 1},
		
	},
	{
		input: "citrate",
		output: {M: 1},
		
	},
	{
		input: "citron",
		output: {M: 1},
		
	},
	{
		input: "citronnade",
		output: {F: 1},
		
	},
	{
		input: "citronnelle",
		output: {F: 1},
		
	},
	{
		input: "citronnier",
		output: {M: 1},
		
	},
	{
		input: "citrouille",
		output: {F: 1},
		
	},
	{
		input: "città",
		output: {F: 1},
		
	},
	{
		input: "città",
		output: {M: 1},
		
	},
	{
		input: "cité",
		output: {F: 1},
		
	},
	{
		input: "cité",
		output: {M: 1},
		
	},
	{
		input: "ciudad",
		output: {F: 1},
		
	},
	{
		input: "ciuitas",
		output: {F: 1},
		
	},
	{
		input: "ciutat",
		output: {F: 1},
		
	},
	{
		input: "civelle",
		output: {F: 1},
		
	},
	{
		input: "civet",
		output: {M: 1},
		
	},
	{
		input: "civette",
		output: {F: 1},
		
	},
	{
		input: "civilisateur",
		output: {M: 1},
		
	},
	{
		input: "civilisation",
		output: {F: 1},
		
	},
	{
		input: "civilisé",
		output: {M: 1},
		
	},
	{
		input: "civilité",
		output: {F: 1},
		
	},
	{
		input: "civilización",
		output: {F: 1},
		
	},
	{
		input: "civisme",
		output: {M: 1},
		
	},
	{
		input: "civitas",
		output: {F: 1},
		
	},
	{
		input: "civière",
		output: {F: 1},
		
	},
	{
		input: "cl",
		output: {F: 1},
		
	},
	{
		input: "cl",
		output: {M: 1},
		
	},
	{
		input: "claie",
		output: {F: 1},
		
	},
	{
		input: "clairance",
		output: {F: 1},
		
	},
	{
		input: "claire",
		output: {F: 1},
		
	},
	{
		input: "clairière",
		output: {F: 1},
		
	},
	{
		input: "clairobscur",
		output: {M: 1},
		
	},
	{
		input: "clairon",
		output: {M: 1},
		
	},
	{
		input: "clairvoyance",
		output: {F: 1},
		
	},
	{
		input: "clairvoyant",
		output: {M: 1},
		
	},
	{
		input: "clame",
		output: {M: 1},
		
	},
	{
		input: "clameur",
		output: {F: 1},
		
	},
	{
		input: "clamp",
		output: {M: 1},
		
	},
	{
		input: "clampage",
		output: {M: 1},
		
	},
	{
		input: "clan",
		output: {M: 1},
		
	},
	{
		input: "clandestin",
		output: {M: 1},
		
	},
	{
		input: "clandestinité",
		output: {F: 1},
		
	},
	{
		input: "clanisme",
		output: {M: 1},
		
	},
	{
		input: "clap",
		output: {M: 1},
		
	},
	{
		input: "clapet",
		output: {M: 1},
		
	},
	{
		input: "clapier",
		output: {M: 1},
		
	},
	{
		input: "clapot",
		output: {M: 1},
		
	},
	{
		input: "clapotement",
		output: {M: 1},
		
	},
	{
		input: "clapotis",
		output: {M: 1},
		
	},
	{
		input: "claquage",
		output: {M: 1},
		
	},
	{
		input: "claque",
		output: {F: 1},
		
	},
	{
		input: "claquement",
		output: {M: 1},
		
	},
	{
		input: "clarification",
		output: {F: 1},
		
	},
	{
		input: "clarinette",
		output: {F: 1},
		
	},
	{
		input: "clarinettiste",
		output: {M: 1},
		
	},
	{
		input: "clarté",
		output: {F: 1},
		
	},
	{
		input: "clase",
		output: {F: 1},
		
	},
	{
		input: "clash",
		output: {M: 1},
		
	},
	{
		input: "clasificación",
		output: {F: 1},
		
	},
	{
		input: "classe",
		output: {F: 1},
		
	},
	{
		input: "classe",
		output: {M: 1},
		
	},
	{
		input: "classement",
		output: {M: 1},
		
	},
	{
		input: "classes",
		output: {F: 1},
		
	},
	{
		input: "classeur",
		output: {M: 1},
		
	},
	{
		input: "classicisme",
		output: {M: 1},
		
	},
	{
		input: "classificateur",
		output: {M: 1},
		
	},
	{
		input: "classification",
		output: {F: 1},
		
	},
	{
		input: "classème",
		output: {M: 1},
		
	},
	{
		input: "claudication",
		output: {F: 1},
		
	},
	{
		input: "clause",
		output: {F: 1},
		
	},
	{
		input: "claustration",
		output: {F: 1},
		
	},
	{
		input: "claustrophobie",
		output: {F: 1},
		
	},
	{
		input: "clausule",
		output: {F: 1},
		
	},
	{
		input: "clavaire",
		output: {M: 1},
		
	},
	{
		input: "clave",
		output: {F: 1},
		
	},
	{
		input: "claveau",
		output: {M: 1},
		
	},
	{
		input: "clavecin",
		output: {M: 1},
		
	},
	{
		input: "claveciniste",
		output: {M: 1},
		
	},
	{
		input: "clavette",
		output: {F: 1},
		
	},
	{
		input: "clavicule",
		output: {F: 1},
		
	},
	{
		input: "clavier",
		output: {M: 1},
		
	},
	{
		input: "clayonnage",
		output: {M: 1},
		
	},
	{
		input: "cle",
		output: {M: 1},
		
	},
	{
		input: "clearance",
		output: {F: 1},
		
	},
	{
		input: "clearing",
		output: {M: 1},
		
	},
	{
		input: "clef",
		output: {F: 1},
		
	},
	{
		input: "clenche",
		output: {F: 1},
		
	},
	{
		input: "clepsydre",
		output: {F: 1},
		
	},
	{
		input: "clerc",
		output: {M: 1},
		
	},
	{
		input: "clergie",
		output: {F: 1},
		
	},
	{
		input: "clergyman",
		output: {M: 1},
		
	},
	{
		input: "clergé",
		output: {M: 1},
		
	},
	{
		input: "clic",
		output: {M: 1},
		
	},
	{
		input: "clichage",
		output: {M: 1},
		
	},
	{
		input: "cliché",
		output: {M: 1},
		
	},
	{
		input: "client",
		output: {M: 1},
		
	},
	{
		input: "cliente",
		output: {F: 1},
		
	},
	{
		input: "clientèle",
		output: {F: 1},
		
	},
	{
		input: "clientélisme",
		output: {M: 1},
		
	},
	{
		input: "clignement",
		output: {M: 1},
		
	},
	{
		input: "clignotement",
		output: {M: 1},
		
	},
	{
		input: "climat",
		output: {M: 1},
		
	},
	{
		input: "climatisation",
		output: {F: 1},
		
	},
	{
		input: "climatiseur",
		output: {M: 1},
		
	},
	{
		input: "climatologie",
		output: {F: 1},
		
	},
	{
		input: "climax",
		output: {M: 1},
		
	},
	{
		input: "clin",
		output: {M: 1},
		
	},
	{
		input: "clinamen",
		output: {M: 1},
		
	},
	{
		input: "clinicien",
		output: {M: 1},
		
	},
	{
		input: "clinique",
		output: {F: 1},
		
	},
	{
		input: "clinker",
		output: {M: 1},
		
	},
	{
		input: "clinquant",
		output: {M: 1},
		
	},
	{
		input: "clip",
		output: {M: 1},
		
	},
	{
		input: "clique",
		output: {F: 1},
		
	},
	{
		input: "clique",
		output: {M: 1},
		
	},
	{
		input: "cliquet",
		output: {M: 1},
		
	},
	{
		input: "cliquetis",
		output: {M: 1},
		
	},
	{
		input: "cliqué",
		output: {M: 1},
		
	},
	{
		input: "cliticisation",
		output: {F: 1},
		
	},
	{
		input: "clitique",
		output: {M: 1},
		
	},
	{
		input: "clitoridectomie",
		output: {F: 1},
		
	},
	{
		input: "clitoris",
		output: {M: 1},
		
	},
	{
		input: "clivage",
		output: {M: 1},
		
	},
	{
		input: "cloaque",
		output: {M: 1},
		
	},
	{
		input: "clochard",
		output: {M: 1},
		
	},
	{
		input: "clocharde",
		output: {F: 1},
		
	},
	{
		input: "clochardisation",
		output: {F: 1},
		
	},
	{
		input: "cloche",
		output: {F: 1},
		
	},
	{
		input: "clocher",
		output: {M: 1},
		
	},
	{
		input: "clocheton",
		output: {M: 1},
		
	},
	{
		input: "clochette",
		output: {F: 1},
		
	},
	{
		input: "cloison",
		output: {F: 1},
		
	},
	{
		input: "cloisonnement",
		output: {M: 1},
		
	},
	{
		input: "clomipramine",
		output: {F: 1},
		
	},
	{
		input: "clonage",
		output: {M: 1},
		
	},
	{
		input: "clone",
		output: {M: 1},
		
	},
	{
		input: "clonidine",
		output: {F: 1},
		
	},
	{
		input: "clope",
		output: {F: 1},
		
	},
	{
		input: "cloporte",
		output: {M: 1},
		
	},
	{
		input: "cloque",
		output: {F: 1},
		
	},
	{
		input: "clos",
		output: {M: 1},
		
	},
	{
		input: "closerie",
		output: {F: 1},
		
	},
	{
		input: "clou",
		output: {M: 1},
		
	},
	{
		input: "clouterie",
		output: {F: 1},
		
	},
	{
		input: "clown",
		output: {M: 1},
		
	},
	{
		input: "clownerie",
		output: {F: 1},
		
	},
	{
		input: "clozapine",
		output: {F: 1},
		
	},
	{
		input: "cloître",
		output: {M: 1},
		
	},
	{
		input: "club",
		output: {M: 1},
		
	},
	{
		input: "cluse",
		output: {F: 1},
		
	},
	{
		input: "cluster",
		output: {M: 1},
		
	},
	{
		input: "clystère",
		output: {M: 1},
		
	},
	{
		input: "clé",
		output: {F: 1},
		
	},
	{
		input: "clématite",
		output: {F: 1},
		
	},
	{
		input: "clémence",
		output: {F: 1},
		
	},
	{
		input: "clément",
		output: {M: 1},
		
	},
	{
		input: "clémentine",
		output: {F: 1},
		
	},
	{
		input: "cléricalisation",
		output: {F: 1},
		
	},
	{
		input: "cléricalisme",
		output: {M: 1},
		
	},
	{
		input: "cléricature",
		output: {F: 1},
		
	},
	{
		input: "clôture",
		output: {F: 1},
		
	},
	{
		input: "cm",
		output: {M: 1},
		
	},
	{
		input: "cncl",
		output: {F: 1},
		
	},
	{
		input: "cnrs",
		output: {M: 1},
		
	},
	{
		input: "cnuced",
		output: {F: 1},
		
	},
	{
		input: "coach",
		output: {M: 1},
		
	},
	{
		input: "coaching",
		output: {M: 1},
		
	},
	{
		input: "coaction",
		output: {F: 1},
		
	},
	{
		input: "coadjuteur",
		output: {M: 1},
		
	},
	{
		input: "coagulation",
		output: {F: 1},
		
	},
	{
		input: "coagulopathie",
		output: {F: 1},
		
	},
	{
		input: "coalescence",
		output: {F: 1},
		
	},
	{
		input: "coalition",
		output: {F: 1},
		
	},
	{
		input: "coappartenance",
		output: {F: 1},
		
	},
	{
		input: "coaptation",
		output: {F: 1},
		
	},
	{
		input: "coarctation",
		output: {F: 1},
		
	},
	{
		input: "coassement",
		output: {M: 1},
		
	},
	{
		input: "coassurance",
		output: {F: 1},
		
	},
	{
		input: "coauteur",
		output: {M: 1},
		
	},
	{
		input: "cobalt",
		output: {M: 1},
		
	},
	{
		input: "cobaye",
		output: {M: 1},
		
	},
	{
		input: "cobla",
		output: {F: 1},
		
	},
	{
		input: "cobra",
		output: {M: 1},
		
	},
	{
		input: "coca",
		output: {F: 1},
		
	},
	{
		input: "coca",
		output: {M: 1},
		
	},
	{
		input: "cocarde",
		output: {F: 1},
		
	},
	{
		input: "cocasse",
		output: {M: 1},
		
	},
	{
		input: "cocasserie",
		output: {F: 1},
		
	},
	{
		input: "cocaïne",
		output: {F: 1},
		
	},
	{
		input: "coccidiose",
		output: {F: 1},
		
	},
	{
		input: "coccinelle",
		output: {F: 1},
		
	},
	{
		input: "coccyx",
		output: {M: 1},
		
	},
	{
		input: "coche",
		output: {F: 1},
		
	},
	{
		input: "coche",
		output: {M: 1},
		
	},
	{
		input: "cochenille",
		output: {F: 1},
		
	},
	{
		input: "cocher",
		output: {M: 1},
		
	},
	{
		input: "cochlée",
		output: {F: 1},
		
	},
	{
		input: "cochon",
		output: {M: 1},
		
	},
	{
		input: "cochonnerie",
		output: {F: 1},
		
	},
	{
		input: "cochonnet",
		output: {M: 1},
		
	},
	{
		input: "cocina",
		output: {F: 1},
		
	},
	{
		input: "cocker",
		output: {M: 1},
		
	},
	{
		input: "cockpit",
		output: {M: 1},
		
	},
	{
		input: "cocktail",
		output: {M: 1},
		
	},
	{
		input: "coco",
		output: {M: 1},
		
	},
	{
		input: "cocon",
		output: {M: 1},
		
	},
	{
		input: "coconstruction",
		output: {F: 1},
		
	},
	{
		input: "cocontractant",
		output: {M: 1},
		
	},
	{
		input: "cocorico",
		output: {M: 1},
		
	},
	{
		input: "cocoteraie",
		output: {F: 1},
		
	},
	{
		input: "cocotier",
		output: {M: 1},
		
	},
	{
		input: "cocotte",
		output: {F: 1},
		
	},
	{
		input: "coction",
		output: {F: 1},
		
	},
	{
		input: "cocu",
		output: {M: 1},
		
	},
	{
		input: "cocuage",
		output: {M: 1},
		
	},
	{
		input: "coda",
		output: {F: 1},
		
	},
	{
		input: "codage",
		output: {M: 1},
		
	},
	{
		input: "code",
		output: {M: 1},
		
	},
	{
		input: "codeur",
		output: {M: 1},
		
	},
	{
		input: "codex",
		output: {M: 1},
		
	},
	{
		input: "codice",
		output: {M: 1},
		
	},
	{
		input: "codicille",
		output: {M: 1},
		
	},
	{
		input: "codicologie",
		output: {F: 1},
		
	},
	{
		input: "codificateur",
		output: {M: 1},
		
	},
	{
		input: "codification",
		output: {F: 1},
		
	},
	{
		input: "codirecteur",
		output: {M: 1},
		
	},
	{
		input: "codirection",
		output: {F: 1},
		
	},
	{
		input: "codon",
		output: {M: 1},
		
	},
	{
		input: "codébiteur",
		output: {M: 1},
		
	},
	{
		input: "codécision",
		output: {F: 1},
		
	},
	{
		input: "codéine",
		output: {F: 1},
		
	},
	{
		input: "codépendance",
		output: {F: 1},
		
	},
	{
		input: "codétenu",
		output: {M: 1},
		
	},
	{
		input: "codétermination",
		output: {F: 1},
		
	},
	{
		input: "codéveloppement",
		output: {M: 1},
		
	},
	{
		input: "coefficient",
		output: {M: 1},
		
	},
	{
		input: "coentreprise",
		output: {F: 1},
		
	},
	{
		input: "coercition",
		output: {F: 1},
		
	},
	{
		input: "coeur",
		output: {M: 1},
		
	},
	{
		input: "coexcitation",
		output: {F: 1},
		
	},
	{
		input: "coexistence",
		output: {F: 1},
		
	},
	{
		input: "coextensivité",
		output: {F: 1},
		
	},
	{
		input: "cofacteur",
		output: {M: 1},
		
	},
	{
		input: "coffrage",
		output: {M: 1},
		
	},
	{
		input: "coffre",
		output: {M: 1},
		
	},
	{
		input: "coffret",
		output: {M: 1},
		
	},
	{
		input: "cofinancement",
		output: {M: 1},
		
	},
	{
		input: "cofondateur",
		output: {M: 1},
		
	},
	{
		input: "cogestion",
		output: {F: 1},
		
	},
	{
		input: "cogitatio",
		output: {F: 1},
		
	},
	{
		input: "cogitation",
		output: {F: 1},
		
	},
	{
		input: "cogitative",
		output: {F: 1},
		
	},
	{
		input: "cogitatum",
		output: {M: 1},
		
	},
	{
		input: "cogito",
		output: {M: 1},
		
	},
	{
		input: "cognac",
		output: {M: 1},
		
	},
	{
		input: "cognassier",
		output: {M: 1},
		
	},
	{
		input: "cognitif",
		output: {M: 1},
		
	},
	{
		input: "cognition",
		output: {F: 1},
		
	},
	{
		input: "cognitivisme",
		output: {M: 1},
		
	},
	{
		input: "cognoissance",
		output: {F: 1},
		
	},
	{
		input: "cognomen",
		output: {M: 1},
		
	},
	{
		input: "cognée",
		output: {F: 1},
		
	},
	{
		input: "cogénération",
		output: {F: 1},
		
	},
	{
		input: "cohabitant",
		output: {M: 1},
		
	},
	{
		input: "cohabitation",
		output: {F: 1},
		
	},
	{
		input: "cohomologie",
		output: {F: 1},
		
	},
	{
		input: "cohorte",
		output: {F: 1},
		
	},
	{
		input: "cohue",
		output: {F: 1},
		
	},
	{
		input: "cohérence",
		output: {F: 1},
		
	},
	{
		input: "cohéritier",
		output: {M: 1},
		
	},
	{
		input: "cohésion",
		output: {F: 1},
		
	},
	{
		input: "coiffe",
		output: {F: 1},
		
	},
	{
		input: "coiffe",
		output: {M: 1},
		
	},
	{
		input: "coiffeur",
		output: {M: 1},
		
	},
	{
		input: "coiffeuse",
		output: {F: 1},
		
	},
	{
		input: "coiffure",
		output: {F: 1},
		
	},
	{
		input: "coin",
		output: {M: 1},
		
	},
	{
		input: "coincidence",
		output: {F: 1},
		
	},
	{
		input: "coincidentia",
		output: {F: 1},
		
	},
	{
		input: "coing",
		output: {M: 1},
		
	},
	{
		input: "cointégration",
		output: {F: 1},
		
	},
	{
		input: "coips",
		output: {M: 1},
		
	},
	{
		input: "coke",
		output: {F: 1},
		
	},
	{
		input: "coke",
		output: {M: 1},
		
	},
	{
		input: "cokerie",
		output: {F: 1},
		
	},
	{
		input: "cokéfaction",
		output: {F: 1},
		
	},
	{
		input: "col",
		output: {F: 1},
		
	},
	{
		input: "col",
		output: {M: 1},
		
	},
	{
		input: "cola",
		output: {F: 1},
		
	},
	{
		input: "colaboración",
		output: {F: 1},
		
	},
	{
		input: "colbertisme",
		output: {M: 1},
		
	},
	{
		input: "colchicine",
		output: {F: 1},
		
	},
	{
		input: "colección",
		output: {F: 1},
		
	},
	{
		input: "colectividad",
		output: {F: 1},
		
	},
	{
		input: "colectomie",
		output: {F: 1},
		
	},
	{
		input: "colere",
		output: {F: 1},
		
	},
	{
		input: "colibacille",
		output: {M: 1},
		
	},
	{
		input: "colibri",
		output: {M: 1},
		
	},
	{
		input: "colimaçon",
		output: {M: 1},
		
	},
	{
		input: "colin",
		output: {M: 1},
		
	},
	{
		input: "colinguisme",
		output: {M: 1},
		
	},
	{
		input: "colinéarité",
		output: {F: 1},
		
	},
	{
		input: "colique",
		output: {F: 1},
		
	},
	{
		input: "colis",
		output: {M: 1},
		
	},
	{
		input: "colite",
		output: {F: 1},
		
	},
	{
		input: "coll",
		output: {F: 1},
		
	},
	{
		input: "collab",
		output: {F: 1},
		
	},
	{
		input: "collabo",
		output: {M: 1},
		
	},
	{
		input: "collaborateur",
		output: {M: 1},
		
	},
	{
		input: "collaboration",
		output: {F: 1},
		
	},
	{
		input: "collaborationnisme",
		output: {M: 1},
		
	},
	{
		input: "collaboratrice",
		output: {F: 1},
		
	},
	{
		input: "collaborazione",
		output: {F: 1},
		
	},
	{
		input: "collage",
		output: {M: 1},
		
	},
	{
		input: "collagène",
		output: {M: 1},
		
	},
	{
		input: "collant",
		output: {M: 1},
		
	},
	{
		input: "collapsus",
		output: {M: 1},
		
	},
	{
		input: "collateur",
		output: {M: 1},
		
	},
	{
		input: "collation",
		output: {F: 1},
		
	},
	{
		input: "collationnement",
		output: {M: 1},
		
	},
	{
		input: "collatéral",
		output: {M: 1},
		
	},
	{
		input: "collatéralité",
		output: {F: 1},
		
	},
	{
		input: "colle",
		output: {F: 1},
		
	},
	{
		input: "collectage",
		output: {M: 1},
		
	},
	{
		input: "collecte",
		output: {F: 1},
		
	},
	{
		input: "collecteur",
		output: {M: 1},
		
	},
	{
		input: "collectif",
		output: {M: 1},
		
	},
	{
		input: "collection",
		output: {F: 1},
		
	},
	{
		input: "collectionneur",
		output: {M: 1},
		
	},
	{
		input: "collectionneuse",
		output: {F: 1},
		
	},
	{
		input: "collectionnisme",
		output: {M: 1},
		
	},
	{
		input: "collectivisation",
		output: {F: 1},
		
	},
	{
		input: "collectivisme",
		output: {M: 1},
		
	},
	{
		input: "collectivité",
		output: {F: 1},
		
	},
	{
		input: "college",
		output: {M: 1},
		
	},
	{
		input: "collerette",
		output: {F: 1},
		
	},
	{
		input: "collet",
		output: {M: 1},
		
	},
	{
		input: "colleur",
		output: {M: 1},
		
	},
	{
		input: "colliculus",
		output: {M: 1},
		
	},
	{
		input: "collier",
		output: {M: 1},
		
	},
	{
		input: "collimateur",
		output: {M: 1},
		
	},
	{
		input: "collimation",
		output: {F: 1},
		
	},
	{
		input: "colline",
		output: {F: 1},
		
	},
	{
		input: "collision",
		output: {F: 1},
		
	},
	{
		input: "collisionneur",
		output: {M: 1},
		
	},
	{
		input: "collocation",
		output: {F: 1},
		
	},
	{
		input: "collodion",
		output: {M: 1},
		
	},
	{
		input: "colloque",
		output: {M: 1},
		
	},
	{
		input: "collusion",
		output: {F: 1},
		
	},
	{
		input: "collyre",
		output: {M: 1},
		
	},
	{
		input: "collège",
		output: {M: 1},
		
	},
	{
		input: "collègue",
		output: {F: 1},
		
	},
	{
		input: "collègue",
		output: {M: 1},
		
	},
	{
		input: "collégial",
		output: {M: 1},
		
	},
	{
		input: "collégiale",
		output: {F: 1},
		
	},
	{
		input: "collégialité",
		output: {F: 1},
		
	},
	{
		input: "collégien",
		output: {M: 1},
		
	},
	{
		input: "collégienne",
		output: {F: 1},
		
	},
	{
		input: "colmatage",
		output: {M: 1},
		
	},
	{
		input: "colo",
		output: {F: 1},
		
	},
	{
		input: "colocation",
		output: {F: 1},
		
	},
	{
		input: "colombe",
		output: {F: 1},
		
	},
	{
		input: "colombier",
		output: {M: 1},
		
	},
	{
		input: "colon",
		output: {M: 1},
		
	},
	{
		input: "colonage",
		output: {M: 1},
		
	},
	{
		input: "colonat",
		output: {M: 1},
		
	},
	{
		input: "colonel",
		output: {M: 1},
		
	},
	{
		input: "colonelle",
		output: {F: 1},
		
	},
	{
		input: "colonia",
		output: {F: 1},
		
	},
	{
		input: "colonial",
		output: {M: 1},
		
	},
	{
		input: "coloniale",
		output: {F: 1},
		
	},
	{
		input: "colonialisme",
		output: {M: 1},
		
	},
	{
		input: "colonialiste",
		output: {M: 1},
		
	},
	{
		input: "colonialité",
		output: {F: 1},
		
	},
	{
		input: "colonie",
		output: {F: 1},
		
	},
	{
		input: "colonie",
		output: {M: 1},
		
	},
	{
		input: "colonisateur",
		output: {M: 1},
		
	},
	{
		input: "colonisation",
		output: {F: 1},
		
	},
	{
		input: "colonisé",
		output: {M: 1},
		
	},
	{
		input: "colonización",
		output: {F: 1},
		
	},
	{
		input: "colonnade",
		output: {F: 1},
		
	},
	{
		input: "colonne",
		output: {F: 1},
		
	},
	{
		input: "colonnette",
		output: {F: 1},
		
	},
	{
		input: "colophane",
		output: {F: 1},
		
	},
	{
		input: "colophon",
		output: {M: 1},
		
	},
	{
		input: "colorant",
		output: {M: 1},
		
	},
	{
		input: "coloration",
		output: {F: 1},
		
	},
	{
		input: "coloriage",
		output: {M: 1},
		
	},
	{
		input: "colorimétrie",
		output: {F: 1},
		
	},
	{
		input: "coloris",
		output: {M: 1},
		
	},
	{
		input: "colorisation",
		output: {F: 1},
		
	},
	{
		input: "coloriste",
		output: {M: 1},
		
	},
	{
		input: "coloscopie",
		output: {F: 1},
		
	},
	{
		input: "colossal",
		output: {M: 1},
		
	},
	{
		input: "colosse",
		output: {M: 1},
		
	},
	{
		input: "colostomie",
		output: {F: 1},
		
	},
	{
		input: "colostrum",
		output: {M: 1},
		
	},
	{
		input: "colportage",
		output: {M: 1},
		
	},
	{
		input: "colporteur",
		output: {M: 1},
		
	},
	{
		input: "colposcopie",
		output: {F: 1},
		
	},
	{
		input: "colt",
		output: {M: 1},
		
	},
	{
		input: "coltan",
		output: {M: 1},
		
	},
	{
		input: "columelle",
		output: {F: 1},
		
	},
	{
		input: "colza",
		output: {M: 1},
		
	},
	{
		input: "colère",
		output: {F: 1},
		
	},
	{
		input: "coléoptère",
		output: {M: 1},
		
	},
	{
		input: "colérique",
		output: {M: 1},
		
	},
	{
		input: "com",
		output: {F: 1},
		
	},
	{
		input: "com",
		output: {M: 1},
		
	},
	{
		input: "coma",
		output: {F: 1},
		
	},
	{
		input: "coma",
		output: {M: 1},
		
	},
	{
		input: "comarca",
		output: {F: 1},
		
	},
	{
		input: "combat",
		output: {F: 1},
		
	},
	{
		input: "combat",
		output: {M: 1},
		
	},
	{
		input: "combativité",
		output: {F: 1},
		
	},
	{
		input: "combattant",
		output: {M: 1},
		
	},
	{
		input: "combattante",
		output: {F: 1},
		
	},
	{
		input: "combattre",
		output: {F: 1},
		
	},
	{
		input: "combattre",
		output: {M: 1},
		
	},
	{
		input: "combe",
		output: {F: 1},
		
	},
	{
		input: "combinación",
		output: {F: 1},
		
	},
	{
		input: "combinaison",
		output: {F: 1},
		
	},
	{
		input: "combinat",
		output: {M: 1},
		
	},
	{
		input: "combinateur",
		output: {M: 1},
		
	},
	{
		input: "combinatoire",
		output: {F: 1},
		
	},
	{
		input: "combine",
		output: {F: 1},
		
	},
	{
		input: "combiné",
		output: {M: 1},
		
	},
	{
		input: "combisme",
		output: {M: 1},
		
	},
	{
		input: "comble",
		output: {F: 1},
		
	},
	{
		input: "comble",
		output: {M: 1},
		
	},
	{
		input: "comblement",
		output: {M: 1},
		
	},
	{
		input: "comburant",
		output: {M: 1},
		
	},
	{
		input: "combustible",
		output: {M: 1},
		
	},
	{
		input: "combustion",
		output: {F: 1},
		
	},
	{
		input: "come",
		output: {M: 1},
		
	},
	{
		input: "comedia",
		output: {F: 1},
		
	},
	{
		input: "comice",
		output: {M: 1},
		
	},
	{
		input: "comida",
		output: {F: 1},
		
	},
	{
		input: "comique",
		output: {M: 1},
		
	},
	{
		input: "comitat",
		output: {M: 1},
		
	},
	{
		input: "comite",
		output: {M: 1},
		
	},
	{
		input: "comitologie",
		output: {F: 1},
		
	},
	{
		input: "comité",
		output: {M: 1},
		
	},
	{
		input: "comm",
		output: {F: 1},
		
	},
	{
		input: "comm",
		output: {M: 1},
		
	},
	{
		input: "comma",
		output: {M: 1},
		
	},
	{
		input: "commandant",
		output: {M: 1},
		
	},
	{
		input: "commandante",
		output: {F: 1},
		
	},
	{
		input: "commande",
		output: {F: 1},
		
	},
	{
		input: "commande",
		output: {M: 1},
		
	},
	{
		input: "commandement",
		output: {M: 1},
		
	},
	{
		input: "commanderie",
		output: {F: 1},
		
	},
	{
		input: "commandeur",
		output: {M: 1},
		
	},
	{
		input: "commanditaire",
		output: {M: 1},
		
	},
	{
		input: "commandite",
		output: {F: 1},
		
	},
	{
		input: "commandité",
		output: {M: 1},
		
	},
	{
		input: "commando",
		output: {M: 1},
		
	},
	{
		input: "commedia",
		output: {F: 1},
		
	},
	{
		input: "commencement",
		output: {M: 1},
		
	},
	{
		input: "commende",
		output: {F: 1},
		
	},
	{
		input: "commensal",
		output: {M: 1},
		
	},
	{
		input: "commensalité",
		output: {F: 1},
		
	},
	{
		input: "commensurabilité",
		output: {F: 1},
		
	},
	{
		input: "commentaire",
		output: {M: 1},
		
	},
	{
		input: "commentateur",
		output: {M: 1},
		
	},
	{
		input: "commerce",
		output: {M: 1},
		
	},
	{
		input: "commercialisation",
		output: {F: 1},
		
	},
	{
		input: "commercialité",
		output: {F: 1},
		
	},
	{
		input: "commerçant",
		output: {M: 1},
		
	},
	{
		input: "commerçante",
		output: {F: 1},
		
	},
	{
		input: "commettant",
		output: {M: 1},
		
	},
	{
		input: "commettre",
		output: {F: 1},
		
	},
	{
		input: "comminution",
		output: {F: 1},
		
	},
	{
		input: "commis",
		output: {F: 1},
		
	},
	{
		input: "commis",
		output: {M: 1},
		
	},
	{
		input: "commise",
		output: {F: 1},
		
	},
	{
		input: "commision",
		output: {F: 1},
		
	},
	{
		input: "commissaire",
		output: {F: 1},
		
	},
	{
		input: "commissaire",
		output: {M: 1},
		
	},
	{
		input: "commissariat",
		output: {M: 1},
		
	},
	{
		input: "commission",
		output: {F: 1},
		
	},
	{
		input: "commission",
		output: {M: 1},
		
	},
	{
		input: "commissionnaire",
		output: {M: 1},
		
	},
	{
		input: "commissure",
		output: {F: 1},
		
	},
	{
		input: "commisération",
		output: {F: 1},
		
	},
	{
		input: "commode",
		output: {F: 1},
		
	},
	{
		input: "commode",
		output: {M: 1},
		
	},
	{
		input: "commodité",
		output: {F: 1},
		
	},
	{
		input: "commodore",
		output: {M: 1},
		
	},
	{
		input: "commotion",
		output: {F: 1},
		
	},
	{
		input: "commu",
		output: {F: 1},
		
	},
	{
		input: "communal",
		output: {M: 1},
		
	},
	{
		input: "communale",
		output: {F: 1},
		
	},
	{
		input: "communalisation",
		output: {F: 1},
		
	},
	{
		input: "communalisme",
		output: {M: 1},
		
	},
	{
		input: "communard",
		output: {M: 1},
		
	},
	{
		input: "communautarisation",
		output: {F: 1},
		
	},
	{
		input: "communautarisme",
		output: {M: 1},
		
	},
	{
		input: "communaute",
		output: {F: 1},
		
	},
	{
		input: "communauté",
		output: {F: 1},
		
	},
	{
		input: "communauté",
		output: {M: 1},
		
	},
	{
		input: "commune",
		output: {F: 1},
		
	},
	{
		input: "communes",
		output: {F: 1},
		
	},
	{
		input: "communi",
		output: {F: 1},
		
	},
	{
		input: "communiant",
		output: {M: 1},
		
	},
	{
		input: "communica",
		output: {F: 1},
		
	},
	{
		input: "communicabilité",
		output: {F: 1},
		
	},
	{
		input: "communicant",
		output: {M: 1},
		
	},
	{
		input: "communicateur",
		output: {M: 1},
		
	},
	{
		input: "communication",
		output: {F: 1},
		
	},
	{
		input: "communion",
		output: {F: 1},
		
	},
	{
		input: "communiquant",
		output: {M: 1},
		
	},
	{
		input: "communique",
		output: {F: 1},
		
	},
	{
		input: "communique",
		output: {M: 1},
		
	},
	{
		input: "communiqué",
		output: {M: 1},
		
	},
	{
		input: "communis",
		output: {F: 1},
		
	},
	{
		input: "communisation",
		output: {F: 1},
		
	},
	{
		input: "communisme",
		output: {M: 1},
		
	},
	{
		input: "communitas",
		output: {F: 1},
		
	},
	{
		input: "commutateur",
		output: {M: 1},
		
	},
	{
		input: "commutation",
		output: {F: 1},
		
	},
	{
		input: "commutativité",
		output: {F: 1},
		
	},
	{
		input: "commère",
		output: {F: 1},
		
	},
	{
		input: "commémoration",
		output: {F: 1},
		
	},
	{
		input: "commérage",
		output: {M: 1},
		
	},
	{
		input: "comorbidité",
		output: {F: 1},
		
	},
	{
		input: "comorien",
		output: {M: 1},
		
	},
	{
		input: "compa",
		output: {F: 1},
		
	},
	{
		input: "compacité",
		output: {F: 1},
		
	},
	{
		input: "compact",
		output: {M: 1},
		
	},
	{
		input: "compactage",
		output: {M: 1},
		
	},
	{
		input: "compacteur",
		output: {M: 1},
		
	},
	{
		input: "compaction",
		output: {F: 1},
		
	},
	{
		input: "compagne",
		output: {F: 1},
		
	},
	{
		input: "compagnie",
		output: {F: 1},
		
	},
	{
		input: "compagnon",
		output: {M: 1},
		
	},
	{
		input: "compagnonnage",
		output: {M: 1},
		
	},
	{
		input: "compaignie",
		output: {F: 1},
		
	},
	{
		input: "comparabilité",
		output: {F: 1},
		
	},
	{
		input: "comparación",
		output: {F: 1},
		
	},
	{
		input: "comparaison",
		output: {F: 1},
		
	},
	{
		input: "comparant",
		output: {M: 1},
		
	},
	{
		input: "comparateur",
		output: {M: 1},
		
	},
	{
		input: "comparatif",
		output: {M: 1},
		
	},
	{
		input: "comparatisme",
		output: {M: 1},
		
	},
	{
		input: "comparatiste",
		output: {M: 1},
		
	},
	{
		input: "comparative",
		output: {F: 1},
		
	},
	{
		input: "compare",
		output: {F: 1},
		
	},
	{
		input: "compare",
		output: {M: 1},
		
	},
	{
		input: "comparse",
		output: {M: 1},
		
	},
	{
		input: "compartiment",
		output: {M: 1},
		
	},
	{
		input: "compartimentage",
		output: {M: 1},
		
	},
	{
		input: "compartimentation",
		output: {F: 1},
		
	},
	{
		input: "comparution",
		output: {F: 1},
		
	},
	{
		input: "comparé",
		output: {M: 1},
		
	},
	{
		input: "compas",
		output: {M: 1},
		
	},
	{
		input: "compassion",
		output: {F: 1},
		
	},
	{
		input: "compatibilité",
		output: {F: 1},
		
	},
	{
		input: "compatriote",
		output: {F: 1},
		
	},
	{
		input: "compatriote",
		output: {M: 1},
		
	},
	{
		input: "compañía",
		output: {F: 1},
		
	},
	{
		input: "compendium",
		output: {M: 1},
		
	},
	{
		input: "compensateur",
		output: {M: 1},
		
	},
	{
		input: "compensation",
		output: {F: 1},
		
	},
	{
		input: "competence",
		output: {F: 1},
		
	},
	{
		input: "competencia",
		output: {F: 1},
		
	},
	{
		input: "compilateur",
		output: {M: 1},
		
	},
	{
		input: "compilation",
		output: {F: 1},
		
	},
	{
		input: "complainte",
		output: {F: 1},
		
	},
	{
		input: "complaisance",
		output: {F: 1},
		
	},
	{
		input: "complejidad",
		output: {F: 1},
		
	},
	{
		input: "complexation",
		output: {F: 1},
		
	},
	{
		input: "complexe",
		output: {F: 1},
		
	},
	{
		input: "complexe",
		output: {M: 1},
		
	},
	{
		input: "complexification",
		output: {F: 1},
		
	},
	{
		input: "complexion",
		output: {F: 1},
		
	},
	{
		input: "complexite",
		output: {F: 1},
		
	},
	{
		input: "complexité",
		output: {F: 1},
		
	},
	{
		input: "compliance",
		output: {F: 1},
		
	},
	{
		input: "complication",
		output: {F: 1},
		
	},
	{
		input: "complice",
		output: {F: 1},
		
	},
	{
		input: "complice",
		output: {M: 1},
		
	},
	{
		input: "complicité",
		output: {F: 1},
		
	},
	{
		input: "compliment",
		output: {M: 1},
		
	},
	{
		input: "compliqué",
		output: {M: 1},
		
	},
	{
		input: "complot",
		output: {M: 1},
		
	},
	{
		input: "comploteur",
		output: {M: 1},
		
	},
	{
		input: "complètent",
		output: {F: 1},
		
	},
	{
		input: "complément",
		output: {M: 1},
		
	},
	{
		input: "complémentarité",
		output: {F: 1},
		
	},
	{
		input: "complémentation",
		output: {F: 1},
		
	},
	{
		input: "complémenteur",
		output: {M: 1},
		
	},
	{
		input: "complétant",
		output: {F: 1},
		
	},
	{
		input: "complétant",
		output: {M: 1},
		
	},
	{
		input: "complétion",
		output: {F: 1},
		
	},
	{
		input: "complétive",
		output: {F: 1},
		
	},
	{
		input: "complétude",
		output: {F: 1},
		
	},
	{
		input: "compo",
		output: {F: 1},
		
	},
	{
		input: "compoix",
		output: {M: 1},
		
	},
	{
		input: "componction",
		output: {F: 1},
		
	},
	{
		input: "comportement",
		output: {M: 1},
		
	},
	{
		input: "comportementalisme",
		output: {M: 1},
		
	},
	{
		input: "composant",
		output: {F: 1},
		
	},
	{
		input: "composant",
		output: {M: 1},
		
	},
	{
		input: "composante",
		output: {F: 1},
		
	},
	{
		input: "compose",
		output: {F: 1},
		
	},
	{
		input: "compose",
		output: {M: 1},
		
	},
	{
		input: "composent",
		output: {F: 1},
		
	},
	{
		input: "composent",
		output: {M: 1},
		
	},
	{
		input: "composición",
		output: {F: 1},
		
	},
	{
		input: "composite",
		output: {M: 1},
		
	},
	{
		input: "compositeur",
		output: {M: 1},
		
	},
	{
		input: "compositio",
		output: {F: 1},
		
	},
	{
		input: "composition",
		output: {F: 1},
		
	},
	{
		input: "compositionnalité",
		output: {F: 1},
		
	},
	{
		input: "compositrice",
		output: {F: 1},
		
	},
	{
		input: "compossibilité",
		output: {F: 1},
		
	},
	{
		input: "compost",
		output: {M: 1},
		
	},
	{
		input: "compostage",
		output: {M: 1},
		
	},
	{
		input: "composteur",
		output: {M: 1},
		
	},
	{
		input: "composé",
		output: {M: 1},
		
	},
	{
		input: "composée",
		output: {F: 1},
		
	},
	{
		input: "compote",
		output: {F: 1},
		
	},
	{
		input: "compotier",
		output: {M: 1},
		
	},
	{
		input: "comprehension",
		output: {F: 1},
		
	},
	{
		input: "comprenais",
		output: {F: 1},
		
	},
	{
		input: "comprenais",
		output: {M: 1},
		
	},
	{
		input: "comprends",
		output: {F: 1},
		
	},
	{
		input: "comprends",
		output: {M: 1},
		
	},
	{
		input: "comprenons",
		output: {F: 1},
		
	},
	{
		input: "comprenons",
		output: {M: 1},
		
	},
	{
		input: "comprensión",
		output: {F: 1},
		
	},
	{
		input: "compresse",
		output: {F: 1},
		
	},
	{
		input: "compresseur",
		output: {M: 1},
		
	},
	{
		input: "compressibilité",
		output: {F: 1},
		
	},
	{
		input: "compression",
		output: {F: 1},
		
	},
	{
		input: "comprimé",
		output: {M: 1},
		
	},
	{
		input: "compromettre",
		output: {F: 1},
		
	},
	{
		input: "compromis",
		output: {M: 1},
		
	},
	{
		input: "compromission",
		output: {F: 1},
		
	},
	{
		input: "compré",
		output: {F: 1},
		
	},
	{
		input: "compréhensibilité",
		output: {F: 1},
		
	},
	{
		input: "compréhension",
		output: {F: 1},
		
	},
	{
		input: "comptabilisation",
		output: {F: 1},
		
	},
	{
		input: "comptabilité",
		output: {F: 1},
		
	},
	{
		input: "comptable",
		output: {F: 1},
		
	},
	{
		input: "comptable",
		output: {M: 1},
		
	},
	{
		input: "comptage",
		output: {M: 1},
		
	},
	{
		input: "compte",
		output: {F: 1},
		
	},
	{
		input: "compte",
		output: {M: 1},
		
	},
	{
		input: "compterendu",
		output: {M: 1},
		
	},
	{
		input: "compteur",
		output: {M: 1},
		
	},
	{
		input: "comptine",
		output: {F: 1},
		
	},
	{
		input: "comptoir",
		output: {M: 1},
		
	},
	{
		input: "compulsion",
		output: {F: 1},
		
	},
	{
		input: "comput",
		output: {M: 1},
		
	},
	{
		input: "computation",
		output: {F: 1},
		
	},
	{
		input: "computer",
		output: {M: 1},
		
	},
	{
		input: "computo",
		output: {M: 1},
		
	},
	{
		input: "compère",
		output: {M: 1},
		
	},
	{
		input: "compé",
		output: {F: 1},
		
	},
	{
		input: "compénétration",
		output: {F: 1},
		
	},
	{
		input: "compérage",
		output: {M: 1},
		
	},
	{
		input: "compétence",
		output: {F: 1},
		
	},
	{
		input: "compétiteur",
		output: {M: 1},
		
	},
	{
		input: "compétition",
		output: {F: 1},
		
	},
	{
		input: "compétitivité",
		output: {F: 1},
		
	},
	{
		input: "compétivité",
		output: {F: 1},
		
	},
	{
		input: "comtat",
		output: {M: 1},
		
	},
	{
		input: "comte",
		output: {M: 1},
		
	},
	{
		input: "comtesse",
		output: {F: 1},
		
	},
	{
		input: "comté",
		output: {F: 1},
		
	},
	{
		input: "comté",
		output: {M: 1},
		
	},
	{
		input: "comunauté",
		output: {F: 1},
		
	},
	{
		input: "comunicación",
		output: {F: 1},
		
	},
	{
		input: "comunidad",
		output: {F: 1},
		
	},
	{
		input: "comunità",
		output: {F: 1},
		
	},
	{
		input: "comète",
		output: {F: 1},
		
	},
	{
		input: "comédie",
		output: {F: 1},
		
	},
	{
		input: "comédien",
		output: {M: 1},
		
	},
	{
		input: "comédienne",
		output: {F: 1},
		
	},
	{
		input: "con",
		output: {F: 1},
		
	},
	{
		input: "con",
		output: {M: 1},
		
	},
	{
		input: "conatus",
		output: {M: 1},
		
	},
	{
		input: "concassage",
		output: {M: 1},
		
	},
	{
		input: "concasseur",
		output: {M: 1},
		
	},
	{
		input: "concaténation",
		output: {F: 1},
		
	},
	{
		input: "concavité",
		output: {F: 1},
		
	},
	{
		input: "concelho",
		output: {M: 1},
		
	},
	{
		input: "concensus",
		output: {M: 1},
		
	},
	{
		input: "concentración",
		output: {F: 1},
		
	},
	{
		input: "concentrateur",
		output: {M: 1},
		
	},
	{
		input: "concentration",
		output: {F: 1},
		
	},
	{
		input: "concentré",
		output: {M: 1},
		
	},
	{
		input: "concep",
		output: {F: 1},
		
	},
	{
		input: "concepción",
		output: {F: 1},
		
	},
	{
		input: "concept",
		output: {F: 1},
		
	},
	{
		input: "concept",
		output: {M: 1},
		
	},
	{
		input: "concepteur",
		output: {M: 1},
		
	},
	{
		input: "conception",
		output: {F: 1},
		
	},
	{
		input: "conception",
		output: {M: 1},
		
	},
	{
		input: "concepto",
		output: {M: 1},
		
	},
	{
		input: "conceptualisation",
		output: {F: 1},
		
	},
	{
		input: "conceptualisme",
		output: {M: 1},
		
	},
	{
		input: "conceptualité",
		output: {F: 1},
		
	},
	{
		input: "conceptuel",
		output: {M: 1},
		
	},
	{
		input: "concerné",
		output: {M: 1},
		
	},
	{
		input: "concert",
		output: {M: 1},
		
	},
	{
		input: "concertation",
		output: {F: 1},
		
	},
	{
		input: "concerto",
		output: {M: 1},
		
	},
	{
		input: "concesión",
		output: {F: 1},
		
	},
	{
		input: "concession",
		output: {F: 1},
		
	},
	{
		input: "concessionnaire",
		output: {M: 1},
		
	},
	{
		input: "concessive",
		output: {F: 1},
		
	},
	{
		input: "concetto",
		output: {M: 1},
		
	},
	{
		input: "concevabilité",
		output: {F: 1},
		
	},
	{
		input: "concevait",
		output: {F: 1},
		
	},
	{
		input: "concevoir",
		output: {F: 1},
		
	},
	{
		input: "concevons",
		output: {F: 1},
		
	},
	{
		input: "concevons",
		output: {M: 1},
		
	},
	{
		input: "conchyliculture",
		output: {F: 1},
		
	},
	{
		input: "conciencia",
		output: {F: 1},
		
	},
	{
		input: "concierge",
		output: {F: 1},
		
	},
	{
		input: "concierge",
		output: {M: 1},
		
	},
	{
		input: "conciergerie",
		output: {F: 1},
		
	},
	{
		input: "concile",
		output: {M: 1},
		
	},
	{
		input: "conciliabule",
		output: {M: 1},
		
	},
	{
		input: "conciliateur",
		output: {M: 1},
		
	},
	{
		input: "conciliation",
		output: {F: 1},
		
	},
	{
		input: "concision",
		output: {F: 1},
		
	},
	{
		input: "concitoyen",
		output: {M: 1},
		
	},
	{
		input: "conclave",
		output: {M: 1},
		
	},
	{
		input: "conclusion",
		output: {F: 1},
		
	},
	{
		input: "conclusión",
		output: {F: 1},
		
	},
	{
		input: "concombre",
		output: {M: 1},
		
	},
	{
		input: "concomitance",
		output: {F: 1},
		
	},
	{
		input: "concordance",
		output: {F: 1},
		
	},
	{
		input: "concordat",
		output: {M: 1},
		
	},
	{
		input: "concorde",
		output: {F: 1},
		
	},
	{
		input: "concordia",
		output: {F: 1},
		
	},
	{
		input: "concordisme",
		output: {M: 1},
		
	},
	{
		input: "concours",
		output: {M: 1},
		
	},
	{
		input: "concrescence",
		output: {F: 1},
		
	},
	{
		input: "concret",
		output: {M: 1},
		
	},
	{
		input: "concrétion",
		output: {F: 1},
		
	},
	{
		input: "concrétisation",
		output: {F: 1},
		
	},
	{
		input: "concrétude",
		output: {F: 1},
		
	},
	{
		input: "concubin",
		output: {M: 1},
		
	},
	{
		input: "concubinage",
		output: {M: 1},
		
	},
	{
		input: "concubinat",
		output: {M: 1},
		
	},
	{
		input: "concubine",
		output: {F: 1},
		
	},
	{
		input: "concupiscence",
		output: {F: 1},
		
	},
	{
		input: "concupiscible",
		output: {M: 1},
		
	},
	{
		input: "concur",
		output: {F: 1},
		
	},
	{
		input: "concurence",
		output: {F: 1},
		
	},
	{
		input: "concurrence",
		output: {F: 1},
		
	},
	{
		input: "concurrence",
		output: {M: 1},
		
	},
	{
		input: "concurrent",
		output: {M: 1},
		
	},
	{
		input: "concurrente",
		output: {F: 1},
		
	},
	{
		input: "concussion",
		output: {F: 1},
		
	},
	{
		input: "concédant",
		output: {M: 1},
		
	},
	{
		input: "concélébration",
		output: {F: 1},
		
	},
	{
		input: "condamnation",
		output: {F: 1},
		
	},
	{
		input: "condamne",
		output: {F: 1},
		
	},
	{
		input: "condamne",
		output: {M: 1},
		
	},
	{
		input: "condensat",
		output: {M: 1},
		
	},
	{
		input: "condensateur",
		output: {M: 1},
		
	},
	{
		input: "condensation",
		output: {F: 1},
		
	},
	{
		input: "condenseur",
		output: {M: 1},
		
	},
	{
		input: "condensât",
		output: {M: 1},
		
	},
	{
		input: "condensé",
		output: {M: 1},
		
	},
	{
		input: "condesa",
		output: {F: 1},
		
	},
	{
		input: "condescendance",
		output: {F: 1},
		
	},
	{
		input: "condi",
		output: {F: 1},
		
	},
	{
		input: "condición",
		output: {F: 1},
		
	},
	{
		input: "condiment",
		output: {M: 1},
		
	},
	{
		input: "condisciple",
		output: {M: 1},
		
	},
	{
		input: "condition",
		output: {F: 1},
		
	},
	{
		input: "conditionnalité",
		output: {F: 1},
		
	},
	{
		input: "conditionnante",
		output: {F: 1},
		
	},
	{
		input: "conditionnanté",
		output: {F: 1},
		
	},
	{
		input: "conditionnel",
		output: {M: 1},
		
	},
	{
		input: "conditionnelle",
		output: {F: 1},
		
	},
	{
		input: "conditionnement",
		output: {M: 1},
		
	},
	{
		input: "conditions",
		output: {F: 1},
		
	},
	{
		input: "condizioni",
		output: {M: 1},
		
	},
	{
		input: "condom",
		output: {M: 1},
		
	},
	{
		input: "condominium",
		output: {M: 1},
		
	},
	{
		input: "condor",
		output: {M: 1},
		
	},
	{
		input: "condottiere",
		output: {M: 1},
		
	},
	{
		input: "conducta",
		output: {F: 1},
		
	},
	{
		input: "conductance",
		output: {F: 1},
		
	},
	{
		input: "conducteur",
		output: {M: 1},
		
	},
	{
		input: "conductibilité",
		output: {F: 1},
		
	},
	{
		input: "conduction",
		output: {F: 1},
		
	},
	{
		input: "conductivité",
		output: {F: 1},
		
	},
	{
		input: "conductrice",
		output: {F: 1},
		
	},
	{
		input: "conduisirent",
		output: {M: 1},
		
	},
	{
		input: "conduisis",
		output: {M: 1},
		
	},
	{
		input: "conduisit",
		output: {F: 1},
		
	},
	{
		input: "conduite",
		output: {F: 1},
		
	},
	{
		input: "conduitte",
		output: {F: 1},
		
	},
	{
		input: "condyle",
		output: {M: 1},
		
	},
	{
		input: "conf",
		output: {F: 1},
		
	},
	{
		input: "confection",
		output: {F: 1},
		
	},
	{
		input: "conference",
		output: {F: 1},
		
	},
	{
		input: "confesseur",
		output: {M: 1},
		
	},
	{
		input: "confession",
		output: {F: 1},
		
	},
	{
		input: "confessionnal",
		output: {M: 1},
		
	},
	{
		input: "confessionnalisation",
		output: {F: 1},
		
	},
	{
		input: "confessionnalisme",
		output: {M: 1},
		
	},
	{
		input: "confessionnalité",
		output: {F: 1},
		
	},
	{
		input: "confia",
		output: {F: 1},
		
	},
	{
		input: "confiance",
		output: {F: 1},
		
	},
	{
		input: "confianza",
		output: {F: 1},
		
	},
	{
		input: "confidence",
		output: {F: 1},
		
	},
	{
		input: "confident",
		output: {M: 1},
		
	},
	{
		input: "confidente",
		output: {F: 1},
		
	},
	{
		input: "confidentialité",
		output: {F: 1},
		
	},
	{
		input: "confie",
		output: {F: 1},
		
	},
	{
		input: "confie",
		output: {M: 1},
		
	},
	{
		input: "configuración",
		output: {F: 1},
		
	},
	{
		input: "configuration",
		output: {F: 1},
		
	},
	{
		input: "confinement",
		output: {M: 1},
		
	},
	{
		input: "confirma",
		output: {M: 1},
		
	},
	{
		input: "confirmant",
		output: {M: 1},
		
	},
	{
		input: "confirmation",
		output: {F: 1},
		
	},
	{
		input: "confiscation",
		output: {F: 1},
		
	},
	{
		input: "confiserie",
		output: {F: 1},
		
	},
	{
		input: "confiseur",
		output: {M: 1},
		
	},
	{
		input: "confit",
		output: {M: 1},
		
	},
	{
		input: "confiture",
		output: {F: 1},
		
	},
	{
		input: "conflagration",
		output: {F: 1},
		
	},
	{
		input: "conflictualisation",
		output: {F: 1},
		
	},
	{
		input: "conflictualité",
		output: {F: 1},
		
	},
	{
		input: "conflit",
		output: {M: 1},
		
	},
	{
		input: "confluence",
		output: {F: 1},
		
	},
	{
		input: "confluent",
		output: {M: 1},
		
	},
	{
		input: "conformation",
		output: {F: 1},
		
	},
	{
		input: "conformisme",
		output: {M: 1},
		
	},
	{
		input: "conformiste",
		output: {M: 1},
		
	},
	{
		input: "conformité",
		output: {F: 1},
		
	},
	{
		input: "confort",
		output: {M: 1},
		
	},
	{
		input: "confortation",
		output: {F: 1},
		
	},
	{
		input: "conforte",
		output: {F: 1},
		
	},
	{
		input: "conforte",
		output: {M: 1},
		
	},
	{
		input: "confrairie",
		output: {F: 1},
		
	},
	{
		input: "confraternité",
		output: {F: 1},
		
	},
	{
		input: "confrontación",
		output: {F: 1},
		
	},
	{
		input: "confrontation",
		output: {F: 1},
		
	},
	{
		input: "confronte",
		output: {F: 1},
		
	},
	{
		input: "confronte",
		output: {M: 1},
		
	},
	{
		input: "confronto",
		output: {M: 1},
		
	},
	{
		input: "confrère",
		output: {M: 1},
		
	},
	{
		input: "confrérie",
		output: {F: 1},
		
	},
	{
		input: "confucianisme",
		output: {M: 1},
		
	},
	{
		input: "confus",
		output: {M: 1},
		
	},
	{
		input: "confusion",
		output: {F: 1},
		
	},
	{
		input: "confusionnisme",
		output: {M: 1},
		
	},
	{
		input: "confusión",
		output: {F: 1},
		
	},
	{
		input: "confé",
		output: {F: 1},
		
	},
	{
		input: "confédéralisme",
		output: {M: 1},
		
	},
	{
		input: "confédération",
		output: {F: 1},
		
	},
	{
		input: "conférence",
		output: {F: 1},
		
	},
	{
		input: "conférencier",
		output: {M: 1},
		
	},
	{
		input: "conférencière",
		output: {F: 1},
		
	},
	{
		input: "congestion",
		output: {F: 1},
		
	},
	{
		input: "conglomérat",
		output: {M: 1},
		
	},
	{
		input: "congnoissance",
		output: {F: 1},
		
	},
	{
		input: "congolais",
		output: {M: 1},
		
	},
	{
		input: "congre",
		output: {M: 1},
		
	},
	{
		input: "congres",
		output: {M: 1},
		
	},
	{
		input: "congressiste",
		output: {M: 1},
		
	},
	{
		input: "congruence",
		output: {F: 1},
		
	},
	{
		input: "congrès",
		output: {M: 1},
		
	},
	{
		input: "congréganiste",
		output: {M: 1},
		
	},
	{
		input: "congrégation",
		output: {F: 1},
		
	},
	{
		input: "congère",
		output: {F: 1},
		
	},
	{
		input: "congé",
		output: {M: 1},
		
	},
	{
		input: "congédiement",
		output: {M: 1},
		
	},
	{
		input: "congélateur",
		output: {M: 1},
		
	},
	{
		input: "congélation",
		output: {F: 1},
		
	},
	{
		input: "congénère",
		output: {M: 1},
		
	},
	{
		input: "conicité",
		output: {F: 1},
		
	},
	{
		input: "conifère",
		output: {M: 1},
		
	},
	{
		input: "conique",
		output: {F: 1},
		
	},
	{
		input: "conjecture",
		output: {F: 1},
		
	},
	{
		input: "conjoint",
		output: {M: 1},
		
	},
	{
		input: "conjointe",
		output: {F: 1},
		
	},
	{
		input: "conjointure",
		output: {F: 1},
		
	},
	{
		input: "conjonctif",
		output: {M: 1},
		
	},
	{
		input: "conjonction",
		output: {F: 1},
		
	},
	{
		input: "conjonctive",
		output: {F: 1},
		
	},
	{
		input: "conjonctivite",
		output: {F: 1},
		
	},
	{
		input: "conjoncture",
		output: {F: 1},
		
	},
	{
		input: "conjugaison",
		output: {F: 1},
		
	},
	{
		input: "conjugalité",
		output: {F: 1},
		
	},
	{
		input: "conjugué",
		output: {M: 1},
		
	},
	{
		input: "conjunto",
		output: {M: 1},
		
	},
	{
		input: "conjuration",
		output: {F: 1},
		
	},
	{
		input: "connais",
		output: {F: 1},
		
	},
	{
		input: "connais",
		output: {M: 1},
		
	},
	{
		input: "connaisance",
		output: {F: 1},
		
	},
	{
		input: "connaissais",
		output: {F: 1},
		
	},
	{
		input: "connaissais",
		output: {M: 1},
		
	},
	{
		input: "connaissance",
		output: {F: 1},
		
	},
	{
		input: "connaissances",
		output: {F: 1},
		
	},
	{
		input: "connaissant",
		output: {F: 1},
		
	},
	{
		input: "connaissant",
		output: {M: 1},
		
	},
	{
		input: "connaisse",
		output: {F: 1},
		
	},
	{
		input: "connaissement",
		output: {M: 1},
		
	},
	{
		input: "connaisseur",
		output: {M: 1},
		
	},
	{
		input: "connaissez",
		output: {F: 1},
		
	},
	{
		input: "connaissions",
		output: {F: 1},
		
	},
	{
		input: "connaissons",
		output: {F: 1},
		
	},
	{
		input: "connaissons",
		output: {M: 1},
		
	},
	{
		input: "connard",
		output: {M: 1},
		
	},
	{
		input: "connaturalité",
		output: {F: 1},
		
	},
	{
		input: "conne",
		output: {F: 1},
		
	},
	{
		input: "connecteur",
		output: {M: 1},
		
	},
	{
		input: "connectif",
		output: {M: 1},
		
	},
	{
		input: "connection",
		output: {F: 1},
		
	},
	{
		input: "connectique",
		output: {F: 1},
		
	},
	{
		input: "connectivité",
		output: {F: 1},
		
	},
	{
		input: "connerie",
		output: {F: 1},
		
	},
	{
		input: "connexion",
		output: {F: 1},
		
	},
	{
		input: "connexionnisme",
		output: {M: 1},
		
	},
	{
		input: "connexité",
		output: {F: 1},
		
	},
	{
		input: "connivence",
		output: {F: 1},
		
	},
	{
		input: "connoissance",
		output: {F: 1},
		
	},
	{
		input: "connotation",
		output: {F: 1},
		
	},
	{
		input: "connétable",
		output: {M: 1},
		
	},
	{
		input: "connétablie",
		output: {F: 1},
		
	},
	{
		input: "conoscenza",
		output: {F: 1},
		
	},
	{
		input: "conque",
		output: {F: 1},
		
	},
	{
		input: "conqueste",
		output: {F: 1},
		
	},
	{
		input: "conquete",
		output: {F: 1},
		
	},
	{
		input: "conquista",
		output: {F: 1},
		
	},
	{
		input: "conquistador",
		output: {M: 1},
		
	},
	{
		input: "conquérant",
		output: {M: 1},
		
	},
	{
		input: "conquête",
		output: {F: 1},
		
	},
	{
		input: "cons",
		output: {F: 1},
		
	},
	{
		input: "consanguin",
		output: {M: 1},
		
	},
	{
		input: "consanguinité",
		output: {F: 1},
		
	},
	{
		input: "conscience",
		output: {F: 1},
		
	},
	{
		input: "consciencisme",
		output: {M: 1},
		
	},
	{
		input: "conscient",
		output: {M: 1},
		
	},
	{
		input: "conscientisation",
		output: {F: 1},
		
	},
	{
		input: "conscription",
		output: {F: 1},
		
	},
	{
		input: "conscrit",
		output: {M: 1},
		
	},
	{
		input: "consecuencia",
		output: {F: 1},
		
	},
	{
		input: "conseguenze",
		output: {M: 1},
		
	},
	{
		input: "conseil",
		output: {M: 1},
		
	},
	{
		input: "conseille",
		output: {F: 1},
		
	},
	{
		input: "conseille",
		output: {M: 1},
		
	},
	{
		input: "conseiller",
		output: {F: 1},
		
	},
	{
		input: "conseiller",
		output: {M: 1},
		
	},
	{
		input: "conseillère",
		output: {F: 1},
		
	},
	{
		input: "consensualisme",
		output: {M: 1},
		
	},
	{
		input: "consensus",
		output: {M: 1},
		
	},
	{
		input: "consentement",
		output: {M: 1},
		
	},
	{
		input: "consequence",
		output: {F: 1},
		
	},
	{
		input: "conservación",
		output: {F: 1},
		
	},
	{
		input: "conservateur",
		output: {M: 1},
		
	},
	{
		input: "conservation",
		output: {F: 1},
		
	},
	{
		input: "conservatisme",
		output: {M: 1},
		
	},
	{
		input: "conservatoire",
		output: {M: 1},
		
	},
	{
		input: "conservatrice",
		output: {F: 1},
		
	},
	{
		input: "conserve",
		output: {F: 1},
		
	},
	{
		input: "conserve",
		output: {M: 1},
		
	},
	{
		input: "conserverie",
		output: {F: 1},
		
	},
	{
		input: "consideración",
		output: {F: 1},
		
	},
	{
		input: "consideration",
		output: {F: 1},
		
	},
	{
		input: "considérant",
		output: {M: 1},
		
	},
	{
		input: "considération",
		output: {F: 1},
		
	},
	{
		input: "considérons",
		output: {F: 1},
		
	},
	{
		input: "consignataire",
		output: {M: 1},
		
	},
	{
		input: "consignation",
		output: {F: 1},
		
	},
	{
		input: "consigne",
		output: {F: 1},
		
	},
	{
		input: "consigne",
		output: {M: 1},
		
	},
	{
		input: "consilium",
		output: {M: 1},
		
	},
	{
		input: "consistance",
		output: {F: 1},
		
	},
	{
		input: "consistoire",
		output: {M: 1},
		
	},
	{
		input: "consolament",
		output: {M: 1},
		
	},
	{
		input: "consolateur",
		output: {M: 1},
		
	},
	{
		input: "consolation",
		output: {F: 1},
		
	},
	{
		input: "console",
		output: {F: 1},
		
	},
	{
		input: "console",
		output: {M: 1},
		
	},
	{
		input: "consoler",
		output: {F: 1},
		
	},
	{
		input: "consoler",
		output: {M: 1},
		
	},
	{
		input: "consolidación",
		output: {F: 1},
		
	},
	{
		input: "consolidation",
		output: {F: 1},
		
	},
	{
		input: "consom",
		output: {F: 1},
		
	},
	{
		input: "consomma",
		output: {F: 1},
		
	},
	{
		input: "consommateur",
		output: {M: 1},
		
	},
	{
		input: "consommation",
		output: {F: 1},
		
	},
	{
		input: "consommatrice",
		output: {F: 1},
		
	},
	{
		input: "consomme",
		output: {F: 1},
		
	},
	{
		input: "consommé",
		output: {M: 1},
		
	},
	{
		input: "consomption",
		output: {F: 1},
		
	},
	{
		input: "consonance",
		output: {F: 1},
		
	},
	{
		input: "consonantisme",
		output: {M: 1},
		
	},
	{
		input: "consonnance",
		output: {F: 1},
		
	},
	{
		input: "consonne",
		output: {F: 1},
		
	},
	{
		input: "consortium",
		output: {M: 1},
		
	},
	{
		input: "conspirateur",
		output: {M: 1},
		
	},
	{
		input: "conspiration",
		output: {F: 1},
		
	},
	{
		input: "constable",
		output: {M: 1},
		
	},
	{
		input: "constance",
		output: {F: 1},
		
	},
	{
		input: "constant",
		output: {M: 1},
		
	},
	{
		input: "constat",
		output: {M: 1},
		
	},
	{
		input: "constatation",
		output: {F: 1},
		
	},
	{
		input: "constation",
		output: {F: 1},
		
	},
	{
		input: "constatons",
		output: {M: 1},
		
	},
	{
		input: "constellation",
		output: {F: 1},
		
	},
	{
		input: "consternation",
		output: {F: 1},
		
	},
	{
		input: "consti",
		output: {F: 1},
		
	},
	{
		input: "constipation",
		output: {F: 1},
		
	},
	{
		input: "constitu",
		output: {F: 1},
		
	},
	{
		input: "constituant",
		output: {F: 1},
		
	},
	{
		input: "constituant",
		output: {M: 1},
		
	},
	{
		input: "constituante",
		output: {F: 1},
		
	},
	{
		input: "constitución",
		output: {F: 1},
		
	},
	{
		input: "constitutif",
		output: {M: 1},
		
	},
	{
		input: "constitution",
		output: {F: 1},
		
	},
	{
		input: "constitutionalité",
		output: {F: 1},
		
	},
	{
		input: "constitutionnalisation",
		output: {F: 1},
		
	},
	{
		input: "constitutionnalisme",
		output: {M: 1},
		
	},
	{
		input: "constitutionnaliste",
		output: {M: 1},
		
	},
	{
		input: "constitutionnalité",
		output: {F: 1},
		
	},
	{
		input: "constitutionnel",
		output: {M: 1},
		
	},
	{
		input: "constriction",
		output: {F: 1},
		
	},
	{
		input: "construc",
		output: {F: 1},
		
	},
	{
		input: "construccion",
		output: {F: 1},
		
	},
	{
		input: "construcción",
		output: {F: 1},
		
	},
	{
		input: "construcciôn",
		output: {F: 1},
		
	},
	{
		input: "constructeur",
		output: {M: 1},
		
	},
	{
		input: "constructibilité",
		output: {F: 1},
		
	},
	{
		input: "construction",
		output: {F: 1},
		
	},
	{
		input: "construction",
		output: {M: 1},
		
	},
	{
		input: "constructivisme",
		output: {M: 1},
		
	},
	{
		input: "constructivité",
		output: {F: 1},
		
	},
	{
		input: "consubstantialité",
		output: {F: 1},
		
	},
	{
		input: "consul",
		output: {M: 1},
		
	},
	{
		input: "consulat",
		output: {M: 1},
		
	},
	{
		input: "consulta",
		output: {F: 1},
		
	},
	{
		input: "consultance",
		output: {F: 1},
		
	},
	{
		input: "consultant",
		output: {M: 1},
		
	},
	{
		input: "consultante",
		output: {F: 1},
		
	},
	{
		input: "consultation",
		output: {F: 1},
		
	},
	{
		input: "consulte",
		output: {F: 1},
		
	},
	{
		input: "consumation",
		output: {F: 1},
		
	},
	{
		input: "consume",
		output: {M: 1},
		
	},
	{
		input: "consumérisme",
		output: {M: 1},
		
	},
	{
		input: "consécration",
		output: {F: 1},
		
	},
	{
		input: "consécution",
		output: {F: 1},
		
	},
	{
		input: "conséquence",
		output: {F: 1},
		
	},
	{
		input: "conséquent",
		output: {M: 1},
		
	},
	{
		input: "conséquentialisme",
		output: {M: 1},
		
	},
	{
		input: "consœur",
		output: {F: 1},
		
	},
	{
		input: "contact",
		output: {M: 1},
		
	},
	{
		input: "contacteur",
		output: {M: 1},
		
	},
	{
		input: "contado",
		output: {M: 1},
		
	},
	{
		input: "contage",
		output: {M: 1},
		
	},
	{
		input: "contagion",
		output: {F: 1},
		
	},
	{
		input: "contagiosité",
		output: {F: 1},
		
	},
	{
		input: "container",
		output: {M: 1},
		
	},
	{
		input: "containment",
		output: {M: 1},
		
	},
	{
		input: "contaminant",
		output: {M: 1},
		
	},
	{
		input: "contamination",
		output: {F: 1},
		
	},
	{
		input: "conte",
		output: {F: 1},
		
	},
	{
		input: "conte",
		output: {M: 1},
		
	},
	{
		input: "contempla",
		output: {F: 1},
		
	},
	{
		input: "contemplateur",
		output: {M: 1},
		
	},
	{
		input: "contemplatif",
		output: {M: 1},
		
	},
	{
		input: "contemplation",
		output: {F: 1},
		
	},
	{
		input: "contemple",
		output: {F: 1},
		
	},
	{
		input: "contemple",
		output: {M: 1},
		
	},
	{
		input: "contemporain",
		output: {M: 1},
		
	},
	{
		input: "contemporanéité",
		output: {F: 1},
		
	},
	{
		input: "contempteur",
		output: {M: 1},
		
	},
	{
		input: "contenance",
		output: {F: 1},
		
	},
	{
		input: "contenant",
		output: {M: 1},
		
	},
	{
		input: "conteneur",
		output: {M: 1},
		
	},
	{
		input: "conteneurisation",
		output: {F: 1},
		
	},
	{
		input: "contentement",
		output: {M: 1},
		
	},
	{
		input: "contentieux",
		output: {M: 1},
		
	},
	{
		input: "contention",
		output: {F: 1},
		
	},
	{
		input: "contenu",
		output: {M: 1},
		
	},
	{
		input: "contes",
		output: {M: 1},
		
	},
	{
		input: "contestabilité",
		output: {F: 1},
		
	},
	{
		input: "contestataire",
		output: {M: 1},
		
	},
	{
		input: "contestation",
		output: {F: 1},
		
	},
	{
		input: "conteste",
		output: {F: 1},
		
	},
	{
		input: "conteste",
		output: {M: 1},
		
	},
	{
		input: "conteur",
		output: {M: 1},
		
	},
	{
		input: "conteuse",
		output: {F: 1},
		
	},
	{
		input: "contexte",
		output: {M: 1},
		
	},
	{
		input: "contexto",
		output: {M: 1},
		
	},
	{
		input: "contextualisation",
		output: {F: 1},
		
	},
	{
		input: "contextualisme",
		output: {M: 1},
		
	},
	{
		input: "contextualité",
		output: {F: 1},
		
	},
	{
		input: "contexture",
		output: {F: 1},
		
	},
	{
		input: "conti",
		output: {F: 1},
		
	},
	{
		input: "contient",
		output: {F: 1},
		
	},
	{
		input: "contient",
		output: {M: 1},
		
	},
	{
		input: "contiguité",
		output: {F: 1},
		
	},
	{
		input: "contiguïté",
		output: {F: 1},
		
	},
	{
		input: "continence",
		output: {F: 1},
		
	},
	{
		input: "continent",
		output: {M: 1},
		
	},
	{
		input: "continental",
		output: {M: 1},
		
	},
	{
		input: "continentalisation",
		output: {F: 1},
		
	},
	{
		input: "continentalité",
		output: {F: 1},
		
	},
	{
		input: "contingence",
		output: {F: 1},
		
	},
	{
		input: "contingent",
		output: {M: 1},
		
	},
	{
		input: "contingentement",
		output: {M: 1},
		
	},
	{
		input: "continu",
		output: {M: 1},
		
	},
	{
		input: "continuateur",
		output: {M: 1},
		
	},
	{
		input: "continuation",
		output: {F: 1},
		
	},
	{
		input: "continuatrice",
		output: {F: 1},
		
	},
	{
		input: "continuel",
		output: {M: 1},
		
	},
	{
		input: "continuelle",
		output: {F: 1},
		
	},
	{
		input: "continuidad",
		output: {F: 1},
		
	},
	{
		input: "continuisme",
		output: {M: 1},
		
	},
	{
		input: "continuite",
		output: {F: 1},
		
	},
	{
		input: "continuité",
		output: {F: 1},
		
	},
	{
		input: "continuo",
		output: {M: 1},
		
	},
	{
		input: "continuum",
		output: {M: 1},
		
	},
	{
		input: "contorsion",
		output: {F: 1},
		
	},
	{
		input: "contour",
		output: {M: 1},
		
	},
	{
		input: "contourne",
		output: {F: 1},
		
	},
	{
		input: "contournement",
		output: {M: 1},
		
	},
	{
		input: "contra",
		output: {F: 1},
		
	},
	{
		input: "contra",
		output: {M: 1},
		
	},
	{
		input: "contraceptif",
		output: {M: 1},
		
	},
	{
		input: "contraception",
		output: {F: 1},
		
	},
	{
		input: "contract",
		output: {M: 1},
		
	},
	{
		input: "contractant",
		output: {M: 1},
		
	},
	{
		input: "contracteur",
		output: {M: 1},
		
	},
	{
		input: "contractilité",
		output: {F: 1},
		
	},
	{
		input: "contraction",
		output: {F: 1},
		
	},
	{
		input: "contractualisation",
		output: {F: 1},
		
	},
	{
		input: "contractualisme",
		output: {M: 1},
		
	},
	{
		input: "contractualité",
		output: {F: 1},
		
	},
	{
		input: "contractuel",
		output: {M: 1},
		
	},
	{
		input: "contracture",
		output: {F: 1},
		
	},
	{
		input: "contrada",
		output: {F: 1},
		
	},
	{
		input: "contradicción",
		output: {F: 1},
		
	},
	{
		input: "contradicteur",
		output: {M: 1},
		
	},
	{
		input: "contradiction",
		output: {F: 1},
		
	},
	{
		input: "contradictoire",
		output: {F: 1},
		
	},
	{
		input: "contradictoire",
		output: {M: 1},
		
	},
	{
		input: "contrai",
		output: {M: 1},
		
	},
	{
		input: "contraignant",
		output: {F: 1},
		
	},
	{
		input: "contraignant",
		output: {M: 1},
		
	},
	{
		input: "contrainte",
		output: {F: 1},
		
	},
	{
		input: "contraire",
		output: {F: 1},
		
	},
	{
		input: "contraire",
		output: {M: 1},
		
	},
	{
		input: "contraposition",
		output: {F: 1},
		
	},
	{
		input: "contrarie",
		output: {F: 1},
		
	},
	{
		input: "contrarie",
		output: {M: 1},
		
	},
	{
		input: "contrariété",
		output: {F: 1},
		
	},
	{
		input: "contraste",
		output: {M: 1},
		
	},
	{
		input: "contrat",
		output: {M: 1},
		
	},
	{
		input: "contravention",
		output: {F: 1},
		
	},
	{
		input: "contreattaque",
		output: {F: 1},
		
	},
	{
		input: "contrebande",
		output: {F: 1},
		
	},
	{
		input: "contrebandier",
		output: {M: 1},
		
	},
	{
		input: "contrebasse",
		output: {F: 1},
		
	},
	{
		input: "contrebassiste",
		output: {M: 1},
		
	},
	{
		input: "contrechamp",
		output: {M: 1},
		
	},
	{
		input: "contrecoup",
		output: {M: 1},
		
	},
	{
		input: "contreculture",
		output: {F: 1},
		
	},
	{
		input: "contredanse",
		output: {F: 1},
		
	},
	{
		input: "contredire",
		output: {F: 1},
		
	},
	{
		input: "contredit",
		output: {F: 1},
		
	},
	{
		input: "contredit",
		output: {M: 1},
		
	},
	{
		input: "contreexemple",
		output: {M: 1},
		
	},
	{
		input: "contrefacteur",
		output: {M: 1},
		
	},
	{
		input: "contrefaçon",
		output: {F: 1},
		
	},
	{
		input: "contrefort",
		output: {M: 1},
		
	},
	{
		input: "contreindication",
		output: {F: 1},
		
	},
	{
		input: "contremarque",
		output: {F: 1},
		
	},
	{
		input: "contremaître",
		output: {M: 1},
		
	},
	{
		input: "contreoffensive",
		output: {F: 1},
		
	},
	{
		input: "contrepartie",
		output: {F: 1},
		
	},
	{
		input: "contrepied",
		output: {M: 1},
		
	},
	{
		input: "contreplaqué",
		output: {M: 1},
		
	},
	{
		input: "contrepoids",
		output: {M: 1},
		
	},
	{
		input: "contrepoint",
		output: {M: 1},
		
	},
	{
		input: "contrepoison",
		output: {M: 1},
		
	},
	{
		input: "contrepouvoir",
		output: {M: 1},
		
	},
	{
		input: "contreprestation",
		output: {F: 1},
		
	},
	{
		input: "contreprojet",
		output: {M: 1},
		
	},
	{
		input: "contreproposition",
		output: {F: 1},
		
	},
	{
		input: "contrepèterie",
		output: {F: 1},
		
	},
	{
		input: "contrerévolution",
		output: {F: 1},
		
	},
	{
		input: "contrescarpe",
		output: {F: 1},
		
	},
	{
		input: "contreseing",
		output: {M: 1},
		
	},
	{
		input: "contresens",
		output: {M: 1},
		
	},
	{
		input: "contretemps",
		output: {M: 1},
		
	},
	{
		input: "contretransfert",
		output: {M: 1},
		
	},
	{
		input: "contretype",
		output: {M: 1},
		
	},
	{
		input: "contrevaleur",
		output: {F: 1},
		
	},
	{
		input: "contrevallation",
		output: {F: 1},
		
	},
	{
		input: "contrevenant",
		output: {M: 1},
		
	},
	{
		input: "contreventement",
		output: {M: 1},
		
	},
	{
		input: "contrevérité",
		output: {F: 1},
		
	},
	{
		input: "contribuable",
		output: {M: 1},
		
	},
	{
		input: "contribución",
		output: {F: 1},
		
	},
	{
		input: "contributeur",
		output: {M: 1},
		
	},
	{
		input: "contribution",
		output: {F: 1},
		
	},
	{
		input: "contrition",
		output: {F: 1},
		
	},
	{
		input: "controle",
		output: {M: 1},
		
	},
	{
		input: "controlleur",
		output: {M: 1},
		
	},
	{
		input: "contrordre",
		output: {M: 1},
		
	},
	{
		input: "controverse",
		output: {F: 1},
		
	},
	{
		input: "controversia",
		output: {F: 1},
		
	},
	{
		input: "contruction",
		output: {F: 1},
		
	},
	{
		input: "contrée",
		output: {F: 1},
		
	},
	{
		input: "contrôlabilité",
		output: {F: 1},
		
	},
	{
		input: "contrôle",
		output: {F: 1},
		
	},
	{
		input: "contrôle",
		output: {M: 1},
		
	},
	{
		input: "contrôleur",
		output: {M: 1},
		
	},
	{
		input: "contrôlé",
		output: {M: 1},
		
	},
	{
		input: "contumace",
		output: {F: 1},
		
	},
	{
		input: "contusion",
		output: {F: 1},
		
	},
	{
		input: "conurbation",
		output: {F: 1},
		
	},
	{
		input: "convainc",
		output: {F: 1},
		
	},
	{
		input: "convainc",
		output: {M: 1},
		
	},
	{
		input: "convalescence",
		output: {F: 1},
		
	},
	{
		input: "convalescent",
		output: {M: 1},
		
	},
	{
		input: "convection",
		output: {F: 1},
		
	},
	{
		input: "conven",
		output: {F: 1},
		
	},
	{
		input: "convenable",
		output: {M: 1},
		
	},
	{
		input: "convenance",
		output: {F: 1},
		
	},
	{
		input: "conveniencia",
		output: {F: 1},
		
	},
	{
		input: "convenientia",
		output: {F: 1},
		
	},
	{
		input: "convent",
		output: {M: 1},
		
	},
	{
		input: "convention",
		output: {F: 1},
		
	},
	{
		input: "conventionalisme",
		output: {M: 1},
		
	},
	{
		input: "conventionnalisme",
		output: {M: 1},
		
	},
	{
		input: "conventionnalité",
		output: {F: 1},
		
	},
	{
		input: "conventionnel",
		output: {M: 1},
		
	},
	{
		input: "conventionnement",
		output: {M: 1},
		
	},
	{
		input: "convenu",
		output: {M: 1},
		
	},
	{
		input: "conver",
		output: {F: 1},
		
	},
	{
		input: "convergence",
		output: {F: 1},
		
	},
	{
		input: "convers",
		output: {M: 1},
		
	},
	{
		input: "conversación",
		output: {F: 1},
		
	},
	{
		input: "conversation",
		output: {F: 1},
		
	},
	{
		input: "converse",
		output: {F: 1},
		
	},
	{
		input: "conversion",
		output: {F: 1},
		
	},
	{
		input: "conversión",
		output: {F: 1},
		
	},
	{
		input: "converti",
		output: {M: 1},
		
	},
	{
		input: "convertibilité",
		output: {F: 1},
		
	},
	{
		input: "convertie",
		output: {F: 1},
		
	},
	{
		input: "convertisseur",
		output: {M: 1},
		
	},
	{
		input: "convexe",
		output: {M: 1},
		
	},
	{
		input: "convexité",
		output: {F: 1},
		
	},
	{
		input: "conviction",
		output: {F: 1},
		
	},
	{
		input: "convivance",
		output: {F: 1},
		
	},
	{
		input: "convive",
		output: {M: 1},
		
	},
	{
		input: "convivencia",
		output: {F: 1},
		
	},
	{
		input: "convivialité",
		output: {F: 1},
		
	},
	{
		input: "convocation",
		output: {F: 1},
		
	},
	{
		input: "convoi",
		output: {M: 1},
		
	},
	{
		input: "convoitise",
		output: {F: 1},
		
	},
	{
		input: "convolution",
		output: {F: 1},
		
	},
	{
		input: "convoque",
		output: {F: 1},
		
	},
	{
		input: "convoque",
		output: {M: 1},
		
	},
	{
		input: "convoyage",
		output: {M: 1},
		
	},
	{
		input: "convoyeur",
		output: {M: 1},
		
	},
	{
		input: "convulsion",
		output: {F: 1},
		
	},
	{
		input: "conçois",
		output: {F: 1},
		
	},
	{
		input: "conçois",
		output: {M: 1},
		
	},
	{
		input: "conçoit",
		output: {F: 1},
		
	},
	{
		input: "conçoit",
		output: {M: 1},
		
	},
	{
		input: "conçoivent",
		output: {F: 1},
		
	},
	{
		input: "cooccurrence",
		output: {F: 1},
		
	},
	{
		input: "cookie",
		output: {M: 1},
		
	},
	{
		input: "coolie",
		output: {M: 1},
		
	},
	{
		input: "coop",
		output: {F: 1},
		
	},
	{
		input: "cooperación",
		output: {F: 1},
		
	},
	{
		input: "cooperation",
		output: {F: 1},
		
	},
	{
		input: "cooptation",
		output: {F: 1},
		
	},
	{
		input: "coopé",
		output: {F: 1},
		
	},
	{
		input: "coopéra",
		output: {F: 1},
		
	},
	{
		input: "coopérant",
		output: {M: 1},
		
	},
	{
		input: "coopérateur",
		output: {M: 1},
		
	},
	{
		input: "coopération",
		output: {F: 1},
		
	},
	{
		input: "coopératisme",
		output: {M: 1},
		
	},
	{
		input: "coopérative",
		output: {F: 1},
		
	},
	{
		input: "coopérativisation",
		output: {F: 1},
		
	},
	{
		input: "coopérativité",
		output: {F: 1},
		
	},
	{
		input: "coordinateur",
		output: {M: 1},
		
	},
	{
		input: "coordination",
		output: {F: 1},
		
	},
	{
		input: "coordinatrice",
		output: {F: 1},
		
	},
	{
		input: "coordinence",
		output: {F: 1},
		
	},
	{
		input: "coordonnant",
		output: {M: 1},
		
	},
	{
		input: "coordonnateur",
		output: {M: 1},
		
	},
	{
		input: "coordonnatrice",
		output: {F: 1},
		
	},
	{
		input: "coordonnée",
		output: {F: 1},
		
	},
	{
		input: "cop",
		output: {M: 1},
		
	},
	{
		input: "copain",
		output: {M: 1},
		
	},
	{
		input: "copal",
		output: {M: 1},
		
	},
	{
		input: "coparentalité",
		output: {F: 1},
		
	},
	{
		input: "copeau",
		output: {M: 1},
		
	},
	{
		input: "copia",
		output: {F: 1},
		
	},
	{
		input: "copiage",
		output: {M: 1},
		
	},
	{
		input: "copie",
		output: {F: 1},
		
	},
	{
		input: "copie",
		output: {M: 1},
		
	},
	{
		input: "copieur",
		output: {M: 1},
		
	},
	{
		input: "copieux",
		output: {M: 1},
		
	},
	{
		input: "copilote",
		output: {M: 1},
		
	},
	{
		input: "copinage",
		output: {M: 1},
		
	},
	{
		input: "copine",
		output: {F: 1},
		
	},
	{
		input: "coping",
		output: {M: 1},
		
	},
	{
		input: "copiste",
		output: {M: 1},
		
	},
	{
		input: "copolymère",
		output: {M: 1},
		
	},
	{
		input: "coppie",
		output: {F: 1},
		
	},
	{
		input: "coprah",
		output: {M: 1},
		
	},
	{
		input: "coproculture",
		output: {F: 1},
		
	},
	{
		input: "coproduction",
		output: {F: 1},
		
	},
	{
		input: "copropriétaire",
		output: {M: 1},
		
	},
	{
		input: "copropriété",
		output: {F: 1},
		
	},
	{
		input: "coprésence",
		output: {F: 1},
		
	},
	{
		input: "coprésidence",
		output: {F: 1},
		
	},
	{
		input: "copte",
		output: {M: 1},
		
	},
	{
		input: "copulation",
		output: {F: 1},
		
	},
	{
		input: "copule",
		output: {F: 1},
		
	},
	{
		input: "copyright",
		output: {M: 1},
		
	},
	{
		input: "coq",
		output: {M: 1},
		
	},
	{
		input: "coque",
		output: {F: 1},
		
	},
	{
		input: "coquelicot",
		output: {M: 1},
		
	},
	{
		input: "coqueluche",
		output: {F: 1},
		
	},
	{
		input: "coquetier",
		output: {M: 1},
		
	},
	{
		input: "coquette",
		output: {F: 1},
		
	},
	{
		input: "coquetterie",
		output: {F: 1},
		
	},
	{
		input: "coquillage",
		output: {M: 1},
		
	},
	{
		input: "coquille",
		output: {F: 1},
		
	},
	{
		input: "coquin",
		output: {M: 1},
		
	},
	{
		input: "coquine",
		output: {F: 1},
		
	},
	{
		input: "cor",
		output: {F: 1},
		
	},
	{
		input: "cor",
		output: {M: 1},
		
	},
	{
		input: "cora",
		output: {F: 1},
		
	},
	{
		input: "corail",
		output: {M: 1},
		
	},
	{
		input: "coran",
		output: {M: 1},
		
	},
	{
		input: "corbeau",
		output: {M: 1},
		
	},
	{
		input: "corbeille",
		output: {F: 1},
		
	},
	{
		input: "corbillard",
		output: {M: 1},
		
	},
	{
		input: "cordage",
		output: {M: 1},
		
	},
	{
		input: "corde",
		output: {F: 1},
		
	},
	{
		input: "cordeau",
		output: {M: 1},
		
	},
	{
		input: "cordelette",
		output: {F: 1},
		
	},
	{
		input: "cordelier",
		output: {M: 1},
		
	},
	{
		input: "cordelière",
		output: {F: 1},
		
	},
	{
		input: "corderie",
		output: {F: 1},
		
	},
	{
		input: "cordial",
		output: {M: 1},
		
	},
	{
		input: "cordialité",
		output: {F: 1},
		
	},
	{
		input: "cordier",
		output: {M: 1},
		
	},
	{
		input: "cordillère",
		output: {F: 1},
		
	},
	{
		input: "cordon",
		output: {M: 1},
		
	},
	{
		input: "cordonnerie",
		output: {F: 1},
		
	},
	{
		input: "cordonnet",
		output: {M: 1},
		
	},
	{
		input: "cordonnier",
		output: {M: 1},
		
	},
	{
		input: "cordée",
		output: {F: 1},
		
	},
	{
		input: "coreligionnaire",
		output: {M: 1},
		
	},
	{
		input: "coresponsabilité",
		output: {F: 1},
		
	},
	{
		input: "coriandre",
		output: {F: 1},
		
	},
	{
		input: "cormoran",
		output: {M: 1},
		
	},
	{
		input: "corn",
		output: {F: 1},
		
	},
	{
		input: "corn",
		output: {M: 1},
		
	},
	{
		input: "cornac",
		output: {M: 1},
		
	},
	{
		input: "cornaline",
		output: {F: 1},
		
	},
	{
		input: "corne",
		output: {F: 1},
		
	},
	{
		input: "corneille",
		output: {F: 1},
		
	},
	{
		input: "cornemuse",
		output: {F: 1},
		
	},
	{
		input: "corner",
		output: {M: 1},
		
	},
	{
		input: "cornet",
		output: {M: 1},
		
	},
	{
		input: "cornette",
		output: {F: 1},
		
	},
	{
		input: "corniche",
		output: {F: 1},
		
	},
	{
		input: "cornichon",
		output: {M: 1},
		
	},
	{
		input: "cornière",
		output: {F: 1},
		
	},
	{
		input: "cornue",
		output: {F: 1},
		
	},
	{
		input: "cornée",
		output: {F: 1},
		
	},
	{
		input: "corollaire",
		output: {M: 1},
		
	},
	{
		input: "corolle",
		output: {F: 1},
		
	},
	{
		input: "coron",
		output: {M: 1},
		
	},
	{
		input: "corona",
		output: {F: 1},
		
	},
	{
		input: "coronaire",
		output: {F: 1},
		
	},
	{
		input: "coronarographie",
		output: {F: 1},
		
	},
	{
		input: "coronaropathie",
		output: {F: 1},
		
	},
	{
		input: "coronel",
		output: {M: 1},
		
	},
	{
		input: "coroner",
		output: {M: 1},
		
	},
	{
		input: "corporalité",
		output: {F: 1},
		
	},
	{
		input: "corporate",
		output: {F: 1},
		
	},
	{
		input: "corporate",
		output: {M: 1},
		
	},
	{
		input: "corporation",
		output: {F: 1},
		
	},
	{
		input: "corporatisme",
		output: {M: 1},
		
	},
	{
		input: "corporel",
		output: {M: 1},
		
	},
	{
		input: "corporéité",
		output: {F: 1},
		
	},
	{
		input: "corps",
		output: {M: 1},
		
	},
	{
		input: "corpulence",
		output: {F: 1},
		
	},
	{
		input: "corpus",
		output: {M: 1},
		
	},
	{
		input: "corpuscule",
		output: {M: 1},
		
	},
	{
		input: "corral",
		output: {M: 1},
		
	},
	{
		input: "correcteur",
		output: {M: 1},
		
	},
	{
		input: "correctif",
		output: {M: 1},
		
	},
	{
		input: "correction",
		output: {F: 1},
		
	},
	{
		input: "correctionnalisation",
		output: {F: 1},
		
	},
	{
		input: "correctionnelle",
		output: {F: 1},
		
	},
	{
		input: "corregidor",
		output: {M: 1},
		
	},
	{
		input: "correlation",
		output: {F: 1},
		
	},
	{
		input: "correspondance",
		output: {F: 1},
		
	},
	{
		input: "correspondant",
		output: {F: 1},
		
	},
	{
		input: "correspondant",
		output: {M: 1},
		
	},
	{
		input: "correspondante",
		output: {F: 1},
		
	},
	{
		input: "correspondencia",
		output: {F: 1},
		
	},
	{
		input: "corrida",
		output: {F: 1},
		
	},
	{
		input: "corridor",
		output: {M: 1},
		
	},
	{
		input: "corriente",
		output: {F: 1},
		
	},
	{
		input: "corrige",
		output: {F: 1},
		
	},
	{
		input: "corrige",
		output: {M: 1},
		
	},
	{
		input: "corrigé",
		output: {M: 1},
		
	},
	{
		input: "corroboration",
		output: {F: 1},
		
	},
	{
		input: "corrolaire",
		output: {M: 1},
		
	},
	{
		input: "corrompre",
		output: {F: 1},
		
	},
	{
		input: "corrompu",
		output: {M: 1},
		
	},
	{
		input: "corrosion",
		output: {F: 1},
		
	},
	{
		input: "corrupción",
		output: {F: 1},
		
	},
	{
		input: "corrupteur",
		output: {M: 1},
		
	},
	{
		input: "corruptibilité",
		output: {F: 1},
		
	},
	{
		input: "corruption",
		output: {F: 1},
		
	},
	{
		input: "corrégidor",
		output: {M: 1},
		
	},
	{
		input: "corrélat",
		output: {M: 1},
		
	},
	{
		input: "corrélatif",
		output: {M: 1},
		
	},
	{
		input: "corrélation",
		output: {F: 1},
		
	},
	{
		input: "cors",
		output: {M: 1},
		
	},
	{
		input: "corsage",
		output: {M: 1},
		
	},
	{
		input: "corsaire",
		output: {M: 1},
		
	},
	{
		input: "corse",
		output: {M: 1},
		
	},
	{
		input: "corselet",
		output: {M: 1},
		
	},
	{
		input: "corset",
		output: {M: 1},
		
	},
	{
		input: "corso",
		output: {M: 1},
		
	},
	{
		input: "cort",
		output: {F: 1},
		
	},
	{
		input: "corte",
		output: {F: 1},
		
	},
	{
		input: "cortex",
		output: {M: 1},
		
	},
	{
		input: "corticale",
		output: {F: 1},
		
	},
	{
		input: "corticosurrénale",
		output: {F: 1},
		
	},
	{
		input: "corticothérapie",
		output: {F: 1},
		
	},
	{
		input: "corticoïde",
		output: {M: 1},
		
	},
	{
		input: "cortisol",
		output: {M: 1},
		
	},
	{
		input: "cortisolémie",
		output: {F: 1},
		
	},
	{
		input: "cortisone",
		output: {F: 1},
		
	},
	{
		input: "cortège",
		output: {M: 1},
		
	},
	{
		input: "corvette",
		output: {F: 1},
		
	},
	{
		input: "corvée",
		output: {F: 1},
		
	},
	{
		input: "coryphée",
		output: {M: 1},
		
	},
	{
		input: "coryza",
		output: {M: 1},
		
	},
	{
		input: "coréen",
		output: {M: 1},
		
	},
	{
		input: "coréférence",
		output: {F: 1},
		
	},
	{
		input: "corégulation",
		output: {F: 1},
		
	},
	{
		input: "corésidence",
		output: {F: 1},
		
	},
	{
		input: "cosa",
		output: {F: 1},
		
	},
	{
		input: "cosaque",
		output: {M: 1},
		
	},
	{
		input: "coscienza",
		output: {F: 1},
		
	},
	{
		input: "cose",
		output: {M: 1},
		
	},
	{
		input: "cosecha",
		output: {F: 1},
		
	},
	{
		input: "coseigneurie",
		output: {F: 1},
		
	},
	{
		input: "cosignataire",
		output: {M: 1},
		
	},
	{
		input: "cosmique",
		output: {M: 1},
		
	},
	{
		input: "cosmogenèse",
		output: {F: 1},
		
	},
	{
		input: "cosmogonie",
		output: {F: 1},
		
	},
	{
		input: "cosmographe",
		output: {M: 1},
		
	},
	{
		input: "cosmographie",
		output: {F: 1},
		
	},
	{
		input: "cosmogénèse",
		output: {F: 1},
		
	},
	{
		input: "cosmologie",
		output: {F: 1},
		
	},
	{
		input: "cosmonaute",
		output: {M: 1},
		
	},
	{
		input: "cosmopolite",
		output: {M: 1},
		
	},
	{
		input: "cosmopolitisme",
		output: {M: 1},
		
	},
	{
		input: "cosmos",
		output: {M: 1},
		
	},
	{
		input: "cosmovision",
		output: {F: 1},
		
	},
	{
		input: "cosmétique",
		output: {F: 1},
		
	},
	{
		input: "cosmétique",
		output: {M: 1},
		
	},
	{
		input: "cosmétologie",
		output: {F: 1},
		
	},
	{
		input: "cosse",
		output: {F: 1},
		
	},
	{
		input: "costa",
		output: {F: 1},
		
	},
	{
		input: "costaud",
		output: {M: 1},
		
	},
	{
		input: "coste",
		output: {F: 1},
		
	},
	{
		input: "coste",
		output: {M: 1},
		
	},
	{
		input: "costruzione",
		output: {F: 1},
		
	},
	{
		input: "costulation",
		output: {F: 1},
		
	},
	{
		input: "costumbre",
		output: {F: 1},
		
	},
	{
		input: "costume",
		output: {M: 1},
		
	},
	{
		input: "costumier",
		output: {M: 1},
		
	},
	{
		input: "costumière",
		output: {F: 1},
		
	},
	{
		input: "costé",
		output: {M: 1},
		
	},
	{
		input: "cotation",
		output: {F: 1},
		
	},
	{
		input: "cote",
		output: {F: 1},
		
	},
	{
		input: "cote",
		output: {M: 1},
		
	},
	{
		input: "coteau",
		output: {M: 1},
		
	},
	{
		input: "coterie",
		output: {F: 1},
		
	},
	{
		input: "cotexte",
		output: {M: 1},
		
	},
	{
		input: "cotillon",
		output: {M: 1},
		
	},
	{
		input: "cotisant",
		output: {M: 1},
		
	},
	{
		input: "cotisation",
		output: {F: 1},
		
	},
	{
		input: "coton",
		output: {M: 1},
		
	},
	{
		input: "cotonnade",
		output: {F: 1},
		
	},
	{
		input: "cotonnier",
		output: {M: 1},
		
	},
	{
		input: "cotre",
		output: {M: 1},
		
	},
	{
		input: "cottage",
		output: {M: 1},
		
	},
	{
		input: "cotte",
		output: {F: 1},
		
	},
	{
		input: "cotyle",
		output: {M: 1},
		
	},
	{
		input: "coté",
		output: {M: 1},
		
	},
	{
		input: "cou",
		output: {F: 1},
		
	},
	{
		input: "cou",
		output: {M: 1},
		
	},
	{
		input: "couac",
		output: {M: 1},
		
	},
	{
		input: "couard",
		output: {M: 1},
		
	},
	{
		input: "couardise",
		output: {F: 1},
		
	},
	{
		input: "couchage",
		output: {M: 1},
		
	},
	{
		input: "couchant",
		output: {M: 1},
		
	},
	{
		input: "couche",
		output: {F: 1},
		
	},
	{
		input: "couche",
		output: {M: 1},
		
	},
	{
		input: "couchette",
		output: {F: 1},
		
	},
	{
		input: "coucou",
		output: {M: 1},
		
	},
	{
		input: "coude",
		output: {M: 1},
		
	},
	{
		input: "coudée",
		output: {F: 1},
		
	},
	{
		input: "couenne",
		output: {F: 1},
		
	},
	{
		input: "couette",
		output: {F: 1},
		
	},
	{
		input: "couffin",
		output: {M: 1},
		
	},
	{
		input: "couille",
		output: {F: 1},
		
	},
	{
		input: "couillon",
		output: {M: 1},
		
	},
	{
		input: "couinement",
		output: {M: 1},
		
	},
	{
		input: "coulage",
		output: {M: 1},
		
	},
	{
		input: "coule",
		output: {F: 1},
		
	},
	{
		input: "couler",
		output: {F: 1},
		
	},
	{
		input: "couler",
		output: {M: 1},
		
	},
	{
		input: "couleur",
		output: {F: 1},
		
	},
	{
		input: "couleuvre",
		output: {F: 1},
		
	},
	{
		input: "coulis",
		output: {M: 1},
		
	},
	{
		input: "coulisse",
		output: {F: 1},
		
	},
	{
		input: "couloir",
		output: {M: 1},
		
	},
	{
		input: "coulpe",
		output: {F: 1},
		
	},
	{
		input: "coulure",
		output: {F: 1},
		
	},
	{
		input: "coulée",
		output: {F: 1},
		
	},
	{
		input: "counseling",
		output: {M: 1},
		
	},
	{
		input: "counselling",
		output: {M: 1},
		
	},
	{
		input: "coup",
		output: {M: 1},
		
	},
	{
		input: "coupable",
		output: {M: 1},
		
	},
	{
		input: "coupage",
		output: {M: 1},
		
	},
	{
		input: "coupe",
		output: {F: 1},
		
	},
	{
		input: "coupe",
		output: {M: 1},
		
	},
	{
		input: "coupelle",
		output: {F: 1},
		
	},
	{
		input: "couperet",
		output: {M: 1},
		
	},
	{
		input: "couperose",
		output: {F: 1},
		
	},
	{
		input: "coupeur",
		output: {M: 1},
		
	},
	{
		input: "couplage",
		output: {M: 1},
		
	},
	{
		input: "couple",
		output: {F: 1},
		
	},
	{
		input: "couple",
		output: {M: 1},
		
	},
	{
		input: "couplet",
		output: {M: 1},
		
	},
	{
		input: "coupleur",
		output: {M: 1},
		
	},
	{
		input: "coupole",
		output: {F: 1},
		
	},
	{
		input: "coupon",
		output: {M: 1},
		
	},
	{
		input: "coups",
		output: {M: 1},
		
	},
	{
		input: "coupure",
		output: {F: 1},
		
	},
	{
		input: "coupé",
		output: {M: 1},
		
	},
	{
		input: "coupée",
		output: {F: 1},
		
	},
	{
		input: "cour",
		output: {F: 1},
		
	},
	{
		input: "cour",
		output: {M: 1},
		
	},
	{
		input: "courage",
		output: {M: 1},
		
	},
	{
		input: "courageux",
		output: {M: 1},
		
	},
	{
		input: "courant",
		output: {M: 1},
		
	},
	{
		input: "courbature",
		output: {F: 1},
		
	},
	{
		input: "courbe",
		output: {F: 1},
		
	},
	{
		input: "courbe",
		output: {M: 1},
		
	},
	{
		input: "courbette",
		output: {F: 1},
		
	},
	{
		input: "courbure",
		output: {F: 1},
		
	},
	{
		input: "courette",
		output: {F: 1},
		
	},
	{
		input: "coureur",
		output: {M: 1},
		
	},
	{
		input: "coureuse",
		output: {F: 1},
		
	},
	{
		input: "courge",
		output: {F: 1},
		
	},
	{
		input: "courgette",
		output: {F: 1},
		
	},
	{
		input: "courier",
		output: {M: 1},
		
	},
	{
		input: "courlis",
		output: {M: 1},
		
	},
	{
		input: "couronne",
		output: {F: 1},
		
	},
	{
		input: "couronne",
		output: {M: 1},
		
	},
	{
		input: "couronnement",
		output: {M: 1},
		
	},
	{
		input: "courriel",
		output: {M: 1},
		
	},
	{
		input: "courrier",
		output: {M: 1},
		
	},
	{
		input: "courroie",
		output: {F: 1},
		
	},
	{
		input: "courroux",
		output: {M: 1},
		
	},
	{
		input: "cours",
		output: {F: 1},
		
	},
	{
		input: "cours",
		output: {M: 1},
		
	},
	{
		input: "course",
		output: {F: 1},
		
	},
	{
		input: "coursier",
		output: {M: 1},
		
	},
	{
		input: "coursive",
		output: {F: 1},
		
	},
	{
		input: "coursière",
		output: {F: 1},
		
	},
	{
		input: "courtage",
		output: {M: 1},
		
	},
	{
		input: "courtcircuit",
		output: {M: 1},
		
	},
	{
		input: "courtepointe",
		output: {F: 1},
		
	},
	{
		input: "courtier",
		output: {M: 1},
		
	},
	{
		input: "courtil",
		output: {M: 1},
		
	},
	{
		input: "courtine",
		output: {F: 1},
		
	},
	{
		input: "courtisan",
		output: {M: 1},
		
	},
	{
		input: "courtisane",
		output: {F: 1},
		
	},
	{
		input: "courtisanerie",
		output: {F: 1},
		
	},
	{
		input: "courtoisie",
		output: {F: 1},
		
	},
	{
		input: "courée",
		output: {F: 1},
		
	},
	{
		input: "couscous",
		output: {M: 1},
		
	},
	{
		input: "cousin",
		output: {M: 1},
		
	},
	{
		input: "cousinage",
		output: {M: 1},
		
	},
	{
		input: "cousine",
		output: {F: 1},
		
	},
	{
		input: "coussin",
		output: {M: 1},
		
	},
	{
		input: "coussinet",
		output: {M: 1},
		
	},
	{
		input: "coustume",
		output: {F: 1},
		
	},
	{
		input: "cout",
		output: {M: 1},
		
	},
	{
		input: "couteau",
		output: {M: 1},
		
	},
	{
		input: "coutelas",
		output: {M: 1},
		
	},
	{
		input: "coutelier",
		output: {M: 1},
		
	},
	{
		input: "coutellerie",
		output: {F: 1},
		
	},
	{
		input: "coutre",
		output: {M: 1},
		
	},
	{
		input: "coutume",
		output: {F: 1},
		
	},
	{
		input: "coutumier",
		output: {M: 1},
		
	},
	{
		input: "couture",
		output: {F: 1},
		
	},
	{
		input: "couturier",
		output: {M: 1},
		
	},
	{
		input: "couturière",
		output: {F: 1},
		
	},
	{
		input: "couv",
		output: {F: 1},
		
	},
	{
		input: "couvade",
		output: {F: 1},
		
	},
	{
		input: "couvain",
		output: {M: 1},
		
	},
	{
		input: "couvaison",
		output: {F: 1},
		
	},
	{
		input: "couvent",
		output: {M: 1},
		
	},
	{
		input: "couvercle",
		output: {M: 1},
		
	},
	{
		input: "couvert",
		output: {M: 1},
		
	},
	{
		input: "couverte",
		output: {F: 1},
		
	},
	{
		input: "couverture",
		output: {F: 1},
		
	},
	{
		input: "couveuse",
		output: {F: 1},
		
	},
	{
		input: "couvre",
		output: {F: 1},
		
	},
	{
		input: "couvre",
		output: {M: 1},
		
	},
	{
		input: "couvrefeu",
		output: {M: 1},
		
	},
	{
		input: "couvrement",
		output: {M: 1},
		
	},
	{
		input: "couvreur",
		output: {M: 1},
		
	},
	{
		input: "couvée",
		output: {F: 1},
		
	},
	{
		input: "covariance",
		output: {F: 1},
		
	},
	{
		input: "covariation",
		output: {F: 1},
		
	},
	{
		input: "covoiturage",
		output: {M: 1},
		
	},
	{
		input: "cow",
		output: {M: 1},
		
	},
	{
		input: "cowboy",
		output: {M: 1},
		
	},
	{
		input: "coxarthrose",
		output: {F: 1},
		
	},
	{
		input: "coyote",
		output: {M: 1},
		
	},
	{
		input: "coyuntura",
		output: {F: 1},
		
	},
	{
		input: "coédition",
		output: {F: 1},
		
	},
	{
		input: "coéducation",
		output: {F: 1},
		
	},
	{
		input: "coénonciateur",
		output: {M: 1},
		
	},
	{
		input: "coénonciation",
		output: {F: 1},
		
	},
	{
		input: "coépouse",
		output: {F: 1},
		
	},
	{
		input: "coéquipier",
		output: {M: 1},
		
	},
	{
		input: "coévolution",
		output: {F: 1},
		
	},
	{
		input: "coïncidence",
		output: {F: 1},
		
	},
	{
		input: "coïntégration",
		output: {F: 1},
		
	},
	{
		input: "coït",
		output: {M: 1},
		
	},
	{
		input: "coût",
		output: {M: 1},
		
	},
	{
		input: "crabe",
		output: {M: 1},
		
	},
	{
		input: "crachat",
		output: {M: 1},
		
	},
	{
		input: "crachement",
		output: {M: 1},
		
	},
	{
		input: "crachin",
		output: {M: 1},
		
	},
	{
		input: "crachoir",
		output: {M: 1},
		
	},
	{
		input: "crack",
		output: {M: 1},
		
	},
	{
		input: "craie",
		output: {F: 1},
		
	},
	{
		input: "craignais",
		output: {M: 1},
		
	},
	{
		input: "crains",
		output: {M: 1},
		
	},
	{
		input: "crainte",
		output: {F: 1},
		
	},
	{
		input: "crampe",
		output: {F: 1},
		
	},
	{
		input: "crampon",
		output: {M: 1},
		
	},
	{
		input: "cran",
		output: {M: 1},
		
	},
	{
		input: "craniologie",
		output: {F: 1},
		
	},
	{
		input: "crapaud",
		output: {M: 1},
		
	},
	{
		input: "crapaudine",
		output: {F: 1},
		
	},
	{
		input: "crapule",
		output: {F: 1},
		
	},
	{
		input: "crapulerie",
		output: {F: 1},
		
	},
	{
		input: "craquage",
		output: {M: 1},
		
	},
	{
		input: "craquelure",
		output: {F: 1},
		
	},
	{
		input: "craquement",
		output: {M: 1},
		
	},
	{
		input: "crase",
		output: {F: 1},
		
	},
	{
		input: "crash",
		output: {M: 1},
		
	},
	{
		input: "crasse",
		output: {F: 1},
		
	},
	{
		input: "craton",
		output: {M: 1},
		
	},
	{
		input: "cratylisme",
		output: {M: 1},
		
	},
	{
		input: "cratère",
		output: {M: 1},
		
	},
	{
		input: "cravache",
		output: {F: 1},
		
	},
	{
		input: "cravate",
		output: {F: 1},
		
	},
	{
		input: "crawl",
		output: {M: 1},
		
	},
	{
		input: "crayon",
		output: {M: 1},
		
	},
	{
		input: "creación",
		output: {F: 1},
		
	},
	{
		input: "creaciôn",
		output: {F: 1},
		
	},
	{
		input: "creance",
		output: {F: 1},
		
	},
	{
		input: "creation",
		output: {F: 1},
		
	},
	{
		input: "creature",
		output: {F: 1},
		
	},
	{
		input: "creciente",
		output: {F: 1},
		
	},
	{
		input: "credit",
		output: {M: 1},
		
	},
	{
		input: "credo",
		output: {M: 1},
		
	},
	{
		input: "creencia",
		output: {F: 1},
		
	},
	{
		input: "crescendo",
		output: {M: 1},
		
	},
	{
		input: "cresson",
		output: {M: 1},
		
	},
	{
		input: "creusage",
		output: {M: 1},
		
	},
	{
		input: "creuse",
		output: {F: 1},
		
	},
	{
		input: "creusement",
		output: {M: 1},
		
	},
	{
		input: "creuset",
		output: {M: 1},
		
	},
	{
		input: "creux",
		output: {M: 1},
		
	},
	{
		input: "crevaison",
		output: {F: 1},
		
	},
	{
		input: "crevasse",
		output: {F: 1},
		
	},
	{
		input: "crevette",
		output: {F: 1},
		
	},
	{
		input: "cri",
		output: {F: 1},
		
	},
	{
		input: "cri",
		output: {M: 1},
		
	},
	{
		input: "criblage",
		output: {M: 1},
		
	},
	{
		input: "crible",
		output: {M: 1},
		
	},
	{
		input: "cric",
		output: {M: 1},
		
	},
	{
		input: "cricket",
		output: {M: 1},
		
	},
	{
		input: "crie",
		output: {M: 1},
		
	},
	{
		input: "crieur",
		output: {M: 1},
		
	},
	{
		input: "crime",
		output: {M: 1},
		
	},
	{
		input: "crimen",
		output: {M: 1},
		
	},
	{
		input: "criminalisation",
		output: {F: 1},
		
	},
	{
		input: "criminaliste",
		output: {M: 1},
		
	},
	{
		input: "criminalistique",
		output: {F: 1},
		
	},
	{
		input: "criminalité",
		output: {F: 1},
		
	},
	{
		input: "criminel",
		output: {M: 1},
		
	},
	{
		input: "criminelle",
		output: {F: 1},
		
	},
	{
		input: "criminologie",
		output: {F: 1},
		
	},
	{
		input: "criminologue",
		output: {M: 1},
		
	},
	{
		input: "crin",
		output: {M: 1},
		
	},
	{
		input: "crinière",
		output: {F: 1},
		
	},
	{
		input: "crinoline",
		output: {F: 1},
		
	},
	{
		input: "crique",
		output: {F: 1},
		
	},
	{
		input: "criquet",
		output: {M: 1},
		
	},
	{
		input: "crise",
		output: {F: 1},
		
	},
	{
		input: "crise",
		output: {M: 1},
		
	},
	{
		input: "crisi",
		output: {F: 1},
		
	},
	{
		input: "crisis",
		output: {F: 1},
		
	},
	{
		input: "crispation",
		output: {F: 1},
		
	},
	{
		input: "crissement",
		output: {M: 1},
		
	},
	{
		input: "cristal",
		output: {M: 1},
		
	},
	{
		input: "cristallerie",
		output: {F: 1},
		
	},
	{
		input: "cristallin",
		output: {M: 1},
		
	},
	{
		input: "cristallinité",
		output: {F: 1},
		
	},
	{
		input: "cristallisation",
		output: {F: 1},
		
	},
	{
		input: "cristallographie",
		output: {F: 1},
		
	},
	{
		input: "critere",
		output: {M: 1},
		
	},
	{
		input: "criterium",
		output: {M: 1},
		
	},
	{
		input: "critica",
		output: {F: 1},
		
	},
	{
		input: "criticisme",
		output: {M: 1},
		
	},
	{
		input: "criticité",
		output: {F: 1},
		
	},
	{
		input: "critique",
		output: {F: 1},
		
	},
	{
		input: "critique",
		output: {M: 1},
		
	},
	{
		input: "critère",
		output: {M: 1},
		
	},
	{
		input: "critériologie",
		output: {F: 1},
		
	},
	{
		input: "critérium",
		output: {M: 1},
		
	},
	{
		input: "criée",
		output: {F: 1},
		
	},
	{
		input: "croassement",
		output: {M: 1},
		
	},
	{
		input: "croate",
		output: {M: 1},
		
	},
	{
		input: "croc",
		output: {M: 1},
		
	},
	{
		input: "croche",
		output: {F: 1},
		
	},
	{
		input: "croche",
		output: {M: 1},
		
	},
	{
		input: "crochet",
		output: {M: 1},
		
	},
	{
		input: "crocheteur",
		output: {M: 1},
		
	},
	{
		input: "crocodile",
		output: {M: 1},
		
	},
	{
		input: "crois",
		output: {F: 1},
		
	},
	{
		input: "crois",
		output: {M: 1},
		
	},
	{
		input: "croisade",
		output: {F: 1},
		
	},
	{
		input: "croisement",
		output: {M: 1},
		
	},
	{
		input: "croisette",
		output: {F: 1},
		
	},
	{
		input: "croiseur",
		output: {M: 1},
		
	},
	{
		input: "croisillon",
		output: {M: 1},
		
	},
	{
		input: "croisière",
		output: {F: 1},
		
	},
	{
		input: "croissance",
		output: {F: 1},
		
	},
	{
		input: "croissant",
		output: {M: 1},
		
	},
	{
		input: "croisé",
		output: {M: 1},
		
	},
	{
		input: "croisée",
		output: {F: 1},
		
	},
	{
		input: "croix",
		output: {F: 1},
		
	},
	{
		input: "croquant",
		output: {M: 1},
		
	},
	{
		input: "croque",
		output: {M: 1},
		
	},
	{
		input: "croquemitaine",
		output: {M: 1},
		
	},
	{
		input: "croquis",
		output: {M: 1},
		
	},
	{
		input: "cross",
		output: {M: 1},
		
	},
	{
		input: "crosse",
		output: {F: 1},
		
	},
	{
		input: "crossing",
		output: {M: 1},
		
	},
	{
		input: "crotte",
		output: {F: 1},
		
	},
	{
		input: "crottin",
		output: {M: 1},
		
	},
	{
		input: "croup",
		output: {M: 1},
		
	},
	{
		input: "croupe",
		output: {F: 1},
		
	},
	{
		input: "croupier",
		output: {M: 1},
		
	},
	{
		input: "croupion",
		output: {M: 1},
		
	},
	{
		input: "croyais",
		output: {F: 1},
		
	},
	{
		input: "croyais",
		output: {M: 1},
		
	},
	{
		input: "croyance",
		output: {F: 1},
		
	},
	{
		input: "croyant",
		output: {M: 1},
		
	},
	{
		input: "croyons",
		output: {F: 1},
		
	},
	{
		input: "croyons",
		output: {M: 1},
		
	},
	{
		input: "croît",
		output: {M: 1},
		
	},
	{
		input: "croûte",
		output: {F: 1},
		
	},
	{
		input: "croûton",
		output: {M: 1},
		
	},
	{
		input: "cru",
		output: {M: 1},
		
	},
	{
		input: "cruauté",
		output: {F: 1},
		
	},
	{
		input: "cruche",
		output: {F: 1},
		
	},
	{
		input: "cruchon",
		output: {M: 1},
		
	},
	{
		input: "crucifiement",
		output: {M: 1},
		
	},
	{
		input: "crucifix",
		output: {M: 1},
		
	},
	{
		input: "crucifixion",
		output: {F: 1},
		
	},
	{
		input: "crucifié",
		output: {M: 1},
		
	},
	{
		input: "crudité",
		output: {F: 1},
		
	},
	{
		input: "crue",
		output: {F: 1},
		
	},
	{
		input: "cruel",
		output: {M: 1},
		
	},
	{
		input: "cruelle",
		output: {F: 1},
		
	},
	{
		input: "crus",
		output: {F: 1},
		
	},
	{
		input: "crus",
		output: {M: 1},
		
	},
	{
		input: "crustacé",
		output: {M: 1},
		
	},
	{
		input: "cruz",
		output: {F: 1},
		
	},
	{
		input: "cryoconservation",
		output: {F: 1},
		
	},
	{
		input: "cryogénie",
		output: {F: 1},
		
	},
	{
		input: "cryostat",
		output: {M: 1},
		
	},
	{
		input: "cryothérapie",
		output: {F: 1},
		
	},
	{
		input: "cryptage",
		output: {M: 1},
		
	},
	{
		input: "crypte",
		output: {F: 1},
		
	},
	{
		input: "crypto",
		output: {M: 1},
		
	},
	{
		input: "cryptogramme",
		output: {M: 1},
		
	},
	{
		input: "cryptographie",
		output: {F: 1},
		
	},
	{
		input: "cryptologie",
		output: {F: 1},
		
	},
	{
		input: "cryptoportique",
		output: {M: 1},
		
	},
	{
		input: "crâne",
		output: {M: 1},
		
	},
	{
		input: "crânerie",
		output: {F: 1},
		
	},
	{
		input: "crèche",
		output: {F: 1},
		
	},
	{
		input: "crème",
		output: {F: 1},
		
	},
	{
		input: "crève",
		output: {F: 1},
		
	},
	{
		input: "crève",
		output: {M: 1},
		
	},
	{
		input: "créa",
		output: {F: 1},
		
	},
	{
		input: "créance",
		output: {F: 1},
		
	},
	{
		input: "créancier",
		output: {M: 1},
		
	},
	{
		input: "créancière",
		output: {F: 1},
		
	},
	{
		input: "créateur",
		output: {M: 1},
		
	},
	{
		input: "créatif",
		output: {M: 1},
		
	},
	{
		input: "créatine",
		output: {F: 1},
		
	},
	{
		input: "créatinine",
		output: {F: 1},
		
	},
	{
		input: "créatininémie",
		output: {F: 1},
		
	},
	{
		input: "création",
		output: {F: 1},
		
	},
	{
		input: "création",
		output: {M: 1},
		
	},
	{
		input: "créationnisme",
		output: {M: 1},
		
	},
	{
		input: "créativité",
		output: {F: 1},
		
	},
	{
		input: "créatrice",
		output: {F: 1},
		
	},
	{
		input: "créature",
		output: {F: 1},
		
	},
	{
		input: "crécelle",
		output: {F: 1},
		
	},
	{
		input: "crédence",
		output: {F: 1},
		
	},
	{
		input: "crédibilité",
		output: {F: 1},
		
	},
	{
		input: "crédirentier",
		output: {M: 1},
		
	},
	{
		input: "crédit",
		output: {M: 1},
		
	},
	{
		input: "créditeur",
		output: {M: 1},
		
	},
	{
		input: "crédité",
		output: {F: 1},
		
	},
	{
		input: "crédo",
		output: {M: 1},
		
	},
	{
		input: "crédulité",
		output: {F: 1},
		
	},
	{
		input: "crémaillère",
		output: {F: 1},
		
	},
	{
		input: "crémation",
		output: {F: 1},
		
	},
	{
		input: "crématoire",
		output: {M: 1},
		
	},
	{
		input: "crématorium",
		output: {M: 1},
		
	},
	{
		input: "crémerie",
		output: {F: 1},
		
	},
	{
		input: "crémier",
		output: {M: 1},
		
	},
	{
		input: "crémière",
		output: {F: 1},
		
	},
	{
		input: "créneau",
		output: {M: 1},
		
	},
	{
		input: "crénelage",
		output: {M: 1},
		
	},
	{
		input: "créole",
		output: {F: 1},
		
	},
	{
		input: "créole",
		output: {M: 1},
		
	},
	{
		input: "créolisation",
		output: {F: 1},
		
	},
	{
		input: "créolistique",
		output: {F: 1},
		
	},
	{
		input: "créolité",
		output: {F: 1},
		
	},
	{
		input: "créosote",
		output: {F: 1},
		
	},
	{
		input: "crépi",
		output: {M: 1},
		
	},
	{
		input: "crépine",
		output: {F: 1},
		
	},
	{
		input: "crépitement",
		output: {M: 1},
		
	},
	{
		input: "crépuscule",
		output: {M: 1},
		
	},
	{
		input: "crétin",
		output: {M: 1},
		
	},
	{
		input: "crétinisation",
		output: {F: 1},
		
	},
	{
		input: "crétinisme",
		output: {M: 1},
		
	},
	{
		input: "crêpe",
		output: {F: 1},
		
	},
	{
		input: "crêpe",
		output: {M: 1},
		
	},
	{
		input: "crêperie",
		output: {F: 1},
		
	},
	{
		input: "crête",
		output: {F: 1},
		
	},
	{
		input: "crítica",
		output: {F: 1},
		
	},
	{
		input: "crónica",
		output: {F: 1},
		
	},
	{
		input: "csce",
		output: {F: 1},
		
	},
	{
		input: "cuadro",
		output: {M: 1},
		
	},
	{
		input: "cuarta",
		output: {F: 1},
		
	},
	{
		input: "cuarto",
		output: {M: 1},
		
	},
	{
		input: "cubage",
		output: {M: 1},
		
	},
	{
		input: "cubaine",
		output: {F: 1},
		
	},
	{
		input: "cube",
		output: {M: 1},
		
	},
	{
		input: "cubiculum",
		output: {M: 1},
		
	},
	{
		input: "cubisme",
		output: {M: 1},
		
	},
	{
		input: "cubitus",
		output: {M: 1},
		
	},
	{
		input: "cueillette",
		output: {F: 1},
		
	},
	{
		input: "cueilleur",
		output: {M: 1},
		
	},
	{
		input: "cuenca",
		output: {F: 1},
		
	},
	{
		input: "cuenta",
		output: {F: 1},
		
	},
	{
		input: "cuento",
		output: {M: 1},
		
	},
	{
		input: "cuesta",
		output: {F: 1},
		
	},
	{
		input: "cuestion",
		output: {F: 1},
		
	},
	{
		input: "cuestión",
		output: {F: 1},
		
	},
	{
		input: "cuestiôn",
		output: {F: 1},
		
	},
	{
		input: "cueur",
		output: {M: 1},
		
	},
	{
		input: "cueva",
		output: {F: 1},
		
	},
	{
		input: "cuiller",
		output: {F: 1},
		
	},
	{
		input: "cuillerée",
		output: {F: 1},
		
	},
	{
		input: "cuillère",
		output: {F: 1},
		
	},
	{
		input: "cuir",
		output: {M: 1},
		
	},
	{
		input: "cuirasse",
		output: {F: 1},
		
	},
	{
		input: "cuirassement",
		output: {M: 1},
		
	},
	{
		input: "cuirassier",
		output: {M: 1},
		
	},
	{
		input: "cuirassé",
		output: {M: 1},
		
	},
	{
		input: "cuire",
		output: {F: 1},
		
	},
	{
		input: "cuire",
		output: {M: 1},
		
	},
	{
		input: "cuisine",
		output: {F: 1},
		
	},
	{
		input: "cuisinier",
		output: {M: 1},
		
	},
	{
		input: "cuisinière",
		output: {F: 1},
		
	},
	{
		input: "cuisse",
		output: {F: 1},
		
	},
	{
		input: "cuisson",
		output: {F: 1},
		
	},
	{
		input: "cuissot",
		output: {M: 1},
		
	},
	{
		input: "cuistot",
		output: {M: 1},
		
	},
	{
		input: "cuistre",
		output: {M: 1},
		
	},
	{
		input: "cuistrerie",
		output: {F: 1},
		
	},
	{
		input: "cuit",
		output: {M: 1},
		
	},
	{
		input: "cuite",
		output: {F: 1},
		
	},
	{
		input: "cuivre",
		output: {M: 1},
		
	},
	{
		input: "cul",
		output: {F: 1},
		
	},
	{
		input: "cul",
		output: {M: 1},
		
	},
	{
		input: "culasse",
		output: {F: 1},
		
	},
	{
		input: "culbute",
		output: {F: 1},
		
	},
	{
		input: "culmination",
		output: {F: 1},
		
	},
	{
		input: "culot",
		output: {M: 1},
		
	},
	{
		input: "culotte",
		output: {F: 1},
		
	},
	{
		input: "culpa",
		output: {F: 1},
		
	},
	{
		input: "culpabilisation",
		output: {F: 1},
		
	},
	{
		input: "culpabilité",
		output: {F: 1},
		
	},
	{
		input: "culte",
		output: {M: 1},
		
	},
	{
		input: "cultivar",
		output: {M: 1},
		
	},
	{
		input: "cultivateur",
		output: {M: 1},
		
	},
	{
		input: "cultivatrice",
		output: {F: 1},
		
	},
	{
		input: "cultive",
		output: {F: 1},
		
	},
	{
		input: "cultivé",
		output: {M: 1},
		
	},
	{
		input: "cultuel",
		output: {M: 1},
		
	},
	{
		input: "cultura",
		output: {F: 1},
		
	},
	{
		input: "culturalisme",
		output: {M: 1},
		
	},
	{
		input: "culture",
		output: {F: 1},
		
	},
	{
		input: "culture",
		output: {M: 1},
		
	},
	{
		input: "culturel",
		output: {M: 1},
		
	},
	{
		input: "culée",
		output: {F: 1},
		
	},
	{
		input: "cumin",
		output: {M: 1},
		
	},
	{
		input: "cumul",
		output: {M: 1},
		
	},
	{
		input: "cumulation",
		output: {F: 1},
		
	},
	{
		input: "cumulativité",
		output: {F: 1},
		
	},
	{
		input: "cumulus",
		output: {M: 1},
		
	},
	{
		input: "cunnilingus",
		output: {M: 1},
		
	},
	{
		input: "cupidité",
		output: {F: 1},
		
	},
	{
		input: "cupule",
		output: {F: 1},
		
	},
	{
		input: "cura",
		output: {F: 1},
		
	},
	{
		input: "curage",
		output: {M: 1},
		
	},
	{
		input: "curare",
		output: {M: 1},
		
	},
	{
		input: "curarisation",
		output: {F: 1},
		
	},
	{
		input: "curatelle",
		output: {F: 1},
		
	},
	{
		input: "curateur",
		output: {M: 1},
		
	},
	{
		input: "curatif",
		output: {M: 1},
		
	},
	{
		input: "curcuma",
		output: {M: 1},
		
	},
	{
		input: "cure",
		output: {F: 1},
		
	},
	{
		input: "cure",
		output: {M: 1},
		
	},
	{
		input: "curetage",
		output: {M: 1},
		
	},
	{
		input: "curette",
		output: {F: 1},
		
	},
	{
		input: "curia",
		output: {F: 1},
		
	},
	{
		input: "curie",
		output: {F: 1},
		
	},
	{
		input: "curiethérapie",
		output: {F: 1},
		
	},
	{
		input: "curieuse",
		output: {F: 1},
		
	},
	{
		input: "curieux",
		output: {M: 1},
		
	},
	{
		input: "curiosité",
		output: {F: 1},
		
	},
	{
		input: "curiste",
		output: {M: 1},
		
	},
	{
		input: "curling",
		output: {M: 1},
		
	},
	{
		input: "curriculum",
		output: {M: 1},
		
	},
	{
		input: "curry",
		output: {M: 1},
		
	},
	{
		input: "curseur",
		output: {M: 1},
		
	},
	{
		input: "cursive",
		output: {F: 1},
		
	},
	{
		input: "cursus",
		output: {M: 1},
		
	},
	{
		input: "curtis",
		output: {F: 1},
		
	},
	{
		input: "curé",
		output: {M: 1},
		
	},
	{
		input: "curée",
		output: {F: 1},
		
	},
	{
		input: "cuspide",
		output: {F: 1},
		
	},
	{
		input: "custode",
		output: {F: 1},
		
	},
	{
		input: "custode",
		output: {M: 1},
		
	},
	{
		input: "custodia",
		output: {F: 1},
		
	},
	{
		input: "custodie",
		output: {F: 1},
		
	},
	{
		input: "cuticule",
		output: {F: 1},
		
	},
	{
		input: "cutter",
		output: {M: 1},
		
	},
	{
		input: "cuve",
		output: {F: 1},
		
	},
	{
		input: "cuveau",
		output: {M: 1},
		
	},
	{
		input: "cuvelage",
		output: {M: 1},
		
	},
	{
		input: "cuverie",
		output: {F: 1},
		
	},
	{
		input: "cuvette",
		output: {F: 1},
		
	},
	{
		input: "cuvier",
		output: {M: 1},
		
	},
	{
		input: "cuvée",
		output: {F: 1},
		
	},
	{
		input: "cyanose",
		output: {F: 1},
		
	},
	{
		input: "cyanure",
		output: {M: 1},
		
	},
	{
		input: "cyber",
		output: {F: 1},
		
	},
	{
		input: "cyber",
		output: {M: 1},
		
	},
	{
		input: "cybercafé",
		output: {M: 1},
		
	},
	{
		input: "cybercriminalité",
		output: {F: 1},
		
	},
	{
		input: "cyberculture",
		output: {F: 1},
		
	},
	{
		input: "cyberespace",
		output: {M: 1},
		
	},
	{
		input: "cyberformation",
		output: {F: 1},
		
	},
	{
		input: "cybernétique",
		output: {F: 1},
		
	},
	{
		input: "cyberspace",
		output: {M: 1},
		
	},
	{
		input: "cyborg",
		output: {M: 1},
		
	},
	{
		input: "cycle",
		output: {M: 1},
		
	},
	{
		input: "cyclicité",
		output: {F: 1},
		
	},
	{
		input: "cycline",
		output: {F: 1},
		
	},
	{
		input: "cyclisme",
		output: {M: 1},
		
	},
	{
		input: "cycliste",
		output: {M: 1},
		
	},
	{
		input: "cyclo",
		output: {F: 1},
		
	},
	{
		input: "cyclo",
		output: {M: 1},
		
	},
	{
		input: "cyclohexane",
		output: {M: 1},
		
	},
	{
		input: "cyclomoteur",
		output: {M: 1},
		
	},
	{
		input: "cyclone",
		output: {M: 1},
		
	},
	{
		input: "cyclope",
		output: {M: 1},
		
	},
	{
		input: "cyclosporine",
		output: {F: 1},
		
	},
	{
		input: "cyclothymie",
		output: {F: 1},
		
	},
	{
		input: "cyclotron",
		output: {M: 1},
		
	},
	{
		input: "cycloïde",
		output: {F: 1},
		
	},
	{
		input: "cygne",
		output: {M: 1},
		
	},
	{
		input: "cylindre",
		output: {M: 1},
		
	},
	{
		input: "cylindrée",
		output: {F: 1},
		
	},
	{
		input: "cymbale",
		output: {F: 1},
		
	},
	{
		input: "cynique",
		output: {M: 1},
		
	},
	{
		input: "cynisme",
		output: {M: 1},
		
	},
	{
		input: "cyphose",
		output: {F: 1},
		
	},
	{
		input: "cyprès",
		output: {M: 1},
		
	},
	{
		input: "cystite",
		output: {F: 1},
		
	},
	{
		input: "cystographie",
		output: {F: 1},
		
	},
	{
		input: "cystoscopie",
		output: {F: 1},
		
	},
	{
		input: "cystéine",
		output: {F: 1},
		
	},
	{
		input: "cytochrome",
		output: {F: 1},
		
	},
	{
		input: "cytochrome",
		output: {M: 1},
		
	},
	{
		input: "cytogénétique",
		output: {F: 1},
		
	},
	{
		input: "cytokine",
		output: {F: 1},
		
	},
	{
		input: "cytologie",
		output: {F: 1},
		
	},
	{
		input: "cytolyse",
		output: {F: 1},
		
	},
	{
		input: "cytomégalovirus",
		output: {M: 1},
		
	},
	{
		input: "cytométrie",
		output: {F: 1},
		
	},
	{
		input: "cytoplasme",
		output: {M: 1},
		
	},
	{
		input: "cytoponction",
		output: {F: 1},
		
	},
	{
		input: "cytosine",
		output: {F: 1},
		
	},
	{
		input: "cytosol",
		output: {M: 1},
		
	},
	{
		input: "cytosquelette",
		output: {M: 1},
		
	},
	{
		input: "cytotoxicité",
		output: {F: 1},
		
	},
	{
		input: "czar",
		output: {M: 1},
		
	},
	{
		input: "cámara",
		output: {F: 1},
		
	},
	{
		input: "cárcel",
		output: {F: 1},
		
	},
	{
		input: "câblage",
		output: {M: 1},
		
	},
	{
		input: "câble",
		output: {M: 1},
		
	},
	{
		input: "câblo",
		output: {M: 1},
		
	},
	{
		input: "câblodistribution",
		output: {F: 1},
		
	},
	{
		input: "câlin",
		output: {M: 1},
		
	},
	{
		input: "câmara",
		output: {F: 1},
		
	},
	{
		input: "cèdre",
		output: {M: 1},
		
	},
	{
		input: "cène",
		output: {F: 1},
		
	},
	{
		input: "cécité",
		output: {F: 1},
		
	},
	{
		input: "cédant",
		output: {M: 1},
		
	},
	{
		input: "cédille",
		output: {F: 1},
		
	},
	{
		input: "cédraie",
		output: {F: 1},
		
	},
	{
		input: "cédrat",
		output: {M: 1},
		
	},
	{
		input: "cédule",
		output: {F: 1},
		
	},
	{
		input: "cédérom",
		output: {M: 1},
		
	},
	{
		input: "cégep",
		output: {M: 1},
		
	},
	{
		input: "céleri",
		output: {M: 1},
		
	},
	{
		input: "céleste",
		output: {F: 1},
		
	},
	{
		input: "céleste",
		output: {M: 1},
		
	},
	{
		input: "célibat",
		output: {M: 1},
		
	},
	{
		input: "célibataire",
		output: {F: 1},
		
	},
	{
		input: "célibataire",
		output: {M: 1},
		
	},
	{
		input: "célébrant",
		output: {M: 1},
		
	},
	{
		input: "célébration",
		output: {F: 1},
		
	},
	{
		input: "célébrité",
		output: {F: 1},
		
	},
	{
		input: "célérité",
		output: {F: 1},
		
	},
	{
		input: "cément",
		output: {M: 1},
		
	},
	{
		input: "cémentation",
		output: {F: 1},
		
	},
	{
		input: "cénacle",
		output: {M: 1},
		
	},
	{
		input: "cénesthésie",
		output: {F: 1},
		
	},
	{
		input: "cénobitisme",
		output: {M: 1},
		
	},
	{
		input: "cénotaphe",
		output: {M: 1},
		
	},
	{
		input: "cépage",
		output: {M: 1},
		
	},
	{
		input: "céphalosporine",
		output: {F: 1},
		
	},
	{
		input: "céphalée",
		output: {F: 1},
		
	},
	{
		input: "céramique",
		output: {F: 1},
		
	},
	{
		input: "céramiste",
		output: {M: 1},
		
	},
	{
		input: "céruse",
		output: {F: 1},
		
	},
	{
		input: "céréale",
		output: {F: 1},
		
	},
	{
		input: "céréaliculture",
		output: {F: 1},
		
	},
	{
		input: "cérébral",
		output: {M: 1},
		
	},
	{
		input: "cérébralité",
		output: {F: 1},
		
	},
	{
		input: "cérémonial",
		output: {M: 1},
		
	},
	{
		input: "cérémonie",
		output: {F: 1},
		
	},
	{
		input: "cérémoniel",
		output: {M: 1},
		
	},
	{
		input: "césarienne",
		output: {F: 1},
		
	},
	{
		input: "césarisme",
		output: {M: 1},
		
	},
	{
		input: "césium",
		output: {M: 1},
		
	},
	{
		input: "césure",
		output: {F: 1},
		
	},
	{
		input: "cétacé",
		output: {M: 1},
		
	},
	{
		input: "cîme",
		output: {F: 1},
		
	},
	{
		input: "côlon",
		output: {M: 1},
		
	},
	{
		input: "cône",
		output: {M: 1},
		
	},
	{
		input: "côte",
		output: {F: 1},
		
	},
	{
		input: "côte",
		output: {M: 1},
		
	},
	{
		input: "côtelette",
		output: {F: 1},
		
	},
	{
		input: "côtoiement",
		output: {M: 1},
		
	},
	{
		input: "côté",
		output: {F: 1},
		
	},
	{
		input: "côté",
		output: {M: 1},
		
	},
	{
		input: "cœfficient",
		output: {M: 1},
		
	},
	{
		input: "cœlioscopie",
		output: {F: 1},
		
	},
	{
		input: "cœur",
		output: {M: 1},
		
	},
	{
		input: "cœxistence",
		output: {F: 1},
		
	},
	{
		input: "d",
		output: {F: 1},
		
	},
	{
		input: "d",
		output: {M: 1},
		
	},
	{
		input: "da",
		output: {F: 1},
		
	},
	{
		input: "da",
		output: {M: 1},
		
	},
	{
		input: "daba",
		output: {F: 1},
		
	},
	{
		input: "dactyle",
		output: {M: 1},
		
	},
	{
		input: "dactylo",
		output: {F: 1},
		
	},
	{
		input: "dactylogramme",
		output: {M: 1},
		
	},
	{
		input: "dactylographe",
		output: {F: 1},
		
	},
	{
		input: "dactylographie",
		output: {F: 1},
		
	},
	{
		input: "dada",
		output: {M: 1},
		
	},
	{
		input: "dadaïsme",
		output: {M: 1},
		
	},
	{
		input: "dadaïste",
		output: {M: 1},
		
	},
	{
		input: "dague",
		output: {F: 1},
		
	},
	{
		input: "daguerréotype",
		output: {M: 1},
		
	},
	{
		input: "dahir",
		output: {M: 1},
		
	},
	{
		input: "dahlia",
		output: {M: 1},
		
	},
	{
		input: "daim",
		output: {M: 1},
		
	},
	{
		input: "daimon",
		output: {M: 1},
		
	},
	{
		input: "dais",
		output: {M: 1},
		
	},
	{
		input: "dalaï",
		output: {M: 1},
		
	},
	{
		input: "dallage",
		output: {M: 1},
		
	},
	{
		input: "dalle",
		output: {F: 1},
		
	},
	{
		input: "dalmatique",
		output: {F: 1},
		
	},
	{
		input: "daltonisme",
		output: {M: 1},
		
	},
	{
		input: "dama",
		output: {F: 1},
		
	},
	{
		input: "damas",
		output: {M: 1},
		
	},
	{
		input: "dame",
		output: {F: 1},
		
	},
	{
		input: "damel",
		output: {M: 1},
		
	},
	{
		input: "damier",
		output: {M: 1},
		
	},
	{
		input: "damnation",
		output: {F: 1},
		
	},
	{
		input: "damné",
		output: {M: 1},
		
	},
	{
		input: "damnée",
		output: {F: 1},
		
	},
	{
		input: "damoiseau",
		output: {M: 1},
		
	},
	{
		input: "damoisele",
		output: {F: 1},
		
	},
	{
		input: "damoiselle",
		output: {F: 1},
		
	},
	{
		input: "dan",
		output: {M: 1},
		
	},
	{
		input: "dance",
		output: {F: 1},
		
	},
	{
		input: "dancing",
		output: {M: 1},
		
	},
	{
		input: "dandy",
		output: {M: 1},
		
	},
	{
		input: "dandysme",
		output: {M: 1},
		
	},
	{
		input: "danger",
		output: {M: 1},
		
	},
	{
		input: "dangereuse",
		output: {F: 1},
		
	},
	{
		input: "dangerosité",
		output: {F: 1},
		
	},
	{
		input: "danse",
		output: {F: 1},
		
	},
	{
		input: "danseur",
		output: {M: 1},
		
	},
	{
		input: "danseuse",
		output: {F: 1},
		
	},
	{
		input: "danza",
		output: {F: 1},
		
	},
	{
		input: "dard",
		output: {M: 1},
		
	},
	{
		input: "darse",
		output: {F: 1},
		
	},
	{
		input: "darwinisme",
		output: {M: 1},
		
	},
	{
		input: "datagramme",
		output: {M: 1},
		
	},
	{
		input: "datar",
		output: {F: 1},
		
	},
	{
		input: "datation",
		output: {F: 1},
		
	},
	{
		input: "datcha",
		output: {F: 1},
		
	},
	{
		input: "date",
		output: {F: 1},
		
	},
	{
		input: "date",
		output: {M: 1},
		
	},
	{
		input: "datif",
		output: {M: 1},
		
	},
	{
		input: "dation",
		output: {F: 1},
		
	},
	{
		input: "datte",
		output: {F: 1},
		
	},
	{
		input: "datum",
		output: {M: 1},
		
	},
	{
		input: "daube",
		output: {F: 1},
		
	},
	{
		input: "dauphin",
		output: {M: 1},
		
	},
	{
		input: "dauphine",
		output: {F: 1},
		
	},
	{
		input: "daurade",
		output: {F: 1},
		
	},
	{
		input: "daïra",
		output: {F: 1},
		
	},
	{
		input: "dc",
		output: {F: 1},
		
	},
	{
		input: "dea",
		output: {F: 1},
		
	},
	{
		input: "dea",
		output: {M: 1},
		
	},
	{
		input: "deal",
		output: {M: 1},
		
	},
	{
		input: "dealer",
		output: {M: 1},
		
	},
	{
		input: "debat",
		output: {M: 1},
		
	},
	{
		input: "debiteur",
		output: {M: 1},
		
	},
	{
		input: "debriefing",
		output: {M: 1},
		
	},
	{
		input: "debut",
		output: {M: 1},
		
	},
	{
		input: "decadencia",
		output: {F: 1},
		
	},
	{
		input: "decision",
		output: {F: 1},
		
	},
	{
		input: "decisión",
		output: {F: 1},
		
	},
	{
		input: "declaración",
		output: {F: 1},
		
	},
	{
		input: "declaration",
		output: {F: 1},
		
	},
	{
		input: "decorum",
		output: {M: 1},
		
	},
	{
		input: "decouverte",
		output: {F: 1},
		
	},
	{
		input: "decret",
		output: {M: 1},
		
	},
	{
		input: "decumanus",
		output: {M: 1},
		
	},
	{
		input: "dedans",
		output: {M: 1},
		
	},
	{
		input: "defaut",
		output: {M: 1},
		
	},
	{
		input: "defensa",
		output: {F: 1},
		
	},
	{
		input: "defense",
		output: {F: 1},
		
	},
	{
		input: "deffence",
		output: {F: 1},
		
	},
	{
		input: "deffense",
		output: {F: 1},
		
	},
	{
		input: "definición",
		output: {F: 1},
		
	},
	{
		input: "definiens",
		output: {M: 1},
		
	},
	{
		input: "definition",
		output: {F: 1},
		
	},
	{
		input: "degre",
		output: {M: 1},
		
	},
	{
		input: "degré",
		output: {M: 1},
		
	},
	{
		input: "dehesa",
		output: {F: 1},
		
	},
	{
		input: "dehors",
		output: {M: 1},
		
	},
	{
		input: "deixis",
		output: {F: 1},
		
	},
	{
		input: "del",
		output: {F: 1},
		
	},
	{
		input: "delai",
		output: {M: 1},
		
	},
	{
		input: "delirium",
		output: {M: 1},
		
	},
	{
		input: "delivrance",
		output: {F: 1},
		
	},
	{
		input: "delta",
		output: {M: 1},
		
	},
	{
		input: "deltaméthrine",
		output: {F: 1},
		
	},
	{
		input: "deltoïde",
		output: {M: 1},
		
	},
	{
		input: "demanda",
		output: {F: 1},
		
	},
	{
		input: "demande",
		output: {F: 1},
		
	},
	{
		input: "demande",
		output: {M: 1},
		
	},
	{
		input: "demanderesse",
		output: {F: 1},
		
	},
	{
		input: "demandes",
		output: {M: 1},
		
	},
	{
		input: "demandeur",
		output: {M: 1},
		
	},
	{
		input: "demandons",
		output: {M: 1},
		
	},
	{
		input: "demarche",
		output: {F: 1},
		
	},
	{
		input: "demeure",
		output: {F: 1},
		
	},
	{
		input: "demeure",
		output: {M: 1},
		
	},
	{
		input: "demi",
		output: {F: 1},
		
	},
	{
		input: "demi",
		output: {M: 1},
		
	},
	{
		input: "demicercle",
		output: {M: 1},
		
	},
	{
		input: "demidouzaine",
		output: {F: 1},
		
	},
	{
		input: "demie",
		output: {F: 1},
		
	},
	{
		input: "demier",
		output: {M: 1},
		
	},
	{
		input: "demiheure",
		output: {F: 1},
		
	},
	{
		input: "demijournée",
		output: {F: 1},
		
	},
	{
		input: "demimillion",
		output: {M: 1},
		
	},
	{
		input: "demisiècle",
		output: {M: 1},
		
	},
	{
		input: "demière",
		output: {F: 1},
		
	},
	{
		input: "democracia",
		output: {F: 1},
		
	},
	{
		input: "democratie",
		output: {F: 1},
		
	},
	{
		input: "demoiselle",
		output: {F: 1},
		
	},
	{
		input: "demonstration",
		output: {F: 1},
		
	},
	{
		input: "demos",
		output: {M: 1},
		
	},
	{
		input: "dendrite",
		output: {F: 1},
		
	},
	{
		input: "dendrochronologie",
		output: {F: 1},
		
	},
	{
		input: "dendrogramme",
		output: {M: 1},
		
	},
	{
		input: "dengue",
		output: {F: 1},
		
	},
	{
		input: "denier",
		output: {M: 1},
		
	},
	{
		input: "denominación",
		output: {F: 1},
		
	},
	{
		input: "denrée",
		output: {F: 1},
		
	},
	{
		input: "dense",
		output: {F: 1},
		
	},
	{
		input: "dense",
		output: {M: 1},
		
	},
	{
		input: "densif",
		output: {F: 1},
		
	},
	{
		input: "densification",
		output: {F: 1},
		
	},
	{
		input: "densite",
		output: {F: 1},
		
	},
	{
		input: "densité",
		output: {F: 1},
		
	},
	{
		input: "dent",
		output: {F: 1},
		
	},
	{
		input: "dentale",
		output: {F: 1},
		
	},
	{
		input: "dentelle",
		output: {F: 1},
		
	},
	{
		input: "dentellière",
		output: {F: 1},
		
	},
	{
		input: "dentier",
		output: {M: 1},
		
	},
	{
		input: "dentifrice",
		output: {M: 1},
		
	},
	{
		input: "dentine",
		output: {F: 1},
		
	},
	{
		input: "dentiste",
		output: {F: 1},
		
	},
	{
		input: "dentiste",
		output: {M: 1},
		
	},
	{
		input: "dentisterie",
		output: {F: 1},
		
	},
	{
		input: "dentition",
		output: {F: 1},
		
	},
	{
		input: "denture",
		output: {F: 1},
		
	},
	{
		input: "denuncia",
		output: {F: 1},
		
	},
	{
		input: "depart",
		output: {M: 1},
		
	},
	{
		input: "departement",
		output: {M: 1},
		
	},
	{
		input: "dependance",
		output: {F: 1},
		
	},
	{
		input: "dependencia",
		output: {F: 1},
		
	},
	{
		input: "depense",
		output: {F: 1},
		
	},
	{
		input: "der",
		output: {F: 1},
		
	},
	{
		input: "derecha",
		output: {F: 1},
		
	},
	{
		input: "dermatite",
		output: {F: 1},
		
	},
	{
		input: "dermatologie",
		output: {F: 1},
		
	},
	{
		input: "dermatose",
		output: {F: 1},
		
	},
	{
		input: "derme",
		output: {M: 1},
		
	},
	{
		input: "dermite",
		output: {F: 1},
		
	},
	{
		input: "derniere",
		output: {F: 1},
		
	},
	{
		input: "dernière",
		output: {F: 1},
		
	},
	{
		input: "derrota",
		output: {F: 1},
		
	},
	{
		input: "derviche",
		output: {M: 1},
		
	},
	{
		input: "desaparición",
		output: {F: 1},
		
	},
	{
		input: "descellement",
		output: {M: 1},
		
	},
	{
		input: "descendance",
		output: {F: 1},
		
	},
	{
		input: "descendant",
		output: {M: 1},
		
	},
	{
		input: "descendante",
		output: {F: 1},
		
	},
	{
		input: "descenderie",
		output: {F: 1},
		
	},
	{
		input: "descente",
		output: {F: 1},
		
	},
	{
		input: "descrip",
		output: {F: 1},
		
	},
	{
		input: "descripción",
		output: {F: 1},
		
	},
	{
		input: "descripteur",
		output: {M: 1},
		
	},
	{
		input: "descriptif",
		output: {M: 1},
		
	},
	{
		input: "description",
		output: {F: 1},
		
	},
	{
		input: "deseo",
		output: {M: 1},
		
	},
	{
		input: "desert",
		output: {M: 1},
		
	},
	{
		input: "desespoir",
		output: {M: 1},
		
	},
	{
		input: "desideratum",
		output: {M: 1},
		
	},
	{
		input: "design",
		output: {M: 1},
		
	},
	{
		input: "designer",
		output: {M: 1},
		
	},
	{
		input: "desigualdad",
		output: {F: 1},
		
	},
	{
		input: "desir",
		output: {M: 1},
		
	},
	{
		input: "desmodonte",
		output: {M: 1},
		
	},
	{
		input: "desordre",
		output: {M: 1},
		
	},
	{
		input: "despence",
		output: {F: 1},
		
	},
	{
		input: "despense",
		output: {F: 1},
		
	},
	{
		input: "despote",
		output: {M: 1},
		
	},
	{
		input: "despotisme",
		output: {M: 1},
		
	},
	{
		input: "desquamation",
		output: {F: 1},
		
	},
	{
		input: "desquelles",
		output: {F: 1},
		
	},
	{
		input: "dessaisissement",
		output: {M: 1},
		
	},
	{
		input: "dessalement",
		output: {M: 1},
		
	},
	{
		input: "dessein",
		output: {M: 1},
		
	},
	{
		input: "desserrement",
		output: {M: 1},
		
	},
	{
		input: "dessert",
		output: {F: 1},
		
	},
	{
		input: "dessert",
		output: {M: 1},
		
	},
	{
		input: "desserte",
		output: {F: 1},
		
	},
	{
		input: "desservant",
		output: {M: 1},
		
	},
	{
		input: "dessication",
		output: {F: 1},
		
	},
	{
		input: "dessiccation",
		output: {F: 1},
		
	},
	{
		input: "dessin",
		output: {M: 1},
		
	},
	{
		input: "dessinateur",
		output: {M: 1},
		
	},
	{
		input: "dessinatrice",
		output: {F: 1},
		
	},
	{
		input: "dessous",
		output: {M: 1},
		
	},
	{
		input: "dessus",
		output: {F: 1},
		
	},
	{
		input: "dessus",
		output: {M: 1},
		
	},
	{
		input: "dessèchement",
		output: {M: 1},
		
	},
	{
		input: "destabilisation",
		output: {F: 1},
		
	},
	{
		input: "destin",
		output: {M: 1},
		
	},
	{
		input: "destinataire",
		output: {F: 1},
		
	},
	{
		input: "destinataire",
		output: {M: 1},
		
	},
	{
		input: "destinateur",
		output: {M: 1},
		
	},
	{
		input: "destination",
		output: {F: 1},
		
	},
	{
		input: "destine",
		output: {F: 1},
		
	},
	{
		input: "destitution",
		output: {F: 1},
		
	},
	{
		input: "destrier",
		output: {M: 1},
		
	},
	{
		input: "destroyer",
		output: {M: 1},
		
	},
	{
		input: "destrucción",
		output: {F: 1},
		
	},
	{
		input: "destructeur",
		output: {M: 1},
		
	},
	{
		input: "destruction",
		output: {F: 1},
		
	},
	{
		input: "destructivité",
		output: {F: 1},
		
	},
	{
		input: "destructuration",
		output: {F: 1},
		
	},
	{
		input: "detail",
		output: {M: 1},
		
	},
	{
		input: "determinación",
		output: {F: 1},
		
	},
	{
		input: "determination",
		output: {F: 1},
		
	},
	{
		input: "dette",
		output: {F: 1},
		
	},
	{
		input: "dette",
		output: {M: 1},
		
	},
	{
		input: "deuda",
		output: {F: 1},
		
	},
	{
		input: "deuil",
		output: {M: 1},
		
	},
	{
		input: "deus",
		output: {M: 1},
		
	},
	{
		input: "deutschemark",
		output: {M: 1},
		
	},
	{
		input: "deutérium",
		output: {M: 1},
		
	},
	{
		input: "deuxieme",
		output: {F: 1},
		
	},
	{
		input: "devancement",
		output: {M: 1},
		
	},
	{
		input: "devancier",
		output: {M: 1},
		
	},
	{
		input: "devanture",
		output: {F: 1},
		
	},
	{
		input: "developpement",
		output: {M: 1},
		
	},
	{
		input: "devenir",
		output: {M: 1},
		
	},
	{
		input: "devin",
		output: {M: 1},
		
	},
	{
		input: "devine",
		output: {F: 1},
		
	},
	{
		input: "devine",
		output: {M: 1},
		
	},
	{
		input: "devineresse",
		output: {F: 1},
		
	},
	{
		input: "devinette",
		output: {F: 1},
		
	},
	{
		input: "devint",
		output: {M: 1},
		
	},
	{
		input: "devis",
		output: {M: 1},
		
	},
	{
		input: "devise",
		output: {F: 1},
		
	},
	{
		input: "devoir",
		output: {F: 1},
		
	},
	{
		input: "devoir",
		output: {M: 1},
		
	},
	{
		input: "devons",
		output: {F: 1},
		
	},
	{
		input: "devons",
		output: {M: 1},
		
	},
	{
		input: "devotion",
		output: {F: 1},
		
	},
	{
		input: "dexaméthasone",
		output: {F: 1},
		
	},
	{
		input: "dextre",
		output: {F: 1},
		
	},
	{
		input: "dextérité",
		output: {F: 1},
		
	},
	{
		input: "dey",
		output: {M: 1},
		
	},
	{
		input: "dharma",
		output: {M: 1},
		
	},
	{
		input: "dhikr",
		output: {M: 1},
		
	},
	{
		input: "dhimma",
		output: {F: 1},
		
	},
	{
		input: "dhimmi",
		output: {M: 1},
		
	},
	{
		input: "dhimmitude",
		output: {F: 1},
		
	},
	{
		input: "di",
		output: {F: 1},
		
	},
	{
		input: "di",
		output: {M: 1},
		
	},
	{
		input: "dia",
		output: {F: 1},
		
	},
	{
		input: "dia",
		output: {M: 1},
		
	},
	{
		input: "diable",
		output: {F: 1},
		
	},
	{
		input: "diable",
		output: {M: 1},
		
	},
	{
		input: "diablerie",
		output: {F: 1},
		
	},
	{
		input: "diablesse",
		output: {F: 1},
		
	},
	{
		input: "diablotin",
		output: {M: 1},
		
	},
	{
		input: "diabolique",
		output: {F: 1},
		
	},
	{
		input: "diabolique",
		output: {M: 1},
		
	},
	{
		input: "diabolisation",
		output: {F: 1},
		
	},
	{
		input: "diabète",
		output: {M: 1},
		
	},
	{
		input: "diabétique",
		output: {M: 1},
		
	},
	{
		input: "diachronie",
		output: {F: 1},
		
	},
	{
		input: "diaconat",
		output: {M: 1},
		
	},
	{
		input: "diaconesse",
		output: {F: 1},
		
	},
	{
		input: "diaconie",
		output: {F: 1},
		
	},
	{
		input: "diacre",
		output: {M: 1},
		
	},
	{
		input: "diadème",
		output: {M: 1},
		
	},
	{
		input: "diagenèse",
		output: {F: 1},
		
	},
	{
		input: "diagnose",
		output: {F: 1},
		
	},
	{
		input: "diagnostic",
		output: {M: 1},
		
	},
	{
		input: "diagnostique",
		output: {M: 1},
		
	},
	{
		input: "diagonale",
		output: {F: 1},
		
	},
	{
		input: "diagonalisation",
		output: {F: 1},
		
	},
	{
		input: "diagramme",
		output: {M: 1},
		
	},
	{
		input: "diagraphie",
		output: {F: 1},
		
	},
	{
		input: "diaire",
		output: {M: 1},
		
	},
	{
		input: "dialectal",
		output: {M: 1},
		
	},
	{
		input: "dialecte",
		output: {M: 1},
		
	},
	{
		input: "dialecticien",
		output: {M: 1},
		
	},
	{
		input: "dialectique",
		output: {F: 1},
		
	},
	{
		input: "dialectique",
		output: {M: 1},
		
	},
	{
		input: "dialectisation",
		output: {F: 1},
		
	},
	{
		input: "dialectologie",
		output: {F: 1},
		
	},
	{
		input: "dialectologue",
		output: {M: 1},
		
	},
	{
		input: "dialogique",
		output: {F: 1},
		
	},
	{
		input: "dialogique",
		output: {M: 1},
		
	},
	{
		input: "dialogisme",
		output: {M: 1},
		
	},
	{
		input: "dialogue",
		output: {M: 1},
		
	},
	{
		input: "dialoguiste",
		output: {M: 1},
		
	},
	{
		input: "dialysat",
		output: {M: 1},
		
	},
	{
		input: "dialyse",
		output: {F: 1},
		
	},
	{
		input: "dialéctica",
		output: {F: 1},
		
	},
	{
		input: "diamant",
		output: {M: 1},
		
	},
	{
		input: "diamantaire",
		output: {M: 1},
		
	},
	{
		input: "diametre",
		output: {M: 1},
		
	},
	{
		input: "diamètre",
		output: {M: 1},
		
	},
	{
		input: "diane",
		output: {F: 1},
		
	},
	{
		input: "dianoia",
		output: {F: 1},
		
	},
	{
		input: "diapason",
		output: {M: 1},
		
	},
	{
		input: "diapause",
		output: {F: 1},
		
	},
	{
		input: "diaphane",
		output: {M: 1},
		
	},
	{
		input: "diaphonie",
		output: {F: 1},
		
	},
	{
		input: "diaphragme",
		output: {M: 1},
		
	},
	{
		input: "diaphyse",
		output: {F: 1},
		
	},
	{
		input: "diapo",
		output: {F: 1},
		
	},
	{
		input: "diaporama",
		output: {M: 1},
		
	},
	{
		input: "diapositive",
		output: {F: 1},
		
	},
	{
		input: "diariste",
		output: {F: 1},
		
	},
	{
		input: "diariste",
		output: {M: 1},
		
	},
	{
		input: "diarrhée",
		output: {F: 1},
		
	},
	{
		input: "diaspora",
		output: {F: 1},
		
	},
	{
		input: "diastase",
		output: {F: 1},
		
	},
	{
		input: "diastole",
		output: {F: 1},
		
	},
	{
		input: "diastème",
		output: {M: 1},
		
	},
	{
		input: "diathèse",
		output: {F: 1},
		
	},
	{
		input: "diatribe",
		output: {F: 1},
		
	},
	{
		input: "diazépam",
		output: {M: 1},
		
	},
	{
		input: "dicastère",
		output: {M: 1},
		
	},
	{
		input: "dice",
		output: {M: 1},
		
	},
	{
		input: "dicha",
		output: {F: 1},
		
	},
	{
		input: "dichotomie",
		output: {F: 1},
		
	},
	{
		input: "dichotomisation",
		output: {F: 1},
		
	},
	{
		input: "dicibilité",
		output: {F: 1},
		
	},
	{
		input: "dicible",
		output: {M: 1},
		
	},
	{
		input: "dico",
		output: {M: 1},
		
	},
	{
		input: "dict",
		output: {M: 1},
		
	},
	{
		input: "dictadura",
		output: {F: 1},
		
	},
	{
		input: "dictamen",
		output: {M: 1},
		
	},
	{
		input: "dictaphone",
		output: {M: 1},
		
	},
	{
		input: "dictateur",
		output: {M: 1},
		
	},
	{
		input: "dictature",
		output: {F: 1},
		
	},
	{
		input: "dicte",
		output: {F: 1},
		
	},
	{
		input: "diction",
		output: {F: 1},
		
	},
	{
		input: "dictionnaire",
		output: {M: 1},
		
	},
	{
		input: "dictionnairique",
		output: {F: 1},
		
	},
	{
		input: "dicton",
		output: {M: 1},
		
	},
	{
		input: "dictum",
		output: {M: 1},
		
	},
	{
		input: "dictée",
		output: {F: 1},
		
	},
	{
		input: "didacticiel",
		output: {M: 1},
		
	},
	{
		input: "didacticien",
		output: {M: 1},
		
	},
	{
		input: "didactique",
		output: {F: 1},
		
	},
	{
		input: "didactique",
		output: {M: 1},
		
	},
	{
		input: "didactisation",
		output: {F: 1},
		
	},
	{
		input: "didactisme",
		output: {M: 1},
		
	},
	{
		input: "didactologie",
		output: {F: 1},
		
	},
	{
		input: "didascalie",
		output: {F: 1},
		
	},
	{
		input: "dieldrine",
		output: {F: 1},
		
	},
	{
		input: "diencéphale",
		output: {M: 1},
		
	},
	{
		input: "dies",
		output: {M: 1},
		
	},
	{
		input: "diesel",
		output: {M: 1},
		
	},
	{
		input: "dieu",
		output: {M: 1},
		
	},
	{
		input: "dif",
		output: {F: 1},
		
	},
	{
		input: "diferencia",
		output: {F: 1},
		
	},
	{
		input: "diffamation",
		output: {F: 1},
		
	},
	{
		input: "difference",
		output: {F: 1},
		
	},
	{
		input: "differenciation",
		output: {F: 1},
		
	},
	{
		input: "differenza",
		output: {F: 1},
		
	},
	{
		input: "differenze",
		output: {M: 1},
		
	},
	{
		input: "difficulte",
		output: {F: 1},
		
	},
	{
		input: "difficulté",
		output: {F: 1},
		
	},
	{
		input: "difficultés",
		output: {F: 1},
		
	},
	{
		input: "difforme",
		output: {M: 1},
		
	},
	{
		input: "difformité",
		output: {F: 1},
		
	},
	{
		input: "diffraction",
		output: {F: 1},
		
	},
	{
		input: "diffractomètre",
		output: {M: 1},
		
	},
	{
		input: "diffuse",
		output: {F: 1},
		
	},
	{
		input: "diffuse",
		output: {M: 1},
		
	},
	{
		input: "diffuseur",
		output: {M: 1},
		
	},
	{
		input: "diffusion",
		output: {F: 1},
		
	},
	{
		input: "diffusionnisme",
		output: {M: 1},
		
	},
	{
		input: "diffusivité",
		output: {F: 1},
		
	},
	{
		input: "diffé",
		output: {F: 1},
		
	},
	{
		input: "différance",
		output: {F: 1},
		
	},
	{
		input: "différence",
		output: {F: 1},
		
	},
	{
		input: "différences",
		output: {F: 1},
		
	},
	{
		input: "différenciation",
		output: {F: 1},
		
	},
	{
		input: "différencie",
		output: {F: 1},
		
	},
	{
		input: "différencie",
		output: {M: 1},
		
	},
	{
		input: "différencier",
		output: {F: 1},
		
	},
	{
		input: "différend",
		output: {M: 1},
		
	},
	{
		input: "différentialisme",
		output: {M: 1},
		
	},
	{
		input: "différentiation",
		output: {F: 1},
		
	},
	{
		input: "différentiel",
		output: {M: 1},
		
	},
	{
		input: "différentielle",
		output: {F: 1},
		
	},
	{
		input: "différé",
		output: {M: 1},
		
	},
	{
		input: "dificultad",
		output: {F: 1},
		
	},
	{
		input: "difusión",
		output: {F: 1},
		
	},
	{
		input: "digest",
		output: {M: 1},
		
	},
	{
		input: "digesteur",
		output: {M: 1},
		
	},
	{
		input: "digestibilité",
		output: {F: 1},
		
	},
	{
		input: "digestif",
		output: {M: 1},
		
	},
	{
		input: "digestion",
		output: {F: 1},
		
	},
	{
		input: "digital",
		output: {M: 1},
		
	},
	{
		input: "digitale",
		output: {F: 1},
		
	},
	{
		input: "digitaline",
		output: {F: 1},
		
	},
	{
		input: "digitalisation",
		output: {F: 1},
		
	},
	{
		input: "diglossie",
		output: {F: 1},
		
	},
	{
		input: "digne",
		output: {F: 1},
		
	},
	{
		input: "digne",
		output: {M: 1},
		
	},
	{
		input: "dignitaire",
		output: {M: 1},
		
	},
	{
		input: "dignitas",
		output: {F: 1},
		
	},
	{
		input: "dignité",
		output: {F: 1},
		
	},
	{
		input: "digoxine",
		output: {F: 1},
		
	},
	{
		input: "digramme",
		output: {M: 1},
		
	},
	{
		input: "digression",
		output: {F: 1},
		
	},
	{
		input: "digue",
		output: {F: 1},
		
	},
	{
		input: "diguette",
		output: {F: 1},
		
	},
	{
		input: "dije",
		output: {M: 1},
		
	},
	{
		input: "dijo",
		output: {M: 1},
		
	},
	{
		input: "diktat",
		output: {M: 1},
		
	},
	{
		input: "dikè",
		output: {F: 1},
		
	},
	{
		input: "dilapidation",
		output: {F: 1},
		
	},
	{
		input: "dilatation",
		output: {F: 1},
		
	},
	{
		input: "dilection",
		output: {F: 1},
		
	},
	{
		input: "dilemme",
		output: {M: 1},
		
	},
	{
		input: "dilemne",
		output: {M: 1},
		
	},
	{
		input: "dilettante",
		output: {M: 1},
		
	},
	{
		input: "dilettantisme",
		output: {M: 1},
		
	},
	{
		input: "diligence",
		output: {F: 1},
		
	},
	{
		input: "diluant",
		output: {M: 1},
		
	},
	{
		input: "dilution",
		output: {F: 1},
		
	},
	{
		input: "dimanche",
		output: {M: 1},
		
	},
	{
		input: "dime",
		output: {F: 1},
		
	},
	{
		input: "dimen",
		output: {F: 1},
		
	},
	{
		input: "dimension",
		output: {F: 1},
		
	},
	{
		input: "dimensionalité",
		output: {F: 1},
		
	},
	{
		input: "dimensionnalité",
		output: {F: 1},
		
	},
	{
		input: "dimensionnement",
		output: {M: 1},
		
	},
	{
		input: "dimensión",
		output: {F: 1},
		
	},
	{
		input: "diminutif",
		output: {M: 1},
		
	},
	{
		input: "diminution",
		output: {F: 1},
		
	},
	{
		input: "dimorphisme",
		output: {M: 1},
		
	},
	{
		input: "dimère",
		output: {M: 1},
		
	},
	{
		input: "dimérisation",
		output: {F: 1},
		
	},
	{
		input: "dinanderie",
		output: {F: 1},
		
	},
	{
		input: "dinar",
		output: {M: 1},
		
	},
	{
		input: "dinde",
		output: {F: 1},
		
	},
	{
		input: "dindon",
		output: {M: 1},
		
	},
	{
		input: "diner",
		output: {M: 1},
		
	},
	{
		input: "dingue",
		output: {M: 1},
		
	},
	{
		input: "dinosaure",
		output: {M: 1},
		
	},
	{
		input: "dinámica",
		output: {F: 1},
		
	},
	{
		input: "diocèse",
		output: {M: 1},
		
	},
	{
		input: "diode",
		output: {F: 1},
		
	},
	{
		input: "diola",
		output: {M: 1},
		
	},
	{
		input: "dionysiaque",
		output: {M: 1},
		
	},
	{
		input: "dionysisme",
		output: {M: 1},
		
	},
	{
		input: "dioptre",
		output: {M: 1},
		
	},
	{
		input: "dioptrique",
		output: {F: 1},
		
	},
	{
		input: "diorama",
		output: {M: 1},
		
	},
	{
		input: "diorite",
		output: {F: 1},
		
	},
	{
		input: "dioula",
		output: {M: 1},
		
	},
	{
		input: "dioxine",
		output: {F: 1},
		
	},
	{
		input: "dioxyde",
		output: {M: 1},
		
	},
	{
		input: "dioxygène",
		output: {M: 1},
		
	},
	{
		input: "diphtongaison",
		output: {F: 1},
		
	},
	{
		input: "diphtongue",
		output: {F: 1},
		
	},
	{
		input: "diphtérie",
		output: {F: 1},
		
	},
	{
		input: "diplomate",
		output: {F: 1},
		
	},
	{
		input: "diplomate",
		output: {M: 1},
		
	},
	{
		input: "diplomatie",
		output: {F: 1},
		
	},
	{
		input: "diplomatique",
		output: {F: 1},
		
	},
	{
		input: "diplome",
		output: {M: 1},
		
	},
	{
		input: "diplopie",
		output: {F: 1},
		
	},
	{
		input: "diplôme",
		output: {M: 1},
		
	},
	{
		input: "diplômé",
		output: {M: 1},
		
	},
	{
		input: "diptyque",
		output: {M: 1},
		
	},
	{
		input: "dipôle",
		output: {M: 1},
		
	},
	{
		input: "dir",
		output: {F: 1},
		
	},
	{
		input: "dir",
		output: {M: 1},
		
	},
	{
		input: "dirai",
		output: {F: 1},
		
	},
	{
		input: "dirai",
		output: {M: 1},
		
	},
	{
		input: "dirais",
		output: {M: 1},
		
	},
	{
		input: "diras",
		output: {M: 1},
		
	},
	{
		input: "direc",
		output: {F: 1},
		
	},
	{
		input: "dirección",
		output: {F: 1},
		
	},
	{
		input: "directeur",
		output: {M: 1},
		
	},
	{
		input: "direction",
		output: {F: 1},
		
	},
	{
		input: "direction",
		output: {M: 1},
		
	},
	{
		input: "directionalité",
		output: {F: 1},
		
	},
	{
		input: "directionnalité",
		output: {F: 1},
		
	},
	{
		input: "directive",
		output: {F: 1},
		
	},
	{
		input: "directivité",
		output: {F: 1},
		
	},
	{
		input: "directoire",
		output: {M: 1},
		
	},
	{
		input: "directorat",
		output: {M: 1},
		
	},
	{
		input: "directrice",
		output: {F: 1},
		
	},
	{
		input: "dirham",
		output: {M: 1},
		
	},
	{
		input: "dirigeable",
		output: {M: 1},
		
	},
	{
		input: "dirigeant",
		output: {F: 1},
		
	},
	{
		input: "dirigeant",
		output: {M: 1},
		
	},
	{
		input: "dirigeante",
		output: {F: 1},
		
	},
	{
		input: "dirigent",
		output: {F: 1},
		
	},
	{
		input: "dirigisme",
		output: {M: 1},
		
	},
	{
		input: "dirons",
		output: {M: 1},
		
	},
	{
		input: "dis",
		output: {F: 1},
		
	},
	{
		input: "dis",
		output: {M: 1},
		
	},
	{
		input: "disais",
		output: {M: 1},
		
	},
	{
		input: "discernement",
		output: {M: 1},
		
	},
	{
		input: "disciple",
		output: {F: 1},
		
	},
	{
		input: "disciple",
		output: {M: 1},
		
	},
	{
		input: "disciplina",
		output: {F: 1},
		
	},
	{
		input: "disciplinarisation",
		output: {F: 1},
		
	},
	{
		input: "discipline",
		output: {F: 1},
		
	},
	{
		input: "disco",
		output: {M: 1},
		
	},
	{
		input: "discographie",
		output: {F: 1},
		
	},
	{
		input: "discontinu",
		output: {M: 1},
		
	},
	{
		input: "discontinuité",
		output: {F: 1},
		
	},
	{
		input: "disconvenance",
		output: {F: 1},
		
	},
	{
		input: "discord",
		output: {M: 1},
		
	},
	{
		input: "discordance",
		output: {F: 1},
		
	},
	{
		input: "discorde",
		output: {F: 1},
		
	},
	{
		input: "discothèque",
		output: {F: 1},
		
	},
	{
		input: "discount",
		output: {M: 1},
		
	},
	{
		input: "discoureur",
		output: {M: 1},
		
	},
	{
		input: "discours",
		output: {M: 1},
		
	},
	{
		input: "discret",
		output: {M: 1},
		
	},
	{
		input: "discriminant",
		output: {M: 1},
		
	},
	{
		input: "discrimination",
		output: {F: 1},
		
	},
	{
		input: "discrète",
		output: {F: 1},
		
	},
	{
		input: "discrédit",
		output: {M: 1},
		
	},
	{
		input: "discrétion",
		output: {F: 1},
		
	},
	{
		input: "discrétisation",
		output: {F: 1},
		
	},
	{
		input: "disculpation",
		output: {F: 1},
		
	},
	{
		input: "discursif",
		output: {M: 1},
		
	},
	{
		input: "discursivité",
		output: {F: 1},
		
	},
	{
		input: "discurso",
		output: {M: 1},
		
	},
	{
		input: "discusión",
		output: {F: 1},
		
	},
	{
		input: "discussion",
		output: {F: 1},
		
	},
	{
		input: "dise",
		output: {M: 1},
		
	},
	{
		input: "disegno",
		output: {M: 1},
		
	},
	{
		input: "disette",
		output: {F: 1},
		
	},
	{
		input: "diseur",
		output: {M: 1},
		
	},
	{
		input: "diseuse",
		output: {F: 1},
		
	},
	{
		input: "disfonctionnement",
		output: {M: 1},
		
	},
	{
		input: "disgrâce",
		output: {F: 1},
		
	},
	{
		input: "disharmonie",
		output: {F: 1},
		
	},
	{
		input: "disions",
		output: {M: 1},
		
	},
	{
		input: "disjoncteur",
		output: {M: 1},
		
	},
	{
		input: "disjonction",
		output: {F: 1},
		
	},
	{
		input: "dislance",
		output: {F: 1},
		
	},
	{
		input: "dislocation",
		output: {F: 1},
		
	},
	{
		input: "disminución",
		output: {F: 1},
		
	},
	{
		input: "disons",
		output: {M: 1},
		
	},
	{
		input: "disparate",
		output: {F: 1},
		
	},
	{
		input: "disparate",
		output: {M: 1},
		
	},
	{
		input: "disparition",
		output: {F: 1},
		
	},
	{
		input: "disparité",
		output: {F: 1},
		
	},
	{
		input: "disparue",
		output: {F: 1},
		
	},
	{
		input: "dispatching",
		output: {M: 1},
		
	},
	{
		input: "dispensaire",
		output: {M: 1},
		
	},
	{
		input: "dispensateur",
		output: {M: 1},
		
	},
	{
		input: "dispensation",
		output: {F: 1},
		
	},
	{
		input: "dispensatrice",
		output: {F: 1},
		
	},
	{
		input: "dispense",
		output: {F: 1},
		
	},
	{
		input: "dispense",
		output: {M: 1},
		
	},
	{
		input: "dispersion",
		output: {F: 1},
		
	},
	{
		input: "disponibilité",
		output: {F: 1},
		
	},
	{
		input: "disposición",
		output: {F: 1},
		
	},
	{
		input: "dispositif",
		output: {M: 1},
		
	},
	{
		input: "dispositio",
		output: {F: 1},
		
	},
	{
		input: "disposition",
		output: {F: 1},
		
	},
	{
		input: "dispositions",
		output: {F: 1},
		
	},
	{
		input: "disproportion",
		output: {F: 1},
		
	},
	{
		input: "disputatio",
		output: {F: 1},
		
	},
	{
		input: "disputation",
		output: {F: 1},
		
	},
	{
		input: "dispute",
		output: {F: 1},
		
	},
	{
		input: "dispute",
		output: {M: 1},
		
	},
	{
		input: "disquaire",
		output: {M: 1},
		
	},
	{
		input: "disqualification",
		output: {F: 1},
		
	},
	{
		input: "disque",
		output: {M: 1},
		
	},
	{
		input: "disquette",
		output: {F: 1},
		
	},
	{
		input: "disruption",
		output: {F: 1},
		
	},
	{
		input: "dissection",
		output: {F: 1},
		
	},
	{
		input: "dissemblable",
		output: {M: 1},
		
	},
	{
		input: "dissemblance",
		output: {F: 1},
		
	},
	{
		input: "dissension",
		output: {F: 1},
		
	},
	{
		input: "dissensus",
		output: {M: 1},
		
	},
	{
		input: "dissentiment",
		output: {M: 1},
		
	},
	{
		input: "dissertation",
		output: {F: 1},
		
	},
	{
		input: "dissidence",
		output: {F: 1},
		
	},
	{
		input: "dissident",
		output: {M: 1},
		
	},
	{
		input: "dissimilarité",
		output: {F: 1},
		
	},
	{
		input: "dissimilation",
		output: {F: 1},
		
	},
	{
		input: "dissimilitude",
		output: {F: 1},
		
	},
	{
		input: "dissimulation",
		output: {F: 1},
		
	},
	{
		input: "dissipateur",
		output: {M: 1},
		
	},
	{
		input: "dissipation",
		output: {F: 1},
		
	},
	{
		input: "dissociation",
		output: {F: 1},
		
	},
	{
		input: "dissolution",
		output: {F: 1},
		
	},
	{
		input: "dissolvant",
		output: {M: 1},
		
	},
	{
		input: "dissonance",
		output: {F: 1},
		
	},
	{
		input: "dissout",
		output: {F: 1},
		
	},
	{
		input: "dissout",
		output: {M: 1},
		
	},
	{
		input: "dissuasion",
		output: {F: 1},
		
	},
	{
		input: "dissymétrie",
		output: {F: 1},
		
	},
	{
		input: "dissémination",
		output: {F: 1},
		
	},
	{
		input: "distance",
		output: {F: 1},
		
	},
	{
		input: "distancia",
		output: {F: 1},
		
	},
	{
		input: "distanciation",
		output: {F: 1},
		
	},
	{
		input: "distension",
		output: {F: 1},
		
	},
	{
		input: "distillat",
		output: {M: 1},
		
	},
	{
		input: "distillateur",
		output: {M: 1},
		
	},
	{
		input: "distillation",
		output: {F: 1},
		
	},
	{
		input: "distillerie",
		output: {F: 1},
		
	},
	{
		input: "distinción",
		output: {F: 1},
		
	},
	{
		input: "distinct",
		output: {M: 1},
		
	},
	{
		input: "distinction",
		output: {F: 1},
		
	},
	{
		input: "distinctivité",
		output: {F: 1},
		
	},
	{
		input: "distingue",
		output: {F: 1},
		
	},
	{
		input: "distingue",
		output: {M: 1},
		
	},
	{
		input: "distinguent",
		output: {F: 1},
		
	},
	{
		input: "distinguo",
		output: {M: 1},
		
	},
	{
		input: "distingué",
		output: {M: 1},
		
	},
	{
		input: "distique",
		output: {M: 1},
		
	},
	{
		input: "distorsion",
		output: {F: 1},
		
	},
	{
		input: "distortion",
		output: {F: 1},
		
	},
	{
		input: "distracteur",
		output: {M: 1},
		
	},
	{
		input: "distraction",
		output: {F: 1},
		
	},
	{
		input: "distraire",
		output: {F: 1},
		
	},
	{
		input: "distrait",
		output: {M: 1},
		
	},
	{
		input: "distribución",
		output: {F: 1},
		
	},
	{
		input: "distributeur",
		output: {M: 1},
		
	},
	{
		input: "distribution",
		output: {F: 1},
		
	},
	{
		input: "distributivité",
		output: {F: 1},
		
	},
	{
		input: "district",
		output: {M: 1},
		
	},
	{
		input: "dithyrambe",
		output: {M: 1},
		
	},
	{
		input: "ditte",
		output: {F: 1},
		
	},
	{
		input: "diurne",
		output: {M: 1},
		
	},
	{
		input: "diurèse",
		output: {F: 1},
		
	},
	{
		input: "diurétique",
		output: {M: 1},
		
	},
	{
		input: "diva",
		output: {F: 1},
		
	},
	{
		input: "divagation",
		output: {F: 1},
		
	},
	{
		input: "divan",
		output: {M: 1},
		
	},
	{
		input: "dive",
		output: {F: 1},
		
	},
	{
		input: "diver",
		output: {F: 1},
		
	},
	{
		input: "divergence",
		output: {F: 1},
		
	},
	{
		input: "diversidad",
		output: {F: 1},
		
	},
	{
		input: "diversification",
		output: {F: 1},
		
	},
	{
		input: "diversion",
		output: {F: 1},
		
	},
	{
		input: "diversite",
		output: {F: 1},
		
	},
	{
		input: "diversité",
		output: {F: 1},
		
	},
	{
		input: "diverticule",
		output: {M: 1},
		
	},
	{
		input: "divertissement",
		output: {M: 1},
		
	},
	{
		input: "divi",
		output: {F: 1},
		
	},
	{
		input: "dividende",
		output: {M: 1},
		
	},
	{
		input: "divin",
		output: {M: 1},
		
	},
	{
		input: "divina",
		output: {F: 1},
		
	},
	{
		input: "divination",
		output: {F: 1},
		
	},
	{
		input: "divine",
		output: {F: 1},
		
	},
	{
		input: "divinidad",
		output: {F: 1},
		
	},
	{
		input: "divinisation",
		output: {F: 1},
		
	},
	{
		input: "divinité",
		output: {F: 1},
		
	},
	{
		input: "divise",
		output: {F: 1},
		
	},
	{
		input: "divisent",
		output: {F: 1},
		
	},
	{
		input: "diviseur",
		output: {M: 1},
		
	},
	{
		input: "divisibilité",
		output: {F: 1},
		
	},
	{
		input: "division",
		output: {F: 1},
		
	},
	{
		input: "divisionnaire",
		output: {M: 1},
		
	},
	{
		input: "divisionnisme",
		output: {M: 1},
		
	},
	{
		input: "división",
		output: {F: 1},
		
	},
	{
		input: "divorce",
		output: {M: 1},
		
	},
	{
		input: "divorcé",
		output: {M: 1},
		
	},
	{
		input: "divorcée",
		output: {F: 1},
		
	},
	{
		input: "divortialité",
		output: {F: 1},
		
	},
	{
		input: "divulgation",
		output: {F: 1},
		
	},
	{
		input: "diwan",
		output: {M: 1},
		
	},
	{
		input: "dixième",
		output: {F: 1},
		
	},
	{
		input: "dixième",
		output: {M: 1},
		
	},
	{
		input: "dixme",
		output: {F: 1},
		
	},
	{
		input: "diya",
		output: {F: 1},
		
	},
	{
		input: "dizain",
		output: {M: 1},
		
	},
	{
		input: "dizaine",
		output: {F: 1},
		
	},
	{
		input: "dizaines",
		output: {F: 1},
		
	},
	{
		input: "dizième",
		output: {M: 1},
		
	},
	{
		input: "dièdre",
		output: {M: 1},
		
	},
	{
		input: "dièse",
		output: {F: 1},
		
	},
	{
		input: "dièse",
		output: {M: 1},
		
	},
	{
		input: "diète",
		output: {F: 1},
		
	},
	{
		input: "diégèse",
		output: {F: 1},
		
	},
	{
		input: "diélectrique",
		output: {M: 1},
		
	},
	{
		input: "diérèse",
		output: {F: 1},
		
	},
	{
		input: "diététicien",
		output: {M: 1},
		
	},
	{
		input: "diététicienne",
		output: {F: 1},
		
	},
	{
		input: "diététique",
		output: {F: 1},
		
	},
	{
		input: "djebel",
		output: {M: 1},
		
	},
	{
		input: "djellaba",
		output: {F: 1},
		
	},
	{
		input: "djemaa",
		output: {F: 1},
		
	},
	{
		input: "djemaâ",
		output: {F: 1},
		
	},
	{
		input: "djemâa",
		output: {F: 1},
		
	},
	{
		input: "djihad",
		output: {F: 1},
		
	},
	{
		input: "djihad",
		output: {M: 1},
		
	},
	{
		input: "djihâd",
		output: {M: 1},
		
	},
	{
		input: "djinn",
		output: {M: 1},
		
	},
	{
		input: "djizya",
		output: {F: 1},
		
	},
	{
		input: "djoundi",
		output: {M: 1},
		
	},
	{
		input: "do",
		output: {M: 1},
		
	},
	{
		input: "dobutamine",
		output: {F: 1},
		
	},
	{
		input: "doc",
		output: {F: 1},
		
	},
	{
		input: "doc",
		output: {M: 1},
		
	},
	{
		input: "docilité",
		output: {F: 1},
		
	},
	{
		input: "docimologie",
		output: {F: 1},
		
	},
	{
		input: "dock",
		output: {M: 1},
		
	},
	{
		input: "docker",
		output: {M: 1},
		
	},
	{
		input: "docte",
		output: {M: 1},
		
	},
	{
		input: "docteur",
		output: {M: 1},
		
	},
	{
		input: "docteure",
		output: {F: 1},
		
	},
	{
		input: "doctorant",
		output: {M: 1},
		
	},
	{
		input: "doctorat",
		output: {M: 1},
		
	},
	{
		input: "doctoresse",
		output: {F: 1},
		
	},
	{
		input: "doctrina",
		output: {F: 1},
		
	},
	{
		input: "doctrinaire",
		output: {M: 1},
		
	},
	{
		input: "doctrine",
		output: {F: 1},
		
	},
	{
		input: "docu",
		output: {M: 1},
		
	},
	{
		input: "document",
		output: {M: 1},
		
	},
	{
		input: "documentación",
		output: {F: 1},
		
	},
	{
		input: "documentaire",
		output: {M: 1},
		
	},
	{
		input: "documentaliste",
		output: {F: 1},
		
	},
	{
		input: "documentaliste",
		output: {M: 1},
		
	},
	{
		input: "documentariste",
		output: {M: 1},
		
	},
	{
		input: "documentation",
		output: {F: 1},
		
	},
	{
		input: "documento",
		output: {M: 1},
		
	},
	{
		input: "docétisme",
		output: {M: 1},
		
	},
	{
		input: "dodo",
		output: {M: 1},
		
	},
	{
		input: "dodécaphonisme",
		output: {M: 1},
		
	},
	{
		input: "dodécaèdre",
		output: {M: 1},
		
	},
	{
		input: "doge",
		output: {M: 1},
		
	},
	{
		input: "dogmatique",
		output: {F: 1},
		
	},
	{
		input: "dogmatique",
		output: {M: 1},
		
	},
	{
		input: "dogmatisation",
		output: {F: 1},
		
	},
	{
		input: "dogmatisme",
		output: {M: 1},
		
	},
	{
		input: "dogme",
		output: {M: 1},
		
	},
	{
		input: "dogue",
		output: {M: 1},
		
	},
	{
		input: "doigt",
		output: {M: 1},
		
	},
	{
		input: "doigté",
		output: {M: 1},
		
	},
	{
		input: "dois",
		output: {F: 1},
		
	},
	{
		input: "dois",
		output: {M: 1},
		
	},
	{
		input: "dojo",
		output: {M: 1},
		
	},
	{
		input: "dol",
		output: {M: 1},
		
	},
	{
		input: "doline",
		output: {F: 1},
		
	},
	{
		input: "dollar",
		output: {M: 1},
		
	},
	{
		input: "dollarisation",
		output: {F: 1},
		
	},
	{
		input: "dolman",
		output: {M: 1},
		
	},
	{
		input: "dolmen",
		output: {M: 1},
		
	},
	{
		input: "dolo",
		output: {M: 1},
		
	},
	{
		input: "dolomie",
		output: {F: 1},
		
	},
	{
		input: "dolomite",
		output: {F: 1},
		
	},
	{
		input: "dolomitisation",
		output: {F: 1},
		
	},
	{
		input: "dolorisme",
		output: {M: 1},
		
	},
	{
		input: "doléance",
		output: {F: 1},
		
	},
	{
		input: "dom",
		output: {M: 1},
		
	},
	{
		input: "domaine",
		output: {F: 1},
		
	},
	{
		input: "domaine",
		output: {M: 1},
		
	},
	{
		input: "domaines",
		output: {M: 1},
		
	},
	{
		input: "domanda",
		output: {F: 1},
		
	},
	{
		input: "domanialité",
		output: {F: 1},
		
	},
	{
		input: "domestication",
		output: {F: 1},
		
	},
	{
		input: "domesticité",
		output: {F: 1},
		
	},
	{
		input: "domestique",
		output: {F: 1},
		
	},
	{
		input: "domestique",
		output: {M: 1},
		
	},
	{
		input: "domicile",
		output: {M: 1},
		
	},
	{
		input: "domiciliation",
		output: {F: 1},
		
	},
	{
		input: "domina",
		output: {F: 1},
		
	},
	{
		input: "dominación",
		output: {F: 1},
		
	},
	{
		input: "dominance",
		output: {F: 1},
		
	},
	{
		input: "dominant",
		output: {M: 1},
		
	},
	{
		input: "dominante",
		output: {F: 1},
		
	},
	{
		input: "dominateur",
		output: {M: 1},
		
	},
	{
		input: "domination",
		output: {F: 1},
		
	},
	{
		input: "domine",
		output: {F: 1},
		
	},
	{
		input: "domine",
		output: {M: 1},
		
	},
	{
		input: "dominicain",
		output: {M: 1},
		
	},
	{
		input: "dominion",
		output: {M: 1},
		
	},
	{
		input: "dominium",
		output: {M: 1},
		
	},
	{
		input: "domino",
		output: {M: 1},
		
	},
	{
		input: "dominus",
		output: {M: 1},
		
	},
	{
		input: "dominé",
		output: {M: 1},
		
	},
	{
		input: "dommage",
		output: {M: 1},
		
	},
	{
		input: "domotique",
		output: {F: 1},
		
	},
	{
		input: "domptage",
		output: {M: 1},
		
	},
	{
		input: "dompteur",
		output: {M: 1},
		
	},
	{
		input: "domus",
		output: {F: 1},
		
	},
	{
		input: "don",
		output: {M: 1},
		
	},
	{
		input: "donataire",
		output: {M: 1},
		
	},
	{
		input: "donateur",
		output: {M: 1},
		
	},
	{
		input: "donation",
		output: {F: 1},
		
	},
	{
		input: "donatisme",
		output: {M: 1},
		
	},
	{
		input: "donatrice",
		output: {F: 1},
		
	},
	{
		input: "donjon",
		output: {M: 1},
		
	},
	{
		input: "donjuanisme",
		output: {M: 1},
		
	},
	{
		input: "donna",
		output: {F: 1},
		
	},
	{
		input: "donne",
		output: {F: 1},
		
	},
	{
		input: "donne",
		output: {M: 1},
		
	},
	{
		input: "donnerai",
		output: {F: 1},
		
	},
	{
		input: "donnerai",
		output: {M: 1},
		
	},
	{
		input: "donnes",
		output: {M: 1},
		
	},
	{
		input: "donneur",
		output: {M: 1},
		
	},
	{
		input: "donneuse",
		output: {F: 1},
		
	},
	{
		input: "donzelle",
		output: {F: 1},
		
	},
	{
		input: "dopage",
		output: {M: 1},
		
	},
	{
		input: "dopamine",
		output: {F: 1},
		
	},
	{
		input: "dope",
		output: {F: 1},
		
	},
	{
		input: "dorade",
		output: {F: 1},
		
	},
	{
		input: "doreur",
		output: {M: 1},
		
	},
	{
		input: "dorique",
		output: {M: 1},
		
	},
	{
		input: "doris",
		output: {M: 1},
		
	},
	{
		input: "dormance",
		output: {F: 1},
		
	},
	{
		input: "dormant",
		output: {M: 1},
		
	},
	{
		input: "dormeur",
		output: {M: 1},
		
	},
	{
		input: "dormeuse",
		output: {F: 1},
		
	},
	{
		input: "dormition",
		output: {F: 1},
		
	},
	{
		input: "dorsale",
		output: {F: 1},
		
	},
	{
		input: "dorsiflexion",
		output: {F: 1},
		
	},
	{
		input: "dortoir",
		output: {M: 1},
		
	},
	{
		input: "dorure",
		output: {F: 1},
		
	},
	{
		input: "doryphore",
		output: {M: 1},
		
	},
	{
		input: "doré",
		output: {M: 1},
		
	},
	{
		input: "dos",
		output: {M: 1},
		
	},
	{
		input: "dosage",
		output: {M: 1},
		
	},
	{
		input: "dose",
		output: {F: 1},
		
	},
	{
		input: "doseur",
		output: {M: 1},
		
	},
	{
		input: "dosimètre",
		output: {M: 1},
		
	},
	{
		input: "dosimétrie",
		output: {F: 1},
		
	},
	{
		input: "dossier",
		output: {M: 1},
		
	},
	{
		input: "dossière",
		output: {F: 1},
		
	},
	{
		input: "dot",
		output: {F: 1},
		
	},
	{
		input: "dota",
		output: {F: 1},
		
	},
	{
		input: "dota",
		output: {M: 1},
		
	},
	{
		input: "dotation",
		output: {F: 1},
		
	},
	{
		input: "dote",
		output: {F: 1},
		
	},
	{
		input: "dou",
		output: {F: 1},
		
	},
	{
		input: "douaire",
		output: {M: 1},
		
	},
	{
		input: "douairière",
		output: {F: 1},
		
	},
	{
		input: "douane",
		output: {F: 1},
		
	},
	{
		input: "douanier",
		output: {M: 1},
		
	},
	{
		input: "douar",
		output: {M: 1},
		
	},
	{
		input: "doublage",
		output: {M: 1},
		
	},
	{
		input: "double",
		output: {F: 1},
		
	},
	{
		input: "double",
		output: {M: 1},
		
	},
	{
		input: "doubleau",
		output: {M: 1},
		
	},
	{
		input: "doublement",
		output: {M: 1},
		
	},
	{
		input: "doublet",
		output: {M: 1},
		
	},
	{
		input: "doublon",
		output: {M: 1},
		
	},
	{
		input: "doublure",
		output: {F: 1},
		
	},
	{
		input: "douce",
		output: {F: 1},
		
	},
	{
		input: "douceur",
		output: {F: 1},
		
	},
	{
		input: "douche",
		output: {F: 1},
		
	},
	{
		input: "doucine",
		output: {F: 1},
		
	},
	{
		input: "douglas",
		output: {M: 1},
		
	},
	{
		input: "douille",
		output: {F: 1},
		
	},
	{
		input: "doulce",
		output: {F: 1},
		
	},
	{
		input: "douleur",
		output: {F: 1},
		
	},
	{
		input: "douloureuse",
		output: {F: 1},
		
	},
	{
		input: "douloureux",
		output: {M: 1},
		
	},
	{
		input: "douma",
		output: {F: 1},
		
	},
	{
		input: "doute",
		output: {M: 1},
		
	},
	{
		input: "douve",
		output: {F: 1},
		
	},
	{
		input: "fondu",
		output: {M: 1},
		
	},
	{
		input: "fondue",
		output: {F: 1},
		
	},
	{
		input: "fongibilité",
		output: {F: 1},
		
	},
	{
		input: "fongicide",
		output: {M: 1},
		
	},
	{
		input: "fonio",
		output: {M: 1},
		
	},
	{
		input: "impossibilité",
		output: {F: 1},
		
	},
	{
		input: "imposte",
		output: {F: 1},
		
	},
	{
		input: "imposteur",
		output: {M: 1},
		
	},
	{
		input: "imposture",
		output: {F: 1},
		
	},
	{
		input: "impotence",
		output: {F: 1},
		
	},
	{
		input: "imprenta",
		output: {F: 1},
		
	},
	{
		input: "impresión",
		output: {F: 1},
		
	},
	{
		input: "impression",
		output: {F: 1},
		
	},
	{
		input: "impressionnisme",
		output: {M: 1},
		
	},
	{
		input: "impressionniste",
		output: {M: 1},
		
	},
	{
		input: "imprimante",
		output: {F: 1},
		
	},
	{
		input: "imprimerie",
		output: {F: 1},
		
	},
	{
		input: "imprimeur",
		output: {M: 1},
		
	},
	{
		input: "imprimé",
		output: {M: 1},
		
	},
	{
		input: "improbable",
		output: {F: 1},
		
	},
	{
		input: "impromptu",
		output: {M: 1},
		
	},
	{
		input: "impropriété",
		output: {F: 1},
		
	},
	{
		input: "improvisateur",
		output: {M: 1},
		
	},
	{
		input: "improvisation",
		output: {F: 1},
		
	},
	{
		input: "imprudence",
		output: {F: 1},
		
	},
	{
		input: "imprudent",
		output: {M: 1},
		
	},
	{
		input: "imprécation",
		output: {F: 1},
		
	},
	{
		input: "imprécision",
		output: {F: 1},
		
	},
	{
		input: "imprégnation",
		output: {F: 1},
		
	},
	{
		input: "imprésario",
		output: {M: 1},
		
	},
	{
		input: "imprévisibilité",
		output: {F: 1},
		
	},
	{
		input: "imprévu",
		output: {M: 1},
		
	},
	{
		input: "impudence",
		output: {F: 1},
		
	},
	{
		input: "impudeur",
		output: {F: 1},
		
	},
	{
		input: "impuissance",
		output: {F: 1},
		
	},
	{
		input: "impuissant",
		output: {M: 1},
		
	},
	{
		input: "impulsion",
		output: {F: 1},
		
	},
	{
		input: "impulsivité",
		output: {F: 1},
		
	},
	{
		input: "impunité",
		output: {F: 1},
		
	},
	{
		input: "impureté",
		output: {F: 1},
		
	},
	{
		input: "imputation",
		output: {F: 1},
		
	},
	{
		input: "impédance",
		output: {F: 1},
		
	},
	{
		input: "impératif",
		output: {M: 1},
		
	},
	{
		input: "impératrice",
		output: {F: 1},
		
	},
	{
		input: "impérialisme",
		output: {M: 1},
		
	},
	{
		input: "impérieuse",
		output: {F: 1},
		
	},
	{
		input: "impétuosité",
		output: {F: 1},
		
	},
	{
		input: "impôt",
		output: {M: 1},
		
	},
	{
		input: "inachèvement",
		output: {M: 1},
		
	},
	{
		input: "inaction",
		output: {F: 1},
		
	},
	{
		input: "inactivation",
		output: {F: 1},
		
	},
	{
		input: "inactivité",
		output: {F: 1},
		
	},
	{
		input: "inadaptation",
		output: {F: 1},
		
	},
	{
		input: "inadapté",
		output: {M: 1},
		
	},
	{
		input: "inadvertance",
		output: {F: 1},
		
	},
	{
		input: "inadéquation",
		output: {F: 1},
		
	},
	{
		input: "inanimé",
		output: {M: 1},
		
	},
	{
		input: "inaptitude",
		output: {F: 1},
		
	},
	{
		input: "inattention",
		output: {F: 1},
		
	},
	{
		input: "inauguration",
		output: {F: 1},
		
	},
	{
		input: "incandescence",
		output: {F: 1},
		
	},
	{
		input: "incantation",
		output: {F: 1},
		
	},
	{
		input: "incapacité",
		output: {F: 1},
		
	},
	{
		input: "incarcération",
		output: {F: 1},
		
	},
	{
		input: "incarnation",
		output: {F: 1},
		
	},
	{
		input: "incartade",
		output: {F: 1},
		
	},
	{
		input: "incendiaire",
		output: {M: 1},
		
	},
	{
		input: "incendie",
		output: {M: 1},
		
	},
	{
		input: "incertitude",
		output: {F: 1},
		
	},
	{
		input: "incessant",
		output: {M: 1},
		
	},
	{
		input: "inceste",
		output: {M: 1},
		
	},
	{
		input: "incidence",
		output: {F: 1},
		
	},
	{
		input: "incidencia",
		output: {F: 1},
		
	},
	{
		input: "incident",
		output: {M: 1},
		
	},
	{
		input: "incinérateur",
		output: {M: 1},
		
	},
	{
		input: "incinération",
		output: {F: 1},
		
	},
	{
		input: "incipit",
		output: {M: 1},
		
	},
	{
		input: "incise",
		output: {F: 1},
		
	},
	{
		input: "incision",
		output: {F: 1},
		
	},
	{
		input: "incisive",
		output: {F: 1},
		
	},
	{
		input: "incitation",
		output: {F: 1},
		
	},
	{
		input: "incivilité",
		output: {F: 1},
		
	},
	{
		input: "inclinaison",
		output: {F: 1},
		
	},
	{
		input: "inclination",
		output: {F: 1},
		
	},
	{
		input: "inclusion",
		output: {F: 1},
		
	},
	{
		input: "inclusión",
		output: {F: 1},
		
	},
	{
		input: "incohérence",
		output: {F: 1},
		
	},
	{
		input: "incommensurabilité",
		output: {F: 1},
		
	},
	{
		input: "incommodité",
		output: {F: 1},
		
	},
	{
		input: "incommunicabilité",
		output: {F: 1},
		
	},
	{
		input: "incompatibilité",
		output: {F: 1},
		
	},
	{
		input: "incomplétude",
		output: {F: 1},
		
	},
	{
		input: "incompris",
		output: {M: 1},
		
	},
	{
		input: "incompréhension",
		output: {F: 1},
		
	},
	{
		input: "incompétence",
		output: {F: 1},
		
	},
	{
		input: "inconditionnel",
		output: {M: 1},
		
	},
	{
		input: "inconditionné",
		output: {M: 1},
		
	},
	{
		input: "inconduite",
		output: {F: 1},
		
	},
	{
		input: "inconfort",
		output: {M: 1},
		
	},
	{
		input: "incongruité",
		output: {F: 1},
		
	},
	{
		input: "inconnu",
		output: {M: 1},
		
	},
	{
		input: "inconnue",
		output: {F: 1},
		
	},
	{
		input: "inconscience",
		output: {F: 1},
		
	},
	{
		input: "inconscient",
		output: {M: 1},
		
	},
	{
		input: "inconsistance",
		output: {F: 1},
		
	},
	{
		input: "inconstance",
		output: {F: 1},
		
	},
	{
		input: "inconstitutionnalité",
		output: {F: 1},
		
	},
	{
		input: "inconséquence",
		output: {F: 1},
		
	},
	{
		input: "incontinence",
		output: {F: 1},
		
	},
	{
		input: "incontournable",
		output: {M: 1},
		
	},
	{
		input: "inconvenance",
		output: {F: 1},
		
	},
	{
		input: "inconvénient",
		output: {M: 1},
		
	},
	{
		input: "incorporación",
		output: {F: 1},
		
	},
	{
		input: "incorporation",
		output: {F: 1},
		
	},
	{
		input: "incorrection",
		output: {F: 1},
		
	},
	{
		input: "incorrigible",
		output: {M: 1},
		
	},
	{
		input: "incrimination",
		output: {F: 1},
		
	},
	{
		input: "incroyant",
		output: {M: 1},
		
	},
	{
		input: "incrustation",
		output: {F: 1},
		
	},
	{
		input: "incrédulité",
		output: {F: 1},
		
	},
	{
		input: "incrément",
		output: {M: 1},
		
	},
	{
		input: "incubateur",
		output: {M: 1},
		
	},
	{
		input: "incubation",
		output: {F: 1},
		
	},
	{
		input: "inculcation",
		output: {F: 1},
		
	},
	{
		input: "inculpation",
		output: {F: 1},
		
	},
	{
		input: "inculturation",
		output: {F: 1},
		
	},
	{
		input: "inculture",
		output: {F: 1},
		
	},
	{
		input: "incunable",
		output: {M: 1},
		
	},
	{
		input: "incurie",
		output: {F: 1},
		
	},
	{
		input: "incursion",
		output: {F: 1},
		
	},
	{
		input: "indemnisation",
		output: {F: 1},
		
	},
	{
		input: "indemnité",
		output: {F: 1},
		
	},
	{
		input: "independencia",
		output: {F: 1},
		
	},
	{
		input: "index",
		output: {M: 1},
		
	},
	{
		input: "indexation",
		output: {F: 1},
		
	},
	{
		input: "indicateur",
		output: {M: 1},
		
	},
	{
		input: "indicatif",
		output: {M: 1},
		
	},
	{
		input: "indication",
		output: {F: 1},
		
	},
	{
		input: "indicatrice",
		output: {F: 1},
		
	},
	{
		input: "indice",
		output: {M: 1},
		
	},
	{
		input: "indicible",
		output: {M: 1},
		
	},
	{
		input: "indien",
		output: {M: 1},
		
	},
	{
		input: "indifférence",
		output: {F: 1},
		
	},
	{
		input: "indifférenciation",
		output: {F: 1},
		
	},
	{
		input: "indifférent",
		output: {M: 1},
		
	},
	{
		input: "indigence",
		output: {F: 1},
		
	},
	{
		input: "indigent",
		output: {M: 1},
		
	},
	{
		input: "indigestion",
		output: {F: 1},
		
	},
	{
		input: "indignation",
		output: {F: 1},
		
	},
	{
		input: "indignité",
		output: {F: 1},
		
	},
	{
		input: "indigène",
		output: {F: 1},
		
	},
	{
		input: "indigène",
		output: {M: 1},
		
	},
	{
		input: "indiscipline",
		output: {F: 1},
		
	},
	{
		input: "indiscrétion",
		output: {F: 1},
		
	},
	{
		input: "indisponibilité",
		output: {F: 1},
		
	},
	{
		input: "indisposition",
		output: {F: 1},
		
	},
	{
		input: "indistinction",
		output: {F: 1},
		
	},
	{
		input: "individu",
		output: {M: 1},
		
	},
	{
		input: "individualisation",
		output: {F: 1},
		
	},
	{
		input: "individualisme",
		output: {M: 1},
		
	},
	{
		input: "individualiste",
		output: {M: 1},
		
	},
	{
		input: "individualité",
		output: {F: 1},
		
	},
	{
		input: "individuation",
		output: {F: 1},
		
	},
	{
		input: "individuel",
		output: {M: 1},
		
	},
	{
		input: "individuo",
		output: {M: 1},
		
	},
	{
		input: "indivisaire",
		output: {M: 1},
		
	},
	{
		input: "indivisibilité",
		output: {F: 1},
		
	},
	{
		input: "indivision",
		output: {F: 1},
		
	},
	{
		input: "indolence",
		output: {F: 1},
		
	},
	{
		input: "inductance",
		output: {F: 1},
		
	},
	{
		input: "inducteur",
		output: {M: 1},
		
	},
	{
		input: "induction",
		output: {F: 1},
		
	},
	{
		input: "indulgence",
		output: {F: 1},
		
	},
	{
		input: "induration",
		output: {F: 1},
		
	},
	{
		input: "industria",
		output: {F: 1},
		
	},
	{
		input: "industrialisation",
		output: {F: 1},
		
	},
	{
		input: "industrie",
		output: {F: 1},
		
	},
	{
		input: "industriel",
		output: {M: 1},
		
	},
	{
		input: "indécence",
		output: {F: 1},
		
	},
	{
		input: "indécision",
		output: {F: 1},
		
	},
	{
		input: "indéfini",
		output: {M: 1},
		
	},
	{
		input: "indélicatesse",
		output: {F: 1},
		
	},
	{
		input: "indéniable",
		output: {F: 1},
		
	},
	{
		input: "indépendance",
		output: {F: 1},
		
	},
	{
		input: "indépendant",
		output: {M: 1},
		
	},
	{
		input: "indétermination",
		output: {F: 1},
		
	},
	{
		input: "indéterminé",
		output: {M: 1},
		
	},
	{
		input: "inefficacité",
		output: {F: 1},
		
	},
	{
		input: "ineptie",
		output: {F: 1},
		
	},
	{
		input: "inertie",
		output: {F: 1},
		
	},
	{
		input: "inexactitude",
		output: {F: 1},
		
	},
	{
		input: "inexistence",
		output: {F: 1},
		
	},
	{
		input: "inexécution",
		output: {F: 1},
		
	},
	{
		input: "infaillibilité",
		output: {F: 1},
		
	},
	{
		input: "infamie",
		output: {F: 1},
		
	},
	{
		input: "infancia",
		output: {F: 1},
		
	},
	{
		input: "infante",
		output: {F: 1},
		
	},
	{
		input: "infanterie",
		output: {F: 1},
		
	},
	{
		input: "infanticide",
		output: {M: 1},
		
	},
	{
		input: "infantilisme",
		output: {M: 1},
		
	},
	{
		input: "infarctus",
		output: {M: 1},
		
	},
	{
		input: "infatigable",
		output: {F: 1},
		
	},
	{
		input: "infatigable",
		output: {M: 1},
		
	},
	{
		input: "infection",
		output: {F: 1},
		
	},
	{
		input: "infertilité",
		output: {F: 1},
		
	},
	{
		input: "infestation",
		output: {F: 1},
		
	},
	{
		input: "infidèle",
		output: {M: 1},
		
	},
	{
		input: "infidélité",
		output: {F: 1},
		
	},
	{
		input: "infiltrat",
		output: {M: 1},
		
	},
	{
		input: "infiltration",
		output: {F: 1},
		
	},
	{
		input: "infini",
		output: {M: 1},
		
	},
	{
		input: "infinie",
		output: {F: 1},
		
	},
	{
		input: "infinitif",
		output: {M: 1},
		
	},
	{
		input: "infinitive",
		output: {F: 1},
		
	},
	{
		input: "infinitude",
		output: {F: 1},
		
	},
	{
		input: "infinité",
		output: {F: 1},
		
	},
	{
		input: "infirmation",
		output: {F: 1},
		
	},
	{
		input: "infirme",
		output: {F: 1},
		
	},
	{
		input: "infirme",
		output: {M: 1},
		
	},
	{
		input: "infirmerie",
		output: {F: 1},
		
	},
	{
		input: "infirmier",
		output: {M: 1},
		
	},
	{
		input: "infirmité",
		output: {F: 1},
		
	},
	{
		input: "infirmière",
		output: {F: 1},
		
	},
	{
		input: "inflammation",
		output: {F: 1},
		
	},
	{
		input: "inflation",
		output: {F: 1},
		
	},
	{
		input: "inflexion",
		output: {F: 1},
		
	},
	{
		input: "inflorescence",
		output: {F: 1},
		
	},
	{
		input: "influence",
		output: {F: 1},
		
	},
	{
		input: "influencia",
		output: {F: 1},
		
	},
	{
		input: "influx",
		output: {M: 1},
		
	},
	{
		input: "infléchissement",
		output: {M: 1},
		
	},
	{
		input: "info",
		output: {F: 1},
		
	},
	{
		input: "información",
		output: {F: 1},
		
	},
	{
		input: "informaciôn",
		output: {F: 1},
		
	},
	{
		input: "informateur",
		output: {M: 1},
		
	},
	{
		input: "informaticien",
		output: {M: 1},
		
	},
	{
		input: "information",
		output: {F: 1},
		
	},
	{
		input: "informatique",
		output: {F: 1},
		
	},
	{
		input: "informatisation",
		output: {F: 1},
		
	},
	{
		input: "informatrice",
		output: {F: 1},
		
	},
	{
		input: "informe",
		output: {M: 1},
		
	},
	{
		input: "infortune",
		output: {F: 1},
		
	},
	{
		input: "infortuné",
		output: {M: 1},
		
	},
	{
		input: "infra",
		output: {F: 1},
		
	},
	{
		input: "infra",
		output: {M: 1},
		
	},
	{
		input: "infraction",
		output: {F: 1},
		
	},
	{
		input: "infrastructure",
		output: {F: 1},
		
	},
	{
		input: "infusion",
		output: {F: 1},
		
	},
	{
		input: "infâme",
		output: {M: 1},
		
	},
	{
		input: "inféodation",
		output: {F: 1},
		
	},
	{
		input: "inférence",
		output: {F: 1},
		
	},
	{
		input: "infériorité",
		output: {F: 1},
		
	},
	{
		input: "ingestion",
		output: {F: 1},
		
	},
	{
		input: "ingrat",
		output: {M: 1},
		
	},
	{
		input: "ingrate",
		output: {F: 1},
		
	},
	{
		input: "ingratitude",
		output: {F: 1},
		
	},
	{
		input: "ingrédient",
		output: {M: 1},
		
	},
	{
		input: "ingénierie",
		output: {F: 1},
		
	},
	{
		input: "ingénieur",
		output: {M: 1},
		
	},
	{
		input: "ingéniosité",
		output: {F: 1},
		
	},
	{
		input: "ingénue",
		output: {F: 1},
		
	},
	{
		input: "ingénuité",
		output: {F: 1},
		
	},
	{
		input: "ingérence",
		output: {F: 1},
		
	},
	{
		input: "inhalation",
		output: {F: 1},
		
	},
	{
		input: "inhibiteur",
		output: {M: 1},
		
	},
	{
		input: "inhibition",
		output: {F: 1},
		
	},
	{
		input: "inhumanité",
		output: {F: 1},
		
	},
	{
		input: "inhumation",
		output: {F: 1},
		
	},
	{
		input: "iniciativa",
		output: {F: 1},
		
	},
	{
		input: "inimitié",
		output: {F: 1},
		
	},
	{
		input: "iniquité",
		output: {F: 1},
		
	},
	{
		input: "initiateur",
		output: {M: 1},
		
	},
	{
		input: "initiation",
		output: {F: 1},
		
	},
	{
		input: "initiative",
		output: {F: 1},
		
	},
	{
		input: "initié",
		output: {M: 1},
		
	},
	{
		input: "injecteur",
		output: {M: 1},
		
	},
	{
		input: "injection",
		output: {F: 1},
		
	},
	{
		input: "injonction",
		output: {F: 1},
		
	},
	{
		input: "injure",
		output: {F: 1},
		
	},
	{
		input: "injustice",
		output: {F: 1},
		
	},
	{
		input: "inmigración",
		output: {F: 1},
		
	},
	{
		input: "innervation",
		output: {F: 1},
		
	},
	{
		input: "innocence",
		output: {F: 1},
		
	},
	{
		input: "innocent",
		output: {M: 1},
		
	},
	{
		input: "innovateur",
		output: {M: 1},
		
	},
	{
		input: "innovation",
		output: {F: 1},
		
	},
	{
		input: "inoculation",
		output: {F: 1},
		
	},
	{
		input: "inoculum",
		output: {M: 1},
		
	},
	{
		input: "inondation",
		output: {F: 1},
		
	},
	{
		input: "inonde",
		output: {M: 1},
		
	},
	{
		input: "inquisiteur",
		output: {M: 1},
		
	},
	{
		input: "inquisition",
		output: {F: 1},
		
	},
	{
		input: "inquiétude",
		output: {F: 1},
		
	},
	{
		input: "ins",
		output: {M: 1},
		
	},
	{
		input: "insatisfaction",
		output: {F: 1},
		
	},
	{
		input: "inscripción",
		output: {F: 1},
		
	},
	{
		input: "inscription",
		output: {F: 1},
		
	},
	{
		input: "insecte",
		output: {M: 1},
		
	},
	{
		input: "insecticide",
		output: {M: 1},
		
	},
	{
		input: "insensibilité",
		output: {F: 1},
		
	},
	{
		input: "insensé",
		output: {M: 1},
		
	},
	{
		input: "inserción",
		output: {F: 1},
		
	},
	{
		input: "insert",
		output: {M: 1},
		
	},
	{
		input: "insertion",
		output: {F: 1},
		
	},
	{
		input: "insight",
		output: {M: 1},
		
	},
	{
		input: "insigne",
		output: {F: 1},
		
	},
	{
		input: "insigne",
		output: {M: 1},
		
	},
	{
		input: "insignifiance",
		output: {F: 1},
		
	},
	{
		input: "insinuation",
		output: {F: 1},
		
	},
	{
		input: "insistance",
		output: {F: 1},
		
	},
	{
		input: "insolation",
		output: {F: 1},
		
	},
	{
		input: "insolence",
		output: {F: 1},
		
	},
	{
		input: "insolent",
		output: {M: 1},
		
	},
	{
		input: "insomnie",
		output: {F: 1},
		
	},
	{
		input: "insouciance",
		output: {F: 1},
		
	},
	{
		input: "insoumis",
		output: {M: 1},
		
	},
	{
		input: "insoumission",
		output: {F: 1},
		
	},
	{
		input: "inspecteur",
		output: {M: 1},
		
	},
	{
		input: "inspection",
		output: {F: 1},
		
	},
	{
		input: "inspectrice",
		output: {F: 1},
		
	},
	{
		input: "inspirateur",
		output: {M: 1},
		
	},
	{
		input: "inspiration",
		output: {F: 1},
		
	},
	{
		input: "inspiré",
		output: {M: 1},
		
	},
	{
		input: "instabilité",
		output: {F: 1},
		
	},
	{
		input: "instalación",
		output: {F: 1},
		
	},
	{
		input: "installation",
		output: {F: 1},
		
	},
	{
		input: "instance",
		output: {F: 1},
		
	},
	{
		input: "instanciation",
		output: {F: 1},
		
	},
	{
		input: "instant",
		output: {M: 1},
		
	},
	{
		input: "instantané",
		output: {M: 1},
		
	},
	{
		input: "instantanéité",
		output: {F: 1},
		
	},
	{
		input: "instauration",
		output: {F: 1},
		
	},
	{
		input: "instinct",
		output: {M: 1},
		
	},
	{
		input: "institución",
		output: {F: 1},
		
	},
	{
		input: "institut",
		output: {M: 1},
		
	},
	{
		input: "instituteur",
		output: {M: 1},
		
	},
	{
		input: "institution",
		output: {F: 1},
		
	},
	{
		input: "institutionnalisation",
		output: {F: 1},
		
	},
	{
		input: "institutrice",
		output: {F: 1},
		
	},
	{
		input: "instrucción",
		output: {F: 1},
		
	},
	{
		input: "instructeur",
		output: {M: 1},
		
	},
	{
		input: "instruction",
		output: {F: 1},
		
	},
	{
		input: "instrument",
		output: {M: 1},
		
	},
	{
		input: "instrumentalisation",
		output: {F: 1},
		
	},
	{
		input: "instrumentation",
		output: {F: 1},
		
	},
	{
		input: "instrumentiste",
		output: {M: 1},
		
	},
	{
		input: "instrumento",
		output: {M: 1},
		
	},
	{
		input: "insubordination",
		output: {F: 1},
		
	},
	{
		input: "insuccès",
		output: {M: 1},
		
	},
	{
		input: "insuffisance",
		output: {F: 1},
		
	},
	{
		input: "insularité",
		output: {F: 1},
		
	},
	{
		input: "insulte",
		output: {F: 1},
		
	},
	{
		input: "insurgé",
		output: {M: 1},
		
	},
	{
		input: "insurrection",
		output: {F: 1},
		
	},
	{
		input: "insécurité",
		output: {F: 1},
		
	},
	{
		input: "insémination",
		output: {F: 1},
		
	},
	{
		input: "integración",
		output: {F: 1},
		
	},
	{
		input: "integraciôn",
		output: {F: 1},
		
	},
	{
		input: "inteligencia",
		output: {F: 1},
		
	},
	{
		input: "intellect",
		output: {M: 1},
		
	},
	{
		input: "intellection",
		output: {F: 1},
		
	},
	{
		input: "intellectualisation",
		output: {F: 1},
		
	},
	{
		input: "intellectualisme",
		output: {M: 1},
		
	},
	{
		input: "intellectualité",
		output: {F: 1},
		
	},
	{
		input: "intellectuel",
		output: {M: 1},
		
	},
	{
		input: "intellectuelle",
		output: {F: 1},
		
	},
	{
		input: "intelligence",
		output: {F: 1},
		
	},
	{
		input: "intelligentsia",
		output: {F: 1},
		
	},
	{
		input: "intelligibilité",
		output: {F: 1},
		
	},
	{
		input: "intelligible",
		output: {M: 1},
		
	},
	{
		input: "intemporalité",
		output: {F: 1},
		
	},
	{
		input: "intención",
		output: {F: 1},
		
	},
	{
		input: "intendance",
		output: {F: 1},
		
	},
	{
		input: "intendant",
		output: {M: 1},
		
	},
	{
		input: "intense",
		output: {F: 1},
		
	},
	{
		input: "intense",
		output: {M: 1},
		
	},
	{
		input: "intensidad",
		output: {F: 1},
		
	},
	{
		input: "intensif",
		output: {M: 1},
		
	},
	{
		input: "intensification",
		output: {F: 1},
		
	},
	{
		input: "intensité",
		output: {F: 1},
		
	},
	{
		input: "intention",
		output: {F: 1},
		
	},
	{
		input: "intentionalité",
		output: {F: 1},
		
	},
	{
		input: "intentionnalité",
		output: {F: 1},
		
	},
	{
		input: "intento",
		output: {M: 1},
		
	},
	{
		input: "inter",
		output: {F: 1},
		
	},
	{
		input: "inter",
		output: {M: 1},
		
	},
	{
		input: "interacción",
		output: {F: 1},
		
	},
	{
		input: "interaction",
		output: {F: 1},
		
	},
	{
		input: "interactivité",
		output: {F: 1},
		
	},
	{
		input: "interception",
		output: {F: 1},
		
	},
	{
		input: "intercesseur",
		output: {M: 1},
		
	},
	{
		input: "intercession",
		output: {F: 1},
		
	},
	{
		input: "interchangeabilité",
		output: {F: 1},
		
	},
	{
		input: "intercommunalité",
		output: {F: 1},
		
	},
	{
		input: "intercompréhension",
		output: {F: 1},
		
	},
	{
		input: "interconnexion",
		output: {F: 1},
		
	},
	{
		input: "interdiction",
		output: {F: 1},
		
	},
	{
		input: "interdisciplinarité",
		output: {F: 1},
		
	},
	{
		input: "interdépendance",
		output: {F: 1},
		
	},
	{
		input: "interet",
		output: {M: 1},
		
	},
	{
		input: "interface",
		output: {F: 1},
		
	},
	{
		input: "interface",
		output: {M: 1},
		
	},
	{
		input: "interférence",
		output: {F: 1},
		
	},
	{
		input: "interféromètre",
		output: {M: 1},
		
	},
	{
		input: "intergroupe",
		output: {M: 1},
		
	},
	{
		input: "interjection",
		output: {F: 1},
		
	},
	{
		input: "interlangue",
		output: {F: 1},
		
	},
	{
		input: "interligne",
		output: {M: 1},
		
	},
	{
		input: "interlocuteur",
		output: {M: 1},
		
	},
	{
		input: "interlocution",
		output: {F: 1},
		
	},
	{
		input: "interlocutrice",
		output: {F: 1},
		
	},
	{
		input: "interlude",
		output: {M: 1},
		
	},
	{
		input: "interminable",
		output: {F: 1},
		
	},
	{
		input: "intermède",
		output: {M: 1},
		
	},
	{
		input: "intermédiaire",
		output: {F: 1},
		
	},
	{
		input: "intermédiaire",
		output: {M: 1},
		
	},
	{
		input: "intermédiation",
		output: {F: 1},
		
	},
	{
		input: "internalisation",
		output: {F: 1},
		
	},
	{
		input: "internat",
		output: {M: 1},
		
	},
	{
		input: "internationale",
		output: {F: 1},
		
	},
	{
		input: "internationalisation",
		output: {F: 1},
		
	},
	{
		input: "internationalisme",
		output: {M: 1},
		
	},
	{
		input: "internationaliste",
		output: {M: 1},
		
	},
	{
		input: "internaute",
		output: {M: 1},
		
	},
	{
		input: "internement",
		output: {M: 1},
		
	},
	{
		input: "interné",
		output: {M: 1},
		
	},
	{
		input: "interopérabilité",
		output: {F: 1},
		
	},
	{
		input: "interpellation",
		output: {F: 1},
		
	},
	{
		input: "interphone",
		output: {M: 1},
		
	},
	{
		input: "interpolation",
		output: {F: 1},
		
	},
	{
		input: "interposition",
		output: {F: 1},
		
	},
	{
		input: "interpretación",
		output: {F: 1},
		
	},
	{
		input: "interpretation",
		output: {F: 1},
		
	},
	{
		input: "interprète",
		output: {F: 1},
		
	},
	{
		input: "interprète",
		output: {M: 1},
		
	},
	{
		input: "interprétant",
		output: {M: 1},
		
	},
	{
		input: "interprétation",
		output: {F: 1},
		
	},
	{
		input: "interpréteur",
		output: {M: 1},
		
	},
	{
		input: "interpénétration",
		output: {F: 1},
		
	},
	{
		input: "interrelation",
		output: {F: 1},
		
	},
	{
		input: "interrogation",
		output: {F: 1},
		
	},
	{
		input: "interrogative",
		output: {F: 1},
		
	},
	{
		input: "interrogatoire",
		output: {M: 1},
		
	},
	{
		input: "interrupteur",
		output: {M: 1},
		
	},
	{
		input: "interruption",
		output: {F: 1},
		
	},
	{
		input: "interrègne",
		output: {M: 1},
		
	},
	{
		input: "intersection",
		output: {F: 1},
		
	},
	{
		input: "interstice",
		output: {M: 1},
		
	},
	{
		input: "intersubjectivité",
		output: {F: 1},
		
	},
	{
		input: "intertexte",
		output: {M: 1},
		
	},
	{
		input: "intertextualité",
		output: {F: 1},
		
	},
	{
		input: "intertitre",
		output: {M: 1},
		
	},
	{
		input: "intervalle",
		output: {M: 1},
		
	},
	{
		input: "intervenant",
		output: {M: 1},
		
	},
	{
		input: "intervenante",
		output: {F: 1},
		
	},
	{
		input: "intervención",
		output: {F: 1},
		
	},
	{
		input: "intervention",
		output: {F: 1},
		
	},
	{
		input: "interventionnisme",
		output: {M: 1},
		
	},
	{
		input: "interversion",
		output: {F: 1},
		
	},
	{
		input: "interview",
		output: {F: 1},
		
	},
	{
		input: "interview",
		output: {M: 1},
		
	},
	{
		input: "interviewé",
		output: {M: 1},
		
	},
	{
		input: "interviewée",
		output: {F: 1},
		
	},
	{
		input: "intestin",
		output: {M: 1},
		
	},
	{
		input: "intime",
		output: {F: 1},
		
	},
	{
		input: "intime",
		output: {M: 1},
		
	},
	{
		input: "intimidation",
		output: {F: 1},
		
	},
	{
		input: "intimité",
		output: {F: 1},
		
	},
	{
		input: "intitulé",
		output: {M: 1},
		
	},
	{
		input: "intolérance",
		output: {F: 1},
		
	},
	{
		input: "intonation",
		output: {F: 1},
		
	},
	{
		input: "intoxication",
		output: {F: 1},
		
	},
	{
		input: "intranet",
		output: {M: 1},
		
	},
	{
		input: "intransigeance",
		output: {F: 1},
		
	},
	{
		input: "intrant",
		output: {M: 1},
		
	},
	{
		input: "intrication",
		output: {F: 1},
		
	},
	{
		input: "intrigant",
		output: {M: 1},
		
	},
	{
		input: "intrigante",
		output: {F: 1},
		
	},
	{
		input: "intrigue",
		output: {F: 1},
		
	},
	{
		input: "introducción",
		output: {F: 1},
		
	},
	{
		input: "introducteur",
		output: {M: 1},
		
	},
	{
		input: "introduction",
		output: {F: 1},
		
	},
	{
		input: "introjection",
		output: {F: 1},
		
	},
	{
		input: "intronisation",
		output: {F: 1},
		
	},
	{
		input: "introspection",
		output: {F: 1},
		
	},
	{
		input: "intrus",
		output: {M: 1},
		
	},
	{
		input: "intruse",
		output: {F: 1},
		
	},
	{
		input: "intrusion",
		output: {F: 1},
		
	},
	{
		input: "intrépide",
		output: {M: 1},
		
	},
	{
		input: "intrépidité",
		output: {F: 1},
		
	},
	{
		input: "intubation",
		output: {F: 1},
		
	},
	{
		input: "intuition",
		output: {F: 1},
		
	},
	{
		input: "intégrale",
		output: {F: 1},
		
	},
	{
		input: "intégrateur",
		output: {M: 1},
		
	},
	{
		input: "intégration",
		output: {F: 1},
		
	},
	{
		input: "intégrisme",
		output: {M: 1},
		
	},
	{
		input: "intégriste",
		output: {M: 1},
		
	},
	{
		input: "intégrité",
		output: {F: 1},
		
	},
	{
		input: "intéressante",
		output: {F: 1},
		
	},
	{
		input: "intéressement",
		output: {M: 1},
		
	},
	{
		input: "intéressé",
		output: {M: 1},
		
	},
	{
		input: "intérieur",
		output: {M: 1},
		
	},
	{
		input: "intérim",
		output: {M: 1},
		
	},
	{
		input: "intérimaire",
		output: {M: 1},
		
	},
	{
		input: "intériorisation",
		output: {F: 1},
		
	},
	{
		input: "intériorité",
		output: {F: 1},
		
	},
	{
		input: "intérêt",
		output: {M: 1},
		
	},
	{
		input: "inutilité",
		output: {F: 1},
		
	},
	{
		input: "invagination",
		output: {F: 1},
		
	},
	{
		input: "invalidation",
		output: {F: 1},
		
	},
	{
		input: "invalide",
		output: {M: 1},
		
	},
	{
		input: "invalidité",
		output: {F: 1},
		
	},
	{
		input: "invariance",
		output: {F: 1},
		
	},
	{
		input: "invariant",
		output: {M: 1},
		
	},
	{
		input: "invasion",
		output: {F: 1},
		
	},
	{
		input: "invasión",
		output: {F: 1},
		
	},
	{
		input: "invective",
		output: {F: 1},
		
	},
	{
		input: "invención",
		output: {F: 1},
		
	},
	{
		input: "inventaire",
		output: {M: 1},
		
	},
	{
		input: "inventeur",
		output: {M: 1},
		
	},
	{
		input: "invention",
		output: {F: 1},
		
	},
	{
		input: "inventivité",
		output: {F: 1},
		
	},
	{
		input: "inversa",
		output: {F: 1},
		
	},
	{
		input: "inverseur",
		output: {M: 1},
		
	},
	{
		input: "inversion",
		output: {F: 1},
		
	},
	{
		input: "inversión",
		output: {F: 1},
		
	},
	{
		input: "inverti",
		output: {M: 1},
		
	},
	{
		input: "investigación",
		output: {F: 1},
		
	},
	{
		input: "investigaciôn",
		output: {F: 1},
		
	},
	{
		input: "investigateur",
		output: {M: 1},
		
	},
	{
		input: "investigation",
		output: {F: 1},
		
	},
	{
		input: "investissement",
		output: {M: 1},
		
	},
	{
		input: "investisseur",
		output: {M: 1},
		
	},
	{
		input: "investiture",
		output: {F: 1},
		
	},
	{
		input: "invisibilité",
		output: {F: 1},
		
	},
	{
		input: "invisible",
		output: {M: 1},
		
	},
	{
		input: "invitation",
		output: {F: 1},
		
	},
	{
		input: "invite",
		output: {F: 1},
		
	},
	{
		input: "invité",
		output: {M: 1},
		
	},
	{
		input: "invitée",
		output: {F: 1},
		
	},
	{
		input: "invocation",
		output: {F: 1},
		
	},
	{
		input: "involution",
		output: {F: 1},
		
	},
	{
		input: "invraisemblance",
		output: {F: 1},
		
	},
	{
		input: "inédit",
		output: {M: 1},
		
	},
	{
		input: "inégalité",
		output: {F: 1},
		
	},
	{
		input: "inéligibilité",
		output: {F: 1},
		
	},
	{
		input: "ioi",
		output: {F: 1},
		
	},
	{
		input: "ion",
		output: {F: 1},
		
	},
	{
		input: "ion",
		output: {M: 1},
		
	},
	{
		input: "ionisation",
		output: {F: 1},
		
	},
	{
		input: "ionogramme",
		output: {M: 1},
		
	},
	{
		input: "iota",
		output: {M: 1},
		
	},
	{
		input: "iour",
		output: {M: 1},
		
	},
	{
		input: "ipséité",
		output: {F: 1},
		
	},
	{
		input: "ire",
		output: {F: 1},
		
	},
	{
		input: "iris",
		output: {M: 1},
		
	},
	{
		input: "ironie",
		output: {F: 1},
		
	},
	{
		input: "ironiste",
		output: {M: 1},
		
	},
	{
		input: "ironía",
		output: {F: 1},
		
	},
	{
		input: "irradiation",
		output: {F: 1},
		
	},
	{
		input: "irrationalisme",
		output: {M: 1},
		
	},
	{
		input: "irrationalité",
		output: {F: 1},
		
	},
	{
		input: "irrationnel",
		output: {M: 1},
		
	},
	{
		input: "irrecevabilité",
		output: {F: 1},
		
	},
	{
		input: "irrespect",
		output: {M: 1},
		
	},
	{
		input: "irresponsabilité",
		output: {F: 1},
		
	},
	{
		input: "irrigation",
		output: {F: 1},
		
	},
	{
		input: "irritabilité",
		output: {F: 1},
		
	},
	{
		input: "irritant",
		output: {M: 1},
		
	},
	{
		input: "irritation",
		output: {F: 1},
		
	},
	{
		input: "irruption",
		output: {F: 1},
		
	},
	{
		input: "irréalisme",
		output: {M: 1},
		
	},
	{
		input: "irréalité",
		output: {F: 1},
		
	},
	{
		input: "irrédentisme",
		output: {M: 1},
		
	},
	{
		input: "irréductibilité",
		output: {F: 1},
		
	},
	{
		input: "irréductible",
		output: {M: 1},
		
	},
	{
		input: "irréel",
		output: {M: 1},
		
	},
	{
		input: "irrégularité",
		output: {F: 1},
		
	},
	{
		input: "irréversibilité",
		output: {F: 1},
		
	},
	{
		input: "isba",
		output: {F: 1},
		
	},
	{
		input: "ischémie",
		output: {F: 1},
		
	},
	{
		input: "isla",
		output: {F: 1},
		
	},
	{
		input: "islam",
		output: {M: 1},
		
	},
	{
		input: "islamisation",
		output: {F: 1},
		
	},
	{
		input: "islamisme",
		output: {M: 1},
		
	},
	{
		input: "islamiste",
		output: {M: 1},
		
	},
	{
		input: "isle",
		output: {F: 1},
		
	},
	{
		input: "isolant",
		output: {M: 1},
		
	},
	{
		input: "isolat",
		output: {M: 1},
		
	},
	{
		input: "isolation",
		output: {F: 1},
		
	},
	{
		input: "isolationnisme",
		output: {M: 1},
		
	},
	{
		input: "isolement",
		output: {M: 1},
		
	},
	{
		input: "isoloir",
		output: {M: 1},
		
	},
	{
		input: "isolât",
		output: {M: 1},
		
	},
	{
		input: "isolé",
		output: {M: 1},
		
	},
	{
		input: "isomorphisme",
		output: {M: 1},
		
	},
	{
		input: "isotope",
		output: {M: 1},
		
	},
	{
		input: "isotopie",
		output: {F: 1},
		
	},
	{
		input: "israélite",
		output: {M: 1},
		
	},
	{
		input: "issu",
		output: {M: 1},
		
	},
	{
		input: "issue",
		output: {F: 1},
		
	},
	{
		input: "isthme",
		output: {M: 1},
		
	},
	{
		input: "istoria",
		output: {F: 1},
		
	},
	{
		input: "italien",
		output: {M: 1},
		
	},
	{
		input: "item",
		output: {M: 1},
		
	},
	{
		input: "itinéraire",
		output: {M: 1},
		
	},
	{
		input: "itération",
		output: {F: 1},
		
	},
	{
		input: "ius",
		output: {M: 1},
		
	},
	{
		input: "ivoire",
		output: {M: 1},
		
	},
	{
		input: "ivresse",
		output: {F: 1},
		
	},
	{
		input: "ivrogne",
		output: {M: 1},
		
	},
	{
		input: "izquierda",
		output: {F: 1},
		
	},
	{
		input: "j",
		output: {F: 1},
		
	},
	{
		input: "j",
		output: {M: 1},
		
	},
	{
		input: "jabot",
		output: {M: 1},
		
	},
	{
		input: "jachère",
		output: {F: 1},
		
	},
	{
		input: "jacinthe",
		output: {F: 1},
		
	},
	{
		input: "jackpot",
		output: {M: 1},
		
	},
	{
		input: "jacobin",
		output: {M: 1},
		
	},
	{
		input: "jacobinisme",
		output: {M: 1},
		
	},
	{
		input: "jacquerie",
		output: {F: 1},
		
	},
	{
		input: "jactance",
		output: {F: 1},
		
	},
	{
		input: "jade",
		output: {M: 1},
		
	},
	{
		input: "jaguar",
		output: {M: 1},
		
	},
	{
		input: "jaillissement",
		output: {M: 1},
		
	},
	{
		input: "jais",
		output: {M: 1},
		
	},
	{
		input: "jalon",
		output: {M: 1},
		
	},
	{
		input: "jalonnement",
		output: {M: 1},
		
	},
	{
		input: "jalousie",
		output: {F: 1},
		
	},
	{
		input: "jaloux",
		output: {M: 1},
		
	},
	{
		input: "jambage",
		output: {M: 1},
		
	},
	{
		input: "jambe",
		output: {F: 1},
		
	},
	{
		input: "jambon",
		output: {M: 1},
		
	},
	{
		input: "janissaire",
		output: {M: 1},
		
	},
	{
		input: "jansénisme",
		output: {M: 1},
		
	},
	{
		input: "janséniste",
		output: {M: 1},
		
	},
	{
		input: "jante",
		output: {F: 1},
		
	},
	{
		input: "janvier",
		output: {F: 1},
		
	},
	{
		input: "janvier",
		output: {M: 1},
		
	},
	{
		input: "japon",
		output: {M: 1},
		
	},
	{
		input: "japonais",
		output: {M: 1},
		
	},
	{
		input: "japonisme",
		output: {M: 1},
		
	},
	{
		input: "jappement",
		output: {M: 1},
		
	},
	{
		input: "jaquette",
		output: {F: 1},
		
	},
	{
		input: "jardin",
		output: {M: 1},
		
	},
	{
		input: "jardinage",
		output: {M: 1},
		
	},
	{
		input: "jardinet",
		output: {M: 1},
		
	},
	{
		input: "jardinier",
		output: {M: 1},
		
	},
	{
		input: "jardinière",
		output: {F: 1},
		
	},
	{
		input: "jargon",
		output: {M: 1},
		
	},
	{
		input: "jarl",
		output: {M: 1},
		
	},
	{
		input: "jarre",
		output: {F: 1},
		
	},
	{
		input: "jarret",
		output: {M: 1},
		
	},
	{
		input: "jarretière",
		output: {F: 1},
		
	},
	{
		input: "jars",
		output: {M: 1},
		
	},
	{
		input: "jasmin",
		output: {M: 1},
		
	},
	{
		input: "jaspe",
		output: {M: 1},
		
	},
	{
		input: "jatte",
		output: {F: 1},
		
	},
	{
		input: "jauge",
		output: {F: 1},
		
	},
	{
		input: "jaugeage",
		output: {M: 1},
		
	},
	{
		input: "jaune",
		output: {F: 1},
		
	},
	{
		input: "jaune",
		output: {M: 1},
		
	},
	{
		input: "jaunisse",
		output: {F: 1},
		
	},
	{
		input: "jaunissement",
		output: {M: 1},
		
	},
	{
		input: "java",
		output: {F: 1},
		
	},
	{
		input: "javanais",
		output: {M: 1},
		
	},
	{
		input: "javeline",
		output: {F: 1},
		
	},
	{
		input: "javelot",
		output: {M: 1},
		
	},
	{
		input: "jazz",
		output: {M: 1},
		
	},
	{
		input: "jazzman",
		output: {M: 1},
		
	},
	{
		input: "jaïnisme",
		output: {M: 1},
		
	},
	{
		input: "jdanovisme",
		output: {M: 1},
		
	},
	{
		input: "jean",
		output: {M: 1},
		
	},
	{
		input: "jeans",
		output: {M: 1},
		
	},
	{
		input: "jeep",
		output: {F: 1},
		
	},
	{
		input: "jerarquía",
		output: {F: 1},
		
	},
	{
		input: "jersey",
		output: {M: 1},
		
	},
	{
		input: "jet",
		output: {F: 1},
		
	},
	{
		input: "jet",
		output: {M: 1},
		
	},
	{
		input: "jeta",
		output: {F: 1},
		
	},
	{
		input: "jeta",
		output: {M: 1},
		
	},
	{
		input: "jeteur",
		output: {M: 1},
		
	},
	{
		input: "jeton",
		output: {M: 1},
		
	},
	{
		input: "jette",
		output: {F: 1},
		
	},
	{
		input: "jette",
		output: {M: 1},
		
	},
	{
		input: "jeté",
		output: {M: 1},
		
	},
	{
		input: "jetée",
		output: {F: 1},
		
	},
	{
		input: "jeu",
		output: {F: 1},
		
	},
	{
		input: "jeu",
		output: {M: 1},
		
	},
	{
		input: "jeudi",
		output: {M: 1},
		
	},
	{
		input: "jeune",
		output: {F: 1},
		
	},
	{
		input: "jeune",
		output: {M: 1},
		
	},
	{
		input: "jeunesse",
		output: {F: 1},
		
	},
	{
		input: "jeunette",
		output: {F: 1},
		
	},
	{
		input: "jeunisme",
		output: {M: 1},
		
	},
	{
		input: "jeunot",
		output: {M: 1},
		
	},
	{
		input: "jeux",
		output: {M: 1},
		
	},
	{
		input: "jeûne",
		output: {M: 1},
		
	},
	{
		input: "jihad",
		output: {M: 1},
		
	},
	{
		input: "jihâd",
		output: {M: 1},
		
	},
	{
		input: "joaillerie",
		output: {F: 1},
		
	},
	{
		input: "joaillier",
		output: {M: 1},
		
	},
	{
		input: "job",
		output: {F: 1},
		
	},
	{
		input: "job",
		output: {M: 1},
		
	},
	{
		input: "jockey",
		output: {M: 1},
		
	},
	{
		input: "jogging",
		output: {M: 1},
		
	},
	{
		input: "joie",
		output: {F: 1},
		
	},
	{
		input: "joint",
		output: {F: 1},
		
	},
	{
		input: "joint",
		output: {M: 1},
		
	},
	{
		input: "jointure",
		output: {F: 1},
		
	},
	{
		input: "joker",
		output: {M: 1},
		
	},
	{
		input: "joli",
		output: {M: 1},
		
	},
	{
		input: "jolie",
		output: {F: 1},
		
	},
	{
		input: "joliesse",
		output: {F: 1},
		
	},
	{
		input: "jonc",
		output: {M: 1},
		
	},
	{
		input: "jonchée",
		output: {F: 1},
		
	},
	{
		input: "joncteur",
		output: {M: 1},
		
	},
	{
		input: "jonctif",
		output: {M: 1},
		
	},
	{
		input: "jonction",
		output: {F: 1},
		
	},
	{
		input: "jonglerie",
		output: {F: 1},
		
	},
	{
		input: "jongleur",
		output: {M: 1},
		
	},
	{
		input: "jonque",
		output: {F: 1},
		
	},
	{
		input: "jonquille",
		output: {F: 1},
		
	},
	{
		input: "jor",
		output: {M: 1},
		
	},
	{
		input: "jornada",
		output: {F: 1},
		
	},
	{
		input: "joséphisme",
		output: {M: 1},
		
	},
	{
		input: "jota",
		output: {F: 1},
		
	},
	{
		input: "jouai",
		output: {M: 1},
		
	},
	{
		input: "joual",
		output: {M: 1},
		
	},
	{
		input: "jouet",
		output: {M: 1},
		
	},
	{
		input: "joueur",
		output: {M: 1},
		
	},
	{
		input: "joueuse",
		output: {F: 1},
		
	},
	{
		input: "joug",
		output: {M: 1},
		
	},
	{
		input: "joui",
		output: {M: 1},
		
	},
	{
		input: "jouissance",
		output: {F: 1},
		
	},
	{
		input: "jouisseur",
		output: {M: 1},
		
	},
	{
		input: "joujou",
		output: {M: 1},
		
	},
	{
		input: "joule",
		output: {M: 1},
		
	},
	{
		input: "joumal",
		output: {M: 1},
		
	},
	{
		input: "joumaliste",
		output: {M: 1},
		
	},
	{
		input: "joumée",
		output: {F: 1},
		
	},
	{
		input: "jour",
		output: {F: 1},
		
	},
	{
		input: "jour",
		output: {M: 1},
		
	},
	{
		input: "journal",
		output: {M: 1},
		
	},
	{
		input: "journalier",
		output: {M: 1},
		
	},
	{
		input: "journalisation",
		output: {F: 1},
		
	},
	{
		input: "journalisme",
		output: {M: 1},
		
	},
	{
		input: "journaliste",
		output: {F: 1},
		
	},
	{
		input: "journaliste",
		output: {M: 1},
		
	},
	{
		input: "journalière",
		output: {F: 1},
		
	},
	{
		input: "journee",
		output: {F: 1},
		
	},
	{
		input: "journée",
		output: {F: 1},
		
	},
	{
		input: "jours",
		output: {M: 1},
		
	},
	{
		input: "joute",
		output: {F: 1},
		
	},
	{
		input: "jouvence",
		output: {F: 1},
		
	},
	{
		input: "jouvenceau",
		output: {M: 1},
		
	},
	{
		input: "jouvencelle",
		output: {F: 1},
		
	},
	{
		input: "jovialité",
		output: {F: 1},
		
	},
	{
		input: "joyau",
		output: {M: 1},
		
	},
	{
		input: "joye",
		output: {F: 1},
		
	},
	{
		input: "joyeuse",
		output: {F: 1},
		
	},
	{
		input: "joyeux",
		output: {M: 1},
		
	},
	{
		input: "jubilation",
		output: {F: 1},
		
	},
	{
		input: "jubilé",
		output: {M: 1},
		
	},
	{
		input: "jubé",
		output: {M: 1},
		
	},
	{
		input: "judaisme",
		output: {M: 1},
		
	},
	{
		input: "judas",
		output: {M: 1},
		
	},
	{
		input: "judaïcité",
		output: {F: 1},
		
	},
	{
		input: "judaïsation",
		output: {F: 1},
		
	},
	{
		input: "judaïsme",
		output: {M: 1},
		
	},
	{
		input: "judaïté",
		output: {F: 1},
		
	},
	{
		input: "judicature",
		output: {F: 1},
		
	},
	{
		input: "judiciarisation",
		output: {F: 1},
		
	},
	{
		input: "judo",
		output: {M: 1},
		
	},
	{
		input: "judoka",
		output: {M: 1},
		
	},
	{
		input: "judéité",
		output: {F: 1},
		
	},
	{
		input: "judéo",
		output: {M: 1},
		
	},
	{
		input: "judéocide",
		output: {M: 1},
		
	},
	{
		input: "judéophobie",
		output: {F: 1},
		
	},
	{
		input: "juego",
		output: {M: 1},
		
	},
	{
		input: "juge",
		output: {F: 1},
		
	},
	{
		input: "juge",
		output: {M: 1},
		
	},
	{
		input: "jugeant",
		output: {F: 1},
		
	},
	{
		input: "jugeant",
		output: {M: 1},
		
	},
	{
		input: "jugement",
		output: {M: 1},
		
	},
	{
		input: "juges",
		output: {M: 1},
		
	},
	{
		input: "jugulaire",
		output: {F: 1},
		
	},
	{
		input: "juif",
		output: {M: 1},
		
	},
	{
		input: "juillet",
		output: {M: 1},
		
	},
	{
		input: "juin",
		output: {M: 1},
		
	},
	{
		input: "juive",
		output: {F: 1},
		
	},
	{
		input: "juiverie",
		output: {F: 1},
		
	},
	{
		input: "jujubier",
		output: {M: 1},
		
	},
	{
		input: "juke",
		output: {M: 1},
		
	},
	{
		input: "jula",
		output: {M: 1},
		
	},
	{
		input: "jumeau",
		output: {M: 1},
		
	},
	{
		input: "jumelage",
		output: {M: 1},
		
	},
	{
		input: "jumelle",
		output: {F: 1},
		
	},
	{
		input: "jument",
		output: {F: 1},
		
	},
	{
		input: "jungle",
		output: {F: 1},
		
	},
	{
		input: "junior",
		output: {M: 1},
		
	},
	{
		input: "junta",
		output: {F: 1},
		
	},
	{
		input: "junte",
		output: {F: 1},
		
	},
	{
		input: "jupe",
		output: {F: 1},
		
	},
	{
		input: "jupette",
		output: {F: 1},
		
	},
	{
		input: "jupon",
		output: {M: 1},
		
	},
	{
		input: "jurade",
		output: {F: 1},
		
	},
	{
		input: "jurande",
		output: {F: 1},
		
	},
	{
		input: "jurat",
		output: {M: 1},
		
	},
	{
		input: "jure",
		output: {M: 1},
		
	},
	{
		input: "juridicisation",
		output: {F: 1},
		
	},
	{
		input: "juridicité",
		output: {F: 1},
		
	},
	{
		input: "juridiction",
		output: {F: 1},
		
	},
	{
		input: "juridictionnalisation",
		output: {F: 1},
		
	},
	{
		input: "juridisation",
		output: {F: 1},
		
	},
	{
		input: "juridisme",
		output: {M: 1},
		
	},
	{
		input: "jurisconsulte",
		output: {M: 1},
		
	},
	{
		input: "jurisdicción",
		output: {F: 1},
		
	},
	{
		input: "jurisdictio",
		output: {F: 1},
		
	},
	{
		input: "jurisdiction",
		output: {F: 1},
		
	},
	{
		input: "jurispru",
		output: {F: 1},
		
	},
	{
		input: "jurisprudence",
		output: {F: 1},
		
	},
	{
		input: "jurisprudencia",
		output: {F: 1},
		
	},
	{
		input: "juriste",
		output: {F: 1},
		
	},
	{
		input: "juriste",
		output: {M: 1},
		
	},
	{
		input: "juron",
		output: {M: 1},
		
	},
	{
		input: "jurons",
		output: {M: 1},
		
	},
	{
		input: "jury",
		output: {M: 1},
		
	},
	{
		input: "juré",
		output: {M: 1},
		
	},
	{
		input: "jus",
		output: {F: 1},
		
	},
	{
		input: "jus",
		output: {M: 1},
		
	},
	{
		input: "jusant",
		output: {M: 1},
		
	},
	{
		input: "jusnaturalisme",
		output: {M: 1},
		
	},
	{
		input: "jusquiame",
		output: {F: 1},
		
	},
	{
		input: "justaucorps",
		output: {M: 1},
		
	},
	{
		input: "justesse",
		output: {F: 1},
		
	},
	{
		input: "justice",
		output: {F: 1},
		
	},
	{
		input: "justicia",
		output: {F: 1},
		
	},
	{
		input: "justiciabilité",
		output: {F: 1},
		
	},
	{
		input: "justiciable",
		output: {M: 1},
		
	},
	{
		input: "justicier",
		output: {M: 1},
		
	},
	{
		input: "justificatif",
		output: {M: 1},
		
	},
	{
		input: "justification",
		output: {F: 1},
		
	},
	{
		input: "jute",
		output: {M: 1},
		
	},
	{
		input: "juventud",
		output: {F: 1},
		
	},
	{
		input: "juvénile",
		output: {M: 1},
		
	},
	{
		input: "juvénilité",
		output: {F: 1},
		
	},
	{
		input: "juxtaposition",
		output: {F: 1},
		
	},
	{
		input: "jéjunum",
		output: {M: 1},
		
	},
	{
		input: "jésuite",
		output: {M: 1},
		
	},
	{
		input: "jésuitisme",
		output: {M: 1},
		
	},
	{
		input: "k",
		output: {F: 1},
		
	},
	{
		input: "k",
		output: {M: 1},
		
	},
	{
		input: "ka",
		output: {M: 1},
		
	},
	{
		input: "kabbale",
		output: {F: 1},
		
	},
	{
		input: "kabbaliste",
		output: {M: 1},
		
	},
	{
		input: "kabuki",
		output: {M: 1},
		
	},
	{
		input: "kabyle",
		output: {M: 1},
		
	},
	{
		input: "kaddish",
		output: {M: 1},
		
	},
	{
		input: "kafala",
		output: {F: 1},
		
	},
	{
		input: "kairos",
		output: {M: 1},
		
	},
	{
		input: "kaiser",
		output: {M: 1},
		
	},
	{
		input: "kaki",
		output: {M: 1},
		
	},
	{
		input: "kalachnikov",
		output: {F: 1},
		
	},
	{
		input: "kaliémie",
		output: {F: 1},
		
	},
	{
		input: "kalokagathia",
		output: {F: 1},
		
	},
	{
		input: "kalâm",
		output: {M: 1},
		
	},
	{
		input: "kaléidoscope",
		output: {M: 1},
		
	},
	{
		input: "kamikaze",
		output: {M: 1},
		
	},
	{
		input: "kanamycine",
		output: {F: 1},
		
	},
	{
		input: "kangourou",
		output: {M: 1},
		
	},
	{
		input: "kanoun",
		output: {M: 1},
		
	},
	{
		input: "kantien",
		output: {M: 1},
		
	},
	{
		input: "kantisme",
		output: {M: 1},
		
	},
	{
		input: "kaolin",
		output: {M: 1},
		
	},
	{
		input: "kaolinite",
		output: {F: 1},
		
	},
	{
		input: "kapo",
		output: {M: 1},
		
	},
	{
		input: "karaoké",
		output: {M: 1},
		
	},
	{
		input: "karaté",
		output: {M: 1},
		
	},
	{
		input: "karité",
		output: {M: 1},
		
	},
	{
		input: "karma",
		output: {M: 1},
		
	},
	{
		input: "karman",
		output: {M: 1},
		
	},
	{
		input: "karst",
		output: {M: 1},
		
	},
	{
		input: "karstification",
		output: {F: 1},
		
	},
	{
		input: "kasbah",
		output: {F: 1},
		
	},
	{
		input: "kasma",
		output: {F: 1},
		
	},
	{
		input: "kastom",
		output: {F: 1},
		
	},
	{
		input: "katharsis",
		output: {F: 1},
		
	},
	{
		input: "katiba",
		output: {F: 1},
		
	},
	{
		input: "kava",
		output: {M: 1},
		
	},
	{
		input: "kayak",
		output: {M: 1},
		
	},
	{
		input: "keffieh",
		output: {M: 1},
		
	},
	{
		input: "kermesse",
		output: {F: 1},
		
	},
	{
		input: "ketchup",
		output: {M: 1},
		
	},
	{
		input: "keynésianisme",
		output: {M: 1},
		
	},
	{
		input: "kg",
		output: {M: 1},
		
	},
	{
		input: "khalifa",
		output: {M: 1},
		
	},
	{
		input: "khalifat",
		output: {M: 1},
		
	},
	{
		input: "khalife",
		output: {M: 1},
		
	},
	{
		input: "khan",
		output: {M: 1},
		
	},
	{
		input: "khanat",
		output: {M: 1},
		
	},
	{
		input: "khat",
		output: {M: 1},
		
	},
	{
		input: "khi",
		output: {M: 1},
		
	},
	{
		input: "khâgne",
		output: {F: 1},
		
	},
	{
		input: "khédive",
		output: {M: 1},
		
	},
	{
		input: "khôl",
		output: {M: 1},
		
	},
	{
		input: "khôra",
		output: {F: 1},
		
	},
	{
		input: "ki",
		output: {M: 1},
		
	},
	{
		input: "kibboutz",
		output: {M: 1},
		
	},
	{
		input: "kidnapping",
		output: {M: 1},
		
	},
	{
		input: "kif",
		output: {M: 1},
		
	},
	{
		input: "kikongo",
		output: {M: 1},
		
	},
	{
		input: "kilo",
		output: {M: 1},
		
	},
	{
		input: "kilogramme",
		output: {M: 1},
		
	},
	{
		input: "kilomètre",
		output: {M: 1},
		
	},
	{
		input: "kilométrage",
		output: {M: 1},
		
	},
	{
		input: "kilowatt",
		output: {M: 1},
		
	},
	{
		input: "kilowattheure",
		output: {M: 1},
		
	},
	{
		input: "kilt",
		output: {M: 1},
		
	},
	{
		input: "kimbanguisme",
		output: {M: 1},
		
	},
	{
		input: "kimono",
		output: {M: 1},
		
	},
	{
		input: "kinase",
		output: {F: 1},
		
	},
	{
		input: "kinesthésie",
		output: {F: 1},
		
	},
	{
		input: "kinyarwanda",
		output: {M: 1},
		
	},
	{
		input: "kiné",
		output: {M: 1},
		
	},
	{
		input: "kinésique",
		output: {F: 1},
		
	},
	{
		input: "kinésithérapeute",
		output: {M: 1},
		
	},
	{
		input: "kinésithérapie",
		output: {F: 1},
		
	},
	{
		input: "kiosque",
		output: {M: 1},
		
	},
	{
		input: "kippa",
		output: {F: 1},
		
	},
	{
		input: "kirundi",
		output: {M: 1},
		
	},
	{
		input: "kiswahili",
		output: {M: 1},
		
	},
	{
		input: "kit",
		output: {M: 1},
		
	},
	{
		input: "kitchenette",
		output: {F: 1},
		
	},
	{
		input: "kitsch",
		output: {M: 1},
		
	},
	{
		input: "kiwi",
		output: {M: 1},
		
	},
	{
		input: "klaxon",
		output: {M: 1},
		
	},
	{
		input: "kleenex",
		output: {M: 1},
		
	},
	{
		input: "kleptomanie",
		output: {F: 1},
		
	},
	{
		input: "km",
		output: {M: 1},
		
	},
	{
		input: "knout",
		output: {M: 1},
		
	},
	{
		input: "koinonia",
		output: {F: 1},
		
	},
	{
		input: "koinè",
		output: {F: 1},
		
	},
	{
		input: "koiné",
		output: {F: 1},
		
	},
	{
		input: "koinônia",
		output: {F: 1},
		
	},
	{
		input: "kola",
		output: {F: 1},
		
	},
	{
		input: "kolkhoze",
		output: {M: 1},
		
	},
	{
		input: "kommandantur",
		output: {F: 1},
		
	},
	{
		input: "kommando",
		output: {M: 1},
		
	},
	{
		input: "kopeck",
		output: {M: 1},
		
	},
	{
		input: "kora",
		output: {F: 1},
		
	},
	{
		input: "koré",
		output: {F: 1},
		
	},
	{
		input: "koubba",
		output: {F: 1},
		
	},
	{
		input: "koulak",
		output: {M: 1},
		
	},
	{
		input: "kraal",
		output: {M: 1},
		
	},
	{
		input: "krach",
		output: {M: 1},
		
	},
	{
		input: "krausisme",
		output: {M: 1},
		
	},
	{
		input: "krigeage",
		output: {M: 1},
		
	},
	{
		input: "ksar",
		output: {M: 1},
		
	},
	{
		input: "kula",
		output: {F: 1},
		
	},
	{
		input: "kundalini",
		output: {F: 1},
		
	},
	{
		input: "kurde",
		output: {M: 1},
		
	},
	{
		input: "kwashiorkor",
		output: {M: 1},
		
	},
	{
		input: "kyrielle",
		output: {F: 1},
		
	},
	{
		input: "kyste",
		output: {M: 1},
		
	},
	{
		input: "kémalisme",
		output: {M: 1},
		
	},
	{
		input: "kénose",
		output: {F: 1},
		
	},
	{
		input: "képi",
		output: {M: 1},
		
	},
	{
		input: "kératine",
		output: {F: 1},
		
	},
	{
		input: "kératinisation",
		output: {F: 1},
		
	},
	{
		input: "kératite",
		output: {F: 1},
		
	},
	{
		input: "kérosène",
		output: {M: 1},
		
	},
	{
		input: "kérygme",
		output: {M: 1},
		
	},
	{
		input: "kétamine",
		output: {F: 1},
		
	},
	{
		input: "la",
		output: {F: 1},
		
	},
	{
		input: "la",
		output: {M: 1},
		
	},
	{
		input: "label",
		output: {M: 1},
		
	},
	{
		input: "labellisation",
		output: {F: 1},
		
	},
	{
		input: "labeur",
		output: {M: 1},
		
	},
	{
		input: "labiale",
		output: {F: 1},
		
	},
	{
		input: "labialisation",
		output: {F: 1},
		
	},
	{
		input: "labilité",
		output: {F: 1},
		
	},
	{
		input: "labo",
		output: {M: 1},
		
	},
	{
		input: "labor",
		output: {F: 1},
		
	},
	{
		input: "laboratoire",
		output: {M: 1},
		
	},
	{
		input: "labour",
		output: {M: 1},
		
	},
	{
		input: "labourage",
		output: {M: 1},
		
	},
	{
		input: "laboureur",
		output: {M: 1},
		
	},
	{
		input: "labrador",
		output: {M: 1},
		
	},
	{
		input: "labrum",
		output: {M: 1},
		
	},
	{
		input: "labyrinthe",
		output: {M: 1},
		
	},
	{
		input: "lac",
		output: {M: 1},
		
	},
	{
		input: "lacanisme",
		output: {M: 1},
		
	},
	{
		input: "laccase",
		output: {F: 1},
		
	},
	{
		input: "lacet",
		output: {M: 1},
		
	},
	{
		input: "lacis",
		output: {M: 1},
		
	},
	{
		input: "laconicum",
		output: {M: 1},
		
	},
	{
		input: "laconisme",
		output: {M: 1},
		
	},
	{
		input: "lactase",
		output: {F: 1},
		
	},
	{
		input: "lactate",
		output: {M: 1},
		
	},
	{
		input: "lactation",
		output: {F: 1},
		
	},
	{
		input: "lactatémie",
		output: {F: 1},
		
	},
	{
		input: "lactoferrine",
		output: {F: 1},
		
	},
	{
		input: "lactose",
		output: {M: 1},
		
	},
	{
		input: "lactosérum",
		output: {M: 1},
		
	},
	{
		input: "lacune",
		output: {F: 1},
		
	},
	{
		input: "lacération",
		output: {F: 1},
		
	},
	{
		input: "ladino",
		output: {M: 1},
		
	},
	{
		input: "lado",
		output: {M: 1},
		
	},
	{
		input: "ladrerie",
		output: {F: 1},
		
	},
	{
		input: "lagon",
		output: {M: 1},
		
	},
	{
		input: "lagunage",
		output: {M: 1},
		
	},
	{
		input: "lagune",
		output: {F: 1},
		
	},
	{
		input: "lai",
		output: {M: 1},
		
	},
	{
		input: "laicité",
		output: {F: 1},
		
	},
	{
		input: "laid",
		output: {M: 1},
		
	},
	{
		input: "laide",
		output: {F: 1},
		
	},
	{
		input: "laideron",
		output: {M: 1},
		
	},
	{
		input: "laideur",
		output: {F: 1},
		
	},
	{
		input: "laie",
		output: {F: 1},
		
	},
	{
		input: "lainage",
		output: {M: 1},
		
	},
	{
		input: "laine",
		output: {F: 1},
		
	},
	{
		input: "laissa",
		output: {F: 1},
		
	},
	{
		input: "laissa",
		output: {M: 1},
		
	},
	{
		input: "laissai",
		output: {F: 1},
		
	},
	{
		input: "laissai",
		output: {M: 1},
		
	},
	{
		input: "laissait",
		output: {F: 1},
		
	},
	{
		input: "laisseraller",
		output: {M: 1},
		
	},
	{
		input: "laisses",
		output: {F: 1},
		
	},
	{
		input: "laisses",
		output: {M: 1},
		
	},
	{
		input: "laissez",
		output: {M: 1},
		
	},
	{
		input: "laissezpasser",
		output: {M: 1},
		
	},
	{
		input: "laissé",
		output: {M: 1},
		
	},
	{
		input: "lait",
		output: {M: 1},
		
	},
	{
		input: "laitage",
		output: {M: 1},
		
	},
	{
		input: "laitance",
		output: {F: 1},
		
	},
	{
		input: "laiterie",
		output: {F: 1},
		
	},
	{
		input: "laitier",
		output: {M: 1},
		
	},
	{
		input: "laitière",
		output: {F: 1},
		
	},
	{
		input: "laiton",
		output: {M: 1},
		
	},
	{
		input: "laitue",
		output: {F: 1},
		
	},
	{
		input: "lakou",
		output: {M: 1},
		
	},
	{
		input: "lama",
		output: {M: 1},
		
	},
	{
		input: "lamantin",
		output: {M: 1},
		
	},
	{
		input: "lamarckisme",
		output: {M: 1},
		
	},
	{
		input: "lamaserie",
		output: {F: 1},
		
	},
	{
		input: "lamaïsme",
		output: {M: 1},
		
	},
	{
		input: "lamba",
		output: {M: 1},
		
	},
	{
		input: "lambeau",
		output: {M: 1},
		
	},
	{
		input: "lambi",
		output: {M: 1},
		
	},
	{
		input: "lambris",
		output: {M: 1},
		
	},
	{
		input: "lame",
		output: {F: 1},
		
	},
	{
		input: "lamelle",
		output: {F: 1},
		
	},
	{
		input: "lamentation",
		output: {F: 1},
		
	},
	{
		input: "lamento",
		output: {M: 1},
		
	},
	{
		input: "lamidat",
		output: {M: 1},
		
	},
	{
		input: "lamido",
		output: {M: 1},
		
	},
	{
		input: "laminage",
		output: {M: 1},
		
	},
	{
		input: "lamination",
		output: {F: 1},
		
	},
	{
		input: "laminine",
		output: {F: 1},
		
	},
	{
		input: "laminoir",
		output: {M: 1},
		
	},
	{
		input: "lamivudine",
		output: {F: 1},
		
	},
	{
		input: "lampadaire",
		output: {M: 1},
		
	},
	{
		input: "lampe",
		output: {F: 1},
		
	},
	{
		input: "lampion",
		output: {M: 1},
		
	},
	{
		input: "lampiste",
		output: {M: 1},
		
	},
	{
		input: "lamproie",
		output: {F: 1},
		
	},
	{
		input: "lampée",
		output: {F: 1},
		
	},
	{
		input: "lan",
		output: {F: 1},
		
	},
	{
		input: "lan",
		output: {M: 1},
		
	},
	{
		input: "lance",
		output: {F: 1},
		
	},
	{
		input: "lance",
		output: {M: 1},
		
	},
	{
		input: "lancement",
		output: {M: 1},
		
	},
	{
		input: "lancette",
		output: {F: 1},
		
	},
	{
		input: "lanceur",
		output: {M: 1},
		
	},
	{
		input: "lancée",
		output: {F: 1},
		
	},
	{
		input: "landau",
		output: {M: 1},
		
	},
	{
		input: "lande",
		output: {F: 1},
		
	},
	{
		input: "landgrave",
		output: {M: 1},
		
	},
	{
		input: "langage",
		output: {F: 1},
		
	},
	{
		input: "langage",
		output: {M: 1},
		
	},
	{
		input: "langagier",
		output: {M: 1},
		
	},
	{
		input: "lange",
		output: {M: 1},
		
	},
	{
		input: "langouste",
		output: {F: 1},
		
	},
	{
		input: "langoustine",
		output: {F: 1},
		
	},
	{
		input: "language",
		output: {M: 1},
		
	},
	{
		input: "langue",
		output: {F: 1},
		
	},
	{
		input: "langue",
		output: {M: 1},
		
	},
	{
		input: "languedocien",
		output: {M: 1},
		
	},
	{
		input: "languette",
		output: {F: 1},
		
	},
	{
		input: "langueur",
		output: {F: 1},
		
	},
	{
		input: "lanière",
		output: {F: 1},
		
	},
	{
		input: "lansquenet",
		output: {M: 1},
		
	},
	{
		input: "lanterne",
		output: {F: 1},
		
	},
	{
		input: "lanterneau",
		output: {M: 1},
		
	},
	{
		input: "lanternon",
		output: {M: 1},
		
	},
	{
		input: "lapalissade",
		output: {F: 1},
		
	},
	{
		input: "laparoscopie",
		output: {F: 1},
		
	},
	{
		input: "laparotomie",
		output: {F: 1},
		
	},
	{
		input: "lapidation",
		output: {F: 1},
		
	},
	{
		input: "lapin",
		output: {M: 1},
		
	},
	{
		input: "lapine",
		output: {F: 1},
		
	},
	{
		input: "lapis",
		output: {M: 1},
		
	},
	{
		input: "lapon",
		output: {M: 1},
		
	},
	{
		input: "laps",
		output: {M: 1},
		
	},
	{
		input: "lapsus",
		output: {M: 1},
		
	},
	{
		input: "laquais",
		output: {M: 1},
		
	},
	{
		input: "laque",
		output: {F: 1},
		
	},
	{
		input: "larbin",
		output: {M: 1},
		
	},
	{
		input: "larcin",
		output: {M: 1},
		
	},
	{
		input: "lard",
		output: {M: 1},
		
	},
	{
		input: "largage",
		output: {M: 1},
		
	},
	{
		input: "large",
		output: {F: 1},
		
	},
	{
		input: "large",
		output: {M: 1},
		
	},
	{
		input: "largesse",
		output: {F: 1},
		
	},
	{
		input: "largeur",
		output: {F: 1},
		
	},
	{
		input: "larme",
		output: {F: 1},
		
	},
	{
		input: "larmier",
		output: {M: 1},
		
	},
	{
		input: "larmoiement",
		output: {M: 1},
		
	},
	{
		input: "larron",
		output: {M: 1},
		
	},
	{
		input: "larve",
		output: {F: 1},
		
	},
	{
		input: "laryngite",
		output: {F: 1},
		
	},
	{
		input: "laryngoscopie",
		output: {F: 1},
		
	},
	{
		input: "larynx",
		output: {M: 1},
		
	},
	{
		input: "lascar",
		output: {M: 1},
		
	},
	{
		input: "lascivité",
		output: {F: 1},
		
	},
	{
		input: "laser",
		output: {M: 1},
		
	},
	{
		input: "lassitude",
		output: {F: 1},
		
	},
	{
		input: "lasso",
		output: {M: 1},
		
	},
	{
		input: "lat",
		output: {M: 1},
		
	},
	{
		input: "latence",
		output: {F: 1},
		
	},
	{
		input: "latent",
		output: {M: 1},
		
	},
	{
		input: "latex",
		output: {M: 1},
		
	},
	{
		input: "latifundium",
		output: {M: 1},
		
	},
	{
		input: "latin",
		output: {M: 1},
		
	},
	{
		input: "latinisation",
		output: {F: 1},
		
	},
	{
		input: "latinisme",
		output: {M: 1},
		
	},
	{
		input: "latiniste",
		output: {M: 1},
		
	},
	{
		input: "latinité",
		output: {F: 1},
		
	},
	{
		input: "latino",
		output: {M: 1},
		
	},
	{
		input: "latitude",
		output: {F: 1},
		
	},
	{
		input: "lato",
		output: {M: 1},
		
	},
	{
		input: "latrine",
		output: {F: 1},
		
	},
	{
		input: "latte",
		output: {F: 1},
		
	},
	{
		input: "lattis",
		output: {M: 1},
		
	},
	{
		input: "latéral",
		output: {M: 1},
		
	},
	{
		input: "latéralisation",
		output: {F: 1},
		
	},
	{
		input: "latéralité",
		output: {F: 1},
		
	},
	{
		input: "latérite",
		output: {F: 1},
		
	},
	{
		input: "laudanum",
		output: {M: 1},
		
	},
	{
		input: "laure",
		output: {F: 1},
		
	},
	{
		input: "laurier",
		output: {M: 1},
		
	},
	{
		input: "lauréat",
		output: {M: 1},
		
	},
	{
		input: "lauréate",
		output: {F: 1},
		
	},
	{
		input: "lavabo",
		output: {M: 1},
		
	},
	{
		input: "lavage",
		output: {M: 1},
		
	},
	{
		input: "lavallière",
		output: {F: 1},
		
	},
	{
		input: "lavande",
		output: {F: 1},
		
	},
	{
		input: "lavandière",
		output: {F: 1},
		
	},
	{
		input: "lave",
		output: {F: 1},
		
	},
	{
		input: "lave",
		output: {M: 1},
		
	},
	{
		input: "lavement",
		output: {M: 1},
		
	},
	{
		input: "laverie",
		output: {F: 1},
		
	},
	{
		input: "lavette",
		output: {F: 1},
		
	},
	{
		input: "laveur",
		output: {M: 1},
		
	},
	{
		input: "laveuse",
		output: {F: 1},
		
	},
	{
		input: "lavis",
		output: {M: 1},
		
	},
	{
		input: "lavoir",
		output: {M: 1},
		
	},
	{
		input: "laxatif",
		output: {M: 1},
		
	},
	{
		input: "laxisme",
		output: {M: 1},
		
	},
	{
		input: "laxité",
		output: {F: 1},
		
	},
	{
		input: "laye",
		output: {F: 1},
		
	},
	{
		input: "layette",
		output: {F: 1},
		
	},
	{
		input: "layon",
		output: {M: 1},
		
	},
	{
		input: "lazaret",
		output: {M: 1},
		
	},
	{
		input: "lazariste",
		output: {M: 1},
		
	},
	{
		input: "laçage",
		output: {M: 1},
		
	},
	{
		input: "laïcat",
		output: {M: 1},
		
	},
	{
		input: "laïcisation",
		output: {F: 1},
		
	},
	{
		input: "laïcisme",
		output: {M: 1},
		
	},
	{
		input: "laïcité",
		output: {F: 1},
		
	},
	{
		input: "laïus",
		output: {M: 1},
		
	},
	{
		input: "lb",
		output: {F: 1},
		
	},
	{
		input: "leader",
		output: {F: 1},
		
	},
	{
		input: "leader",
		output: {M: 1},
		
	},
	{
		input: "leadership",
		output: {M: 1},
		
	},
	{
		input: "leasing",
		output: {M: 1},
		
	},
	{
		input: "lec",
		output: {F: 1},
		
	},
	{
		input: "lecon",
		output: {F: 1},
		
	},
	{
		input: "lecte",
		output: {M: 1},
		
	},
	{
		input: "lecteur",
		output: {M: 1},
		
	},
	{
		input: "lectio",
		output: {F: 1},
		
	},
	{
		input: "lectionnaire",
		output: {M: 1},
		
	},
	{
		input: "lectorat",
		output: {M: 1},
		
	},
	{
		input: "lectrice",
		output: {F: 1},
		
	},
	{
		input: "lectura",
		output: {F: 1},
		
	},
	{
		input: "lecture",
		output: {F: 1},
		
	},
	{
		input: "lecture",
		output: {M: 1},
		
	},
	{
		input: "legato",
		output: {M: 1},
		
	},
	{
		input: "legende",
		output: {F: 1},
		
	},
	{
		input: "legge",
		output: {F: 1},
		
	},
	{
		input: "leggi",
		output: {M: 1},
		
	},
	{
		input: "legislación",
		output: {F: 1},
		
	},
	{
		input: "legislation",
		output: {F: 1},
		
	},
	{
		input: "legs",
		output: {M: 1},
		
	},
	{
		input: "leibnizianisme",
		output: {M: 1},
		
	},
	{
		input: "leishmaniose",
		output: {F: 1},
		
	},
	{
		input: "leit",
		output: {M: 1},
		
	},
	{
		input: "leitmotiv",
		output: {M: 1},
		
	},
	{
		input: "lemmatisation",
		output: {F: 1},
		
	},
	{
		input: "lemme",
		output: {M: 1},
		
	},
	{
		input: "lende",
		output: {M: 1},
		
	},
	{
		input: "lendemain",
		output: {M: 1},
		
	},
	{
		input: "lengua",
		output: {F: 1},
		
	},
	{
		input: "lent",
		output: {M: 1},
		
	},
	{
		input: "lente",
		output: {F: 1},
		
	},
	{
		input: "lenteur",
		output: {F: 1},
		
	},
	{
		input: "lentille",
		output: {F: 1},
		
	},
	{
		input: "leptine",
		output: {F: 1},
		
	},
	{
		input: "leptospirose",
		output: {F: 1},
		
	},
	{
		input: "lepénisme",
		output: {M: 1},
		
	},
	{
		input: "ler",
		output: {M: 1},
		
	},
	{
		input: "lere",
		output: {F: 1},
		
	},
	{
		input: "les",
		output: {F: 1},
		
	},
	{
		input: "les",
		output: {M: 1},
		
	},
	{
		input: "lesbianisme",
		output: {M: 1},
		
	},
	{
		input: "lesbienne",
		output: {F: 1},
		
	},
	{
		input: "lesbophobie",
		output: {F: 1},
		
	},
	{
		input: "lessivage",
		output: {M: 1},
		
	},
	{
		input: "lessive",
		output: {F: 1},
		
	},
	{
		input: "lessiveuse",
		output: {F: 1},
		
	},
	{
		input: "lest",
		output: {M: 1},
		
	},
	{
		input: "letra",
		output: {F: 1},
		
	},
	{
		input: "letre",
		output: {F: 1},
		
	},
	{
		input: "lette",
		output: {F: 1},
		
	},
	{
		input: "lettera",
		output: {F: 1},
		
	},
	{
		input: "letteratura",
		output: {F: 1},
		
	},
	{
		input: "lettere",
		output: {M: 1},
		
	},
	{
		input: "letton",
		output: {M: 1},
		
	},
	{
		input: "lettrage",
		output: {M: 1},
		
	},
	{
		input: "lettre",
		output: {F: 1},
		
	},
	{
		input: "lettre",
		output: {M: 1},
		
	},
	{
		input: "lettres",
		output: {F: 1},
		
	},
	{
		input: "lettrine",
		output: {F: 1},
		
	},
	{
		input: "lettrisme",
		output: {M: 1},
		
	},
	{
		input: "lettré",
		output: {M: 1},
		
	},
	{
		input: "lettura",
		output: {F: 1},
		
	},
	{
		input: "leucine",
		output: {F: 1},
		
	},
	{
		input: "leucocytose",
		output: {F: 1},
		
	},
	{
		input: "leucopénie",
		output: {F: 1},
		
	},
	{
		input: "leucose",
		output: {F: 1},
		
	},
	{
		input: "leucémie",
		output: {F: 1},
		
	},
	{
		input: "leude",
		output: {F: 1},
		
	},
	{
		input: "leurre",
		output: {M: 1},
		
	},
	{
		input: "levage",
		output: {M: 1},
		
	},
	{
		input: "levain",
		output: {M: 1},
		
	},
	{
		input: "levant",
		output: {M: 1},
		
	},
	{
		input: "levier",
		output: {M: 1},
		
	},
	{
		input: "levrette",
		output: {F: 1},
		
	},
	{
		input: "levure",
		output: {F: 1},
		
	},
	{
		input: "levée",
		output: {F: 1},
		
	},
	{
		input: "lex",
		output: {F: 1},
		
	},
	{
		input: "lexfori",
		output: {F: 1},
		
	},
	{
		input: "lexicalisation",
		output: {F: 1},
		
	},
	{
		input: "lexicographe",
		output: {M: 1},
		
	},
	{
		input: "lexicographie",
		output: {F: 1},
		
	},
	{
		input: "lexicologie",
		output: {F: 1},
		
	},
	{
		input: "lexicologue",
		output: {M: 1},
		
	},
	{
		input: "lexicométrie",
		output: {F: 1},
		
	},
	{
		input: "lexie",
		output: {F: 1},
		
	},
	{
		input: "lexique",
		output: {M: 1},
		
	},
	{
		input: "lexis",
		output: {F: 1},
		
	},
	{
		input: "lexème",
		output: {M: 1},
		
	},
	{
		input: "leyenda",
		output: {F: 1},
		
	},
	{
		input: "leçon",
		output: {F: 1},
		
	},
	{
		input: "lia",
		output: {M: 1},
		
	},
	{
		input: "liage",
		output: {M: 1},
		
	},
	{
		input: "liaison",
		output: {F: 1},
		
	},
	{
		input: "liane",
		output: {F: 1},
		
	},
	{
		input: "liant",
		output: {M: 1},
		
	},
	{
		input: "liard",
		output: {M: 1},
		
	},
	{
		input: "liasse",
		output: {F: 1},
		
	},
	{
		input: "libanais",
		output: {M: 1},
		
	},
	{
		input: "libanaise",
		output: {F: 1},
		
	},
	{
		input: "libanisation",
		output: {F: 1},
		
	},
	{
		input: "libation",
		output: {F: 1},
		
	},
	{
		input: "libelle",
		output: {M: 1},
		
	},
	{
		input: "libellule",
		output: {F: 1},
		
	},
	{
		input: "libellé",
		output: {M: 1},
		
	},
	{
		input: "liber",
		output: {M: 1},
		
	},
	{
		input: "liberación",
		output: {F: 1},
		
	},
	{
		input: "liberation",
		output: {F: 1},
		
	},
	{
		input: "libertad",
		output: {F: 1},
		
	},
	{
		input: "libertaire",
		output: {M: 1},
		
	},
	{
		input: "libertarisme",
		output: {M: 1},
		
	},
	{
		input: "libertas",
		output: {F: 1},
		
	},
	{
		input: "liberte",
		output: {F: 1},
		
	},
	{
		input: "libertin",
		output: {M: 1},
		
	},
	{
		input: "libertinage",
		output: {M: 1},
		
	},
	{
		input: "libertà",
		output: {F: 1},
		
	},
	{
		input: "liberté",
		output: {F: 1},
		
	},
	{
		input: "liberté",
		output: {M: 1},
		
	},
	{
		input: "libido",
		output: {F: 1},
		
	},
	{
		input: "libraire",
		output: {F: 1},
		
	},
	{
		input: "libraire",
		output: {M: 1},
		
	},
	{
		input: "librairie",
		output: {F: 1},
		
	},
	{
		input: "librettiste",
		output: {M: 1},
		
	},
	{
		input: "libretto",
		output: {M: 1},
		
	},
	{
		input: "libreéchange",
		output: {M: 1},
		
	},
	{
		input: "libro",
		output: {M: 1},
		
	},
	{
		input: "libyen",
		output: {M: 1},
		
	},
	{
		input: "libère",
		output: {F: 1},
		
	},
	{
		input: "libère",
		output: {M: 1},
		
	},
	{
		input: "libéra",
		output: {F: 1},
		
	},
	{
		input: "libéralisation",
		output: {F: 1},
		
	},
	{
		input: "libéralisme",
		output: {M: 1},
		
	},
	{
		input: "libéralité",
		output: {F: 1},
		
	},
	{
		input: "libérateur",
		output: {M: 1},
		
	},
	{
		input: "libération",
		output: {F: 1},
		
	},
	{
		input: "libéré",
		output: {M: 1},
		
	},
	{
		input: "lice",
		output: {F: 1},
		
	},
	{
		input: "licence",
		output: {F: 1},
		
	},
	{
		input: "licenciement",
		output: {M: 1},
		
	},
	{
		input: "licencié",
		output: {M: 1},
		
	},
	{
		input: "lichen",
		output: {M: 1},
		
	},
	{
		input: "licitation",
		output: {F: 1},
		
	},
	{
		input: "licite",
		output: {M: 1},
		
	},
	{
		input: "licol",
		output: {M: 1},
		
	},
	{
		input: "licorne",
		output: {F: 1},
		
	},
	{
		input: "licou",
		output: {M: 1},
		
	},
	{
		input: "lict",
		output: {M: 1},
		
	},
	{
		input: "licéité",
		output: {F: 1},
		
	},
	{
		input: "lidocaïne",
		output: {F: 1},
		
	},
	{
		input: "lie",
		output: {F: 1},
		
	},
	{
		input: "lie",
		output: {M: 1},
		
	},
	{
		input: "lied",
		output: {M: 1},
		
	},
	{
		input: "lien",
		output: {M: 1},
		
	},
	{
		input: "lierre",
		output: {M: 1},
		
	},
	{
		input: "liesse",
		output: {F: 1},
		
	},
	{
		input: "lieu",
		output: {F: 1},
		
	},
	{
		input: "lieu",
		output: {M: 1},
		
	},
	{
		input: "lieudit",
		output: {M: 1},
		
	},
	{
		input: "lieue",
		output: {F: 1},
		
	},
	{
		input: "lieutenance",
		output: {F: 1},
		
	},
	{
		input: "lieutenant",
		output: {M: 1},
		
	},
	{
		input: "lieutenantcolonel",
		output: {M: 1},
		
	},
	{
		input: "lieutenantgouverneur",
		output: {M: 1},
		
	},
	{
		input: "lieux",
		output: {M: 1},
		
	},
	{
		input: "lifting",
		output: {M: 1},
		
	},
	{
		input: "ligament",
		output: {M: 1},
		
	},
	{
		input: "ligand",
		output: {M: 1},
		
	},
	{
		input: "ligature",
		output: {F: 1},
		
	},
	{
		input: "lignage",
		output: {M: 1},
		
	},
	{
		input: "ligne",
		output: {F: 1},
		
	},
	{
		input: "ligne",
		output: {M: 1},
		
	},
	{
		input: "lignification",
		output: {F: 1},
		
	},
	{
		input: "lignine",
		output: {F: 1},
		
	},
	{
		input: "lignite",
		output: {F: 1},
		
	},
	{
		input: "lignite",
		output: {M: 1},
		
	},
	{
		input: "lignée",
		output: {F: 1},
		
	},
	{
		input: "ligue",
		output: {F: 1},
		
	},
	{
		input: "ligueur",
		output: {M: 1},
		
	},
	{
		input: "ligure",
		output: {F: 1},
		
	},
	{
		input: "lilas",
		output: {M: 1},
		
	},
	{
		input: "limace",
		output: {F: 1},
		
	},
	{
		input: "limaille",
		output: {F: 1},
		
	},
	{
		input: "limande",
		output: {F: 1},
		
	},
	{
		input: "limaçon",
		output: {M: 1},
		
	},
	{
		input: "limbe",
		output: {M: 1},
		
	},
	{
		input: "lime",
		output: {F: 1},
		
	},
	{
		input: "limes",
		output: {M: 1},
		
	},
	{
		input: "limier",
		output: {M: 1},
		
	},
	{
		input: "liminaire",
		output: {M: 1},
		
	},
	{
		input: "liminalité",
		output: {F: 1},
		
	},
	{
		input: "limitation",
		output: {F: 1},
		
	},
	{
		input: "limite",
		output: {F: 1},
		
	},
	{
		input: "limite",
		output: {M: 1},
		
	},
	{
		input: "limiteur",
		output: {M: 1},
		
	},
	{
		input: "limnologie",
		output: {F: 1},
		
	},
	{
		input: "limogeage",
		output: {M: 1},
		
	},
	{
		input: "limon",
		output: {M: 1},
		
	},
	{
		input: "limonade",
		output: {F: 1},
		
	},
	{
		input: "limonadier",
		output: {M: 1},
		
	},
	{
		input: "limousin",
		output: {M: 1},
		
	},
	{
		input: "limousine",
		output: {F: 1},
		
	},
	{
		input: "limpidité",
		output: {F: 1},
		
	},
	{
		input: "limpieza",
		output: {F: 1},
		
	},
	{
		input: "lin",
		output: {F: 1},
		
	},
	{
		input: "lin",
		output: {M: 1},
		
	},
	{
		input: "linceul",
		output: {M: 1},
		
	},
	{
		input: "lindane",
		output: {M: 1},
		
	},
	{
		input: "linea",
		output: {F: 1},
		
	},
	{
		input: "linga",
		output: {M: 1},
		
	},
	{
		input: "lingala",
		output: {M: 1},
		
	},
	{
		input: "lingam",
		output: {M: 1},
		
	},
	{
		input: "linge",
		output: {M: 1},
		
	},
	{
		input: "lingerie",
		output: {F: 1},
		
	},
	{
		input: "lingot",
		output: {M: 1},
		
	},
	{
		input: "lingotière",
		output: {F: 1},
		
	},
	{
		input: "lingua",
		output: {F: 1},
		
	},
	{
		input: "lingue",
		output: {M: 1},
		
	},
	{
		input: "linguiste",
		output: {F: 1},
		
	},
	{
		input: "linguiste",
		output: {M: 1},
		
	},
	{
		input: "linguistique",
		output: {F: 1},
		
	},
	{
		input: "linguistique",
		output: {M: 1},
		
	},
	{
		input: "lingère",
		output: {F: 1},
		
	},
	{
		input: "linkage",
		output: {M: 1},
		
	},
	{
		input: "lino",
		output: {M: 1},
		
	},
	{
		input: "linoléum",
		output: {M: 1},
		
	},
	{
		input: "linotype",
		output: {F: 1},
		
	},
	{
		input: "linteau",
		output: {M: 1},
		
	},
	{
		input: "linéaire",
		output: {M: 1},
		
	},
	{
		input: "linéament",
		output: {M: 1},
		
	},
	{
		input: "linéarisation",
		output: {F: 1},
		
	},
	{
		input: "linéarité",
		output: {F: 1},
		
	},
	{
		input: "linéation",
		output: {F: 1},
		
	},
	{
		input: "lion",
		output: {M: 1},
		
	},
	{
		input: "lionceau",
		output: {M: 1},
		
	},
	{
		input: "lionne",
		output: {F: 1},
		
	},
	{
		input: "lipase",
		output: {F: 1},
		
	},
	{
		input: "lipogenèse",
		output: {F: 1},
		
	},
	{
		input: "lipolyse",
		output: {F: 1},
		
	},
	{
		input: "lipoprotéine",
		output: {F: 1},
		
	},
	{
		input: "liposuccion",
		output: {F: 1},
		
	},
	{
		input: "lippe",
		output: {F: 1},
		
	},
	{
		input: "liqueur",
		output: {F: 1},
		
	},
	{
		input: "liquidateur",
		output: {M: 1},
		
	},
	{
		input: "liquidation",
		output: {F: 1},
		
	},
	{
		input: "liquidité",
		output: {F: 1},
		
	},
	{
		input: "liquéfaction",
		output: {F: 1},
		
	},
	{
		input: "lire",
		output: {F: 1},
		
	},
	{
		input: "lire",
		output: {M: 1},
		
	},
	{
		input: "lis",
		output: {F: 1},
		
	},
	{
		input: "lis",
		output: {M: 1},
		
	},
	{
		input: "lisant",
		output: {F: 1},
		
	},
	{
		input: "lisant",
		output: {M: 1},
		
	},
	{
		input: "lise",
		output: {F: 1},
		
	},
	{
		input: "lise",
		output: {M: 1},
		
	},
	{
		input: "liseron",
		output: {M: 1},
		
	},
	{
		input: "liseré",
		output: {M: 1},
		
	},
	{
		input: "liseur",
		output: {M: 1},
		
	},
	{
		input: "liseuse",
		output: {F: 1},
		
	},
	{
		input: "lisibilité",
		output: {F: 1},
		
	},
	{
		input: "lisible",
		output: {M: 1},
		
	},
	{
		input: "lisier",
		output: {M: 1},
		
	},
	{
		input: "lisière",
		output: {F: 1},
		
	},
	{
		input: "lissage",
		output: {M: 1},
		
	},
	{
		input: "lisse",
		output: {F: 1},
		
	},
	{
		input: "lisse",
		output: {M: 1},
		
	},
	{
		input: "lista",
		output: {F: 1},
		
	},
	{
		input: "listage",
		output: {M: 1},
		
	},
	{
		input: "liste",
		output: {F: 1},
		
	},
	{
		input: "liste",
		output: {M: 1},
		
	},
	{
		input: "listel",
		output: {M: 1},
		
	},
	{
		input: "listing",
		output: {M: 1},
		
	},
	{
		input: "listériose",
		output: {F: 1},
		
	},
	{
		input: "liséré",
		output: {M: 1},
		
	},
	{
		input: "lit",
		output: {F: 1},
		
	},
	{
		input: "lit",
		output: {M: 1},
		
	},
	{
		input: "litage",
		output: {M: 1},
		
	},
	{
		input: "litanie",
		output: {F: 1},
		
	},
	{
		input: "literatura",
		output: {F: 1},
		
	},
	{
		input: "literie",
		output: {F: 1},
		
	},
	{
		input: "lithiase",
		output: {F: 1},
		
	},
	{
		input: "lithification",
		output: {F: 1},
		
	},
	{
		input: "lithium",
		output: {M: 1},
		
	},
	{
		input: "litho",
		output: {F: 1},
		
	},
	{
		input: "lithographe",
		output: {M: 1},
		
	},
	{
		input: "lithographie",
		output: {F: 1},
		
	},
	{
		input: "lithologie",
		output: {F: 1},
		
	},
	{
		input: "lithosphère",
		output: {F: 1},
		
	},
	{
		input: "lithotritie",
		output: {F: 1},
		
	},
	{
		input: "litige",
		output: {M: 1},
		
	},
	{
		input: "litispendance",
		output: {F: 1},
		
	},
	{
		input: "litière",
		output: {F: 1},
		
	},
	{
		input: "litote",
		output: {F: 1},
		
	},
	{
		input: "litre",
		output: {M: 1},
		
	},
	{
		input: "littera",
		output: {F: 1},
		
	},
	{
		input: "litterature",
		output: {F: 1},
		
	},
	{
		input: "littoral",
		output: {M: 1},
		
	},
	{
		input: "littoralisation",
		output: {F: 1},
		
	},
	{
		input: "litté",
		output: {F: 1},
		
	},
	{
		input: "littéra",
		output: {F: 1},
		
	},
	{
		input: "littéracie",
		output: {F: 1},
		
	},
	{
		input: "littéraire",
		output: {F: 1},
		
	},
	{
		input: "littéraire",
		output: {M: 1},
		
	},
	{
		input: "littéral",
		output: {M: 1},
		
	},
	{
		input: "littéralisation",
		output: {F: 1},
		
	},
	{
		input: "littéralisme",
		output: {M: 1},
		
	},
	{
		input: "littéralité",
		output: {F: 1},
		
	},
	{
		input: "littérarisation",
		output: {F: 1},
		
	},
	{
		input: "littérarité",
		output: {F: 1},
		
	},
	{
		input: "littérateur",
		output: {M: 1},
		
	},
	{
		input: "littératie",
		output: {F: 1},
		
	},
	{
		input: "littérature",
		output: {F: 1},
		
	},
	{
		input: "lituanien",
		output: {M: 1},
		
	},
	{
		input: "liturgie",
		output: {F: 1},
		
	},
	{
		input: "lité",
		output: {F: 1},
		
	},
	{
		input: "litérature",
		output: {F: 1},
		
	},
	{
		input: "lividité",
		output: {F: 1},
		
	},
	{
		input: "living",
		output: {M: 1},
		
	},
	{
		input: "livraison",
		output: {F: 1},
		
	},
	{
		input: "livre",
		output: {F: 1},
		
	},
	{
		input: "livre",
		output: {M: 1},
		
	},
	{
		input: "livres",
		output: {F: 1},
		
	},
	{
		input: "livres",
		output: {M: 1},
		
	},
	{
		input: "livret",
		output: {M: 1},
		
	},
	{
		input: "livreur",
		output: {M: 1},
		
	},
	{
		input: "livrée",
		output: {F: 1},
		
	},
	{
		input: "lixiviation",
		output: {F: 1},
		
	},
	{
		input: "liège",
		output: {M: 1},
		
	},
	{
		input: "lièvre",
		output: {M: 1},
		
	},
	{
		input: "llamada",
		output: {F: 1},
		
	},
	{
		input: "lle",
		output: {F: 1},
		
	},
	{
		input: "llegada",
		output: {F: 1},
		
	},
	{
		input: "llengua",
		output: {F: 1},
		
	},
	{
		input: "llle",
		output: {F: 1},
		
	},
	{
		input: "lluvia",
		output: {F: 1},
		
	},
	{
		input: "lo",
		output: {F: 1},
		
	},
	{
		input: "loa",
		output: {M: 1},
		
	},
	{
		input: "lobby",
		output: {M: 1},
		
	},
	{
		input: "lobbying",
		output: {M: 1},
		
	},
	{
		input: "lobbyiste",
		output: {M: 1},
		
	},
	{
		input: "lobe",
		output: {M: 1},
		
	},
	{
		input: "lobectomie",
		output: {F: 1},
		
	},
	{
		input: "lobotomie",
		output: {F: 1},
		
	},
	{
		input: "lobule",
		output: {M: 1},
		
	},
	{
		input: "localisateur",
		output: {M: 1},
		
	},
	{
		input: "localisation",
		output: {F: 1},
		
	},
	{
		input: "localisme",
		output: {M: 1},
		
	},
	{
		input: "localité",
		output: {F: 1},
		
	},
	{
		input: "localización",
		output: {F: 1},
		
	},
	{
		input: "locataire",
		output: {F: 1},
		
	},
	{
		input: "locataire",
		output: {M: 1},
		
	},
	{
		input: "locateur",
		output: {M: 1},
		
	},
	{
		input: "locatif",
		output: {M: 1},
		
	},
	{
		input: "location",
		output: {F: 1},
		
	},
	{
		input: "loch",
		output: {M: 1},
		
	},
	{
		input: "lock",
		output: {M: 1},
		
	},
	{
		input: "loco",
		output: {F: 1},
		
	},
	{
		input: "locomobile",
		output: {F: 1},
		
	},
	{
		input: "locomotion",
		output: {F: 1},
		
	},
	{
		input: "locomotive",
		output: {F: 1},
		
	},
	{
		input: "loculus",
		output: {M: 1},
		
	},
	{
		input: "locura",
		output: {F: 1},
		
	},
	{
		input: "locus",
		output: {M: 1},
		
	},
	{
		input: "locuteur",
		output: {M: 1},
		
	},
	{
		input: "locution",
		output: {F: 1},
		
	},
	{
		input: "locutrice",
		output: {F: 1},
		
	},
	{
		input: "loess",
		output: {M: 1},
		
	},
	{
		input: "loft",
		output: {M: 1},
		
	},
	{
		input: "log",
		output: {F: 1},
		
	},
	{
		input: "log",
		output: {M: 1},
		
	},
	{
		input: "logarithme",
		output: {M: 1},
		
	},
	{
		input: "loge",
		output: {F: 1},
		
	},
	{
		input: "loge",
		output: {M: 1},
		
	},
	{
		input: "logement",
		output: {M: 1},
		
	},
	{
		input: "logette",
		output: {F: 1},
		
	},
	{
		input: "logeur",
		output: {M: 1},
		
	},
	{
		input: "logeuse",
		output: {F: 1},
		
	},
	{
		input: "loggia",
		output: {F: 1},
		
	},
	{
		input: "logiciel",
		output: {M: 1},
		
	},
	{
		input: "logicien",
		output: {M: 1},
		
	},
	{
		input: "logicisme",
		output: {M: 1},
		
	},
	{
		input: "logicité",
		output: {F: 1},
		
	},
	{
		input: "login",
		output: {M: 1},
		
	},
	{
		input: "logion",
		output: {M: 1},
		
	},
	{
		input: "logique",
		output: {F: 1},
		
	},
	{
		input: "logique",
		output: {M: 1},
		
	},
	{
		input: "logis",
		output: {M: 1},
		
	},
	{
		input: "logisticien",
		output: {M: 1},
		
	},
	{
		input: "logistique",
		output: {F: 1},
		
	},
	{
		input: "logit",
		output: {M: 1},
		
	},
	{
		input: "logo",
		output: {M: 1},
		
	},
	{
		input: "logocentrisme",
		output: {M: 1},
		
	},
	{
		input: "logogramme",
		output: {M: 1},
		
	},
	{
		input: "logomachie",
		output: {F: 1},
		
	},
	{
		input: "logorrhée",
		output: {F: 1},
		
	},
	{
		input: "logos",
		output: {M: 1},
		
	},
	{
		input: "logosphère",
		output: {F: 1},
		
	},
	{
		input: "logothérapie",
		output: {F: 1},
		
	},
	{
		input: "logotype",
		output: {M: 1},
		
	},
	{
		input: "loi",
		output: {F: 1},
		
	},
	{
		input: "loi",
		output: {M: 1},
		
	},
	{
		input: "loicadre",
		output: {F: 1},
		
	},
	{
		input: "loin",
		output: {F: 1},
		
	},
	{
		input: "loin",
		output: {M: 1},
		
	},
	{
		input: "lointain",
		output: {M: 1},
		
	},
	{
		input: "lointaine",
		output: {F: 1},
		
	},
	{
		input: "loir",
		output: {M: 1},
		
	},
	{
		input: "lois",
		output: {F: 1},
		
	},
	{
		input: "loisir",
		output: {M: 1},
		
	},
	{
		input: "lol",
		output: {F: 1},
		
	},
	{
		input: "lombalgie",
		output: {F: 1},
		
	},
	{
		input: "lombric",
		output: {M: 1},
		
	},
	{
		input: "long",
		output: {M: 1},
		
	},
	{
		input: "longanimité",
		output: {F: 1},
		
	},
	{
		input: "longe",
		output: {F: 1},
		
	},
	{
		input: "longeur",
		output: {F: 1},
		
	},
	{
		input: "longitude",
		output: {F: 1},
		
	},
	{
		input: "longueur",
		output: {F: 1},
		
	},
	{
		input: "longévité",
		output: {F: 1},
		
	},
	{
		input: "look",
		output: {M: 1},
		
	},
	{
		input: "lopin",
		output: {M: 1},
		
	},
	{
		input: "loquacité",
		output: {F: 1},
		
	},
	{
		input: "loque",
		output: {F: 1},
		
	},
	{
		input: "loquet",
		output: {M: 1},
		
	},
	{
		input: "lor",
		output: {M: 1},
		
	},
	{
		input: "lord",
		output: {M: 1},
		
	},
	{
		input: "lordose",
		output: {F: 1},
		
	},
	{
		input: "lorette",
		output: {F: 1},
		
	},
	{
		input: "lorgnette",
		output: {F: 1},
		
	},
	{
		input: "lorgnon",
		output: {M: 1},
		
	},
	{
		input: "loriot",
		output: {M: 1},
		
	},
	{
		input: "loro",
		output: {F: 1},
		
	},
	{
		input: "loro",
		output: {M: 1},
		
	},
	{
		input: "lorrain",
		output: {M: 1},
		
	},
	{
		input: "lors",
		output: {M: 1},
		
	},
	{
		input: "losange",
		output: {M: 1},
		
	},
	{
		input: "lot",
		output: {F: 1},
		
	},
	{
		input: "lot",
		output: {M: 1},
		
	},
	{
		input: "loterie",
		output: {F: 1},
		
	},
	{
		input: "lotion",
		output: {F: 1},
		
	},
	{
		input: "lotissement",
		output: {M: 1},
		
	},
	{
		input: "lotisseur",
		output: {M: 1},
		
	},
	{
		input: "loto",
		output: {M: 1},
		
	},
	{
		input: "lotte",
		output: {F: 1},
		
	},
	{
		input: "lotus",
		output: {M: 1},
		
	},
	{
		input: "louage",
		output: {M: 1},
		
	},
	{
		input: "louange",
		output: {F: 1},
		
	},
	{
		input: "loubard",
		output: {M: 1},
		
	},
	{
		input: "louche",
		output: {F: 1},
		
	},
	{
		input: "louche",
		output: {M: 1},
		
	},
	{
		input: "loue",
		output: {F: 1},
		
	},
	{
		input: "loue",
		output: {M: 1},
		
	},
	{
		input: "loueur",
		output: {M: 1},
		
	},
	{
		input: "loufoquerie",
		output: {F: 1},
		
	},
	{
		input: "lougre",
		output: {M: 1},
		
	},
	{
		input: "louis",
		output: {M: 1},
		
	},
	{
		input: "loup",
		output: {M: 1},
		
	},
	{
		input: "loupe",
		output: {F: 1},
		
	},
	{
		input: "lourdeur",
		output: {F: 1},
		
	},
	{
		input: "loustic",
		output: {M: 1},
		
	},
	{
		input: "loutre",
		output: {F: 1},
		
	},
	{
		input: "louve",
		output: {F: 1},
		
	},
	{
		input: "louveteau",
		output: {M: 1},
		
	},
	{
		input: "loxodromie",
		output: {F: 1},
		
	},
	{
		input: "loy",
		output: {F: 1},
		
	},
	{
		input: "loyalisme",
		output: {M: 1},
		
	},
	{
		input: "loyauté",
		output: {F: 1},
		
	},
	{
		input: "loyer",
		output: {M: 1},
		
	},
	{
		input: "lrc",
		output: {F: 1},
		
	},
	{
		input: "lre",
		output: {F: 1},
		
	},
	{
		input: "lt",
		output: {M: 1},
		
	},
	{
		input: "lu",
		output: {F: 1},
		
	},
	{
		input: "lu",
		output: {M: 1},
		
	},
	{
		input: "lubie",
		output: {F: 1},
		
	},
	{
		input: "lubricité",
		output: {F: 1},
		
	},
	{
		input: "lubrifiant",
		output: {M: 1},
		
	},
	{
		input: "lubrification",
		output: {F: 1},
		
	},
	{
		input: "lucarne",
		output: {F: 1},
		
	},
	{
		input: "luce",
		output: {F: 1},
		
	},
	{
		input: "lucha",
		output: {F: 1},
		
	},
	{
		input: "lucidité",
		output: {F: 1},
		
	},
	{
		input: "luciole",
		output: {F: 1},
		
	},
	{
		input: "lucre",
		output: {M: 1},
		
	},
	{
		input: "ludion",
		output: {M: 1},
		
	},
	{
		input: "ludique",
		output: {M: 1},
		
	},
	{
		input: "ludisme",
		output: {M: 1},
		
	},
	{
		input: "ludothèque",
		output: {F: 1},
		
	},
	{
		input: "luette",
		output: {F: 1},
		
	},
	{
		input: "lueur",
		output: {F: 1},
		
	},
	{
		input: "lugar",
		output: {M: 1},
		
	},
	{
		input: "luge",
		output: {F: 1},
		
	},
	{
		input: "luisance",
		output: {F: 1},
		
	},
	{
		input: "lumbago",
		output: {M: 1},
		
	},
	{
		input: "lumen",
		output: {M: 1},
		
	},
	{
		input: "lumiere",
		output: {F: 1},
		
	},
	{
		input: "lumignon",
		output: {M: 1},
		
	},
	{
		input: "luminaire",
		output: {M: 1},
		
	},
	{
		input: "luminance",
		output: {F: 1},
		
	},
	{
		input: "luminescence",
		output: {F: 1},
		
	},
	{
		input: "lumineux",
		output: {M: 1},
		
	},
	{
		input: "luminosité",
		output: {F: 1},
		
	},
	{
		input: "lumière",
		output: {F: 1},
		
	},
	{
		input: "lumiére",
		output: {F: 1},
		
	},
	{
		input: "lumpen",
		output: {M: 1},
		
	},
	{
		input: "lumpenprolétariat",
		output: {M: 1},
		
	},
	{
		input: "luna",
		output: {F: 1},
		
	},
	{
		input: "lunaison",
		output: {F: 1},
		
	},
	{
		input: "lunch",
		output: {M: 1},
		
	},
	{
		input: "lundi",
		output: {M: 1},
		
	},
	{
		input: "lundy",
		output: {M: 1},
		
	},
	{
		input: "lune",
		output: {F: 1},
		
	},
	{
		input: "lunette",
		output: {F: 1},
		
	},
	{
		input: "lunetterie",
		output: {F: 1},
		
	},
	{
		input: "lunule",
		output: {F: 1},
		
	},
	{
		input: "luogo",
		output: {M: 1},
		
	},
	{
		input: "lupanar",
		output: {M: 1},
		
	},
	{
		input: "lupin",
		output: {M: 1},
		
	},
	{
		input: "lupus",
		output: {M: 1},
		
	},
	{
		input: "lus",
		output: {F: 1},
		
	},
	{
		input: "lus",
		output: {M: 1},
		
	},
	{
		input: "lusophonie",
		output: {F: 1},
		
	},
	{
		input: "lustration",
		output: {F: 1},
		
	},
	{
		input: "lustre",
		output: {M: 1},
		
	},
	{
		input: "lut",
		output: {F: 1},
		
	},
	{
		input: "lut",
		output: {M: 1},
		
	},
	{
		input: "luth",
		output: {M: 1},
		
	},
	{
		input: "lutherie",
		output: {F: 1},
		
	},
	{
		input: "luthier",
		output: {M: 1},
		
	},
	{
		input: "luthiste",
		output: {M: 1},
		
	},
	{
		input: "luthéranisme",
		output: {M: 1},
		
	},
	{
		input: "lutin",
		output: {M: 1},
		
	},
	{
		input: "lutrin",
		output: {M: 1},
		
	},
	{
		input: "lutte",
		output: {F: 1},
		
	},
	{
		input: "lutte",
		output: {M: 1},
		
	},
	{
		input: "lutteur",
		output: {M: 1},
		
	},
	{
		input: "luxation",
		output: {F: 1},
		
	},
	{
		input: "luxe",
		output: {M: 1},
		
	},
	{
		input: "luxembourgeois",
		output: {M: 1},
		
	},
	{
		input: "luxure",
		output: {F: 1},
		
	},
	{
		input: "luxuriance",
		output: {F: 1},
		
	},
	{
		input: "luz",
		output: {F: 1},
		
	},
	{
		input: "luzerne",
		output: {F: 1},
		
	},
	{
		input: "lycanthropie",
		output: {F: 1},
		
	},
	{
		input: "lycée",
		output: {M: 1},
		
	},
	{
		input: "lycéen",
		output: {M: 1},
		
	},
	{
		input: "lycéenne",
		output: {F: 1},
		
	},
	{
		input: "lymphadénectomie",
		output: {F: 1},
		
	},
	{
		input: "lymphangite",
		output: {F: 1},
		
	},
	{
		input: "lymphe",
		output: {F: 1},
		
	},
	{
		input: "lymphocyte",
		output: {M: 1},
		
	},
	{
		input: "lymphome",
		output: {M: 1},
		
	},
	{
		input: "lymphœdème",
		output: {M: 1},
		
	},
	{
		input: "lynchage",
		output: {M: 1},
		
	},
	{
		input: "lynx",
		output: {M: 1},
		
	},
	{
		input: "lyophilisation",
		output: {F: 1},
		
	},
	{
		input: "lyre",
		output: {F: 1},
		
	},
	{
		input: "lyrique",
		output: {F: 1},
		
	},
	{
		input: "lyrique",
		output: {M: 1},
		
	},
	{
		input: "lyrisme",
		output: {M: 1},
		
	},
	{
		input: "lys",
		output: {M: 1},
		
	},
	{
		input: "lyse",
		output: {F: 1},
		
	},
	{
		input: "lysine",
		output: {F: 1},
		
	},
	{
		input: "lysozyme",
		output: {M: 1},
		
	},
	{
		input: "lyssenkisme",
		output: {M: 1},
		
	},
	{
		input: "lâchage",
		output: {M: 1},
		
	},
	{
		input: "lâche",
		output: {F: 1},
		
	},
	{
		input: "lâche",
		output: {M: 1},
		
	},
	{
		input: "lâcher",
		output: {F: 1},
		
	},
	{
		input: "lâcher",
		output: {M: 1},
		
	},
	{
		input: "lâcheté",
		output: {F: 1},
		
	},
	{
		input: "lèche",
		output: {F: 1},
		
	},
	{
		input: "lèche",
		output: {M: 1},
		
	},
	{
		input: "lèpre",
		output: {F: 1},
		
	},
	{
		input: "lère",
		output: {F: 1},
		
	},
	{
		input: "lèse",
		output: {F: 1},
		
	},
	{
		input: "lève",
		output: {M: 1},
		
	},
	{
		input: "lèvre",
		output: {F: 1},
		
	},
	{
		input: "lé",
		output: {M: 1},
		
	},
	{
		input: "léchage",
		output: {M: 1},
		
	},
	{
		input: "lécithine",
		output: {F: 1},
		
	},
	{
		input: "légal",
		output: {M: 1},
		
	},
	{
		input: "légalisation",
		output: {F: 1},
		
	},
	{
		input: "légalisme",
		output: {M: 1},
		
	},
	{
		input: "légalité",
		output: {F: 1},
		
	},
	{
		input: "légat",
		output: {M: 1},
		
	},
	{
		input: "légataire",
		output: {F: 1},
		
	},
	{
		input: "légataire",
		output: {M: 1},
		
	},
	{
		input: "légation",
		output: {F: 1},
		
	},
	{
		input: "légendaire",
		output: {F: 1},
		
	},
	{
		input: "légendaire",
		output: {M: 1},
		
	},
	{
		input: "légende",
		output: {F: 1},
		
	},
	{
		input: "légimité",
		output: {F: 1},
		
	},
	{
		input: "légine",
		output: {F: 1},
		
	},
	{
		input: "légion",
		output: {F: 1},
		
	},
	{
		input: "légionellose",
		output: {F: 1},
		
	},
	{
		input: "légionnaire",
		output: {M: 1},
		
	},
	{
		input: "législateur",
		output: {M: 1},
		
	},
	{
		input: "législation",
		output: {F: 1},
		
	},
	{
		input: "législative",
		output: {F: 1},
		
	},
	{
		input: "législature",
		output: {F: 1},
		
	},
	{
		input: "légiste",
		output: {M: 1},
		
	},
	{
		input: "légitimation",
		output: {F: 1},
		
	},
	{
		input: "légitime",
		output: {F: 1},
		
	},
	{
		input: "légitime",
		output: {M: 1},
		
	},
	{
		input: "légitiment",
		output: {F: 1},
		
	},
	{
		input: "légitiment",
		output: {M: 1},
		
	},
	{
		input: "légitimisme",
		output: {M: 1},
		
	},
	{
		input: "légitimiste",
		output: {M: 1},
		
	},
	{
		input: "légitimité",
		output: {F: 1},
		
	},
	{
		input: "légume",
		output: {M: 1},
		
	},
	{
		input: "légumineuse",
		output: {F: 1},
		
	},
	{
		input: "légèreté",
		output: {F: 1},
		
	},
	{
		input: "léninisme",
		output: {M: 1},
		
	},
	{
		input: "léopard",
		output: {M: 1},
		
	},
	{
		input: "lépreux",
		output: {M: 1},
		
	},
	{
		input: "léproserie",
		output: {F: 1},
		
	},
	{
		input: "lésion",
		output: {F: 1},
		
	},
	{
		input: "lésé",
		output: {M: 1},
		
	},
	{
		input: "létalité",
		output: {F: 1},
		
	},
	{
		input: "léthargie",
		output: {F: 1},
		
	},
	{
		input: "lévirat",
		output: {M: 1},
		
	},
	{
		input: "lévitation",
		output: {F: 1},
		
	},
	{
		input: "lévite",
		output: {M: 1},
		
	},
	{
		input: "lévrier",
		output: {M: 1},
		
	},
	{
		input: "lézard",
		output: {M: 1},
		
	},
	{
		input: "lézarde",
		output: {F: 1},
		
	},
	{
		input: "línea",
		output: {F: 1},
		
	},
	{
		input: "lógica",
		output: {F: 1},
		
	},
	{
		input: "m",
		output: {F: 1},
		
	},
	{
		input: "m",
		output: {M: 1},
		
	},
	{
		input: "ma",
		output: {F: 1},
		
	},
	{
		input: "ma",
		output: {M: 1},
		
	},
	{
		input: "mac",
		output: {M: 1},
		
	},
	{
		input: "macabo",
		output: {M: 1},
		
	},
	{
		input: "macabre",
		output: {F: 1},
		
	},
	{
		input: "macabre",
		output: {M: 1},
		
	},
	{
		input: "macadam",
		output: {M: 1},
		
	},
	{
		input: "macaque",
		output: {M: 1},
		
	},
	{
		input: "macaron",
		output: {M: 1},
		
	},
	{
		input: "macaroni",
		output: {M: 1},
		
	},
	{
		input: "maccarthysme",
		output: {M: 1},
		
	},
	{
		input: "macchabée",
		output: {M: 1},
		
	},
	{
		input: "macellum",
		output: {M: 1},
		
	},
	{
		input: "machette",
		output: {F: 1},
		
	},
	{
		input: "machiavélisme",
		output: {M: 1},
		
	},
	{
		input: "machin",
		output: {M: 1},
		
	},
	{
		input: "machination",
		output: {F: 1},
		
	},
	{
		input: "machine",
		output: {F: 1},
		
	},
	{
		input: "machineoutil",
		output: {F: 1},
		
	},
	{
		input: "machinerie",
		output: {F: 1},
		
	},
	{
		input: "machinisme",
		output: {M: 1},
		
	},
	{
		input: "machiniste",
		output: {M: 1},
		
	},
	{
		input: "machisme",
		output: {M: 1},
		
	},
	{
		input: "macho",
		output: {M: 1},
		
	},
	{
		input: "machoire",
		output: {F: 1},
		
	},
	{
		input: "macrobiotique",
		output: {F: 1},
		
	},
	{
		input: "macrocosme",
		output: {M: 1},
		
	},
	{
		input: "macrocéphalie",
		output: {F: 1},
		
	},
	{
		input: "macrofaune",
		output: {F: 1},
		
	},
	{
		input: "macromolécule",
		output: {F: 1},
		
	},
	{
		input: "macrophage",
		output: {M: 1},
		
	},
	{
		input: "macroporosité",
		output: {F: 1},
		
	},
	{
		input: "macroscope",
		output: {M: 1},
		
	},
	{
		input: "macrosociologie",
		output: {F: 1},
		
	},
	{
		input: "macrostructure",
		output: {F: 1},
		
	},
	{
		input: "macroéconomie",
		output: {F: 1},
		
	},
	{
		input: "macroévolution",
		output: {F: 1},
		
	},
	{
		input: "macula",
		output: {F: 1},
		
	},
	{
		input: "macule",
		output: {F: 1},
		
	},
	{
		input: "macumba",
		output: {F: 1},
		
	},
	{
		input: "macédoine",
		output: {F: 1},
		
	},
	{
		input: "macédonien",
		output: {M: 1},
		
	},
	{
		input: "macération",
		output: {F: 1},
		
	},
	{
		input: "madame",
		output: {F: 1},
		
	},
	{
		input: "madeleine",
		output: {F: 1},
		
	},
	{
		input: "madera",
		output: {F: 1},
		
	},
	{
		input: "madone",
		output: {F: 1},
		
	},
	{
		input: "madrague",
		output: {F: 1},
		
	},
	{
		input: "madras",
		output: {M: 1},
		
	},
	{
		input: "madrasa",
		output: {F: 1},
		
	},
	{
		input: "madre",
		output: {F: 1},
		
	},
	{
		input: "madrier",
		output: {M: 1},
		
	},
	{
		input: "madrigal",
		output: {M: 1},
		
	},
	{
		input: "madère",
		output: {F: 1},
		
	},
	{
		input: "maelstrom",
		output: {M: 1},
		
	},
	{
		input: "maelstrôm",
		output: {M: 1},
		
	},
	{
		input: "maestria",
		output: {F: 1},
		
	},
	{
		input: "maestro",
		output: {M: 1},
		
	},
	{
		input: "maffia",
		output: {F: 1},
		
	},
	{
		input: "mafia",
		output: {F: 1},
		
	},
	{
		input: "mafieux",
		output: {M: 1},
		
	},
	{
		input: "maftre",
		output: {M: 1},
		
	},
	{
		input: "maftrise",
		output: {F: 1},
		
	},
	{
		input: "magasin",
		output: {M: 1},
		
	},
	{
		input: "magasinage",
		output: {M: 1},
		
	},
	{
		input: "magasinier",
		output: {M: 1},
		
	},
	{
		input: "magazin",
		output: {M: 1},
		
	},
	{
		input: "magazine",
		output: {M: 1},
		
	},
	{
		input: "mage",
		output: {M: 1},
		
	},
	{
		input: "maggior",
		output: {F: 1},
		
	},
	{
		input: "maghrébin",
		output: {M: 1},
		
	},
	{
		input: "maghzen",
		output: {M: 1},
		
	},
	{
		input: "magia",
		output: {F: 1},
		
	},
	{
		input: "magicien",
		output: {M: 1},
		
	},
	{
		input: "magicienne",
		output: {F: 1},
		
	},
	{
		input: "magie",
		output: {F: 1},
		
	},
	{
		input: "magique",
		output: {M: 1},
		
	},
	{
		input: "magister",
		output: {M: 1},
		
	},
	{
		input: "magistral",
		output: {M: 1},
		
	},
	{
		input: "magistrale",
		output: {F: 1},
		
	},
	{
		input: "magistrat",
		output: {M: 1},
		
	},
	{
		input: "magistrate",
		output: {F: 1},
		
	},
	{
		input: "magistrature",
		output: {F: 1},
		
	},
	{
		input: "magistère",
		output: {M: 1},
		
	},
	{
		input: "magma",
		output: {M: 1},
		
	},
	{
		input: "magmatisme",
		output: {M: 1},
		
	},
	{
		input: "magnanerie",
		output: {F: 1},
		
	},
	{
		input: "magnanime",
		output: {M: 1},
		
	},
	{
		input: "magnanimité",
		output: {F: 1},
		
	},
	{
		input: "magnat",
		output: {M: 1},
		
	},
	{
		input: "magnification",
		output: {F: 1},
		
	},
	{
		input: "magnificence",
		output: {F: 1},
		
	},
	{
		input: "magnifique",
		output: {F: 1},
		
	},
	{
		input: "magnifique",
		output: {M: 1},
		
	},
	{
		input: "magnitude",
		output: {F: 1},
		
	},
	{
		input: "magnolia",
		output: {M: 1},
		
	},
	{
		input: "magnum",
		output: {M: 1},
		
	},
	{
		input: "magnésie",
		output: {F: 1},
		
	},
	{
		input: "magnésium",
		output: {M: 1},
		
	},
	{
		input: "magnétisation",
		output: {F: 1},
		
	},
	{
		input: "magnétiseur",
		output: {M: 1},
		
	},
	{
		input: "magnétisme",
		output: {M: 1},
		
	},
	{
		input: "magnétite",
		output: {F: 1},
		
	},
	{
		input: "magnéto",
		output: {F: 1},
		
	},
	{
		input: "magnéto",
		output: {M: 1},
		
	},
	{
		input: "magnétomètre",
		output: {M: 1},
		
	},
	{
		input: "magnétopause",
		output: {F: 1},
		
	},
	{
		input: "magnétophone",
		output: {M: 1},
		
	},
	{
		input: "magnétorésistance",
		output: {F: 1},
		
	},
	{
		input: "magnétoscope",
		output: {M: 1},
		
	},
	{
		input: "magnétosphère",
		output: {F: 1},
		
	},
	{
		input: "magot",
		output: {M: 1},
		
	},
	{
		input: "magouille",
		output: {F: 1},
		
	},
	{
		input: "magyarisation",
		output: {F: 1},
		
	},
	{
		input: "mahalla",
		output: {F: 1},
		
	},
	{
		input: "maharadjah",
		output: {M: 1},
		
	},
	{
		input: "maharajah",
		output: {M: 1},
		
	},
	{
		input: "mahdi",
		output: {M: 1},
		
	},
	{
		input: "mahométan",
		output: {M: 1},
		
	},
	{
		input: "mahométisme",
		output: {M: 1},
		
	},
	{
		input: "mai",
		output: {F: 1},
		
	},
	{
		input: "mai",
		output: {M: 1},
		
	},
	{
		input: "maie",
		output: {F: 1},
		
	},
	{
		input: "maigreur",
		output: {F: 1},
		
	},
	{
		input: "mail",
		output: {M: 1},
		
	},
	{
		input: "mailing",
		output: {M: 1},
		
	},
	{
		input: "maillage",
		output: {M: 1},
		
	},
	{
		input: "maille",
		output: {F: 1},
		
	},
	{
		input: "maillet",
		output: {M: 1},
		
	},
	{
		input: "maillon",
		output: {M: 1},
		
	},
	{
		input: "maillot",
		output: {M: 1},
		
	},
	{
		input: "main",
		output: {F: 1},
		
	},
	{
		input: "main",
		output: {M: 1},
		
	},
	{
		input: "maindoeuvre",
		output: {F: 1},
		
	},
	{
		input: "mainlevée",
		output: {F: 1},
		
	},
	{
		input: "mainmise",
		output: {F: 1},
		
	},
	{
		input: "mainmorte",
		output: {F: 1},
		
	},
	{
		input: "mains",
		output: {F: 1},
		
	},
	{
		input: "mainstream",
		output: {M: 1},
		
	},
	{
		input: "maintenance",
		output: {F: 1},
		
	},
	{
		input: "mainteneur",
		output: {M: 1},
		
	},
	{
		input: "maintien",
		output: {F: 1},
		
	},
	{
		input: "maintien",
		output: {M: 1},
		
	},
	{
		input: "maintiens",
		output: {M: 1},
		
	},
	{
		input: "maiorité",
		output: {F: 1},
		
	},
	{
		input: "maire",
		output: {F: 1},
		
	},
	{
		input: "maire",
		output: {M: 1},
		
	},
	{
		input: "mairesse",
		output: {F: 1},
		
	},
	{
		input: "mairie",
		output: {F: 1},
		
	},
	{
		input: "maison",
		output: {F: 1},
		
	},
	{
		input: "maison",
		output: {M: 1},
		
	},
	{
		input: "maisonmère",
		output: {F: 1},
		
	},
	{
		input: "maisonnette",
		output: {F: 1},
		
	},
	{
		input: "maisonnée",
		output: {F: 1},
		
	},
	{
		input: "maistrance",
		output: {F: 1},
		
	},
	{
		input: "maistre",
		output: {M: 1},
		
	},
	{
		input: "maitre",
		output: {M: 1},
		
	},
	{
		input: "maitresse",
		output: {F: 1},
		
	},
	{
		input: "maitrise",
		output: {F: 1},
		
	},
	{
		input: "majesté",
		output: {F: 1},
		
	},
	{
		input: "majlis",
		output: {M: 1},
		
	},
	{
		input: "majo",
		output: {F: 1},
		
	},
	{
		input: "major",
		output: {F: 1},
		
	},
	{
		input: "major",
		output: {M: 1},
		
	},
	{
		input: "majorant",
		output: {M: 1},
		
	},
	{
		input: "majorat",
		output: {M: 1},
		
	},
	{
		input: "majoration",
		output: {F: 1},
		
	},
	{
		input: "majordome",
		output: {M: 1},
		
	},
	{
		input: "majorite",
		output: {F: 1},
		
	},
	{
		input: "majorité",
		output: {F: 1},
		
	},
	{
		input: "majuscule",
		output: {F: 1},
		
	},
	{
		input: "makhzen",
		output: {M: 1},
		
	},
	{
		input: "mal",
		output: {F: 1},
		
	},
	{
		input: "mal",
		output: {M: 1},
		
	},
	{
		input: "mala",
		output: {F: 1},
		
	},
	{
		input: "malabar",
		output: {M: 1},
		
	},
	{
		input: "malabsorption",
		output: {F: 1},
		
	},
	{
		input: "malachite",
		output: {F: 1},
		
	},
	{
		input: "malacofaune",
		output: {F: 1},
		
	},
	{
		input: "malade",
		output: {F: 1},
		
	},
	{
		input: "malade",
		output: {M: 1},
		
	},
	{
		input: "maladie",
		output: {F: 1},
		
	},
	{
		input: "maladrerie",
		output: {F: 1},
		
	},
	{
		input: "maladresse",
		output: {F: 1},
		
	},
	{
		input: "maladroit",
		output: {M: 1},
		
	},
	{
		input: "malais",
		output: {M: 1},
		
	},
	{
		input: "malaise",
		output: {M: 1},
		
	},
	{
		input: "malaria",
		output: {F: 1},
		
	},
	{
		input: "malaxage",
		output: {M: 1},
		
	},
	{
		input: "malaxeur",
		output: {M: 1},
		
	},
	{
		input: "malbouffe",
		output: {F: 1},
		
	},
	{
		input: "malchance",
		output: {F: 1},
		
	},
	{
		input: "malchanceux",
		output: {M: 1},
		
	},
	{
		input: "malemort",
		output: {F: 1},
		
	},
	{
		input: "malentendu",
		output: {M: 1},
		
	},
	{
		input: "malfaisance",
		output: {F: 1},
		
	},
	{
		input: "malfaiteur",
		output: {M: 1},
		
	},
	{
		input: "malfaçon",
		output: {F: 1},
		
	},
	{
		input: "malformation",
		output: {F: 1},
		
	},
	{
		input: "malfrat",
		output: {M: 1},
		
	},
	{
		input: "malgache",
		output: {M: 1},
		
	},
	{
		input: "malgachisation",
		output: {F: 1},
		
	},
	{
		input: "malheur",
		output: {M: 1},
		
	},
	{
		input: "malheureuse",
		output: {F: 1},
		
	},
	{
		input: "malhonnêteté",
		output: {F: 1},
		
	},
	{
		input: "malice",
		output: {F: 1},
		
	},
	{
		input: "malicieux",
		output: {M: 1},
		
	},
	{
		input: "maligne",
		output: {F: 1},
		
	},
	{
		input: "malignité",
		output: {F: 1},
		
	},
	{
		input: "malin",
		output: {M: 1},
		
	},
	{
		input: "malinké",
		output: {M: 1},
		
	},
	{
		input: "malle",
		output: {F: 1},
		
	},
	{
		input: "mallette",
		output: {F: 1},
		
	},
	{
		input: "malléabilité",
		output: {F: 1},
		
	},
	{
		input: "malléole",
		output: {F: 1},
		
	},
	{
		input: "malnutrition",
		output: {F: 1},
		
	},
	{
		input: "maloca",
		output: {F: 1},
		
	},
	{
		input: "malocclusion",
		output: {F: 1},
		
	},
	{
		input: "malotru",
		output: {M: 1},
		
	},
	{
		input: "maloya",
		output: {M: 1},
		
	},
	{
		input: "malposition",
		output: {F: 1},
		
	},
	{
		input: "malpropre",
		output: {M: 1},
		
	},
	{
		input: "malpropreté",
		output: {F: 1},
		
	},
	{
		input: "malsain",
		output: {M: 1},
		
	},
	{
		input: "malt",
		output: {M: 1},
		
	},
	{
		input: "maltais",
		output: {M: 1},
		
	},
	{
		input: "malterie",
		output: {F: 1},
		
	},
	{
		input: "malthusianisme",
		output: {M: 1},
		
	},
	{
		input: "maltose",
		output: {M: 1},
		
	},
	{
		input: "maltraitance",
		output: {F: 1},
		
	},
	{
		input: "maltresse",
		output: {F: 1},
		
	},
	{
		input: "malveillance",
		output: {F: 1},
		
	},
	{
		input: "malversation",
		output: {F: 1},
		
	},
	{
		input: "malédiction",
		output: {F: 1},
		
	},
	{
		input: "maléfice",
		output: {M: 1},
		
	},
	{
		input: "malêtre",
		output: {M: 1},
		
	},
	{
		input: "maman",
		output: {F: 1},
		
	},
	{
		input: "mambo",
		output: {F: 1},
		
	},
	{
		input: "mambo",
		output: {M: 1},
		
	},
	{
		input: "mamelle",
		output: {F: 1},
		
	},
	{
		input: "mamelon",
		output: {M: 1},
		
	},
	{
		input: "mamelouk",
		output: {M: 1},
		
	},
	{
		input: "mamie",
		output: {F: 1},
		
	},
	{
		input: "mamma",
		output: {F: 1},
		
	},
	{
		input: "mammifère",
		output: {M: 1},
		
	},
	{
		input: "mammite",
		output: {F: 1},
		
	},
	{
		input: "mammographie",
		output: {F: 1},
		
	},
	{
		input: "mammouth",
		output: {M: 1},
		
	},
	{
		input: "man",
		output: {F: 1},
		
	},
	{
		input: "man",
		output: {M: 1},
		
	},
	{
		input: "mana",
		output: {M: 1},
		
	},
	{
		input: "manade",
		output: {F: 1},
		
	},
	{
		input: "management",
		output: {M: 1},
		
	},
	{
		input: "manager",
		output: {M: 1},
		
	},
	{
		input: "manageur",
		output: {M: 1},
		
	},
	{
		input: "manant",
		output: {M: 1},
		
	},
	{
		input: "manche",
		output: {F: 1},
		
	},
	{
		input: "manche",
		output: {M: 1},
		
	},
	{
		input: "manchette",
		output: {F: 1},
		
	},
	{
		input: "manchon",
		output: {M: 1},
		
	},
	{
		input: "manchot",
		output: {M: 1},
		
	},
	{
		input: "mancipation",
		output: {F: 1},
		
	},
	{
		input: "mandai",
		output: {M: 1},
		
	},
	{
		input: "mandala",
		output: {M: 1},
		
	},
	{
		input: "mandant",
		output: {M: 1},
		
	},
	{
		input: "mandarin",
		output: {M: 1},
		
	},
	{
		input: "mandarinat",
		output: {M: 1},
		
	},
	{
		input: "mandarine",
		output: {F: 1},
		
	},
	{
		input: "mandat",
		output: {M: 1},
		
	},
	{
		input: "mandataire",
		output: {M: 1},
		
	},
	{
		input: "mandatement",
		output: {M: 1},
		
	},
	{
		input: "mandature",
		output: {F: 1},
		
	},
	{
		input: "mande",
		output: {M: 1},
		
	},
	{
		input: "mandement",
		output: {M: 1},
		
	},
	{
		input: "mander",
		output: {M: 1},
		
	},
	{
		input: "mandibule",
		output: {F: 1},
		
	},
	{
		input: "mandingue",
		output: {M: 1},
		
	},
	{
		input: "mandoline",
		output: {F: 1},
		
	},
	{
		input: "mandorle",
		output: {F: 1},
		
	},
	{
		input: "mandragore",
		output: {F: 1},
		
	},
	{
		input: "mandrin",
		output: {M: 1},
		
	},
	{
		input: "manducation",
		output: {F: 1},
		
	},
	{
		input: "manera",
		output: {F: 1},
		
	},
	{
		input: "manette",
		output: {F: 1},
		
	},
	{
		input: "manga",
		output: {M: 1},
		
	},
	{
		input: "manganèse",
		output: {M: 1},
		
	},
	{
		input: "mange",
		output: {F: 1},
		
	},
	{
		input: "mange",
		output: {M: 1},
		
	},
	{
		input: "mangeaille",
		output: {F: 1},
		
	},
	{
		input: "mangeoire",
		output: {F: 1},
		
	},
	{
		input: "manger",
		output: {F: 1},
		
	},
	{
		input: "manger",
		output: {M: 1},
		
	},
	{
		input: "mangeur",
		output: {M: 1},
		
	},
	{
		input: "mangeuse",
		output: {F: 1},
		
	},
	{
		input: "mangouste",
		output: {F: 1},
		
	},
	{
		input: "mangrove",
		output: {F: 1},
		
	},
	{
		input: "mangue",
		output: {F: 1},
		
	},
	{
		input: "manguier",
		output: {M: 1},
		
	},
	{
		input: "mani",
		output: {F: 1},
		
	},
	{
		input: "mani",
		output: {M: 1},
		
	},
	{
		input: "mania",
		output: {F: 1},
		
	},
	{
		input: "maniabilité",
		output: {F: 1},
		
	},
	{
		input: "maniaque",
		output: {M: 1},
		
	},
	{
		input: "maniaquerie",
		output: {F: 1},
		
	},
	{
		input: "manichéisme",
		output: {M: 1},
		
	},
	{
		input: "manie",
		output: {F: 1},
		
	},
	{
		input: "manie",
		output: {M: 1},
		
	},
	{
		input: "maniement",
		output: {M: 1},
		
	},
	{
		input: "manier",
		output: {F: 1},
		
	},
	{
		input: "maniera",
		output: {F: 1},
		
	},
	{
		input: "maniere",
		output: {F: 1},
		
	},
	{
		input: "manieur",
		output: {M: 1},
		
	},
	{
		input: "manif",
		output: {F: 1},
		
	},
	{
		input: "manifestant",
		output: {M: 1},
		
	},
	{
		input: "manifestation",
		output: {F: 1},
		
	},
	{
		input: "manifeste",
		output: {F: 1},
		
	},
	{
		input: "manifeste",
		output: {M: 1},
		
	},
	{
		input: "manifesté",
		output: {M: 1},
		
	},
	{
		input: "manigance",
		output: {F: 1},
		
	},
	{
		input: "manille",
		output: {F: 1},
		
	},
	{
		input: "manioc",
		output: {M: 1},
		
	},
	{
		input: "manipulateur",
		output: {M: 1},
		
	},
	{
		input: "manipulation",
		output: {F: 1},
		
	},
	{
		input: "manipule",
		output: {F: 1},
		
	},
	{
		input: "manipule",
		output: {M: 1},
		
	},
	{
		input: "manipuler",
		output: {F: 1},
		
	},
	{
		input: "manivelle",
		output: {F: 1},
		
	},
	{
		input: "manière",
		output: {F: 1},
		
	},
	{
		input: "manière",
		output: {M: 1},
		
	},
	{
		input: "manières",
		output: {F: 1},
		
	},
	{
		input: "maniére",
		output: {F: 1},
		
	},
	{
		input: "maniérisme",
		output: {M: 1},
		
	},
	{
		input: "manne",
		output: {F: 1},
		
	},
	{
		input: "mannequin",
		output: {M: 1},
		
	},
	{
		input: "mannitol",
		output: {M: 1},
		
	},
	{
		input: "mano",
		output: {F: 1},
		
	},
	{
		input: "manoeuvre",
		output: {F: 1},
		
	},
	{
		input: "manoeuvre",
		output: {M: 1},
		
	},
	{
		input: "manoir",
		output: {M: 1},
		
	},
	{
		input: "manomètre",
		output: {M: 1},
		
	},
	{
		input: "manométrie",
		output: {F: 1},
		
	},
	{
		input: "manouvrier",
		output: {M: 1},
		
	},
	{
		input: "manquant",
		output: {M: 1},
		
	},
	{
		input: "manque",
		output: {F: 1},
		
	},
	{
		input: "manque",
		output: {M: 1},
		
	},
	{
		input: "manquement",
		output: {M: 1},
		
	},
	{
		input: "mansarde",
		output: {F: 1},
		
	},
	{
		input: "manse",
		output: {M: 1},
		
	},
	{
		input: "mansuétude",
		output: {F: 1},
		
	},
	{
		input: "mante",
		output: {F: 1},
		
	},
	{
		input: "manteau",
		output: {M: 1},
		
	},
	{
		input: "mantelet",
		output: {M: 1},
		
	},
	{
		input: "mantille",
		output: {F: 1},
		
	},
	{
		input: "mantique",
		output: {F: 1},
		
	},
	{
		input: "mantisse",
		output: {F: 1},
		
	},
	{
		input: "mantra",
		output: {M: 1},
		
	},
	{
		input: "manucure",
		output: {F: 1},
		
	},
	{
		input: "manuel",
		output: {M: 1},
		
	},
	{
		input: "manufacture",
		output: {F: 1},
		
	},
	{
		input: "manufacturier",
		output: {M: 1},
		
	},
	{
		input: "manuscrit",
		output: {M: 1},
		
	},
	{
		input: "manutention",
		output: {F: 1},
		
	},
	{
		input: "manutentionnaire",
		output: {M: 1},
		
	},
	{
		input: "manège",
		output: {M: 1},
		
	},
	{
		input: "manœuvrabilité",
		output: {F: 1},
		
	},
	{
		input: "manœuvre",
		output: {F: 1},
		
	},
	{
		input: "manœuvre",
		output: {M: 1},
		
	},
	{
		input: "maoïsme",
		output: {M: 1},
		
	},
	{
		input: "mappage",
		output: {M: 1},
		
	},
	{
		input: "mappe",
		output: {F: 1},
		
	},
	{
		input: "mappemonde",
		output: {F: 1},
		
	},
	{
		input: "mapping",
		output: {M: 1},
		
	},
	{
		input: "maquereau",
		output: {M: 1},
		
	},
	{
		input: "maquerelle",
		output: {F: 1},
		
	},
	{
		input: "maquette",
		output: {F: 1},
		
	},
	{
		input: "maquettiste",
		output: {M: 1},
		
	},
	{
		input: "maquignon",
		output: {M: 1},
		
	},
	{
		input: "maquila",
		output: {F: 1},
		
	},
	{
		input: "maquillage",
		output: {M: 1},
		
	},
	{
		input: "maquilleur",
		output: {M: 1},
		
	},
	{
		input: "maquilleuse",
		output: {F: 1},
		
	},
	{
		input: "maquis",
		output: {M: 1},
		
	},
	{
		input: "maquisard",
		output: {M: 1},
		
	},
	{
		input: "mar",
		output: {F: 1},
		
	},
	{
		input: "mar",
		output: {M: 1},
		
	},
	{
		input: "marabout",
		output: {M: 1},
		
	},
	{
		input: "maraboutage",
		output: {M: 1},
		
	},
	{
		input: "maraboutisme",
		output: {M: 1},
		
	},
	{
		input: "marae",
		output: {M: 1},
		
	},
	{
		input: "marais",
		output: {M: 1},
		
	},
	{
		input: "marasme",
		output: {M: 1},
		
	},
	{
		input: "marathon",
		output: {M: 1},
		
	},
	{
		input: "marathonien",
		output: {M: 1},
		
	},
	{
		input: "maraudage",
		output: {M: 1},
		
	},
	{
		input: "maraude",
		output: {F: 1},
		
	},
	{
		input: "maraudeur",
		output: {M: 1},
		
	},
	{
		input: "maraîchage",
		output: {M: 1},
		
	},
	{
		input: "maraîcher",
		output: {M: 1},
		
	},
	{
		input: "marbre",
		output: {M: 1},
		
	},
	{
		input: "marbrerie",
		output: {F: 1},
		
	},
	{
		input: "marbrier",
		output: {M: 1},
		
	},
	{
		input: "marbrure",
		output: {F: 1},
		
	},
	{
		input: "marc",
		output: {M: 1},
		
	},
	{
		input: "marca",
		output: {F: 1},
		
	},
	{
		input: "marcassin",
		output: {M: 1},
		
	},
	{
		input: "marcha",
		output: {F: 1},
		
	},
	{
		input: "marchand",
		output: {M: 1},
		
	},
	{
		input: "marchandage",
		output: {M: 1},
		
	},
	{
		input: "marchande",
		output: {F: 1},
		
	},
	{
		input: "marchandisation",
		output: {F: 1},
		
	},
	{
		input: "marchandise",
		output: {F: 1},
		
	},
	{
		input: "marche",
		output: {F: 1},
		
	},
	{
		input: "marche",
		output: {M: 1},
		
	},
	{
		input: "marchepied",
		output: {M: 1},
		
	},
	{
		input: "marcheur",
		output: {M: 1},
		
	},
	{
		input: "marché",
		output: {F: 1},
		
	},
	{
		input: "marché",
		output: {M: 1},
		
	},
	{
		input: "marco",
		output: {M: 1},
		
	},
	{
		input: "marcottage",
		output: {M: 1},
		
	},
	{
		input: "marde",
		output: {F: 1},
		
	},
	{
		input: "mardi",
		output: {M: 1},
		
	},
	{
		input: "mardy",
		output: {M: 1},
		
	},
	{
		input: "mare",
		output: {F: 1},
		
	},
	{
		input: "mare",
		output: {M: 1},
		
	},
	{
		input: "marelle",
		output: {F: 1},
		
	},
	{
		input: "mareyage",
		output: {M: 1},
		
	},
	{
		input: "margarine",
		output: {F: 1},
		
	},
	{
		input: "marge",
		output: {F: 1},
		
	},
	{
		input: "margelle",
		output: {F: 1},
		
	},
	{
		input: "marginal",
		output: {M: 1},
		
	},
	{
		input: "marginalisation",
		output: {F: 1},
		
	},
	{
		input: "marginalisme",
		output: {M: 1},
		
	},
	{
		input: "marginalité",
		output: {F: 1},
		
	},
	{
		input: "margouillat",
		output: {M: 1},
		
	},
	{
		input: "margrave",
		output: {F: 1},
		
	},
	{
		input: "margrave",
		output: {M: 1},
		
	},
	{
		input: "marguerite",
		output: {F: 1},
		
	},
	{
		input: "marguillier",
		output: {M: 1},
		
	},
	{
		input: "mari",
		output: {F: 1},
		
	},
	{
		input: "mari",
		output: {M: 1},
		
	},
	{
		input: "maria",
		output: {F: 1},
		
	},
	{
		input: "mariage",
		output: {F: 1},
		
	},
	{
		input: "mariage",
		output: {M: 1},
		
	},
	{
		input: "mariculture",
		output: {F: 1},
		
	},
	{
		input: "marie",
		output: {F: 1},
		
	},
	{
		input: "marie",
		output: {M: 1},
		
	},
	{
		input: "marier",
		output: {F: 1},
		
	},
	{
		input: "marier",
		output: {M: 1},
		
	},
	{
		input: "marieur",
		output: {M: 1},
		
	},
	{
		input: "marieuse",
		output: {F: 1},
		
	},
	{
		input: "marigot",
		output: {M: 1},
		
	},
	{
		input: "marihuana",
		output: {F: 1},
		
	},
	{
		input: "marijuana",
		output: {F: 1},
		
	},
	{
		input: "marimba",
		output: {F: 1},
		
	},
	{
		input: "marin",
		output: {M: 1},
		
	},
	{
		input: "marina",
		output: {F: 1},
		
	},
	{
		input: "marinade",
		output: {F: 1},
		
	},
	{
		input: "marine",
		output: {F: 1},
		
	},
	{
		input: "marine",
		output: {M: 1},
		
	},
	{
		input: "marinier",
		output: {M: 1},
		
	},
	{
		input: "mariologie",
		output: {F: 1},
		
	},
	{
		input: "marionnette",
		output: {F: 1},
		
	},
	{
		input: "marionnettiste",
		output: {M: 1},
		
	},
	{
		input: "maritime",
		output: {M: 1},
		
	},
	{
		input: "maritimité",
		output: {F: 1},
		
	},
	{
		input: "marivaudage",
		output: {M: 1},
		
	},
	{
		input: "marié",
		output: {M: 1},
		
	},
	{
		input: "mariée",
		output: {F: 1},
		
	},
	{
		input: "marjolaine",
		output: {F: 1},
		
	},
	{
		input: "mark",
		output: {M: 1},
		
	},
	{
		input: "marketing",
		output: {M: 1},
		
	},
	{
		input: "marli",
		output: {M: 1},
		
	},
	{
		input: "marmaille",
		output: {F: 1},
		
	},
	{
		input: "marmelade",
		output: {F: 1},
		
	},
	{
		input: "marmite",
		output: {F: 1},
		
	},
	{
		input: "marmiton",
		output: {M: 1},
		
	},
	{
		input: "marmot",
		output: {M: 1},
		
	},
	{
		input: "marmotte",
		output: {F: 1},
		
	},
	{
		input: "marnage",
		output: {M: 1},
		
	},
	{
		input: "marne",
		output: {F: 1},
		
	},
	{
		input: "marocain",
		output: {M: 1},
		
	},
	{
		input: "marocanisation",
		output: {F: 1},
		
	},
	{
		input: "marocanité",
		output: {F: 1},
		
	},
	{
		input: "maronite",
		output: {M: 1},
		
	},
	{
		input: "maroquin",
		output: {M: 1},
		
	},
	{
		input: "maroquinerie",
		output: {F: 1},
		
	},
	{
		input: "marotte",
		output: {F: 1},
		
	},
	{
		input: "marquage",
		output: {M: 1},
		
	},
	{
		input: "marque",
		output: {F: 1},
		
	},
	{
		input: "marque",
		output: {M: 1},
		
	},
	{
		input: "marqueterie",
		output: {F: 1},
		
	},
	{
		input: "marqueur",
		output: {M: 1},
		
	},
	{
		input: "marquis",
		output: {M: 1},
		
	},
	{
		input: "marquisat",
		output: {M: 1},
		
	},
	{
		input: "marquise",
		output: {F: 1},
		
	},
	{
		input: "marraine",
		output: {F: 1},
		
	},
	{
		input: "marrane",
		output: {M: 1},
		
	},
	{
		input: "marranisme",
		output: {M: 1},
		
	},
	{
		input: "marre",
		output: {F: 1},
		
	},
	{
		input: "marron",
		output: {M: 1},
		
	},
	{
		input: "marronage",
		output: {M: 1},
		
	},
	{
		input: "marronnage",
		output: {M: 1},
		
	},
	{
		input: "marronnier",
		output: {M: 1},
		
	},
	{
		input: "mars",
		output: {M: 1},
		
	},
	{
		input: "marsouin",
		output: {M: 1},
		
	},
	{
		input: "marteau",
		output: {M: 1},
		
	},
	{
		input: "martelage",
		output: {M: 1},
		
	},
	{
		input: "martensite",
		output: {F: 1},
		
	},
	{
		input: "martien",
		output: {M: 1},
		
	},
	{
		input: "martin",
		output: {M: 1},
		
	},
	{
		input: "martinet",
		output: {M: 1},
		
	},
	{
		input: "martingale",
		output: {F: 1},
		
	},
	{
		input: "martiniquais",
		output: {M: 1},
		
	},
	{
		input: "martre",
		output: {F: 1},
		
	},
	{
		input: "martre",
		output: {M: 1},
		
	},
	{
		input: "martyr",
		output: {M: 1},
		
	},
	{
		input: "martyre",
		output: {F: 1},
		
	},
	{
		input: "martyre",
		output: {M: 1},
		
	},
	{
		input: "martyrologe",
		output: {M: 1},
		
	},
	{
		input: "martyrologie",
		output: {F: 1},
		
	},
	{
		input: "martyrologue",
		output: {M: 1},
		
	},
	{
		input: "martèlement",
		output: {M: 1},
		
	},
	{
		input: "marxisme",
		output: {M: 1},
		
	},
	{
		input: "marxismeléninisme",
		output: {M: 1},
		
	},
	{
		input: "marxiste",
		output: {M: 1},
		
	},
	{
		input: "mary",
		output: {M: 1},
		
	},
	{
		input: "marâtre",
		output: {F: 1},
		
	},
	{
		input: "marécage",
		output: {M: 1},
		
	},
	{
		input: "maréchal",
		output: {M: 1},
		
	},
	{
		input: "maréchale",
		output: {F: 1},
		
	},
	{
		input: "maréchalerie",
		output: {F: 1},
		
	},
	{
		input: "maréchalisme",
		output: {M: 1},
		
	},
	{
		input: "maréchaussée",
		output: {F: 1},
		
	},
	{
		input: "marée",
		output: {F: 1},
		
	},
	{
		input: "mas",
		output: {F: 1},
		
	},
	{
		input: "mas",
		output: {M: 1},
		
	},
	{
		input: "masa",
		output: {F: 1},
		
	},
	{
		input: "mascarade",
		output: {F: 1},
		
	},
	{
		input: "mascaret",
		output: {M: 1},
		
	},
	{
		input: "mascaron",
		output: {M: 1},
		
	},
	{
		input: "mascotte",
		output: {F: 1},
		
	},
	{
		input: "masculin",
		output: {M: 1},
		
	},
	{
		input: "masculine",
		output: {F: 1},
		
	},
	{
		input: "masculinisation",
		output: {F: 1},
		
	},
	{
		input: "masculinité",
		output: {F: 1},
		
	},
	{
		input: "masochisme",
		output: {M: 1},
		
	},
	{
		input: "masochiste",
		output: {M: 1},
		
	},
	{
		input: "masquage",
		output: {M: 1},
		
	},
	{
		input: "masque",
		output: {F: 1},
		
	},
	{
		input: "masque",
		output: {M: 1},
		
	},
	{
		input: "massa",
		output: {F: 1},
		
	},
	{
		input: "massacre",
		output: {M: 1},
		
	},
	{
		input: "massacreur",
		output: {M: 1},
		
	},
	{
		input: "massage",
		output: {M: 1},
		
	},
	{
		input: "masse",
		output: {F: 1},
		
	},
	{
		input: "masse",
		output: {M: 1},
		
	},
	{
		input: "massette",
		output: {F: 1},
		
	},
	{
		input: "masseur",
		output: {M: 1},
		
	},
	{
		input: "masseuse",
		output: {F: 1},
		
	},
	{
		input: "massif",
		output: {M: 1},
		
	},
	{
		input: "massification",
		output: {F: 1},
		
	},
	{
		input: "massivité",
		output: {F: 1},
		
	},
	{
		input: "massue",
		output: {F: 1},
		
	},
	{
		input: "mastaba",
		output: {M: 1},
		
	},
	{
		input: "mastectomie",
		output: {F: 1},
		
	},
	{
		input: "master",
		output: {M: 1},
		
	},
	{
		input: "mastic",
		output: {M: 1},
		
	},
	{
		input: "mastication",
		output: {F: 1},
		
	},
	{
		input: "mastodonte",
		output: {M: 1},
		
	},
	{
		input: "mastoïde",
		output: {F: 1},
		
	},
	{
		input: "masturbation",
		output: {F: 1},
		
	},
	{
		input: "mastère",
		output: {M: 1},
		
	},
	{
		input: "masure",
		output: {F: 1},
		
	},
	{
		input: "mat",
		output: {M: 1},
		
	},
	{
		input: "matador",
		output: {M: 1},
		
	},
	{
		input: "matamore",
		output: {M: 1},
		
	},
	{
		input: "match",
		output: {M: 1},
		
	},
	{
		input: "matelas",
		output: {M: 1},
		
	},
	{
		input: "matelot",
		output: {M: 1},
		
	},
	{
		input: "matelote",
		output: {F: 1},
		
	},
	{
		input: "matemité",
		output: {F: 1},
		
	},
	{
		input: "mater",
		output: {F: 1},
		
	},
	{
		input: "materia",
		output: {F: 1},
		
	},
	{
		input: "materiel",
		output: {M: 1},
		
	},
	{
		input: "maternage",
		output: {M: 1},
		
	},
	{
		input: "maternel",
		output: {M: 1},
		
	},
	{
		input: "maternelle",
		output: {F: 1},
		
	},
	{
		input: "maternité",
		output: {F: 1},
		
	},
	{
		input: "mathesis",
		output: {F: 1},
		
	},
	{
		input: "mathème",
		output: {M: 1},
		
	},
	{
		input: "mathématicien",
		output: {M: 1},
		
	},
	{
		input: "mathématicienne",
		output: {F: 1},
		
	},
	{
		input: "mathématique",
		output: {F: 1},
		
	},
	{
		input: "mathématique",
		output: {M: 1},
		
	},
	{
		input: "mathématisation",
		output: {F: 1},
		
	},
	{
		input: "mathématisme",
		output: {M: 1},
		
	},
	{
		input: "mati",
		output: {F: 1},
		
	},
	{
		input: "matiere",
		output: {F: 1},
		
	},
	{
		input: "matin",
		output: {M: 1},
		
	},
	{
		input: "matinée",
		output: {F: 1},
		
	},
	{
		input: "matité",
		output: {F: 1},
		
	},
	{
		input: "matière",
		output: {F: 1},
		
	},
	{
		input: "matiére",
		output: {F: 1},
		
	},
	{
		input: "maton",
		output: {M: 1},
		
	},
	{
		input: "matou",
		output: {M: 1},
		
	},
	{
		input: "matraquage",
		output: {M: 1},
		
	},
	{
		input: "matraque",
		output: {F: 1},
		
	},
	{
		input: "matriarcat",
		output: {M: 1},
		
	},
	{
		input: "matriarche",
		output: {F: 1},
		
	},
	{
		input: "matrice",
		output: {F: 1},
		
	},
	{
		input: "matricide",
		output: {M: 1},
		
	},
	{
		input: "matricule",
		output: {F: 1},
		
	},
	{
		input: "matricule",
		output: {M: 1},
		
	},
	{
		input: "matrifocalité",
		output: {F: 1},
		
	},
	{
		input: "matrilignage",
		output: {M: 1},
		
	},
	{
		input: "matrilinéarité",
		output: {F: 1},
		
	},
	{
		input: "matrilocalité",
		output: {F: 1},
		
	},
	{
		input: "matrone",
		output: {F: 1},
		
	},
	{
		input: "matte",
		output: {F: 1},
		
	},
	{
		input: "maturation",
		output: {F: 1},
		
	},
	{
		input: "maturité",
		output: {F: 1},
		
	},
	{
		input: "maté",
		output: {M: 1},
		
	},
	{
		input: "matérialisation",
		output: {F: 1},
		
	},
	{
		input: "matérialisme",
		output: {M: 1},
		
	},
	{
		input: "matérialiste",
		output: {M: 1},
		
	},
	{
		input: "matérialité",
		output: {F: 1},
		
	},
	{
		input: "matériau",
		output: {M: 1},
		
	},
	{
		input: "matériel",
		output: {M: 1},
		
	},
	{
		input: "matérielle",
		output: {F: 1},
		
	},
	{
		input: "maudire",
		output: {F: 1},
		
	},
	{
		input: "maudit",
		output: {M: 1},
		
	},
	{
		input: "maudite",
		output: {F: 1},
		
	},
	{
		input: "maure",
		output: {M: 1},
		
	},
	{
		input: "mauresque",
		output: {F: 1},
		
	},
	{
		input: "mauricien",
		output: {M: 1},
		
	},
	{
		input: "maurrassisme",
		output: {M: 1},
		
	},
	{
		input: "mausolée",
		output: {M: 1},
		
	},
	{
		input: "mauve",
		output: {F: 1},
		
	},
	{
		input: "mauve",
		output: {M: 1},
		
	},
	{
		input: "mauviette",
		output: {F: 1},
		
	},
	{
		input: "max",
		output: {M: 1},
		
	},
	{
		input: "maxi",
		output: {M: 1},
		
	},
	{
		input: "maxillaire",
		output: {M: 1},
		
	},
	{
		input: "maximalisation",
		output: {F: 1},
		
	},
	{
		input: "maximalisme",
		output: {M: 1},
		
	},
	{
		input: "maximation",
		output: {F: 1},
		
	},
	{
		input: "maxime",
		output: {F: 1},
		
	},
	{
		input: "maximisation",
		output: {F: 1},
		
	},
	{
		input: "maximum",
		output: {M: 1},
		
	},
	{
		input: "maximun",
		output: {M: 1},
		
	},
	{
		input: "maya",
		output: {F: 1},
		
	},
	{
		input: "mayeur",
		output: {M: 1},
		
	},
	{
		input: "mayonnaise",
		output: {F: 1},
		
	},
	{
		input: "mayor",
		output: {F: 1},
		
	},
	{
		input: "mayor",
		output: {M: 1},
		
	},
	{
		input: "mayoria",
		output: {F: 1},
		
	},
	{
		input: "mayoría",
		output: {F: 1},
		
	},
	{
		input: "mazdéisme",
		output: {M: 1},
		
	},
	{
		input: "mazout",
		output: {M: 1},
		
	},
	{
		input: "mazurka",
		output: {F: 1},
		
	},
	{
		input: "maçon",
		output: {M: 1},
		
	},
	{
		input: "maçonnerie",
		output: {F: 1},
		
	},
	{
		input: "maître",
		output: {F: 1},
		
	},
	{
		input: "maître",
		output: {M: 1},
		
	},
	{
		input: "maîtreautel",
		output: {M: 1},
		
	},
	{
		input: "maîtresse",
		output: {F: 1},
		
	},
	{
		input: "maîtrise",
		output: {F: 1},
		
	},
	{
		input: "maîtrise",
		output: {M: 1},
		
	},
	{
		input: "maîtriser",
		output: {F: 1},
		
	},
	{
		input: "maïeutique",
		output: {F: 1},
		
	},
	{
		input: "maïs",
		output: {M: 1},
		
	},
	{
		input: "mañana",
		output: {F: 1},
		
	},
	{
		input: "me",
		output: {F: 1},
		
	},
	{
		input: "me",
		output: {M: 1},
		
	},
	{
		input: "mec",
		output: {M: 1},
		
	},
	{
		input: "mecanisme",
		output: {M: 1},
		
	},
	{
		input: "mechta",
		output: {F: 1},
		
	},
	{
		input: "medecin",
		output: {M: 1},
		
	},
	{
		input: "medecine",
		output: {F: 1},
		
	},
	{
		input: "medersa",
		output: {F: 1},
		
	},
	{
		input: "media",
		output: {M: 1},
		
	},
	{
		input: "medicina",
		output: {F: 1},
		
	},
	{
		input: "medida",
		output: {F: 1},
		
	},
	{
		input: "medium",
		output: {M: 1},
		
	},
	{
		input: "meeting",
		output: {M: 1},
		
	},
	{
		input: "mejor",
		output: {F: 1},
		
	},
	{
		input: "mejora",
		output: {F: 1},
		
	},
	{
		input: "melange",
		output: {M: 1},
		
	},
	{
		input: "mellah",
		output: {M: 1},
		
	},
	{
		input: "melon",
		output: {M: 1},
		
	},
	{
		input: "melting",
		output: {M: 1},
		
	},
	{
		input: "membership",
		output: {M: 1},
		
	},
	{
		input: "membrane",
		output: {F: 1},
		
	},
	{
		input: "membre",
		output: {F: 1},
		
	},
	{
		input: "membre",
		output: {M: 1},
		
	},
	{
		input: "membres",
		output: {M: 1},
		
	},
	{
		input: "membrure",
		output: {F: 1},
		
	},
	{
		input: "meme",
		output: {F: 1},
		
	},
	{
		input: "meme",
		output: {M: 1},
		
	},
	{
		input: "memento",
		output: {M: 1},
		
	},
	{
		input: "memoire",
		output: {F: 1},
		
	},
	{
		input: "memoire",
		output: {M: 1},
		
	},
	{
		input: "memorandum",
		output: {M: 1},
		
	},
	{
		input: "memoria",
		output: {F: 1},
		
	},
	{
		input: "mena",
		output: {F: 1},
		
	},
	{
		input: "mena",
		output: {M: 1},
		
	},
	{
		input: "menace",
		output: {F: 1},
		
	},
	{
		input: "menace",
		output: {M: 1},
		
	},
	{
		input: "mendiant",
		output: {M: 1},
		
	},
	{
		input: "mendiante",
		output: {F: 1},
		
	},
	{
		input: "mendicité",
		output: {F: 1},
		
	},
	{
		input: "mendésisme",
		output: {M: 1},
		
	},
	{
		input: "meneau",
		output: {M: 1},
		
	},
	{
		input: "meneur",
		output: {M: 1},
		
	},
	{
		input: "meneuse",
		output: {F: 1},
		
	},
	{
		input: "menhir",
		output: {M: 1},
		
	},
	{
		input: "menotte",
		output: {F: 1},
		
	},
	{
		input: "mens",
		output: {F: 1},
		
	},
	{
		input: "mensa",
		output: {F: 1},
		
	},
	{
		input: "mense",
		output: {F: 1},
		
	},
	{
		input: "mensonge",
		output: {M: 1},
		
	},
	{
		input: "menstruation",
		output: {F: 1},
		
	},
	{
		input: "mensualisation",
		output: {F: 1},
		
	},
	{
		input: "mensualité",
		output: {F: 1},
		
	},
	{
		input: "mensuel",
		output: {M: 1},
		
	},
	{
		input: "mensuration",
		output: {F: 1},
		
	},
	{
		input: "ment",
		output: {F: 1},
		
	},
	{
		input: "ment",
		output: {M: 1},
		
	},
	{
		input: "mental",
		output: {M: 1},
		
	},
	{
		input: "mentalisation",
		output: {F: 1},
		
	},
	{
		input: "mentalisme",
		output: {M: 1},
		
	},
	{
		input: "mentalité",
		output: {F: 1},
		
	},
	{
		input: "mente",
		output: {F: 1},
		
	},
	{
		input: "menteur",
		output: {M: 1},
		
	},
	{
		input: "menteuse",
		output: {F: 1},
		
	},
	{
		input: "menthe",
		output: {F: 1},
		
	},
	{
		input: "mention",
		output: {F: 1},
		
	},
	{
		input: "mentionne",
		output: {F: 1},
		
	},
	{
		input: "menton",
		output: {M: 1},
		
	},
	{
		input: "mentonnière",
		output: {F: 1},
		
	},
	{
		input: "mentor",
		output: {M: 1},
		
	},
	{
		input: "mentorat",
		output: {M: 1},
		
	},
	{
		input: "menu",
		output: {M: 1},
		
	},
	{
		input: "menuet",
		output: {M: 1},
		
	},
	{
		input: "menuiserie",
		output: {F: 1},
		
	},
	{
		input: "menuisier",
		output: {M: 1},
		
	},
	{
		input: "mer",
		output: {F: 1},
		
	},
	{
		input: "mer",
		output: {M: 1},
		
	},
	{
		input: "mercantilisation",
		output: {F: 1},
		
	},
	{
		input: "mercantilisme",
		output: {M: 1},
		
	},
	{
		input: "mercatique",
		output: {F: 1},
		
	},
	{
		input: "mercenaire",
		output: {M: 1},
		
	},
	{
		input: "mercenariat",
		output: {M: 1},
		
	},
	{
		input: "mercerie",
		output: {F: 1},
		
	},
	{
		input: "merchandising",
		output: {M: 1},
		
	},
	{
		input: "merci",
		output: {F: 1},
		
	},
	{
		input: "merci",
		output: {M: 1},
		
	},
	{
		input: "mercier",
		output: {M: 1},
		
	},
	{
		input: "mercière",
		output: {F: 1},
		
	},
	{
		input: "mercredi",
		output: {M: 1},
		
	},
	{
		input: "mercredy",
		output: {M: 1},
		
	},
	{
		input: "mercure",
		output: {M: 1},
		
	},
	{
		input: "mercuriale",
		output: {F: 1},
		
	},
	{
		input: "merde",
		output: {F: 1},
		
	},
	{
		input: "merdier",
		output: {M: 1},
		
	},
	{
		input: "mere",
		output: {F: 1},
		
	},
	{
		input: "meringue",
		output: {F: 1},
		
	},
	{
		input: "merisier",
		output: {M: 1},
		
	},
	{
		input: "merite",
		output: {M: 1},
		
	},
	{
		input: "merlan",
		output: {M: 1},
		
	},
	{
		input: "merle",
		output: {M: 1},
		
	},
	{
		input: "merlu",
		output: {M: 1},
		
	},
	{
		input: "merrain",
		output: {M: 1},
		
	},
	{
		input: "merveille",
		output: {F: 1},
		
	},
	{
		input: "merveilleuse",
		output: {F: 1},
		
	},
	{
		input: "merveilleux",
		output: {M: 1},
		
	},
	{
		input: "mes",
		output: {F: 1},
		
	},
	{
		input: "mes",
		output: {M: 1},
		
	},
	{
		input: "mesa",
		output: {F: 1},
		
	},
	{
		input: "mescaline",
		output: {F: 1},
		
	},
	{
		input: "meseta",
		output: {F: 1},
		
	},
	{
		input: "mesme",
		output: {F: 1},
		
	},
	{
		input: "mesme",
		output: {M: 1},
		
	},
	{
		input: "mesmérisme",
		output: {M: 1},
		
	},
	{
		input: "mesnie",
		output: {F: 1},
		
	},
	{
		input: "mesquinerie",
		output: {F: 1},
		
	},
	{
		input: "mess",
		output: {M: 1},
		
	},
	{
		input: "message",
		output: {M: 1},
		
	},
	{
		input: "messager",
		output: {M: 1},
		
	},
	{
		input: "messagerie",
		output: {F: 1},
		
	},
	{
		input: "messagère",
		output: {F: 1},
		
	},
	{
		input: "messe",
		output: {F: 1},
		
	},
	{
		input: "messianisme",
		output: {M: 1},
		
	},
	{
		input: "messianité",
		output: {F: 1},
		
	},
	{
		input: "messie",
		output: {M: 1},
		
	},
	{
		input: "mestier",
		output: {M: 1},
		
	},
	{
		input: "mestre",
		output: {M: 1},
		
	},
	{
		input: "mesurabilité",
		output: {F: 1},
		
	},
	{
		input: "mesurage",
		output: {M: 1},
		
	},
	{
		input: "mesure",
		output: {F: 1},
		
	},
	{
		input: "mesure",
		output: {M: 1},
		
	},
	{
		input: "mesureur",
		output: {M: 1},
		
	},
	{
		input: "meta",
		output: {F: 1},
		
	},
	{
		input: "metanoia",
		output: {F: 1},
		
	},
	{
		input: "methode",
		output: {F: 1},
		
	},
	{
		input: "metrópoli",
		output: {F: 1},
		
	},
	{
		input: "mets",
		output: {F: 1},
		
	},
	{
		input: "mets",
		output: {M: 1},
		
	},
	{
		input: "metteur",
		output: {M: 1},
		
	},
	{
		input: "metáfora",
		output: {F: 1},
		
	},
	{
		input: "meuble",
		output: {M: 1},
		
	},
	{
		input: "meublé",
		output: {M: 1},
		
	},
	{
		input: "meuf",
		output: {F: 1},
		
	},
	{
		input: "meuglement",
		output: {M: 1},
		
	},
	{
		input: "meulage",
		output: {M: 1},
		
	},
	{
		input: "meule",
		output: {F: 1},
		
	},
	{
		input: "meulière",
		output: {F: 1},
		
	},
	{
		input: "meunerie",
		output: {F: 1},
		
	},
	{
		input: "meunier",
		output: {M: 1},
		
	},
	{
		input: "meurtre",
		output: {M: 1},
		
	},
	{
		input: "meurtrier",
		output: {M: 1},
		
	},
	{
		input: "meurtrissure",
		output: {F: 1},
		
	},
	{
		input: "meute",
		output: {F: 1},
		
	},
	{
		input: "mexicanité",
		output: {F: 1},
		
	},
	{
		input: "mezcla",
		output: {F: 1},
		
	},
	{
		input: "mezzanine",
		output: {F: 1},
		
	},
	{
		input: "mi",
		output: {F: 1},
		
	},
	{
		input: "mi",
		output: {M: 1},
		
	},
	{
		input: "mia",
		output: {F: 1},
		
	},
	{
		input: "miaoût",
		output: {F: 1},
		
	},
	{
		input: "miasme",
		output: {M: 1},
		
	},
	{
		input: "miaulement",
		output: {M: 1},
		
	},
	{
		input: "miavril",
		output: {F: 1},
		
	},
	{
		input: "mica",
		output: {M: 1},
		
	},
	{
		input: "miche",
		output: {F: 1},
		
	},
	{
		input: "micheline",
		output: {F: 1},
		
	},
	{
		input: "micrite",
		output: {F: 1},
		
	},
	{
		input: "micro",
		output: {F: 1},
		
	},
	{
		input: "micro",
		output: {M: 1},
		
	},
	{
		input: "microanalyse",
		output: {F: 1},
		
	},
	{
		input: "microangiopathie",
		output: {F: 1},
		
	},
	{
		input: "microbe",
		output: {M: 1},
		
	},
	{
		input: "microbiologie",
		output: {F: 1},
		
	},
	{
		input: "microbiologiste",
		output: {M: 1},
		
	},
	{
		input: "microchirurgie",
		output: {F: 1},
		
	},
	{
		input: "microcirculation",
		output: {F: 1},
		
	},
	{
		input: "microclimat",
		output: {M: 1},
		
	},
	{
		input: "microcosme",
		output: {M: 1},
		
	},
	{
		input: "microcrédit",
		output: {M: 1},
		
	},
	{
		input: "microculture",
		output: {F: 1},
		
	},
	{
		input: "microcéphalie",
		output: {F: 1},
		
	},
	{
		input: "microdureté",
		output: {F: 1},
		
	},
	{
		input: "microentreprise",
		output: {F: 1},
		
	},
	{
		input: "microfaune",
		output: {F: 1},
		
	},
	{
		input: "microfiche",
		output: {F: 1},
		
	},
	{
		input: "microfilm",
		output: {M: 1},
		
	},
	{
		input: "microfilmage",
		output: {M: 1},
		
	},
	{
		input: "microfinance",
		output: {F: 1},
		
	},
	{
		input: "microfissuration",
		output: {F: 1},
		
	},
	{
		input: "microflore",
		output: {F: 1},
		
	},
	{
		input: "microglie",
		output: {F: 1},
		
	},
	{
		input: "micrographie",
		output: {F: 1},
		
	},
	{
		input: "microgravité",
		output: {F: 1},
		
	},
	{
		input: "microhistoire",
		output: {F: 1},
		
	},
	{
		input: "microinformatique",
		output: {F: 1},
		
	},
	{
		input: "micromorphologie",
		output: {F: 1},
		
	},
	{
		input: "micromètre",
		output: {M: 1},
		
	},
	{
		input: "micron",
		output: {M: 1},
		
	},
	{
		input: "microordinateur",
		output: {M: 1},
		
	},
	{
		input: "microorganisme",
		output: {M: 1},
		
	},
	{
		input: "microphone",
		output: {M: 1},
		
	},
	{
		input: "microphotographie",
		output: {F: 1},
		
	},
	{
		input: "microphysique",
		output: {F: 1},
		
	},
	{
		input: "micropipette",
		output: {F: 1},
		
	},
	{
		input: "micropolitique",
		output: {F: 1},
		
	},
	{
		input: "microporosité",
		output: {F: 1},
		
	},
	{
		input: "microprocesseur",
		output: {M: 1},
		
	},
	{
		input: "micropropagation",
		output: {F: 1},
		
	},
	{
		input: "microrégion",
		output: {F: 1},
		
	},
	{
		input: "microscope",
		output: {M: 1},
		
	},
	{
		input: "microscopie",
		output: {F: 1},
		
	},
	{
		input: "microscopique",
		output: {M: 1},
		
	},
	{
		input: "microseconde",
		output: {F: 1},
		
	},
	{
		input: "microsillon",
		output: {M: 1},
		
	},
	{
		input: "microsociologie",
		output: {F: 1},
		
	},
	{
		input: "microsociété",
		output: {F: 1},
		
	},
	{
		input: "microsonde",
		output: {F: 1},
		
	},
	{
		input: "microstoria",
		output: {F: 1},
		
	},
	{
		input: "microstructure",
		output: {F: 1},
		
	},
	{
		input: "microsystème",
		output: {M: 1},
		
	},
	{
		input: "microtopographie",
		output: {F: 1},
		
	},
	{
		input: "microtoponymie",
		output: {F: 1},
		
	},
	{
		input: "microéconomie",
		output: {F: 1},
		
	},
	{
		input: "microélectronique",
		output: {F: 1},
		
	},
	{
		input: "miction",
		output: {F: 1},
		
	},
	{
		input: "midi",
		output: {M: 1},
		
	},
	{
		input: "midinette",
		output: {F: 1},
		
	},
	{
		input: "midrach",
		output: {M: 1},
		
	},
	{
		input: "midrash",
		output: {M: 1},
		
	},
	{
		input: "midécembre",
		output: {F: 1},
		
	},
	{
		input: "mie",
		output: {F: 1},
		
	},
	{
		input: "mie",
		output: {M: 1},
		
	},
	{
		input: "miel",
		output: {M: 1},
		
	},
	{
		input: "miellat",
		output: {M: 1},
		
	},
	{
		input: "miellée",
		output: {F: 1},
		
	},
	{
		input: "mien",
		output: {M: 1},
		
	},
	{
		input: "mienne",
		output: {F: 1},
		
	},
	{
		input: "mienneté",
		output: {F: 1},
		
	},
	{
		input: "miette",
		output: {F: 1},
		
	},
	{
		input: "mieux",
		output: {M: 1},
		
	},
	{
		input: "mieuxêtre",
		output: {M: 1},
		
	},
	{
		input: "mifévrier",
		output: {F: 1},
		
	},
	{
		input: "mignon",
		output: {M: 1},
		
	},
	{
		input: "mignonne",
		output: {F: 1},
		
	},
	{
		input: "migración",
		output: {F: 1},
		
	},
	{
		input: "migraine",
		output: {F: 1},
		
	},
	{
		input: "migrant",
		output: {M: 1},
		
	},
	{
		input: "migration",
		output: {F: 1},
		
	},
	{
		input: "mihrab",
		output: {M: 1},
		
	},
	{
		input: "mijanvier",
		output: {F: 1},
		
	},
	{
		input: "mijuillet",
		output: {F: 1},
		
	},
	{
		input: "mijuin",
		output: {F: 1},
		
	},
	{
		input: "mil",
		output: {M: 1},
		
	},
	{
		input: "milan",
		output: {M: 1},
		
	},
	{
		input: "mildiou",
		output: {M: 1},
		
	},
	{
		input: "mile",
		output: {M: 1},
		
	},
	{
		input: "miles",
		output: {M: 1},
		
	},
	{
		input: "milice",
		output: {F: 1},
		
	},
	{
		input: "milicien",
		output: {M: 1},
		
	},
	{
		input: "milieu",
		output: {M: 1},
		
	},
	{
		input: "milieux",
		output: {M: 1},
		
	},
	{
		input: "militance",
		output: {F: 1},
		
	},
	{
		input: "militant",
		output: {M: 1},
		
	},
	{
		input: "militante",
		output: {F: 1},
		
	},
	{
		input: "militantisme",
		output: {M: 1},
		
	},
	{
		input: "militarisation",
		output: {F: 1},
		
	},
	{
		input: "militarisme",
		output: {M: 1},
		
	},
	{
		input: "militia",
		output: {F: 1},
		
	},
	{
		input: "millefeuille",
		output: {M: 1},
		
	},
	{
		input: "millenium",
		output: {M: 1},
		
	},
	{
		input: "millepertuis",
		output: {M: 1},
		
	},
	{
		input: "millet",
		output: {M: 1},
		
	},
	{
		input: "milliaire",
		output: {M: 1},
		
	},
	{
		input: "milliard",
		output: {M: 1},
		
	},
	{
		input: "milliardaire",
		output: {M: 1},
		
	},
	{
		input: "milliardième",
		output: {M: 1},
		
	},
	{
		input: "millier",
		output: {M: 1},
		
	},
	{
		input: "milligramme",
		output: {M: 1},
		
	},
	{
		input: "millimètre",
		output: {M: 1},
		
	},
	{
		input: "million",
		output: {M: 1},
		
	},
	{
		input: "millionième",
		output: {M: 1},
		
	},
	{
		input: "millionnaire",
		output: {M: 1},
		
	},
	{
		input: "millions",
		output: {M: 1},
		
	},
	{
		input: "milliseconde",
		output: {F: 1},
		
	},
	{
		input: "millième",
		output: {M: 1},
		
	},
	{
		input: "millénaire",
		output: {M: 1},
		
	},
	{
		input: "millénarisme",
		output: {M: 1},
		
	},
	{
		input: "millénium",
		output: {M: 1},
		
	},
	{
		input: "millésime",
		output: {M: 1},
		
	},
	{
		input: "milonga",
		output: {F: 1},
		
	},
	{
		input: "milpa",
		output: {F: 1},
		
	},
	{
		input: "mimars",
		output: {F: 1},
		
	},
	{
		input: "mime",
		output: {F: 1},
		
	},
	{
		input: "mime",
		output: {M: 1},
		
	},
	{
		input: "mimesis",
		output: {F: 1},
		
	},
	{
		input: "mimique",
		output: {F: 1},
		
	},
	{
		input: "mimodrame",
		output: {M: 1},
		
	},
	{
		input: "mimosa",
		output: {M: 1},
		
	},
	{
		input: "mimèsis",
		output: {F: 1},
		
	},
	{
		input: "mimésis",
		output: {F: 1},
		
	},
	{
		input: "mimétique",
		output: {F: 1},
		
	},
	{
		input: "mimétisme",
		output: {M: 1},
		
	},
	{
		input: "mimêsis",
		output: {F: 1},
		
	},
	{
		input: "min",
		output: {F: 1},
		
	},
	{
		input: "min",
		output: {M: 1},
		
	},
	{
		input: "mina",
		output: {F: 1},
		
	},
	{
		input: "minable",
		output: {M: 1},
		
	},
	{
		input: "minage",
		output: {M: 1},
		
	},
	{
		input: "minaret",
		output: {M: 1},
		
	},
	{
		input: "minbar",
		output: {M: 1},
		
	},
	{
		input: "mince",
		output: {F: 1},
		
	},
	{
		input: "mince",
		output: {M: 1},
		
	},
	{
		input: "minceur",
		output: {F: 1},
		
	},
	{
		input: "mine",
		output: {F: 1},
		
	},
	{
		input: "mine",
		output: {M: 1},
		
	},
	{
		input: "minerai",
		output: {M: 1},
		
	},
	{
		input: "minerval",
		output: {M: 1},
		
	},
	{
		input: "minerve",
		output: {F: 1},
		
	},
	{
		input: "minette",
		output: {F: 1},
		
	},
	{
		input: "mineur",
		output: {F: 1},
		
	},
	{
		input: "mineur",
		output: {M: 1},
		
	},
	{
		input: "mineure",
		output: {F: 1},
		
	},
	{
		input: "mineuse",
		output: {F: 1},
		
	},
	{
		input: "miniature",
		output: {F: 1},
		
	},
	{
		input: "miniaturisation",
		output: {F: 1},
		
	},
	{
		input: "miniaturiste",
		output: {M: 1},
		
	},
	{
		input: "minibus",
		output: {M: 1},
		
	},
	{
		input: "minijupe",
		output: {F: 1},
		
	},
	{
		input: "minimalisation",
		output: {F: 1},
		
	},
	{
		input: "minimalisme",
		output: {M: 1},
		
	},
	{
		input: "minimex",
		output: {M: 1},
		
	},
	{
		input: "minimisation",
		output: {F: 1},
		
	},
	{
		input: "minimum",
		output: {M: 1},
		
	},
	{
		input: "minimun",
		output: {M: 1},
		
	},
	{
		input: "minis",
		output: {M: 1},
		
	},
	{
		input: "minisire",
		output: {M: 1},
		
	},
	{
		input: "minist",
		output: {M: 1},
		
	},
	{
		input: "ministere",
		output: {M: 1},
		
	},
	{
		input: "ministre",
		output: {F: 1},
		
	},
	{
		input: "ministre",
		output: {M: 1},
		
	},
	{
		input: "ministère",
		output: {M: 1},
		
	},
	{
		input: "ministérialité",
		output: {F: 1},
		
	},
	{
		input: "ministériat",
		output: {M: 1},
		
	},
	{
		input: "minitel",
		output: {M: 1},
		
	},
	{
		input: "minium",
		output: {M: 1},
		
	},
	{
		input: "minière",
		output: {F: 1},
		
	},
	{
		input: "minois",
		output: {M: 1},
		
	},
	{
		input: "minoration",
		output: {F: 1},
		
	},
	{
		input: "minorisation",
		output: {F: 1},
		
	},
	{
		input: "minoritaire",
		output: {M: 1},
		
	},
	{
		input: "minorité",
		output: {F: 1},
		
	},
	{
		input: "minot",
		output: {M: 1},
		
	},
	{
		input: "minotaure",
		output: {M: 1},
		
	},
	{
		input: "minoterie",
		output: {F: 1},
		
	},
	{
		input: "minotier",
		output: {M: 1},
		
	},
	{
		input: "minovembre",
		output: {F: 1},
		
	},
	{
		input: "minuit",
		output: {F: 1},
		
	},
	{
		input: "minuit",
		output: {M: 1},
		
	},
	{
		input: "minuscule",
		output: {F: 1},
		
	},
	{
		input: "minuscule",
		output: {M: 1},
		
	},
	{
		input: "minutage",
		output: {M: 1},
		
	},
	{
		input: "minute",
		output: {F: 1},
		
	},
	{
		input: "minuterie",
		output: {F: 1},
		
	},
	{
		input: "minutie",
		output: {F: 1},
		
	},
	{
		input: "minutier",
		output: {M: 1},
		
	},
	{
		input: "minutieux",
		output: {M: 1},
		
	},
	{
		input: "minéral",
		output: {M: 1},
		
	},
	{
		input: "minéralisation",
		output: {F: 1},
		
	},
	{
		input: "minéralité",
		output: {F: 1},
		
	},
	{
		input: "minéralogie",
		output: {F: 1},
		
	},
	{
		input: "minéralogiste",
		output: {M: 1},
		
	},
	{
		input: "mioche",
		output: {M: 1},
		
	},
	{
		input: "mioctobre",
		output: {F: 1},
		
	},
	{
		input: "mir",
		output: {M: 1},
		
	},
	{
		input: "mirabelle",
		output: {F: 1},
		
	},
	{
		input: "miracle",
		output: {M: 1},
		
	},
	{
		input: "miraculeux",
		output: {M: 1},
		
	},
	{
		input: "miraculé",
		output: {M: 1},
		
	},
	{
		input: "miraculée",
		output: {F: 1},
		
	},
	{
		input: "mirada",
		output: {F: 1},
		
	},
	{
		input: "mirador",
		output: {M: 1},
		
	},
	{
		input: "mirage",
		output: {M: 1},
		
	},
	{
		input: "mire",
		output: {F: 1},
		
	},
	{
		input: "mirent",
		output: {F: 1},
		
	},
	{
		input: "mirent",
		output: {M: 1},
		
	},
	{
		input: "mirliton",
		output: {M: 1},
		
	},
	{
		input: "miroir",
		output: {M: 1},
		
	},
	{
		input: "miroitement",
		output: {M: 1},
		
	},
	{
		input: "misa",
		output: {F: 1},
		
	},
	{
		input: "misaine",
		output: {F: 1},
		
	},
	{
		input: "misanthrope",
		output: {M: 1},
		
	},
	{
		input: "misanthropie",
		output: {F: 1},
		
	},
	{
		input: "miscégénation",
		output: {F: 1},
		
	},
	{
		input: "mise",
		output: {F: 1},
		
	},
	{
		input: "mise",
		output: {M: 1},
		
	},
	{
		input: "miseptembre",
		output: {F: 1},
		
	},
	{
		input: "misere",
		output: {F: 1},
		
	},
	{
		input: "miseria",
		output: {F: 1},
		
	},
	{
		input: "misericorde",
		output: {F: 1},
		
	},
	{
		input: "misión",
		output: {F: 1},
		
	},
	{
		input: "misma",
		output: {F: 1},
		
	},
	{
		input: "misogyne",
		output: {M: 1},
		
	},
	{
		input: "misogynie",
		output: {F: 1},
		
	},
	{
		input: "misologie",
		output: {F: 1},
		
	},
	{
		input: "miss",
		output: {F: 1},
		
	},
	{
		input: "missel",
		output: {M: 1},
		
	},
	{
		input: "missile",
		output: {M: 1},
		
	},
	{
		input: "missiologie",
		output: {F: 1},
		
	},
	{
		input: "mission",
		output: {F: 1},
		
	},
	{
		input: "missionnaire",
		output: {F: 1},
		
	},
	{
		input: "missionnaire",
		output: {M: 1},
		
	},
	{
		input: "missive",
		output: {F: 1},
		
	},
	{
		input: "mistral",
		output: {M: 1},
		
	},
	{
		input: "misère",
		output: {F: 1},
		
	},
	{
		input: "misérabilisme",
		output: {M: 1},
		
	},
	{
		input: "misérable",
		output: {F: 1},
		
	},
	{
		input: "misérable",
		output: {M: 1},
		
	},
	{
		input: "miséreux",
		output: {M: 1},
		
	},
	{
		input: "miséricorde",
		output: {F: 1},
		
	},
	{
		input: "miséricordieux",
		output: {M: 1},
		
	},
	{
		input: "mit",
		output: {F: 1},
		
	},
	{
		input: "mit",
		output: {M: 1},
		
	},
	{
		input: "mita",
		output: {F: 1},
		
	},
	{
		input: "mitad",
		output: {F: 1},
		
	},
	{
		input: "mitage",
		output: {M: 1},
		
	},
	{
		input: "mitan",
		output: {M: 1},
		
	},
	{
		input: "mite",
		output: {F: 1},
		
	},
	{
		input: "mitigation",
		output: {F: 1},
		
	},
	{
		input: "mito",
		output: {M: 1},
		
	},
	{
		input: "mitochondrie",
		output: {F: 1},
		
	},
	{
		input: "mitose",
		output: {F: 1},
		
	},
	{
		input: "mitoyenneté",
		output: {F: 1},
		
	},
	{
		input: "mitraillage",
		output: {M: 1},
		
	},
	{
		input: "mitraille",
		output: {F: 1},
		
	},
	{
		input: "mitraillette",
		output: {F: 1},
		
	},
	{
		input: "mitrailleur",
		output: {M: 1},
		
	},
	{
		input: "mitrailleuse",
		output: {F: 1},
		
	},
	{
		input: "mitre",
		output: {F: 1},
		
	},
	{
		input: "mitron",
		output: {M: 1},
		
	},
	{
		input: "mitsva",
		output: {F: 1},
		
	},
	{
		input: "mitterrandisme",
		output: {M: 1},
		
	},
	{
		input: "mix",
		output: {M: 1},
		
	},
	{
		input: "mixage",
		output: {M: 1},
		
	},
	{
		input: "mixeur",
		output: {M: 1},
		
	},
	{
		input: "mixité",
		output: {F: 1},
		
	},
	{
		input: "mixtion",
		output: {F: 1},
		
	},
	{
		input: "mixture",
		output: {F: 1},
		
	},
	{
		input: "mièvrerie",
		output: {F: 1},
		
	},
	{
		input: "mm",
		output: {M: 1},
		
	},
	{
		input: "mnémotechnie",
		output: {F: 1},
		
	},
	{
		input: "mnémotechnique",
		output: {F: 1},
		
	},
	{
		input: "mo",
		output: {F: 1},
		
	},
	{
		input: "mo",
		output: {M: 1},
		
	},
	{
		input: "mobilier",
		output: {M: 1},
		
	},
	{
		input: "mobilisation",
		output: {F: 1},
		
	},
	{
		input: "mobilisme",
		output: {M: 1},
		
	},
	{
		input: "mobilite",
		output: {F: 1},
		
	},
	{
		input: "mobilité",
		output: {F: 1},
		
	},
	{
		input: "mobutisme",
		output: {M: 1},
		
	},
	{
		input: "mobylette",
		output: {F: 1},
		
	},
	{
		input: "mod",
		output: {M: 1},
		
	},
	{
		input: "moda",
		output: {F: 1},
		
	},
	{
		input: "modal",
		output: {M: 1},
		
	},
	{
		input: "modalidad",
		output: {F: 1},
		
	},
	{
		input: "modalisateur",
		output: {M: 1},
		
	},
	{
		input: "modalisation",
		output: {F: 1},
		
	},
	{
		input: "modalité",
		output: {F: 1},
		
	},
	{
		input: "mode",
		output: {F: 1},
		
	},
	{
		input: "mode",
		output: {M: 1},
		
	},
	{
		input: "modelage",
		output: {M: 1},
		
	},
	{
		input: "modele",
		output: {M: 1},
		
	},
	{
		input: "modeleur",
		output: {M: 1},
		
	},
	{
		input: "modello",
		output: {M: 1},
		
	},
	{
		input: "modelo",
		output: {M: 1},
		
	},
	{
		input: "modelé",
		output: {M: 1},
		
	},
	{
		input: "modem",
		output: {M: 1},
		
	},
	{
		input: "modemisation",
		output: {F: 1},
		
	},
	{
		input: "modemité",
		output: {F: 1},
		
	},
	{
		input: "moder",
		output: {F: 1},
		
	},
	{
		input: "moderne",
		output: {F: 1},
		
	},
	{
		input: "moderne",
		output: {M: 1},
		
	},
	{
		input: "modernidad",
		output: {F: 1},
		
	},
	{
		input: "modernisation",
		output: {F: 1},
		
	},
	{
		input: "modernisme",
		output: {M: 1},
		
	},
	{
		input: "moderniste",
		output: {M: 1},
		
	},
	{
		input: "modernité",
		output: {F: 1},
		
	},
	{
		input: "modernización",
		output: {F: 1},
		
	},
	{
		input: "modestie",
		output: {F: 1},
		
	},
	{
		input: "modicité",
		output: {F: 1},
		
	},
	{
		input: "modifiant",
		output: {F: 1},
		
	},
	{
		input: "modificateur",
		output: {M: 1},
		
	},
	{
		input: "modification",
		output: {F: 1},
		
	},
	{
		input: "modifieur",
		output: {M: 1},
		
	},
	{
		input: "modiste",
		output: {F: 1},
		
	},
	{
		input: "modo",
		output: {M: 1},
		
	},
	{
		input: "modularisation",
		output: {F: 1},
		
	},
	{
		input: "modularité",
		output: {F: 1},
		
	},
	{
		input: "modulateur",
		output: {M: 1},
		
	},
	{
		input: "modulation",
		output: {F: 1},
		
	},
	{
		input: "module",
		output: {M: 1},
		
	},
	{
		input: "modus",
		output: {M: 1},
		
	},
	{
		input: "modèle",
		output: {F: 1},
		
	},
	{
		input: "modèle",
		output: {M: 1},
		
	},
	{
		input: "modéle",
		output: {M: 1},
		
	},
	{
		input: "modélisateur",
		output: {M: 1},
		
	},
	{
		input: "modélisation",
		output: {F: 1},
		
	},
	{
		input: "modénature",
		output: {F: 1},
		
	},
	{
		input: "modérantisme",
		output: {M: 1},
		
	},
	{
		input: "modérateur",
		output: {M: 1},
		
	},
	{
		input: "modération",
		output: {F: 1},
		
	},
	{
		input: "modéré",
		output: {M: 1},
		
	},
	{
		input: "moelle",
		output: {F: 1},
		
	},
	{
		input: "moelleux",
		output: {M: 1},
		
	},
	{
		input: "moellon",
		output: {M: 1},
		
	},
	{
		input: "moglie",
		output: {F: 1},
		
	},
	{
		input: "mohel",
		output: {M: 1},
		
	},
	{
		input: "moignon",
		output: {M: 1},
		
	},
	{
		input: "moindrement",
		output: {M: 1},
		
	},
	{
		input: "moine",
		output: {M: 1},
		
	},
	{
		input: "moineau",
		output: {M: 1},
		
	},
	{
		input: "moins",
		output: {F: 1},
		
	},
	{
		input: "moire",
		output: {F: 1},
		
	},
	{
		input: "mois",
		output: {M: 1},
		
	},
	{
		input: "moisissure",
		output: {F: 1},
		
	},
	{
		input: "moisson",
		output: {F: 1},
		
	},
	{
		input: "moissonneur",
		output: {M: 1},
		
	},
	{
		input: "moissonneuse",
		output: {F: 1},
		
	},
	{
		input: "moiteur",
		output: {F: 1},
		
	},
	{
		input: "moitie",
		output: {F: 1},
		
	},
	{
		input: "moitié",
		output: {F: 1},
		
	},
	{
		input: "moka",
		output: {M: 1},
		
	},
	{
		input: "mol",
		output: {M: 1},
		
	},
	{
		input: "molaire",
		output: {F: 1},
		
	},
	{
		input: "molasse",
		output: {F: 1},
		
	},
	{
		input: "mole",
		output: {F: 1},
		
	},
	{
		input: "molette",
		output: {F: 1},
		
	},
	{
		input: "molinisme",
		output: {M: 1},
		
	},
	{
		input: "mollah",
		output: {M: 1},
		
	},
	{
		input: "molle",
		output: {F: 1},
		
	},
	{
		input: "mollesse",
		output: {F: 1},
		
	},
	{
		input: "mollet",
		output: {M: 1},
		
	},
	{
		input: "mollusque",
		output: {M: 1},
		
	},
	{
		input: "molosse",
		output: {M: 1},
		
	},
	{
		input: "molybdène",
		output: {M: 1},
		
	},
	{
		input: "molécule",
		output: {F: 1},
		
	},
	{
		input: "moment",
		output: {M: 1},
		
	},
	{
		input: "momento",
		output: {M: 1},
		
	},
	{
		input: "momentum",
		output: {M: 1},
		
	},
	{
		input: "momie",
		output: {F: 1},
		
	},
	{
		input: "momification",
		output: {F: 1},
		
	},
	{
		input: "monachisme",
		output: {M: 1},
		
	},
	{
		input: "monade",
		output: {F: 1},
		
	},
	{
		input: "monadologie",
		output: {F: 1},
		
	},
	{
		input: "monarchie",
		output: {F: 1},
		
	},
	{
		input: "monarchisme",
		output: {M: 1},
		
	},
	{
		input: "monarchiste",
		output: {M: 1},
		
	},
	{
		input: "monarque",
		output: {M: 1},
		
	},
	{
		input: "monarquía",
		output: {F: 1},
		
	},
	{
		input: "monastère",
		output: {M: 1},
		
	},
	{
		input: "monceau",
		output: {M: 1},
		
	},
	{
		input: "mondain",
		output: {M: 1},
		
	},
	{
		input: "mondanité",
		output: {F: 1},
		
	},
	{
		input: "mondanéité",
		output: {F: 1},
		
	},
	{
		input: "monde",
		output: {F: 1},
		
	},
	{
		input: "monde",
		output: {M: 1},
		
	},
	{
		input: "mondial",
		output: {M: 1},
		
	},
	{
		input: "mondialisation",
		output: {F: 1},
		
	},
	{
		input: "mondialisme",
		output: {M: 1},
		
	},
	{
		input: "mondialité",
		output: {F: 1},
		
	},
	{
		input: "moneda",
		output: {F: 1},
		
	},
	{
		input: "mongol",
		output: {M: 1},
		
	},
	{
		input: "mongolisme",
		output: {M: 1},
		
	},
	{
		input: "moniale",
		output: {F: 1},
		
	},
	{
		input: "monisme",
		output: {M: 1},
		
	},
	{
		input: "moniteur",
		output: {M: 1},
		
	},
	{
		input: "monition",
		output: {F: 1},
		
	},
	{
		input: "monitoire",
		output: {M: 1},
		
	},
	{
		input: "monitorage",
		output: {M: 1},
		
	},
	{
		input: "monitorat",
		output: {M: 1},
		
	},
	{
		input: "monitoring",
		output: {M: 1},
		
	},
	{
		input: "monitrice",
		output: {F: 1},
		
	},
	{
		input: "monnaie",
		output: {F: 1},
		
	},
	{
		input: "monnayage",
		output: {M: 1},
		
	},
	{
		input: "monnoie",
		output: {F: 1},
		
	},
	{
		input: "monnoye",
		output: {F: 1},
		
	},
	{
		input: "mono",
		output: {F: 1},
		
	},
	{
		input: "mono",
		output: {M: 1},
		
	},
	{
		input: "monoamine",
		output: {F: 1},
		
	},
	{
		input: "monocamérisme",
		output: {M: 1},
		
	},
	{
		input: "monochromateur",
		output: {M: 1},
		
	},
	{
		input: "monochrome",
		output: {M: 1},
		
	},
	{
		input: "monochromie",
		output: {F: 1},
		
	},
	{
		input: "monocle",
		output: {M: 1},
		
	},
	{
		input: "monocorde",
		output: {M: 1},
		
	},
	{
		input: "monocouche",
		output: {F: 1},
		
	},
	{
		input: "monocratie",
		output: {F: 1},
		
	},
	{
		input: "monocristal",
		output: {M: 1},
		
	},
	{
		input: "monoculture",
		output: {F: 1},
		
	},
	{
		input: "monodie",
		output: {F: 1},
		
	},
	{
		input: "monogamie",
		output: {F: 1},
		
	},
	{
		input: "monogramme",
		output: {M: 1},
		
	},
	{
		input: "monographie",
		output: {F: 1},
		
	},
	{
		input: "monogénisme",
		output: {M: 1},
		
	},
	{
		input: "monolingue",
		output: {M: 1},
		
	},
	{
		input: "monolinguisme",
		output: {M: 1},
		
	},
	{
		input: "monolithe",
		output: {M: 1},
		
	},
	{
		input: "monolithisme",
		output: {M: 1},
		
	},
	{
		input: "monologisme",
		output: {M: 1},
		
	},
	{
		input: "monologue",
		output: {M: 1},
		
	},
	{
		input: "monomanie",
		output: {F: 1},
		
	},
	{
		input: "monomoteur",
		output: {M: 1},
		
	},
	{
		input: "monomère",
		output: {M: 1},
		
	},
	{
		input: "mononucléose",
		output: {F: 1},
		
	},
	{
		input: "monoparentalité",
		output: {F: 1},
		
	},
	{
		input: "monopartisme",
		output: {M: 1},
		
	},
	{
		input: "monophysisme",
		output: {M: 1},
		
	},
	{
		input: "monoplan",
		output: {M: 1},
		
	},
	{
		input: "monopole",
		output: {M: 1},
		
	},
	{
		input: "monopoleur",
		output: {M: 1},
		
	},
	{
		input: "monopolisation",
		output: {F: 1},
		
	},
	{
		input: "monoproduction",
		output: {F: 1},
		
	},
	{
		input: "monopsone",
		output: {M: 1},
		
	},
	{
		input: "monospace",
		output: {M: 1},
		
	},
	{
		input: "monosyllabe",
		output: {M: 1},
		
	},
	{
		input: "monosémie",
		output: {F: 1},
		
	},
	{
		input: "monothéisme",
		output: {M: 1},
		
	},
	{
		input: "monothérapie",
		output: {F: 1},
		
	},
	{
		input: "monotonie",
		output: {F: 1},
		
	},
	{
		input: "monotype",
		output: {M: 1},
		
	},
	{
		input: "monoxyde",
		output: {M: 1},
		
	},
	{
		input: "monsieur",
		output: {M: 1},
		
	},
	{
		input: "monstration",
		output: {F: 1},
		
	},
	{
		input: "monstre",
		output: {F: 1},
		
	},
	{
		input: "monstre",
		output: {M: 1},
		
	},
	{
		input: "monstrueux",
		output: {M: 1},
		
	},
	{
		input: "monstruosité",
		output: {F: 1},
		
	},
	{
		input: "mont",
		output: {M: 1},
		
	},
	{
		input: "montage",
		output: {M: 1},
		
	},
	{
		input: "montagnard",
		output: {M: 1},
		
	},
	{
		input: "montagne",
		output: {F: 1},
		
	},
	{
		input: "montagne",
		output: {M: 1},
		
	},
	{
		input: "montaigne",
		output: {F: 1},
		
	},
	{
		input: "montaison",
		output: {F: 1},
		
	},
	{
		input: "montana",
		output: {F: 1},
		
	},
	{
		input: "montanisme",
		output: {M: 1},
		
	},
	{
		input: "montant",
		output: {F: 1},
		
	},
	{
		input: "montant",
		output: {M: 1},
		
	},
	{
		input: "montaña",
		output: {F: 1},
		
	},
	{
		input: "monte",
		output: {F: 1},
		
	},
	{
		input: "monte",
		output: {M: 1},
		
	},
	{
		input: "monteur",
		output: {M: 1},
		
	},
	{
		input: "monteuse",
		output: {F: 1},
		
	},
	{
		input: "montgolfière",
		output: {F: 1},
		
	},
	{
		input: "monticule",
		output: {M: 1},
		
	},
	{
		input: "montmorillonite",
		output: {F: 1},
		
	},
	{
		input: "montre",
		output: {F: 1},
		
	},
	{
		input: "montre",
		output: {M: 1},
		
	},
	{
		input: "montrerai",
		output: {M: 1},
		
	},
	{
		input: "montrerons",
		output: {M: 1},
		
	},
	{
		input: "montreur",
		output: {M: 1},
		
	},
	{
		input: "monture",
		output: {F: 1},
		
	},
	{
		input: "monté",
		output: {F: 1},
		
	},
	{
		input: "montée",
		output: {F: 1},
		
	},
	{
		input: "monument",
		output: {M: 1},
		
	},
	{
		input: "monumental",
		output: {M: 1},
		
	},
	{
		input: "monumentalisation",
		output: {F: 1},
		
	},
	{
		input: "monumentalité",
		output: {F: 1},
		
	},
	{
		input: "monétarisation",
		output: {F: 1},
		
	},
	{
		input: "monétarisme",
		output: {M: 1},
		
	},
	{
		input: "monétique",
		output: {F: 1},
		
	},
	{
		input: "monétisation",
		output: {F: 1},
		
	},
	{
		input: "monôme",
		output: {M: 1},
		
	},
	{
		input: "moore",
		output: {M: 1},
		
	},
	{
		input: "mooré",
		output: {M: 1},
		
	},
	{
		input: "moquerie",
		output: {F: 1},
		
	},
	{
		input: "moquette",
		output: {F: 1},
		
	},
	{
		input: "mor",
		output: {F: 1},
		
	},
	{
		input: "mor",
		output: {M: 1},
		
	},
	{
		input: "moraine",
		output: {F: 1},
		
	},
	{
		input: "moral",
		output: {F: 1},
		
	},
	{
		input: "moral",
		output: {M: 1},
		
	},
	{
		input: "moralisation",
		output: {F: 1},
		
	},
	{
		input: "moralisme",
		output: {M: 1},
		
	},
	{
		input: "moraliste",
		output: {M: 1},
		
	},
	{
		input: "moralité",
		output: {F: 1},
		
	},
	{
		input: "moratoire",
		output: {M: 1},
		
	},
	{
		input: "morbide",
		output: {M: 1},
		
	},
	{
		input: "morbidité",
		output: {F: 1},
		
	},
	{
		input: "morceau",
		output: {M: 1},
		
	},
	{
		input: "morcellement",
		output: {M: 1},
		
	},
	{
		input: "mord",
		output: {M: 1},
		
	},
	{
		input: "mordant",
		output: {M: 1},
		
	},
	{
		input: "mordançage",
		output: {M: 1},
		
	},
	{
		input: "mordu",
		output: {M: 1},
		
	},
	{
		input: "morelle",
		output: {F: 1},
		
	},
	{
		input: "morgue",
		output: {F: 1},
		
	},
	{
		input: "moribond",
		output: {M: 1},
		
	},
	{
		input: "morne",
		output: {M: 1},
		
	},
	{
		input: "morosité",
		output: {F: 1},
		
	},
	{
		input: "morphine",
		output: {F: 1},
		
	},
	{
		input: "morphinique",
		output: {M: 1},
		
	},
	{
		input: "morphinomanie",
		output: {F: 1},
		
	},
	{
		input: "morphisme",
		output: {M: 1},
		
	},
	{
		input: "morphodynamique",
		output: {F: 1},
		
	},
	{
		input: "morphogenèse",
		output: {F: 1},
		
	},
	{
		input: "morphogénèse",
		output: {F: 1},
		
	},
	{
		input: "morphologie",
		output: {F: 1},
		
	},
	{
		input: "morphométrie",
		output: {F: 1},
		
	},
	{
		input: "morphophonologie",
		output: {F: 1},
		
	},
	{
		input: "morphosyntaxe",
		output: {F: 1},
		
	},
	{
		input: "morphotype",
		output: {M: 1},
		
	},
	{
		input: "morphème",
		output: {M: 1},
		
	},
	{
		input: "mors",
		output: {M: 1},
		
	},
	{
		input: "morse",
		output: {M: 1},
		
	},
	{
		input: "morsure",
		output: {F: 1},
		
	},
	{
		input: "mort",
		output: {F: 1},
		
	},
	{
		input: "mort",
		output: {M: 1},
		
	},
	{
		input: "mortaise",
		output: {F: 1},
		
	},
	{
		input: "mortalidad",
		output: {F: 1},
		
	},
	{
		input: "mortalite",
		output: {F: 1},
		
	},
	{
		input: "mortalité",
		output: {F: 1},
		
	},
	{
		input: "morte",
		output: {F: 1},
		
	},
	{
		input: "mortel",
		output: {M: 1},
		
	},
	{
		input: "mortelle",
		output: {F: 1},
		
	},
	{
		input: "mortier",
		output: {M: 1},
		
	},
	{
		input: "mortification",
		output: {F: 1},
		
	},
	{
		input: "mortinatalité",
		output: {F: 1},
		
	},
	{
		input: "morts",
		output: {M: 1},
		
	},
	{
		input: "morue",
		output: {F: 1},
		
	},
	{
		input: "morve",
		output: {F: 1},
		
	},
	{
		input: "mos",
		output: {M: 1},
		
	},
	{
		input: "mosaique",
		output: {F: 1},
		
	},
	{
		input: "mosaïque",
		output: {F: 1},
		
	},
	{
		input: "mosaïste",
		output: {M: 1},
		
	},
	{
		input: "mosquée",
		output: {F: 1},
		
	},
	{
		input: "mot",
		output: {F: 1},
		
	},
	{
		input: "mot",
		output: {M: 1},
		
	},
	{
		input: "motard",
		output: {M: 1},
		
	},
	{
		input: "motel",
		output: {M: 1},
		
	},
	{
		input: "motet",
		output: {M: 1},
		
	},
	{
		input: "moteur",
		output: {M: 1},
		
	},
	{
		input: "motif",
		output: {M: 1},
		
	},
	{
		input: "motilité",
		output: {F: 1},
		
	},
	{
		input: "motion",
		output: {F: 1},
		
	},
	{
		input: "motivation",
		output: {F: 1},
		
	},
	{
		input: "motive",
		output: {F: 1},
		
	},
	{
		input: "motive",
		output: {M: 1},
		
	},
	{
		input: "moto",
		output: {F: 1},
		
	},
	{
		input: "moto",
		output: {M: 1},
		
	},
	{
		input: "motoculteur",
		output: {M: 1},
		
	},
	{
		input: "motoculture",
		output: {F: 1},
		
	},
	{
		input: "motocyclette",
		output: {F: 1},
		
	},
	{
		input: "motocycliste",
		output: {M: 1},
		
	},
	{
		input: "motoneige",
		output: {F: 1},
		
	},
	{
		input: "motoneurone",
		output: {M: 1},
		
	},
	{
		input: "motopompe",
		output: {F: 1},
		
	},
	{
		input: "motorisation",
		output: {F: 1},
		
	},
	{
		input: "motoriste",
		output: {M: 1},
		
	},
	{
		input: "motrice",
		output: {F: 1},
		
	},
	{
		input: "motricité",
		output: {F: 1},
		
	},
	{
		input: "mots",
		output: {M: 1},
		
	},
	{
		input: "motte",
		output: {F: 1},
		
	},
	{
		input: "motto",
		output: {M: 1},
		
	},
	{
		input: "motu",
		output: {M: 1},
		
	},
	{
		input: "mou",
		output: {M: 1},
		
	},
	{
		input: "mouchard",
		output: {M: 1},
		
	},
	{
		input: "mouche",
		output: {F: 1},
		
	},
	{
		input: "moucheron",
		output: {M: 1},
		
	},
	{
		input: "mouchoir",
		output: {M: 1},
		
	},
	{
		input: "moudawana",
		output: {F: 1},
		
	},
	{
		input: "moudjahid",
		output: {M: 1},
		
	},
	{
		input: "moue",
		output: {F: 1},
		
	},
	{
		input: "mouette",
		output: {F: 1},
		
	},
	{
		input: "mouflon",
		output: {M: 1},
		
	},
	{
		input: "mouillabilité",
		output: {F: 1},
		
	},
	{
		input: "mouillage",
		output: {M: 1},
		
	},
	{
		input: "mouille",
		output: {F: 1},
		
	},
	{
		input: "mouillure",
		output: {F: 1},
		
	},
	{
		input: "mouise",
		output: {F: 1},
		
	},
	{
		input: "moujik",
		output: {M: 1},
		
	},
	{
		input: "moulage",
		output: {M: 1},
		
	},
	{
		input: "moule",
		output: {F: 1},
		
	},
	{
		input: "moule",
		output: {M: 1},
		
	},
	{
		input: "mouleur",
		output: {M: 1},
		
	},
	{
		input: "moulin",
		output: {M: 1},
		
	},
	{
		input: "moulinage",
		output: {M: 1},
		
	},
	{
		input: "mouline",
		output: {F: 1},
		
	},
	{
		input: "moulinet",
		output: {M: 1},
		
	},
	{
		input: "moulinette",
		output: {F: 1},
		
	},
	{
		input: "mouluration",
		output: {F: 1},
		
	},
	{
		input: "moulure",
		output: {F: 1},
		
	},
	{
		input: "mourant",
		output: {M: 1},
		
	},
	{
		input: "mouridisme",
		output: {M: 1},
		
	},
	{
		input: "mouroir",
		output: {M: 1},
		
	},
	{
		input: "mousquet",
		output: {M: 1},
		
	},
	{
		input: "mousquetaire",
		output: {M: 1},
		
	},
	{
		input: "mousqueterie",
		output: {F: 1},
		
	},
	{
		input: "mousqueton",
		output: {M: 1},
		
	},
	{
		input: "mousse",
		output: {F: 1},
		
	},
	{
		input: "mousse",
		output: {M: 1},
		
	},
	{
		input: "mousseline",
		output: {F: 1},
		
	},
	{
		input: "moussem",
		output: {M: 1},
		
	},
	{
		input: "mousson",
		output: {F: 1},
		
	},
	{
		input: "moustache",
		output: {F: 1},
		
	},
	{
		input: "moustachu",
		output: {M: 1},
		
	},
	{
		input: "moustiquaire",
		output: {F: 1},
		
	},
	{
		input: "moustique",
		output: {M: 1},
		
	},
	{
		input: "moutarde",
		output: {F: 1},
		
	},
	{
		input: "mouton",
		output: {M: 1},
		
	},
	{
		input: "moutonnement",
		output: {M: 1},
		
	},
	{
		input: "mouture",
		output: {F: 1},
		
	},
	{
		input: "mouvance",
		output: {F: 1},
		
	},
	{
		input: "mouvant",
		output: {M: 1},
		
	},
	{
		input: "mouve",
		output: {M: 1},
		
	},
	{
		input: "mouvement",
		output: {F: 1},
		
	},
	{
		input: "mouvement",
		output: {M: 1},
		
	},
	{
		input: "mouvoir",
		output: {M: 1},
		
	},
	{
		input: "movida",
		output: {F: 1},
		
	},
	{
		input: "movilidad",
		output: {F: 1},
		
	},
	{
		input: "movimiento",
		output: {M: 1},
		
	},
	{
		input: "moyen",
		output: {M: 1},
		
	},
	{
		input: "moyenne",
		output: {F: 1},
		
	},
	{
		input: "moyens",
		output: {M: 1},
		
	},
	{
		input: "moyeu",
		output: {M: 1},
		
	},
	{
		input: "moût",
		output: {M: 1},
		
	},
	{
		input: "mpanjaka",
		output: {M: 1},
		
	},
	{
		input: "mrp",
		output: {M: 1},
		
	},
	{
		input: "ms",
		output: {M: 1},
		
	},
	{
		input: "mu",
		output: {F: 1},
		
	},
	{
		input: "mu",
		output: {M: 1},
		
	},
	{
		input: "muchacha",
		output: {F: 1},
		
	},
	{
		input: "mucilage",
		output: {M: 1},
		
	},
	{
		input: "mucoviscidose",
		output: {F: 1},
		
	},
	{
		input: "mucus",
		output: {M: 1},
		
	},
	{
		input: "muda",
		output: {F: 1},
		
	},
	{
		input: "mue",
		output: {F: 1},
		
	},
	{
		input: "muerte",
		output: {F: 1},
		
	},
	{
		input: "muestra",
		output: {F: 1},
		
	},
	{
		input: "muet",
		output: {M: 1},
		
	},
	{
		input: "muette",
		output: {F: 1},
		
	},
	{
		input: "muezzin",
		output: {M: 1},
		
	},
	{
		input: "mufle",
		output: {M: 1},
		
	},
	{
		input: "muflerie",
		output: {F: 1},
		
	},
	{
		input: "mufti",
		output: {M: 1},
		
	},
	{
		input: "mugissement",
		output: {M: 1},
		
	},
	{
		input: "muguet",
		output: {M: 1},
		
	},
	{
		input: "muid",
		output: {M: 1},
		
	},
	{
		input: "mujer",
		output: {F: 1},
		
	},
	{
		input: "mulch",
		output: {M: 1},
		
	},
	{
		input: "mule",
		output: {F: 1},
		
	},
	{
		input: "mulet",
		output: {M: 1},
		
	},
	{
		input: "muleta",
		output: {F: 1},
		
	},
	{
		input: "muletier",
		output: {M: 1},
		
	},
	{
		input: "mulot",
		output: {M: 1},
		
	},
	{
		input: "multi",
		output: {F: 1},
		
	},
	{
		input: "multi",
		output: {M: 1},
		
	},
	{
		input: "multicolinéarité",
		output: {F: 1},
		
	},
	{
		input: "multiculturalisme",
		output: {M: 1},
		
	},
	{
		input: "multiculturalité",
		output: {F: 1},
		
	},
	{
		input: "multidimensionnalité",
		output: {F: 1},
		
	},
	{
		input: "multidisciplinarité",
		output: {F: 1},
		
	},
	{
		input: "multiethnicité",
		output: {F: 1},
		
	},
	{
		input: "multifonctionnalité",
		output: {F: 1},
		
	},
	{
		input: "multilatéral",
		output: {M: 1},
		
	},
	{
		input: "multilatéralisation",
		output: {F: 1},
		
	},
	{
		input: "multilatéralisme",
		output: {M: 1},
		
	},
	{
		input: "multilinguisme",
		output: {M: 1},
		
	},
	{
		input: "multimodalité",
		output: {F: 1},
		
	},
	{
		input: "multimédia",
		output: {M: 1},
		
	},
	{
		input: "multinationale",
		output: {F: 1},
		
	},
	{
		input: "multinationalisation",
		output: {F: 1},
		
	},
	{
		input: "multinationalité",
		output: {F: 1},
		
	},
	{
		input: "multipartenariat",
		output: {M: 1},
		
	},
	{
		input: "multipartisme",
		output: {M: 1},
		
	},
	{
		input: "multiple",
		output: {F: 1},
		
	},
	{
		input: "multiple",
		output: {M: 1},
		
	},
	{
		input: "multiplex",
		output: {M: 1},
		
	},
	{
		input: "multiplexage",
		output: {M: 1},
		
	},
	{
		input: "multiplexe",
		output: {M: 1},
		
	},
	{
		input: "multiplexeur",
		output: {M: 1},
		
	},
	{
		input: "multiplicateur",
		output: {M: 1},
		
	},
	{
		input: "multiplication",
		output: {F: 1},
		
	},
	{
		input: "multiplicité",
		output: {F: 1},
		
	},
	{
		input: "multipolarisation",
		output: {F: 1},
		
	},
	{
		input: "multipolarité",
		output: {F: 1},
		
	},
	{
		input: "multipositionnalité",
		output: {F: 1},
		
	},
	{
		input: "multipropriété",
		output: {F: 1},
		
	},
	{
		input: "multitud",
		output: {F: 1},
		
	},
	{
		input: "multitude",
		output: {F: 1},
		
	},
	{
		input: "multitudes",
		output: {F: 1},
		
	},
	{
		input: "mulâtre",
		output: {M: 1},
		
	},
	{
		input: "mulâtresse",
		output: {F: 1},
		
	},
	{
		input: "mundo",
		output: {M: 1},
		
	},
	{
		input: "mundus",
		output: {M: 1},
		
	},
	{
		input: "municipal",
		output: {M: 1},
		
	},
	{
		input: "municipalisation",
		output: {F: 1},
		
	},
	{
		input: "municipalisme",
		output: {M: 1},
		
	},
	{
		input: "municipalité",
		output: {F: 1},
		
	},
	{
		input: "municipe",
		output: {M: 1},
		
	},
	{
		input: "munificence",
		output: {F: 1},
		
	},
	{
		input: "munition",
		output: {F: 1},
		
	},
	{
		input: "munitionnaire",
		output: {M: 1},
		
	},
	{
		input: "muntu",
		output: {M: 1},
		
	},
	{
		input: "munus",
		output: {M: 1},
		
	},
	{
		input: "muon",
		output: {M: 1},
		
	},
	{
		input: "muqueuse",
		output: {F: 1},
		
	},
	{
		input: "mur",
		output: {M: 1},
		
	},
	{
		input: "mura",
		output: {M: 1},
		
	},
	{
		input: "muraille",
		output: {F: 1},
		
	},
	{
		input: "mural",
		output: {M: 1},
		
	},
	{
		input: "muralisme",
		output: {M: 1},
		
	},
	{
		input: "muret",
		output: {M: 1},
		
	},
	{
		input: "murette",
		output: {F: 1},
		
	},
	{
		input: "murmure",
		output: {M: 1},
		
	},
	{
		input: "murène",
		output: {F: 1},
		
	},
	{
		input: "musaraigne",
		output: {F: 1},
		
	},
	{
		input: "musc",
		output: {M: 1},
		
	},
	{
		input: "muscade",
		output: {F: 1},
		
	},
	{
		input: "muscadet",
		output: {M: 1},
		
	},
	{
		input: "muscat",
		output: {M: 1},
		
	},
	{
		input: "muscle",
		output: {M: 1},
		
	},
	{
		input: "muscovite",
		output: {F: 1},
		
	},
	{
		input: "musculation",
		output: {F: 1},
		
	},
	{
		input: "musculature",
		output: {F: 1},
		
	},
	{
		input: "musculeuse",
		output: {F: 1},
		
	},
	{
		input: "muse",
		output: {F: 1},
		
	},
	{
		input: "museau",
		output: {M: 1},
		
	},
	{
		input: "muselière",
		output: {F: 1},
		
	},
	{
		input: "musellement",
		output: {M: 1},
		
	},
	{
		input: "musette",
		output: {F: 1},
		
	},
	{
		input: "music",
		output: {M: 1},
		
	},
	{
		input: "musica",
		output: {F: 1},
		
	},
	{
		input: "musical",
		output: {M: 1},
		
	},
	{
		input: "musicalité",
		output: {F: 1},
		
	},
	{
		input: "musicien",
		output: {M: 1},
		
	},
	{
		input: "musicienne",
		output: {F: 1},
		
	},
	{
		input: "musicologie",
		output: {F: 1},
		
	},
	{
		input: "musicologue",
		output: {M: 1},
		
	},
	{
		input: "musicothérapie",
		output: {F: 1},
		
	},
	{
		input: "musique",
		output: {F: 1},
		
	},
	{
		input: "must",
		output: {M: 1},
		
	},
	{
		input: "musulman",
		output: {M: 1},
		
	},
	{
		input: "musulmane",
		output: {F: 1},
		
	},
	{
		input: "musée",
		output: {M: 1},
		
	},
	{
		input: "muséification",
		output: {F: 1},
		
	},
	{
		input: "muséographie",
		output: {F: 1},
		
	},
	{
		input: "muséologie",
		output: {F: 1},
		
	},
	{
		input: "muséum",
		output: {M: 1},
		
	},
	{
		input: "mutabilité",
		output: {F: 1},
		
	},
	{
		input: "mutagenèse",
		output: {F: 1},
		
	},
	{
		input: "mutant",
		output: {M: 1},
		
	},
	{
		input: "mutation",
		output: {F: 1},
		
	},
	{
		input: "muthos",
		output: {M: 1},
		
	},
	{
		input: "mutilation",
		output: {F: 1},
		
	},
	{
		input: "mutilé",
		output: {M: 1},
		
	},
	{
		input: "mutin",
		output: {M: 1},
		
	},
	{
		input: "mutinerie",
		output: {F: 1},
		
	},
	{
		input: "mutisme",
		output: {M: 1},
		
	},
	{
		input: "mutité",
		output: {F: 1},
		
	},
	{
		input: "mutualisation",
		output: {F: 1},
		
	},
	{
		input: "mutualisme",
		output: {M: 1},
		
	},
	{
		input: "mutualité",
		output: {F: 1},
		
	},
	{
		input: "mutuel",
		output: {M: 1},
		
	},
	{
		input: "mutuelle",
		output: {F: 1},
		
	},
	{
		input: "mutuellisme",
		output: {M: 1},
		
	},
	{
		input: "mvet",
		output: {M: 1},
		
	},
	{
		input: "mwami",
		output: {M: 1},
		
	},
	{
		input: "myasthénie",
		output: {F: 1},
		
	},
	{
		input: "mycologie",
		output: {F: 1},
		
	},
	{
		input: "mycorhization",
		output: {F: 1},
		
	},
	{
		input: "mycose",
		output: {F: 1},
		
	},
	{
		input: "mycélium",
		output: {M: 1},
		
	},
	{
		input: "mydriase",
		output: {F: 1},
		
	},
	{
		input: "mygale",
		output: {F: 1},
		
	},
	{
		input: "myocarde",
		output: {M: 1},
		
	},
	{
		input: "myocardite",
		output: {F: 1},
		
	},
	{
		input: "myoglobine",
		output: {F: 1},
		
	},
	{
		input: "myomètre",
		output: {M: 1},
		
	},
	{
		input: "myopathie",
		output: {F: 1},
		
	},
	{
		input: "myope",
		output: {M: 1},
		
	},
	{
		input: "myopie",
		output: {F: 1},
		
	},
	{
		input: "myosine",
		output: {F: 1},
		
	},
	{
		input: "myosis",
		output: {M: 1},
		
	},
	{
		input: "myosotis",
		output: {M: 1},
		
	},
	{
		input: "myriade",
		output: {F: 1},
		
	},
	{
		input: "myrrhe",
		output: {F: 1},
		
	},
	{
		input: "myrte",
		output: {M: 1},
		
	},
	{
		input: "myrtille",
		output: {F: 1},
		
	},
	{
		input: "mystagogie",
		output: {F: 1},
		
	},
	{
		input: "myste",
		output: {M: 1},
		
	},
	{
		input: "mystere",
		output: {M: 1},
		
	},
	{
		input: "mysticisme",
		output: {M: 1},
		
	},
	{
		input: "mysticité",
		output: {F: 1},
		
	},
	{
		input: "mystificateur",
		output: {M: 1},
		
	},
	{
		input: "mystification",
		output: {F: 1},
		
	},
	{
		input: "mystique",
		output: {F: 1},
		
	},
	{
		input: "mystique",
		output: {M: 1},
		
	},
	{
		input: "mystère",
		output: {M: 1},
		
	},
	{
		input: "mystérieuse",
		output: {F: 1},
		
	},
	{
		input: "mystérieux",
		output: {M: 1},
		
	},
	{
		input: "mythanalyse",
		output: {F: 1},
		
	},
	{
		input: "mythe",
		output: {M: 1},
		
	},
	{
		input: "mythification",
		output: {F: 1},
		
	},
	{
		input: "mythique",
		output: {F: 1},
		
	},
	{
		input: "mythique",
		output: {M: 1},
		
	},
	{
		input: "mytho",
		output: {F: 1},
		
	},
	{
		input: "mythocritique",
		output: {F: 1},
		
	},
	{
		input: "mythographie",
		output: {F: 1},
		
	},
	{
		input: "mythologie",
		output: {F: 1},
		
	},
	{
		input: "mythologique",
		output: {M: 1},
		
	},
	{
		input: "mythologisation",
		output: {F: 1},
		
	},
	{
		input: "mythologue",
		output: {M: 1},
		
	},
	{
		input: "mythomane",
		output: {M: 1},
		
	},
	{
		input: "mythomanie",
		output: {F: 1},
		
	},
	{
		input: "mythos",
		output: {M: 1},
		
	},
	{
		input: "mythème",
		output: {M: 1},
		
	},
	{
		input: "mytiliculture",
		output: {F: 1},
		
	},
	{
		input: "myxomatose",
		output: {F: 1},
		
	},
	{
		input: "myéline",
		output: {F: 1},
		
	},
	{
		input: "myélinisation",
		output: {F: 1},
		
	},
	{
		input: "myélogramme",
		output: {M: 1},
		
	},
	{
		input: "myélographie",
		output: {F: 1},
		
	},
	{
		input: "myélome",
		output: {M: 1},
		
	},
	{
		input: "máquina",
		output: {F: 1},
		
	},
	{
		input: "más",
		output: {F: 1},
		
	},
	{
		input: "mâche",
		output: {F: 1},
		
	},
	{
		input: "mâchefer",
		output: {M: 1},
		
	},
	{
		input: "mâchoire",
		output: {F: 1},
		
	},
	{
		input: "mâle",
		output: {F: 1},
		
	},
	{
		input: "mâle",
		output: {M: 1},
		
	},
	{
		input: "mât",
		output: {M: 1},
		
	},
	{
		input: "mâture",
		output: {F: 1},
		
	},
	{
		input: "mâyâ",
		output: {F: 1},
		
	},
	{
		input: "mèche",
		output: {F: 1},
		
	},
	{
		input: "mène",
		output: {F: 1},
		
	},
	{
		input: "mène",
		output: {M: 1},
		
	},
	{
		input: "mère",
		output: {F: 1},
		
	},
	{
		input: "mère",
		output: {M: 1},
		
	},
	{
		input: "mèrepatrie",
		output: {F: 1},
		
	},
	{
		input: "mètis",
		output: {F: 1},
		
	},
	{
		input: "mètre",
		output: {M: 1},
		
	},
	{
		input: "mètres",
		output: {M: 1},
		
	},
	{
		input: "mé",
		output: {F: 1},
		
	},
	{
		input: "mé",
		output: {M: 1},
		
	},
	{
		input: "méandre",
		output: {M: 1},
		
	},
	{
		input: "méat",
		output: {M: 1},
		
	},
	{
		input: "mécanicien",
		output: {M: 1},
		
	},
	{
		input: "mécanicisme",
		output: {M: 1},
		
	},
	{
		input: "mécanique",
		output: {F: 1},
		
	},
	{
		input: "mécanique",
		output: {M: 1},
		
	},
	{
		input: "mécanisation",
		output: {F: 1},
		
	},
	{
		input: "mécanisme",
		output: {M: 1},
		
	},
	{
		input: "mécano",
		output: {M: 1},
		
	},
	{
		input: "mécanographie",
		output: {F: 1},
		
	},
	{
		input: "méchanceté",
		output: {F: 1},
		
	},
	{
		input: "méchanique",
		output: {F: 1},
		
	},
	{
		input: "méchant",
		output: {M: 1},
		
	},
	{
		input: "méchante",
		output: {F: 1},
		
	},
	{
		input: "méchoui",
		output: {M: 1},
		
	},
	{
		input: "mécompréhension",
		output: {F: 1},
		
	},
	{
		input: "mécompte",
		output: {M: 1},
		
	},
	{
		input: "méconnaissance",
		output: {F: 1},
		
	},
	{
		input: "méconnaître",
		output: {F: 1},
		
	},
	{
		input: "méconnaître",
		output: {M: 1},
		
	},
	{
		input: "méconnu",
		output: {M: 1},
		
	},
	{
		input: "mécontent",
		output: {M: 1},
		
	},
	{
		input: "mécontentement",
		output: {M: 1},
		
	},
	{
		input: "mécréance",
		output: {F: 1},
		
	},
	{
		input: "mécréant",
		output: {M: 1},
		
	},
	{
		input: "mécène",
		output: {M: 1},
		
	},
	{
		input: "mécénat",
		output: {M: 1},
		
	},
	{
		input: "médaille",
		output: {F: 1},
		
	},
	{
		input: "médaillon",
		output: {M: 1},
		
	},
	{
		input: "médecin",
		output: {F: 1},
		
	},
	{
		input: "médecin",
		output: {M: 1},
		
	},
	{
		input: "médecine",
		output: {F: 1},
		
	},
	{
		input: "médersa",
		output: {F: 1},
		
	},
	{
		input: "média",
		output: {F: 1},
		
	},
	{
		input: "média",
		output: {M: 1},
		
	},
	{
		input: "médian",
		output: {M: 1},
		
	},
	{
		input: "médiance",
		output: {F: 1},
		
	},
	{
		input: "médiane",
		output: {F: 1},
		
	},
	{
		input: "médiante",
		output: {F: 1},
		
	},
	{
		input: "médiastin",
		output: {M: 1},
		
	},
	{
		input: "médiat",
		output: {M: 1},
		
	},
	{
		input: "médiateté",
		output: {F: 1},
		
	},
	{
		input: "médiateur",
		output: {M: 1},
		
	},
	{
		input: "médiathèque",
		output: {F: 1},
		
	},
	{
		input: "médiation",
		output: {F: 1},
		
	},
	{
		input: "médiatique",
		output: {M: 1},
		
	},
	{
		input: "médiatisation",
		output: {F: 1},
		
	},
	{
		input: "médiatrice",
		output: {F: 1},
		
	},
	{
		input: "médical",
		output: {M: 1},
		
	},
	{
		input: "médicalisation",
		output: {F: 1},
		
	},
	{
		input: "médicament",
		output: {M: 1},
		
	},
	{
		input: "médication",
		output: {F: 1},
		
	},
	{
		input: "médico",
		output: {M: 1},
		
	},
	{
		input: "médina",
		output: {F: 1},
		
	},
	{
		input: "médiocratie",
		output: {F: 1},
		
	},
	{
		input: "médiocrité",
		output: {F: 1},
		
	},
	{
		input: "médiologie",
		output: {F: 1},
		
	},
	{
		input: "médiologue",
		output: {M: 1},
		
	},
	{
		input: "médisance",
		output: {F: 1},
		
	},
	{
		input: "méditant",
		output: {M: 1},
		
	},
	{
		input: "méditation",
		output: {F: 1},
		
	},
	{
		input: "méditerranée",
		output: {F: 1},
		
	},
	{
		input: "médium",
		output: {F: 1},
		
	},
	{
		input: "médium",
		output: {M: 1},
		
	},
	{
		input: "médiumnité",
		output: {F: 1},
		
	},
	{
		input: "médius",
		output: {M: 1},
		
	},
	{
		input: "médiété",
		output: {F: 1},
		
	},
	{
		input: "médiéval",
		output: {M: 1},
		
	},
	{
		input: "médiéviste",
		output: {M: 1},
		
	},
	{
		input: "médiévistique",
		output: {F: 1},
		
	},
	{
		input: "médulla",
		output: {F: 1},
		
	},
	{
		input: "médullaire",
		output: {F: 1},
		
	},
	{
		input: "médullo",
		output: {F: 1},
		
	},
	{
		input: "médullosurrénale",
		output: {F: 1},
		
	},
	{
		input: "méduse",
		output: {F: 1},
		
	},
	{
		input: "méfait",
		output: {M: 1},
		
	},
	{
		input: "méfiance",
		output: {F: 1},
		
	},
	{
		input: "méga",
		output: {F: 1},
		
	},
	{
		input: "méga",
		output: {M: 1},
		
	},
	{
		input: "mégalithe",
		output: {M: 1},
		
	},
	{
		input: "mégalithisme",
		output: {M: 1},
		
	},
	{
		input: "mégalomane",
		output: {M: 1},
		
	},
	{
		input: "mégalomanie",
		output: {F: 1},
		
	},
	{
		input: "mégalopole",
		output: {F: 1},
		
	},
	{
		input: "mégamachine",
		output: {F: 1},
		
	},
	{
		input: "mégaphone",
		output: {M: 1},
		
	},
	{
		input: "mégapole",
		output: {F: 1},
		
	},
	{
		input: "mégastructure",
		output: {F: 1},
		
	},
	{
		input: "mégisserie",
		output: {F: 1},
		
	},
	{
		input: "mégot",
		output: {M: 1},
		
	},
	{
		input: "mégère",
		output: {F: 1},
		
	},
	{
		input: "méhariste",
		output: {M: 1},
		
	},
	{
		input: "méiose",
		output: {F: 1},
		
	},
	{
		input: "mélancolie",
		output: {F: 1},
		
	},
	{
		input: "mélancolique",
		output: {F: 1},
		
	},
	{
		input: "mélancolique",
		output: {M: 1},
		
	},
	{
		input: "mélange",
		output: {F: 1},
		
	},
	{
		input: "mélange",
		output: {M: 1},
		
	},
	{
		input: "mélangeur",
		output: {M: 1},
		
	},
	{
		input: "mélanine",
		output: {F: 1},
		
	},
	{
		input: "mélanome",
		output: {M: 1},
		
	},
	{
		input: "mélasse",
		output: {F: 1},
		
	},
	{
		input: "mélatonine",
		output: {F: 1},
		
	},
	{
		input: "méli",
		output: {M: 1},
		
	},
	{
		input: "mélinite",
		output: {F: 1},
		
	},
	{
		input: "mélisme",
		output: {M: 1},
		
	},
	{
		input: "mélisse",
		output: {F: 1},
		
	},
	{
		input: "mélo",
		output: {M: 1},
		
	},
	{
		input: "mélodie",
		output: {F: 1},
		
	},
	{
		input: "mélodrame",
		output: {M: 1},
		
	},
	{
		input: "mélomane",
		output: {M: 1},
		
	},
	{
		input: "mélopée",
		output: {F: 1},
		
	},
	{
		input: "mélèze",
		output: {M: 1},
		
	},
	{
		input: "méme",
		output: {F: 1},
		
	},
	{
		input: "méme",
		output: {M: 1},
		
	},
	{
		input: "mémento",
		output: {M: 1},
		
	},
	{
		input: "mémo",
		output: {F: 1},
		
	},
	{
		input: "mémo",
		output: {M: 1},
		
	},
	{
		input: "mémoire",
		output: {F: 1},
		
	},
	{
		input: "mémoire",
		output: {M: 1},
		
	},
	{
		input: "mémorable",
		output: {F: 1},
		
	},
	{
		input: "mémorable",
		output: {M: 1},
		
	},
	{
		input: "mémorandum",
		output: {M: 1},
		
	},
	{
		input: "mémorial",
		output: {M: 1},
		
	},
	{
		input: "mémorialiste",
		output: {F: 1},
		
	},
	{
		input: "mémorialiste",
		output: {M: 1},
		
	},
	{
		input: "mémorisation",
		output: {F: 1},
		
	},
	{
		input: "mémé",
		output: {F: 1},
		
	},
	{
		input: "ménade",
		output: {F: 1},
		
	},
	{
		input: "ménage",
		output: {M: 1},
		
	},
	{
		input: "ménagement",
		output: {M: 1},
		
	},
	{
		input: "ménager",
		output: {F: 1},
		
	},
	{
		input: "ménagerie",
		output: {F: 1},
		
	},
	{
		input: "ménagère",
		output: {F: 1},
		
	},
	{
		input: "ménarche",
		output: {F: 1},
		
	},
	{
		input: "ménestrel",
		output: {M: 1},
		
	},
	{
		input: "méningite",
		output: {F: 1},
		
	},
	{
		input: "méningocoque",
		output: {M: 1},
		
	},
	{
		input: "ménippée",
		output: {F: 1},
		
	},
	{
		input: "méniscectomie",
		output: {F: 1},
		
	},
	{
		input: "ménisque",
		output: {M: 1},
		
	},
	{
		input: "ménopause",
		output: {F: 1},
		
	},
	{
		input: "ménétrier",
		output: {M: 1},
		
	},
	{
		input: "méplat",
		output: {M: 1},
		
	},
	{
		input: "mépris",
		output: {M: 1},
		
	},
	{
		input: "méprisant",
		output: {M: 1},
		
	},
	{
		input: "méprise",
		output: {F: 1},
		
	},
	{
		input: "méprise",
		output: {M: 1},
		
	},
	{
		input: "mére",
		output: {F: 1},
		
	},
	{
		input: "méridien",
		output: {M: 1},
		
	},
	{
		input: "méridienne",
		output: {F: 1},
		
	},
	{
		input: "méridional",
		output: {M: 1},
		
	},
	{
		input: "mérinos",
		output: {M: 1},
		
	},
	{
		input: "méristème",
		output: {M: 1},
		
	},
	{
		input: "mérite",
		output: {F: 1},
		
	},
	{
		input: "mérite",
		output: {M: 1},
		
	},
	{
		input: "mérites",
		output: {M: 1},
		
	},
	{
		input: "méritocratie",
		output: {F: 1},
		
	},
	{
		input: "mérou",
		output: {M: 1},
		
	},
	{
		input: "méréologie",
		output: {F: 1},
		
	},
	{
		input: "mésalliance",
		output: {F: 1},
		
	},
	{
		input: "mésange",
		output: {F: 1},
		
	},
	{
		input: "mésaventure",
		output: {F: 1},
		
	},
	{
		input: "mésenchyme",
		output: {M: 1},
		
	},
	{
		input: "mésencéphale",
		output: {M: 1},
		
	},
	{
		input: "mésentente",
		output: {F: 1},
		
	},
	{
		input: "mésentère",
		output: {M: 1},
		
	},
	{
		input: "mésestime",
		output: {F: 1},
		
	},
	{
		input: "mésintelligence",
		output: {F: 1},
		
	},
	{
		input: "mésinterprétation",
		output: {F: 1},
		
	},
	{
		input: "méso",
		output: {F: 1},
		
	},
	{
		input: "méso",
		output: {M: 1},
		
	},
	{
		input: "mésoderme",
		output: {M: 1},
		
	},
	{
		input: "méson",
		output: {M: 1},
		
	}
];

let confirmData = [
    {test: "pouvior", answer: "M"},
    {test: "argent", answer: "M"},
    {test: "ville", answer: "F"},
    {test: "année", answer: "F"},
    {test: "dire", answer: "M"},
]

export default {smallTrainingData, largeTrainingData, confirmData};