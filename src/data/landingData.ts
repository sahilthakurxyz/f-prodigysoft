import { Service, ShowcaseProject, CaseStudy, Testimonial, PricingPlan, FAQItem, OfficeLocation } from '../types/landing';

export const HERO_STATS = [
  { label: 'Client Value Unlocked', value: '$450M+', sub: 'In growth & efficiency' },
  { label: 'On-Time Project Delivery', value: '99.8%', sub: 'SLA backed guarantee' },
  { label: 'Senior Talent Ratio', value: ' Top 1%', sub: 'Ex-FAANG & Masters engineers' },
  { label: 'CSAT Rating', value: '4.98/5', sub: 'Across 150+ deployments' },
];

export const CLIENT_LOGOS = [
  { name: 'ApexFinTech', logo: '⚡ APEX' },
  { name: 'NexusHealth', logo: '❖ NEXUS' },
  { name: 'AeroCloud', logo: '▲ AERO' },
  { name: 'OmniSaaS', logo: '⦿ OMNI' },
  { name: 'VanguardAI', logo: '✦ VANGUARD' },
  { name: 'QuantumData', logo: '⬡ QUANTUM' },
  { name: 'Starlight Retail', logo: '★ STARLIGHT' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'custom-software',
    title: 'Bespoke Software Engineering',
    shortDesc: 'High-availability, scalable web & enterprise platforms engineered for modern high-growth businesses.',
    fullDesc: 'We architect and build fault-tolerant software systems tailored strictly to your operational requirements. From complex event-driven microservices to multi-tenant SaaS architectures.',
    icon: 'Code2',
    category: 'core',
    deliverables: [
      'Microservices & Event-Driven Architecture',
      'Multi-tenant SaaS Infrastructure',
      'High-throughput REST & GraphQL APIs',
      'Automated Test Suites (95%+ Coverage)',
      'Clean Code & Comprehensive Documentation'
    ],
    techStack: ['TypeScript', 'Node.js', 'Go', 'React', 'Next.js', 'PostgreSQL', 'Redis'],
    impactMetric: '10x Scalability',
    popular: true,
  },
  {
    id: 'ai-agentic-systems',
    title: 'Enterprise AI & Agentic Workflows',
    shortDesc: 'Custom LLM integrations, autonomous AI agents, RAG pipelines, and automated intelligence layers.',
    fullDesc: 'Transform business processes with fine-tuned domain LLMs, vector-database RAG engines, autonomous workflow agents, and predictive analytics that integrate seamlessly into your software.',
    icon: 'Bot',
    category: 'ai',
    deliverables: [
      'Custom LLM Fine-tuning & RAG Pipelines',
      'Autonomous Multi-Agent Systems',
      'Enterprise Vector DB Architecture (Pinecone/Qdrant)',
      'Real-time NLP Data Extraction',
      'AI Governance & Security Safeguards'
    ],
    techStack: ['Python', 'LangChain', 'LlamaIndex', 'OpenAI API', 'PyTorch', 'VectorDB', 'FastAPI'],
    impactMetric: '70% Task Automation',
    popular: true,
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    shortDesc: 'Zero-downtime CI/CD pipelines, Kubernetes orchestration, and cloud infrastructure optimization.',
    fullDesc: 'Optimize your infrastructure costs while increasing resilience and security. We build automated infrastructure-as-code (IaC) environments that auto-scale gracefully.',
    icon: 'Cloud',
    category: 'cloud',
    deliverables: [
      'Terraform & CloudFormation IaC Templates',
      'Kubernetes (EKS/GKE) Cluster Management',
      'Zero-Downtime Deployment Pipelines',
      'FinOps Infrastructure Cost Optimization',
      '24/7 SRE Monitoring & Observability'
    ],
    techStack: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'Datadog', 'ArgoCD'],
    impactMetric: '45% Cost Reduction',
  },
  {
    id: 'mobile-engineering',
    title: 'Cross-Platform Mobile Apps',
    shortDesc: 'Native-grade iOS & Android applications built with React Native and Flutter for maximum speed.',
    fullDesc: 'Deliver fluid 60fps mobile experiences to millions of users. Optimized offline-first sync, hardware integration, biometric security, and instant push notification engines.',
    icon: 'Smartphone',
    category: 'core',
    deliverables: [
      'React Native & Flutter Native Bridge Apps',
      'Offline-first Data Synchronization',
      'Biometric Security & Mobile Payments',
      'Bi-directional WebSocket Feeds',
      'App Store & Play Store CI/CD Publishing'
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'GraphQL', 'Firebase', 'SQLite'],
    impactMetric: '4.9 Star Store Rating',
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Application Modernization',
    shortDesc: 'Migrate monolithic legacy codebases to agile, cloud-native microservices with zero downtime.',
    fullDesc: 'Stop letting legacy tech debt stifle your growth. We perform Strangler-Fig refactoring, database migrations, and modern UI overhauls without disturbing live production operations.',
    icon: 'RefreshCw',
    category: 'modernization',
    deliverables: [
      'Monolith-to-Microservices Migration',
      'Database Schema Refactoring & Live Sync',
      'Legacy Code Security Hardening',
      'Modern UI/UX Frontend Overhaul',
      'Zero-Downtime Cutover Strategy'
    ],
    techStack: ['Node.js', 'Go', 'Docker', 'PostgreSQL', 'Kafka', 'React'],
    impactMetric: '300% Dev Velocity',
  },
  {
    id: 'cybersecurity-compliance',
    title: 'Cybersecurity & SOC2 Compliance',
    shortDesc: 'End-to-end security audits, penetration testing, encryption layers, and regulatory readiness.',
    fullDesc: 'Build trust with enterprise buyers by embedding SOC2 Type II, HIPAA, ISO27001, and GDPR compliance directly into your software application architecture from Day 1.',
    icon: 'ShieldCheck',
    category: 'cloud',
    deliverables: [
      'SOC2 Type II & HIPAA Readiness Audits',
      'Zero-Trust IAM Architecture & SSO',
      'Automated Static & Dynamic Vulnerability Scanning',
      'End-to-End Encryption at Rest & in Transit',
      'Penetration Testing & Remediation'
    ],
    techStack: ['Vault', 'Auth0', 'OIDC', 'Snyk', 'Sonarqube', 'AWS KMS'],
    impactMetric: '100% Audit Pass Rate',
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'fintech-core',
    title: 'PulseLedger Enterprise',
    subtitle: 'Next-Generation Real-Time High-Frequency Settlement Core',
    clientIndustry: 'Financial Services & Banking',
    category: 'Enterprise Fintech',
    description: 'A ultra-low latency transaction processing ledger capable of auditing, balancing, and executing 85,000 requests per second with sub-10ms latency.',
    metrics: [
      { label: 'Throughput', value: '85,000 req/sec', change: '+320%' },
      { label: 'P99 Latency', value: '6.4 ms', change: '-75%' },
      { label: 'SLA Uptime', value: '99.999%', change: 'Zero Downtime' },
    ],
    architecture: ['Event-Driven Microservices', 'Kafka Stream Processing', 'Postgres CockroachDB Cluster', 'Redis Cluster Caching'],
    features: [
      'ACID Compliant Multi-Currency Engine',
      'Real-time Fraud Anomaly Detection via AI',
      'Automated Regulatory Audit Reporting',
      'Sub-second Global Reconciliation'
    ],
    codeSnippet: `// PulseLedger High-Throughput Event Processor
pub async fn process_transaction(ctx: &Context, tx: Transaction) -> Result<Receipt, LedgerError> {
    let verified = ctx.ai_guard.assess_risk_score(&tx).await?;
    if verified.risk_score > 0.85 {
        return Err(LedgerError::FlaggedForAudit);
    }
    
    let receipt = ctx.partition_engine.commit_atomic(tx).await?;
    ctx.metrics.record_latency(receipt.duration_ms);
    Ok(receipt)
}`,
    demoType: 'saas'
  },
  {
    id: 'ai-copilot',
    title: 'AuraAgent Intelligence Suite',
    subtitle: 'Autonomous Customer Operations & Workflow Orchestrator',
    clientIndustry: 'Global Healthcare & MedTech',
    category: 'Autonomous AI Systems',
    description: 'An AI agent workforce trained on clinical documentation and insurance claims, processing complex pre-authorizations automatically with human-in-the-loop validation.',
    metrics: [
      { label: 'Claims Auto-Processed', value: '1.4M / Month', change: '+500%' },
      { label: 'Processing Speed', value: '18 seconds', change: '-92%' },
      { label: 'Accuracy Rating', value: '99.4%', change: 'HIPAA Certified' },
    ],
    architecture: ['Vector Embeddings Engine', 'LangGraph Agent Clusters', 'Private Llama-3 Fine-Tune', 'Kafka Event Bus'],
    features: [
      'Multi-modal document ingestion (OCR + Semantic Analysis)',
      'Autonomous decision verification pipeline',
      'Bi-directional EHR integration (FHIR API)',
      'Real-time confidence scoring interface'
    ],
    codeSnippet: `import { AgentOrchestrator, VectorRetriever } from '@prodigysoft/ai-core';

export const handleMedicalClaim = async (claimId: string) => {
  const claimData = await fetchClaimDetails(claimId);
  const relevantPolicy = await VectorRetriever.similaritySearch(claimData.summary, { topK: 5 });
  
  const result = await AgentOrchestrator.evaluate({
    claim: claimData,
    policy: relevantPolicy,
    strictHIPAAMode: true
  });
  
  return result.approved ? await executeApproval(result) : await queueHumanReview(result);
};`,
    demoType: 'ai'
  },
  {
    id: 'saas-analytics',
    title: 'OmniStream Analytics Cloud',
    subtitle: 'Real-Time Streaming Telemetry & Data Platform',
    clientIndustry: 'E-Commerce & Supply Chain',
    category: 'Big Data & Cloud',
    description: 'A cloud-native SaaS platform ingesting 100M+ daily events from IoT sensors and e-commerce transactions, serving live executive dashboards.',
    metrics: [
      { label: 'Events Processed', value: '120M / Day', change: '+240%' },
      { label: 'Cloud Cost Saved', value: '$680,000 / yr', change: '-42%' },
      { label: 'Query Speed', value: '< 150 ms', change: '10x Faster' },
    ],
    architecture: ['ClickHouse Columnar DB', 'Apache Flink', 'Kubernetes Autoscale Engine', 'Tailwind + React Flow Dashboard'],
    features: [
      'Sub-second query response over billions of rows',
      'Custom drag-and-drop dashboard builder',
      'Automated anomaly alerts via Slack & PagerDuty',
      'Granular role-based access control (RBAC)'
    ],
    codeSnippet: `SELECT 
    date_trunc('minute', timestamp) AS time_bucket,
    region,
    count(*) AS total_events,
    quantile(0.99)(response_time_ms) as p99_latency
FROM telemetry_events
WHERE timestamp >= now() - INTERVAL 1 HOUR
GROUP BY time_bucket, region
ORDER BY time_bucket DESC
LIMIT 100;`,
    demoType: 'cloud'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-apex',
    title: 'Modernizing Legacy Core Banking for ApexFinTech',
    clientName: 'ApexFinTech',
    clientLogo: '⚡ APEX',
    industry: 'Financial Services',
    headlineMetric: '+340% System Throughput',
    challenge: 'ApexFinTech was struggling with a 12-year-old monolithic Java backend that couldn’t handle peak holiday transaction spikes and cost $1.2M annually in idle server capacity.',
    solution: 'ProdigySoft deployed a dedicated 6-person engineering pod to execute a Strangler-Fig migration to Go-based microservices with Kafka streaming and AWS EKS autoscale.',
    results: [
      'Reduced average latency from 450ms to 24ms under maximum load.',
      'Saved $540,000 per year in AWS infrastructure expenses.',
      'Achieved zero downtime during 18 consecutive months of feature deployments.',
      'Passed SOC2 Type II audit with zero findings.'
    ],
    duration: '6 Months',
    teamSize: '1 Tech Lead, 3 Senior Go Engineers, 1 DevOps Lead, 1 QA Lead',
    techStack: ['Go', 'Kafka', 'AWS EKS', 'PostgreSQL', 'Terraform', 'Datadog'],
    testimonialQuote: 'ProdigySoft operated like an elite internal team. They didn’t just write code; they transformed our entire engineering organization’s velocity.',
    authorName: 'Marcus Vance',
    authorRole: 'Chief Technology Officer',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'case-nexus',
    title: 'Building an Autonomous AI Diagnostic Assistant for NexusHealth',
    clientName: 'NexusHealth',
    clientLogo: '❖ NEXUS',
    industry: 'Healthcare & Biotech',
    headlineMetric: '92% Reduction in Audit Time',
    challenge: 'Physicians were spending 3.5 hours per day on manual EHR documentation and insurance coding, creating burn-out and slowing patient intake.',
    solution: 'Designed and deployed a HIPAA-compliant AI Agent pipeline using fine-tuned LLMs and vector search that pre-fills patient charts with 99.4% precision.',
    results: [
      'Saved doctors over 2 hours of administrative work daily.',
      'Increased patient consultation throughput by 38%.',
      'Fully compliant with HIPAA and SOC2 security guidelines.',
      'Deployed to 45 regional hospital networks in 4 months.'
    ],
    duration: '4 Months',
    teamSize: '1 AI Architect, 2 Machine Learning Engineers, 2 Full-Stack Engineers',
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'React', 'AWS HealthLake'],
    testimonialQuote: 'The AI platform ProdigySoft built is hands down the highest ROI technology investment NexusHealth has ever made.',
    authorName: 'Dr. Elena Rostova',
    authorRole: 'VP of Digital Innovation',
    authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'case-omni',
    title: 'Scaling OmniSaaS Multi-Tenant Architecture to 2M Active Users',
    clientName: 'OmniSaaS',
    clientLogo: '⦿ OMNI',
    industry: 'Enterprise B2B SaaS',
    headlineMetric: '$12M Series-B Funding Raised',
    challenge: 'OmniSaaS experienced rapid customer growth, but their single-database architecture was crashing under heavy concurrent write loads.',
    solution: 'ProdigySoft re-engineered their data layer into a distributed multi-tenant shard system with Redis caching and real-time WebSocket synchronization.',
    results: [
      'Handled 20x traffic spike on Black Friday with 0 dropped requests.',
      'Reduced database query execution times by 82%.',
      'Enabled enterprise white-label tenant isolation for Fortune 500 deals.',
      'Key catalyst in closing their $12M Series-B investment round.'
    ],
    duration: '5 Months',
    teamSize: '1 Architect, 4 Senior Full-Stack Engineers, 1 SRE',
    techStack: ['TypeScript', 'Node.js', 'React', 'Postgres Sharding', 'Redis', 'Docker'],
    testimonialQuote: 'If you want elite software engineering done right on the first try, ProdigySoft is the only partner you should call.',
    authorName: 'David Sterling',
    authorRole: 'Co-Founder & CEO',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'ProdigySoft delivered our enterprise SaaS platform 3 weeks ahead of deadline. The code cleanliness, test coverage, and documentation set a new benchmark for our team.',
    author: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'CloudScale Inc.',
    companyLogo: '▲ CloudScale',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    industry: 'Cloud Software',
    metrics: 'Delivered 3 Weeks Early',
    linkedInUrl: '#'
  },
  {
    id: 't2',
    quote: 'We replaced two legacy contracting agencies with a single ProdigySoft Engineering Pod. Their velocity and communication standard are genuinely world-class.',
    author: 'Alexander Wright',
    role: 'CTO & Co-Founder',
    company: 'Vanguard Dynamics',
    companyLogo: '✦ Vanguard',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    industry: 'FinTech',
    metrics: '2.5x Faster Delivery Velocity',
    linkedInUrl: '#'
  },
  {
    id: 't3',
    quote: 'Their AI engineering team helped us build a custom RAG agent pipeline that automated 70% of our tier-2 support workflows in less than 60 days.',
    author: 'Michelle Zhao',
    role: 'Head of Product',
    company: 'LogiFlow Global',
    companyLogo: '⬢ LogiFlow',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    industry: 'Logistics',
    metrics: '70% Workflow Automated',
    linkedInUrl: '#'
  },
  {
    id: 't4',
    quote: 'Working with ProdigySoft felt like hiring a top-tier Silicon Valley engineering team without the 6-month recruiting lag. Outstanding technical leadership.',
    author: 'Julian Thorne',
    role: 'Founder',
    company: 'Aura Health',
    companyLogo: '❖ Aura',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    industry: 'HealthTech',
    metrics: 'Zero Security Audit Findings',
    linkedInUrl: '#'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Speed to Team Deployment',
    prodigySoft: '48 Hours to 7 Days',
    inHouse: '3 to 6 Months',
    legacyAgency: '3 to 6 Weeks'
  },
  {
    feature: 'Engineer Vetting & Seniority',
    prodigySoft: 'Top 1% Senior Engineers Only',
    inHouse: 'Variable Skill Mix',
    legacyAgency: 'Junior / Mid Heavy'
  },
  {
    feature: 'Code & IP Ownership',
    prodigySoft: '100% Client Ownership Day 1',
    inHouse: '100% Client Ownership',
    legacyAgency: 'Often Proprietary Lock-In'
  },
  {
    feature: 'Security & Compliance (SOC2)',
    prodigySoft: 'SOC2 Type II & HIPAA Ready',
    inHouse: 'Must Build Internal Oversight',
    legacyAgency: 'Inconsistent Policies'
  },
  {
    feature: 'Flexibility & Scaling',
    prodigySoft: 'Scale Pod Up/Down Monthly',
    inHouse: 'High Severance & Hiring Risk',
    legacyAgency: 'Rigid Yearly Contracts'
  },
  {
    feature: 'Performance SLA Guarantee',
    prodigySoft: '14-Day Risk-Free Trial',
    inHouse: 'None',
    legacyAgency: 'Rarely Included'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'ai-sprint',
    name: 'AI Transformation Sprint',
    tagline: 'Rapidly audit, design & prototype an AI solution in 3 weeks.',
    price: '$14,500',
    period: 'flat project rate',
    badge: 'Fastest ROI',
    features: [
      'Comprehensive Architecture & Tech Stack Audit',
      'Custom AI & LLM Feasibility Proof-of-Concept',
      'Vector DB & RAG Data Pipeline Prototype',
      'Security, Data Privacy & HIPAA/SOC2 Blueprint',
      'Production Roadmap & Fixed-Cost Implementation Plan'
    ],
    idealFor: 'Businesses wanting to validate AI capabilities quickly.',
    deliveryTime: '3 Weeks',
    ctaText: 'Start AI Sprint'
  },
  {
    id: 'dedicated-pod',
    name: 'Dedicated Engineering Pod',
    tagline: 'Your complete autonomous high-velocity software engineering squad.',
    price: '$28,000',
    period: 'per month',
    badge: 'Most Popular',
    popular: true,
    features: [
      'Dedicated 4-Engineer Squad (Tech Lead + 2 Senior Devs + SRE/QA)',
      'Direct Slack/Teams Integration & Daily Standups',
      '100% Code & IP Transfer with CI/CD Automation',
      'SOC2 Type II & ISO Compliant Development Standards',
      '14-Day Risk-Free Trial Guarantee',
      'Flexible Month-to-Month Scaling'
    ],
    idealFor: 'Scale-ups & Enterprise companies accelerating core roadmap.',
    deliveryTime: 'Deploy in 48 hrs',
    ctaText: 'Reserve Your Pod'
  },
  {
    id: 'fixed-project',
    name: 'Fixed-Scope Product Delivery',
    tagline: 'Turnkey software delivery with guaranteed budget and timeline.',
    price: '$45,000+',
    period: 'custom scope statement',
    badge: 'Guaranteed SLAs',
    features: [
      'End-to-End Product Design, Architecture & Build',
      'Guaranteed Launch Date & Fixed Price SLA',
      'Rigorous Automated Testing (95%+ Code Coverage)',
      'Complete Source Code, Docs & DevOps Setup',
      '90-Day Post-Launch Bug Warranty & Support'
    ],
    idealFor: 'Companies with explicit software requirements & fixed milestones.',
    deliveryTime: '6 to 16 Weeks',
    ctaText: 'Request Fixed Scope Quote'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Advisory & Modernization',
    tagline: 'Tailored software transformation for complex multi-system setups.',
    price: 'Custom',
    period: 'bespoke enterprise SLA',
    features: [
      'Multi-Team Engineering Pod Scaling (10+ Engineers)',
      'Legacy Monolith Refactoring & Cloud Migration',
      'Dedicated 24/7 SRE & Incident Response SLAs',
      'Custom Compliance Hardening (SOC2, HIPAA, PCI-DSS)',
      'Executive Steering Committee & Fractional CTO Support'
    ],
    idealFor: 'Enterprise organizations modernizing critical core platforms.',
    deliveryTime: 'Custom Timeline',
    ctaText: 'Talk with Engineering Executive'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can ProdigySoft assemble and onboard an engineering pod?',
    answer: 'We maintain pre-vetted senior engineering pods on standby. In most cases, we can match and onboard a fully integrated engineering team to your Slack/Jira within 48 hours to 7 business days.',
    category: 'Process'
  },
  {
    id: 'faq-2',
    question: 'Who owns the intellectual property and source code produced?',
    answer: 'You own 100% of all intellectual property, source code, commit history, deployment scripts, and architectural assets from Day 1. There are zero licensing fees or proprietary lock-in mechanisms.',
    category: 'Security & IP'
  },
  {
    id: 'faq-3',
    question: 'How does ProdigySoft ensure code quality and security standards?',
    answer: 'Every engineer follows strict SOC2 Type II compliance guidelines. We mandate mandatory code peer reviews, automated CI/CD static security analysis (SAST), unit/integration test coverage exceeding 90%, and strict zero-trust IAM secrets management.',
    category: 'Engineering'
  },
  {
    id: 'faq-4',
    question: 'What happens if we want to scale down or adjust our pod composition?',
    answer: 'Our engagement model is designed for maximum agility. Under our Dedicated Pod retainer, you can adjust team sizes or pause engagements with 14 days notice.',
    category: 'Pricing'
  },
  {
    id: 'faq-5',
    question: 'What is your 14-Day Risk-Free Guarantee?',
    answer: 'We back our Dedicated Pod engagements with a 14-day risk-free trial. If you feel the pod is not performing to your expectations within the first 14 days, you pay nothing.',
    category: 'Pricing'
  },
  {
    id: 'faq-6',
    question: 'Can you work with our existing codebase and engineering infrastructure?',
    answer: 'Yes! Over 60% of our engagements involve augmenting existing development teams or refactoring legacy codebases. We integrate smoothly into your existing Git workflows, CI pipelines, and project management tools.',
    category: 'Process'
  },
  {
    id: 'faq-7',
    question: 'How do you handle time zone overlap for international clients?',
    answer: 'We staff teams across North America, Europe, and Asia to guarantee at least 4-6 hours of daily real-time overlap with your local time zone for standups, pair programming, and direct Slack communication.',
    category: 'Team'
  },
  {
    id: 'faq-8',
    question: 'What tech stacks does ProdigySoft specialize in?',
    answer: 'Our core specialties include React, Next.js, Node.js, Go, Python (AI/ML), TypeScript, Rust, React Native, AWS, GCP, Kubernetes, Postgres, GraphQL, and specialized AI frameworks like LangChain & LlamaIndex.',
    category: 'Engineering'
  }
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  { city: 'San Francisco', country: 'United States', timezone: 'PST (UTC-8)', address: '500 Howard Street, Suite 400', flag: '🇺🇸' },
  { city: 'London', country: 'United Kingdom', timezone: 'GMT (UTC+0)', address: '30 St Mary Axe, Floor 18', flag: '🇬🇧' },
  { city: 'Zurich', country: 'Switzerland', timezone: 'CET (UTC+1)', address: 'Bahnhofstrasse 28', flag: '🇨🇭' },
  { city: 'Tokyo', country: 'Japan', timezone: 'JST (UTC+9)', address: 'Roppongi Hills Mori Tower', flag: '🇯🇵' },
  { city: 'Singapore', country: 'Singapore', timezone: 'SGT (UTC+8)', address: '1 Raffles Place, #22-01', flag: '🇸🇬' }
];

