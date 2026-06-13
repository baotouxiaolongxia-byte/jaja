"use client";

import { useState } from "react";
import Button from "./Button";

const inquiryTypes = [
  "Artwork Inquiry",
  "Gallery Collaboration",
  "Interior Project",
  "Commission Request",
  "Press / Media",
  "Other",
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgkokoy";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-cream-200 p-8 lg:p-12 text-center">
        <h3 className="text-2xl font-serif text-charcoal-900 mb-4">
          Thank You
        </h3>
        <p className="text-charcoal-700 mb-6">
          Your inquiry has been received. We will respond within 2-3 business days.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              country: "",
              inquiryType: "",
              message: "",
            });
          }}
          variant="secondary"
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-100 border border-cream-300 text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors duration-200"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-100 border border-cream-300 text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors duration-200"
        />
      </div>

      <div>
        <label
          htmlFor="country"
          className="block text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-2"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-100 border border-cream-300 text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors duration-200"
        />
      </div>

      <div>
        <label
          htmlFor="inquiryType"
          className="block text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-2"
        >
          Inquiry Type *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-100 border border-cream-300 text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="">Select an option</option>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-sans tracking-wider text-charcoal-900 uppercase mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-cream-100 border border-cream-300 text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors duration-200 resize-none"
        />
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
        >
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}