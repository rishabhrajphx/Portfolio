import React from 'react'; // seperate from the contact page for now

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-4 text-lg">We would love to hear from you!</p>
      <form className="mt-8 w-1/2">
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts; 