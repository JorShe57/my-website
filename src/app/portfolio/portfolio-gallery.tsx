"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectFilter from "@/components/portfolio/ProjectFilter";
import CaseStudyPreview from "@/components/portfolio/CaseStudyPreview";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const projects = [
  // Web Development Projects
  {
    title: "TechFlow E-Commerce Platform",
    description:
      "Complete e-commerce solution for electronics retailer with 50K+ products, real-time inventory, and multi-vendor marketplace functionality.",
    image: "https://placehold.co/600x400/1e40af/ffffff?text=TechFlow+Platform",
    category: "Web Development",
    client: "TechFlow Electronics",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    timeline: "4 months",
    results: "300% increase in online sales, 65% reduction in cart abandonment",
    features: [
      "Multi-vendor marketplace",
      "Real-time inventory sync",
      "Advanced search & filtering",
      "Subscription billing system",
      "Mobile-optimized checkout",
    ],
  },
  {
    title: "MediCare Portal",
    description:
      "HIPAA-compliant patient portal for healthcare network with appointment booking, telemedicine, and secure messaging.",
    image: "https://placehold.co/600x400/059669/ffffff?text=MediCare+Portal",
    category: "Web Development",
    client: "Metropolitan Health Network",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    timeline: "6 months",
    results: "40% reduction in phone calls, 95% patient satisfaction",
    features: [
      "Secure patient messaging",
      "Video consultation platform",
      "Prescription management",
      "Insurance verification",
      "Mobile app integration",
    ],
  },
  {
    title: "EduLearn LMS",
    description:
      "Learning management system for online education startup with course creation, progress tracking, and interactive assessments.",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=EduLearn+LMS",
    category: "Web Development",
    client: "EduLearn Academy",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    timeline: "5 months",
    results: "10,000+ active students, 85% course completion rate",
    features: [
      "Interactive video lessons",
      "Real-time progress tracking",
      "Automated grading system",
      "Discussion forums",
      "Certificate generation",
    ],
  },
  {
    title: "GreenEnergy Dashboard",
    description:
      "Real-time monitoring dashboard for solar energy company tracking 500+ installations across multiple states.",
    image: "https://placehold.co/600x400/16a34a/ffffff?text=GreenEnergy+Dashboard",
    category: "Web Development",
    client: "SolarTech Solutions",
    technologies: ["React", "D3.js", "Express", "InfluxDB"],
    timeline: "3 months",
    results: "30% faster issue resolution, 99.5% uptime monitoring",
    features: [
      "Real-time energy monitoring",
      "Predictive maintenance alerts",
      "Geographic installation mapping",
      "Performance analytics",
      "Customer portal integration",
    ],
  },

  // Mobile Apps Projects
  {
    title: "FitTracker Pro",
    description:
      "Comprehensive fitness tracking app with AI-powered workout recommendations, nutrition logging, and social challenges.",
    image: "https://placehold.co/600x400/dc2626/ffffff?text=FitTracker+Pro",
    category: "Mobile Apps",
    client: "FitLife Technologies",
    technologies: ["React Native", "TensorFlow", "Firebase", "HealthKit"],
    timeline: "8 months",
    results: "250K+ downloads, 4.8★ app store rating",
    features: [
      "AI workout recommendations",
      "Barcode nutrition scanning",
      "Social fitness challenges",
      "Wearable device integration",
      "Offline workout mode",
    ],
  },
  {
    title: "DeliveryNow Driver",
    description:
      "Real-time delivery tracking app for drivers with route optimization, earnings tracking, and customer communication.",
    image: "https://placehold.co/600x400/ea580c/ffffff?text=DeliveryNow+Driver",
    category: "Mobile Apps",
    client: "QuickDelivery Corp",
    technologies: ["Flutter", "Google Maps API", "Socket.io", "SQLite"],
    timeline: "4 months",
    results: "35% faster deliveries, 98% driver satisfaction",
    features: [
      "GPS route optimization",
      "Real-time order tracking",
      "In-app earnings dashboard",
      "Customer chat integration",
      "Offline map support",
    ],
  },
  {
    title: "BankSecure Mobile",
    description:
      "Secure banking app with biometric authentication, contactless payments, and comprehensive financial management tools.",
    image: "https://placehold.co/600x400/1f2937/ffffff?text=BankSecure+Mobile",
    category: "Mobile Apps",
    client: "Metro Community Bank",
    technologies: ["Swift", "Kotlin", "Plaid API", "Touch ID", "Face ID"],
    timeline: "10 months",
    results: "80% mobile adoption rate, $0 fraud incidents",
    features: [
      "Biometric authentication",
      "Contactless payments (NFC)",
      "Account aggregation",
      "Bill pay automation",
      "Investment portfolio tracking",
    ],
  },

  // Digital Marketing Projects
  {
    title: "LocalEats SEO Campaign",
    description:
      "Comprehensive local SEO strategy for restaurant chain targeting 25 metropolitan areas with location-based optimization.",
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=LocalEats+SEO",
    category: "Digital Marketing",
    client: "LocalEats Restaurant Group",
    technologies: ["Google Analytics", "SEMrush", "Schema Markup", "Local Listings"],
    timeline: "6 months",
    results: "400% increase in local searches, 60% boost in foot traffic",
    features: [
      "Local keyword optimization",
      "Google My Business management",
      "Review response automation",
      "Location-specific landing pages",
      "Geo-targeted ad campaigns",
    ],
  },
  {
    title: "B2B Lead Generation",
    description:
      "Multi-channel lead generation campaign for SaaS company using content marketing, LinkedIn outreach, and marketing automation.",
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=B2B+Lead+Gen",
    category: "Digital Marketing",
    client: "CloudSync Software",
    technologies: ["HubSpot", "LinkedIn Sales Navigator", "Mailchimp", "Google Ads"],
    timeline: "4 months",
    results: "500% increase in qualified leads, 25% conversion rate",
    features: [
      "Account-based marketing",
      "Content marketing strategy",
      "Marketing automation workflows",
      "Lead scoring system",
      "ROI tracking dashboard",
    ],
  },
  {
    title: "E-commerce PPC Optimization",
    description:
      "Performance marketing campaign optimization for fashion retailer across Google Ads, Facebook, and Amazon advertising platforms.",
    image: "https://placehold.co/600x400/ec4899/ffffff?text=Fashion+PPC",
    category: "Digital Marketing",
    client: "StyleHub Fashion",
    technologies: ["Google Ads", "Facebook Ads Manager", "Amazon DSP", "Google Analytics"],
    timeline: "3 months",
    results: "200% ROAS improvement, 45% cost-per-acquisition reduction",
    features: [
      "Dynamic product ads",
      "Audience segmentation",
      "A/B testing framework",
      "Attribution modeling",
      "Cross-platform optimization",
    ],
  },

  // Cloud Solutions Projects
  {
    title: "Enterprise Cloud Migration",
    description:
      "Complete infrastructure modernization for manufacturing company migrating legacy systems to AWS with 99.9% uptime guarantee.",
    image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Cloud+Migration",
    category: "Cloud Solutions",
    client: "ManuTech Industries",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    timeline: "8 months",
    results: "60% cost reduction, 99.97% uptime achieved",
    features: [
      "Zero-downtime migration",
      "Auto-scaling infrastructure",
      "Disaster recovery setup",
      "Security compliance (SOC 2)",
      "24/7 monitoring & alerts",
    ],
  },
  {
    title: "Microservices Architecture",
    description:
      "Monolith-to-microservices transformation for fintech startup enabling rapid scaling and independent service deployment.",
    image: "https://placehold.co/600x400/10b981/ffffff?text=Microservices+Arch",
    category: "Cloud Solutions",
    client: "PayFlow Financial",
    technologies: ["Azure", "Service Fabric", "API Gateway", "Redis", "MongoDB"],
    timeline: "6 months",
    results: "10x faster deployments, 50% improved system reliability",
    features: [
      "Service mesh architecture",
      "API gateway management",
      "Distributed logging",
      "Circuit breaker patterns",
      "Blue-green deployments",
    ],
  },
  {
    title: "DevOps Pipeline Setup",
    description:
      "CI/CD pipeline implementation for healthcare tech company with automated testing, security scanning, and deployment.",
    image: "https://placehold.co/600x400/6366f1/ffffff?text=DevOps+Pipeline",
    category: "Cloud Solutions",
    client: "HealthTech Innovations",
    technologies: ["GitLab CI", "Docker", "Helm", "SonarQube", "Vault"],
    timeline: "3 months",
    results: "80% faster releases, 95% reduction in deployment errors",
    features: [
      "Automated testing pipeline",
      "Security vulnerability scanning",
      "Infrastructure as code",
      "Secrets management",
      "Rollback automation",
    ],
  },
];

