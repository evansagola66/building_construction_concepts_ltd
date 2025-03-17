import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  completionDate: string;
  client: string;
  details?: string;
}

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const PortfolioSection = ({
  title = "Our Portfolio",
  subtitle = "Explore our diverse range of construction projects showcasing our expertise and quality workmanship.",
  projects = [
    {
      id: "1",
      title: "Modern Office Building",
      description:
        "A state-of-the-art commercial office building with sustainable features and modern design.",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      completionDate: "June 2023",
      client: "TechCorp Inc.",
      details:
        "This 12-story commercial building features floor-to-ceiling windows, a green roof, solar panels, and a modern open floor plan. The project was completed on schedule and within budget, earning LEED Platinum certification for its sustainable design and energy efficiency.",
    },
    {
      id: "2",
      title: "Luxury Residential Complex",
      description:
        "An upscale residential development featuring premium amenities and contemporary architecture.",
      category: "Residential",
      imageUrl:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      completionDate: "March 2023",
      client: "Elite Homes LLC",
      details:
        "This luxury residential complex includes 45 premium units with high-end finishes, a rooftop pool, fitness center, and landscaped gardens. The project incorporates smart home technology throughout and was designed with a focus on creating a sense of community among residents.",
    },
    {
      id: "3",
      title: "Highway Bridge Expansion",
      description:
        "A major infrastructure project expanding a critical highway bridge to improve traffic flow.",
      category: "Infrastructure",
      imageUrl:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
      completionDate: "November 2022",
      client: "State Transportation Department",
      details:
        "This infrastructure project involved expanding a four-lane bridge to six lanes, including pedestrian walkways and bike lanes. The project required careful planning to minimize traffic disruption and was completed two months ahead of schedule.",
    },
    {
      id: "4",
      title: "Shopping Mall Renovation",
      description:
        "Complete renovation and modernization of an existing shopping mall with expanded retail space.",
      category: "Commercial",
      imageUrl:
        "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
      completionDate: "January 2023",
      client: "Metro Retail Group",
      details:
        "This renovation project transformed an outdated shopping center into a modern retail destination. The scope included structural reinforcements, a new façade, expanded food court, and improved accessibility features throughout the 120,000 square foot facility.",
    },
    {
      id: "5",
      title: "Elementary School Building",
      description:
        "A new elementary school designed with modern educational needs and safety in mind.",
      category: "Institutional",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      completionDate: "August 2022",
      client: "Westside School District",
      details:
        "This 85,000 square foot elementary school features 32 classrooms, a library media center, gymnasium, cafeteria, and specialized learning spaces. The building incorporates natural lighting, energy-efficient systems, and was designed with security as a priority.",
    },
    {
      id: "6",
      title: "Industrial Manufacturing Facility",
      description:
        "A large-scale manufacturing facility built to precise specifications for a leading industrial company.",
      category: "Industrial",
      imageUrl:
        "https://images.unsplash.com/photo-1565636252854-41b5c59c3bb4?w=800&q=80",
      completionDate: "May 2023",
      client: "Advanced Manufacturing Inc.",
      details:
        "This 200,000 square foot manufacturing facility includes production areas, warehousing, office space, and specialized equipment foundations. The project required precise coordination with equipment vendors and was delivered with zero safety incidents.",
    },
  ],
}: PortfolioSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Extract unique categories from projects
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-100 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-6 py-2 capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden group h-64">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => openProjectModal(project)}
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Client: {project.client}</span>
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
            View All Projects
          </Button>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeProjectModal}
          project={selectedProject}
        />
      )}
    </section>
  );
};

export default PortfolioSection;
