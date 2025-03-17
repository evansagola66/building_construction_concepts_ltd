import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Separator } from "./ui/separator";

interface FooterProps {
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  legalLinks?: {
    name: string;
    href: string;
  }[];
}

const Footer = ({
  companyName = "Building and Constitution Concepts Ltd",
  address = "123 Construction Way, Building City, BC 12345",
  phone = "+1 (555) 123-4567",
  email = "info@buildingconcepts.com",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" },
  ],
}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 md:py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{companyName}</h3>
            <p className="mb-2 flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {address}
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              {phone}
            </p>
            <p className="mb-4 flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              {email}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#hero"
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#portfolio"
                  className="hover:text-amber-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#testimonials"
                  className="hover:text-amber-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-full text-gray-900 rounded-l focus:outline-none"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Social and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                className="hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                className="hover:text-amber-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                className="hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                className="hover:text-amber-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-amber-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          © {currentYear} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
