import { CheckCircle, FileText, GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Admissions = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Application",
      description: "Fill out the online application form with your details",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Entrance Exam",
      description: "Appear for the entrance examination",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Selection Process",
      description: "Based on merit and entrance scores",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Enrollment",
      description: "Complete admission formalities and join us",
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Admissions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey towards excellence. Join thousands of successful engineers who started here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Apply Online</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <Label htmlFor="program">Preferred Program</Label>
                    <Input id="program" placeholder="e.g., CSE, AIML" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Tell us about your interests and goals" rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="border-none shadow-lg inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Eligibility</h3>
              <p className="text-muted-foreground">
                Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics 
                with a minimum of 60% aggregate marks
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
