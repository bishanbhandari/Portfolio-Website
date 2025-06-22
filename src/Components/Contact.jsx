import React from 'react';
import { FiMonitor } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          I'm open to internship opportunities, collaborations, or freelance work. Drop a message below and let’s talk!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className='p-2 rounded-full bg-violet-500/20'>
                  <IoIosMail />
                </div>
                <div className="pt-1">
                  <a
                    href="mailto:bishanbhandari627@gmail.com"
                    className='hover:text-primary transition-colors'
                  >
                    bishanbhandari627@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className='p-2 rounded-full bg-violet-500/20'>
                  <FaPhoneAlt />
                </div>
                <div className="pt-1">
                  <a className='hover:text-primary transition-colors cursor-pointer'>
                    +977 9806656688
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className='p-2 rounded-full bg-violet-500/20'>
                  <FaLocationDot />
                </div>
                <div className="pt-1">
                  <a className='hover:text-primary transition-colors cursor-pointer'>
                    Kathmandu, Nepal
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium text-lg mb-2 text-left">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/bishan-bhandari-b53682340/"
                  target='_blank'
                  className='p-2 rounded-full bg-violet-500/20'
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/bishanbhandari"
                  target="_blank"
                  className='p-2 rounded-full bg-violet-500/20'
                >
                  <VscGithub />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className='p-2 rounded-full bg-violet-500/20'
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

                <div className="rounded-lg shadow-x5  bg-violet-1000/50">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">
                            <div className='flex flex-col items-start mb-4'>
                                <label htmlFor="name" className="text-left ">Your Name</label>
                                <input type="text" id="name" name="name" required
                                className="w-full px-4 rounded-md  bg-white/15 "
                                placeholder="Bishan Bhandari"
                                />
                            </div>
                            <div className='flex flex-col items-start mb-4'>
                                <label htmlFor="email" className="text-left ">Your Email</label>
                                <input type="email" id="email" name="email" required
                                className="w-full px-4 rounded-md bg-white/15  "
                                placeholder="bishanbhandari627@gmail.com"
                                />
                            </div>

                            <div className='flex flex-col items-start mb-4'>
                                <label htmlFor="message" className="text-left ">Your Message</label>
                                <textarea type="message" id="message" name="message" required
                                className="w-full px-4 rounded-md bg-white/15 "
                                placeholder="Hello, I'd like to talk about ........." rows="5" 
                                />
                            </div>
                    </form>
                </div>

        </div>
      </div>
    </section>
  )
}

export default Contact;
