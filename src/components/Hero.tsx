import heroImage from "@/assets/hero-cherry-blossom.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Madras Engineering College
        </h1>
        <p className="text-xl md:text-3xl mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Where Technology Meets Passion
        </p>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Nurturing innovation and excellence in engineering education since our inception. 
          Join us in shaping the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="text-lg" asChild>
            <a href="#admissions">Apply Now</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
