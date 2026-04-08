import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useGsapScroll } from "@/hooks/useGsapScroll";
import { useToast } from "@/components/ui/Toast";
import MapPlaceholder from "@/components/MapPlaceholder";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "12 Rue Dumas, White Town, Pondicherry 605001" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@pondybelle.com" },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9 AM – 7 PM" },
];

export default function ContactPage() {
  const sectionRef = useRef(null);
  const { addToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  useGsapScroll(sectionRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToast("Message sent! We'll get back to you soon.", "success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 sm:pt-24" ref={sectionRef}>
      <section className="py-12 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14" data-gsap="fadeUp">
            <Badge className="mb-3 sm:mb-4">Get in Touch</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 sm:mb-4">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto px-2">
              Have questions about your Pondicherry trip? We&apos;re here to help
              you plan the perfect getaway.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div data-gsap="fadeLeft">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ y: -2 }}
                    className="p-4 sm:p-5 rounded-2xl glass-light dark:glass border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pondy-500/10 flex items-center justify-center mb-3">
                      <info.icon className="w-5 h-5 text-pondy-600 dark:text-pondy-400" />
                    </div>
                    <p className="text-xs text-gray-400 mb-0.5">{info.label}</p>
                    <p className="text-sm font-medium">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div data-gsap="fadeRight">
              <form onSubmit={handleSubmit} className="p-5 sm:p-8 rounded-2xl glass-light dark:glass border border-white/10 space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-pondy-500 focus:ring-2 focus:ring-pondy-500/20 outline-none transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-pondy-500 focus:ring-2 focus:ring-pondy-500/20 outline-none transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-pondy-500 focus:ring-2 focus:ring-pondy-500/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your dream trip..."
                  />
                </div>
                <Button variant="glow" size="lg" type="submit" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <MapPlaceholder />
    </div>
  );
}
