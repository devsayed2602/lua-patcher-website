/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, Gamepad2, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import dashboardImg from './assets/dashboard.png';
import detailedGameInfoImg from './assets/detailed game info.png';
import gamePreviewsImg from './assets/game previews.png';
import steamLibraryImg from './assets/steam librarary.png';

// --- SVGs ---
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16.36a4.198 4.198 0 110-8.396 4.198 4.198 0 010 8.396zm5.34-9.923a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
  </svg>
);

// --- Components ---

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card !border-0 !border-b !bg-surface/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
            <Gamepad2 className="text-white w-5 h-5" />
          </div>
          <span className="font-black text-xl tracking-tighter text-white uppercase italic">Lua Patcher</span>        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Documentation</a>
          <a href="https://discord.com" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Discord</a>
          <a href="#download" className="px-5 py-2 rounded-lg bg-brand hover:bg-brand-dark text-white text-sm font-bold transition-all shadow-lg shadow-brand/20">
            v2.4.0 Release
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Mesh Gradients */}
      <div className="mesh-gradient top-[-100px] left-[-100px]" />
      <div className="mesh-gradient bottom-[-200px] right-[-100px] !bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              The Ultimate Steam Enhancer
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
              Your Steam <br />
              <span className="text-brand">Reimagined.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed font-medium">
              Unlock and manage your game library with Lua Patcher. Seamlessly integrate non-native titles into your Steam ecosystem with one click.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#download"
                className="px-8 py-4 bg-brand text-white rounded-xl font-bold text-lg transition-all hover:bg-brand-dark hover:scale-105 active:scale-95 shadow-xl shadow-brand/20"
              >
                Download for Windows
              </a>
            </div>


          </motion.div>

          {/* Main App Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="glass-card w-full aspect-video rounded-2xl p-1 overflow-hidden relative shadow-2xl">
              {/* Overlay Glow */}
              <div className="absolute -inset-2 bg-brand/5 blur-3xl rounded-full -z-10" />

              <div className="h-full w-full bg-surface/40 rounded-xl overflow-hidden flex flex-col">
                {/* Mock Header */}
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  <div className="mx-auto text-[10px] text-gray-500 uppercase tracking-widest font-black">Lua Patcher - Dashboard</div>
                </div>

                <img
                  src={dashboardImg}
                  alt=" Lua Patcher App"
                  className="w-full flex-1 object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl glass-card hover:bg-white/5 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-brand w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm font-medium">
        {description}
      </p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Why Lua Patcher?</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            Designed for performance and simplicity, our tool offers unmatched features
            that make game management a breeze.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Zap}
            title="Instant Patching"
            description="Our advanced Lua-based engine patches your library in milliseconds. No more waiting, just straight to gaming."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Secure & Private"
            description="Your privacy is our priority. No account data is ever stored on our servers. Pure local-first engineering."
          />
          <FeatureCard
            icon={Download}
            title="Mass Library Sync"
            description="Add thousands of titles to your Steam library effortlessly. Our scraper stays up-to-date with new releases."
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const screenshots = [
    { url: dashboardImg, label: "Powerful Dashboard" },
    { url: detailedGameInfoImg, label: 'Detailed Game Info' },
    { url: gamePreviewsImg, label: 'Smooth Previews' },
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-20 tracking-tighter">See it in action</h2>

        <div className="space-y-24">
          {screenshots.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-16",
                i % 2 !== 0 && "md:flex-row-reverse"
              )}
            >
              <div className="flex-1 rounded-3xl overflow-hidden glass-card p-1.5 group shadow-2xl">
                <div className="rounded-2xl overflow-hidden border border-white/5">
                  <img
                    src={s.url}
                    alt={s.label}
                    className="w-full transform group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex-1 text-left space-y-6">
                <div className="text-brand font-black text-[10px] uppercase tracking-[0.3em] font-black">Feature 0{i + 1}</div>
                <h3 className="text-4xl font-extrabold text-white tracking-tight">{s.label}</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  Experience a high-performance UI tailored for large libraries.
                  Every detail crafted for accessibility and visual impact with a focus on modern design.
                </p>
                <div className="flex gap-4">
                  <div className="h-0.5 w-12 bg-brand" />
                  <div className="h-0.5 w-12 bg-white/5" />
                  <div className="h-0.5 w-12 bg-white/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="mesh-gradient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[800px] !h-[800px] !bg-brand/10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">Ready to start?</h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Download the latest version of Lua Patcher and join thousands
          of gamers who have already upgraded their experience.
        </p>

        <div className="p-10 rounded-3xl glass-card inline-block w-full max-w-lg">
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
            <div className="text-left">
              <div className="text-white font-black text-xl uppercase tracking-tighter">v2.4.1 Stable</div>
              <div className="text-gray-500 text-xs font-black uppercase tracking-widest">Last updated: April 2026</div>
            </div>
            <div className="px-3 py-1 rounded-md bg-brand/20 text-brand text-[10px] font-black uppercase tracking-widest border border-brand/30">LATEST</div>
          </div>

          <button className="w-full py-5 bg-brand hover:bg-brand-dark text-white rounded-2xl font-black text-xl transition-all hover:scale-[1.02] shadow-2xl shadow-brand/30 uppercase tracking-tight">
            DOWNLOAD FOR WINDOWS
          </button>

          <p className="mt-8 text-gray-500 text-[10px] font-black uppercase tracking-widest">
            By downloading, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center">
              <Gamepad2 className="text-white w-5 h-5" />
            </div>
            <span className="font-black text-xl tracking-tighter text-white uppercase italic"></span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><TwitterIcon className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><InstagramIcon className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><DiscordIcon className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 gap-4 font-black uppercase tracking-[0.2em]">
          <p>© 2026 LUA PATCHER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span className="text-brand/50 italic">Powered by Lua 5.4</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a
              href="mailto:[sayedalimollah2602@gmail.com]?subject=Support Request&body=Hi, I need help with..."
              className="hover:text-white transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HowItWorks() {
  const steps = [
    { title: 'Download', desc: 'Get the latest binary for your OS.' },
    { title: 'Initialize', desc: 'run the tool once to sync with Steam.' },
    { title: 'Select Games', desc: 'Browse our catalog of supported titles.' },
    { title: 'Add to Steam', desc: 'Click install to add to library.' },
    { title: 'Play', desc: 'Games appear instantly in your library, download and enjoy!' },
  ];

  return (
    <section className="py-24 border-t border-white/5 bg-gradient-to-b from-surface to-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">How it works</h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand/20 border border-brand/30 flex items-center justify-center font-black text-brand group-hover:bg-brand group-hover:text-white transition-all shadow-lg shadow-brand/10">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-500 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden glass-card p-4">
            <img
              src={steamLibraryImg}
              alt="Steam Library Mock"
              className="w-full h-full object-cover rounded-2xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Gallery />
      <CallToAction />
      <Footer />
    </div>
  );
}
