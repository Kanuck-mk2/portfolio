export const navLinks = [
  { href: '#home', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#skills', text: 'Skills' },
  { href: '#projects', text: 'Projects' },
  { href: '#contact', text: 'Contact' },
];

export const imageAssets: string[] = [
  './profile/shawnm1.jpg',
  './profile/shawn1.webp',
  './profile/shawn-side.jpg',
  './profile/shawn2.webp',
  './profile/shawn4.webp',
  './profile/shawn5.webp',
];

interface SkillData {
  year: string;
  title: string;
  duration: string;
  details: string;
}

export const skillsData: SkillData[] = [
  {
    year: '2023',
    title: 'HTML5',
    duration: '1 Year',
    details:
      'Over the past year, Ive immersed myself in the intricacies of HTML5, the latest iteration of the fundamental language of the web. With HTML5, Ive delved into a multitude of features and elements that have empowered me to craft web pages and applications with enhanced functionality and interactivity. From mastering semantic elements like <header>, <footer>, and <nav> for a more structured document outline, to harnessing the power of native multimedia support with <audio> and <video> tags, Ive explored the breadth and depth of HTML5 capabilities. Additionally, Ive leveraged features like the <canvas> element for dynamic graphics and animations, and Ive embraced responsive design principles using media queries and viewport meta tags to ensure seamless experiences across devices. With a keen eye for detail and a commitment to staying abreast of emerging web standards, my journey with HTML5 has been a rewarding exploration of the building blocks of the modern web.',
  },
  {
    year: '2023',
    title: 'CSS',
    duration: '1 Year',
    details:
      'Over the span of a year, my journey with CSS has been one of continuous discovery and refinement. From the basics of styling elements to exploring advanced layout techniques, my familiarity with CSS has grown exponentially. Through hands-on projects and experimentation, Ive honed my skills in crafting visually appealing designs and responsive layouts. Delving into topics like Flexbox, Grid, and CSS animations, Ive gained insights into the intricacies of web design and the art of creating engaging user experiences. Each line of code written has been a stepping stone towards mastering the nuances of CSS, empowering me to express my creativity and bring ideas to life through elegant and polished designs.',
  },
  {
    year: '2023',
    title: 'JavaScript',
    duration: '1 Year',
    details:
      'Over the course of a year, my engagement with JavaScript has been transformative. From grasping the fundamental concepts to delving into intricate details, this journey has been a profound exploration of the languages capabilities. Through practical application and relentless experimentation, Ive developed a nuanced understanding of JavaScripts syntax and functionalities. Each challenge encountered has been an opportunity for growth, propelling me forward in my quest to harness its power. My familiarity with JavaScript extends beyond mere syntax; its a testament to my dedication to mastering this versatile language, fueling my ambition to tackle increasingly complex projects and contribute meaningfully to the ever-evolving landscape of web development.',
  },
  {
    year: '2024',
    title: 'React',
    duration: '6 Months',
    details:
      'Over the course of the past year, Ive delved into the captivating world of React, immersing myself in its ecosystem and mastering its intricacies. What began as a journey into the unknown has evolved into a profound understanding and appreciation for this powerful JavaScript library. From crafting simple components to architecting complex applications, my time with React has been a testament to the boundless potential of web development. With each project and challenge encountered along the way, Ive honed my skills, embraced new concepts, and solidified my foundation in modern frontend development. As I reflect on my journey, Im filled with excitement and anticipation for the possibilities that lie ahead, knowing that my journey with React is just the beginning of an endless pursuit of knowledge and innovation in the ever-evolving landscape of web development.',
  },
  {
    year: '2024',
    title: 'TailwindCSS',
    duration: '4 Months',
    details:
      'I have been working extensively with Tailwind CSS, a utility-first CSS framework that streamlines the process of building responsive and visually appealing user interfaces. With Tailwind, I have been able to quickly create clean and modern designs by leveraging its extensive set of utility classes. However, I am also looking forward to deepening my understanding of Tailwind CSS by exploring advanced techniques and best practices. Tailwinds flexibility and simplicity make it an excellent choice for rapid prototyping and development. By honing my skills in Tailwind CSS, I aim to deliver even more polished and efficient user interfaces in my projects.',
  },
  {
    year: '2024',
    title: 'Framer Motion',
    duration: '4 Months',
    details:
      "I have experience working with Framer Motion, a powerful animation library for React, which has allowed me to add delightful motion effects to my projects with ease. However, I'm also eager to expand my animation skills further by diving into GSAP (GreenSock Animation Platform) and Three Fiber. Learning GSAP will enable me to create complex animations and interactive experiences, while exploring Three Fiber will open up a whole new world of possibilities in 3D graphics and immersive web experiences. With a solid foundation in Framer Motion and a keen interest in mastering GSAP and Three Fiber, I'm excited to push the boundaries of what's possible in web animation and interactivity.",
  },
];

export interface FormField {
  label: string;
  name: string;
  type?: string;
  rows?: number;
}

export const formFields: FormField[] = [
  { label: 'Name', type: 'text', name: 'name' },
  { label: 'Phone', type: 'number', name: 'phone' },
  { label: 'Email', type: 'text', name: 'email' },
  { label: 'Subject', type: 'text', name: 'subject' },
  { label: 'Message', name: 'message', type: 'textarea', rows: 10 },
];
