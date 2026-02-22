import { motion } from "motion/react";
import { GraduationCap, Code, Rocket, Target, TrendingUp, Lightbulb, BookOpen, Laptop, Zap, Award } from "lucide-react";

export function Journey() {
  const journeySteps = [
    {
      year: "2026",
      title: "Spécialisation Infrastructure & QA",
      type: "Approfondissement",
      description: "Focus sur l'architecture d'infrastructure, les systèmes distribués et l'assurance qualité. Apprentissage de Kubernetes, Terraform, monitoring avancé et stratégies de tests automatisés.",
      icon: Rocket,
      color: "from-purple-600 to-indigo-600",
      achievements: [
        "Étude approfondie de l'architecture d'infrastructure cloud",
        "Kubernetes : orchestration, scaling, service mesh",
        "Infrastructure as Code avec Terraform",
        "Mise en place de stratégies de tests complètes (unitaires, intégration, e2e)",
        "Monitoring et observabilité (Prometheus, Grafana)",
        "CI/CD avancé avec tests automatisés et quality gates",
      ],
    },
    {
      year: "2025",
      title: "Projets DevOps & Architecture",
      type: "Pratique",
      description: "Développement de projets mettant l'accent sur l'infrastructure, la conteneurisation et la qualité du code. Mise en production d'applications avec pipelines CI/CD complets.",
      icon: Code,
      color: "from-blue-600 to-cyan-600",
      achievements: [
        "Plateforme de réservation avec architecture microservices",
        "Dockerisation complète et orchestration multi-conteneurs",
        "Pipeline CI/CD avec tests automatisés à chaque étape",
        "Déploiement production-ready avec monitoring",
        "Implémentation de tests unitaires et d'intégration",
        "Configuration Nginx pour load balancing et SSL",
      ],
    },
    {
      year: "2024",
      title: "Formation DevOps & Tests",
      type: "Apprentissage",
      description: "Introduction au DevOps, Docker, CI/CD et aux pratiques de tests logiciels. Découverte de l'importance de l'infrastructure et de la qualité.",
      icon: BookOpen,
      color: "from-green-600 to-emerald-600",
      achievements: [
        "Maîtrise de Docker et conteneurisation",
        "Premiers pipelines CI/CD avec GitHub Actions",
        "Apprentissage des tests : TDD, tests unitaires, intégration",
        "Concepts de système design et architecture distribuée",
        "Configuration de serveurs et reverse proxy",
        "Versioning et collaboration avec Git avancé",
      ],
    },
    {
      year: "2023",
      title: "Développement Full-Stack",
      type: "Formation",
      description: "Apprentissage du développement web complet avec focus sur les bonnes pratiques et l'architecture logicielle. Bases solides en programmation et bases de données.",
      icon: Laptop,
      color: "from-orange-600 to-red-600",
      achievements: [
        "Maîtrise de Java, PHP, JavaScript",
        "Frameworks : Spring Boot, Laravel, React, Angular",
        "Bases de données : MySQL, PostgreSQL, MongoDB",
        "Design patterns et architecture MVC",
        "API RESTful et communication client-serveur",
        "Responsive design et UX/UI",
      ],
    },
    {
      year: "2022",
      title: "Début en Génie Informatique",
      type: "Fondations",
      description: "Entrée à l'université en génie informatique. Découverte de la programmation, des algorithmes et des structures de données. Passion pour l'informatique confirmée.",
      icon: GraduationCap,
      color: "from-pink-600 to-purple-600",
      achievements: [
        "Fondamentaux de la programmation",
        "Structures de données et algorithmes",
        "Architecture des ordinateurs",
        "Réseaux et systèmes d'exploitation",
        "Premiers projets personnels",
        "Participation à des communautés tech",
      ],
    },
  ];

  const futureGoals = [
    {
      title: "Architecte d'Infrastructure Cloud",
      description: "Concevoir et gérer des infrastructures cloud scalables, résilientes et sécurisées avec Kubernetes, Terraform et les meilleures pratiques DevOps.",
      icon: Zap,
    },
    {
      title: "Expert QA & Testing",
      description: "Maîtriser les stratégies de tests automatisés, l'assurance qualité continue et les frameworks de tests pour garantir la fiabilité des systèmes.",
      icon: Target,
    },
    {
      title: "Spécialiste Systèmes Distribués",
      description: "Architecturer des systèmes distribués performants avec microservices, message queues, caching distribué et patterns de résilience.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Mon Parcours d'Ingénierie
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Une chronologie de mon évolution en tant qu'étudiant en génie informatique, 
            mes apprentissages passés, mes focus actuels, et ma vision pour l'avenir.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-600 hidden md:block" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {journeySteps.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Icon */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <item.icon size={28} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="md:ml-24 bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`md:hidden w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        {item.type === "Approfondissement" && (
                          <span className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-full text-green-300 text-xs">
                            En cours
                          </span>
                        )}
                        {item.type === "Pratique" && (
                          <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-xs">
                            À venir
                          </span>
                        )}
                      </div>
                      <p className="text-purple-400">{item.year}</p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${item.color} flex-shrink-0`} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12"
        >
          <div className="text-center mb-8">
            <Lightbulb className="mx-auto mb-4 text-purple-400" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">
              Vision & Objectifs futurs
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ma spécialisation : Architecture d'Infrastructure, Systèmes Distribués & Assurance Qualité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {futureGoals.map((goal, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/60 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4`}>
                  <goal.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
                <p className="text-gray-300">{goal.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Mon objectif est de devenir un expert en conception d'infrastructures robustes, 
              en architecture de systèmes distribués scalables, et en assurance qualité à tous les niveaux. 
              Je veux garantir que les systèmes que je conçois sont fiables, performants et testés rigoureusement.
            </p>
          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto italic">
            "Le voyage est aussi important que la destination. Chaque ligne de code, chaque bug résolu, 
            chaque concept maîtrisé me rapproche de devenir l'ingénieur que je veux être."
          </p>
          <p className="text-purple-400 mt-4">— Merveille Tsafack</p>
        </motion.div>
      </div>
    </div>
  );
}