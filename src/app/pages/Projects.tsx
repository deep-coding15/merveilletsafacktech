import { motion } from "motion/react";
import { ExternalLink, Github, Database, Smartphone, Globe, Zap, Cpu } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Système de Gestion de Restaurant",
      subtitle: "Application web full-stack avec architecture avancée",
      icon: Database,
      color: "from-purple-600 to-indigo-600",
      problem: "Gérer les commandes, le personnel, l'inventaire et les finances d'un restaurant de manière centralisée et efficace.",
      architecture: "Architecture MVC avec Laravel backend, React frontend, base de données relationnelle optimisée.",
      technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "JWT Auth"],
      challenges: [
        "Conception d'un schéma de base de données complexe avec relations multiples",
        "Gestion en temps réel des commandes avec websockets",
        "Système de permissions granulaires pour différents rôles",
        "Optimisation des requêtes SQL pour les rapports de ventes",
      ],
      github: "https://github.com/deep-coding15/",
    },
  ]
  
  /* const projects = [
    {
      title: "Système de Gestion de Restaurant",
      subtitle: "Application web full-stack avec architecture avancée",
      icon: Database,
      color: "from-purple-600 to-indigo-600",
      problem: "Gérer les commandes, le personnel, l'inventaire et les finances d'un restaurant de manière centralisée et efficace.",
      architecture: "Architecture MVC avec Laravel backend, React frontend, base de données relationnelle optimisée.",
      technologies: ["Laravel", "React", "MySQL", "Tailwind CSS", "JWT Auth"],
      challenges: [
        "Conception d'un schéma de base de données complexe avec relations multiples",
        "Gestion en temps réel des commandes avec websockets",
        "Système de permissions granulaires pour différents rôles",
        "Optimisation des requêtes SQL pour les rapports de ventes",
      ],
      github: "https://github.com/deep-coding15/",
    },
    {
      title: "Plateforme de Réservation Cinéma & Événements",
      subtitle: "Système de réservation en ligne avec paiement intégré",
      icon: Globe,
      color: "from-blue-600 to-cyan-600",
      problem: "Permettre aux utilisateurs de réserver des places pour des séances de cinéma et des événements, avec gestion des paiements et des places.",
      architecture: "Backend API RESTful avec Spring Boot, frontend React, intégration de passerelle de paiement.",
      technologies: ["Spring Boot", "React", "PostgreSQL", "Stripe API", "Docker"],
      challenges: [
        "Gestion de la concurrence lors des réservations simultanées",
        "Système de sélection de sièges interactif",
        "Intégration sécurisée de l'API de paiement",
        "Système de notifications par email automatisé",
      ],
      github: "https://github.com/deep-coding15/",
    },
    {
      title: "Stack Web Dockerisée",
      subtitle: "Infrastructure applicative conteneurisée complète",
      icon: Zap,
      color: "from-green-600 to-emerald-600",
      problem: "Créer un environnement de développement et de production reproductible pour des applications web complexes.",
      architecture: "Docker Compose orchestrant Nginx, PHP-FPM, MySQL, Redis, avec CI/CD via GitHub Actions.",
      technologies: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "Linux"],
      challenges: [
        "Configuration optimale de Nginx pour différents types d'applications",
        "Mise en place de volumes persistants pour les données",
        "Automatisation du déploiement avec CI/CD",
        "Gestion des secrets et variables d'environnement",
      ],
      github: "https://github.com/deep-coding15/",
    },
    {
      title: "Application Mobile Flutter",
      subtitle: "App mobile cross-platform avec backend Serverpod",
      icon: Smartphone,
      color: "from-pink-600 to-purple-600",
      problem: "Développer une application mobile performante pour iOS et Android avec un backend scalable.",
      architecture: "Flutter pour le frontend mobile, Serverpod pour le backend Dart, base de données PostgreSQL.",
      technologies: ["Flutter", "Dart", "Serverpod", "PostgreSQL", "Firebase"],
      challenges: [
        "State management avec Riverpod",
        "Synchronisation offline/online des données",
        "Optimisation des performances pour les appareils bas de gamme",
        "Authentification sécurisée et gestion de session",
      ],
      github: "https://github.com/deep-coding15/",
    },
    {
      title: "Projet TSP - Optimisation Algorithmique",
      subtitle: "Résolution du problème du voyageur de commerce",
      icon: Cpu,
      color: "from-orange-600 to-red-600",
      problem: "Implémenter et comparer différents algorithmes pour résoudre le problème d'optimisation TSP.",
      architecture: "Application Java avec visualisation graphique, implémentation de plusieurs algorithmes (Greedy, Branch & Bound, Génétique).",
      technologies: ["Java", "JavaFX", "Algorithmes génétiques", "Structures de données"],
      challenges: [
        "Optimisation des performances pour de grandes instances",
        "Visualisation interactive du processus d'optimisation",
        "Comparaison empirique des différentes approches",
        "Documentation technique détaillée des algorithmes",
      ],
      github: "https://github.com/deep-coding15/",
    },
  ]; */

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
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Github size={20} />
                    Voir sur GitHub
                  </a>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50 transition-colors border border-purple-500/30">
                    <ExternalLink size={20} />
                    Démo (bientôt)
                  </button>
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