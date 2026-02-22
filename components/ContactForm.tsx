"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    // Simulate form submission - Replace with your actual API endpoint
    try {
      // For now, we'll create a mailto link as a fallback
      const mailtoLink = `mailto:jonathan.paita@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Open mailto link
      window.location.href = mailtoLink;

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='max-w-2xl mx-auto space-y-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Name Field */}
        <div>
          <label
            htmlFor='name'
            className='block text-gray-300 mb-2 text-sm font-medium'
          >
            Your Name *
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border ${
              errors.name ? "border-red-500" : "border-white/10"
            } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500`}
            placeholder='John Doe'
          />
          {errors.name && (
            <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
              <AlertCircle className='w-3 h-3' />
              {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor='email'
            className='block text-gray-300 mb-2 text-sm font-medium'
          >
            Your Email *
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border ${
              errors.email ? "border-red-500" : "border-white/10"
            } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500`}
            placeholder='john@example.com'
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
              <AlertCircle className='w-3 h-3' />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor='subject'
          className='block text-gray-300 mb-2 text-sm font-medium'
        >
          Subject *
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-white/5 border ${
            errors.subject ? "border-red-500" : "border-white/10"
          } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500`}
          placeholder='Project Inquiry'
        />
        {errors.subject && (
          <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
            <AlertCircle className='w-3 h-3' />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor='message'
          className='block text-gray-300 mb-2 text-sm font-medium'
        >
          Message *
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className={`w-full px-4 py-3 bg-white/5 border ${
            errors.message ? "border-red-500" : "border-white/10"
          } rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500 resize-none`}
          placeholder='Tell me about your project...'
        />
        {errors.message && (
          <p className='text-red-500 text-xs mt-1 flex items-center gap-1'>
            <AlertCircle className='w-3 h-3' />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type='submit'
        disabled={status === "loading"}
        className='w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed'
        whileHover={status !== "loading" ? { scale: 1.02 } : {}}
        whileTap={status !== "loading" ? { scale: 0.98 } : {}}
      >
        {status === "loading" && <Loader2 className='w-5 h-5 animate-spin' />}
        {status === "success" && <CheckCircle className='w-5 h-5' />}
        {status === "error" && <AlertCircle className='w-5 h-5' />}
        {status === "idle" && <Send className='w-5 h-5' />}

        {status === "loading" && "Sending..."}
        {status === "success" && "Message Sent!"}
        {status === "error" && "Failed to Send"}
        {status === "idle" && "Send Message"}
      </motion.button>

      {/* Status Messages */}
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-green-500 text-center text-sm flex items-center justify-center gap-2'
        >
          <CheckCircle className='w-4 h-4' />
          Your message has been sent successfully! I'll get back to you soon.
        </motion.p>
      )}

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-red-500 text-center text-sm flex items-center justify-center gap-2'
        >
          <AlertCircle className='w-4 h-4' />
          Something went wrong. Please try again or email me directly.
        </motion.p>
      )}
    </motion.form>
  );
}