export const TECH_STACK_CATEGORIES = [
  { id: 'all', name: 'All Technologies' },
  { id: 'backend', name: 'Backend & APIs' },
  { id: 'frontend', name: 'Frontend & UI' },
  { id: 'ai', name: 'AI & Data Science' },
  { id: 'cloud', name: 'Cloud & DevOps' },
  { id: 'mobile', name: 'Mobile' },
];

export const TECH_ITEMS = [
  { name: 'TypeScript', category: 'frontend', icon: 'Code', desc: 'Type-safe scalable JavaScript codebases', level: 'Master' },
  { name: 'React & Next.js', category: 'frontend', icon: 'Layout', desc: 'High-performance SSR & SPA Web Applications', level: 'Master' },
  { name: 'Go (Golang)', category: 'backend', icon: 'Cpu', desc: 'Ultra-fast concurrent microservices', level: 'Master' },
  { name: 'Node.js', category: 'backend', icon: 'Server', desc: 'Asynchronous event-driven backend services', level: 'Master' },
  { name: 'Python', category: 'ai', icon: 'Binary', desc: 'AI/ML models, LangChain, and Fast APIs', level: 'Master' },
  { name: 'PostgreSQL', category: 'backend', icon: 'Database', desc: 'ACID transactional & vector database scaling', level: 'Master' },
  { name: 'AWS & GCP', category: 'cloud', icon: 'Cloud', desc: 'Cloud infrastructure & serverless architectures', level: 'Master' },
  { name: 'Kubernetes', category: 'cloud', icon: 'Container', desc: 'Container orchestration & auto-scaling', level: 'Master' },
  { name: 'React Native', category: 'mobile', icon: 'Smartphone', desc: 'Cross-platform native iOS & Android apps', level: 'Master' },
  { name: 'OpenAI & LLMs', category: 'ai', icon: 'Sparkles', desc: 'Fine-tuning, RAG, and AI agent frameworks', level: 'Master' },
  { name: 'Kafka & Redis', category: 'backend', icon: 'Zap', desc: 'High-throughput streaming & caching', level: 'Master' },
  { name: 'Terraform', category: 'cloud', icon: 'Layers', desc: 'Declarative Infrastructure as Code (IaC)', level: 'Master' },
];
