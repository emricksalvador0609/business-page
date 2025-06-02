import React from 'react';

const contact = () => (
    <section className="min-h-50 flex flex-col justify-center items-center bg-white px-6 py-16">
    <div className="max-w-2xl w-full">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="5"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full font-semibold transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
  
);

export default contact;
