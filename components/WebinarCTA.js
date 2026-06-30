"use client";

import { useState } from "react";

const goals = ["Prep for interviews", "Build AI agents", "Switch to AI", "Upskill at work"];
const levels = ["0–2 years", "3–5 years", "6–10 years", "10+ years"];

export default function WebinarCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", goal: goals[0], level: levels[0],
  });
  const [errors, setErrors] = useState({});

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Enter a valid email";
    if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) err.phone = "Enter a valid phone number";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <section id="webinar" className="section bg-white">
      <div className="container-px">
        <div className="mesh overflow-hidden rounded-3xl px-6 py-12 text-white sm:px-12 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* copy */}
            <div className="reveal">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
                Free Masterclass
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
                Decode the 2026 Playbook. Feel the FAANG+ Impact.
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Join our next live webinar to learn the exact framework our alumni use to
                land top offers — and how AI is reshaping technical hiring.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Live Q&A with FAANG+ engineers",
                  "Real interview problems, decoded",
                  "Personalized roadmap for your goal",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-accent/20 text-accent">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* form */}
            <div className="reveal rounded-2xl bg-white p-7 text-ink-900 shadow-card">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-3xl">🎉</span>
                  <h3 className="mt-5 text-xl font-extrabold">You&apos;re registered!</h3>
                  <p className="mt-2 text-sm text-ink-700/70">
                    Check your inbox — we&apos;ve sent the webinar details to{" "}
                    <span className="font-semibold text-ink-900">{form.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-4">
                  <h3 className="text-lg font-extrabold">Reserve your free seat</h3>

                  <Field label="Full name" error={errors.name}>
                    <input
                      type="text" value={form.name} onChange={update("name")}
                      placeholder="Jane Doe" className="field"
                    />
                  </Field>

                  <Field label="Email" error={errors.email}>
                    <input
                      type="email" value={form.email} onChange={update("email")}
                      placeholder="jane@email.com" className="field"
                    />
                  </Field>

                  <Field label="Phone number" error={errors.phone}>
                    <input
                      type="tel" value={form.phone} onChange={update("phone")}
                      placeholder="+1 555 000 1234" className="field"
                    />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Career goal">
                      <select value={form.goal} onChange={update("goal")} className="field">
                        {goals.map((g) => <option key={g}>{g}</option>)}
                      </select>
                    </Field>
                    <Field label="Experience">
                      <select value={form.level} onChange={update("level")} className="field">
                        {levels.map((l) => <option key={l}>{l}</option>)}
                      </select>
                    </Field>
                  </div>

                  <button type="submit" className="btn-primary w-full text-base">
                    Register for free
                  </button>
                  <p className="text-center text-xs text-ink-700/50">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-ink-700">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-red-500">{error}</span>}
    </label>
  );
}
