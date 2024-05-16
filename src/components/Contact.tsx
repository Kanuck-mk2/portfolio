import Resume from '../assets/Resume-2024.pdf';
import { motion } from 'framer-motion';
import { contact1, contact2, resume, submit } from '../constants/animations';
import { formFields } from '../constants';
import Form from '../components/Form';

export default function Contact() {
  return (
    <div
      id="contact"
      className="gradient-bg border-t-2   rounded-t-md w-full m-auto md:pl-20 p-4 py-16 relative z-10"
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
          className="gradient-bg2 text-white mt-4 w-full p-4 rounded-lg glow-border"
          type="submit"
          {...submit}
        >
          Send Message
        </motion.button>
        <motion.button
          className="gradient-bg2  text-white mt-4 w-full p-4 rounded-lg glow-border"
          type="button"
          {...resume}
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
