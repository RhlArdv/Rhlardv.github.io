import React from 'react';

const ContactCTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Large Display Email - No Section Title */}
                <div className="mb-16 md:mb-24">
                    <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-mono mb-3 md:mb-4">Drop a message</p>
                    <a
                        href="mailto:rhlardv@gmail.com"
                        className="block text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none hover:text-indigo-500 transition-all duration-300 break-all md:break-words"
                    >
                        rhlardv<br />@gmail.com
                    </a>
                </div>

                {/* Social Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-slate-200 dark:border-slate-800">
                    <a href="https://github.com/RhlArdv" target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                        <span className="text-[9px] text-slate-400 font-mono tracking-widest mb-1">01 / GITHUB</span>
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Follow ↗</span>
                    </a>
                    <a href="https://linkedin.com/in/rahul-ardiva-luthfi" target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                        <span className="text-[9px] text-slate-400 font-mono tracking-widest mb-1">02 / LINKEDIN</span>
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Connect ↗</span>
                    </a>
                    <a href="https://instagram.com/rhlardv" target="_blank" rel="noopener noreferrer" className="group flex flex-col">
                        <span className="text-[9px] text-slate-400 font-mono tracking-widest mb-1">03 / INSTAGRAM</span>
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Photos ↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;