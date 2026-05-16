import type { Flashcard } from '../types'

export const flashcards: Flashcard[] = [
  // ── Science Économique ──

  // Fondements
  {
    id: 'fc-fondements-1',
    topicId: 'fondements',
    question: 'Qu\'est-ce que le coût d\'opportunité ?',
    answer: 'Le coût d\'opportunité est la valeur de la meilleure alternative abandonnée lorsqu\'un choix est effectué. Exemple : le coût d\'opportunité d\'étudier à l\'université est le salaire que l\'on aurait pu gagner en travaillant.',
  },
  {
    id: 'fc-fondements-2',
    topicId: 'fondements',
    question: 'Quels sont les agents économiques fondamentaux ?',
    answer: 'Les ménages (consommateurs), les entreprises (productrices), les banques (intermédiaires financiers), l\'État (administration publique), et le reste du monde (agents étrangers).',
  },
  {
    id: 'fc-fondements-3',
    topicId: 'fondements',
    question: 'Qu\'est-ce que la rareté en économie ?',
    answer: 'La rareté signifie que les ressources sont limitées par rapport aux besoins illimités des individus. C\'est le problème fondamental de l\'économie : comment allouer des ressources rares entre des usages alternatifs.',
  },

  // Croissance
  {
    id: 'fc-croissance-1',
    topicId: 'croissance',
    question: 'Qu\'est-ce que le PIB ?',
    answer: 'Le Produit Intérieur Brut (PIB) mesure la valeur totale des biens et services finaux produits sur un territoire donné au cours d\'une période donnée. Il peut être calculé par les approches production, revenu ou dépense.',
  },
  {
    id: 'fc-croissance-2',
    topicId: 'croissance',
    question: 'Quels sont les principaux facteurs de croissance économique ?',
    answer: 'Le travail (quantité et qualité de la main-d\'œuvre), le capital (physique et humain), le progrès technique (innovation, R&D), et les institutions (État de droit, protection de la propriété).',
  },
  {
    id: 'fc-croissance-3',
    topicId: 'croissance',
    question: 'Qu\'est-ce que la productivité globale des facteurs (PGF) ?',
    answer: 'La PGF mesure la part de la croissance qui n\'est pas expliquée par l\'augmentation des facteurs travail et capital. Elle reflète le progrès technique, l\'innovation, et les gains d\'efficacité dans la combinaison des facteurs.',
  },

  // Chômage
  {
    id: 'fc-chomage-1',
    topicId: 'chomage',
    question: 'Quels sont les trois types de chômage selon la classification classique ?',
    answer: 'Le chômage frictionnel (entre deux emplois), le chômage structurel (dû à des inadéquations entre offre et demande de travail), et le chômage conjoncturel (lié aux fluctuations économiques).',
  },
  {
    id: 'fc-chomage-2',
    topicId: 'chomage',
    question: 'Comment le taux de chômage est-il mesuré en France ?',
    answer: 'Le taux de chômage est mesuré par l\'INSEE selon les normes du BIT (Bureau International du Travail) : est chômeur toute personne sans emploi, disponible pour travailler, et qui recherche activement un emploi.',
  },
  {
    id: 'fc-chomage-3',
    topicId: 'chomage',
    question: 'Qu\'est-ce que le chômage structurel ?',
    answer: 'Le chômage structurel résulte d\'une inadéquation durable entre les caractéristiques de l\'offre et de la demande de travail. Causes : progrès technique, mondialisation, délocalisations, inadéquation des qualifications.',
  },

  // Politiques économiques
  {
    id: 'fc-politiques-1',
    topicId: 'politiques-economiques',
    question: 'Quelle est la différence entre politique monétaire et politique budgétaire ?',
    answer: 'La politique monétaire est menée par la banque centrale (BCE) et agit sur les taux d\'intérêt et la masse monétaire. La politique budgétaire est menée par l\'État via le budget (dépenses publiques et impôts).',
  },
  {
    id: 'fc-politiques-2',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce qu\'une politique monétaire expansionniste ?',
    answer: 'Une politique monétaire expansionniste consiste à baisser les taux directeurs ou augmenter la masse monétaire pour stimuler l\'investissement et la consommation, et ainsi relancer l\'économie en période de récession.',
  },
  {
    id: 'fc-politiques-3',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que la « trappe à liquidité » ?',
    answer: 'Situation où les taux d\'intérêt sont proches de zéro et où la politique monétaire devient inefficace : les agents préfèrent détenir de la liquidité plutôt que d\'investir, même avec des taux très bas. Théorisée par Keynes.',
  },

  // Monnaie
  {
    id: 'fc-monnaie-1',
    topicId: 'monnaie',
    question: 'Quelles sont les trois fonctions de la monnaie ?',
    answer: '1) Unité de compte : elle permet de mesurer et comparer la valeur des biens. 2) Intermédiaire des échanges : elle facilite les transactions. 3) Réserve de valeur : elle permet de reporter le pouvoir d\'achat dans le temps.',
  },
  {
    id: 'fc-monnaie-2',
    topicId: 'monnaie',
    question: 'Comment les banques créent-elles de la monnaie ?',
    answer: 'Les banques créent de la monnaie lorsqu\'elles accordent des crédits : le montant du prêt est inscrit au compte du client, créant une nouvelle monnaie scripturale. Le remboursement détruit la monnaie créée.',
  },
  {
    id: 'fc-monnaie-3',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que le quantitative easing (assouplissement quantitatif) ?',
    answer: 'Politique monétaire non conventionnelle où la banque centrale achète massivement des titres (obligations publiques et privées) pour injecter des liquidités dans l\'économie et stimuler le crédit, utilisée quand les taux sont déjà proches de zéro.',
  },

  // Commerce international
  {
    id: 'fc-commerce-1',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que l\'avantage comparatif ?',
    answer: 'Théorie de David Ricardo : un pays a intérêt à se spécialiser dans la production où il est relativement le plus efficace (ou le moins inefficace), même s\'il n\'a aucun avantage absolu. L\'échange est alors mutuellement bénéfique.',
  },
  {
    id: 'fc-commerce-2',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que le protectionnisme ?',
    answer: 'Ensemble de mesures visant à protéger l\'économie nationale de la concurrence étrangère : droits de douane, quotas d\'importation, subventions aux exportations, barrières non tarifaires (normes, procédures administratives).',
  },
  {
    id: 'fc-commerce-3',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que la balance des paiements ?',
    answer: 'Document comptable qui enregistre l\'ensemble des transactions économiques entre un pays et le reste du monde sur une période. Elle comprend le compte courant (biens, services, revenus) et le compte de capital/financier.',
  },

  // Inégalités
  {
    id: 'fc-inegalites-1',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que le coefficient de Gini ?',
    answer: 'Indicateur d\'inégalité des revenus allant de 0 (égalité parfaite : tout le monde a le même revenu) à 1 (inégalité maximale : une personne concentre tous les revenus). Plus il est élevé, plus les inégalités sont fortes.',
  },
  {
    id: 'fc-inegalites-2',
    topicId: 'inegalites',
    question: 'Quels sont les principaux mécanismes de redistribution ?',
    answer: 'La redistribution verticale (des riches vers les pauvres) via l\'impôt progressif sur le revenu, les prestations sociales (RSA, allocations familiales), et les services publics gratuits ou subventionnés (éducation, santé).',
  },
  {
    id: 'fc-inegalites-3',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la courbe de Kuznets ?',
    answer: 'Hypothèse de Simon Kuznets : les inégalités suivent une courbe en U inversé au cours du développement économique — elles augmentent d\'abord pendant l\'industrialisation, puis diminuent avec la maturité économique et l\'État-providence.',
  },

  // ── Sociologie ──

  // Socialisation
  {
    id: 'fc-socialisation-1',
    topicId: 'socialisation',
    question: 'Quelle est la différence entre socialisation primaire et secondaire ?',
    answer: 'La socialisation primaire a lieu durant l\'enfance principalement dans la famille et l\'école. Elle construit les bases de la personnalité. La socialisation secondaire se poursuit à l\'âge adulte via le travail, les pairs, les médias.',
  },
  {
    id: 'fc-socialisation-2',
    topicId: 'socialisation',
    question: 'Quels sont les principaux agents de socialisation ?',
    answer: 'La famille (premier agent, transmission des valeurs fondamentales), l\'école (normes sociales, citoyenneté), les groupes de pairs (culture juvénile, codes sociaux), les médias (représentations, modèles), et le travail (culture professionnelle).',
  },
  {
    id: 'fc-socialisation-3',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la socialisation différenciée selon le genre ?',
    answer: 'Processus par lequel les garçons et les filles reçoivent des normes, valeurs et attentes différentes de la part des agents de socialisation. Exemples : jouets genrés, vêtements, attitudes attendues (garçons courageux, filles douces).',
  },

  // Liens sociaux
  {
    id: 'fc-liens-1',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que le capital social selon Pierre Bourdieu ?',
    answer: 'Le capital social est l\'ensemble des ressources liées à la possession d\'un réseau durable de relations d\'interconnaissance et d\'interreconnaissance. Il peut être mobilisé pour obtenir des avantages (emploi, information, soutien).',
  },
  {
    id: 'fc-liens-2',
    topicId: 'liens-sociaux',
    question: 'Quelle est la distinction de Durkheim entre solidarité mécanique et organique ?',
    answer: 'La solidarité mécanique (sociétés traditionnelles) repose sur la similitude des individus, avec une forte conscience collective. La solidarité organique (sociétés modernes) repose sur la complémentarité et l\'interdépendance liée à la division du travail.',
  },
  {
    id: 'fc-liens-3',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que l\'individualisme méthodologique ?',
    answer: 'Approche sociologique qui explique les phénomènes sociaux à partir des actions, croyances et intentions des individus. Les phénomènes collectifs sont la résultante d\'actions individuelles combinées (effets d\'agrégation).',
  },

  // Stratification
  {
    id: 'fc-stratification-1',
    topicId: 'stratification',
    question: 'Quelle est la conception des classes sociales chez Karl Marx ?',
    answer: 'Marx distingue deux classes principales dans le capitalisme : la bourgeoisie (propriétaires des moyens de production) et le prolétariat (qui vend sa force de travail). Les classes sont définies par leur position dans les rapports de production.',
  },
  {
    id: 'fc-stratification-2',
    topicId: 'stratification',
    question: 'Comment Max Weber conçoit-il la stratification sociale ?',
    answer: 'Weber distingue trois dimensions : la classe (économique : revenu, patrimoine), le statut (social : prestige, honneur), et le parti (politique : pouvoir, influence). Ces dimensions peuvent être indépendantes.',
  },
  {
    id: 'fc-stratification-3',
    topicId: 'stratification',
    question: 'Qu\'est-ce que les PCS (Professions et Catégories Socioprofessionnelles) ?',
    answer: 'Nomenclature de l\'INSEE classant la population en 8 groupes (agriculteurs, artisans, cadres, professions intermédiaires, employés, ouvriers, retraités, inactifs). Elle permet d\'analyser la structure sociale et les inégalités.',
  },

  // Inégalités sociales
  {
    id: 'fc-inegalites-sociales-1',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que la reproduction sociale ?',
    answer: 'Concept de Pierre Bourdieu : tendance à la transmission des positions sociales d\'une génération à l\'autre. Le capital culturel, social et économique des parents influence fortement la trajectoire des enfants, limitant la mobilité sociale.',
  },
  {
    id: 'fc-inegalites-sociales-2',
    topicId: 'inegalites-sociales',
    question: 'Comment mesurer les inégalités de genre dans le travail ?',
    answer: 'Indicateurs : écart de salaire (en France ~15% à poste égal), taux d\'emploi, ségrégation horizontale (métiers féminisés/masculinisés) et verticale (plafond de verre), temps partiel subi, charge mentale et tâches domestiques.',
  },
  {
    id: 'fc-inegalites-sociales-3',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que l\'effet de quartier ?',
    answer: 'Influence du lieu de résidence sur les trajectoires individuelles : accès aux services, qualité des écoles, réseaux sociaux, stigmatisation territoriale. Les quartiers défavorisés peuvent renforcer les inégalités par des effets de contexte.',
  },

  // Mobilité
  {
    id: 'fc-mobilite-1',
    topicId: 'mobilite',
    question: 'Quelle est la différence entre mobilité intragénérationnelle et intergénérationnelle ?',
    answer: 'La mobilité intragénérationnelle compare la position sociale d\'un individu à différents moments de sa vie (évolution de carrière). La mobilité intergénérationnelle compare la position d\'un individu à celle de ses parents.',
  },
  {
    id: 'fc-mobilite-2',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que les tables de mobilité ?',
    answer: 'Tableau croisant la position sociale des individus (en ligne) avec celle de leurs parents (en colonne). La diagonale représente l\'immobilité sociale. Les pourcentages hors diagonale mesurent la mobilité ascendante ou descendante.',
  },
  {
    id: 'fc-mobilite-3',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que la méritocratie ?',
    answer: 'Système où les positions sociales sont attribuées en fonction du mérite individuel (talents, efforts, performances) plutôt que de l\'origine sociale. L\'école est traditionnellement perçue comme le vecteur principal de la méritocratie républicaine.',
  },

  // Travail
  {
    id: 'fc-travail-1',
    topicId: 'travail',
    question: 'Qu\'est-ce que la division du travail selon Durkheim ?',
    answer: 'Pour Durkheim, la division du travail est un fait social qui produit de la solidarité organique dans les sociétés modernes. Elle spécialise les individus et crée une interdépendance qui renforce la cohésion sociale.',
  },
  {
    id: 'fc-travail-2',
    topicId: 'travail',
    question: 'Qu\'est-ce que la précarisation du travail ?',
    answer: 'Processus d\'affaiblissement des garanties liées à l\'emploi : CDD, intérim, temps partiel subi, statuts d\'indépendant fictif. Elle fragilise les trajectoires professionnelles et réduit la protection sociale des travailleurs.',
  },
  {
    id: 'fc-travail-3',
    topicId: 'travail',
    question: 'Comment le numérique transforme-t-il le travail ?',
    answer: 'Développement du télétravail, plateformisation (Uber, Deliveroo), surveillance numérique des salariés, automatisation de certaines tâches, nouvelles formes d\'organisation (management algorithmique), et brouillage des frontières vie pro/perso.',
  },

  // Déviance
  {
    id: 'fc-deviance-1',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la théorie de l\'étiquetage (labeling theory) ?',
    answer: 'Théorie de Becker : la déviance n\'est pas une qualité inhérente à un acte mais le résultat de l\'application de règles et de sanctions par les autres. Un acte devient déviant quand il est étiqueté comme tel par la société ou les institutions.',
  },
  {
    id: 'fc-deviance-2',
    topicId: 'deviance',
    question: 'Qu\'est-ce que l\'anomie selon Durkheim ?',
    answer: 'État de dérèglement social où les normes perdent leur efficacité à guider les comportements. Durkheim l\'associe aux périodes de changement rapide (crise économique, modernisation) et l\'utilise pour expliquer le suicide anomique.',
  },
  {
    id: 'fc-deviance-3',
    topicId: 'deviance',
    question: 'Quelle est la distinction entre déviance primaire et secondaire ?',
    answer: 'La déviance primaire est un acte isolé qui n\'affecte pas l\'identité de l\'individu. La déviance secondaire survient après l\'étiquetage : l\'individu intègre l\'identité déviante et adopte un comportement déviant de façon durable.',
  },

  // ── Regards Croisés ──

  // Développement
  {
    id: 'fc-developpement-1',
    topicId: 'developpement',
    question: 'Qu\'est-ce que l\'IDH (Indice de Développement Humain) ?',
    answer: 'Indicateur composite du PNUD mesurant le développement au-delà du PIB. Il combine trois dimensions : la santé (espérance de vie), l\'éducation (années de scolarisation) et le niveau de vie (RNB par habitant en PPA).',
  },
  {
    id: 'fc-developpement-2',
    topicId: 'developpement',
    question: 'Qu\'est-ce que le développement durable ?',
    answer: 'Développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs. Il repose sur trois piliers : économique, social, et environnemental (planète, profit, personnes).',
  },
  {
    id: 'fc-developpement-3',
    topicId: 'developpement',
    question: 'Qu\'est-ce que la trappe à pauvreté ?',
    answer: 'Mécanisme auto-renforçant qui maintient les individus ou les pays dans la pauvreté : faible revenu → pas d\'épargne → pas d\'investissement (éducation, santé, capital) → faible productivité → faible revenu. Difficile à briser sans aide extérieure.',
  },

  // Emploi
  {
    id: 'fc-emploi-1',
    topicId: 'emploi',
    question: 'Qu\'est-ce que la flexicurité ?',
    answer: 'Modèle danois combinant flexibilité du marché du travail (facilité d\'embauche et licenciement) et sécurité des travailleurs (indemnités généreuses, formation continue, accompagnement personnalisé). Objectif : sécuriser les parcours, pas les postes.',
  },
  {
    id: 'fc-emploi-2',
    topicId: 'emploi',
    question: 'Qu\'est-ce que le taux d\'emploi ?',
    answer: 'Proportion de personnes en emploi dans la population en âge de travailler (15-64 ans). Contrairement au taux de chômage, il tient compte des inactifs. Un taux d\'emploi élevé est un indicateur de bonne santé du marché du travail.',
  },
  {
    id: 'fc-emploi-3',
    topicId: 'emploi',
    question: 'Qu\'est-ce que les politiques actives de l\'emploi ?',
    answer: 'Mesures visant à améliorer le fonctionnement du marché du travail et à faciliter le retour à l\'emploi : formation professionnelle, aides à l\'embauche, accompagnement personnalisé, contrats aidés, et création d\'activités.',
  },

  // Protection sociale
  {
    id: 'fc-protection-1',
    topicId: 'protection-sociale',
    question: 'Quels sont les trois modèles d\'État-providence selon Esping-Andersen ?',
    answer: '1) Modèle libéral (Royaume-Uni, USA) : protection minimale, ciblée sur les plus pauvres. 2) Modèle conservateur-corporatiste (Allemagne, France) : lié au travail, financement par cotisations. 3) Modèle social-démocrate (Suède) : universel, généreux, financé par l\'impôt.',
  },
  {
    id: 'fc-protection-2',
    topicId: 'protection-sociale',
    question: 'Comment le système de protection sociale français est-il financé ?',
    answer: 'Principalement par les cotisations sociales (employeurs et salariés), la CSG (Contribution Sociale Généralisée) et la CRDS, les impôts et taxes affectés, et les subventions de l\'État. La Sécurité Sociale en est le pilier central.',
  },
  {
    id: 'fc-protection-3',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que le principe de subsidiarité dans la protection sociale ?',
    answer: 'Principe selon lequel l\'intervention de l\'État ne doit avoir lieu que lorsque les échelons inférieurs (famille, communauté locale, associations) ne peuvent pas répondre aux besoins. Fondement de l\'État-providence conservateur-corporatiste.',
  },

  // Action publique
  {
    id: 'fc-action-1',
    topicId: 'action-publique',
    question: 'Qu\'est-ce qu\'une politique publique ?',
    answer: 'Ensemble d\'actions menées par les autorités publiques (État, collectivités, UE) pour résoudre un problème identifié comme relevant de l\'intérêt général. Elle comprend : diagnostic, objectifs, instruments, mise en œuvre, évaluation.',
  },
  {
    id: 'fc-action-2',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que l\'évaluation des politiques publiques ?',
    answer: 'Démarche visant à mesurer les effets d\'une politique publique par rapport à ses objectifs. Elle analyse l\'efficacité (résultats atteints ?), l\'efficience (coûts justifiés ?), et la pertinence (problème bien ciblé ?).',
  },
  {
    id: 'fc-action-3',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que la gouvernance multi-niveaux ?',
    answer: 'Système de décision où plusieurs niveaux de pouvoir (européen, national, régional, local) interagissent et coordonnent leurs actions. Caractéristique de l\'Union Européenne où les politiques publiques résultent de négociations verticales et horizontales.',
  },

  // Organisations
  {
    id: 'fc-organisations-1',
    topicId: 'organisations',
    question: 'Quelle est la différence entre hiérarchie et marché selon Coase ?',
    answer: 'Le marché coordonne par les prix et les contrats (coordination décentralisée). La hiérarchie (entreprise) coordonne par l\'autorité et les ordres (coordination centralisée). Le choix dépend des coûts de transaction : le marché a des coûts de recherche et négociation.',
  },
  {
    id: 'fc-organisations-2',
    topicId: 'organisations',
    question: 'Qu\'est-ce que la théorie des coûts de transaction ?',
    answer: 'Théorie d\'Oliver Williamson : toute transaction a des coûts (recherche d\'information, négociation, contrôle). Les institutions (entreprises, contrats) sont conçues pour minimiser ces coûts. La frontière de l\'entreprise dépend de l\'efficacité comparée des modes de coordination.',
  },
  {
    id: 'fc-organisations-3',
    topicId: 'organisations',
    question: 'Qu\'est-ce que le capitalisme de plateforme ?',
    answer: 'Nouveau modèle d\'organisation économique où des plateformes numériques (Amazon, Uber, Airbnb) mettent en relation producteurs et consommateurs sans posséder les actifs physiques. Elles captent de la valeur via les données et les effets de réseau.',
  },

  // Comportementale
  {
    id: 'fc-comportementale-1',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que la rationalité limitée (bounded rationality) ?',
    answer: 'Concept de Herbert Simon : les individus ne sont pas parfaitement rationnels car ils ont des capacités cognitives limitées, une information incomplète, et un temps contraint. Ils cherchent une solution satisfaisante (satisficing) plutôt qu\'optimale.',
  },
  {
    id: 'fc-comportementale-2',
    topicId: 'comportementale',
    question: 'Qu\'est-ce qu\'un nudge (coup de pouce) ?',
    answer: 'Intervention qui modifie le comportement sans interdire ni changer significativement les incitations économiques. Exemples : inscription par défaut à l\'épargne retraite, assiettes plus petites pour réduire les portions, affichage des calories.',
  },
  {
    id: 'fc-comportementale-3',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que le biais de statu quo ?',
    answer: 'Tendance des individus à préférer la situation actuelle et à résister au changement, même quand une alternative serait objectivement meilleure. Explique pourquoi les gens restent dans des options par défaut (assurance, épargne, abonnement).',
  },

  // Environnement
  {
    id: 'fc-environnement-1',
    topicId: 'environnement',
    question: 'Qu\'est-ce que la tragédie des communs ?',
    answer: 'Théorie de Garrett Hardin : une ressource partagée (pâturage, pêcheries) sera surexploitée car chaque individu agit dans son intérêt personnel sans tenir compte du coût collectif. Solution : privatisation, régulation publique, ou gestion communautaire (Elinor Ostrom).',
  },
  {
    id: 'fc-environnement-2',
    topicId: 'environnement',
    question: 'Qu\'est-ce qu\'une externalité négative ?',
    answer: 'Effet négatif d\'une activité économique sur un tiers sans compensation monétaire. Exemple : la pollution d\'une usine affecte la santé des riverains sans que le coût soit inclus dans le prix du produit. Solutions : taxe pigouvienne, normes, marché de quotas.',
  },
  {
    id: 'fc-environnement-3',
    topicId: 'environnement',
    question: 'Qu\'est-ce que le marché des quotas de carbone ?',
    answer: 'Système de plafonnement et échange (cap-and-trade) où un plafond d\'émissions est fixé et des permis échangeables sont distribués. Les entreprises peuvent vendre leurs quotas excédentaires ou en acheter. L\'objectif est de réduire les émissions au moindre coût.',
  },

  // ── Additional cards ──

  // Fondements (suite)
  {
    id: 'fc-fondements-4',
    topicId: 'fondements',
    question: 'Qu\'est-ce que le circuit économique ?',
    answer: 'Représentation simplifiée des flux entre agents économiques (ménages, entreprises, banques, État, reste du monde). Les flux réels (biens, services, travail) et monétaires (revenus, dépenses) circulent en sens inverse entre les agents.',
  },
  {
    id: 'fc-fondements-5',
    topicId: 'fondements',
    question: 'Qu\'est-ce que la loi des rendements décroissants ?',
    answer: 'Principe selon lequel l\'augmentation d\'un facteur de production (travail, capital) à quantité constante des autres facteurs finit par produire des augmentations de plus en plus faibles, puis négatives.',
  },

  // Croissance (suite)
  {
    id: 'fc-croissance-4',
    topicId: 'croissance',
    question: 'Qu\'est-ce que la croissance inclusive ?',
    answer: 'Croissance économique qui bénéficie à l\'ensemble de la population et réduit les inégalités. Elle combine création de richesses, réduction de la pauvreté, protection sociale et opportunités égales pour tous.',
  },
  {
    id: 'fc-croissance-5',
    topicId: 'croissance',
    question: 'Qu\'est-ce que le paradoxe de Solow ?',
    answer: '"On voit des ordinateurs partout sauf dans les statistiques de productivité" (Robert Solow, 1987). Les investissements massifs dans les technologies de l\'information n\'ont pas immédiatement augmenté la productivité mesurée.',
  },

  // Chômage (suite)
  {
    id: 'fc-chomage-4',
    topicId: 'chomage',
    question: 'Qu\'est-ce que le taux d\'emploi ?',
    answer: 'Proportion de personnes en emploi parmi la population en âge de travailler (15-64 ans). Contrairement au taux de chômage, il inclut les inactifs. Un taux d\'emploi élevé indique un marché du travail dynamique.',
  },
  {
    id: 'fc-chomage-5',
    topicId: 'chomage',
    question: 'Qu\'est-ce que les politiques d\'activation du marché du travail ?',
    answer: 'Mesures visant à rendre le retour à l\'emploi plus attractif et efficace : formation professionnelle, accompagnement renforcé, aides à l\'embauche, et conditionnalité des indemnités chômage à la recherche active.',
  },

  // Politiques économiques (suite)
  {
    id: 'fc-politiques-4',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que la règle d\'or budgétaire ?',
    answer: 'Principe selon lequel un État ne devrait emprunter que pour financer des investissements publics (qui bénéficient aux générations futures), et non pour financer des dépenses de fonctionnement courantes.',
  },
  {
    id: 'fc-politiques-5',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que le multiplicateur keynésien ?',
    answer: 'Concept de John Maynard Keynes : une augmentation des dépenses publiques ou des investissements génère une hausse plus que proportionnelle du revenu national, via des effets de relance en cascade (consommation → production → emploi).',
  },

  // Monnaie (suite)
  {
    id: 'fc-monnaie-4',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que la masse monétaire ?',
    answer: 'Quantité totale de monnaie en circulation dans une économie. Elle est mesurée par des agrégats (M1, M2, M3) qui incluent pièces, billets, dépôts bancaires et placements liquides. La BCE contrôle la masse monétaire via ses taux directeurs.',
  },
  {
    id: 'fc-monnaie-5',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que l\'inflation par la demande ?',
    answer: 'Inflation causée par un excès de demande par rapport à l\'offre disponible. Quand la demande globale dépasse les capacités de production, les prix augmentent. Typique des périodes de reprise économique rapide.',
  },

  // Commerce international (suite)
  {
    id: 'fc-commerce-4',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que le dumping social ?',
    answer: 'Pratique consistant à abaisser les coûts de production en réduisant les protections sociales, les salaires ou les droits des travailleurs pour gagner en compétitivité à l\'international. Souvent critiqué dans le cadre de la mondialisation.',
  },
  {
    id: 'fc-commerce-5',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que le commerce intra-branche ?',
    answer: 'Échanges internationaux de produits appartenant à la même branche industrielle (ex : la France exporte et importe des voitures). Il domine le commerce entre pays développés et s\'explique par la différenciation des produits.',
  },

  // Inégalités (suite)
  {
    id: 'fc-inegalites-4',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que le taux de pauvreté ?',
    answer: 'Proportion de la population vivant en dessous du seuil de pauvreté. En France, le seuil est fixé à 60% du revenu médian. En 2022, environ 14% de la population française vivait sous le seuil de pauvreté.',
  },
  {
    id: 'fc-inegalites-5',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la courbe de Lorenz ?',
    answer: 'Représentation graphique de la répartition des revenus ou des patrimoines. Elle compare le pourcentage cumulé de la population (axe x) au pourcentage cumulé des revenus (axe y). Plus elle s\'éloigne de la diagonale, plus les inégalités sont fortes.',
  },

  // ── Sociologie (suite) ──

  // Socialisation (suite)
  {
    id: 'fc-socialisation-4',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la socialisation anticipatrice ?',
    answer: 'Concept de Robert Merton : processus par lequel un individu adopte les valeurs et normes d\'un groupe auquel il souhaite appartenir (groupe de référence), avant même d\'en faire partie. Exemple : un étudiant qui adopte les codes du milieu professionnel visé.',
  },
  {
    id: 'fc-socialisation-5',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que l\'habitus selon Bourdieu ?',
    answer: 'Système de dispositions durables et transposables qui intègre les expériences passées et fonctionne comme une matrice de perceptions, d\'appréciations et d\'actions. Il est le produit de la socialisation et guide les comportements de façon inconsciente.',
  },

  // Liens sociaux (suite)
  {
    id: 'fc-liens-4',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que la sociabilité ?',
    answer: 'Ensemble des relations sociales qu\'un individu entretient avec d\'autres (famille, amis, collègues, voisins). La sociabilité varie selon les milieux sociaux : les classes supérieures ont généralement des réseaux plus étendus et diversifiés.',
  },
  {
    id: 'fc-liens-5',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que la théorie des réseaux sociaux ?',
    answer: 'Approche sociologique qui analyse les relations entre individus comme un réseau de liens (Granovetter, Milgram). Les liens faibles (connaissances) sont souvent plus utiles que les liens forts pour trouver un emploi (force des liens faibles).',
  },

  // Stratification (suite)
  {
    id: 'fc-stratification-4',
    topicId: 'stratification',
    question: 'Comment l\'INSEE définit-elle les catégories socioprofessionnelles ?',
    answer: 'La nomenclature des PCS (Professions et Catégories Socioprofessionnelles) classe la population en 8 groupes : agriculteurs, artisans/commerçants, cadres, professions intermédiaires, employés, ouvriers, retraités, et inactifs. Elle permet d\'analyser la structure sociale.',
  },
  {
    id: 'fc-stratification-5',
    topicId: 'stratification',
    question: 'Qu\'est-ce que l\'homogamie sociale ?',
    answer: 'Tendance des individus à choisir un conjoint appartenant au même milieu social qu\'eux. L\'homogamie est un indicateur de la fermeture des groupes sociaux et contribue à la reproduction sociale.',
  },

  // Inégalités sociales (suite)
  {
    id: 'fc-inegalites-sociales-4',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que la discrimination positive ?',
    answer: 'Politique visant à favoriser certains groupes victimes de discriminations systémiques pour rétablir l\'égalité des chances. Exemples : les zones d\'éducation prioritaires (ZEP), les bourses sur critères sociaux, les quotas dans certaines filières.',
  },
  {
    id: 'fc-inegalites-sociales-5',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que l\'intersectionnalité ?',
    answer: 'Concept de Kimberlé Crenshaw : les discriminations se cumulent et s\'entrecroisent. Une personne peut subir simultanément plusieurs formes de discrimination (genre, origine ethnique, classe sociale) qui interagissent de façon spécifique.',
  },

  // Mobilité (suite)
  {
    id: 'fc-mobilite-4',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que la mobilité observée et la fluidité sociale ?',
    answer: 'La mobilité observée est le taux brut de mobilité mesuré dans les tables. La fluidité sociale (ou mobilité relative) mesure les chances de mobilité à origine sociale donnée, en neutralisant les effets de la structure des emplois.',
  },
  {
    id: 'fc-mobilite-5',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que le déclassement ?',
    answer: 'Situation où un individu occupe une position sociale inférieure à celle de ses parents ou à celle attendue compte tenu de son niveau de diplôme. Phénomène croissant avec la massification scolaire et la hausse du niveau d\'éducation.',
  },

  // Travail (suite)
  {
    id: 'fc-travail-4',
    topicId: 'travail',
    question: 'Qu\'est-ce que le taylorisme ?',
    answer: 'Organisation scientifique du travail (OST) théorisée par Frederick Taylor au début du XXe siècle : division horizontale (parcellisation des tâches) et verticale (séparation conception/exécution), chronométrage, salaire au rendement.',
  },
  {
    id: 'fc-travail-5',
    topicId: 'travail',
    question: 'Qu\'est-ce que l\'économie des plateformes ?',
    answer: 'Modèle économique où des plateformes numériques (Uber, Deliveroo, Fiverr) mettent en relation offreurs et demandeurs de services. Elle brouille la frontière entre salariat et indépendance, et pose des défis en matière de droit du travail et protection sociale.',
  },

  // Déviance (suite)
  {
    id: 'fc-deviance-4',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la carrière déviante selon Becker ?',
    answer: 'Processus par lequel un individu devient progressivement déviant : passage à l\'acte (déviance primaire), étiquetage par la société, adoption de l\'identité déviante (déviance secondaire), et intégration dans une sous-culture déviante.',
  },
  {
    id: 'fc-deviance-5',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la prévention situationnelle ?',
    answer: 'Approche de la criminologie qui vise à réduire les occasions de commettre un délit en modifiant l\'environnement immédiat (éclairage public, caméras de surveillance, serrures renforcées). Elle ne s\'attaque pas aux causes sociales de la déviance.',
  },

  // ── Regards Croisés (suite) ──

  // Développement (suite)
  {
    id: 'fc-developpement-4',
    topicId: 'developpement',
    question: 'Qu\'est-ce que la soutenabilité forte et faible ?',
    answer: 'La soutenabilité faible considère que les capitaux (naturel, physique, humain) sont substituables : on peut détruire du capital naturel si on le compense par du capital technique. La soutenabilité forte pose que certains biens naturels sont irremplaçables.',
  },
  {
    id: 'fc-developpement-5',
    topicId: 'developpement',
    question: 'Qu\'est-ce que l\'indice de Gini mondial ?',
    answer: 'Mesure des inégalités de revenus à l\'échelle mondiale. Bien que les inégalités entre pays aient diminué (grâce à la croissance en Chine et Inde), les inégalités internes aux pays ont augmenté dans de nombreuses régions.',
  },

  // Emploi (suite)
  {
    id: 'fc-emploi-4',
    topicId: 'emploi',
    question: 'Qu\'est-ce que le halo du chômage ?',
    answer: 'Ensemble des personnes qui sont sans emploi mais ne sont pas comptées comme chômeuses au sens du BIT : personnes découragées qui ont arrêté de chercher, personnes disponibles mais qui ne cherchent pas activement, ou qui travaillent quelques heures par semaine.',
  },
  {
    id: 'fc-emploi-5',
    topicId: 'emploi',
    question: 'Qu\'est-ce que le contrat de travail unique ?',
    answer: 'Proposition de réforme visant à remplacer la multiplicité des contrats (CDI, CDD, intérim) par un contrat unique avec des droits progressifs (les indemnités de licenciement augmentent avec l\'ancienneté). Objectif : sécuriser les parcours tout en flexibilisant le marché.',
  },

  // Protection sociale (suite)
  {
    id: 'fc-protection-4',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que la protection sociale contributive et non-contributive ?',
    answer: 'La protection contributive (assurance sociale) est financée par les cotisations sociales et réservée à ceux qui cotisent (retraite, assurance maladie). La protection non-contributive (assistance) est financée par l\'impôt et ouverte à tous sous condition de ressources (RSA, CMU).',
  },
  {
    id: 'fc-protection-5',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que le paradoxe de la redistribution ?',
    answer: 'Observation de Korpi et Palme : les systèmes de protection sociale les plus universalistes (qui bénéficient à tous) sont aussi les plus redistributifs, car ils bénéficient d\'un soutien politique large. Les systèmes ciblés sur les plus pauvres sont souvent moins généreux car moins soutenus.',
  },

  // Action publique (suite)
  {
    id: 'fc-action-4',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que le policy feedback ?',
    answer: 'Concept de Pierson : les politiques publiques créent des effets de retour sur le système politique. Les bénéficiaires d\'une politique (ex : retraités, allocataires) deviennent des soutiens qui la défendent, rendant difficile tout retour en arrière.',
  },
  {
    id: 'fc-action-5',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que l\'instrumentation de l\'action publique ?',
    answer: 'Étude des instruments utilisés par les pouvoirs publics pour mettre en œuvre les politiques : instruments réglementaires (lois, décrets), économiques (taxes, subventions), incitatifs (campagnes, nudges), et conventionnels (labels, chartes).',
  },

  // Organisations (suite)
  {
    id: 'fc-organisations-4',
    topicId: 'organisations',
    question: 'Qu\'est-ce que la gouvernance d\'entreprise ?',
    answer: 'Ensemble des mécanismes qui régissent le fonctionnement et le contrôle des entreprises : conseil d\'administration, assemblée générale des actionnaires, comités d\'audit. Elle vise à aligner les intérêts des dirigeants sur ceux des actionnaires (théorie de l\'agence).',
  },
  {
    id: 'fc-organisations-5',
    topicId: 'organisations',
    question: 'Qu\'est-ce que l\'économie sociale et solidaire (ESS) ?',
    answer: 'Secteur économique regroupant les structures qui poursuivent une utilité sociale plutôt qu\'un profit maximal : associations, coopératives, mutuelles, fondations. Leurs principes : gouvernance démocratique, lucrativité limitée, gestion participative.',
  },

  // Comportementale (suite)
  {
    id: 'fc-comportementale-4',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que l\'aversion aux pertes ?',
    answer: 'Biais cognitif identifié par Kahneman et Tversky : les individus ressentent plus fortement la douleur d\'une perte que le plaisir d\'un gain équivalent (environ 2 fois plus). Ce biais explique des comportements comme la résistance à vendre des actions à perte.',
  },
  {
    id: 'fc-comportementale-5',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que le biais de confirmation ?',
    answer: 'Tendance à rechercher, interpréter et mémoriser les informations qui confirment nos croyances préexistantes, tout en ignorant ou minimisant les informations qui les contredisent. Ce biais affecte les décisions économiques et politiques.',
  },

  // Environnement (suite)
  {
    id: 'fc-environnement-4',
    topicId: 'environnement',
    question: 'Qu\'est-ce que l\'économie circulaire ?',
    answer: 'Modèle économique qui vise à produire des biens et services de manière durable en limitant la consommation de ressources et la production de déchets (réduire, réutiliser, recycler). Elle s\'oppose au modèle linéaire (extraire, produire, jeter).',
  },
  {
    id: 'fc-environnement-5',
    topicId: 'environnement',
    question: 'Qu\'est-ce que la taxe pigouvienne ?',
    answer: 'Taxe proposée par Arthur Pigou visant à internaliser les externalités négatives en faisant payer au pollueur le coût social de la pollution. Le montant de la taxe doit être égal au coût marginal externe pour inciter les agents à réduire leurs émissions.',
  },
]
