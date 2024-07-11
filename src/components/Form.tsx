// components/Form.tsx

import { motion } from 'framer-motion';
import { form } from '../constants/animations';
import { FormField } from '../constants';

interface FormProps {
  fields: FormField[];
}

const Form: React.FC<FormProps> = ({ fields }) => {
  return (
    <>
      {fields.map((field, index) => (
        <motion.div key={index} {...form(index)}>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 text-white">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300 "
                rows={field.rows || 3}
                name={field.name}
                placeholder={`Enter ${field.label.toLowerCase()}`}
              ></textarea>
            ) : (
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300 "
                type={field.type === 'email' ? 'email' : 'text'}
                name={field.name}
                placeholder={`Enter ${field.label}`}
              />
            )}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Form;
