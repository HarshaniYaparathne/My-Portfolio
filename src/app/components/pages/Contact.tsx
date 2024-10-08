"use client";
import React from "react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 via-white to-blue-100 py-16 flex flex-col items-center">
      <h1 className="text-blue-900 text-5xl sm:text-6xl mb-10 font-extrabold">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-blue-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-blue-300 rounded-lg w-full py-2 px-3"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-blue-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-blue-300 rounded-lg w-full py-2 px-3"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-blue-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="border border-blue-300 rounded-lg w-full py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
