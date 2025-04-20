import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "Stolovka has made tracking my child's lunch expenses so much easier. I love getting notifications about what they're eating!",
    name: "Anna Petrova",
    role: "Parent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
  },
  {
    quote:
      "Since implementing Stolovka, our cafeteria processing time has decreased by 35%. The interface is intuitive and our staff loves it.",
    name: "Mikhail Ivanov",
    role: "School Administrator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mikhail",
  },
  {
    quote:
      "The analytics dashboard gives me insights I never had before. I can now make data-driven decisions about our menu and staffing.",
    name: "Elena Sokolova",
    role: "School Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
  {
    quote:
      "My kids no longer lose their lunch money thanks to Stolovka's digital payment system. It's been a game-changer for our family.",
    name: "Dmitry Kuznetsov",
    role: "Parent",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
  },
  {
    quote:
      "The reporting features have saved me hours of work each week. I can generate exactly what I need with just a few clicks.",
    name: "Olga Smirnova",
    role: "Administrator",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olga",
  },
];

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="h-full bg-white border-none shadow-md rounded-xl backdrop-blur-sm bg-white/90 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-lg">{name}</h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
          <div className="flex-1">
            <blockquote className="text-base italic text-gray-700">
              "{quote}"
            </blockquote>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  return (
    <section
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-100 relative overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1577308856961-8e9ec64a6d51?w=800&q=60')] bg-no-repeat bg-cover opacity-5"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-300 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/3 w-72 h-72 rounded-full bg-green-300 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4"
          >
            What Our Users Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover how Stolovka is transforming school cafeteria management
            for parents, administrators, and school owners.
          </motion.p>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <Testimonial {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2" />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
