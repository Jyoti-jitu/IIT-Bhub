import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Zap, Shield, Sparkles } from 'lucide-react';

const AISection = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { role: 'system', content: 'Connecting to Lab AI Server...' },
    { role: 'assistant', content: 'Hello! I am Aurora, a multimodal LLM developed by the AI Research Lab. How can I assist you in exploring our research today?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    setMessages([...messages, { role: 'user', content: inputText }]);
    setInputText('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm a demonstration interface. In our actual lab infrastructure, I am connected to a cluster of H100s handling complex inference tasks for computer vision and NLP research." 
      }]);
    }, 1000);
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-500/5 to-slate-50 dark:from-slate-900 dark:via-blue-900/10 dark:to-slate-900 transition-colors duration-300" id="technology">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 dark:bg-blue-900/50 border border-blue-400/30 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 transition-colors duration-300">
                <Sparkles size={14} />
                Powered by Large Language Models
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
                Next-Generation <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Multimodal Inference
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 transition-colors duration-300">
                Our proprietary architectures push the boundaries of what's possible with neural networks. We focus on creating models that are not only highly capable but structurally efficient, interpretable, and aligned with human values.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Zap className="text-amber-500 dark:text-amber-400 w-6 h-6" />, title: "Ultra-Low Latency Inference", desc: "Custom quantization techniques allowing 70B models to run locally with minimal accuracy loss." },
                { icon: <Shield className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />, title: "Robust AI Alignment", desc: "Pioneering novel RLHF approaches using constitutional constraints and minimal supervision." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl glass-card border border-slate-200 dark:border-slate-700/50 hover:border-slate-400 dark:hover:border-slate-500 transition-colors">
                  <div className="mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Read Technical Report
            </button>
          </motion.div>

          {/* Interactive Chat Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[500px] transition-colors duration-300">
              {/* Header */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between transition-colors duration-300">
                <div className="flex items-center gap-3">
                  <Terminal className="text-blue-600 dark:text-blue-400 w-5 h-5" />
                  <span className="font-mono text-sm text-slate-700 dark:text-slate-300">Aurora_v2.4_70B.sh</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-lg px-4 py-3 ${
                      msg.role === 'user' 
                        ? 'bg-blue-100 dark:bg-blue-600/20 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-500/30' 
                        : msg.role === 'system'
                        ? 'bg-transparent text-slate-500 text-xs text-center w-full'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                    } transition-colors duration-300`}>
                      {msg.role === 'assistant' && <span className="text-purple-600 dark:text-purple-400 font-bold block mb-1">Aurora:</span>}
                      {msg.role === 'user' && <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1">User:</span>}
                      <p className="leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
                <form onSubmit={handleSend} className="relative">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ask about our research..." 
                    className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg pl-4 pr-12 py-3 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-mono transition-all"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AISection;
