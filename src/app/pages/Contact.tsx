import { motion } from "motion/react";
import { Mail, Github, Linkedin, MessageSquare, Send, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    try {
      // Configuration EmailJS
      // Pour utiliser EmailJS, créez un compte sur https://www.emailjs.com/
      // Remplacez ces valeurs par vos propres clés
      const serviceId = "YOUR_SERVICE_ID"; // Remplacer par votre Service ID
      const templateId = "YOUR_TEMPLATE_ID"; // Remplacer par votre Template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Remplacer par votre Public Key

      // Alternative : utiliser FormSubmit (plus simple, pas besoin de configuration)
      // Envoi via FormSubmit.co (gratuit et sans configuration)
      const formSubmitEndpoint = "https://formsubmit.co/ajax/tsafackmerveillem@gmail.com"; // Remplacer par votre email
      
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Nouveau message depuis le portfolio",
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject || "Nouveau message"}`,
          _captcha: "false", // Désactiver le captcha pour les tests
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Réinitialiser après 5 secondes
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Veuillez réessayer ou m'envoyer un email directement.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Contactez-moi
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Intéressé par mon profil ? Une question sur mes projets ? 
            N'hésitez pas à me contacter, je serai ravi d'échanger avec vous.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              Informations de contact
            </h2>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={22} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Email</h3>
                  <a
                    href="mailto:tsafackmerveillem@gmail.com"
                    className="text-purple-300 hover:text-purple-200 transition-colors text-sm sm:text-base break-all"
                  >
                    tsafackmerveillem@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin size={22} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/lydivine-merveille-magne-tsafack/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 transition-colors text-sm sm:text-base break-all"
                  >
                    linkedin.com/in/lydivine-merveille-magne-tsafack
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github size={22} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">GitHub</h3>
                  <a
                    href="https://github.com/deep-coding15"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 hover:text-purple-200 transition-colors text-sm sm:text-base break-all"
                  >
                    github.com/deep-coding15
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-5 sm:p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-white sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Localisation</h3>
                  <p className="text-purple-300 text-sm sm:text-base">Maroc</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              Envoyez-moi un message
            </h2>

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/60 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors text-sm sm:text-base"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/60 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors text-sm sm:text-base"
                  placeholder="tsafackmerveillem@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/60 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors text-sm sm:text-base"
                  placeholder="Opportunité de collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-900/60 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors resize-none text-sm sm:text-base"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                {status === "loading" ? (
                  <Loader2 size={18} className="sm:w-5 sm:h-5 animate-spin" />
                ) : (
                  <Send size={18} className="sm:w-5 sm:h-5" />
                )}
                Envoyer le message
              </button>

              {status === "success" && (
                <div className="mt-4 text-sm sm:text-base text-green-400 flex items-center gap-2">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5" />
                  Message envoyé avec succès !
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 text-sm sm:text-base text-red-400 flex items-center gap-2">
                  <AlertCircle size={18} className="sm:w-5 sm:h-5" />
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 sm:p-10 md:p-12 text-center"
        >
          <MessageSquare className="mx-auto mb-5 sm:mb-6 text-purple-400" size={44} />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Discutons de vos projets
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Je suis ouvert aux opportunités de stage, de collaboration sur des projets intéressants, 
            et d'échanges techniques avec d'autres passionnés de technologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="mailto:tsafackmerveillem@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm sm:text-base"
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              M'envoyer un email
            </a>
            <a
              href="https://linkedin.com/in/lydivine-merveille-magne-tsafack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/60 border border-purple-500/30 text-white rounded-lg hover:bg-gray-800/60 transition-colors font-semibold text-sm sm:text-base"
            >
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              Me suivre sur LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}