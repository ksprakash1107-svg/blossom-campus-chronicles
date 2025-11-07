import { Code, Database, Brain, Network, ChartBar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Departments = () => {
  const departments = [
    {
      icon: <Code className="w-12 h-12" />,
      name: "Computer Science and Engineering",
      abbr: "CSE",
      description: "Core computing principles, software development, and emerging technologies",
      gradient: "from-primary to-accent",
    },
    {
      icon: <Database className="w-12 h-12" />,
      name: "Computer Science and Business Systems",
      abbr: "CSBS",
      description: "Blend of computer science with business analytics and management",
      gradient: "from-accent to-secondary",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      name: "Artificial Intelligence and Machine Learning",
      abbr: "AIML",
      description: "Advanced AI algorithms, deep learning, and intelligent systems",
      gradient: "from-secondary to-primary",
    },
    {
      icon: <Network className="w-12 h-12" />,
      name: "Artificial Intelligence and Data Science",
      abbr: "AIDS",
      description: "Data analytics, AI applications, and big data technologies",
      gradient: "from-primary to-secondary",
    },
    {
      icon: <ChartBar className="w-12 h-12" />,
      name: "Data Science",
      abbr: "DS",
      description: "Statistical analysis, data visualization, and predictive modeling",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Departments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our cutting-edge programs designed to prepare you for the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 group overflow-hidden"
            >
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${dept.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {dept.icon}
                </div>
                <div className={`text-sm font-bold mb-2 bg-gradient-to-r ${dept.gradient} bg-clip-text text-transparent`}>
                  {dept.abbr}
                </div>
                <h3 className="text-xl font-bold mb-3">{dept.name}</h3>
                <p className="text-muted-foreground">{dept.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
