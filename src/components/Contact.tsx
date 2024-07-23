import { motion } from 'framer-motion';
import { contact1, contact2, submit } from '../constants/animations';
import { formFields } from '../constants';
import Form from '../components/Form';

export default function Contact() {
  return (
    <div
      id="contact"
      className="gradient-bg2 border-t-2   rounded-t-md w-full m-auto md:pl-20 p-4 py-16 relative z-10"
    >
      <motion.h1
        className="py-4 text-4xl font-nunito font-bold text-center ml-20 -mt-3 text-white"
        {...contact1}
      >
        Con
      </motion.h1>
      <motion.h1
        className="py-4 text-4xl font-nunito font-bold text-center ml-20 -mt-3 text-white"
        {...contact2}
      >
        tact
      </motion.h1>
      <form
        action="https://getform.io/f/pagkkmpa"
        method="POST"
        encType="multiport/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <Form fields={formFields.slice(0, 2)} />
        </div>
        <Form fields={formFields.slice(2)} />
        <motion.button
          className=" bg-slate-200/20 backdrop-filter backdrop-blur-lg text-white mt-4 w-full p-4 rounded-lg glow-border"
          type="submit"
          {...submit}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}
