import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Code2, Server, Network } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="mx-auto mt-10 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl p-1">              
              <div className="w-full h-full overflow-hidden rounded-full bg-white">
                <img
                  src="/merveille.jpeg"
                  alt="Merveille"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
          >
            Lydivine Merveille Magne Tsafack
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-semibold mb-2">
              Étudiant en Génie Informatique à Tétouan
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Architecture d'Infrastructure • Systèmes Distribués • QA & Testing
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2"
          >
            Passionné par la conception d'infrastructures robustes et scalables,
            l'architecture de systèmes distribués et l'assurance qualité.
            Je construis des solutions techniques fiables avec Docker, Kubernetes, CI/CD et tests automatisés.
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">4+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Années d'études</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Projets réalisés</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Technologies</div>
            </div>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-4 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">∞</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-300">Passion & curiosité</div>
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
        </motion.div>
      </div>
    </div>
  );
}