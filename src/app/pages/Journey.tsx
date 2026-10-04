import { motion } from "motion/react";
import { GraduationCap, Code, Rocket, RadicalIcon, Target, TrendingUp, Lightbulb, BookOpen, Laptop, Zap, Award, Users } from "lucide-react";

export function Journey() {
  const journeySteps = [
    /*{
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
    },*/
    {
      year: "2026 – 2027",
      title: "Double diplôme : Génie Informatique & M2 QUASSI",
      type: "Formation",
      description: "Cycle ingénieur en Génie Informatique à l'ENSA de Tétouan et Master 2 QUASSI (Qualité et Sûreté de fonctionnement des Systèmes Informatiques) à Polytech Angers. Diplômes attendus en juin 2027.",
      icon: BookOpen,
      color: "from-green-600 to-emerald-600",
      achievements: [
        "Spécialisation en qualité logicielle, test et validation",
        "Automatisation QA, sûreté de fonctionnement (RAMS, AMDEC) et management de projet",
        "Référentiels qualité, sûreté et sécurité étudiés dans le cadre du M2",
        "Projet tutoré KEREVAL : agent IA pour l'analyse de spécifications OpenAPI et l'automatisation de tests d'API",
      ],
    },
    {
      year: "2025",
      title: "Développement Full-Stack",
      type: "Formation",
      description: "Apprentissage du développement web complet avec focus sur les bonnes pratiques et l'architecture logicielle. Bases solides en programmation et bases de données.",
      icon: Laptop,
      color: "from-orange-600 to-red-600",
      achievements: [
        "Premiers projets personnels",
        "Bonne base aux langages Java, C",
        "Réseaux et systèmes d'exploitation",
        "Introduction aux Design patterns et architecture MVC",
        "Introduction aux Frameworks et aux bonnes pratiques logicielles",
        /* "Maîtrise de Java, PHP, JavaScript",
        "Frameworks : Spring Boot, Laravel, React, Angular",
        "Bases de données : MySQL, PostgreSQL, MongoDB",
        "Design patterns et architecture MVC",
        "API RESTful et communication client-serveur",
        "Responsive design et UX/UI",*/
      ],
    },
    {
      year: "2024",
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
    {
      year: "2022-2024",
      title: "Classes préparatoires",
      type: "Fondations",
      description: "Je reussis un concours pour aller dans une ecole d'ingenieurs où je me forme en classes préparatoire pour le cycle ingenieur.",
      icon: RadicalIcon,
      color: "from-pink-600 to-purple-600",
      achievements: [
        "Mathématiques",
        "Physiques",
        "Chimie",
        "Informatique",
      ],
    },
  ];

  const futureGoals = [
    {
      title: "IA agentique appliquée au test",
      description: "Explorer les workflows multi-agents et le RAG pour analyser des spécifications et assister la génération de cas de test.",
      icon: Zap,
    },
    {
      title: "Test & validation logicielle",
      description: "Concevoir des stratégies de test traçables et automatiser la validation fonctionnelle et non-régressive.",
      icon: Target,
    },
    {
      title: "Qualité & sûreté de fonctionnement",
      description: "Contribuer à la fiabilité de logiciels exigeants par l'assurance qualité, l'analyse des risques et les méthodes RAMS.",
      icon: Award,
    },
  ];

  const engagements = [
    {
      title: "Étudiante référente — Crous Belle Beille",
      period: "Depuis septembre 2026",
      description: "Accueil et accompagnement des résidents, animation du lien social et appui aux démarches du quotidien.",
      icon: Users,
    },
    {
      title: "Trésorière — EIS Club, ENSA de Tétouan",
      period: "Février 2025 – septembre 2026",
      description: "Gestion budgétaire et suivi financier du club.",
      icon: Award,
    },
    {
      title: "2e place — Hackathon Codage & IA",
      period: "AEBM × ASEGUIM, mai 2026",
      description: "Distinction obtenue avec The Beginning, une plateforme d'orientation professionnelle avec IA.",
      icon: Zap,
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
            Mon double cursus en Génie Informatique et en qualité logicielle, test,
            validation et sûreté de fonctionnement.
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
                        {(item.type === "Approfondissement" || item.year === "2026 – 2027") && (
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
              Ma spécialisation : IA agentique pour le test, validation logicielle & sûreté de fonctionnement
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
              Je recherche un stage de fin d'études de 6 mois à partir de février 2027
              pour concevoir des stratégies de test, automatiser la validation et
              contribuer à la fiabilité de logiciels exigeants.
            </p>
          </div>
        </motion.div>

        {/* Engagement & distinctions */}
        <section className="mt-12 sm:mt-16" aria-labelledby="engagements-title">
          <h2 id="engagements-title" className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
            Engagement & distinctions
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {engagements.map((engagement) => (
              <article key={engagement.title} className="bg-gray-900/40 border border-purple-500/20 rounded-xl p-6">
                <engagement.icon className="text-purple-400 mb-4" size={28} aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-1">{engagement.title}</h3>
                <p className="text-sm text-purple-300 mb-3">{engagement.period}</p>
                <p className="text-gray-300">{engagement.description}</p>
              </article>
            ))}
          </div>
        </section>

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