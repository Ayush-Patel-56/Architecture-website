'use client';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-32 px-6 md:px-12 bg-[#fdfdfd]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="md:col-span-2 space-y-10">
          <h2 className="text-2xl font-light tracking-[0.4em] uppercase">
            Studio<span className="font-extrabold">SAHAJ</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 text-[11px] tracking-[0.15em] uppercase text-neutral-500 font-medium">
            <div className="space-y-4">
              <p>Boston</p>
              <p>Jerusalem</p>
              <p>Singapore</p>
            </div>
            <div className="space-y-4">
              <p>Shanghai</p>
              <p>Hong Kong</p>
              <p>Toronto</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black font-bold">Contact</p>
          <div className="text-[11px] space-y-4 text-neutral-400 font-medium tracking-[0.1em] uppercase">
            <p className="hover:text-black cursor-pointer transition-colors">Business Development</p>
            <p className="hover:text-black cursor-pointer transition-colors">Press Inquiries</p>
            <p className="hover:text-black cursor-pointer transition-colors">General Info</p>
            <p className="hover:text-black cursor-pointer transition-colors">Careers</p>
          </div>
        </div>
        
        <div className="space-y-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black font-bold">Connect</p>
          <div className="text-[11px] space-y-4 text-neutral-400 font-medium tracking-[0.1em] uppercase">
            <p className="hover:text-black cursor-pointer transition-colors">Instagram</p>
            <p className="hover:text-black cursor-pointer transition-colors">LinkedIn</p>
            <p className="hover:text-black cursor-pointer transition-colors">Facebook</p>
            <p className="hover:text-black cursor-pointer transition-colors">X / Twitter</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-32 pt-10 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-neutral-300 font-bold">
        <p>© 2024 StudioSAHAJ LLP. All Rights Reserved.</p>
        <div className="flex gap-10">
          <p className="cursor-pointer hover:text-black transition-colors">Privacy Policy</p>
          <p className="cursor-pointer hover:text-black transition-colors">Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
