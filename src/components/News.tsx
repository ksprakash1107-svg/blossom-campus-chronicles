import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, Megaphone } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      icon: <Trophy className="w-6 h-6" />,
      category: "Achievement",
      title: "MEC Team Wins National Hackathon",
      date: "March 15, 2025",
      description: "Our CSE students secured first place at the National Tech Innovation Challenge",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      category: "Event",
      title: "Annual Tech Fest 2025 Announced",
      date: "March 10, 2025",
      description: "Registration open for the biggest technical festival featuring competitions, workshops, and celebrity talks",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      category: "Seminar",
      title: "Industry Expert Seminar on AI & Ethics",
      date: "March 5, 2025",
      description: "Join us for an insightful session with leading AI researchers discussing ethical implications",
    },
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings at MEC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="glass-card border-border shadow-xl hover:shadow-2xl glass-hover transition-all hover:-translate-y-2 duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-primary">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.date}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
