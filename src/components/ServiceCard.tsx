import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  onClick?: () => void;
}

const ServiceCard = ({
  title = "Construction Service",
  description = "High-quality construction services for residential and commercial projects.",
  fullDescription = "Our team of experienced professionals delivers exceptional construction services tailored to your specific needs. We handle everything from initial planning to final execution with precision and care.",
  image = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  onClick = () => {},
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Card className="h-full overflow-hidden cursor-pointer bg-white">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-600">{fullDescription}</p>
          </motion.div>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <span className="mr-2">Learn more</span>
            <ArrowRight size={16} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
