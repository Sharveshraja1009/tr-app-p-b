import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "Hidden Spots", path: "/explore" },
      { name: "Bike Rentals", path: "/rentals" },
      { name: "Hotels", path: "/stays" },
      { name: "Itinerary", path: "/itinerary" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/contact" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "/contact" },
      { name: "Blog", path: "/explore" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", path: "/contact" },
      { name: "Privacy Policy", path: "/contact" },
      { name: "Terms of Service", path: "/contact" },
      { name: "Cancellation", path: "/contact" },
    ],
  },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Facebook, href: "https://facebook.com" },
  { icon: Mail, href: "mailto:hello@pondybelle.com" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-12 sm:pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pondy-900/5 to-ocean-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img
                src="/assets/web_logo.png"
                alt="Pondy Belle"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="text-xl font-bold font-display">
                <span className="text-pondy-400">Pondy</span> Belle
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">
              Your gateway to hidden Pondicherry. Discover secret beaches, rent
              bikes, find perfect stays, and craft unforgettable itineraries.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pondy-400" />
                <span>White Town, Pondicherry 605001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pondy-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pondy-400" />
                <span>hello@pondybelle.com</span>
              </div>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-pondy-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; 2026 Pondy Belle. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pondy-500/20 hover:border-pondy-500/30 transition-colors duration-300"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
