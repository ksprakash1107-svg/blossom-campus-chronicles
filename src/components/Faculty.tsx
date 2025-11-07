import { Card, CardContent } from "@/components/ui/card";
import { Mail, Award } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Professor & HOD - CSE",
      specialization: "Artificial Intelligence, Machine Learning",
      experience: "20+ years",
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Associate Professor - AIML",
      specialization: "Deep Learning, Neural Networks",
      experience: "15+ years",
    },
    {
      name: "Dr. Arun Prakash",
      designation: "Professor - AIDS",
      specialization: "Data Science, Big Data Analytics",
      experience: "18+ years",
    },
    {
      name: "Dr. Meera Krishnan",
      designation: "Associate Professor - CSBS",
      specialization: "Business Intelligence, Cloud Computing",
      experience: "12+ years",
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Faculty
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from the best minds in engineering and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="glass-card border-border shadow-xl hover:shadow-2xl glass-hover transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {faculty.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{faculty.name}</h3>
                <p className="text-sm text-primary text-center font-semibold mb-4">{faculty.designation}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{faculty.specialization}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>Experience: {faculty.experience}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
