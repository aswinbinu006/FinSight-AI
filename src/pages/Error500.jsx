import { Link } from 'react-router-dom';
import './Error500.css';

export default function Error500() {


  return (
    <>

{/*  Large Faint Background Text  */}
<div className="fixed inset-0 flex items-center justify-center pointer-events-none">
<span className="error-bg-text font-serif-display text-[30rem] md:text-[45rem] font-light leading-none">500</span>
</div>
{/*  Main Content Canvas  */}
<main className="relative z-10 w-full max-w-2xl px-6 text-center">
{/*  Minimal Logo  */}
<div className="mb-12 flex justify-center">
<div className="flex items-center gap-2 opacity-80">
<span className="material-symbols-outlined text-primary text-2xl" data-icon="analytics">analytics</span>
<span className="text-lg font-semibold tracking-tight text-on-surface">FinSight AI</span>
</div>
</div>
{/*  Text Stack  */}
<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-headline font-semibold text-on-surface tracking-tight">
                500 — Something went wrong
            </h1>
<p className="text-lg md:text-xl text-on-surface-variant font-light max-w-lg mx-auto leading-relaxed">
                We're having trouble processing your request. This is likely a temporary issue on our side.
            </p>
</div>
{/*  Action Cluster  */}
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-medium rounded-lg btn-shadow hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Try again
            </button>
<button className="w-full sm:w-auto px-10 py-4 text-on-surface font-medium rounded-lg hover:bg-on-surface/5 transition-colors border border-outline-variant/30">
                Go to Dashboard
            </button>
</div>
{/*  Subtle System Status Link  */}
<div className="mt-20">
<a className="inline-flex items-center gap-2 text-sm text-on-surface-variant/60 hover:text-primary transition-colors font-medium" href="#">
<span className="material-symbols-outlined text-base" data-icon="status_alert">add_alert</span>
                Check system status
            </a>
</div>
</main>
{/*  Footer Metadata  */}
<footer className="fixed bottom-8 w-full text-center">
<p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-on-surface-variant/30">
            Internal Server Error • Ref: AI-FS-9921
        </p>
</footer>

    </>
  );
}
