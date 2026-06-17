import { motion } from "motion/react";
import { Github, Database, Globe, Zap, Users, ShoppingBag, Server } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "HireHub — Plateforme de Recrutement",
      subtitle: "ATS complet en microservices avec pipeline recruteur, candidatures PDF, entretiens et audit asynchrone",
      icon: Users,
      color: "from-blue-600 to-cyan-600",
      problem:
        "Centraliser tout le cycle de recrutement : publication d'offres, dépôt de CV PDF, pipeline recruteur multi-étapes, planification d'entretiens et notifications email, avec traçabilité complète des actions via un service d'audit dédié.",
      architecture:
        "Monorepo Maven multi-modules, 9 microservices Spring Boot 3.2 (Eureka Discovery, API Gateway, auth-service, candidature-service, entretien-service, offre-service, email-service, event-service, verification-service). PostgreSQL isolée par service, RabbitMQ pour la messagerie asynchrone inter-services, stack d'observabilité Prometheus + Grafana + Loki + Promtail.",
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
        "Orchestration de 9 microservices avec dépendances de démarrage (health checks Docker)",
        "Communication asynchrone via RabbitMQ pour l'envoi d'emails et l'audit sans couplage fort",
        "Isolation des bases de données par service avec schémas indépendants",
        "Stack d'observabilité complète : métriques Prometheus, logs centralisés Loki, dashboards Grafana",
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
      ],
      github: {},
      demo: "https://thebeginning.merveilletsafack.dev",
    },
    {
      title: "Ges'Stock — Gestion de Stock SaaS",
      subtitle: "Application SaaS full-stack avec pipeline CI/CD complet et déploiement automatisé sur AWS EC2",
      icon: Server,
      color: "from-emerald-600 to-teal-600",
      problem:
        "Fournir aux commerces de proximité un outil SaaS de gestion de stocks, produits et ventes, avec tableau de bord analytique, gestion des rôles et déploiement continu sans interruption de service.",
      architecture:
        "Backend Layered Architecture Spring Boot (API RESTful, Dockerfile multi-stage Maven → JDK Alpine), frontend React + MUI + Recharts + Tailwind. Pipeline CI/CD : GitHub Actions (CI : mvn clean verify) → Docker Hub → CD auto-déclenché sur EC2 AWS (self-hosted runner). Jenkinsfile alternatif inclus.",
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
        "Pipeline CI/CD bout en bout : tests automatisés → build Docker → push Hub → déploiement EC2",
        "Dockerfile multi-stage pour réduire la taille de l'image de production",
        "Self-hosted runner GitHub Actions sur EC2 pour le déploiement sans downtime",
        "Conception d'un schéma de base de données avec relations multiples (produit, lot, stock, vente)",
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
            Une sélection de projets qui démontrent mes compétences en développement,
            architecture système, DevOps et infrastructure.
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