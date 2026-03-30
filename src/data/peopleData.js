// ─── people data ──────────────────────────────────────────────────────────────
export const PEOPLE = [
  // ── FACULTY ────────────────────────────────────────────────────────────────
  {
    id: 'f1',
    name: 'Dr. Alok Sharma',
    role: 'Associate Professor & Lab Director',
    category: 'Faculty',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Alok&backgroundColor=e2e8f0',
    bio: 'Dr. Sharma leads the AI Research Lab. His foundational work in geometric deep learning and neuro-symbolic AI has been featured in NeurIPS, ICML, and Nature Machine Intelligence. He previously held post-doctoral positions at MIT CSAIL prior to joining IIT.',
    researchInterests: ['Geometric Deep Learning', 'Neuro-Symbolic AI', 'AI for Science'],
    links: {
      scholar: 'https://scholar.google.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'f2',
    name: 'Dr. Meera Vasudevan',
    role: 'Assistant Professor',
    category: 'Faculty',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Meera&backgroundColor=e2e8f0',
    bio: 'Dr. Vasudevan focuses on robust natural language processing for low-resource languages. She directs the IndicNLP initiative within the lab and actively collaborates with industry partners on deploying LLMs in healthcare and education contexts.',
    researchInterests: ['Natural Language Processing', 'Multilingual Models', 'AI Alignment'],
    links: {
      scholar: 'https://scholar.google.com',
      github: null,
      linkedin: 'https://linkedin.com',
    },
  },

  // ── PhD STUDENTS ───────────────────────────────────────────────────────────
  {
    id: 'p1',
    name: 'Rahul K. Menon',
    role: 'PhD Scholar (PMRF)',
    category: 'PhD Students',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Rahul&backgroundColor=e2e8f0',
    researchInterests: ['Reinforcement Learning', 'Robotics', 'Control Systems'],
    links: {
      scholar: 'https://scholar.google.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'p2',
    name: 'Ananya Gupta',
    role: 'PhD Scholar',
    category: 'PhD Students',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Ananya&backgroundColor=e2e8f0',
    researchInterests: ['Computer Vision', 'Generative Models', 'Medical AI'],
    links: {
      scholar: 'https://scholar.google.com',
      github: 'https://github.com',
      linkedin: null,
    },
  },
  {
    id: 'p3',
    name: 'Karthik Subramanian',
    role: 'PhD Scholar (TCS Fellow)',
    category: 'PhD Students',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Karthik&backgroundColor=e2e8f0',
    researchInterests: ['Federated Learning', 'Privacy-Preserving AI'],
    links: {
      scholar: null,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'p4',
    name: 'Sneha Rao',
    role: 'PhD Scholar',
    category: 'PhD Students',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sneha&backgroundColor=e2e8f0',
    researchInterests: ['Graph Neural Networks', 'Drug Discovery', 'Bioinformatics'],
    links: {
      scholar: 'https://scholar.google.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },

  // ── UG RESEARCHERS ─────────────────────────────────────────────────────────
  {
    id: 'u1',
    name: 'Aditya Singh',
    role: 'B.Tech Student',
    category: 'UG Researchers',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Aditya&backgroundColor=e2e8f0',
    researchInterests: ['LLM Inference', 'Systems for ML', 'CUDA'],
    links: {
      scholar: null,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'u2',
    name: 'Priya Iyer',
    role: 'Dual Degree (B.Tech + M.Tech)',
    category: 'UG Researchers',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Priya&backgroundColor=e2e8f0',
    researchInterests: ['Vision-Language Models', 'Multimodal Understanding'],
    links: {
      scholar: null,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'u3',
    name: 'Dev Patel',
    role: 'B.Tech Student',
    category: 'UG Researchers',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Dev&backgroundColor=e2e8f0',
    researchInterests: ['Optimization', 'Continual Learning'],
    links: {
      scholar: null,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },

  // ── ALUMNI ─────────────────────────────────────────────────────────────────
  {
    id: 'a1',
    name: 'Dr. Siddharth Jain',
    role: 'Alumnus (PhD, 2023)',
    category: 'Alumni',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Siddharth&backgroundColor=e2e8f0',
    researchInterests: ['Current: Applied Scientist at Amazon AWS AI'],
    links: {
      scholar: 'https://scholar.google.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'a2',
    name: 'Nisha Desai',
    role: 'Alumna (B.Tech, 2024)',
    category: 'Alumni',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Nisha&backgroundColor=e2e8f0',
    researchInterests: ['Current: PhD Candidate at CMU LTI'],
    links: {
      scholar: null,
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'a3',
    name: 'Arjun Reddy',
    role: 'Alumnus (MTech, 2022)',
    category: 'Alumni',
    image: 'https://api.dicebear.com/7.x/notionists/svg?seed=Arjun&backgroundColor=e2e8f0',
    researchInterests: ['Current: Machine Learning Engineer at Google DeepMind'],
    links: {
      scholar: 'https://scholar.google.com',
      github: null,
      linkedin: 'https://linkedin.com',
    },
  },
];
