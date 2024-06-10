import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <form action="https://fabform.io/f/{form-id}" method="post">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
