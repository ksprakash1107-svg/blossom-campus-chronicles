import campusImage from "@/assets/campus-life.jpg";
import classroomImage from "@/assets/classroom.jpg";
import { Card, CardContent } from "@/components/ui/card";

const CampusLife = () => {
  const highlights = [
    {
      title: "Cultural Festivals",
      description: "Annual tech fests, cultural events, and competitions",
      color: "from-primary to-accent",
    },
    {
      title: "Sports & Recreation",
      description: "State-of-the-art sports facilities and clubs",
      color: "from-accent to-secondary",
    },
    {
      title: "Student Clubs",
      description: "Coding clubs, robotics, music, dance, and more",
      color: "from-secondary to-primary",
    },
    {
      title: "Industry Connect",
      description: "Regular workshops, seminars, and industry visits",
      color: "from-primary to-accent",
    },
  ];

  return (
    <section id="campus" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Campus Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience vibrant student life amidst beautiful cherry blossoms and modern facilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img 
              src={campusImage} 
              alt="Campus with cherry blossom trees" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img 
              src={classroomImage} 
              alt="Students collaborating in classroom" 
              className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="glass-card border-border shadow-xl hover:shadow-2xl glass-hover transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${item.color} mb-4`} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="glass-card border-border shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">A Day at MEC</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wake up to the sight of cherry blossoms swaying in the morning breeze. 
                Attend engaging lectures, collaborate with peers in state-of-the-art labs, 
                participate in club activities, and unwind in our vibrant campus spaces. 
                Every day at MEC is an opportunity to learn, grow, and create memories that last a lifetime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
