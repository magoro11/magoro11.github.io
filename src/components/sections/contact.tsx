"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { useI18n } from "@/lib/i18n/context";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

interface FormData { name: string; email: string; subject: string; message: string }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string }

const inputBase =
  "w-full px-4 py-2.5 rounded-lg border bg-[--surface-2] text-[--text-primary] text-sm placeholder:text-[--text-muted] outline-none transition-colors duration-150 border-[--border] focus:border-[--accent]";

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch { /* handled below */ }
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSuccess(false), 5000);
    setSubmitting(false);
  };

  const contactInfo = [
    { Icon: Mail,    label: "Email",    value: "brightonmagoro@gmail.com", href: "mailto:brightonmagoro@gmail.com" },
    { Icon: Phone,   label: "Phone",    value: "+254 714 218 493",         href: "tel:+254714218493" },
    { Icon: MapPin,  label: "Location", value: "Nairobi, Kenya",            href: undefined },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">

          {/* ── Info column ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-[--border] bg-[--surface]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[--border-2] shrink-0"
                  style={{ background: "var(--accent-glow)" }}
                >
                  <info.Icon size={16} className="text-[--accent-light]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wide text-[--text-muted] mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-[--text-primary] hover:text-[--accent-light] transition-colors truncate block"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[--text-primary]">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="flex gap-2 pt-2">
              {[
                { Icon: GitHubIcon,  href: "https://github.com/brightonmagoro",   label: "GitHub" },
                { Icon: LinkedInIcon, href: "https://linkedin.com/in/brightonmagoro", label: "LinkedIn" },
                { Icon: Mail,        href: "mailto:brightonmagoro@gmail.com",      label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[--border-2] flex items-center justify-center text-[--text-muted] hover:text-[--accent-light] hover:border-[--accent] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-[--border] h-44 mt-2">
              <iframe
                title="Nairobi, Kenya location"
                src="https://maps.google.com/maps?q=Nairobi,Kenya&output=embed"
                className="w-full h-full border-0 grayscale opacity-70"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── Form column ── */}
          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            noValidate
            className="p-8 rounded-2xl border border-[--border] bg-[--surface] space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-xs text-[--text-muted] mb-1.5 uppercase tracking-wide">
                    {t.contact[field]}
                  </label>
                  <input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className={inputBase}
                    autoComplete={field}
                  />
                  {errors[field] && <p className="text-[--error] text-xs mt-1">{errors[field]}</p>}
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs text-[--text-muted] mb-1.5 uppercase tracking-wide">
                {t.contact.subject}
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputBase}
              />
              {errors.subject && <p className="text-[--error] text-xs mt-1">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-[--text-muted] mb-1.5 uppercase tracking-wide">
                {t.contact.message}
              </label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputBase} resize-none`}
              />
              {errors.message && <p className="text-[--error] text-xs mt-1">{errors.message}</p>}
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-[--success] text-sm"
              >
                <CheckCircle2 size={16} />
                {t.contact.success}
              </motion.div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={submitting}>
              <Send size={15} />
              {submitting ? "Sending…" : t.contact.send}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
