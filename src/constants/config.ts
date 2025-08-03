type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Shreeya Pandey — Full Stack Developer",
    fullName: "Shreeya Pandey",
    email: "pshreeya522@gmail.com",
  },

  hero: {
    name: "Shreeya Pandey",
    p: ["Crafting code that not only works, but speaks."],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact. IT WORKS",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `A solution-oriented full-stack developer with a deep passion for clean, structured, and purposeful code. Proficient in JavaScript, TypeScript, React, Node.js, and MongoDB, with experience in building real-time, responsive, and scalable web applications.

Driven by problem-solving and logical thinking, I enjoy breaking down complex challenges into simple, workable solutions through code. I actively seek to understand not just how things work, but why they work — constantly learning new frameworks, patterns, and technologies to stay ahead.

My goal is to write code that’s not just functional, but efficient, maintainable, and impactful.`,
    },

    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },

    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
      content: "Here’s what people say about my work.",
    },

    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.`,
    },
  },
};
