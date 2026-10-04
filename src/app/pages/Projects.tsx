import { motion } from "motion/react";
import { Github, Database, Globe, Zap, Users, ShoppingBag, Server, GitBranch } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Système agentique de test d'API — Projet tutoré KEREVAL",
      subtitle: "Projet en cours (septembre 2026 – février 2027) • équipe de 2 • 20 jours",
      icon: Zap,
      color: "from-violet-600 to-purple-600",
      problem:
        "Évaluer la qualité de spécifications OpenAPI et fiabiliser la validation d'API grâce à un agent capable d'automatiser les tests et de produire un rapport d'anomalies.",
      architecture:
        "Projet mené sur l'ensemble du cycle : état de l'art, recueil du besoin, spécification, conception, développement et tests. Exploration de workflows multi-agents LLM pour assister l'analyse des spécifications et la génération de tests.",
      technologies: ["IA agentique", "LLM", "OpenAPI", "Tests d'API REST", "Automatisation QA"],
      challenges: [
        "Analyser la qualité et la complétude de spécifications OpenAPI",
        "Automatiser l'exécution des tests d'API",
        "Produire un rapport d'anomalies exploitable",
        "Concevoir et valider une solution en équipe de deux dans le cadre du projet tutoré KEREVAL",
      ],
      github: {},
      demo: null,
    },
    {
      title: "HireHub — Plateforme de Recrutement",
      subtitle: "Plateforme de recrutement en microservices avec observabilité de bout en bout",
      icon: Users,
      color: "from-blue-600 to-cyan-600",
      problem:
        "Centraliser tout le cycle de recrutement : publication d'offres, dépôt de CV PDF, pipeline recruteur multi-étapes, planification d'entretiens et notifications email, avec traçabilité complète des actions via un service d'audit dédié.",
      architecture:
        "Monorepo Maven multi-modules avec 8 microservices Spring Boot, Eureka, API Gateway, RabbitMQ et JWT. Bases PostgreSQL isolées par service et observabilité Prometheus, Grafana, Loki et Promtail.",
      technologies: [
        "Spring Boot 3.2",
        "Spring Cloud",
        "Eureka",
        "API Gateway",
        "RabbitMQ",
        "PostgreSQL",
        "Docker",
        "JWT",
        "Grafana",
        "Prometheus",
      ],
      challenges: [
        "Orchestration de 8 microservices avec dépendances de démarrage (health checks Docker)",
        "Communication asynchrone via RabbitMQ pour l'envoi d'emails et l'audit sans couplage fort",
        "Isolation des bases de données par service avec schémas indépendants",
        "Observabilité Prometheus, Loki et Grafana avec identifiants de corrélation pour tracer les incidents de bout en bout",
      ],
      github: {
        fullstack: "https://github.com/deep-coding15/HireHub",
      },
      demo: null,
    },
    {
      title: "The Beginning — Évaluation Professionnelle IA",
      subtitle: "Plateforme RH d'entretien vidéo temps réel avec analyse IA et scoring automatique",
      icon: Zap,
      color: "from-violet-600 to-purple-600",
      problem:
        "Permettre aux recruteurs de conduire des entretiens vidéo structurés en temps réel avec analyse IA des réponses, scoring automatique des candidats et génération de rapports d'évaluation.",
      architecture:
        "Frontend React avec streaming vidéo WebRTC, backend Node.js avec API REST, intégration d'un LLM pour l'analyse sémantique des réponses et le scoring, déploiement sur domaine personnalisé.",
      technologies: ["React", "Node.js", "WebRTC", "IA / LLM", "API REST", "JavaScript"],
      challenges: [
        "Mise en place de la communication vidéo temps réel avec WebRTC",
        "Intégration d'un modèle IA pour l'évaluation sémantique des réponses",
        "Synchronisation de l'état de l'entretien entre recruteur et candidat",
        "Déploiement sur domaine personnalisé avec HTTPS et gestion des sessions",
        "2e place au Hackathon Codage & IA organisé par AEBM × ASEGUIM à Tétouan (mai 2026)",
      ],
      github: {},
      demo: "https://thebeginning.merveilletsafack.dev",
    },
    {
      title: "NutriScan — Classification nutritionnelle",
      subtitle: "Classification du Nutri-Score avec XGBoost et API de prédiction",
      icon: Database,
      color: "from-lime-600 to-green-600",
      problem:
        "Classer les produits alimentaires selon leur Nutri-Score à l'aide d'un modèle de machine learning exposé dans une application utilisable.",
      architecture:
        "Modèle XGBoost de classification binaire exposé par une API FastAPI, avec une interface Streamlit. Application conteneurisée avec Docker.",
      technologies: ["Python", "XGBoost", "FastAPI", "Streamlit", "Docker"],
      challenges: [
        "Entraîner un modèle de classification binaire",
        "Exposer les prédictions au travers d'une API FastAPI",
        "Conteneuriser l'application avec Docker",
      ],
      github: {},
      demo: null,
    },
    {
      title: "Administration Windows Server 2022 — TechNord SARL",
      subtitle: "Administration d'un domaine Windows et automatisation des tâches système",
      icon: Server,
      color: "from-blue-700 to-indigo-700",
      problem:
        "Mettre en place et administrer l'environnement de domaine de TechNord SARL avec les services Windows Server.",
      architecture:
        "Administration Windows Server 2022 avec Active Directory Domain Services (AD DS), stratégies de groupe (GPO) et IIS.",
      technologies: ["Windows Server 2022", "Active Directory", "GPO", "IIS", "PowerShell"],
      challenges: [
        "Administrer les comptes et ressources dans un domaine Active Directory",
        "Appliquer des stratégies de groupe adaptées avec les GPO",
        "Automatiser des tâches d'administration avec PowerShell",
      ],
      github: {},
      demo: null,
    },
    {
      title: "Ges'Stock — Gestion de Stock SaaS",
      subtitle: "SaaS de gestion de stock pour commerces de proximité avec tests et déploiement continu",
      icon: Server,
      color: "from-emerald-600 to-teal-600",
      problem:
        "Développer un système de gestion de stock destiné aux commerces de proximité, avec authentification JWT et validation des endpoints critiques.",
      architecture:
        "Application full-stack Spring Boot et React.js. Pipeline CI/CD Jenkins vers un VPS, avec plans de test structurés autour des endpoints critiques.",
      technologies: [
        "Spring Boot",
        "React",
        "MUI",
        "Docker",
        "GitHub Actions",
        "AWS EC2",
        "Docker Hub",
        "Jenkins",
        "Tailwind CSS",
        "Recharts",
      ],
      challenges: [
        "Structurer les plans de test selon les endpoints critiques de l'API",
        "Mettre en place un pipeline Jenkins de déploiement vers un VPS",
        "Sécuriser l'accès à l'API avec une authentification JWT",
        "Concevoir la gestion des stocks, produits et ventes pour des commerces de proximité",
      ],
      github: {
        backend: "https://github.com/deep-coding15/GesStockApi",
        frontend: "https://github.com/deep-coding15/GesStock",
      },
      demo: "https://launch-gesstock.netlify.app/",
    },
    {
      title: "Nka'a Market — E-commerce",
      subtitle: "Marketplace e-commerce full-stack avec build Docker multi-stage et API Laravel",
      icon: ShoppingBag,
      color: "from-orange-600 to-amber-600",
      problem:
        "Créer une marketplace locale permettant aux vendeurs de publier leurs produits et aux acheteurs de passer commande, avec gestion des stocks, panier et historique de commandes.",
      architecture:
        "Frontend React (SPA), backend API RESTful Laravel (PHP 8), base de données MySQL. Conteneurisation Docker avec build multi-stage pour optimiser les images de production frontend et backend.",
      technologies: ["React", "Laravel", "PHP 8", "MySQL", "Docker", "Tailwind CSS", "API REST"],
      challenges: [
        "Architecture Dockerfile multi-stage pour réduire la taille des images (build vs runtime)",
        "API RESTful Laravel avec authentification, gestion des rôles vendeur/acheteur",
        "Gestion des stocks en temps réel lors des commandes concurrentes",
        "Intégration frontend React avec l'API Laravel via Axios et gestion d'état",
      ],
      github: {},
      demo: null,
    },
    {
      title: "Vote Électronique ASEET",
      subtitle: "Système de vote sécurisé avec gestion de la concurrence SQL et résultats en temps réel",
      icon: Database,
      color: "from-rose-600 to-pink-600",
      problem:
        "Gérer une élection associative sécurisée : inscription et validation des participants via QR code, vote unique garanti par poste, affichage des résultats en temps réel avec pourcentages.",
      architecture:
        "Architecture MVC PHP native (controllers, models, repositories, views), API JSON PHP, base de données MySQL/MariaDB avec vues SQL pour les résultats. Déploiement via Docker + docker-compose.",
      technologies: ["PHP 8", "MySQL", "Docker", "HTML", "JavaScript", "AJAX", "Tailwind CSS", "QR Code"],
      challenges: [
        "Gestion de la concurrence : SELECT … FOR UPDATE (verrou pessimiste) dans une transaction SQL",
        "Garantie du vote unique par participant et par poste via contrainte UNIQUE composite",
        "Affichage des résultats en temps réel sans rechargement de page (fetch JS polling)",
        "Architecture MVC PHP pure sans framework : routing manuel, injection de dépendances simple",
      ],
      github: {
        fullstack: "https://github.com/deep-coding15/Systeme_de_vote_asset",
      },
      demo: "https://bureau-vote-aseet-be.great-site.net",
    },
    {
      title: "Soko VCS — Système de Contrôle de Version",
      subtitle: "Implémentation from scratch d'un VCS type Git en Python, avec stockage d'objets SHA-1, compression zlib et CLI argparse",
      icon: GitBranch,
      color: "from-sky-600 to-indigo-600",
      problem:
        "Comprendre les mécanismes internes de Git en implémentant from scratch un système de contrôle de version : stockage d'objets (blobs, commits, trees, tags), hachage SHA-1, compression zlib et résolution de références.",
      architecture:
        "CLI Python via argparse avec dispatch de sous-commandes (match/case), entités orientées objet GitObject / GitBlob / SokoRepository, utilitaires filesystem (repo_path, repo_file, repo_dir, repo_find récursif). Lecture/écriture d'objets compressés zlib avec en-têtes Git, stockage par hash SHA-1 avec structure dossiers 2 + 38 caractères.",
      technologies: ["Python 3.10+", "argparse", "zlib", "hashlib / SHA-1", "OOP", "CLI"],
      challenges: [
        "Reproduction fidèle du format d'objet Git : en-tête (type + taille), séparateur null, contenu, compression zlib",
        "Résolution du root repository en remontant récursivement l'arborescence parent (repo_find)",
        "Portabilité Windows / Linux : import conditionnel des modules grp et pwd absents sur Windows",
        "Implémentation de cat-file et hash-object : sérialisation / désérialisation d'objets binaires et calcul du SHA-1",
      ],
      github: {},
      demo: null,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Mes Projets
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Projets en développement full-stack, IA appliquée, test automatisé
            et fiabilité logicielle, dont un projet tutoré en cours avec KEREVAL.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:gap-6 md:gap-8 sm:grid-cols-1 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <project.icon size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <p className="text-purple-300">{project.subtitle}</p>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    Problème résolu
                  </h3>
                  <p className="text-gray-300">{project.problem}</p>
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    Architecture utilisée
                  </h3>
                  <p className="text-gray-300">{project.architecture}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-200 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-purple-300 mb-3">
                    Défis techniques
                  </h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.github.frontend && (
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      <Github size={18} />
                      GitHub Frontend
                    </a>
                  )}
                  {project.github.backend && (
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      <Github size={18} />
                      GitHub Backend
                    </a>
                  )}
                  {project.github.fullstack && (
                    <a
                      href={project.github.fullstack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50 transition-colors border border-purple-500/30 text-sm"
                    >
                      <Zap size={18} />
                      Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            D'autres projets en développement
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Je travaille constamment sur de nouveaux projets pour approfondir mes compétences
            et explorer de nouvelles technologies. Suivez mon GitHub pour voir mes derniers travaux.
          </p>
          <a
            href="https://github.com/deep-coding15/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Github size={20} />
            Voir mon GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}