const caseStudies = [
  {
    title: "E-commerce Revenue Transformation",
    client: "TechFlow Electronics",
    challenge:
      "Outdated e-commerce platform with poor mobile experience and high cart abandonment rates",
    solution:
      "Complete platform rebuild with mobile-first design, optimized checkout flow, and personalization engine",
    result:
      "Revenue increased 450% in 6 months, mobile conversion rate improved by 280%",
    timeline: "4 months",
    imageBefore:
      "https://placehold.co/400x300/ef4444/ffffff?text=Before%3A+Legacy+Platform",
    imageAfter:
      "https://placehold.co/400x300/22c55e/ffffff?text=After%3A+Modern+Platform",
    metrics: [
      { label: "Revenue Growth", value: "450%", period: "6 months" },
      { label: "Mobile Conversion", value: "280%", period: "improvement" },
      { label: "Cart Abandonment", value: "65%", period: "reduction" },
      { label: "Page Load Speed", value: "3.2s", period: "faster" },
    ],
  },
  {
    title: "Healthcare Digital Transformation",
    client: "Metropolitan Health Network",
    challenge:
      "Paper-based patient management system causing delays and poor patient experience",
    solution:
      "HIPAA-compliant digital portal with telemedicine capabilities and integrated EHR system",
    result:
      "Patient satisfaction increased to 95%, administrative costs reduced by 40%",
    timeline: "6 months",
    imageBefore:
      "https://placehold.co/400x300/ef4444/ffffff?text=Before%3A+Paper+System",
    imageAfter:
      "https://placehold.co/400x300/22c55e/ffffff?text=After%3A+Digital+Portal",
    metrics: [
      { label: "Patient Satisfaction", value: "95%", period: "rating" },
      { label: "Admin Cost Reduction", value: "40%", period: "savings" },
      { label: "Appointment Scheduling", value: "85%", period: "online" },
      { label: "Phone Call Reduction", value: "60%", period: "decrease" },
    ],
  },
  {
    title: "Manufacturing Cloud Migration Success",
    client: "ManuTech Industries",
    challenge:
      "Legacy on-premise infrastructure with frequent downtime and high maintenance costs",
    solution:
      "Strategic cloud migration to AWS with automated scaling, monitoring, and disaster recovery",
    result: "99.97% uptime achieved, operational costs reduced by 60%",
    timeline: "8 months",
    imageBefore:
      "https://placehold.co/400x300/ef4444/ffffff?text=Before%3A+Legacy+Infrastructure",
    imageAfter:
      "https://placehold.co/400x300/22c55e/ffffff?text=After%3A+Cloud+Infrastructure",
    metrics: [
      { label: "System Uptime", value: "99.97%", period: "availability" },
      { label: "Cost Reduction", value: "60%", period: "savings" },
      { label: "Deployment Speed", value: "10x", period: "faster" },
      { label: "Security Incidents", value: "0", period: "in 12 months" },
    ],
  },
  {
    title: "Local SEO Domination",
    client: "LocalEats Restaurant Group",
    challenge:
      "Poor online visibility in local searches resulting in declining foot traffic",
    solution:
      "Comprehensive local SEO strategy with location-based optimization and review management",
    result: "400% increase in local search visibility, 60% boost in foot traffic",
    timeline: "6 months",
    imageBefore:
      "https://placehold.co/400x300/ef4444/ffffff?text=Before%3A+Poor+Visibility",
    imageAfter:
      "https://placehold.co/400x300/22c55e/ffffff?text=After%3A+Top+Rankings",
    metrics: [
      { label: "Local Search Visibility", value: "400%", period: "increase" },
      { label: "Foot Traffic", value: "60%", period: "boost" },
      { label: "Online Reviews", value: "4.8★", period: "average" },
      { label: "Local Ranking", value: "#1", period: "position" },
    ],
  },
  {
    title: "Mobile App User Engagement Boost",
    client: "FitLife Technologies",
    challenge:
      "High user acquisition costs with low retention and engagement rates",
    solution:
      "AI-powered personalization engine with social features and gamification elements",
    result: "User retention improved by 340%, daily active users increased 250%",
    timeline: "5 months",
    imageBefore:
      "https://placehold.co/400x300/ef4444/ffffff?text=Before%3A+Low+Engagement",
    imageAfter:
      "https://placehold.co/400x300/22c55e/ffffff?text=After%3A+High+Engagement",
    metrics: [
      { label: "User Retention", value: "340%", period: "improvement" },
      { label: "Daily Active Users", value: "250%", period: "increase" },
      { label: "Session Duration", value: "180%", period: "longer" },
      { label: "App Store Rating", value: "4.8★", period: "rating" },
    ],
  },
  {
    title: "B2B Lead Generation Revolution",
    client: "CloudSync Software",
    challenge:
      "Inconsistent lead quality and low conversion rates from traditional marketing approaches",
    solution:
      "Account-based marketing strategy with marketing automation and content personalization",
    result: "Qualified leads increased 500%, sales cycle reduced by 35%",
    timeline: "4 months",
    imageBefore:
      "https://placehold.co/400x300/ef4444/ffffff?text=Before%3A+Low+Quality+Leads",
    imageAfter:
      "https://placehold.co/400x300/22c55e/ffffff?text=After%3A+High+Quality+Leads",
    metrics: [
      { label: "Qualified Leads", value: "500%", period: "increase" },
      { label: "Sales Cycle", value: "35%", period: "reduction" },
      { label: "Conversion Rate", value: "25%", period: "rate" },
      { label: "Pipeline Value", value: "$2.3M", period: "generated" },
    ],
  },
];

export default function PortfolioGallery() {
  const categories = ["All", "Web Development", "Mobile Apps", "Digital Marketing", "Cloud Solutions"];
  const [filter, setFilter] = useState<string>("All");
  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <section className="py-16">
        <Container>
          <ProjectFilter categories={categories} active={filter} onChange={setFilter} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <ProjectCard {...p} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-gray-50 py-16 dark:bg-gray-950">
        <Container>
          <h2 className="text-center text-3xl font-bold">Case Studies</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.title} delay={i * 0.1}>
                <CaseStudyPreview {...cs} />
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="primary">Discuss Your Project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export { projects, caseStudies };
