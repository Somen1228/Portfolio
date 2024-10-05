import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

const Contact = ({ userData, handleFormChange, handleSubmit, darkMode }) => {
  return (
    <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg p-6 shadow-lg`}
            >
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={userData.name}
                    onChange={(e) => handleFormChange(e)}
                    className={`w-full px-3 py-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(e) => handleFormChange(e)}
                    className={`w-full px-3 py-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={userData.message}
                    onChange={(e) => handleFormChange(e)}
                    className={`w-full px-3 py-2 rounded-md ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg p-6 shadow-lg flex flex-col justify-between`}
            >
              <h3 className="text-xl text-center font-semibold mb-6">
                Connect with Me
              </h3>

              <div className="grid grid-cols-3 gap-6 text-center items-center mb-6">
                <div>
                  <FaEnvelope
                    size={40}
                    className="mx-auto mb-2 text-blue-500"
                  />
                  <p className="font-semibold">Email</p>
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTTWPZqdczFrHdHVppqGGGkkFvtqgrHPWDRDfvtSRtJFczGZrSzWlJtZTlpMlbRTrmkL"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    somen1228@gmail.com
                  </a>
                </div>

                <div>
                  <FaLinkedin
                    size={40}
                    className="mx-auto mb-2 text-blue-500"
                  />
                  <p className="font-semibold">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/somen-rajak-3540411a2/"
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Visit Profile
                  </a>
                </div>

                <div>
                  <FaGithub size={40} className="mx-auto mb-2 text-blue-500" />
                  <p className="font-semibold">GitHub</p>
                  <a
                    href="https://github.com/Somen1228"
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Visit Profile
                  </a>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="./resume.pdf"
                className="mt-auto flex justify-center items-center bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition duration-300"
              >
                <FaDownload className="mr-2" /> Download Resume
              </motion.a>
            </motion.div>
          </div>
        </section>
  );
};

export default Contact;
