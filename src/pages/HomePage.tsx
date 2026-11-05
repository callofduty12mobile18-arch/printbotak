import React, { useRef } from 'react';
import { ArrowRight, Check, Download, Printer, QrCode, ShieldCheck } from 'lucide-react';
import { DOWNLOAD_CONFIG } from '../config/download';
import { InteractiveWorkstationDemo } from '../components/InteractiveWorkstationDemo';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HomePageProps {
  navigate: (path: string) => void;
  onOpenDownloadModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate, onOpenDownloadModal }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal(pageRef);
  const recommended = DOWNLOAD_CONFIG.artifacts.find((artifact) => artifact.recommended) || DOWNLOAD_CONFIG.artifacts[0];

  const features = [
    {
      icon: QrCode,
      title: 'Easy customer uploads',
      description: 'Customers scan a QR code and send files from their phone browser.',
    },
    {
      icon: Printer,
      title: 'One clear print queue',
      description: 'Review jobs, confirm details, and send them to your printers.',
    },
    {
      icon: ShieldCheck,
      title: 'Built for the counter',
      description: 'Works with your Windows printers and helps prevent duplicate jobs.',
    },
  ];

  return (
    <div ref={pageRef} className="relative overflow-hidden bg-slate-50 text-slate-900 pt-24 pb-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-hero pointer-events-none -z-10" />

      <section className="hero-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 text-center">
        <div className="particle-field" aria-hidden="true" />
        <div className="hero-entrance inline-flex items-center gap-2.5 mb-8 text-sm font-medium text-slate-800">
          <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white shadow-md shadow-slate-900/15"><Printer className="w-4 h-4" /></span>
          <span>Print Bot</span>
        </div>

        <h1 className="hero-entrance hero-entrance-delay text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.25rem] font-normal text-slate-900 max-w-6xl mx-auto leading-[.98] tracking-[-0.065em]">
          Make every print job feel simple.
        </h1>
        <p className="hero-entrance hero-entrance-delay-2 mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Print Bot brings customer uploads, job review, and printing together in one calm, easy-to-use workspace.
        </p>

        <div className="hero-entrance hero-entrance-delay-3 mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenDownloadModal}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download for Windows
            <span className="text-xs opacity-75 font-normal">{recommended.filesize}</span>
          </button>
          <button
            onClick={() => navigate('/features')}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore features <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="hero-entrance hero-entrance-delay-3 mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-500" /> Windows 10 & 11</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-500" /> Your existing printers</span>
          <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-blue-500" /> No customer app required</span>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 reveal-on-scroll">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 sm:p-3 shadow-glow-ring">
          <InteractiveWorkstationDemo />
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">A closer look at the Print Bot workstation.</p>
      </section>

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.02] py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-on-scroll max-w-2xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Everything in one place</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">A smoother counter, from upload to print.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <article key={title} data-delay={index + 1} className="reveal-on-scroll p-6 sm:p-7 rounded-2xl bg-white border border-white/10 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-300/15 flex items-center justify-center text-cyan-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>

          <div className="reveal-on-scroll mt-8 text-center">
            <button onClick={() => navigate('/features')} className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-slate-900 transition-colors">
              See how it works <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
