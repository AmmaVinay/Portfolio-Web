import React, { useState } from "react";
import axios from "axios";
function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', { name, email, description })
      setMessage(response.data.message)
      setName('');
      setEmail('');
      setDescription('');
      setMessage('')
    } catch {
      setMessage('An error occurred while submitting the form*')
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input value={name} onChange={(e) => setName(e.target.value)}
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
            <input value={email} onChange={(e) => setEmail(e.target.value)}
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
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}
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
        {message && <p className=" text-red-600">{message}</p>}
      </div>
    </div>
  );
}

export default Contact;
