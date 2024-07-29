import {
  InterfaceSetup,
  ProjectRequest,
  ReceiveData,
  SendRequest,
} from "../common/Icons";

export const DATA_LIST = [{ text: "text" }];

export const FaqList = [
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
  { nav_tabs: "Home", href: "#home" },
  { nav_tabs: "Label", href: "#label" },
  { nav_tabs: "About Us", href: "#about" },
  { nav_tabs: "How it Works", href: "#work" },
  { nav_tabs: "Team", href: "#team" },
  { nav_tabs: "FAQs", href: "#faq" },
];

export const Hero_Items = [
  { id: 1, label: "Accurate", maxWidth: "121px" },
  { id: 2, label: "Scalable", maxWidth: "118px" },
  { id: 3, label: "Secure Data", maxWidth: "147px" },
  { id: 4, label: "Labeling Solutions", maxWidth: "193px" },
  { id: 5, label: "Quality Work", maxWidth: "149px" },
];
export const footerData = [
  {
    className: "md:w-3/12 xl:justify-end xl:flex",
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "How It Works", href: "#how-it-works" },
    ],
  },
  {
    className: "md:w-2/12 xl:justify-center xl:flex",
    title: "Links",
    links: [
      { label: "Team", href: "#team" },
      { label: "Label", href: "#label" },
    ],
  },
  {
    className: "md:w-3/12",
    title: "Policy",
    links: [
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy-policy" },
      { label: "Terms and conditions", href: "#terms-conditions" },
    ],
  },
];
export const TEAM_MEMBERS = [
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
export const TIMELINE_DATA = [
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
export const ENSURE_STEP1 = [
  {
    imageSrc: "/assets/images/home/webp/pizza.webp",
    imageAlt: "pizza-image",
    textTriangle: "Pie..",
    trianglePosition: "-left-[14px] -top-[14px]",
  },
  {
    imageSrc: "/assets/images/home/webp/car.webp",
    imageAlt: "car-image",
    textTriangle: "Pie..",
    trianglePosition: "-left-[14px] -top-[14px]",
  },
];
export const ENSURE_STEP2 = [
  {
    imageSrc: "/assets/images/home/webp/car.webp",
    imageAlt: "car",
    textTriangle: "Car",
    positionTriangleCard: "bottom-4 left-3",
    trianglePosition: "-right-[15px] -top-[10px]",
    checkIconSrc: "/assets/images/home/svg/check.svg",
    checkIconAlt: "check-icon",
    checkIconPosition: "top-3 right-3",
  },
  {
    imageSrc: "/assets/images/home/webp/vegetable.webp",
    imageAlt: "vegetable",
    textTriangle: "Tomato",
    positionTriangleCard: "right-9 bottom-5",
    trianglePosition: "-left-4 -top-[10px]",
    checkIconSrc: "/assets/images/home/svg/check.svg",
    checkIconAlt: "check-icon",
    checkIconPosition: "top-3 right-3",
  },
  {
    imageSrc: "/assets/images/home/webp/rider.webp",
    imageAlt: "rider",
    textTriangle: "Man",
    positionTriangleCard: "bottom-5 left-6",
    trianglePosition: "-right-[15px] -top-[10px]",
    checkIconSrc: "/assets/images/home/svg/check.svg",
    checkIconAlt: "check-icon",
    checkIconPosition: "top-3 left-3",
  },
  {
    imageSrc: "/assets/images/home/webp/rider.webp",
    imageAlt: "rider",
    textTriangle: "Men",
    positionTriangleCard: "top-10 left-4",
    trianglePosition: "-right-[15px] -top-[10px]",
    checkIconSrc: "/assets/images/home/svg/check.svg",
    checkIconAlt: "check-icon",
    checkIconPosition: "top-3 left-3",
  },
  {
    imageSrc: "/assets/images/home/webp/car.webp",
    imageAlt: "car",
    textTriangle: "Car",
    positionTriangleCard: "top-12 left-5",
    trianglePosition: "-right-[15px] -top-[10px]",
    checkIconSrc: "/assets/images/home/svg/check.svg",
    checkIconAlt: "check-icon",
    checkIconPosition: "top-3 left-3",
  },
  {
    imageSrc: "/assets/images/home/webp/pizza.webp",
    imageAlt: "pizza",
    textTriangle: "Pie..",
    positionTriangleCard: "right-[30px] bottom-[18px]",
    trianglePosition: "-left-4 -top-[10px] rotate-[41deg]",
    checkIconSrc: "/assets/images/home/svg/cross.svg",
    checkIconAlt: "cross",
    checkIconPosition: "top-3 right-3",
  },
];
export const ENSURE_STEP3 = [
  {
    imageSrc: "/assets/images/home/webp/pizza.webp",
    imageAlt: "pizza",
    textTriangle: "Pie..",
    checkIconSrc: "/assets/images/home/svg/cross.svg",
    checkIconAlt: "cross",
  },
  {
    imageSrc: "/assets/images/home/webp/pizza.webp",
    imageAlt: "pizza",
    textTriangle: "Quiche.",
    checkIconSrc: "/assets/images/home/svg/check.svg",
    checkIconAlt: "check-icon",
  },
];
export const CuttingEdgeData = [
  {
    img: "/assets/images/ai-trainer/webp/sql-img1.webp",
    width: 138,
    height: 73,
  },
  {
    img: "/assets/images/ai-trainer/webp/swift-img2.webp",
    width: 157,
    height: 62,
  },
  {
    img: "/assets/images/ai-trainer/webp/ruby-img3.webp",
    width: 98,
    height: 98,
  },
  {
    img: "/assets/images/ai-trainer/webp/go-img4.webp",
    width: 138,
    height: 69,
  },
  {
    img: "/assets/images/ai-trainer/webp/cutting-edge-img5.webp",
    width: 110,
    height: 89,
  },
  {
    img: "/assets/images/ai-trainer/webp/matlab-img6.webp",
    width: 97,
    height: 97,
  },
  {
    img: "/assets/images/ai-trainer/webp/php-img7.webp",
    width: 158,
    height: 85,
  },
  {
    img: "/assets/images/ai-trainer/webp/html-img8.webp",
    width: 86,
    height: 86,
  },
  {
    img: "/assets/images/ai-trainer/webp/dart-img9.webp",
    width: 170,
    height: 63,
  },
  {
    img: "/assets/images/ai-trainer/webp/logo-r-10.webp",
    width: 99,
    height: 99,
  },
  {
    img: "/assets/images/ai-trainer/webp/apex-img11.webp",
    width: 132,
    height: 75,
  },
  {
    img: "/assets/images/ai-trainer/webp/greater-img-12.webp",
    width: 88,
    height: 86,
  },
  {
    img: "/assets/images/ai-trainer/webp/c-logo-img13.webp",
    width: 87,
    height: 87,
  },
  {
    img: "/assets/images/ai-trainer/webp/c-logo-img14.webp",
    width: 91,
    height: 87,
  },
];
export const GlobalWorkforceData = [
  {
    img: "/assets/images/ai-trainer/webp/global-img1.webp",
  },
  {
    img: "/assets/images/ai-trainer/webp/global-img2.webp",
  },
  {
    img: "/assets/images/ai-trainer/webp/global-img3.webp",
  },
  {
    img: "/assets/images/ai-trainer/webp/global-img4.webp",
  },
  {
    img: "/assets/images/ai-trainer/webp/global-img5.webp",
  },
];

export const TRAINER_LANGUAGE_DATA = [
  {
    imageSrc: "/assets/images/ai-trainer/svg/java-icon.svg",
    title: "Expertise of Trainers in Java",
    bodyTexts: [
      "Extensive experience in building scalable, high-performance applications.",
      "Proficient in Java SE (Standard Edition) and EE (Enterprise Edition).",
      "Skilled in using frameworks such as Spring, Hibernate, and Apache Struts.",
      "Expertise in developing RESTful web services and microservices.",
      "Strong understanding of JVM internals, garbage collection, and memory management.",
      "Ability to integrate Java applications with various databases and external systems.",
    ],
  },
  {
    imageSrc: "/assets/images/ai-trainer/svg/swift-icon.svg",
    title: "Expertise of Trainers in Swift",
    bodyTexts: [
      "Proficient in developing iOS and macOS applications using Swift.",
      "Deep understanding of Swift syntax, best practices, and design patterns.",
      "Experience with SwiftUI, UIKit, and Core Data for building robust and dynamic user interfaces.",
      "Expertise in optimizing performance and memory usage in mobile applications.",
      "Skilled in integrating Swift applications with backend services and third-party APIs.",
      "Strong knowledge of Xcode and Apple's development ecosystem.",
    ],
  },
  {
    imageSrc: "/assets/images/ai-trainer/svg/python-icon.svg",
    title: "Expertise of Trainers in Python",
    bodyTexts: [
      "Extensive experience in developing web applications, data analysis.",
      "Proficient in using frameworks like Django, Flask, and FastAPI.",
      "Expertise in data manipulation and analysis using libraries such as Pandas, NumPy, and SciPy.",
      "Skilled in developing machine learning models with TensorFlow, Keras, and Scikit-Learn.",
      "Strong understanding of Python's asynchronous programming capabilities.",
      "Experience in automating tasks and building scripts for various purposes.",
    ],
  },
];
export const IMPROVE_DATA = [
  {
    imageSrc: "/assets/images/ai-trainer/svg/benchmark-icon.svg",
    title: "Benchmark tasks list",
    bodyTexts: [
      "Extensive experience in building scalable, high-performance applications.",
      "Proficient in Java SE (Standard Edition) and EE (Enterprise Edition).",
      "Skilled in using frameworks such as Spring, Hibernate, and Apache Struts.",
      "Expertise in developing RESTful web services and microservices.",
      "Strong understanding of JVM internals, garbage collection, and memory management.",
      "Ability to integrate Java applications with various databases and external systems.",
    ],
  },
  {
    imageSrc: "/assets/images/ai-trainer/svg/metric-icon.svg",
    title: "Predefined Metrics overview",
    bodyTexts: [
      "Proficient in developing iOS and macOS applications using Swift.",
      "Deep understanding of Swift syntax, best practices, and design patterns.",
      "Experience with SwiftUI, UIKit, and Core Data for building robust and dynamic user interfaces.",
      "Expertise in optimizing performance and memory usage in mobile applications.",
      "Skilled in integrating Swift applications with backend services and third-party APIs.",
      "Strong knowledge of Xcode and Apple's development ecosystem.",
    ],
  },
  {
    imageSrc: "/assets/images/ai-trainer/svg/blockchain-icon.svg",
    title: "Human vs. Model output comparison",
    bodyTexts: [
      "Extensive experience in developing web applications, data analysis.",
      "Proficient in using frameworks like Django, Flask, and FastAPI.",
      "Expertise in data manipulation and analysis using libraries such as Pandas, NumPy, and SciPy.",
      "Skilled in developing machine learning models with TensorFlow, Keras, and Scikit-Learn.",
      "Strong understanding of Python's asynchronous programming capabilities.",
      "Experience in automating tasks and building scripts for various purposes.",
    ],
  },
];
