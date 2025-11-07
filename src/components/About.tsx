import { BookOpen, Users, Award, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Excellence",
      description: "World-class curriculum designed to meet industry standards",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Top Rankings",
      description: "Consistently ranked among the best engineering colleges",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Hub",
      description: "State-of-the-art labs and research facilities",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Madras Engineering College, located in Tambaram, Chennai, is a premier institution 
            committed to excellence in technical education and research.
          </p>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="glass-card border-border shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide quality education in engineering and technology, fostering innovation, 
                research, and entrepreneurship. We aim to develop technically competent and socially 
                responsible engineers who contribute to national development.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a world-class institution of higher learning in engineering and technology, 
                recognized for academic excellence, innovative research, and holistic development of students.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-border shadow-xl hover:shadow-2xl glass-hover transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
