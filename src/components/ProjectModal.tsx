import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    completionDate: string;
    client: string;
    details?: string;
  };
}

const ProjectModal = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Modern Office Building",
    description:
      "A state-of-the-art commercial office building with sustainable features and modern design.",
    category: "Commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    completionDate: "June 2023",
    client: "TechCorp Inc.",
    details:
      "This 12-story commercial building features floor-to-ceiling windows, a green roof, solar panels, and a modern open floor plan. The project was completed on schedule and within budget, earning LEED Platinum certification for its sustainable design and energy efficiency.",
  },
}: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {project.title}
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="text-gray-500">
            {project.category} | Client: {project.client} | Completed:{" "}
            {project.completionDate}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Project Overview
              </h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Project Details
              </h3>
              <p className="text-gray-700 mt-2">{project.details}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Request Similar Project
              </Button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
