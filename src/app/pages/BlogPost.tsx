import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";
import { categories } from "../categories";

export function BlogPost() {
  const { slug } = useParams();

  const blogPosts: Record<string, {
    title: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    tags: string[];
    content: {
      introduction: string;
      sections: Array<{
        title: string;
        content: string[];
      }>;
      conclusion: string;
    };
  }> = {
    "premier-ci-cd-pipeline": {
      title: "Mettre en place un pipeline CI/CD avec GitHub Actions et AWS EC2",
      category: "DevOps",
      readTime: "9 min",
      date: "5 octobre 2026",
      author: "Merveille Tsafack",
      tags: ["CI/CD", "GitHub Actions", "AWS", "DevOps"],
      content: {
        introduction: "Automatiser le déploiement permet de livrer une application de façon plus régulière et de limiter les manipulations manuelles. Dans cet article, je présente les étapes d'un pipeline CI/CD avec GitHub Actions et une instance AWS EC2 : préparer le serveur, vérifier le code, puis déployer de manière contrôlée. Les commandes exactes dépendent de la stack et de l'infrastructure du projet.",
        sections: [
          {
            title: "Séparer intégration continue et déploiement",
            content: [
              "L'intégration continue (CI) exécute automatiquement des vérifications à chaque changement : installation des dépendances, lint, tests et compilation. Elle donne rapidement un signal sur la qualité du changement, avant qu'il soit déployé.",
              "Le déploiement continu (CD) prend le relais après validation. Pour un premier pipeline, il est prudent de déclencher le déploiement depuis une branche protégée, par exemple après une fusion sur main, plutôt qu'à chaque push sans contrôle."
            ]
          },
          {
            title: "Préparer l'instance EC2",
            content: [
              "L'instance doit disposer de l'environnement nécessaire à l'application et d'un utilisateur dédié au déploiement, avec des permissions limitées. Il faut également configurer le groupe de sécurité pour n'autoriser que les ports nécessaires : l'accès SSH ne devrait pas être ouvert indistinctement à tout Internet.",
              "Avant l'automatisation, il faut vérifier manuellement que l'application démarre correctement sur le serveur, que son service redémarre après un redémarrage de l'instance et que les journaux sont consultables. Un pipeline ne remplace pas une configuration serveur fiable."
            ]
          },
          {
            title: "Construire le workflow GitHub Actions",
            content: [
              "Un workflow placé dans .github/workflows peut être déclenché lors d'une pull request et après une fusion sur la branche de production. Le job de CI installe les dépendances, lance les tests disponibles et compile l'application. En cas d'échec, le déploiement ne doit pas commencer.",
              "Le job de déploiement peut ensuite transférer un artefact versionné vers EC2 ou se connecter au serveur pour mettre à jour l'application. Il est préférable de déployer un artefact construit une seule fois plutôt que de reconstruire différemment le projet en production."
            ]
          },
          {
            title: "Protéger les secrets et prévoir un retour arrière",
            content: [
              "Les clés SSH, identifiants et autres secrets ne doivent pas être écrits dans le dépôt ni dans les logs. GitHub Actions propose des secrets chiffrés au niveau du dépôt ou des environnements ; leur accès doit être limité aux workflows et branches qui en ont besoin. La clé utilisée doit appartenir à un compte de déploiement aux droits restreints.",
              "Un déploiement doit être observable et récupérable. Conserver les versions précédentes, vérifier l'état de santé de l'application après mise à jour et documenter une procédure de retour arrière permet de réagir si la nouvelle version ne démarre pas comme prévu."
            ]
          },
          {
            title: "Valider le pipeline progressivement",
            content: [
              "Je recommande de commencer par la CI seule, puis d'ajouter le déploiement sur un environnement de test avant la production. Il faut vérifier les permissions, le comportement quand un test échoue, les logs produits et la procédure de restauration.",
              "Le résultat attendu n'est pas seulement un workflow vert : le processus doit être reproductible, compréhensible par l'équipe et suffisamment sûr pour les accès qu'il utilise."
            ]
          }
        ],
        conclusion: "GitHub Actions et EC2 forment une base accessible pour apprendre l'automatisation du déploiement. En séparant les tests du déploiement, en protégeant les secrets et en préparant un retour arrière, on obtient un pipeline plus fiable qu'une suite de commandes manuelles. La prochaine étape consiste à adapter ces principes au framework et aux contraintes réelles de l'application."
      }
    },
    "file-dot-env-github": {
      title: "Pourquoi ne pas pousser le fichier *.env* dans un repo github",
      category: "Notes",
      readTime: "7 min",
      date: "5 octobre 2026",
      author: "Merveille Tsafack",
      tags: ["Sécurité", "Git", "Configuration", "Bonnes pratiques"],
      content: {
        introduction: "Lors de la création d'une application, il faut distinguer le code, généralement partagé entre les environnements, de la configuration qui varie selon la machine ou le contexte d'exécution. Un fichier .env contient souvent cette configuration, y compris des secrets comme des mots de passe ou des clés d'API. Le pousser dans un dépôt Git peut exposer ces informations.",
        sections: [
          {
            title: "Ce que peut contenir un fichier .env",
            content: [
              "On y trouve souvent des paramètres de connexion à une base de données, des jetons d'accès, des clés privées ou des clés d'API. Ces valeurs permettent parfois d'accéder directement à des services ou à des données. Même un dépôt privé ne doit pas être considéré comme un coffre-fort à secrets : ses membres, intégrations et sauvegardes élargissent la surface d'exposition.",
              "Ajouter le fichier à .gitignore évite les prochains ajouts accidentels, mais n'efface pas les versions déjà enregistrées dans l'historique Git. Un secret publié doit être considéré comme compromis, même si le commit est supprimé ensuite."
            ]
          },
          {
            title: "Séparer les valeurs de la documentation",
            content: [
              "Le dépôt peut contenir un fichier .env.example qui documente les variables nécessaires sans inclure leurs vraies valeurs. Par exemple, il peut indiquer DATABASE_URL= à configurer ou API_KEY=your_api_key_here. Chaque développeur crée ensuite son propre fichier .env, ignoré par Git.",
              "Les noms et descriptions doivent suffire à comprendre la configuration. Il est utile de préciser les variables obligatoires, celles qui ont une valeur par défaut et les différences entre développement, test et production."
            ]
          },
          {
            title: "Mettre en place de bonnes pratiques",
            content: [
              "Ajoutez .env et les variantes qui contiennent des valeurs sensibles au .gitignore, tout en gardant le fichier exemple versionné. En production, préférez un gestionnaire de secrets ou le mécanisme sécurisé fourni par la plateforme de déploiement.",
              "Limitez les permissions et la durée de vie des clés lorsque c'est possible, ne les affichez jamais dans les logs et remplacez-les si elles ont été exposées. Si un secret a été commité, révoquez-le ou faites-le tourner immédiatement ; nettoyer l'historique peut réduire l'exposition, mais ne remplace pas cette révocation."
            ]
          },
          {
            title: "Vérifier avant de pousser",
            content: [
              "Avant un push, examinez les fichiers suivis avec Git et vérifiez que le fichier local .env n'a pas été ajouté. Des outils de détection de secrets peuvent compléter cette vérification dans les hooks locaux ou la CI.",
              "Si une valeur sensible a déjà été publiée, identifiez les services concernés, révoquez les identifiants, examinez les journaux d'accès et informez les responsables concernés selon les procédures applicables."
            ]
          }
        ],
        conclusion: "Le fichier .env est pratique pour configurer une application localement, mais il ne doit généralement pas contenir de secrets dans le dépôt. Un .env.example documente les besoins, tandis que les vraies valeurs sont fournies séparément et protégées. Si un secret a été exposé, la priorité est de le révoquer et de le remplacer, pas seulement de supprimer le fichier du dernier commit."
      }
    },
    "not-only-delete-data": {
      title: "Pourquoi on ne supprime (presque) jamais les données en génie logiciel ?",
      category: "Architecture Logicielle",
      readTime: "8 min",
      date: "5 octobre 2026",
      author: "Merveille Tsafack",
      tags: ["Base de données", "Architecture", "Soft delete", "RGPD"],
      content: {
        introduction: `DELETE FROM users WHERE id = 5;
        Vraiment ? \n
        Dans la réalité des systèmes en production, la requête ressemble beaucoup plus à : \n
        UPDATE users SET status = 'deleted', deleted_at = NOW() WHERE id = 5;
        Et ce n’est pas un hasard.
      `,
        sections: [
          {
            title: "Le filet de sécurité (Erreur humaine)",
            content: [
              "Un utilisateur peut supprimer un élément par erreur, ou une opération de maintenance peut cibler la mauvaise ligne. Avec une suppression logique, l'application marque l'enregistrement comme supprimé, par exemple avec un statut et une date de suppression, au lieu de l'effacer immédiatement.",
              "Cette approche facilite parfois la restauration, mais elle ne remplace pas une sauvegarde. Il faut définir qui peut restaurer les données, pendant combien de temps et comment éviter qu'un élément supprimé réapparaisse dans les listes ordinaires."
            ],
          },
          {
            title: "L'intégrité référentielle",
            content: [
              "Les données sont souvent liées : une commande référence un client, une facture référence une commande, et un commentaire appartient à un compte. Une suppression physique en cascade peut effacer davantage que prévu ou rendre difficile la compréhension d'un historique.",
              "Conserver temporairement une ligne peut préserver les relations nécessaires à l'historique ou au fonctionnement métier. En contrepartie, toutes les requêtes doivent tenir compte du statut de suppression afin de ne pas présenter comme actifs des enregistrements qui ne le sont plus."
            ],
          },
          {
            title: "L'audit et la conformité",
            content: [
              "Dans certains contextes, il est utile de savoir quand une action a eu lieu et quel processus l'a déclenchée. Une date de suppression ou un journal d'audit peut aider à diagnostiquer un incident ou à expliquer une modification. Les journaux doivent cependant être protégés et ne pas devenir un moyen de conserver indéfiniment des données personnelles.",
              "La suppression logique n'est pas automatiquement conforme aux obligations de protection des données. Selon la finalité, les règles applicables et les durées de conservation, il peut être nécessaire d'effacer ou d'anonymiser définitivement certaines informations. Les obligations doivent être examinées avec les responsables compétents."
            ],
          },
          {
            title: "Choisir entre suppression logique et suppression physique",
            content: [
              "Le soft delete est utile lorsqu'une restauration ou un historique métier est nécessaire et que la conservation est justifiée. Il ajoute toutefois de la complexité : filtres systématiques, unicité des données supprimées, gestion des restaurations, indexation et politiques de purge.",
              "La suppression physique reste appropriée lorsqu'aucune conservation n'est nécessaire ou lorsqu'une règle impose l'effacement. Une solution courante consiste à appliquer une durée de rétention définie, puis à purger ou anonymiser les données à son échéance."
            ],
          },
        ],
        conclusion: "On ne conserve pas les données par principe : on choisit une stratégie en fonction du besoin métier, de l'intégrité des relations, des possibilités de restauration et des obligations de conservation ou d'effacement. La suppression logique peut être un filet de sécurité temporaire, mais elle exige des règles claires et une purge maîtrisée. La question essentielle reste : quelles données conserver, pour quelle raison et pendant combien de temps ?",
      }
    },
    "mon-jumeau-numerique-agentique": {
      title: "Construire mon jumeau numérique agentique : donner une voix à mes compétences",
      category: "Architecture Logicielle",
      readTime: "7 min",
      date: "5 octobre 2026",
      author: "Merveille Tsafack",
      tags: ["Intelligence artificielle", "Agents IA", "Portfolio", "Architecture"],
      content: {
        introduction: "Je veux faire évoluer mon site au-delà d'un portfolio classique et créer un jumeau numérique agentique capable de présenter mon parcours, mes compétences et mes projets. L'objectif est de permettre aux visiteurs de poser leurs questions et d'obtenir des réponses utiles, même lorsqu'ils ne savent pas encore quelle page consulter.",
        sections: [
          {
            title: "Pourquoi créer un jumeau numérique agentique ?",
            content: [
              "Un portfolio présente des informations, mais il ne sait pas toujours guider la personne qui le découvre. Un visiteur peut vouloir comprendre un projet, connaître les technologies que j'explore ou savoir comment me contacter. Un assistant conversationnel peut rendre cette découverte plus naturelle.",
              "Par « jumeau numérique », je ne veux pas dire une copie de ma personne. Je parle d'une interface qui représente fidèlement mon parcours et ma façon d'expliquer mon travail, à partir d'informations que j'ai choisies et validées. Le terme « agentique » traduit son rôle : comprendre une demande, retrouver les éléments pertinents et orienter la conversation vers une prochaine étape."
            ]
          },
          {
            title: "Partir de mes compétences et de mes connaissances",
            content: [
              "La qualité des réponses dépend d'abord de la qualité des informations disponibles. Je dois donc organiser les contenus qui décrivent réellement mon parcours : compétences, projets, décisions techniques, apprentissages et objectifs. Ces informations constituent la base de connaissances de l'assistant.",
              "Cette base devra rester évolutive. À mesure que je termine un projet ou approfondis un sujet, je pourrai mettre à jour les informations correspondantes. L'assistant ne devra pas inventer une expérience ou une expertise simplement parce qu'une question l'y invite."
            ]
          },
          {
            title: "Imaginer une architecture simple et maîtrisée",
            content: [
              "Le parcours d'une question peut rester clair : le visiteur écrit sur le site, l'application identifie son besoin, recherche les passages pertinents dans les contenus validés, puis formule une réponse à partir de ces éléments. Si les informations manquent, elle doit le dire plutôt que de remplir les blancs.",
              "Je veux commencer par une version limitée : répondre aux questions sur mon profil et mes projets, puis guider vers les pages ou les moyens de contact appropriés. Cette approche me permettra de vérifier l'utilité du service avant d'ajouter des capacités plus complexes."
            ]
          },
          {
            title: "Créer une conversation utile aux visiteurs",
            content: [
              "L'assistant doit s'adapter à différents visiteurs : une personne qui découvre mon site, un recruteur qui souhaite comprendre mon expérience ou un autre développeur intéressé par un choix technique. Des réponses courtes, des liens vers les projets et la possibilité de poser une question complémentaire rendront l'échange plus concret.",
              "Il devra aussi annoncer clairement qu'il s'agit d'un assistant automatisé, et non de moi en direct. Il pourra faciliter le premier échange, mais ne remplacera ni une conversation personnelle ni la possibilité de me contacter directement."
            ]
          },
          {
            title: "Gagner la confiance avant d'ajouter des fonctionnalités",
            content: [
              "Un assistant qui parle de moi doit respecter des règles strictes : s'appuyer sur des informations publiques et vérifiées, protéger les données partagées dans la conversation et éviter de demander des renseignements personnels inutiles. Je devrai également réfléchir à la conservation des échanges avant de la mettre en place.",
              "Je pourrai évaluer le résultat avec des questions représentatives : la réponse est-elle exacte, compréhensible et appuyée par mon contenu ? Le système sait-il reconnaître ses limites ? Ces vérifications guideront les améliorations et aideront à éviter des réponses trompeuses."
            ]
          }
        ],
        conclusion: "Réaliser mon jumeau numérique agentique est une façon d'appliquer mes connaissances à un projet utile et visible. Je veux avancer étape par étape : structurer ce que je sais, construire une première expérience de dialogue, puis l'améliorer grâce aux retours et aux tests. Le but n'est pas de remplacer le contact humain, mais de rendre mon parcours plus accessible et d'aider chaque visiteur à trouver rapidement ce qu'il cherche."
      }
    },
    /* "file-dot-env-github": {
      title: "Pourquoi ne pas pousser le fichier *.env* dans un repo github",
      category: "Notes",
      readTime: "8 mins",
      date: "22 Février 2026",
      author: "Merveille Tsafack",
      tags: [''],
      content: {
        introduction: 'string',
        sections: [
          {
            title: "string",
            content: [""],
          },
        ],
        conclusion: "string",
      }
    }, */
    /* "system-design-etudiant": {
      title: "Comprendre le System Design en tant qu'étudiant en ingénierie",
      category: "Architecture",
      readTime: "8 min",
      date: "Mars 2026",
      author: "Merveille Tsafack",
      tags: ["System Design", "Architecture", "Scalabilité", "Apprentissage"],
      content: {
        introduction: "Le System Design peut sembler intimidant quand on est encore étudiant. Comment concevoir des systèmes qui supportent des millions d'utilisateurs quand on n'a jamais travaillé sur de tels projets ? Dans cet article, je partage mon approche d'apprentissage et les concepts clés que j'ai assimilés.",
        sections: [
          {
            title: "Pourquoi le System Design est important",
            content: [
              "Le System Design n'est pas seulement pour les ingénieurs seniors. Comprendre comment les systèmes sont conçus nous aide à écrire du meilleur code, même à petite échelle.",
              "Cela développe notre capacité à penser de manière holistique : performance, scalabilité, fiabilité, maintenabilité.",
              "C'est aussi une compétence très recherchée lors des entretiens techniques pour les postes d'ingénieur."
            ]
          },
          {
            title: "Les concepts fondamentaux",
            content: [
              "Load Balancing : distribuer la charge entre plusieurs serveurs pour améliorer la disponibilité et la performance.",
              "Caching : stocker temporairement des données fréquemment accédées pour réduire la latence.",
              "Database Sharding : partitionner une base de données pour gérer plus de données et de trafic.",
              "Microservices : décomposer une application monolithique en services indépendants.",
              "Message Queues : gérer les tâches asynchrones et découpler les composants du système."
            ]
          },
          {
            title: "Comment j'apprends le System Design",
            content: [
              "Lecture de blogs techniques : articles de Netflix, Uber, Airbnb sur leur architecture.",
              "Chaînes YouTube : System Design Interview, Gaurav Sen, Tech Dummies.",
              "Pratique avec mes projets : implémenter du caching, utiliser Docker pour simuler des architectures distribuées.",
              "Dessiner des diagrammes : visualiser l'architecture avant de coder.",
              "Poser des questions : pourquoi ce choix architectural ? Quels sont les trade-offs ?"
            ]
          },
          {
            title: "Mes projets d'apprentissage",
            content: [
              "J'ai créé une version simplifiée d'un système de réservation avec gestion de la concurrence.",
              "Expérimentation avec Redis pour le caching de sessions et de données.",
              "Mise en place d'une architecture avec Nginx comme reverse proxy et load balancer.",
              "Utilisation de Docker Compose pour orchestrer plusieurs services."
            ]
          }
        ],
        conclusion: "Le System Design est un voyage, pas une destination. Chaque projet, même petit, est une opportunité d'appliquer ces principes. L'important est de commencer, d'expérimenter, et d'apprendre de ses erreurs."
      }
    },
    "premiere-architecture-production": {
      title: "Comment j'ai construit ma première architecture production-ready",
      category: "DevOps",
      readTime: "12 min",
      date: "Mars 2026",
      author: "Merveille Tsafack",
      tags: ["DevOps", "Docker", "Production", "Architecture"],
      content: {
        introduction: "Passer d'un projet qui fonctionne sur localhost à une application déployée en production est un grand saut. Voici comment j'ai relevé ce défi avec mon projet de plateforme de réservation.",
        sections: [
          {
            title: "Le contexte du projet",
            content: [
              "Une plateforme de réservation pour cinéma et événements développée avec Spring Boot et React.",
              "Besoin de supporter plusieurs utilisateurs simultanés, gérer les paiements, et garantir la disponibilité.",
              "Objectif : déployer l'application de manière professionnelle, comme le feraient des ingénieurs en production."
            ]
          },
          {
            title: "Les défis rencontrés",
            content: [
              "Configuration de l'environnement de production vs développement.",
              "Gestion sécurisée des secrets (clés API, mots de passe de base de données).",
              "Mise en place du HTTPS avec certificats SSL.",
              "Monitoring et logging pour détecter les problèmes.",
              "Backup automatique de la base de données.",
              "Gestion des migrations de base de données sans downtime."
            ]
          },
          {
            title: "Ma stack technique",
            content: [
              "Backend : Spring Boot avec PostgreSQL",
              "Frontend : React buildé et servi par Nginx",
              "Conteneurisation : Docker et Docker Compose",
              "Reverse Proxy : Nginx avec configuration SSL",
              "CI/CD : GitHub Actions pour le déploiement automatisé",
              "Monitoring : Logs centralisés et health checks"
            ]
          },
          {
            title: "Les leçons apprises",
            content: [
              "Toujours séparer les configurations dev/staging/production.",
              "Ne jamais commit des secrets dans le code source.",
              "Les tests automatisés sont indispensables avant le déploiement.",
              "La documentation de l'infrastructure est aussi importante que celle du code.",
              "Prévoir un plan de rollback en cas de problème.",
              "Le monitoring proactif vaut mieux que le debugging réactif."
            ]
          }
        ],
        conclusion: "Cette expérience m'a énormément appris sur ce qu'implique vraiment 'mettre en production'. Ce n'est pas juste faire fonctionner le code, c'est s'assurer qu'il fonctionne de manière fiable, sécurisée et maintenable."
      }
    },
    "apprendre-devops": {
      title: "Apprendre le DevOps depuis zéro : mon guide personnel",
      category: "DevOps",
      readTime: "10 min",
      date: "Avril 2026",
      author: "Merveille Tsafack",
      tags: ["DevOps", "Docker", "CI/CD", "Guide"],
      content: {
        introduction: "Le DevOps était un mystère pour moi il y a un an. Aujourd'hui, je peux dockeriser une application, configurer un pipeline CI/CD, et déployer en production. Voici le chemin que j'ai suivi.",
        sections: [
          {
            title: "Étape 1 : Comprendre les bases de Linux",
            content: [
              "Le terminal n'est plus mon ennemi : commandes de base, gestion de fichiers, permissions.",
              "Scripts bash pour automatiser des tâches répétitives.",
              "Gestion des processus, services, et systemd.",
              "Configuration SSH pour accéder à des serveurs distants."
            ]
          },
          {
            title: "Étape 2 : Maîtriser Docker",
            content: [
              "Créer mes premiers Dockerfiles pour containeriser mes applications.",
              "Comprendre les images, conteneurs, volumes et réseaux.",
              "Docker Compose pour orchestrer plusieurs services.",
              "Optimisation des images : multi-stage builds, layers caching.",
              "Registry privé et gestion des versions d'images."
            ]
          },
          {
            title: "Étape 3 : CI/CD avec GitHub Actions",
            content: [
              "Workflows automatisés : build, test, deploy.",
              "Integration testing avant chaque merge.",
              "Déploiement automatique vers staging puis production.",
              "Gestion des secrets avec GitHub Secrets.",
              "Notifications en cas de succès ou d'échec."
            ]
          },
          {
            title: "Étape 4 : Infrastructure as Code",
            content: [
              "Configuration de serveurs avec des scripts reproductibles.",
              "Gestion des configurations avec des variables d'environnement.",
              "Versionner l'infrastructure comme le code applicatif.",
              "Documentation de l'architecture et des procédures de déploiement."
            ]
          },
          {
            title: "Ressources qui m'ont aidé",
            content: [
              "Docker Documentation officielle et tutoriels pratiques.",
              "Chaîne YouTube TechWorld with Nana pour DevOps.",
              "Projets personnels : la meilleure façon d'apprendre.",
              "Communautés en ligne : forums, Discord, Reddit.",
              "Certifications gratuites pour valider mes connaissances."
            ]
          }
        ],
        conclusion: "Le DevOps est un domaine vaste, mais chaque concept s'apprend progressivement. Commencez petit, automatisez une chose à la fois, et avant de vous en rendre compte, vous gérerez des infrastructures complètes."
      }
    },
    "applications-scalables": {
      title: "Construire des applications scalables étape par étape",
      category: "Architecture",
      readTime: "15 min",
      date: "Avril 2026",
      author: "Merveille Tsafack",
      tags: ["Scalabilité", "Architecture", "Performance", "Microservices"],
      content: {
        introduction: "La scalabilité n'est pas quelque chose qu'on ajoute après coup. C'est une philosophie de conception. Voici comment j'aborde la construction d'applications qui peuvent grandir.",
        sections: [
          {
            title: "Principes de scalabilité",
            content: [
              "Scalabilité horizontale vs verticale : ajouter plus de machines vs améliorer une machine.",
              "Stateless applications : ne pas stocker d'état dans l'application elle-même.",
              "Découplage des composants : chaque partie du système peut évoluer indépendamment.",
              "Caching stratégique : réduire la charge sur la base de données.",
              "Asynchronisme : utiliser des queues pour les tâches longues."
            ]
          },
          {
            title: "Load Balancing",
            content: [
              "Distribuer les requêtes entre plusieurs instances de l'application.",
              "Algorithmes : Round Robin, Least Connections, IP Hash.",
              "Health checks pour retirer automatiquement les instances défaillantes.",
              "Session persistence et sticky sessions quand nécessaire.",
              "Pratique avec Nginx et HAProxy."
            ]
          },
          {
            title: "Caching multi-niveaux",
            content: [
              "Browser caching : headers HTTP pour le cache côté client.",
              "CDN : distribuer les assets statiques globalement.",
              "Application caching : Redis ou Memcached pour les données fréquentes.",
              "Database query caching : réduire les requêtes répétitives.",
              "Cache invalidation : stratégies pour garder les données fraîches."
            ]
          },
          {
            title: "Base de données distribuée",
            content: [
              "Réplication : master-slave pour la lecture à grande échelle.",
              "Sharding : partitionner les données par utilisateur, région, etc.",
              "Consistency vs Availability : comprendre le théorème CAP.",
              "NoSQL pour certains use cases : MongoDB, Cassandra.",
              "Database indexing et query optimization."
            ]
          },
          {
            title: "Architecture microservices",
            content: [
              "Décomposer un monolithe en services indépendants.",
              "Communication : REST APIs, gRPC, message queues.",
              "Service discovery et configuration centralisée.",
              "Gestion des erreurs et circuit breakers.",
              "Monitoring distribué et distributed tracing."
            ]
          }
        ],
        conclusion: "La scalabilité est un voyage d'apprentissage continu. Commencez par les principes de base, expérimentez avec des projets personnels, et progressez vers des architectures plus complexes."
      }
    },
    "lecons-projets-etudiants": {
      title: "Leçons de génie logiciel tirées de mes projets étudiants",
      category: "Développement",
      readTime: "7 min",
      date: "Mai 2026",
      author: "Merveille Tsafack",
      tags: ["Clean Code", "Best Practices", "Apprentissage"],
      content: {
        introduction: "Mes projets étudiants ne sont pas parfaits, mais ils m'ont appris d'importantes leçons sur le développement logiciel professionnel.",
        sections: [
          {
            title: "L'importance du clean code",
            content: [
              "Nommer les variables et fonctions de manière descriptive.",
              "Une fonction = une responsabilité (Single Responsibility Principle).",
              "Commenter le 'pourquoi', pas le 'quoi'.",
              "Formatage cohérent avec des linters (ESLint, Prettier).",
              "Refactoring régulier pour éviter la dette technique."
            ]
          },
          {
            title: "Design patterns qui m'ont sauvé",
            content: [
              "MVC/MVVM pour structurer les applications web.",
              "Repository pattern pour abstraire l'accès aux données.",
              "Factory pattern pour créer des objets complexes.",
              "Observer pattern pour la communication entre composants.",
              "Strategy pattern pour les algorithmes interchangeables."
            ]
          },
          {
            title: "Tests : j'aurais dû commencer plus tôt",
            content: [
              "Les tests unitaires m'auraient fait gagner des heures de debugging.",
              "TDD (Test-Driven Development) change la façon de coder.",
              "Integration tests pour vérifier que tout fonctionne ensemble.",
              "Mocking et stubbing pour isoler les composants.",
              "Coverage tools pour identifier le code non testé."
            ]
          },
          {
            title: "Gestion de projet et organisation",
            content: [
              "Git : commits atomiques avec des messages clairs.",
              "Branches : feature branches, pull requests, code reviews.",
              "Documentation : README, API docs, architecture diagrams.",
              "Task management : décomposer le projet en tâches réalisables.",
              "Version control des dépendances et gestion des migrations."
            ]
          }
        ],
        conclusion: "Chaque projet est une opportunité d'apprentissage. Les erreurs sont normales, l'important est d'en tirer des leçons et de s'améliorer continuellement."
      }
    } */
  };

  const post = slug ? blogPosts[slug] : null;
  if (!post) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Article non trouvé</h1>
          <p className="text-gray-300 mb-8">Cet article n'existe pas encore ou est en cours de rédaction.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }
  else if (post.date === 'A venir' || post.date.toLowerCase() === 'a venir') {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Article non finalisé</h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-300 mb-8">Cet article est en cours de rédaction.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft size={20} />
            Retour au blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="mb-4 sm:mb-6">            
            <span
              className={`px-3 py-1 text-xs rounded-full text-white ${categories.find((c) => c.name === post.category)?.color || "bg-gray-500"
                }`}
            >
              {post.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-gray-400 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <User size={16} className="sm:w-5 sm:h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="sm:w-5 sm:h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="sm:w-5 sm:h-5" />
              <span>{post.readTime} de lecture</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 sm:px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm flex items-center gap-1"
              >
                <Tag size={12} className="sm:w-3.5 sm:h-3.5" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12"
        >
          {/* Introduction */}
          <div className="mb-10 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed italic border-l-4 border-purple-600 pl-4 sm:pl-6">
              {post.content.introduction}
            </p>
          </div>

          {/* Sections */}
          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-xs sm:text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <span className="leading-tight">{section.title}</span>
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-sm sm:text-base text-gray-300 leading-relaxed pl-0 sm:pl-11">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-purple-500/20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Conclusion</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Conteneur de l'image (Cercle) */}
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl p-1">
              <div className="w-full h-full overflow-hidden rounded-full bg-white flex items-center justify-center">
                <img
                  src="/merveille.jpeg"
                  alt="Merveille Tsafack"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Conteneur du texte */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">À propos de l'auteur</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Lydivine Merveille Magne Tsafack est une étudiante passionnée en génie informatique, spécialisé dans
                le développement logiciel, l'architecture système et le DevOps. Elle partage son parcours
                d'apprentissage et ses expériences pour aider d'autres juniors et pourquoi pas d'autres développeurs.
              </p>
              <Link
                to="/contact"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm sm:text-base font-medium"
              >
                Me contacter →
              </Link>
            </div>

          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-4"
        >
          <Link
            to="/blog"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900/60 border border-purple-500/30 text-white rounded-lg hover:bg-gray-800/60 transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            Tous les articles
          </Link>
          <Link
            to="/contact"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-center text-sm sm:text-base"
          >
            Me contacter
          </Link>
        </motion.div>
      </article>
    </div>
  );
}