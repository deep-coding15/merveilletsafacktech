import { motion } from "motion/react";
import { BookOpen, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { categories } from "../categories";

export function Blog() {
  const upcomingPosts = [
    {
      title: "Mon premier pipeline CI CD avec Github Actions et AWS EC2",
      description: "Mes apprentissages sur la conception de systèmes scalables, les patterns d'architecture, et comment aborder le system design sans expérience professionnelle.",
      category: "DevOps",
      readTime: "8 min",
      date: "19 Fev 2026",
      slug: "premier-ci-cd-pipeline",
    },
    {
      title: "Pourquoi ne pas pousser le fichier *.env* dans un repo github",
      description: "Mes apprentissages sur la conception de systèmes scalables, les patterns d'architecture, et comment aborder le system design sans expérience professionnelle.",
      category: "Notes",
      readTime: "8 min",
      date: "20 Fev 2026",
      slug: "file-dot-env-github",
    },
    {
      title: "Pourquoi on ne supprime (presque) jamais les données en génie logiciel ?",
      description: `DELETE FROM users WHERE id = 5;
        Vraiment ?
        Dans la réalité des systèmes en production, la requête ressemble beaucoup plus à :
        UPDATE users SET status = 'deleted' AND deleted_at = NOW() WHERE id = 5;
        Et ce n’est pas un hasard.
      `,
      category: "Architecture Logicielle",
      readTime: "8 min",
      date: "A venir",
      slug: "not-only-delete-data",
    },
    /* {
      title: "Pourquoi on ne supprime (presque) jamais les données en génie logiciel ?",
      description: `DELETE FROM users WHERE id = 5;
        Vraiment ?
        Dans la réalité des systèmes en production, la requête ressemble beaucoup plus à :
        UPDATE users SET status = 'deleted' AND deleted_at = NOW() WHERE id = 5;
        Et ce n’est pas un hasard.
      `,
      category: "Architecture Logicielle",
      readTime: "8 min",
      date: "A venir",
      slug: "not-only-delete-data",
    }, */
  ]

  /* const upcomingPosts = [
    {
      title: "Comprendre le System Design en tant qu'étudiant en ingénierie",
      description: "Mes apprentissages sur la conception de systèmes scalables, les patterns d'architecture, et comment aborder le system design sans expérience professionnelle.",
      category: "Architecture",
      readTime: "8 min",
      date: "Mars 2026",
      slug: "system-design-etudiant",
    },
    {
      title: "Comment j'ai construit ma première architecture production-ready",
      description: "Le parcours complet de la conception à la mise en production d'une application web, incluant les erreurs commises et les leçons apprises.",
      category: "DevOps",
      readTime: "12 min",
      date: "Mars 2026",
      slug: "premiere-architecture-production",
    },
    {
      title: "Apprendre le DevOps depuis zéro : mon guide personnel",
      description: "Les ressources, projets pratiques et étapes que j'ai suivies pour maîtriser Docker, CI/CD, et les principes d'infrastructure moderne.",
      category: "DevOps",
      readTime: "10 min",
      date: "Avril 2026",
      slug: "apprendre-devops",
    },
    {
      title: "Construire des applications scalables étape par étape",
      description: "Un guide pratique sur la scalabilité : load balancing, caching, bases de données distribuées, et architecture microservices.",
      category: "Architecture",
      readTime: "15 min",
      date: "Avril 2026",
      slug: "applications-scalables",
    },
    {
      title: "Leçons de génie logiciel tirées de mes projets étudiants",
      description: "Ce que mes projets personnels m'ont appris sur le clean code, les design patterns, les tests, et la maintenance du code.",
      category: "Développement",
      readTime: "7 min",
      date: "Mai 2026",
      slug: "lecons-projets-etudiants",
    },
    {
      title: "Du monolithe aux microservices : étude de cas pratique",
      description: "Comment j'ai décomposé une application monolithique en microservices, les défis rencontrés et les patterns appliqués.",
      category: "Architecture",
      readTime: "13 min",
      date: "À venir",
      slug: "",
    },
    {
      title: "Optimisation de bases de données : de la théorie à la pratique",
      description: "Techniques d'indexation, requêtes optimisées, partitioning, et monitoring de performance dans des projets réels.",
      category: "Base de données",
      readTime: "11 min",
      date: "À venir",
      slug: "",
    },
    {
      title: "Mes outils et workflow de développement en 2026",
      description: "Les IDE, extensions, outils CLI, et processus que j'utilise quotidiennement pour être productif et écrire du code de qualité.",
      category: "Productivité",
      readTime: "6 min",
      date: "À venir",
      slug: "",
    },
  ]; */

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 mb-4 sm:mb-6">
            <Sparkles size={18} />
            <span className="text-sm sm:text-base">Blog d'Ingénierie</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Réflexions & Apprentissages
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Mes expériences en développement, architecture système, DevOps et infrastructure.
            Un journal de mon évolution technique et des leçons apprises en chemin.
          </p>
        </motion.div>

        {/* Upcoming Posts */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:gap-6 sm:grid-cols-1 md:grid-cols-2"
        >
          {upcomingPosts.map((post) => {
            const CardContent = (
              <>
                <div className="flex items-start justify-between mb-4">                  
                  <span
                    className={`px-3 py-1 text-xs rounded-full text-white ${
                      categories.find((c) => c.name === post.category)?.color || "bg-gray-500"
                    }`}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-400">{post.date}</span>
                  <ArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </>
            );

            return (
              <motion.div key={post.title} variants={item}>
                {post.slug != '' &&  post.date.toLowerCase() !== 'a venir' ? (
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 cursor-pointer group"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 opacity-60 cursor-not-allowed">
                    {CardContent}
                  </div>
                )}
                
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12"
        >
          <div className="text-center">
            <BookOpen className="mx-auto mb-4 text-purple-400" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">
              Articles en cours de rédaction
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
              Je prépare actuellement du contenu de qualité basé sur mes expériences réelles et mes apprentissages.
              Ces articles seront publiés progressivement au fur et à mesure de mes avancées dans mes projets et mes études.
            </p>
            <div className="bg-gray-900/60 border border-purple-500/20 rounded-lg p-6 max-w-xl mx-auto">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">
                Objectifs du blog :
              </h3>
              <ul className="text-left text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Documenter mon parcours d'apprentissage technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Partager des solutions à des problèmes concrets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Créer des guides pratiques pour d'autres étudiants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Approfondir ma compréhension en enseignant aux autres</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Restez informé
          </h3>
          <p className="text-gray-300 mb-6">
            Je vous notifierai lors de la publication des premiers articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 bg-gray-900/60 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60"
            />
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}