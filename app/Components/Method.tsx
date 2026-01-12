const MethodItem = ({ title }: { title: string }) => (
  <div className="flex justify-between items-center border-t border-white/20 py-8 group cursor-pointer hover:bg-white/5 transition-all">
    <span className="text-2xl md:text-3xl font-medium tracking-tight text-white">{title}</span>
    <span className="text-4xl font-light text-white transition-transform group-hover:rotate-90">+</span>
  </div>
);

const TheMethod = () => {
  return (
    <section className="bg-black text-white px-9 py-20">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <h2 className="text-[10vw] font-medium leading-[0.8] tracking-tighter mb-8">
              The <br /> Method.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-md leading-tight">
              High-fidelity design and narrative strategy for brands that have something to say.
            </p>
          </div>
          
          <button className="border border-white rounded-full px-10 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Book a consult
          </button>
        </div>

        {/* Accordion List - Tailored for Writer/Designer */}
        <div className="border-b border-white/20">
          <MethodItem title="Narrative-driven design." />
          <MethodItem title="Visual storytelling." />
          <MethodItem title="Words that work (and sell)." />
          <MethodItem title="Identity over trends." />
          <MethodItem title="Direct creative access." />
        </div>

      </div>
    </section>
  );
};

export default TheMethod;