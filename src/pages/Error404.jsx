import { Link } from 'react-router-dom';
import './Error404.css';

export default function Error404() {


  return (
    <>

{/*  Main Content Area  */}
<main className="w-full max-w-2xl flex flex-col items-center justify-center flex-1 relative">
{/*  Ethereal Background 404 Display  */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
<div className="font-serif text-[28rem] md:text-[36rem] leading-none text-[#006B5F] opacity-[0.04] italic">
                404
            </div>
</div>
{/*  Central Error Container  */}
<div className="relative z-10 flex flex-col items-center text-center">
{/*  Branding Accent  */}
<div className="text-[#006B5F] font-bold tracking-tighter text-lg mb-12">
                FinSight AI
            </div>
<h1 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-6">
                Page not found
            </h1>
<p className="font-body text-on-surface-variant text-lg max-w-md mb-12 leading-relaxed">
                The page you’re looking for doesn’t exist or may have been moved.
            </p>
<a className="inline-flex items-center px-10 py-4 bg-primary text-white font-semibold rounded-lg shadow-sm hover:shadow-lg active:scale-95 transition-all duration-300 group" href="#">
<span>Go to Dashboard</span>
<span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</main>
{/*  Minimal Clean Footer  */}
<footer className="w-full py-10 flex justify-center items-center">
<p className="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.2em] text-[#3C4947] opacity-60">
            © 2024 FINSIGHT AI Premium INTELLIGENCE
        </p>
</footer>

    </>
  );
}
