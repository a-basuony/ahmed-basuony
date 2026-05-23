export type ProjectCategory =
  | "featured"
  | "archive"
  | "frontend"
  | "full-stack"
  | "dashboard";

export type CaseStudy = {
  overview: string;
  problem: string;
  targetUsers: string[];
  myRole: string;
  keyFeatures: string[];
  frontendImplementation: string[];
  backendImplementation?: string[];
  databaseDesign?: string[];
  authAndSecurity?: string[];
  apiOverview?: string[];
  architectureDecisions: string[];
  challenges: string[];
  solutions: string[];
  deploymentNotes: string[];
  screenshots: string[];
  whatThisProjectProves: string[];
  apiDocsUrl?: string;
  postmanUrl?: string;
  swaggerUrl?: string;
  databaseModels?: DatabaseModel[];
  schemaHighlights?: string[];
  dataRelationships?: string[];
  schemaDiagram?: string;
};

export type DatabaseModel = {
  name: string;
  fields: string[];
};

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  features: string[];
  frontendHighlight: string;
  backendHighlight?: string;
  tech: string[];
  badges: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  category: ProjectCategory;
  featured: boolean;
  caseStudy?: CaseStudy;
};

export const projects: PortfolioProject[] = [
  {
    id: "shoppire-ecommerce",
    slug: "shoppire-ecommerce",
    title: "Shoppire E-Commerce",
    shortDescription:
      "A MERN e-commerce platform with catalog browsing, cart flow, authentication, payments, and admin management.",
    description:
      "Full-stack e-commerce application focused on a complete shopping workflow: product browsing, cart management, authentication, checkout, and admin-side product/order management.",
    role: "Full-stack developer",
    features: ["Product catalog", "Cart and checkout", "Admin dashboard"],
    frontendHighlight:
      "Responsive React interface with product cards, shopping flow, and dashboard-oriented management screens.",
    backendHighlight:
      "Node/Express API layer for product, user, cart, order, and payment-oriented workflows.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
    badges: ["Full Stack", "E-commerce", "Dashboard"],
    demoUrl: "https://shoppire-ashy.vercel.app/",
    githubUrl: "https://github.com/a-basuony/shoppire",
    image: "/images/e-commerce-Shoppire.png",
    category: "full-stack",
    featured: true,
    caseStudy: {
      overview:
        "Shoppire is a full-stack MERN e-commerce project built to demonstrate a production-style shopping experience with customer-facing screens and admin management workflows.",
      problem:
        "A realistic e-commerce app needs more than product cards. It needs a connected frontend, persistent data, user flows, checkout handling, and admin operations that feel like one coherent product.",
      targetUsers: ["Online shoppers", "Store admins", "Portfolio reviewers"],
      myRole:
        "I worked across the frontend and backend: UI implementation, shopping workflows, API integration, and deployment preparation.",
      keyFeatures: [
        "Product listing and detail-oriented shopping flow",
        "Cart and checkout experience",
        "Authentication-aware user flows",
        "Admin management for product/order operations",
        "Stripe payment integration where supported by the live project",
      ],
      frontendImplementation: [
        "Built responsive React screens for browsing, cart, and dashboard-style flows.",
        "Used reusable UI patterns for cards, buttons, forms, and state-driven actions.",
        "Handled API-driven states for product and shopping data.",
      ],
      backendImplementation: [
        "Node.js and Express.js API foundation for e-commerce resources.",
        "Separated product, user, cart, order, and payment-oriented concerns where available in the repository.",
        "Integrated backend responses into frontend flows.",
      ],
      databaseDesign: [
        "MongoDB is used for product, user, and order-style data.",
        "The case study should later include actual schema screenshots or links from the repository.",
      ],
      databaseModels: [
        { name: "User", fields: ["profile", "auth", "orders"] },
        { name: "Product", fields: ["catalog", "price", "stock"] },
        { name: "Order", fields: ["items", "status", "payment"] },
      ],
      schemaHighlights: [
        "Schema cards summarize the visible product data areas without inventing private implementation details.",
        "Exact model files and API docs can be linked after repository verification.",
      ],
      dataRelationships: ["User -> Order", "Order -> Product", "Cart -> Product"],
      authAndSecurity: [
        "Authentication is part of the product flow.",
        "Add exact JWT/password/security implementation details after reviewing the backend repository.",
      ],
      apiOverview: [
        "Product, auth, cart, order, and checkout endpoints are the expected API groups for this project.",
        "Add Swagger/Postman links when API documentation is available.",
      ],
      architectureDecisions: [
        "MERN stack chosen to keep frontend, API, and MongoDB data flow aligned.",
        "Admin and customer flows are separated conceptually to make the product easier to reason about.",
      ],
      challenges: [
        "Keeping shopping state consistent across cart, checkout, and persisted data.",
        "Presenting admin functionality without overwhelming the customer-facing UX.",
      ],
      solutions: [
        "Used clear feature boundaries and reusable UI patterns.",
        "Kept the project focused on core e-commerce workflows before adding extras.",
      ],
      deploymentNotes: [
        "Frontend is deployed publicly for demo access.",
        "Add backend hosting and environment variable details if the API deployment is public.",
      ],
      screenshots: ["/images/e-commerce-Shoppire.png", "/images/ecommerce.png"],
      whatThisProjectProves: [
        "Full-stack product delivery",
        "E-commerce workflow understanding",
        "API-connected React UI",
        "Payment-oriented application flow",
      ],
    },
  },
  {
    id: "mern-chat",
    slug: "dardasha-real-time-chat",
    title: "Dardasha Real-Time Chat",
    shortDescription:
      "A real-time communication app with authentication, group chats, calls, screen sharing, and AI-assisted features.",
    description:
      "Real-time chat application built around live messaging and collaboration workflows, including authentication, group conversations, audio/video calls, screen sharing, and AI-assisted capabilities where supported.",
    role: "Full-stack developer",
    features: ["Real-time messaging", "Group chats", "Calls and screen share"],
    frontendHighlight:
      "Interactive React UI for chat conversations, real-time states, and communication controls.",
    backendHighlight:
      "Socket.io-powered real-time layer with Node/Express and MongoDB-backed user/message data.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "OpenAI API"],
    badges: ["Full Stack", "Real-time", "AI API"],
    demoUrl: "https://dardasha-real-time-chat-frontend.vercel.app/",
    githubUrl: "https://github.com/a-basuony/Dardasha_real_time_chat_frontend",
    image: "/images/chat.png",
    category: "full-stack",
    featured: true,
    caseStudy: {
      overview:
        "Dardasha is a real-time chat project built to prove interactive full-stack development beyond static CRUD screens.",
      problem:
        "Communication apps need instant feedback, reliable state updates, and a UI that remains usable while multiple users interact at the same time.",
      targetUsers: ["Chat users", "Teams or groups", "Portfolio reviewers"],
      myRole:
        "I implemented the frontend experience and connected it to real-time and backend-driven communication features.",
      keyFeatures: [
        "Authentication-aware chat experience",
        "Real-time messaging",
        "Group conversations",
        "Audio/video call and screen-share workflows where supported",
        "AI API integration where supported",
      ],
      frontendImplementation: [
        "Built chat-oriented UI states for messages, conversations, loading, and interaction controls.",
        "Designed responsive layouts for real-time communication screens.",
        "Integrated real-time events into the user interface.",
      ],
      backendImplementation: [
        "Socket.io is used for real-time messaging behavior.",
        "Node/Express and MongoDB are used for persistent app data where supported by the project repositories.",
      ],
      databaseDesign: [
        "MongoDB supports user/message/conversation-style data.",
        "Add actual schema diagrams after confirming the backend repository structure.",
      ],
      databaseModels: [
        { name: "User", fields: ["profile", "auth", "presence"] },
        { name: "Conversation", fields: ["members", "type", "metadata"] },
        { name: "Message", fields: ["sender", "content", "timestamps"] },
      ],
      schemaHighlights: [
        "The schema view focuses on chat-domain entities that are already represented in the project positioning.",
        "Socket event documentation can be added later when verified.",
      ],
      dataRelationships: [
        "User -> Conversation",
        "Conversation -> Message",
        "User -> Message",
      ],
      authAndSecurity: [
        "Authentication is included in the app flow.",
        "Add token/session details only after verifying the backend implementation.",
      ],
      apiOverview: [
        "Expected API groups include auth, users, conversations, messages, and real-time socket events.",
        "A future Postman or event contract section would make this case study stronger.",
      ],
      architectureDecisions: [
        "Socket.io fits the real-time messaging requirement better than polling.",
        "Separating real-time events from persistent API data keeps the mental model clearer.",
      ],
      challenges: [
        "Handling live updates without confusing UI state.",
        "Keeping communication controls usable on small screens.",
      ],
      solutions: [
        "Focused the UI around conversation state and clear controls.",
        "Used real-time events for instant feedback where the project supports them.",
      ],
      deploymentNotes: [
        "Frontend demo is public.",
        "Document backend/socket hosting details once confirmed.",
      ],
      screenshots: ["/images/chat.png"],
      whatThisProjectProves: [
        "Real-time app thinking",
        "Socket.io integration",
        "Interactive frontend states",
        "Full-stack communication workflow",
      ],
    },
  },
  {
    id: "doctor-booking",
    slug: "doctor-booking",
    title: "Doctor Booking",
    shortDescription:
      "A booking platform for browsing doctors and managing appointment-oriented user flows.",
    description:
      "Healthcare booking application focused on appointment workflows, doctor discovery, and user-facing booking interactions.",
    role: "Full-stack / frontend contributor",
    features: ["Doctor discovery", "Appointment workflow", "User accounts"],
    frontendHighlight:
      "Responsive booking UI with healthcare-oriented cards, forms, and navigation flows.",
    backendHighlight:
      "MERN-style project structure with authentication and appointment-related data where supported by the repository.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
    badges: ["Full Stack", "Booking", "Auth"],
    demoUrl: "https://doctor-booking-team2.vercel.app/",
    githubUrl: "https://github.com/a-basuony/doctor-booking",
    image: "/images/booking-doctor.png",
    category: "full-stack",
    featured: true,
    caseStudy: {
      overview:
        "Doctor Booking is a healthcare-oriented web app that demonstrates booking workflows and role-aware product thinking.",
      problem:
        "A booking platform must make it easy for users to find the right provider and move through an appointment flow without friction.",
      targetUsers: ["Patients", "Doctors or clinics", "Admins if supported"],
      myRole:
        "I contributed to building the application experience and connecting UI flows with MERN-style application logic.",
      keyFeatures: [
        "Doctor/profile browsing",
        "Appointment-focused workflow",
        "Authentication-aware user experience",
        "Dashboard or management screens where supported",
      ],
      frontendImplementation: [
        "Built responsive React screens for browsing and appointment interactions.",
        "Used form and state patterns suitable for booking workflows.",
      ],
      backendImplementation: [
        "Node/Express backend and MongoDB are listed in the project stack.",
        "Add exact endpoint and role details after reviewing the backend repository.",
      ],
      databaseDesign: [
        "Expected data includes users, doctors, and appointments.",
        "Add real schema details when confirmed.",
      ],
      databaseModels: [
        { name: "User", fields: ["profile", "auth", "appointments"] },
        { name: "Doctor", fields: ["specialty", "availability", "profile"] },
        { name: "Appointment", fields: ["patient", "doctor", "status"] },
      ],
      schemaHighlights: [
        "Schema cards describe the booking-domain entities already supported by the case study copy.",
        "Detailed backend model links should be added after repository verification.",
      ],
      dataRelationships: [
        "User -> Appointment",
        "Doctor -> Appointment",
        "Appointment -> Status",
      ],
      authAndSecurity: [
        "JWT is listed in the project stack.",
        "Add details about roles and token handling only after verifying them.",
      ],
      apiOverview: [
        "Expected API groups include auth, doctors, appointments, and users.",
      ],
      architectureDecisions: [
        "Booking apps benefit from clear separation between discovery, booking, and account flows.",
        "The MERN stack supports fast iteration across UI, API, and data.",
      ],
      challenges: [
        "Avoiding generic e-commerce patterns in a healthcare booking UX.",
        "Keeping appointment interactions clear on mobile.",
      ],
      solutions: [
        "Positioned the project around appointment flow rather than cart/checkout language.",
        "Kept the case study honest where backend details still need repository proof.",
      ],
      deploymentNotes: ["Public demo is available on Vercel."],
      screenshots: ["/images/booking-doctor.png"],
      whatThisProjectProves: [
        "Booking workflow thinking",
        "Full-stack product structure",
        "Auth-aware UI",
        "Domain-specific product copy",
      ],
    },
  },
  {
    id: "linkedin-clone",
    slug: "linkedin-clone",
    title: "LinkedIn Clone",
    shortDescription:
      "A MERN social platform with profiles, posts, authentication, and developer-networking features.",
    description:
      "Social platform project focused on profiles, feeds, posts, authentication, and community-style interactions.",
    role: "Full-stack developer",
    features: ["Profiles", "Post feed", "Authentication"],
    frontendHighlight:
      "React UI for social feeds, profile surfaces, and interactive post flows.",
    backendHighlight:
      "MERN backend foundation for user and post data with JWT-based authentication where supported.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
    badges: ["Full Stack", "Social", "Auth"],
    demoUrl: "https://linkedin-clone-two-taupe.vercel.app/",
    githubUrl: "https://github.com/a-basuony/Linkedin_Clone",
    image: "/images/linkedin-clone.png",
    category: "full-stack",
    featured: true,
  },
  {
    id: "shoppy-dashboard",
    slug: "shoppy-dashboard",
    title: "Shoppy Dashboard",
    shortDescription:
      "A React admin dashboard with analytics-style UI, charts, and management screens.",
    description:
      "Frontend dashboard project that demonstrates admin UI composition, charting, and management-oriented interface design.",
    role: "Frontend developer",
    features: ["Analytics UI", "Charts", "Admin layout"],
    frontendHighlight:
      "Dashboard-focused React UI with reusable layout patterns and data visualization surfaces.",
    tech: ["React", "Chart.js", "Material UI"],
    badges: ["Frontend", "Dashboard", "Charts"],
    demoUrl: "https://shoppy-admin-dashboard.vercel.app/",
    githubUrl: "https://github.com/a-basuony/Admin_Dashbord_React",
    image: "/images/shoppy.webp",
    category: "dashboard",
    featured: true,
  },
  {
    id: "happyshop",
    slug: "happyshop",
    title: "HappyShop",
    shortDescription:
      "A MERN e-commerce project focused on catalog, shopping, authentication, and payment-oriented workflows.",
    description:
      "E-commerce application demonstrating another full-stack shopping experience with product, cart, user, and payment-oriented flows.",
    role: "Full-stack developer",
    features: ["Catalog", "Cart workflow", "Stripe-oriented checkout"],
    frontendHighlight:
      "React shopping interface with product and cart screens.",
    backendHighlight:
      "MERN backend stack listed for product/user/order-style workflows.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
    badges: ["Full Stack", "E-commerce", "Stripe"],
    demoUrl: "https://happy-shop-frontend-xi.vercel.app/",
    githubUrl: "https://github.com/a-basuony/happyShop-frontend",
    image: "/images/happy_shop.png",
    category: "full-stack",
    featured: true,
  },
  {
    id: "safarni",
    slug: "safarni",
    title: "Safarni Travel Platform",
    shortDescription:
      "A travel-oriented web platform with destination browsing and booking-style product flows.",
    description:
      "Travel platform project focused on presenting travel options and user flows for exploring or booking travel experiences.",
    role: "Full-stack / frontend contributor",
    features: ["Travel listings", "Responsive UI", "User flow"],
    frontendHighlight:
      "React interface for a travel product experience with responsive listing screens.",
    backendHighlight:
      "MERN stack is listed; backend-specific details should be expanded after repository review.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
    badges: ["Full Stack", "Travel", "Product UI"],
    demoUrl: "https://safarni-wza1.vercel.app/",
    githubUrl: "https://github.com/a-basuony/safarni",
    image: "/images/safarni.png",
    category: "full-stack",
    featured: true,
  },
  {
    id: "react-meals",
    slug: "react-meals",
    title: "Food Order App",
    shortDescription:
      "A frontend food-ordering interface with cart state and ordering interactions.",
    description:
      "React practice project focused on cart state, ordering UI, and component composition.",
    role: "Frontend developer",
    features: ["Menu UI", "Cart state", "Order form"],
    frontendHighlight: "React components and Context API state management.",
    tech: ["React", "Context API"],
    badges: ["Frontend", "Cart", "Practice"],
    demoUrl: "https://a-basuony.github.io/ReactMeals/",
    githubUrl: "https://github.com/a-basuony/FOOD-ORDER",
    image: "/images/reactmeal.png",
    category: "archive",
    featured: false,
  },
  {
    id: "amazon-clone",
    slug: "amazon-clone",
    title: "Amazon Clone",
    shortDescription:
      "A frontend e-commerce clone built to practice shopping UI and payment integration concepts.",
    description:
      "Practice project focused on e-commerce interface patterns and Firebase/Stripe integration.",
    role: "Frontend developer",
    features: ["Shopping UI", "Firebase", "Stripe practice"],
    frontendHighlight: "React frontend practice for e-commerce UX patterns.",
    tech: ["React", "Firebase", "Stripe"],
    badges: ["Frontend", "E-commerce", "Practice"],
    demoUrl: "https://a-basuony.github.io/Amazon-Clone/",
    githubUrl: "https://github.com/a-basuony/Amazone_Clone_ReactJs",
    image: "/images/amazon.png",
    category: "archive",
    featured: false,
  },
  {
    id: "kanban-board",
    slug: "kanban-board",
    title: "Kanban Board",
    shortDescription:
      "A task board practice project demonstrating drag-style task organization concepts.",
    description: "Task management board built with HTML, CSS, and JavaScript.",
    role: "Frontend developer",
    features: ["Board UI", "Task organization", "Vanilla JS"],
    frontendHighlight: "Vanilla JavaScript DOM and UI practice.",
    tech: ["JavaScript", "HTML", "CSS"],
    badges: ["Frontend", "Vanilla JS", "Practice"],
    demoUrl: "https://a-basuony.github.io/Kalbonyan-Board/",
    githubUrl: "https://github.com/a-basuony/Kalbonyan-Board",
    image: "/images/kanban.png",
    category: "archive",
    featured: false,
  },
  {
    id: "netflix-clone",
    slug: "netflix-clone",
    title: "Netflix Clone",
    shortDescription:
      "A React streaming UI clone focused on API-driven media browsing screens.",
    description: "Frontend clone project built to practice API-driven UI.",
    role: "Frontend developer",
    features: ["Media UI", "API data", "Firebase"],
    frontendHighlight: "React UI practice with API-driven content.",
    tech: ["React", "API", "Firebase"],
    badges: ["Frontend", "API", "Practice"],
    demoUrl: "https://a-basuony.github.io/netflix-clone/",
    githubUrl: "https://github.com/a-basuony/netflix-clone",
    image: "/images/netflix.png",
    category: "archive",
    featured: false,
  },
  {
    id: "google-clone",
    slug: "google-clone",
    title: "Google Search Clone",
    shortDescription:
      "A search UI practice project using a search API and Tailwind styling.",
    description: "Frontend practice project for API-driven search results.",
    role: "Frontend developer",
    features: ["Search UI", "API results", "Responsive layout"],
    frontendHighlight: "API integration and Tailwind UI practice.",
    tech: ["React", "API", "Tailwind"],
    badges: ["Frontend", "API", "Search"],
    demoUrl: "https://google-s-c.vercel.app",
    image: "/images/google.webp",
    category: "archive",
    featured: false,
  },
  {
    id: "more-frontend-practice",
    slug: "more-frontend-practice",
    title: "Frontend Practice Archive",
    shortDescription:
      "Older HTML, CSS, JavaScript, and React practice projects kept as proof of progression.",
    description:
      "A grouped archive for earlier clone, template, CRUD, quiz, tracker, and static UI projects.",
    role: "Frontend developer",
    features: ["HTML/CSS templates", "React clones", "Vanilla JS apps"],
    frontendHighlight:
      "Shows progression from fundamentals into React and full-stack applications.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    badges: ["Frontend", "Archive", "Fundamentals"],
    demoUrl: "https://github.com/a-basuony",
    githubUrl: "https://github.com/a-basuony",
    image: "/images/nice-portfolio.png",
    category: "archive",
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const archiveProjects = projects.filter((project) => !project.featured);
export const caseStudyProjects = projects.filter((project) => project.caseStudy);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
