import {
  InterfaceSetup,
  ProjectRequest,
  ReceiveData,
  SendRequest,
} from "../common/Icons";

export const DATA_LIST = [{ text: "text" }];

export const Data = [
  {
    question: "What is data labeling?",
    answer:
      "Data labeling involves annotating or tagging data to make it understandable for machines. It helps AI systems learn and make accurate predictions.",
  },
  {
    question: "Why is data labeling important?",
    answer:
      "Data labeling is crucial because it transforms raw data into a meaningful format, enabling machine learning models to accurately learn and make predictions. It ensures the quality and precision of AI systems, enhancing their performance and reliability in various applications.",
  },
  {
    question: "How does your data labeling service work?",
    answer:
      "Our data labeling service operates through a streamlined human labeling process, ensuring high-quality sentiment analysis by categorizing data into Positive, Negative, and Neutral sentiments, expressed in percentages. We utilize a straightforward, efficient system to guarantee accurate and reliable results, vital for training AI models.",
  },
  {
    question: "What types of data do you label?",
    answer:
      "We specialize in labeling a wide range of data types to support diverse AI applications. This includes text sentiment analysis, image segmentation and verification, audio transcription, and video annotation. Our comprehensive labeling services ensure high-quality, accurate data for machine learning models.",
  },
  {
    question: "How do you ensure data quality?",
    answer:
      "We ensure data quality through rigorous validation processes, combining automated checks with human oversight. Our team meticulously reviews data for accuracy, consistency, and completeness, utilizing advanced tools to detect and correct errors promptly. This multi-layered approach guarantees high-quality, reliable data for all your needs.",
  },
  {
    question: "What sets your data labeling service apart?",
    answer:
      "What sets our data labeling service apart is our meticulous human-in-the-loop process, ensuring high accuracy and quality. Our global workforce, equipped with extensive industry expertise, handles diverse data labeling tasks with precision. Additionally, our scalable solutions adapt to varying project demands, providing reliable and efficient results.",
  },
  {
    question: "How can I get started with your data labeling service?",
    answer:
      "To get started with our data labeling service, simply reach out through our contact form or email us directly. Our team will guide you through the process, helping you define your requirements and setting up a tailored plan to meet your needs. We ensure a seamless onboarding experience to get your projects up and running quickly.",
  },
];

// Header Helper

export const navLink = [
    { tabText: "Home", href: "#home" },
    { tabText: "Label", href: "#label" },
    { tabText: "About Us", href: "#about" },
    { tabText: "How it Works", href: "#work" },
    { tabText: "Team", href: "#team" },
    { tabText: "FAQs", href: "#faq" },
];

export const items= [
    { id: 1, label: 'Accurate', maxWidth: '121px' },
    { id: 2, label: 'Scalable', maxWidth: '118px' },
    { id: 3, label: 'Secure Data', maxWidth: '147px' },
    { id: 4, label: 'Labeling Solutions', maxWidth: '193px' },
    { id: 5, label: 'Quality Work', maxWidth: '149px' }
];
export const footerData = [
    {
        title: 'Quick Links',
        links: [
            { label: 'Home', href: '#home' },
            { label: 'About Us', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'FAQ', href: '#faq' },
            { label: 'How It Works', href: '#how-it-works' },
        ],
    },
    {
        title: 'Links',
        links: [
            { label: 'Team', href: '#team' },
            { label: 'Label', href: '#label' },
        ],
    },
    {
        title: 'Policy',
        links: [
            { label: 'Contact Us', href: '#contact' },
            { label: 'Privacy Policy', href: '#privacy-policy' },
            { label: 'Terms and conditions', href: '#terms-conditions' },
        ],
    },]

    export const teamMembers = [
      {
        name: "Mark Butler",
        role: "Lead Data Annotator",
        phone: "972.215.8214",
        email: "darrin.araki@cbpacific.com",
        image: "/assets/images/home/webp/butler.webp",
        columnClass: "px-[10px] 2xl:px-5 w-full md:w-1/2 flex justify-center",
      },
      {
        name: "Corinne Crabtree",
        role: "Lead Data Annotator",
        phone: "972.215.8214",
        email: "darrin.araki@cbpacific.com",
        image: "/assets/images/home/webp/corrinne.webp",
        columnClass:
          "px-[10px] 2xl:px-5 w-full md:w-1/2 flex justify-center md:mt-0 mt-12",
      },
    ];
    export const TimelineData = [
      {
        title: "Project request",
        description:
          "Send us information about your project and your annotation needs. Our team will work with you to define the Scope of Work and to determine the best way to deliver the results that you require.",
        icon: <ProjectRequest />,
      },
      {
        title: "Interface setup",
        description:
          "Our team will develop a custom interface for your use case and will hand-pick the most suitable workforce based on your requirements in terms of geography, demographics, etc",
        icon: <InterfaceSetup />,
      },
      {
        title: "Send request",
        description:
          "Once the integration is complete, you can start sending requests to our workforce which contain bounding box, tag, polygon assignments, and more.",
        icon: <SendRequest />,
      },
      {
        title: "Receive data",
        description: "Get the appropriate data annotated.",
        icon: <ReceiveData />,
      },
    ];
