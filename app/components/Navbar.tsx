import Link from "next/dist/client/link";

const Navbar = () => {
    return (
        <nav className="w-full border-b border-nav bg-creame">
            <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-3 sm:px-6 md:px-10">

                <div className="flex min-w-0 items-center gap-2 sm:gap-4">

                    <div className="shrink-0 font-fraunces text-xl font-semibold tracking-wide sm:text-2xl">
                        <span
                            className="mr-1 inline-block h-[10px] w-[10px] rounded-full border border-[rgb(217,210,194)] bg-[rgb(246,243,236)]"
                        ></span>

                        FoundIt<span className="text-amber-600">.</span>
                    </div>

                    <div className="hidden shrink-0 items-center font-space-mono text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:flex md:text-[11px] md:tracking-[0.2em]">
                        CAMPUS REGISTRY
                    </div>

                </div>

                <div className="ml-2 flex shrink-0 items-center gap-0.5 font-space-mono text-[10px] font-medium uppercase tracking-widest sm:ml-4 sm:gap-1 sm:text-[11px] md:tracking-[0.2em]">

                    <Link href="/pages/browse" className="rounded px-2 py-2 text-amber-600 hover:bg-white sm:px-3">
                        Browse
                    </Link>

                    <Link href="/pages/loginpage" className="rounded px-2 py-2 text-gray-600 hover:bg-white sm:px-3">
                        Log In
                    </Link>

                    <Link href="/pages/register" className="rounded-sm bg-gray-800 px-2 py-2 text-white hover:bg-gray-700 sm:mx-1 sm:px-3 md:mx-2">
                        Register
                    </Link>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;

// const Navbar = () => {
//     return (
//         <main className="relative min-h-screen overflow-x-hidden bg-[#0f1226] text-white">
//             {/* SVG filter used by the glass navbar for the "liquid" refraction */}
//             <svg width="0" height="0" className="absolute" aria-hidden="true">
//                 <filter id="liquid-glass" x="0" y="0" width="100%" height="100%">
//                     <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="3" result="noise" />
//                     <feGaussianBlur in="noise" stdDeviation="2" result="soft" />
//                     <feDisplacementMap in="SourceGraphic" in2="soft" scale="30" xChannelSelector="R" yChannelSelector="G" />
//                 </filter>
//             </svg>

//             {/* Colourful shapes so the glass has something to bend */}
//             <div className="pointer-events-none absolute inset-0 -z-0">
//                 <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-fuchsia-500/70 blur-3xl" />
//                 <div className="absolute right-0 top-64 h-[28rem] w-[28rem] rounded-full bg-cyan-400/60 blur-3xl" />
//                 <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-amber-400/50 blur-3xl" />
//             </div>


//             {/* Liquid glass navbar */}
//             <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
//                 <nav className="glass relative flex w-full max-w-3xl items-center justify-between rounded-full px-6 py-3">
//                     {/* Logo */}
//                     <a
//                         href="#"
//                         className="relative z-10 shrink-0 text-lg font-bold tracking-tight text-white"
//                     >
//                         Lumen<span className="text-cyan-300">.</span>
//                     </a>

//                     {/* Navigation links */}
//                     <ul className="relative z-10 hidden items-center gap-1 sm:flex">
//                         {[
//                             ["Features", "#features"],
//                             ["About", "#about"],
//                             ["Contact", "#contact"],
//                         ].map(([label, href]) => (
//                             <li key={label}>
//                                 <a
//                                     href={href}
//                                     className="
//               glass-link block rounded-full
//               px-4 py-2 text-sm font-medium
//               text-white/80
//             "
//                                 >
//                                     {label}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>

//                     {/* CTA */}
//                     <a
//                         href="#contact"
//                         className="
//         glass-cta relative z-10 shrink-0
//         rounded-full px-4 py-2
//         text-sm font-semibold text-slate-900
//         sm:px-5
//       "
//                     >
//                         Get started <span aria-hidden="true">↗</span>
//                     </a>
//                 </nav>
//             </header>


//             {/* Hero */}
//             <section className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-44 text-center">
//                 <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">Simple tools for calmer days</h1>
//                 <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
//                     Lumen keeps your notes, tasks and reminders in one quiet place, so you can focus on what matters.
//                 </p>
//                 <a href="#features" className="mt-10 inline-block rounded-full bg-white px-6 py-3 font-semibold text-slate-900">
//                     See what it does
//                 </a>
//             </section>

//             {/* Features */}
//             <section id="features" className="relative z-10 mx-auto grid max-w-4xl gap-6 px-6 pb-24 sm:grid-cols-3">
//                 {[
//                     ["Notes", "Write ideas down fast and find them again in seconds."],
//                     ["Tasks", "A short list for today, and a longer one for later."],
//                     ["Reminders", "Gentle nudges at the right time, never noisy."],
//                 ].map(([title, text]) => (
//                     <div key={title} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-md">
//                         <h3 className="text-xl font-semibold">{title}</h3>
//                         <p className="mt-2 text-white/75">{text}</p>
//                     </div>
//                 ))}
//             </section>

//             {/* About */}
//             <section id="about" className="relative z-10 mx-auto max-w-2xl px-6 pb-24 text-center">
//                 <h2 className="text-3xl font-bold">Built to stay out of the way</h2>
//                 <p className="mt-4 text-white/80">
//                     No dashboards, no clutter. Just the few things you need, working the way you expect.
//                 </p>
//             </section>

//             {/* Contact / footer */}
//             <footer id="contact" className="relative z-10 pb-12 text-center text-sm text-white/70">
//                 <p>hello@lumen.example</p>
//                 <p className="mt-1">© 2026 Lumen</p>
//             </footer>
//         </main>
//     );
// }

// export default Navbar;
