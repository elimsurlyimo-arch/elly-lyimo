/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Palette, 
  Map, 
  Layout, 
  FileText, 
  TrendingUp, 
  Share2, 
  Settings, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  Target, 
  Users, 
  ShoppingCart, 
  Layers, 
  Zap, 
  Mail, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SECTIONS = [
  {
    id: 'branding',
    title: 'Branding & Positioning',
    icon: <Palette className="w-5 h-5" />,
    content: {
      story: "The 'Modern Minimalist' clothing line. Our brand story focuses on sustainable, high-quality essentials that simplify the morning routine. We believe in 'less but better'.",
      tone: "Sophisticated yet approachable, transparent, and authoritative on style and sustainability.",
      visualIdentity: "Clean lines, ample white space, high-contrast typography (Serif for elegance, Sans-serif for modern utility).",
      usps: [
        "Ethically sourced organic materials",
        "Lifetime durability guarantee",
        "Carbon-neutral shipping and returns",
        "Direct-to-consumer pricing (no middleman markup)"
      ],
      personas: [
        {
          name: "The Conscious Professional",
          age: "25-40",
          lifestyle: "Urban, career-focused, values time and quality over quantity.",
          preferences: "Neutral palettes, versatile pieces, ethical transparency."
        },
        {
          name: "The Minimalist Enthusiast",
          age: "20-35",
          lifestyle: "Creative, digital nomad, capsule wardrobe advocate.",
          preferences: "Unique cuts, sustainable fabrics, brand story alignment."
        }
      ]
    }
  },
  {
    id: 'architecture',
    title: 'Website Architecture',
    icon: <Map className="w-5 h-5" />,
    content: {
      sitemap: [
        "Home: Hero, Best Sellers, Brand Story, Social Proof",
        "Shop: All Products, New Arrivals, Collections (Essentials, Seasonal)",
        "About: Our Mission, Sustainability Report, The Team",
        "Blog: Style Guides, Sustainability Tips, Behind the Scenes",
        "Support: FAQ, Shipping & Returns, Contact Us"
      ],
      categories: ["Tops", "Bottoms", "Outerwear", "Accessories", "Capsule Sets"],
      filters: ["Size", "Color", "Material", "Price Range", "Sustainability Rating"]
    }
  },
  {
    id: 'design',
    title: 'Design & UX',
    icon: <Layout className="w-5 h-5" />,
    content: {
      colors: {
        primary: "#1A1A1A (Deep Charcoal)",
        secondary: "#F5F5F0 (Warm Off-White)",
        accent: "#5A5A40 (Muted Olive)"
      },
      typography: "Playfair Display (Headings), Inter (Body)",
      layout: {
        homepage: "Split-screen hero, bento-grid for categories, horizontal scroll for trending items.",
        productPage: "Sticky 'Add to Cart', high-res zoomable images, size guide modal, 'Complete the Look' cross-sell.",
        checkout: "Single-page checkout, guest checkout by default, progress indicator, trust badges."
      },
      optimization: "Lazy loading for images, mobile-first design (thumb-friendly buttons), < 2s load time target."
    }
  },
  {
    id: 'content',
    title: 'Content Strategy',
    icon: <FileText className="w-5 h-5" />,
    content: {
      heroCopy: "Timeless Essentials for the Modern Wardrobe. Sustainable. Ethical. Uncompromising.",
      productDescriptions: "Focus on 'Benefit-First' copy. Instead of '100% Cotton', use 'Breathable 100% Organic Cotton that stays soft wash after wash.'",
      seoStrategy: "Target long-tail keywords like 'sustainable organic cotton t-shirts' and 'ethical capsule wardrobe essentials'.",
      socialProof: "UGC (User Generated Content) gallery, 'Verified Buyer' reviews with photos, influencer 'Style Picks' section."
    }
  },
  {
    id: 'conversion',
    title: 'Conversion & Funnels',
    icon: <TrendingUp className="w-5 h-5" />,
    content: {
      ctaStrategy: "Contrast colors for buttons (e.g., Olive on White). Use action-oriented text: 'Start Your Capsule' instead of 'Shop Now'.",
      leadMagnets: "15% off first order popup, 'The Ultimate Capsule Wardrobe Guide' PDF in exchange for email.",
      retention: "Abandoned cart email sequence (1hr, 24hr, 48hr), post-purchase 'How to Care' guide, loyalty points program."
    }
  },
  {
    id: 'marketing',
    title: 'Marketing & Integrations',
    icon: <Share2 className="w-5 h-5" />,
    content: {
      social: "Instagram/TikTok Shopping integration, Pinterest Catalogs for visual search.",
      emailWorkflow: "Welcome series (3 emails), Birthday rewards, Back-in-stock notifications.",
      analytics: "Google Analytics 4 (GA4) for event tracking, Hotjar for heatmaps, Meta Pixel for ad attribution."
    }
  },
  {
    id: 'technical',
    title: 'Technical Recommendations',
    icon: <Settings className="w-5 h-5" />,
    content: {
      platform: "Shopify (for scalability and robust app ecosystem) or Custom Next.js + Medusa (for total design control).",
      seo: "Schema.org markup for products, automated sitemap generation, alt-text for all images.",
      security: "SSL certificate, PCI-DSS compliance, multi-factor authentication for admin, regular security audits."
    }
  },
  {
    id: 'timeline',
    title: 'Timeline & Action Plan',
    icon: <Calendar className="w-5 h-5" />,
    content: {
      phases: [
        { phase: "Phase 1: Discovery & Branding", duration: "2 Weeks", tasks: ["Brand identity", "Market research", "Wireframing"] },
        { phase: "Phase 2: Design & Development", duration: "6 Weeks", tasks: ["UI design", "Frontend dev", "CMS setup"] },
        { phase: "Phase 3: Content & SEO", duration: "3 Weeks", tasks: ["Product photography", "Copywriting", "SEO setup"] },
        { phase: "Phase 4: Launch & Marketing", duration: "2 Weeks", tasks: ["Beta testing", "Email setup", "Official launch"] }
      ],
      kpis: ["Conversion Rate (>3%)", "Average Order Value (AOV)", "Customer Acquisition Cost (CAC)", "Return Rate (<15%)"]
    }
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);

  const activeSection = SECTIONS.find(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans selection:bg-[#5A5A40] selection:text-white">
      {/* Header */}
      <header className="border-b border-black/5 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">E-Commerce Strategy Blueprint</h1>
              <p className="text-xs text-black/50 font-medium uppercase tracking-widest">Clothing Brand Edition</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span className="text-xs font-semibold text-black/40 uppercase tracking-widest">Version 1.0</span>
            <button className="bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black/80 transition-colors flex items-center gap-2">
              Export PDF <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar Navigation */}
          <nav className="lg:col-span-4 space-y-2">
            <div className="mb-6 px-4">
              <h2 className="text-sm font-bold text-black/40 uppercase tracking-widest mb-4">Strategic Sections</h2>
            </div>
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                  activeTab === section.id 
                    ? 'bg-white shadow-xl shadow-black/5 text-[#1A1A1A]' 
                    : 'hover:bg-black/5 text-black/60'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  activeTab === section.id ? 'bg-[#1A1A1A] text-white' : 'bg-black/5 group-hover:bg-black/10'
                }`}>
                  {section.icon}
                </div>
                <span className="font-semibold text-left flex-1">{section.title}</span>
                {activeTab === section.id && (
                  <motion.div layoutId="active-indicator">
                    <ChevronRight className="w-5 h-5 text-[#5A5A40]" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] p-8 lg:p-12 shadow-2xl shadow-black/5 min-h-[600px]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#F5F5F0] rounded-2xl flex items-center justify-center text-[#1A1A1A]">
                    {activeSection?.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">{activeSection?.title}</h2>
                </div>

                {/* Section Specific Content Rendering */}
                {activeTab === 'branding' && (
                  <div className="space-y-8">
                    <ContentCard title="Brand Story & Tone" icon={<Target className="w-5 h-5" />}>
                      <p className="text-black/70 leading-relaxed mb-4">{activeSection?.content.story}</p>
                      <div className="bg-[#F5F5F0] p-4 rounded-xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">Tone of Voice</span>
                        <p className="mt-1 font-medium">{activeSection?.content.tone}</p>
                      </div>
                    </ContentCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ContentCard title="Unique Selling Props" icon={<Zap className="w-5 h-5" />}>
                        <ul className="space-y-3">
                          {activeSection?.content.usps.map((usp: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#5A5A40] mt-0.5 shrink-0" />
                              <span>{usp}</span>
                            </li>
                          ))}
                        </ul>
                      </ContentCard>
                      <ContentCard title="Visual Identity" icon={<Palette className="w-5 h-5" />}>
                        <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.visualIdentity}</p>
                      </ContentCard>
                    </div>

                    <ContentCard title="Target Audience Personas" icon={<Users className="w-5 h-5" />}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        {activeSection?.content.personas.map((persona: any, i: number) => (
                          <div key={i} className="border border-black/5 p-6 rounded-2xl hover:border-[#5A5A40]/30 transition-colors">
                            <h4 className="font-bold text-lg mb-2">{persona.name}</h4>
                            <div className="space-y-2 text-sm">
                              <p><span className="text-black/40 font-medium">Age:</span> {persona.age}</p>
                              <p><span className="text-black/40 font-medium">Lifestyle:</span> {persona.lifestyle}</p>
                              <p><span className="text-black/40 font-medium">Preferences:</span> {persona.preferences}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ContentCard>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-8">
                    <ContentCard title="Sitemap & Navigation" icon={<Layers className="w-5 h-5" />}>
                      <div className="space-y-4">
                        {activeSection?.content.sitemap.map((item: string, i: number) => (
                          <div key={i} className="flex items-center gap-4 p-4 bg-[#F5F5F0] rounded-xl">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-xs">0{i+1}</div>
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </ContentCard>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ContentCard title="Product Categories">
                        <div className="flex flex-wrap gap-2">
                          {activeSection?.content.categories.map((cat: string, i: number) => (
                            <span key={i} className="px-3 py-1 bg-black text-white rounded-full text-xs font-medium">{cat}</span>
                          ))}
                        </div>
                      </ContentCard>
                      <ContentCard title="Smart Filters">
                        <div className="flex flex-wrap gap-2">
                          {activeSection?.content.filters.map((filter: string, i: number) => (
                            <span key={i} className="px-3 py-1 border border-black/10 rounded-full text-xs font-medium">{filter}</span>
                          ))}
                        </div>
                      </ContentCard>
                    </div>
                  </div>
                )}

                {activeTab === 'design' && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-[#1A1A1A] text-white p-6 rounded-3xl">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Primary</span>
                        <p className="mt-2 font-bold">{activeSection?.content.colors.primary}</p>
                      </div>
                      <div className="bg-[#F5F5F0] border border-black/5 p-6 rounded-3xl">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Secondary</span>
                        <p className="mt-2 font-bold">{activeSection?.content.colors.secondary}</p>
                      </div>
                      <div className="bg-[#5A5A40] text-white p-6 rounded-3xl">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Accent</span>
                        <p className="mt-2 font-bold">{activeSection?.content.colors.accent}</p>
                      </div>
                    </div>
                    <ContentCard title="Layout Strategy">
                      <div className="space-y-6">
                        {Object.entries(activeSection?.content.layout).map(([key, value]: [string, any]) => (
                          <div key={key} className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="md:w-32 shrink-0">
                              <span className="text-xs font-bold uppercase tracking-widest text-[#5A5A40]">{key}</span>
                            </div>
                            <p className="text-sm text-black/70">{value}</p>
                          </div>
                        ))}
                      </div>
                    </ContentCard>
                    <ContentCard title="UX Optimization">
                      <p className="text-sm font-medium">{activeSection?.content.optimization}</p>
                    </ContentCard>
                  </div>
                )}

                {activeTab === 'content' && (
                  <div className="space-y-8">
                    <ContentCard title="Hero Messaging">
                      <div className="p-8 border-2 border-dashed border-black/10 rounded-3xl text-center">
                        <h3 className="text-2xl font-serif italic mb-4">"{activeSection?.content.heroCopy}"</h3>
                        <p className="text-xs text-black/40 uppercase tracking-widest">Primary Value Proposition</p>
                      </div>
                    </ContentCard>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ContentCard title="Copywriting Strategy">
                        <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.productDescriptions}</p>
                      </ContentCard>
                      <ContentCard title="SEO Focus">
                        <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.seoStrategy}</p>
                      </ContentCard>
                    </div>
                    <ContentCard title="Social Proof Elements">
                      <p className="text-sm font-medium">{activeSection?.content.socialProof}</p>
                    </ContentCard>
                  </div>
                )}

                {activeTab === 'conversion' && (
                  <div className="space-y-8">
                    <ContentCard title="Lead Magnets" icon={<Mail className="w-5 h-5" />}>
                      <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.leadMagnets}</p>
                    </ContentCard>
                    <ContentCard title="CTA & Messaging">
                      <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.ctaStrategy}</p>
                    </ContentCard>
                    <ContentCard title="Retention & Funnels">
                      <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.retention}</p>
                    </ContentCard>
                  </div>
                )}

                {activeTab === 'marketing' && (
                  <div className="space-y-8">
                    <ContentCard title="Omnichannel Strategy">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-[#F5F5F0] rounded-2xl">
                          <h4 className="font-bold text-sm mb-2">Social Commerce</h4>
                          <p className="text-xs text-black/60">{activeSection?.content.social}</p>
                        </div>
                        <div className="p-4 bg-[#F5F5F0] rounded-2xl">
                          <h4 className="font-bold text-sm mb-2">Email Automation</h4>
                          <p className="text-xs text-black/60">{activeSection?.content.emailWorkflow}</p>
                        </div>
                      </div>
                    </ContentCard>
                    <ContentCard title="Analytics Stack" icon={<BarChart3 className="w-5 h-5" />}>
                      <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.analytics}</p>
                    </ContentCard>
                  </div>
                )}

                {activeTab === 'technical' && (
                  <div className="space-y-8">
                    <ContentCard title="Platform Choice" icon={<Settings className="w-5 h-5" />}>
                      <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.platform}</p>
                    </ContentCard>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <ContentCard title="SEO Technicals">
                        <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.seo}</p>
                      </ContentCard>
                      <ContentCard title="Security Standards" icon={<ShieldCheck className="w-5 h-5" />}>
                        <p className="text-sm text-black/70 leading-relaxed">{activeSection?.content.security}</p>
                      </ContentCard>
                    </div>
                  </div>
                )}

                {activeTab === 'timeline' && (
                  <div className="space-y-8">
                    <ContentCard title="Implementation Roadmap" icon={<Clock className="w-5 h-5" />}>
                      <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-black/5">
                        {activeSection?.content.phases.map((p: any, i: number) => (
                          <div key={i} className="relative pl-10">
                            <div className="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-[#1A1A1A] rounded-full flex items-center justify-center z-10">
                              <span className="text-[10px] font-bold">{i+1}</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                              <h4 className="font-bold text-lg">{p.phase}</h4>
                              <span className="text-xs font-bold bg-[#5A5A40] text-white px-2 py-1 rounded uppercase tracking-widest">{p.duration}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {p.tasks.map((task: string, j: number) => (
                                <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-black/40 border border-black/5 px-2 py-1 rounded-md">{task}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </ContentCard>
                    <ContentCard title="Key Performance Indicators (KPIs)">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {activeSection?.content.kpis.map((kpi: string, i: number) => (
                          <div key={i} className="p-4 bg-[#F5F5F0] rounded-2xl text-center">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#5A5A40] mb-1">Metric</p>
                            <p className="text-xs font-bold">{kpi}</p>
                          </div>
                        ))}
                      </div>
                    </ContentCard>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-black/5 mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black/5 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-black/40" />
            </div>
            <p className="text-sm font-medium text-black/40">© 2026 E-Commerce Strategy Blueprint. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">Documentation</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">Support</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContentCard({ title, children, icon }: { title: string, children: React.ReactNode, icon?: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        {icon && <div className="text-[#5A5A40]">{icon}</div>}
        <h3 className="text-sm font-bold text-black/40 uppercase tracking-widest">{title}</h3>
      </div>
      <div className="bg-white">
        {children}
      </div>
    </div>
  );
}
