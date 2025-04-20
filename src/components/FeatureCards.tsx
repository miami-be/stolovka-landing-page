import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard, BarChart3, Clock } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full"
    >
      <Card className="h-full bg-white border-2 border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden hover:border-primary/30">
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mb-4 shadow-inner">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface FeatureCardsProps {
  className?: string;
}

const FeatureCards = ({ className = "" }: FeatureCardsProps) => {
  const features = [
    {
      title: "For Parents",
      description:
        "Track your children's spending in real-time and set budgets. Receive notifications about purchases and balance updates.",
      icon: <CreditCard className="w-6 h-6 text-primary" />,
    },
    {
      title: "For Administrators",
      description:
        "Process orders 30% faster than with Google Sheets. Streamline cafeteria operations with our intuitive management system.",
      icon: <Clock className="w-6 h-6 text-primary" />,
    },
    {
      title: "For School Owners",
      description:
        "Access detailed analytics on sales, popular items, and peak times. Make data-driven decisions to optimize your cafeteria.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section
      className={`py-16 px-4 bg-gradient-to-b from-blue-50 to-white ${className}`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Tailored Solutions for Everyone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stolovka provides specialized features for all stakeholders in the
            school cafeteria ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
