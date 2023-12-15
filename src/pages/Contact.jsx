import { TextField } from "@mui/material";
import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TypeWriter from "../Component/TypeWriter";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className=" pt-[65px]">
      <div className="container mx-auto  ">
        <div className="text-4xl text-center font-bold px-3 underline">
          Feel Free to Contact Us
        </div>
        <div className="mt-2">
          <iframe
            data-aos="zoom-in-up"
            className="w-[100%] h-[300px] border-2 border-yellow-900 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30121.573740274463!2d84.77517626010696!3d19.31726829398052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d5072e68988b7%3A0x909c59c1e098e7a9!2sTulsi%20Nagar%2C%20Brahmapur%2C%20Odisha%20760001!5e0!3m2!1sen!2sin!4v1702283069839!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
        <div className=" hidden lg:flex w-full bgimg h-[10rem] flex-col  lg:h-[640px] bg-cover relative justify-center items-center">
          <div
            className="w-[30%] h-[30%] effect flex justify-center items-center rounded-md flex-col"
            data-aos="flip-left"
          >
            <h1 className="text-orange-300 text-2xl font-bold ">
              Get In Touch With Us
            </h1>
            <h3 className="text-[#33323d] font-semibold">
              Eamail:- nigambisoyi2004@gmail.com
            </h3>
            <h3 className="text-[#33323d] font-semibold">
              Contact_No:- +91 85112283107{" "}
            </h3>
          </div>
          <div className="absolute bottom-36">
            <button
              onClick={onOpenModal}
              className="flex justify-center items-center bg-[#5b4218] px-3 py-2 rounded-md text-orange-300"
            >
              Contact Us <AiOutlineArrowRight />
            </button>
            <div>
              <Modal open={open} onClose={onCloseModal} center>
                <form
                  action="https://formspree.io/f/xrgwnnkd"
                  method="POST"
                  className="flex flex-col"
                  name="contact"
                  data-netlify="true"
                >
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="username"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <label htmlFor="sub">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="message"
                    placeholder="Write Your Subject"
                  />
                  <label htmlFor="name">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your Message"
                    rows="6"
                  ></textarea>
                  <button className="flex justify-center items-center bg-[#372911] px-3 py-2 rounded-md text-orange-300">
                    Submit
                  </button>
                </form>
              </Modal>
            </div>
          </div>
          <div
            className=" absolute bottom-9 text-4xl text-orange-300"
            data-aos="zoom-in"
          >
            <TypeWriter data={"Thanks! For Visiting💕😉"}></TypeWriter>
          </div>
        </div>
        <div
          className="px-2 py-2 rounded-lg mt-2 bg-[#5b4218]  lg:hidden"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="text-[#372911] text-2xl font-bold text-center underline">
            Get In Touch With Us
          </h1>
          <form
            action="https://formspree.io/f/xrgwnnkd"
            method="POST"
            className="flex flex-col"
          >
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Enter Your Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <label htmlFor="sub">Subject</label>
            <input
              type="text"
              name="subject"
              id="message"
              placeholder="Write Your Subject"
            />
            <label htmlFor="name">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your Message"
              rows="6"
            ></textarea>
            <button className="flex justify-center items-center bg-[#372911] px-3 py-2 rounded-md text-orange-300">
              Submit
            </button>
          </form>
        </div>
        <div className="lg:hidden flex items-center justify-center text-4xl text-stone-700">
          <TypeWriter data={"Thanks! For Visiting💕😉"}></TypeWriter>
        </div>
      </div>
    </div>
  );
}

export default Contact;
