import { portfolioImages } from "../portfolioImageData.js";

const portfolioContent = {
  headerContent: {
    title: "Portfolio",
    resumeLink: `${process.env.BASE_URL}/files/cv.pdf`,
  },
  mainImage: `${process.env.BASE_URL}/images/headers/portfolio.jpg`,
  sections: {
    b2c: {
      title: "Key B2C Frontend builds",
      content:
        "A few handpicked examples of B2C client-facing websites where I made major contributions or led the frontend development, delivering high-quality, scalable solutions. Each project involved crafting responsive, user-focused interfaces, working with large datasets and user data extraction, and collaborating with teams to ensure seamless functionality and capable fault tolerancing.",
      items: portfolioImages.b2c,
    },
    b2b: {
      title: "B2B Frontend Internal Apps",
      items: portfolioImages.b2b,
      content:
        "Previously, I developed internal apps for clients that provided critical business solutions, such as a client portal for Howden Insurance. Privacy restrictions mean these projects cannot be publicly displayed; nonetheless, they have been instrumental in streamlining workflows and supporting essential client operations. At Victorian Plumbing, I contributed to the development of internal tools that improved operational efficiency, some of which directly supported the codebase for the customer-facing site. Many others were developed to address specific business challenges within Victorian Plumbing, the links featured in the Help Centre highlight areas where these apps effectively resolved issues.",
    },
    employers: {
      title: "Previous Employers",
      items: portfolioImages.employers,
    },
  },
};

export default portfolioContent;
