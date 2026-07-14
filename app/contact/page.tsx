"use client";
import ContactHero from "./components/ContactHero";
import { useState, type SyntheticEvent, type ChangeEvent } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

    return (
      <main className="flex-grow pt-[64px]">
            
        <ContactHero />
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 md:mt-20 mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 bg-surface-card border border-border-dark rounded-lg p-8 relative overflow-hidden group hover:border-electric-blue transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-3 mb-8 border-b border-border-dark pb-4">
                <span className="material-symbols-outlined text-electric-blue">chat</span>
                <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                Get In Touch
                </h2>
            </div>

            <p className="font-body-md text-metadata-grey mb-6">
                Questions about membership, classes, or a free trial? Send us a
                message and a member of our team will get back to you within
                one business day.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-label-bold text-label-bold text-metadata-grey mb-2 uppercase" htmlFor="name">
                    Full Name
                    </label>
                    <input
                    className="w-full input-dark rounded border p-3 font-body-md focus:ring-2 focus:ring-electric-blue focus:outline-none"
                    id="name" name="name" placeholder="Jane Smith" type="text" required
                    value={form.name} onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block font-label-bold text-label-bold text-metadata-grey mb-2 uppercase" htmlFor="email">
                    Email Address
                    </label>
                    <input
                    className="w-full input-dark rounded border p-3 font-body-md focus:ring-2 focus:ring-electric-blue focus:outline-none"
                    id="email" name="email" placeholder="jane@example.com" type="email" required
                    value={form.email} onChange={handleChange}
                    />
                </div>
                </div>

                <div>
                <label className="block font-label-bold text-label-bold text-metadata-grey mb-2 uppercase" htmlFor="subject">
                    Subject
                </label>
                <input
                    className="w-full input-dark rounded border p-3 font-body-md focus:ring-2 focus:ring-electric-blue focus:outline-none"
                    id="subject" name="subject" placeholder="Membership question, class schedule, etc." type="text"
                    value={form.subject} onChange={handleChange}
                />
                </div>

                <div>
                <label className="block font-label-bold text-label-bold text-metadata-grey mb-2 uppercase" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="w-full input-dark rounded border p-3 font-body-md focus:ring-2 focus:ring-electric-blue focus:outline-none resize-none"
                    id="message" name="message" placeholder="Tell us how we can help..." rows={5} required
                    value={form.message} onChange={handleChange}
                />
                </div>

                <button
                className="w-full md:w-auto font-label-bold text-label-bold uppercase tracking-widest bg-electric-blue text-obsidian-black rounded px-8 py-4 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit" disabled={status === "submitting"}
                >
                <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
                </button>

                {status === "success" && (
                <p className="font-body-md text-electric-blue" role="status">
                    Thanks — your message has been sent. We&apos;ll be in touch soon.
                </p>
                )}
                {status === "error" && (
                <p className="font-body-md text-red-400" role="alert">
                    Something went wrong. Please try again, or call us directly.
                </p>
                )}
            </form>
            </div>

            {/* Right Column: Facility Data & Map */}
            <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-card border border-border-dark rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-metadata-grey">storefront</span>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">Visit Us</h3>
                </div>
                <ul className="space-y-6">
                <li className="flex items-start gap-4 border-b border-border-dark pb-4">
                    <span className="material-symbols-outlined text-electric-blue mt-1">location_on</span>
                    <div>
                    <span className="block font-label-bold text-label-bold text-metadata-grey uppercase mb-1">Address</span>
                    <span className="font-body-md text-on-surface">123 Industrial Way, Metal City</span>
                    </div>
                </li>
                <li className="flex items-start gap-4 border-b border-border-dark pb-4">
                    <span className="material-symbols-outlined text-electric-blue mt-1">call</span>
                    <div>
                    <span className="block font-label-bold text-label-bold text-metadata-grey uppercase mb-1">Phone</span>
                    <span className="font-body-md text-on-surface">(555) 019-8372</span>
                    </div>
                </li>
                <li className="flex items-start gap-4 border-b border-border-dark pb-4">
                    <span className="material-symbols-outlined text-electric-blue mt-1">mail</span>
                    <div>
                    <span className="block font-label-bold text-label-bold text-metadata-grey uppercase mb-1">Email</span>
                    <span className="font-body-md text-on-surface">join@ironforge.gym</span>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-electric-blue mt-1">schedule</span>
                    <div>
                    <span className="block font-label-bold text-label-bold text-metadata-grey uppercase mb-1">Hours</span>
                    <span className="font-body-md text-on-surface">24/7 Access (Staffed: 6 AM – 9 PM Daily)</span>
                    </div>
                </li>
                </ul>
            </div>

            {/* Map Placeholder */}
                <div className="bg-surface-card border border-border-dark rounded-lg p-2 h-[250px] relative overflow-hidden flex-grow flex flex-col group">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-obsidian-black/80 backdrop-blur px-3 py-1.5 rounded border border-border-dark">
                    <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
                    <span className="font-label-bold text-[12px] uppercase tracking-wider text-electric-blue">
                    Location
                    </span>
                </div>

                <div
                    className="w-full h-full bg-[#0a0c0c] rounded relative flex items-center justify-center"
                    style={{
                    backgroundImage: "radial-gradient(#262626 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                    }}
                >
                    <div className="text-center px-6">
                    <span className="material-symbols-outlined text-electric-blue text-[40px] mb-2 block">
                        location_on
                    </span>
                    <p className="font-label-bold text-label-bold text-on-surface uppercase tracking-wide">
                        123 Industrial Way
                    </p>
                    <p className="font-body-md text-metadata-grey text-sm mt-1">
                        Metal City
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
            </section>
    </main>
  );
}