import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const usesData = [
  {
    section: "Hardware",
    items: [
     
      {
        name: "Laptop - Dell Inspiron 3542",
        link: "https://www.dell.com/en-in/shop/laptops-2-in-1-pcs/sr/laptops/inspiron-laptops",
      }
    ],
  },
  {
    section: "Editor",
    items: [
      {
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/download",
      }
    ],
  }
];

const UsesList = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "linear", duration: 0.5 }}
      className="container relative"
    >
      <div className="flex flex-col items-start">
        {usesData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4 dark:text-white">
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    {item.link && (
                      <span className="ml-1 inline-flex align-middle">
                        <ExternalLinkIcon className="h-5 w-5" />
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsesList;
