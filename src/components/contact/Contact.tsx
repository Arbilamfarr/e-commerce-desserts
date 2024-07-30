'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';


const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight) {
          element.classList.add('fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-6 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 animate">Contact Us</h1>
          <p className="text-lg mb-6 animate">We&apos;d love to hear from you! Reach out to us with any questions or comments.</p>
        </section>

        <section className="mb-12">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
                <p>Your message has been sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg animate hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate">Get in Touch</h2>
          <p className="text-lg mb-6 animate">You can also reach us through our social media channels or by phone.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-blue-500 animate hover:text-blue-700 transition duration-300 ease-in-out">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-0.735 0-1.325 0.59-1.325 1.325v21.351c0 0.735 0.59 1.325 1.325 1.325h11.495v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.789 4.659-4.789 1.325 0 2.463 0.099 2.794 0.144v3.236l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.76v2.319h3.588l-0.467 3.622h-3.121v9.294h6.115c0.735 0 1.325-0.59 1.325-1.325v-21.351c0-0.735-0.59-1.325-1.325-1.325z"/>
              </svg>
            </Link>
            <Link href="#" className="text-blue-400 animate hover:text-blue-600 transition duration-300 ease-in-out">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-0.885 0.393-1.833 0.656-2.828 0.775 1.017-0.609 1.798-1.574 2.165-2.723-0.951 0.564-2.005 0.974-3.127 1.195-0.897-0.955-2.178-1.555-3.594-1.555-2.717 0-4.918 2.201-4.918 4.917 0 0.385 0.043 0.76 0.127 1.122-4.083-0.205-7.702-2.159-10.126-5.128-0.423 0.726-0.666 1.571-0.666 2.471 0 1.705 0.867 3.209 2.183 4.092-0.806-0.025-1.564-0.247-2.228-0.616-0.001 0.021-0.001 0.043-0.001 0.065 0 2.382 1.693 4.373 3.946 4.824-0.412 0.112-0.846 0.172-1.293 0.172-0.316 0-0.624-0.031-0.924-0.088 0.625 1.953 2.444 3.374 4.6 3.412-1.683 1.319-3.808 2.105-6.114 2.105-0.398 0-0.79-0.023-1.175-0.068 2.179 1.396 4.768 2.209 7.548 2.209 9.051 0 13.999-7.498 13.999-13.999 0-0.213-0.005-0.426-0.015-0.637 0.961-0.693 1.793-1.561 2.448-2.549z"/>
              </svg>
            </Link>
            <Link href="#" className="text-purple-500 animate hover:text-purple-700 transition duration-300 ease-in-out">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.523 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.478 10-10 0-5.523-4.478-10-10-10zm0 1.789c2.676 0 2.99 0.012 4.054 0.058 0.891 0.038 1.372 0.19 1.69 0.312 0.429 0.166 0.737 0.365 1.062 0.689 0.324 0.324 0.524 0.632 0.689 1.062 0.122 0.318 0.274 0.799 0.312 1.69 0.046 1.063 0.058 1.378 0.058 4.054s-0.012 2.99-0.058 4.054c-0.038 0.891-0.19 1.372-0.312 1.69-0.166 0.429-0.365 0.737-0.689 1.062-0.324 0.324-0.632 0.524-1.062 0.689-0.318 0.122-0.799 0.274-1.69 0.312-1.063 0.046-1.378 0.058-4.054 0.058s-2.99-0.012-4.054-0.058c-0.891-0.038-1.372-0.19-1.69-0.312-0.429-0.166-0.737-0.365-1.062-0.689-0.324-0.324-0.524-0.632-0.689-1.062-0.122-0.318-0.274-0.799-0.312-1.69-0.046-1.063-0.058-1.378-0.058-4.054s0.012-2.99 0.058-4.054c0.038-0.891 0.19-1.372 0.312-1.69 0.166-0.429 0.365-0.737 0.689-1.062 0.324-0.324 0.632-0.524 1.062-0.689 0.318-0.122 0.799-0.274 1.69-0.312 1.063-0.046 1.378-0.058 4.054-0.058z"/>
              </svg>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
