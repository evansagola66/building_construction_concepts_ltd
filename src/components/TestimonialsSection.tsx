import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "../lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  autoplaySpeed?: number;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "NYC Skyline Developments",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      content:
        "Building and Constitution Concepts delivered our office complex on time and under budget. Their attention to detail and quality craftsmanship exceeded our expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Developer",
      company: "Manhattan Urban Living",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      content:
        "We've worked with many construction firms over the years, but none have matched the professionalism and expertise of this team. They transformed our vision into reality.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Homeowner",
      company: "Queens Residential Client",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      content:
        "From the initial consultation to the final walkthrough, the entire process was smooth and transparent. Our dream home is everything we hoped for and more.",
      rating: 4,
    },
  ],
  autoplaySpeed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoplaySpeed);
    }

    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length, autoplaySpeed]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="bg-slate-100 py-12 md:py-20 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about our construction services and dedication to excellence.
          </p>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg p-6 md:p-10 overflow-hidden">
          <div className="absolute top-4 left-4 text-amber-500">
            <Quote size={48} className="opacity-20" />
          </div>

          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-8 z-10 relative"
              >
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-amber-500"
                  />
                  <div className="flex mt-2 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < testimonials[currentIndex].rating
                            ? "text-amber-500"
                            : "text-gray-300",
                        )}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <p className="text-slate-700 text-lg italic mb-6">
                    {testimonials[currentIndex].content}
                  </p>
                  <h4 className="font-bold text-slate-900 text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-slate-600">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].company && (
                      <>
                        ,{" "}
                        <span className="font-medium">
                          {testimonials[currentIndex].company}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-amber-500"
                      : "bg-slate-300 hover:bg-slate-400",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
