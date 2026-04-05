import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Layout, 
  Mail, 
  MessageSquare, 
  Phone, 
  Zap,
  Menu,
  X,
  Building2,
  ShieldCheck,
  FileText,
  ChevronLeft,
  Twitter,
  Instagram,
  Youtube,
  User,
  Compass,
  TrendingUp,
  Award,
  ExternalLink,
  Users, 
  Briefcase, 
  Share2,
  BookOpen
} from "lucide-react";
import { useState, useEffect } from "react";

type Page = "home" | "privacy" | "tokushoho";

const EmailDisplay = ({ className }: { className?: string }) => {
  const user = "info";
  const domain = "withyou-group.co.jp";
  return (
    <span className={className}>
      {user}
      <span className="mx-0.5 text-blue-400 font-bold">[at]</span>
      {domain}
    </span>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-700" />,
      title: "グローバルマーケティング支援",
      description: "海外市場への参入戦略、越境EC、現地パートナー開拓など、国境を越えたビジネス展開をトータルにサポートします。"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-700" />,
      title: "パーソナルブランディング・メディア戦略",
      description: "YouTubeやSNSを活用した経営者のブランディング、メディア構築を通じて、圧倒的な発信力と信頼を築きます。"
    },
    {
      icon: <Compass className="w-8 h-8 text-blue-700" />,
      title: "戦略的ビジネスコンサルティング",
      description: "「旅するCEO」としてのグローバルな知見を活かし、既存の枠に囚われない革新的なビジネスモデルを提案します。"
    }
  ];

  const visions = [
    {
      title: "Mission",
      subtitle: "ミッション",
      description: "国境という壁を、可能性という扉に変える。",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Vision",
      subtitle: "ビジョン",
      description: "日本と世界、人と人、情熱と可能性を繋ぎ、境界のない未来を創造します。",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "旅するCEO",
      description: "世界40カ国以上を巡り、現地の熱量を肌で感じたリアルな知見を提供します。"
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "リアルな知見",
      description: "ネットの情報ではない、実際に足を運んで得た一次情報に基づいた戦略を提案します。"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
      title: "最良のパートナー",
      description: "クライアントのビジョンを共有し、共に挑戦し続ける伴走型の支援を約束します。"
    }
  ];

  const Navigation = () => (
    <nav className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentPage("home")}>
            <span className="text-2xl font-serif font-bold tracking-tighter text-slate-900">
              WITH YOU <span className="text-blue-600 italic">INTERNATIONAL</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {currentPage === "home" ? (
              <>
                <a href="#services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Services</a>
                <a href="#representative" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">CEO</a>
                <a href="#company" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest">Company</a>
                <a href="#contact" className="relative group px-6 py-2.5 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform group-hover:scale-105" />
                  <span className="relative text-white text-sm font-semibold uppercase tracking-widest">Contact</span>
                </a>
              </>
            ) : (
              <button 
                onClick={() => setCurrentPage("home")}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Top
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-4 overflow-hidden"
          >
            {currentPage === "home" ? (
              <>
                <a href="#services" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#representative" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>CEO</a>
                <a href="#company" className="block text-slate-600 font-medium" onClick={() => setIsMenuOpen(false)}>Company</a>
                <a href="#contact" className="block text-blue-600 font-bold" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </>
            ) : (
              <button 
                onClick={() => { setCurrentPage("home"); setIsMenuOpen(false); }}
                className="block text-slate-600 w-full text-left font-medium"
              >
                トップページへ戻る
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.08),transparent_70%)]" />
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2.5 }}
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Global Business Center"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Next-Gen Global Solutions
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[1.1] mb-8"
            >
              Innovate the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 italic">Future.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-12 font-light"
            >
              国境を超えたビジネスの可能性をテクノロジーと情熱で最大化し、
              世界を舞台に新たなスタンダードを構築します。
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <a 
                href="#services" 
                className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform group-hover:scale-105" />
                <span className="relative z-10 flex items-center gap-2">
                  事業内容を見る <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-lg font-medium backdrop-blur-md hover:bg-slate-100 transition-all hover:border-slate-300"
              >
                お問い合わせ
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-slate-100 bg-white/60 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Countries Visited", value: "40+", icon: Globe },
                { label: "Business Partners", value: "150+", icon: Users },
                { label: "Global Projects", value: "300+", icon: Briefcase },
                { label: "Social Followers", value: "100k+", icon: Share2 }
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section (MVV) */}
      <section className="py-32 bg-slate-50 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {visions.map((vision, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl mb-8 aspect-[16/9] shadow-2xl border border-slate-200">
                  <img 
                    src={vision.image} 
                    alt={vision.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[2px] bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">{vision.subtitle}</span>
                    <h3 className="text-3xl font-serif font-bold text-slate-900">{vision.title}</h3>
                  </div>
                </div>
                <p className="text-lg text-slate-600 font-light leading-relaxed pl-12">
                  {vision.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-600/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-600 font-semibold tracking-widest uppercase mb-4"
              >
                Our Expertise
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold text-slate-900"
              >
                グローバルビジネスの <br />
                <span className="text-blue-600">次世代スタンダード</span>を構築する
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-600 max-w-md text-lg font-light"
            >
              最先端のデジタル戦略とグローバルネットワークを融合させ、
              クライアントの飛躍的な成長をトータルにサポートします。
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Consulting",
                jpTitle: "グローバルコンサルティング",
                desc: "海外進出戦略の策定、市場調査、現地パートナーシップの構築など、国境を越えたビジネス展開を支援します。",
                icon: Globe,
                features: ["市場調査", "進出戦略", "現地提携"]
              },
              {
                title: "Digital Marketing",
                jpTitle: "デジタルマーケティング",
                desc: "最新のSNS戦略とコンテンツ制作を駆使し、グローバル市場でのブランド認知度と影響力を最大化します。",
                icon: TrendingUp,
                features: ["SNS運用", "コンテンツ制作", "広告運用"]
              },
              {
                title: "Business Education",
                jpTitle: "ビジネスエデュケーション",
                desc: "次世代のリーダー育成を目的とした、実践的なビジネススキルとグローバルマインドセットの教育プログラムを提供します。",
                icon: BookOpen,
                features: ["リーダーシップ", "スキル開発", "マインドセット"]
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-blue-600/20">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">{service.title}</h3>
                <h4 className="text-2xl font-bold text-slate-900 mb-6">{service.jpTitle}</h4>
                <p className="text-slate-600 leading-relaxed mb-8 font-light">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Values) */}
      <section id="features" className="py-32 bg-slate-50 text-slate-900 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/20 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-xs mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">大切にしている価値観</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-8 mx-auto p-5 bg-white rounded-2xl w-fit shadow-xl border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Representative Section */}
      <section id="representative" className="py-32 bg-white px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image Column */}
            <div className="w-full lg:w-5/12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-slate-100 bg-slate-50">
                  <img 
                    src="/ceo-photo.jpg" 
                    alt="石塚洋輔" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image is missing to prevent "distorted" look
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Global Mindset</div>
                      <div className="text-slate-900 font-bold">40+ Countries</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)]" />
                  <span className="text-blue-600 font-bold tracking-widest uppercase">Representative</span>
                </div>
                
                <h3 className="text-5xl font-serif font-bold mb-2 text-slate-900">Yosuke Ishizuka</h3>
                <p className="text-slate-600 text-xl mb-8">石塚 洋輔</p>

                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-8 leading-tight">
                  「世界を身近に、 <br />
                  <span className="text-blue-600">ビジネスを自由に。</span>」
                </h2>
                
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-12 font-light">
                  <p>
                    2019年の設立以来、私たちは「国境という壁を、可能性という扉に変える」ことをミッションに掲げ、
                    数多くの企業のグローバル展開を支援してきました。
                  </p>
                  <p>
                    私自身、世界40カ国以上を巡り、現地の熱量を肌で感じてきました。
                    その経験から得た「リアルな知見」と「デジタル戦略」を融合させ、
                    日本企業が世界で勝つための最短ルートを提案します。
                  </p>
                  <p>
                    変化の激しい現代において、現状維持は後退を意味します。
                    私たちは、常に挑戦し続けるリーダーの最良のパートナーであり続けます。
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-12">
                  {[
                    { label: "Countries", value: "40+" },
                    { label: "Followers", value: "100k+" },
                    { label: "History", value: "5yr+" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Connect:</span>
                  <div className="flex gap-4">
                    {[
                      { icon: Twitter, href: "https://x.com/Yosuke_Ishizuka", color: "hover:text-blue-500 hover:bg-blue-50" },
                      { icon: Instagram, href: "https://www.instagram.com/yosukeishizuka/", color: "hover:text-pink-500 hover:bg-pink-50" },
                      { icon: Youtube, href: "https://www.youtube.com/@tabisuruCEO", color: "hover:text-red-600 hover:bg-red-50" }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 shadow-sm ${social.color} hover:shadow-md hover:-translate-y-1`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section id="company" className="py-32 px-4 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">Corporate Profile</span>
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">会社概要</h2>
                <p className="text-slate-600 font-light leading-relaxed text-lg">
                  株式会社With You Internationalは、世界と日本を繋ぐ架け橋として、革新的なビジネスソリューションを提供しています。
                </p>
                <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-slate-900">Ginza Head Office</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    〒104-0061<br />
                    東京都中央区銀座7丁目13番6号<br />
                    サガミビル2階
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden"
              >
                {[
                  { label: "会社名", value: "株式会社With You International" },
                  { label: "代表者", value: "石塚洋輔" },
                  { label: "所在地", value: "〒104-0061 東京都中央区銀座7丁目13番6号 サガミビル2階" },
                  { label: "設立", value: "2019年9月2日" },
                  { label: "事業内容", value: "グローバルビジネス支援、コンサルティング、マーケティング業務、メディア運営" },
                  { label: "主要取引銀行", value: "埼玉りそな銀行、きらぼし銀行" },
                  { label: "メールアドレス", value: <EmailDisplay /> }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 p-8 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                    <dt className="text-xs font-bold text-blue-600 uppercase tracking-widest w-32 shrink-0">{item.label}</dt>
                    <dd className="text-lg text-slate-700 font-medium">{item.value}</dd>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white text-slate-900 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight"
              >
                あなたのビジョンを、<br />
                <span className="text-blue-600">世界へと繋げましょう。</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 mb-16 text-xl max-w-xl font-light leading-relaxed"
              >
                プロジェクトのアイデアや、グローバル展開に関するご相談など、
                まずはお気軽にお問い合わせください。専門のコンサルタントが対応いたします。
              </motion.p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Email Address</p>
                    <div className="text-xl font-medium text-slate-900 hover:text-blue-600 transition-colors">
                      <EmailDisplay />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Office Location</p>
                    <p className="text-xl font-medium text-slate-900">Ginza, Tokyo, Japan</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">お名前</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="山田 太郎" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">会社名</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="株式会社〇〇" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">メールアドレス</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all" placeholder="example@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">お問い合わせ内容</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none" placeholder="ご相談内容をご記入ください"></textarea>
                </div>
                <button className="w-full group relative py-4 bg-blue-600 text-white rounded-lg font-bold overflow-hidden transition-all shadow-xl shadow-blue-600/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transition-transform group-hover:scale-105" />
                  <span className="relative flex items-center justify-center gap-2">
                    送信する <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );

  const PrivacyPolicy = () => (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-2 text-blue-600 font-semibold cursor-pointer" onClick={() => setCurrentPage("home")}>
        <ChevronLeft className="w-5 h-5" /> 戻る
      </div>
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <ShieldCheck className="w-8 h-8" /> プライバシーポリシー
      </h1>
      <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
        <p>株式会社With You International（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>
        
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">第1条（個人情報）</h2>
          <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別符号）を指します。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">第2条（個人情報の収集方法）</h2>
          <p>当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">第3条（個人情報を収集・利用する目的）</h2>
          <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>当社サービスの提供・運営のため</li>
            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
            <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
            <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
            <li>上記の利用目的に付随する目的</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">第4条（利用目的の変更）</h2>
          <p>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">第5条（個人情報の第三者提供）</h2>
          <p>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">第6条（お問い合わせ窓口）</h2>
          <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。</p>
          <div className="bg-gray-50 p-4 rounded-lg mt-2">
            <p>住所：〒104-0061 東京都中央区銀座7丁目13番6号 サガミビル2階</p>
            <p>社名：株式会社With You International</p>
            <p>Eメールアドレス：<EmailDisplay /></p>
          </div>
        </section>
      </div>
    </div>
  );

  const Tokushoho = () => (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <div className="mb-8 flex items-center gap-2 text-blue-600 font-semibold cursor-pointer" onClick={() => setCurrentPage("home")}>
        <ChevronLeft className="w-5 h-5" /> 戻る
      </div>
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <FileText className="w-8 h-8" /> 特定商取引法に基づく表記
      </h1>
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <dl className="divide-y divide-gray-100">
          {[
            { label: "販売業者", value: "株式会社With You International" },
            { label: "運営責任者", value: "石塚洋輔" },
            { label: "所在地", value: "〒104-0061 東京都中央区銀座7丁目13番6号 サガミビル2階" },
            { label: "メールアドレス", value: <EmailDisplay /> },
            { label: "販売価格", value: "各サービス・商品の詳細ページに表示" },
            { label: "商品代金以外の必要料金", value: "消費税、振込手数料（銀行振込の場合）" },
            { label: "お支払い方法", value: "クレジットカード決済、銀行振込" },
            { label: "お支払い時期", value: "クレジットカード：各カード会社の引き落とし日 / 銀行振込：お申し込みから7日以内" },
            { label: "提供時期", value: "決済確認後、即時または契約に基づいた期日" },
            { label: "返品・交換・キャンセル", value: "サービスの性質上、提供開始後の返品・キャンセルはお受けできません。" }
          ].map((item, index) => (
            <div key={index} className="px-6 py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-semibold text-gray-500">{item.label}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navigation />

      <main>
        {currentPage === "home" && <HomePage />}
        {currentPage === "privacy" && <PrivacyPolicy />}
        {currentPage === "tokushoho" && <Tokushoho />}
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-100 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-2">
              <span className="text-2xl font-serif font-bold text-slate-900 mb-6 block">
                WITH YOU <span className="text-blue-600 italic">INTERNATIONAL</span>
              </span>
              <p className="text-slate-500 max-w-sm mb-8 font-light leading-relaxed">
                世界とあなたを繋ぎ、共に新たな価値を創造する。<br />
                グローバルな視点で、ビジネスの可能性を無限に広げます。
              </p>
              <div className="flex gap-6">
                <a href="https://x.com/Yosuke_Ishizuka" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/yosukeishizuka/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@tabisuruCEO" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-900 uppercase tracking-widest text-xs">サービス</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#services" className="hover:text-blue-600">グローバルコンサルティング</a></li>
                <li><a href="#services" className="hover:text-blue-600">デジタルマーケティング</a></li>
                <li><a href="#services" className="hover:text-blue-600">ビジネスエデュケーション</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-900 uppercase tracking-widest text-xs">法的情報</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li>
                  <button onClick={() => setCurrentPage("privacy")} className="hover:text-blue-600">
                    プライバシーポリシー
                  </button>
                </li>
                <li>
                  <button onClick={() => setCurrentPage("tokushoho")} className="hover:text-blue-600">
                    特定商取引法に基づく表記
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs tracking-widest uppercase">© 2024 株式会社With You International. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
