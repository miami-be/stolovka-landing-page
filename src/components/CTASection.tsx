import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CTASectionProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  role: "parent" | "administrator" | "owner";
}

const CTASection = ({ onSubmit = () => {} }: CTASectionProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "parent",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: "parent" | "administrator" | "owner") => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setIsSubmitted(true);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-100 via-cyan-50 to-green-100 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-300/40 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/3 w-96 h-96 rounded-full bg-green-300/40 blur-3xl"></div>
        <div className="absolute right-1/3 top-1/4 w-64 h-64 rounded-full bg-yellow-300/30 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
            Ready to Transform Your School Cafeteria?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of schools already using Stolovka to streamline
            cafeteria management, improve parent satisfaction, and gain valuable
            insights.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1577308856961-8e9ec64a6d51?w=800&q=80"
                alt="Happy students in cafeteria"
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">30% Faster</p>
                <p>Order Processing</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            {!isSubmitted ? (
              <Card className="w-full shadow-xl border-2 border-primary/10 rounded-xl backdrop-blur-sm bg-white/95 hover:border-primary/20 transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-center mb-6">
                    Get Started Today
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>I am a:</Label>
                      <RadioGroup
                        value={formData.role}
                        onValueChange={(value) =>
                          handleRoleChange(
                            value as "parent" | "administrator" | "owner",
                          )
                        }
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="parent" id="parent" />
                          <Label htmlFor="parent">Parent</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="administrator"
                            id="administrator"
                          />
                          <Label htmlFor="administrator">
                            School Administrator
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="owner" id="owner" />
                          <Label htmlFor="owner">School Owner</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-6 text-lg mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="w-full shadow-lg border-2 border-green-200 bg-green-50">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-lg mb-6">
                    We've received your information and will be in touch
                    shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mx-auto"
                  >
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
