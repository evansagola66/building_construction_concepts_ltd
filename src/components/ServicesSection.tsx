import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Button } from "./ui/button";

interface Service {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const ServicesSection = ({
  title = "Our Construction Services",
  subtitle = "We provide a wide range of construction services to meet your needs",
  services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Custom homes and residential renovations",
      fullDescription:
        "Our residential construction services include custom home building, renovations, additions, and remodeling. We work closely with homeowners to bring their vision to life with quality craftsmanship and attention to detail.",
      image:
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=600&q=80",
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and more",
      fullDescription:
        "From office buildings to retail spaces, our commercial construction team handles projects of all sizes. We focus on efficiency, durability, and creating functional spaces that meet your business needs while adhering to all building codes and regulations.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    },
    {
      id: 3,
      title: "Infrastructure Development",
      description: "Roads, bridges, and public facilities",
      fullDescription:
        "Our infrastructure development services include the construction of roads, bridges, water systems, and public facilities. We have the expertise and equipment to handle large-scale projects that serve communities and improve public infrastructure.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    },
    {
      id: 4,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expertise",
      fullDescription:
        "Our renovation and remodeling services breathe new life into existing structures. Whether you're looking to update a kitchen, add a bathroom, or completely transform your space, our team delivers quality results that exceed expectations.",
      image:
        "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&q=80",
    },
    {
      id: 5,
      title: "Project Management",
      description: "End-to-end oversight of construction projects",
      fullDescription:
        "Our project management services provide comprehensive oversight from planning to completion. We coordinate all aspects of your construction project, ensuring it stays on schedule, within budget, and meets all quality standards.",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    },
    {
      id: 6,
      title: "Industrial Manufacturing Facility",
      description: "Large-scale industrial construction",
      fullDescription:
        "Our industrial manufacturing facility construction services deliver large-scale, precision-engineered buildings designed for optimal workflow and productivity. We specialize in creating facilities that meet specific industrial requirements while ensuring safety, efficiency, and durability.",
      image:
        "https://images.unsplash.com/photo-1565636252854-41b5c59c3bb4?w=600&q=80",
    },
  ],
}: ServicesSectionProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleServiceClick = (id: number) => {
    console.log(`Service ${id} clicked`);
    // Here you would typically navigate to a detailed service page
    // or open a modal with more information
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                fullDescription={service.fullDescription}
                image={service.image}
                onClick={() => handleServiceClick(service.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
