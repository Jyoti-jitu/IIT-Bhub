import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, GraduationCap, MapPin } from 'lucide-react';

const STATS = [
  { icon: <Users size={18} />, label: 'Lab Members', value: '25+' },
  { icon: <GraduationCap size={18} />, label: 'PhD Scholars', value: '12' },
  { icon: <BookOpen size={18} />, label: 'Alumni Network', value: '40+' },
  { icon: <MapPin size={18} />, label: 'Location', value: 'IIT Campus' },
];

const PeopleHeader = () => (
  <section className="relative pt-28 pb-20 overflow-hidden bg-slate-950">
    {/* Grid Background */}
    <div
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.06) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
      }}
    />

    {/* Glow Orbs */}
    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute top-20 left-1/4 w-[350px] h-[350px] bg-teal-600/10 rounded-full blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 right-10 w-[200px] h-[200px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-bold uppercase tracking-widest"
        >
          <Users size={13} />
          The Minds Behind The Lab
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
        >
          Our{' '}
          <span className="relative inline-block">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #2dd4bf 0%, #3b82f6 100%)',
              }}
            >
              People
            </span>
            {/* Underline glow */}
            <span
              className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full opacity-60"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #2dd4bf, #3b82f6)',
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-14"
        >
          A vibrant community of primary investigators, doctoral scholars, and bright undergraduate researchers driving the frontier of artificial intelligence.
        </motion.p>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="inline-flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {STATS.map(({ icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-teal-400 group-hover:border-teal-500/50 transition-colors">
                {icon}
              </div>
              <div className="text-left">
                <div className="text-xl font-extrabold text-white leading-none">
                  {value}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
  </section>
);

export default PeopleHeader;
