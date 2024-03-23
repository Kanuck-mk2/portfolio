import Resume from '../assets/Resume-2024.pdf';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div
      id="contact"
      className=" bg-black border-l-2 border-r-2 border-t-2 rounded-t-md  w-full m-auto md:pl-20 p-4 py-16  relative z-10"
    >
      <motion.h1
        className="py-4 text-4xl font-nunito font-bold text-center ml-20 -mt-3 text-white"
        initial={{ opacity: 0, x: 500, y: 0 }}
        whileInView={{
          opacity: 1,
          x: -69,
          y: 0,
          transition: { type: 'spring' },
        }}
      >
        Con
      </motion.h1>
      <motion.h1
        className="py-4 text-4xl font-nunito font-bold text-center ml-20 -mt-3 text-white"
        initial={{ opacity: 0, x: -500, y: -60 }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: -60,
          transition: { type: 'spring' },
        }}
      >
        tact
      </motion.h1>
      <form
        action="https://getform.io/f/pagkkmpa"
        method="POST"
        encType="multiport/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <motion.div
            initial={{ opacity: 0, x: -500, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { type: 'spring' },
            }}
            whileTap={{ scale: 0.5 }}
          >
            <div className="flex flex-col">
              <label className="uppercase  text-sm py-2 text-white">Name</label>

              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                placeholder="Enter Name"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500, y: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              y: 0,
              transition: { type: 'spring' },
            }}
            whileTap={{ scale: 0.5 }}
          >
            <div className="flex flex-col">
              <label className="uppercase  text-sm  text-white py-2">
                Phone
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
                placeholder="Enter Number"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring' },
          }}
          whileTap={{ scale: 0.5 }}
        >
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 text-white">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring' },
          }}
          whileTap={{ scale: 0.5 }}
        >
          <div className="flex flex-col py-2">
            <label className="uppercase  text-sm py-2 text-white">
              Subject
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
              placeholder="Enter Subject"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring' },
          }}
          whileTap={{ scale: 0.5 }}
        >
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 text-white">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows={10}
              name="message"
              placeholder="Send me a message!"
            ></textarea>
          </div>
        </motion.div>

        <motion.button
          type="submit"
          initial={{ opacity: 0, x: 500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring' },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.1,
            borderRadius: '100%',
            transition: { duration: 0.2 },
          }}
          className="gradient-bg text-white mt-4 w-full p-4 rounded-lg glow-border"
        >
          Send Message
        </motion.button>

        <motion.button
          type="button"
          initial={{ opacity: 0, x: -500, y: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: 'spring' },
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.1,
            borderRadius: '100%',
            transition: { duration: 0.2 },
          }}
          className="bg-gradient-to-br from-blue-400 to-slate-500 text-white mt-4 w-full p-4 rounded-lg glow-border"
          onClick={() => {
            const link = document.createElement('a');
            link.href = Resume;
            link.download = 'resume2024.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </motion.button>
      </form>
    </div>
  );
}
