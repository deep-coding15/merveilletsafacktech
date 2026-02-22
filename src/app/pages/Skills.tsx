import { motion } from "motion/react";
import { Code, Laptop, Server, Cpu, Database, Terminal } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programmation",
      icon: Code,
      color: "from-purple-600 to-indigo-600",
      skills: [
        { name: "Java", description: "Programmation orientée objet, Spring Boot, design patterns" },
        { name: "PHP", description: "Développement web, Laravel, architecture MVC" },
        { name: "JavaScript", description: "ES6+, programmation asynchrone, frameworks modernes" },
        { name: "Dart", description: "Développement mobile avec Flutter, programmation réactive" },
        { name: "SQL", description: "Conception de schémas, requêtes optimisées, jointures complexes" },
      ],
    },
    {
      title: "Frontend",
      icon: Laptop,
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "React", description: "Hooks, state management, composants réutilisables" },
        { name: "Angular", description: "TypeScript, services, reactive forms, routing" },
        { name: "Flutter", description: "Widgets, state management, animations, UI/UX mobile" },
        { name: "Tailwind CSS", description: "Design moderne, responsive, utility-first CSS" },
        { name: "Responsive Design", description: "Mobile-first, grids, flexbox, accessibilité" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-600 to-emerald-600",
      skills: [
        { name: "Laravel", description: "Eloquent ORM, middlewares, API development, authentication" },
        { name: "Spring Boot", description: "REST APIs, JPA/Hibernate, security, microservices basics" },
        { name: "Serverpod", description: "Backend Dart, real-time communication, database integration" },
        { name: "Node.js", description: "Express, API REST, gestion asynchrone" },
        { name: "API RESTful", description: "Design d'APIs, versioning, documentation, sécurité" },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      icon: Terminal,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "Docker", description: "Conteneurisation, Dockerfiles, Docker Compose, orchestration" },
        { name: "CI/CD", description: "Pipelines automatisés, tests, déploiement continu" },
        { name: "GitHub Actions", description: "Workflows, automation, testing, deployment" },
        { name: "Cloud Basics", description: "Concepts cloud, services managés, déploiement" },
        { name: "Nginx", description: "Reverse proxy, load balancing, configuration SSL" },
      ],
    },
    {
      title: "Bases de données",
      icon: Database,
      color: "from-pink-600 to-purple-600",
      skills: [
        { name: "MySQL", description: "Modélisation relationnelle, transactions, indexation" },
        { name: "PostgreSQL", description: "Requêtes avancées, fonctions, triggers, performance" },
        { name: "MongoDB", description: "NoSQL, documents JSON, agrégations, scalabilité" },
        { name: "Design de BDD", description: "Normalisation, schémas, relations, optimisation" },
        { name: "Optimisation SQL", description: "Indexes, explain plans, query tuning, caching" },
      ],
    },
    {
      title: "Informatique fondamentale",
      icon: Cpu,
      color: "from-yellow-600 to-orange-600",
      skills: [
        { name: "Structures de données", description: "Listes, arbres, graphes, tables de hachage" },
        { name: "Algorithmes", description: "Tri, recherche, parcours, complexité algorithmique" },
        { name: "Design patterns", description: "MVC, Repository, Factory, Observer, Strategy" },
        { name: "Architecture logicielle", description: "Clean architecture, SOLID, séparation des concerns" },
        { name: "Tests & Automatisation", description: "Tests unitaires, tests d'intégration, TDD basics" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
            Compétences & Stack Technique
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Une base solide en développement full-stack, architecture système et DevOps, 
            en constante évolution à travers l'apprentissage et la pratique.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <category.icon size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="border-l-2 border-purple-500/30 pl-3 sm:pl-4">
                    <h3 className="text-gray-200 font-semibold mb-1 text-sm sm:text-base">{skill.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            En apprentissage continu
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-5 sm:mb-6 px-2">
            Ces compétences représentent mon niveau actuel, mais je suis constamment en train d'apprendre, 
            d'expérimenter et de m'améliorer. Chaque projet est une opportunité de progresser.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/30 border border-purple-500/40 rounded-full text-purple-200 text-xs sm:text-sm">
              Kubernetes (en cours)
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/30 border border-purple-500/40 rounded-full text-purple-200 text-xs sm:text-sm">
              Microservices
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/30 border border-purple-500/40 rounded-full text-purple-200 text-xs sm:text-sm">
              System Design
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/30 border border-purple-500/40 rounded-full text-purple-200 text-xs sm:text-sm">
              AWS/Azure
            </span>
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/30 border border-purple-500/40 rounded-full text-purple-200 text-xs sm:text-sm">
              Architecture distribuée
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}