import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      {/* Banner Section */}
      <div className="w-full bg-gray-900/70 border border-purple-500/10 rounded-xl p-6 sm:p-8 mb-8 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 max-w-3xl mx-auto"
        >
          {/* Avatar - Left */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg p-1">
              <div className="w-full h-full overflow-hidden rounded-full bg-white">
                <img
                  src="/merveille.jpeg"
                  alt="Merveille"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title - Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Lydivine Merveille MAGNE TSAFACK
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-1"
            >
              <p className="text-lg sm:text-xl text-purple-300 font-semibold">
                Élève-ingénieure en double diplôme • M2 QUASSI, Polytech Angers
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                IA agentique appliquée au test • Validation logicielle • Sûreté de fonctionnement
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl w-full mx-auto">
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 text-center"
        >
          En double diplôme de Génie Informatique à l'ENSA de Tétouan et de M2
          QUASSI à Polytech Angers, je combine développement full-stack, tests
          automatisés et culture de la sûreté de fonctionnement. Je recherche un
          stage de fin d'études de 6 mois à partir de février 2027 pour contribuer
          à la validation et à la fiabilité de logiciels exigeants, notamment avec
          l'IA agentique.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 md:mb-16 px-2"
        >
          <Link
            to="/projects"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 font-semibold text-sm sm:text-base"
          >
            Voir mes projets
          </Link>
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 text-white rounded-lg hover:bg-gray-800/60 hover:border-purple-500/50 transition-all duration-300 font-semibold text-sm sm:text-base"
          >
            Me contacter
          </Link>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-8"
        >
          <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">2</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Diplômes préparés en double cursus</div>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">6 mois</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Durée du stage recherché</div>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">Fév. 2027</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Disponibilité pour le stage</div>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">B2</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Anglais</div>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">IA + QA</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-300">Axes de spécialisation</div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 sm:mt-12 md:mt-16 flex justify-center gap-4 sm:gap-6"
        >
          <a
            href="https://github.com/deep-coding15"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/lydivine-merveille-magne-tsafack"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="mailto:tsafackmerveillem@gmail.com"
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900/60 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
