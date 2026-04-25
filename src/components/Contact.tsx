import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Web3Forms API configuration
    const YOUR_ACCESS_KEY = "204af67f-3ca3-4e32-adb3-e90bfc731dab";

    const formData = new FormData(e.currentTarget);
    const dataObject = Object.fromEntries(formData);
    const payload = JSON.stringify({
      access_key: YOUR_ACCESS_KEY,
      ...dataObject
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: payload
      });
      
      const result = await response.json();
      
      if (result.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        console.error("Form submission failed", result);
        setFormStatus('idle');
      }
    } catch (error) {
      console.error("API error", error);
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">great</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you need a robust backend architecture, scalable APIs, or an optimized system for your business, I'm ready to turn your ideas into reality.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
          {/* Inner mesh effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30 pointer-events-none"></div>

          {/* Left Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative z-10"
          >
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium">Your Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-medium">Your Email</label>
                  <input type="email" id="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400 font-medium">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none" placeholder="Tell me about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className={`w-full group flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg ${formStatus === 'success' ? 'bg-green-500 text-white shadow-green-500/20' : 'bg-white text-black hover:bg-gray-200 shadow-white/10'}`}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
                {formStatus === 'submitting' && <span>Sending...</span>}
                {formStatus === 'success' && <span>Message Sent!</span>}
              </button>
            </form>
          </motion.div>

          {/* Right Side: Social Media */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/3 relative z-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-6">Connect across platforms</h3>
            <p className="text-gray-400 mb-8">
              Available for freelance opportunities and full-time positions. Reach out anywhere!
            </p>
            
            <div className="flex flex-col space-y-4">
              <a href="https://www.linkedin.com/in/ketan-venkatesh-ba1663277/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-black/30 border border-white/5 hover:border-blue-500/50 hover:bg-white/5 transition-all group">
                <FaLinkedin size={24} className="text-gray-400 group-hover:text-blue-500 mr-4 transition-colors" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">LinkedIn</span>
                  <span className="text-sm text-gray-500">Professional Network</span>
                </div>
              </a>
              
              <a href="https://github.com/ketanven" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-black/30 border border-white/5 hover:border-gray-400/50 hover:bg-white/5 transition-all group">
                <FaGithub size={24} className="text-gray-400 group-hover:text-white mr-4 transition-colors" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">GitHub</span>
                  <span className="text-sm text-gray-500">Code Repositories</span>
                </div>
              </a>

              <a href="https://www.fiverr.com/ketanpillai" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-black/30 border border-white/5 hover:border-green-500/50 hover:bg-white/5 transition-all group">
                <MessageSquare size={24} className="text-gray-400 group-hover:text-green-500 mr-4 transition-colors" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Fiverr</span>
                  <span className="text-sm text-gray-500">Freelance Gigs</span>
                </div>
              </a>

              <a href="https://www.upwork.com/freelancers/~015b0cdcd82a042980" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-black/30 border border-white/5 hover:border-green-500/50 hover:bg-white/5 transition-all group">
                <MessageSquare size={24} className="text-gray-400 group-hover:text-green-500 mr-4 transition-colors" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Upwork</span>
                  <span className="text-sm text-gray-500">Hire Me For Projects</span>
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
