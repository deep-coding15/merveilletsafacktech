import { motion } from "motion/react";
import { Code, Laptop, Server, Cpu, Database, Terminal, Zap } from "lucide-react";
import { competencesEnCours } from "../competencesEnCours";

export function Skills() {
  const skillCategories = [
    {
      title: "Programmation",
      icon: Code,
      color: "from-purple-600 to-indigo-600",
      skills: [
        { name: "Java", description: "Développement backend avec Spring Boot" },
        { name: "Python", description: "Projets data et APIs avec FastAPI" },
        { name: "PHP", description: "Développement web avec Laravel" },
        { name: "JavaScript", description: "ES6+, programmation asynchrone et React.js" },
        //{ name: "Dart", description: "Développement mobile avec Flutter, programmation réactive" },
        { name: "SQL & bases de données", description: "MySQL, PostgreSQL, MongoDB, conception de schémas et requêtes" },
      ],
    },
    {
      title: "Frontend",
      icon: Laptop,
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "React", description: "Hooks, state management, composants réutilisables" },
        //{ name: "Angular", description: "TypeScript, services, reactive forms, routing" },
        { name: "Flutter", description: "Widgets, state management, animations, UI/UX mobile" },
        { name: "Tailwind CSS", description: "Design moderne, responsive, utility-first CSS" },
        { name: "Responsive Design", description: "Mobile-first, Tablet-first, grids, flexbox, accessibilité" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-600 to-emerald-600",
      skills: [
        { name: "Laravel", description: "Eloquent ORM, middlewares, developpement d'API, authentification" },
        { name: "Spring Boot", description: "APIs REST, JPA/Hibernate, sécurité et architecture en couches" },
        { name: "Serverpod", description: "Backend Dart, real-time communication, database integration" },
        { name: "Node.js", description: "Express, API REST, gestion asynchrone" },
        { name: "API REST", description: "Conception, documentation et tests d'API" },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      icon: Terminal,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "CI/CD", description: "Pipelines de tests et de déploiement avec Jenkins et GitHub Actions" },
        { name: "Conteneurisation", description: "Docker et optimisation de docker file" },
        { name: "Qualité du code", description: "Nexus ; intégration de SonarQube en cours" },
        { name: "Systèmes", description: "Linux, VPS, Nginx, Windows Server 2022, Active Directory, GPO et PowerShell" },
        { name: "Observabilité", description: "Prometheus, Loki et Grafana" },
      ],
    },
    {
      title: "Bases de données",
      icon: Database,
      color: "from-pink-600 to-purple-600",
      skills: [
        { name: "Optimisation SQL", description: "Indexes, vues, verrous SQL, triggers" },
        { name: "MySQL & PostgreSQL", description: "Bases relationnelles, transactions, indexation" },
        { name: "MongoDB", description: "Base de données orientée documents" },
      ],
    },
    {
      title: "Informatique fondamentale",
      icon: Cpu,
      color: "from-yellow-600 to-orange-600",
      skills: [
        { name: "Qualité & test logiciel", description: "Plans et cas de test (méthodologie ISTQB), traçabilité exigences/tests, campagnes de recette et rapports d'anomalies" },
        { name: "Tests automatisés", description: "Selenium, JUnit, Cucumber (BDD), tests d'API REST ; Playwright avec Python en apprentissage" },
        { name: "Sûreté de fonctionnement", description: "AMDEC, arbres de défaillances et indicateurs de fiabilité" },
        { name: "Référentiels abordés en M2", description: "ISO 9001, CMMI, ISO 25000, ITIL, ISO 27000, CEI 61508, ISO 26262 et DO-178C" },
      ],
    },
    {
      title: "Méthodes & langues",
      icon: Code,
      color: "from-cyan-600 to-blue-600",
      skills: [
        { name: "Méthodes de travail", description: "Agile / Scrum" },
        { name: "Français", description: "Langue maternelle" },
        { name: "Anglais", description: "Niveau B2 — technique, écrit et oral" },
      ],
    },
    {
      title: "IA agentique & qualité logicielle",
      icon: Zap,
      color: "from-violet-600 to-purple-600",
      skills: [
        { name: "IA appliquée au test", description: "Workflows multi-agents LLM, RAG et génération assistée de cas de test (formations en cours)" },
        { name: "Pratiques qualité", description: "TDD, BDD et automatisation des tests dans les pipelines CI/CD" },
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

  // @ts-ignore
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
            Développement full-stack, test et validation, qualité logicielle et sûreté de fonctionnement. Je me forme actuellement à l'IA agentique appliquée au test et à l'automatisation QA.
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
            d'expérimenter et de m'améliorer. Je suis notamment les formations « The Complete Agentic AI Engineering Course »
            et « Generative AI for QA Engineers: Agents, RAG & LLM Testing ».
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {competencesEnCours.map((ce) => (
              (
                <span key={ce.name} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600/30 border border-purple-500/40 rounded-full text-purple-200 text-xs sm:text-sm">
                  {ce.name} {ce.active ? <span className="text-red-300">(en cours)</span> : ""}
                </span>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}