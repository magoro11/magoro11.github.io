"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch {
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "brightonmagoro@gmail.com", href: "mailto:brightonmagoro@gmail.com" },
    { icon: Phone, label: "Phone", value: "+254714218493", href: "tel:+254714218493" },
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya", href: undefined },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <info.icon size={20} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-white hover:text-cyan-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="flex gap-4 pt-4">
              {[
                { Icon: GitHubIcon, href: "https://github.com/brightonmagoro", label: "GitHub" },
                { Icon: LinkedInIcon, href: "https://linkedin.com/in/brightonmagoro", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:brightonmagoro@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 h-48 bg-white/5">
              <iframe
                title="Nairobi, Kenya location"
                src="https://maps.google.com/maps?q=Nairobi,Kenya&output=embed"
                className="w-full h-full border-0 grayscale opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-5"
          >
            {(["name", "email", "subject"] as const).map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm text-white/60 mb-1.5">
                  {t.contact[field]}
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50 transition-colors"
                />
                {errors[field] && (
                  <p className="text-red-400 text-xs mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm text-white/60 mb-1.5">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 outline-none focus:border-cyan-400/50 transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-400 text-sm"
              >
                <CheckCircle size={18} />
                {t.contact.success}
              </motion.div>
            )}

            <MagneticButton>
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                <Send size={18} />
                {submitting ? "Sending..." : t.contact.send}
              </Button>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
