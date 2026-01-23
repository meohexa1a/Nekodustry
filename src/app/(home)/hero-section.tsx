export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center w-full px-6 pt-24 sm:px-12 md:pt-32">
      <div className="space-y-8">
        <div className="group relative inline-block">
          {/* Subtle System Annotation */}
          <div className="mb-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-muted-foreground opacity-70">
            <span className="block">Operating as a service layer</span>
            <span className="block">within a larger community system</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-light leading-[1.1] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Experimental <br />
            <span className="font-serif italic text-muted-foreground">Ecosystem</span>
          </h1>
        </div>

        <p className="max-w-xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
          Nekodustry provides systems, not direction.
          <span className="block mt-4 opacity-70">Structure for the community to inhibit.</span>
        </p>
      </div>
    </section>
  );
}
