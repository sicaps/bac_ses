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

  // ── Batch 3: 5 additional cards per topic ──

  // Fondements (6-10)
  {
    id: 'fc-fondements-6',
    topicId: 'fondements',
    question: 'Qu\'est-ce que la valeur ajoutée ?',
    answer: 'La valeur ajoutée est la richesse créée par une unité productive. Elle se calcule en soustrayant la valeur des consommations intermédiaires (matières premières, services) de la valeur de la production. Elle est répartie entre salaires, impôts, profits et investissements.',
  },
  {
    id: 'fc-fondements-7',
    topicId: 'fondements',
    question: 'Qu\'est-ce que la demande globale ?',
    answer: 'La demande globale est la somme des dépenses prévues par les agents économiques : consommation des ménages, investissement des entreprises, dépenses publiques et exportations nettes. Son niveau détermine la production et l\'emploi à court terme.',
  },
  {
    id: 'fc-fondements-8',
    topicId: 'fondements',
    question: 'Qu\'est-ce que l\'offre globale ?',
    answer: 'L\'offre globale représente la quantité totale de biens et services que les entreprises sont prêtes à produire et vendre à un niveau de prix donné. Elle dépend des coûts de production, de la productivité et des anticipations des entreprises.',
  },
  {
    id: 'fc-fondements-9',
    topicId: 'fondements',
    question: 'Qu\'est-ce que l\'équilibre de marché ?',
    answer: 'Situation où la quantité offerte égale la quantité demandée à un prix donné (prix d\'équilibre). À ce prix, il n\'y a ni excédent ni pénurie. Le marché est dit « équilibré » car les plans des offreurs et des demandeurs coïncident.',
  },
  {
    id: 'fc-fondements-10',
    topicId: 'fondements',
    question: 'Qu\'est-ce que la spécialisation économique ?',
    answer: 'Concentration d\'un agent, d\'une région ou d\'un pays sur la production d\'un nombre limité de biens ou services pour lesquels il dispose d\'un avantage comparatif. Elle permet des gains de productivité et d\'efficacité grâce à l\'échange.',
  },

  // Croissance (6-10)
  {
    id: 'fc-croissance-6',
    topicId: 'croissance',
    question: 'Qu\'est-ce que la croissance endogène ?',
    answer: 'Théorie de la croissance (Romer, Lucas) selon laquelle la croissance est auto-entretenue par l\'accumulation de capital humain, la recherche-développement et les infrastructures publiques. L\'investissement dans ces facteurs génère des externalités positives qui stimulent l\'innovation.',
  },
  {
    id: 'fc-croissance-7',
    topicId: 'croissance',
    question: 'Qu\'est-ce que la destruction créatrice ?',
    answer: 'Concept de Joseph Schumpeter : le progrès technique provoque la disparition d\'activités anciennes (destruction) et la création de nouvelles activités plus productives (création). Ce processus est le moteur du dynamisme économique à long terme.',
  },
  {
    id: 'fc-croissance-8',
    topicId: 'croissance',
    question: 'Qu\'est-ce que le capital humain ?',
    answer: 'Ensemble des connaissances, compétences et aptitudes accumulées par un individu qui augmentent sa productivité potentielle. L\'éducation, la formation professionnelle et l\'expérience sont les principaux moyens d\'accumulation du capital humain (Becker, Schultz).',
  },
  {
    id: 'fc-croissance-9',
    topicId: 'croissance',
    question: 'Qu\'est-ce que les gains de productivité ?',
    answer: 'Augmentation de la quantité produite par unité de facteur utilisé (travail ou capital). Ils proviennent du progrès technique, de l\'amélioration de l\'organisation du travail et de l\'augmentation du capital par tête. Ils sont la source principale de la croissance économique.',
  },
  {
    id: 'fc-croissance-10',
    topicId: 'croissance',
    question: 'Qu\'est-ce que la trappe à la stagnation ?',
    answer: 'Situation décrite par Alvin Hansen puis Larry Summers : une économie peut connaître une stagnation prolongée malgré des taux d\'intérêt très bas, en raison d\'une insuffisance persistante de la demande globale et d\'un excès d\'épargne sur l\'investissement.',
  },

  // Chômage (6-10)
  {
    id: 'fc-chomage-6',
    topicId: 'chomage',
    question: 'Qu\'est-ce que le taux d\'activité ?',
    answer: 'Proportion de la population en âge de travailler (15-64 ans) qui est soit en emploi, soit au chômage (population active). Un taux d\'activité élevé reflète une forte participation au marché du travail.',
  },
  {
    id: 'fc-chomage-7',
    topicId: 'chomage',
    question: 'Qu\'est-ce que le chômage volontaire ?',
    answer: 'Situation où un individu choisit de ne pas travailler au salaire en vigueur, soit parce qu\'il estime que son salaire de réservation est supérieur au salaire proposé, soit parce qu\'il préfère le loisir ou les allocations au travail.',
  },
  {
    id: 'fc-chomage-8',
    topicId: 'chomage',
    question: 'Qu\'est-ce que la théorie de l\'appariement (matching) ?',
    answer: 'Modèle de Pissarides, Mortensen et Diamond : le chômage résulte des frictions sur le marché du travail où employeurs et chômeurs cherchent à s\'apparier. Plus les qualifications sont hétérogènes, plus le processus d\'appariement est long.',
  },
  {
    id: 'fc-chomage-9',
    topicId: 'chomage',
    question: 'Qu\'est-ce que l\'effet de file d\'attente sur le marché du travail ?',
    answer: 'Lorsque le nombre de candidats qualifiés dépasse le nombre de postes disponibles, les employeurs peuvent embaucher des surqualifiés, repoussant les moins qualifiés vers le bas de la file d\'attente, augmentant le chômage pour les moins diplômés.',
  },
  {
    id: 'fc-chomage-10',
    topicId: 'chomage',
    question: 'Qu\'est-ce que la courbe de Phillips ?',
    answer: 'Relation empirique montrant une corrélation négative entre le taux de chômage et le taux d\'inflation. À court terme, une baisse du chômage s\'accompagne d\'une hausse de l\'inflation. Cette relation a été remise en cause dans les années 1970 avec la stagflation.',
  },

  // Politiques économiques (6-10)
  {
    id: 'fc-politiques-6',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que la relance budgétaire ?',
    answer: 'Politique économique visant à stimuler l\'activité par une augmentation des dépenses publiques ou une baisse des impôts. Elle repose sur l\'idée keynésienne que l\'État peut compenser une insuffisance de la demande privée en période de récession.',
  },
  {
    id: 'fc-politiques-7',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que la politique de l\'offre ?',
    answer: 'Politique économique visant à stimuler la croissance en améliorant les conditions de production des entreprises : baisse des charges et impôts, déréglementation, flexibilisation du marché du travail. Elle mise sur l\'investissement et l\'innovation plutôt que sur la demande.',
  },
  {
    id: 'fc-politiques-8',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que la règle de Taylor ?',
    answer: 'Règle de politique monétaire proposée par John Taylor : la banque centrale ajuste ses taux d\'intérêt en fonction de l\'écart d\'inflation par rapport à la cible et de l\'écart de production par rapport au potentiel. Elle guide les décisions de politique monétaire.',
  },
  {
    id: 'fc-politiques-9',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que la politique monétaire non conventionnelle ?',
    answer: 'Mesures prises par une banque centrale quand les taux directeurs sont proches de zéro et inefficaces : quantitative easing (achats massifs d\'actifs), taux négatifs, forward guidance (engagement sur la politique future). Utilisées après 2008 et 2020.',
  },
  {
    id: 'fc-politiques-10',
    topicId: 'politiques-economiques',
    question: 'Qu\'est-ce que le policy mix ?',
    answer: 'Combinaison des politiques monétaire et budgétaire pour atteindre les objectifs économiques (croissance, emploi, stabilité des prix). Un policy mix cohérent suppose une coordination entre la banque centrale et le gouvernement.',
  },

  // Monnaie (6-10)
  {
    id: 'fc-monnaie-6',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que la monnaie fiduciaire ?',
    answer: 'Monnaie qui n\'a pas de valeur intrinsèque mais qui est acceptée comme moyen de paiement parce qu\'elle est garantie par l\'État et la confiance des agents. Il s\'agit des pièces et billets, dont la valeur faciale dépasse largement la valeur du métal.',
  },
  {
    id: 'fc-monnaie-7',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que la monnaie scripturale ?',
    answer: 'Monnaie dématérialisée inscrite sur les comptes bancaires et utilisée par chèques, virements et paiements électroniques. Elle représente aujourd\'hui plus de 90% de la masse monétaire en circulation dans les économies développées.',
  },
  {
    id: 'fc-monnaie-8',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que le multiplicateur de crédit ?',
    answer: 'Mécanisme par lequel la création monétaire par les banques dépasse le montant initial des dépôts. Si le taux de réserves obligatoires est de 10%, une banque peut créer 9 fois le montant d\'un dépôt initial par l\'octroi de crédits successifs.',
  },
  {
    id: 'fc-monnaie-9',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que l\'inflation sous-jacente ?',
    answer: 'Mesure de l\'inflation qui exclut les prix les plus volatils (énergie, produits frais) pour dégager une tendance de fond. Elle est suivie par les banques centrales pour évaluer l\'évolution durable des prix et ajuster leur politique monétaire.',
  },
  {
    id: 'fc-monnaie-10',
    topicId: 'monnaie',
    question: 'Qu\'est-ce que la déflation ?',
    answer: 'Baisse générale et durable du niveau des prix. Contrairement à l\'inflation, la déflation est dangereuse car elle incite les agents à reporter leurs achats (anticipation de baisse future), ce qui réduit la demande, la production et l\'emploi, créant une spirale dépressive.',
  },

  // Commerce international (6-10)
  {
    id: 'fc-commerce-6',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que le protectionnisme éducateur ?',
    answer: 'Théorie de Friedrich List : un pays en développement doit protéger temporairement ses industries naissantes de la concurrence internationale pour leur permettre de monter en compétence. Une fois matures, ces industries peuvent être exposées à la concurrence.',
  },
  {
    id: 'fc-commerce-7',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que la chaîne de valeur mondiale ?',
    answer: 'Décomposition internationale du processus productif : les différentes étapes de fabrication d\'un bien sont réparties entre plusieurs pays en fonction de leurs avantages comparatifs. Exemple : un iPhone conçu aux États-Unis, assemblé en Chine, avec des composants de divers pays.',
  },
  {
    id: 'fc-commerce-8',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que le taux de change ?',
    answer: 'Prix d\'une monnaie exprimé dans une autre monnaie. Il peut être fixe (fixé par l\'État) ou flottant (déterminé par l\'offre et la demande sur le marché des changes). Un taux de change élevé (appréciation) renchérit les exportations.',
  },
  {
    id: 'fc-commerce-9',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que la parité de pouvoir d\'achat (PPA) ?',
    answer: 'Théorie selon laquelle, à long terme, les taux de change s\'ajustent pour que les mêmes biens aient le même prix dans différents pays (loi du prix unique). Utilisée pour comparer le niveau de vie entre pays en neutralisant les différences de prix.',
  },
  {
    id: 'fc-commerce-10',
    topicId: 'commerce-international',
    question: 'Qu\'est-ce que la spécialisation intra-branche ?',
    answer: 'Échanges de produits similaires entre pays de même niveau de développement (ex: la France exporte des voitures Peugeot vers l\'Allemagne et importe des BMW). Elle repose sur la différenciation des produits et les économies d\'échelle.',
  },

  // Inégalités (6-10)
  {
    id: 'fc-inegalites-6',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la distribution primaire des revenus ?',
    answer: 'Rémunération directe des facteurs de production : les salaires pour le travail, les profits et intérêts pour le capital. Elle résulte du fonctionnement du marché et des rapports de force entre employeurs et employés.',
  },
  {
    id: 'fc-inegalites-7',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la distribution secondaire des revenus ?',
    answer: 'Redistribution des revenus par l\'État via les impôts et les transferts sociaux. Elle vise à corriger les inégalités créées par la distribution primaire en prélevant sur les hauts revenus et en versant des prestations aux plus modestes.',
  },
  {
    id: 'fc-inegalites-8',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la pauvreté relative et absolue ?',
    answer: 'La pauvreté absolue est définie par un seuil fixe (ex: $2,15/jour en PPA) et mesure l\'incapacité à satisfaire les besoins vitaux. La pauvreté relative est définie par rapport au niveau de vie médian du pays (ex: 60% du revenu médian en France).',
  },
  {
    id: 'fc-inegalites-9',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la courbe de Lorenz ?',
    answer: 'Représentation graphique de la répartition des revenus : elle compare le pourcentage cumulé de la population (axe x) au pourcentage cumulé des revenus (axe y). Plus la courbe s\'éloigne de la diagonale d\'égalité parfaite, plus les inégalités sont fortes.',
  },
  {
    id: 'fc-inegalites-10',
    topicId: 'inegalites',
    question: 'Qu\'est-ce que la progressivité de l\'impôt ?',
    answer: 'Caractéristique d\'un impôt dont le taux moyen augmente avec le revenu imposable. L\'impôt sur le revenu en France est progressif : plus le revenu est élevé, plus la part prélevée est importante. C\'est un instrument puissant de redistribution.',
  },

  // ── Sociologie batch 3 ──

  // Socialisation (6-10)
  {
    id: 'fc-socialisation-6',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la socialisation politique ?',
    answer: 'Processus par lequel les individus intériorisent les valeurs, normes et comportements politiques de leur société. Elle se fait via la famille, l\'école, les médias et les pairs. Elle explique la formation des opinions et des orientations politiques.',
  },
  {
    id: 'fc-socialisation-7',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la transmission intergénérationnelle des valeurs ?',
    answer: 'Processus par lequel les parents transmettent à leurs enfants des valeurs, normes et croyances. Elle peut se faire de façon consciente (éducation explicite) ou inconsciente (imitation, climat familial). Elle contribue à la reproduction sociale.',
  },
  {
    id: 'fc-socialisation-8',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la socialisation professionnelle ?',
    answer: 'Processus d\'apprentissage des normes, valeurs et savoir-faire propres à un métier ou une profession. Elle se déroule pendant la formation initiale, l\'apprentissage sur le terrain et l\'intégration dans une culture professionnelle.',
  },
  {
    id: 'fc-socialisation-9',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la socialisation de genre ?',
    answer: 'Processus par lequel les individues apprennent les comportements, attitudes et rôles considérés comme appropriés à leur sexe social. Les agents de socialisation (famille, école, médias) transmettent des attentes différenciées dès la petite enfance.',
  },
  {
    id: 'fc-socialisation-10',
    topicId: 'socialisation',
    question: 'Qu\'est-ce que la résocialisation ?',
    answer: 'Processus par lequel un individu abandonne un ensemble de normes et valeurs pour en adopter de nouveaux, souvent dans un cadre institutionnel contraignant. Exemples : entrée en prison, conversion religieuse, intégration dans une secte.',
  },

  // Liens sociaux (6-10)
  {
    id: 'fc-liens-6',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que le lien de filiation ?',
    answer: 'Lien social fondé sur la parenté et la transmission entre générations. Il repose sur des liens biologiques et/ou juridiques, et constitue le premier cadre de socialisation de l\'individu. Il a été profondément transformé par les évolutions familiales (familles recomposées, homoparentalité).',
  },
  {
    id: 'fc-liens-7',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que le lien de participation élective ?',
    answer: 'Lien social choisi, fondé sur l\'affinité et la volonté des individus (amitiés, amour, associations). Il se distingue des liens hérités (famille) et des liens organiques (travail). Il est devenu plus important dans les sociétés individualistes modernes.',
  },
  {
    id: 'fc-liens-8',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que le lien de participation organique ?',
    answer: 'Lien social fondé sur l\'interdépendance fonctionnelle entre les individus dans la division du travail. Théorisé par Durkheim comme fondement de la solidarité organique dans les sociétés modernes, il relie les individus par leur complémentarité professionnelle.',
  },
  {
    id: 'fc-liens-9',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que la théorie des réseaux empathiques (Dunbar) ?',
    answer: 'Théorie selon laquelle le nombre de relations sociales stables qu\'un individu peut entretenir est limité par la taille de son néocortex (environ 150 personnes, nombre de Dunbar). Au-delà, les relations devent plus superficielles et moins engageantes.',
  },
  {
    id: 'fc-liens-10',
    topicId: 'liens-sociaux',
    question: 'Qu\'est-ce que l\'individualisation des liens sociaux ?',
    answer: 'Processus par lequel les individus deviennent plus autonomes dans le choix et la gestion de leurs relations sociales, mais aussi plus vulnérables face aux ruptures. Les liens deviennent plus électifs, plus fragiles, et moins encadrés par la tradition.',
  },

  // Stratification (6-10)
  {
    id: 'fc-stratification-6',
    topicId: 'stratification',
    question: 'Qu\'est-ce que l\'approche de l\'école de Chicago ?',
    answer: 'Courant sociologique américain qui a développé une analyse de la stratification sociale en termes de mobilité et d\'intégration des immigrants. Elle distingue les groupes ethniques et professionnels dans une perspective d\'écologie urbaine.',
  },
  {
    id: 'fc-stratification-7',
    topicId: 'stratification',
    question: 'Qu\'est-ce que la moyennisation de la société ?',
    answer: 'Thèse d\'Henri Mendras selon laquelle la société française du XXe siècle a vu la réduction des extrêmes et l\'expansion des classes moyennes, créant une « toupie » sociale avec un vaste milieu central et des franges réduites en haut et en bas.',
  },
  {
    id: 'fc-stratification-8',
    topicId: 'stratification',
    question: 'Qu\'est-ce que la polarisation sociale ?',
    answer: 'Phénomène inverse de la moyennisation : accroissement des écarts entre les catégories sociales les plus riches et les plus pauvres, avec érosion des classes moyennes. Observée dans plusieurs pays développés depuis les années 1980.',
  },
  {
    id: 'fc-stratification-9',
    topicId: 'stratification',
    question: 'Qu\'est-ce que la nomenclature des CSP ?',
    answer: 'Classification historique de l\'INSEE en Catégories Socio-Professionnelles, remplacée par les PCS en 1982. Elle distinguait 9 groupes (agriculteurs, patrons, cadres supérieurs, cadres moyens, employés, ouvriers, personnels de service, autres actifs, inactifs).',
  },
  {
    id: 'fc-stratification-10',
    topicId: 'stratification',
    question: 'Qu\'est-ce que l\'échelle de prestige professionnel ?',
    answer: 'Mesure du prestige associé à chaque profession, construite à partir d\'enquêtes d\'opinion. Les professions intellectuelles et scientifiques sont généralement les plus prestigieuses, tandis que les métiers manuels peu qualifiés sont en bas de l\'échelle.',
  },

  // Inégalités sociales (6-10)
  {
    id: 'fc-inegalites-sociales-6',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que l\'exclusion sociale ?',
    answer: 'Processus de marginalisation qui prive certains individus ou groupes de la participation à la vie sociale, économique et politique. Elle cumule souvent précarité économique, isolement relationnel et stigmatisation.',
  },
  {
    id: 'fc-inegalites-sociales-7',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que le plafond de verre ?',
    answer: 'Métaphore désignant les barrières invisibles mais réelles qui empêchent les femmes (ou d\'autres groupes discriminés) d\'accéder aux postes de pouvoir et de direction, malgré des compétences égales. Il résulte de stéréotypes, de préjugés et de biais structurels.',
  },
  {
    id: 'fc-inegalites-sociales-8',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que la ségrégation spatiale ?',
    answer: 'Séparation physique de groupes sociaux ou ethniques dans l\'espace urbain. Elle se traduit par une concentration de certaines populations dans des quartiers spécifiques, souvent liée aux inégalités économiques et aux choix résidentiels contraints.',
  },
  {
    id: 'fc-inegalites-sociales-9',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que la discrimination systémique ?',
    answer: 'Forme de discrimination ancrée dans les structures et le fonctionnement normal des institutions (marché du travail, système scolaire, logement). Elle n\'a pas besoin d\'acteurs intentionnellement discriminants pour se reproduire.',
  },
  {
    id: 'fc-inegalites-sociales-10',
    topicId: 'inegalites-sociales',
    question: 'Qu\'est-ce que l\'empowerment (capacitation) ?',
    answer: 'Processus par lequel des individus ou groupes dominés acquièrent le pouvoir d\'agir sur leur propre vie. Il combine prise de conscience, acquisition de compétences et participation collective. Concept clé des politiques sociales et du développement.',
  },

  // Mobilité (6-10)
  {
    id: 'fc-mobilite-6',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que la mobilité sociale absolue et relative ?',
    answer: 'La mobilité absolue mesure les changements de position entre générations sans tenir compte de la structure des emplois. La mobilité relative (ou fluidité sociale) mesure les chances de mobilité à origine sociale donnée, tous les effets structurels neutralisés.',
  },
  {
    id: 'fc-mobilite-7',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que l\'origine sociale ?',
    answer: 'Position sociale des parents d\'un individu, généralement mesurée par la profession du père, de la mère ou la PCS du ménage. Elle est la variable explicative la plus utilisée dans l\'étude de la mobilité sociale et des inégalités de destins.',
  },
  {
    id: 'fc-mobilite-8',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que le capital culturel institutionnalisé ?',
    answer: 'Forme de capital culturel (Bourdieu) constituée par les titres scolaires et diplômes. Il transforme le capital culturel hérité en reconnaissance institutionnelle légitime, et joue un rôle clé dans la reproduction sociale.',
  },
  {
    id: 'fc-mobilite-9',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que l\'inflation des diplômes ?',
    answer: 'Phénomène de hausse générale du niveau d\'éducation de la population, qui entraîne une dévalorisation relative des diplômes : un baccalauréat donne accès à des emplois moins qualifiés qu\'auparavant car il est devenu plus courant.',
  },
  {
    id: 'fc-mobilite-10',
    topicId: 'mobilite',
    question: 'Qu\'est-ce que la mobilité sociale paradoxale ?',
    answer: 'Situation où un individu connaît une mobilité sociale ascendante en termes de position professionnelle mais vit cette ascension comme un déclassement subjectif, par exemple quand le statut attendu (compte tenu du diplôme) n\'est pas atteint.',
  },

  // Travail (6-10)
  {
    id: 'fc-travail-6',
    topicId: 'travail',
    question: 'Qu\'est-ce que le fordisme ?',
    answer: 'Modèle de production de masse combinant les principes du taylorisme (parcellisation des tâches) et le travail à la chaîne, associé à des hausses de salaires (les « five dollars a day » de Ford). Il a dominé les Trente Glorieuses.',
  },
  {
    id: 'fc-travail-7',
    topicId: 'travail',
    question: 'Qu\'est-ce que le toyotisme ?',
    answer: 'Modèle d\'organisation productive développé par Toyota : production au plus juste (juste-à-temps, lean management), polyvalence des ouvriers, cercles de qualité, amélioration continue (kaizen). Il a diffusé à partir des années 1970-80.',
  },
  {
    id: 'fc-travail-8',
    topicId: 'travail',
    question: 'Qu\'est-ce que la segmentation du marché du travail ?',
    answer: 'Théorie (Doeringer et Piore) qui distingue un marché primaire (emplois stables, bien rémunérés, avec perspectives de carrière) et un marché secondaire (emplois précaires, faiblement rémunérés, sans perspective). La mobilité entre les deux est limitée.',
  },
  {
    id: 'fc-travail-9',
    topicId: 'travail',
    question: 'Qu\'est-ce que la qualité de l\'emploi ?',
    answer: 'Notion multidimensionnelle qui ne se limite pas au salaire : elle inclut la sécurité de l\'emploi, les conditions de travail, l\'autonomie, le sens du travail, les perspectives de carrière, l\'équilibre vie professionnelle/vie personnelle.',
  },
  {
    id: 'fc-travail-10',
    topicId: 'travail',
    question: 'Qu\'est-ce que le télétravail ?',
    answer: 'Forme d\'organisation du travail où le salarié exerce son activité professionnelle en dehors des locaux de l\'employeur, généralement depuis son domicile, en utilisant les technologies de l\'information et de la communication.',
  },

  // Déviance (6-10)
  {
    id: 'fc-deviance-6',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la théorie de la tension (Merton) ?',
    answer: 'Robert Merton explique la déviance par le décalage entre les buts culturels (réussite matérielle) et les moyens institutionnalisés pour les atteindre. Face à cette tension, l\'individu peut innover (chercher des moyens illégitimes), se rebeller, ou se retirer.',
  },
  {
    id: 'fc-deviance-7',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la fenêtre de Wilson (broken windows theory) ?',
    answer: 'Théorie de Wilson et Kelling : les signes visibles de désordre (vitres cassées, graffitis, incivilités) encouragent des comportements déviants plus graves en envoyant un signal d\'absence de contrôle social. Elle a inspiré des politiques de tolérance zéro.',
  },
  {
    id: 'fc-deviance-8',
    topicId: 'deviance',
    question: 'Qu\'est-ce que le contrôle social formel et informel ?',
    answer: 'Le contrôle social formel est exercé par les institutions spécialisées (police, justice, prison). Le contrôle social informel est diffus et exercé par le groupe social (famille, pairs, voisinage) via la réprobation, la moquerie ou l\'exclusion.',
  },
  {
    id: 'fc-deviance-9',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la déviance positive (Merton) ?',
    answer: 'Concept de Merton : comportement qui s\'écarte des normes sociales mais qui est valorisé car il contribue au progrès social. Exemples : les innovateurs, les artistes d\'avant-garde, les lanceurs d\'alerte. La déviance n\'est donc pas nécessairement négative.',
  },
  {
    id: 'fc-deviance-10',
    topicId: 'deviance',
    question: 'Qu\'est-ce que la panique morale ?',
    answer: 'Concept de Stanley Cohen : réaction sociale excessive et disproportionnée face à un phénomène perçu comme une menace pour l\'ordre social, souvent amplifiée par les médias et les acteurs politiques. Exemple : la « délinquance des mineurs » dans les années 2000.',
  },

  // ── Regards Croisés batch 3 ──

  // Développement (6-10)
  {
    id: 'fc-developpement-6',
    topicId: 'developpement',
    question: 'Qu\'est-ce que la transition démographique ?',
    answer: 'Théorie démographique qui décrit le passage d\'un régime de forte natalité et forte mortalité à un régime de faible natalité et faible mortalité. Elle passe par une phase de forte croissance démographique quand la mortalité baisse avant la natalité.',
  },
  {
    id: 'fc-developpement-7',
    topicId: 'developpement',
    question: 'Qu\'est-ce que l\'indice de pauvreté multidimensionnelle (IPM) ?',
    answer: 'Indicateur développé par l\'ONU et Oxford Poverty & Human Development Initiative, qui mesure la pauvreté selon 3 dimensions (santé, éducation, niveau de vie) avec 10 indicateurs. Il complète les mesures monétaires de la pauvreté.',
  },
  {
    id: 'fc-developpement-8',
    topicId: 'developpement',
    question: 'Qu\'est-ce que la malédiction des ressources naturelles ?',
    answer: 'Paradoxe selon lequel les pays riches en ressources naturelles (pétrole, diamants) ont souvent une croissance plus faible et des institutions plus faibles que les pays pauvres en ressources. Causes : corruption, instabilité politique, maladie hollandaise.',
  },
  {
    id: 'fc-developpement-9',
    topicId: 'developpement',
    question: 'Qu\'est-ce que la substitution d\'importations ?',
    answer: 'Stratégie de développement économique visant à remplacer les importations par une production locale, en protégeant les industries naissantes par des barrières douanières. Adoptée par de nombreux pays d\'Amérique latine et d\'Asie dans les années 1950-70.',
  },
  {
    id: 'fc-developpement-10',
    topicId: 'developpement',
    question: 'Qu\'est-ce que la Conditionnalité des aides internationales ?',
    answer: 'Pratique des institutions financières internationales (FMI, Banque mondiale) qui conditionnent leurs prêts à la mise en œuvre de réformes économiques et politiques par les pays bénéficiaires (plans d\'ajustement structurel, bonne gouvernance).',
  },

  // Emploi (6-10)
  {
    id: 'fc-emploi-6',
    topicId: 'emploi',
    question: 'Qu\'est-ce que le service public de l\'emploi ?',
    answer: 'Ensemble des organismes publics chargés de l\'accompagnement des chômeurs et de la mise en relation avec les employeurs. En France : France Travail (ex-Pôle emploi) pour l\'indemnisation et le placement, et les missions locales pour les jeunes.',
  },
  {
    id: 'fc-emploi-7',
    topicId: 'emploi',
    question: 'Qu\'est-ce que la formation professionnelle continue ?',
    answer: 'Système permettant aux actifs de se former tout au long de leur vie professionnelle pour maintenir ou développer leurs compétences. En France, elle est financée par les entreprises (via les OPCO) et gérée par le Compte Personnel de Formation (CPF).',
  },
  {
    id: 'fc-emploi-8',
    topicId: 'emploi',
    question: 'Qu\'est-ce que le Revenu de Solidarité Active (RSA) ?',
    answer: 'Prestation sociale française qui garantit un revenu minimum aux personnes sans ressources. Elle est conditionnée à l\'âge (25 ans ou plus, sauf exceptions) et à la résidence en France. Depuis 2023, elle est accompagnée d\'obligations d\'activité renforcées.',
  },
  {
    id: 'fc-emploi-9',
    topicId: 'emploi',
    question: 'Qu\'est-ce que l\'insertion professionnelle ?',
    answer: 'Processus par lequel un individu accède à un emploi stable et s\'intègre durablement sur le marché du travail. Elle est particulièrement difficile pour les jeunes, les personnes peu qualifiées et les habitants des quartiers prioritaires.',
  },
  {
    id: 'fc-emploi-10',
    topicId: 'emploi',
    question: 'Qu\'est-ce que la GPEC (Gestion Prévisionnelle des Emplois et des Compétences) ?',
    answer: 'Démarche de gestion des ressources humaines visant à anticiper les besoins en emplois et compétences pour adapter les effectifs aux évolutions de l\'entreprise. Elle permet de prévoir les recrutements, formations et mobilités nécessaires.',
  },

  // Protection sociale (6-10)
  {
    id: 'fc-protection-6',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que la Sécurité Sociale ?',
    answer: 'Système français de protection sociale créé en 1945, qui couvre les risques maladie, maternité, invalidité, vieillesse, accident du travail et charges de famille. Il est financé par les cotisations sociales et géré par les partenaires sociaux.',
  },
  {
    id: 'fc-protection-7',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que le trou de la Sécu ?',
    answer: 'Expression désignant le déficit du régime général de la Sécurité Sociale, quand les dépenses (prestations) dépassent les recettes (cotisations). Ce déficit est financé par l\'emprunt et fait l\'objet de plans de redressement réguliers.',
  },
  {
    id: 'fc-protection-8',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que la retraite par répartition ?',
    answer: 'Système de retraite où les cotisations des actifs financent les pensions des retraités (solidarité entre générations). Il s\'oppose à la retraite par capitalisation où chaque individu épargne pour sa propre retraite. La France fonctionne principalement par répartition.',
  },
  {
    id: 'fc-protection-9',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que le minimum vieillesse (ASPA) ?',
    answer: 'Allocation de Solidarité aux Personnes Âgées (ASPA), anciennement « minimum vieillesse » : prestation française destinée aux personnes âgées disposant de faibles revenus. Elle garantit un niveau de vie minimum aux retraités modestes.',
  },
  {
    id: 'fc-protection-10',
    topicId: 'protection-sociale',
    question: 'Qu\'est-ce que la cinquième branche de la Sécurité Sociale ?',
    answer: 'Branche « autonomie » créée en 2020 pour financer la dépendance des personnes âgées et handicapées. Elle complète les quatre branches historiques (maladie, vieillesse, famille, accidents du travail) et est financée par la CSG et la solidarité nationale.',
  },

  // Action publique (6-10)
  {
    id: 'fc-action-6',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que le lobbying ?',
    answer: 'Activité d\'influence exercée par des groupes d\'intérêt (entreprises, syndicats, associations) sur les pouvoirs publics pour orienter les décisions politiques et réglementaires dans leur sens. Il est encadré par des règles de transparence.',
  },
  {
    id: 'fc-action-7',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que l\'européanisation des politiques publiques ?',
    answer: 'Processus par lequel les politiques publiques nationales sont influencées, contraintes ou alignées sur les normes et directives de l\'Union Européenne. Elle concerne des domaines variés : concurrence, environnement, agriculture, monnaie.',
  },
  {
    id: 'fc-action-8',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que l\'évaluation participative ?',
    answer: 'Démarche d\'évaluation des politiques publiques qui associe les citoyens, usagers et parties prenantes à toutes les étapes (diagnostic, analyse, recommandations). Elle vise à renforcer la démocratie participative et l\'efficacité des politiques.',
  },
  {
    id: 'fc-action-9',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que le référendum d\'initiative partagée (RIP) ?',
    answer: 'Procédure française de démocratie semi-directe introduite en 2008 : un référendum peut être organisé sur proposition d\'un cinquième des parlementaires soutenue par un dixième des électeurs inscrits. Il permet aux citoyens de provoquer une consultation sur une loi.',
  },
  {
    id: 'fc-action-10',
    topicId: 'action-publique',
    question: 'Qu\'est-ce que la bureaucratie selon Max Weber ?',
    answer: 'Forme d\'organisation administrative caractérisée par : division du travail, hiérarchie, règles écrites, impersonnalité, recrutement par concours. Pour Weber, elle est la forme la plus rationnelle et efficace d\'organisation, mais peut dégénérer en « cage de fer ».',
  },

  // Organisations (6-10)
  {
    id: 'fc-organisations-6',
    topicId: 'organisations',
    question: 'Qu\'est-ce que la théorie de l\'agence ?',
    answer: 'Théorie économique qui analyse les relations entre un mandant (principal, ex: actionnaires) et un mandataire (agent, ex: dirigeants) aux intérêts divergents. Elle étudie les mécanismes d\'incitation et de contrôle pour réduire les coûts d\'agence.',
  },
  {
    id: 'fc-organisations-7',
    topicId: 'organisations',
    question: 'Qu\'est-ce que l\'économie des conventions ?',
    answer: 'Courant économique qui étudie comment les acteurs coordonnent leurs actions via des conventions (règles partagées, normes implicites). Les conventions permettent de résoudre des problèmes de coordination dans des situations d\'incertitude.',
  },
  {
    id: 'fc-organisations-8',
    topicId: 'organisations',
    question: 'Qu\'est-ce que la RSE (Responsabilité Sociale des Entreprises) ?',
    answer: 'Démarche volontaire des entreprises qui intègrent des préoccupations sociales, environnementales et éthiques dans leurs activités. Elle dépasse les obligations légales et vise à concilier performance économique et responsabilité sociétale.',
  },
  {
    id: 'fc-organisations-9',
    topicId: 'organisations',
    question: 'Qu\'est-ce que l\'entreprise libérée ?',
    answer: 'Concept de management (Isaac Getz) où les salariés disposent d\'une grande autonomie et sont responsabilisés, sans hiérarchie lourde ni contrôles excessifs. L\'objectif est de libérer l\'initiative et l\'intelligence collective.',
  },
  {
    id: 'fc-organisations-10',
    topicId: 'organisations',
    question: 'Qu\'est-ce que la théorie des parties prenantes (stakeholders) ?',
    answer: 'Théorie de Freeman : une entreprise ne doit pas seulement satisfaire ses actionnaires (shareholders) mais aussi l\'ensemble des parties prenantes : salariés, clients, fournisseurs, collectivités, ONG. Elle fonde la RSE et la gouvernance élargie.',
  },

  // Comportementale (6-10)
  {
    id: 'fc-comportementale-6',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que l\'heuristique de disponibilité ?',
    answer: 'Biais cognitif (Kahneman & Tversky) : les individus jugent la fréquence ou la probabilité d\'un événement en fonction de la facilité avec laquelle des exemples leur viennent à l\'esprit. Un événement spectaculaire récent sera surestimé.',
  },
  {
    id: 'fc-comportementale-7',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que l\'effet d\'ancrage ?',
    answer: 'Biais cognitif où une information initiale (l\'ancre) influence fortement les jugements ultérieurs, même si elle est arbitraire. Exemple : le prix affiché initialement dans une négociation influence l\'évaluation de l\'offre finale.',
  },
  {
    id: 'fc-comportementale-8',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que le paradoxe de l\'épargne (Keynes) ?',
    answer: 'Aussi appelé « paradoxe de la thrift » : si tous les individus épargnent davantage en période de récession, la demande globale baisse, ce qui réduit la production et l\'emploi, et donc l\'épargne totale peut baisser au lieu d\'augmenter.',
  },
  {
    id: 'fc-comportementale-9',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que le biais d\'optimisme ?',
    answer: 'Tendance des individus à surestimer la probabilité d\'événements positifs et à sous-estimer la probabilité d\'événements négatifs les concernant. Ce biais affecte les décisions financières, l\'entrepreneuriat et les comportements de santé.',
  },
  {
    id: 'fc-comportementale-10',
    topicId: 'comportementale',
    question: 'Qu\'est-ce que la théorie du coup de pouce (nudge) ?',
    answer: 'Concept de Thaler et Sunstein : des modifications mineures de l\'environnement de choix peuvent influencer les comportements sans restreindre les libertés. Exemples : défaut d\'inscription à l\'épargne retraite, assiettes plus petites pour réduire les portions.',
  },

  // Environnement (6-10)
  {
    id: 'fc-environnement-6',
    topicId: 'environnement',
    question: 'Qu\'est-ce que l\'accord de Paris sur le climat ?',
    answer: 'Traité international signé en 2015 lors de la COP21, engageant 196 pays à limiter le réchauffement climatique bien en dessous de 2°C (et si possible 1,5°C) par rapport aux niveaux préindustriels, via des Contributions Déterminées au niveau National (CDN).',
  },
  {
    id: 'fc-environnement-7',
    topicId: 'environnement',
    question: 'Qu\'est-ce que le principe pollueur-payeur ?',
    answer: 'Principe environnemental selon lequel le coût des mesures de prévention et de lutte contre la pollution doit être supporté par celui qui en est responsable. Il est inscrit dans le droit de l\'environnement européen et français.',
  },
  {
    id: 'fc-environnement-8',
    topicId: 'environnement',
    question: 'Qu\'est-ce que l\'empreinte écologique ?',
    answer: 'Indicateur qui mesure la pression humaine sur les ressources naturelles en hectares globaux (surface terrestre et marine nécessaire pour produire les ressources consommées et absorber les déchets). Elle compare la demande humaine à la biocapacité de la Terre.',
  },
  {
    id: 'fc-environnement-9',
    topicId: 'environnement',
    question: 'Qu\'est-ce que la taxe carbone aux frontières ?',
    answer: 'Mécanisme d\'ajustement carbone aux frontières (MACF) de l\'UE : les importateurs de produits à forte intensité carbone (acier, ciment, aluminium) doivent acheter des certificats correspondant au prix du carbone européen. Évite les fuites de carbone.',
  },
  {
    id: 'fc-environnement-10',
    topicId: 'environnement',
    question: 'Qu\'est-ce que les Objectifs de Développement Durable (ODD) ?',
    answer: '17 objectifs adoptés par l\'ONU en 2015 pour l\'agenda 2030 : éliminer la pauvreté, la faim, assurer l\'éducation, l\'égalité des genres, l\'accès à l\'eau, promouvoir la croissance durable, lutter contre le changement climatique, etc. Ils lient développement et environnement.',
  },
]
