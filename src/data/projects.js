export const projects = [
  {
    id: "langgraph-rag",
    title: "LangGraph RAG Agent with Tool Calling",
    year: "2026",
    featured: true,
    description:
      "Autonomous conversational RAG agent using LangGraph for conditional routing, state handling, and multi-step tool execution loops.",
    longDescription:
      "Built an autonomous conversational RAG agent that combines retrieval-augmented generation with tool use. The agent decides when to call tools and loops until it has a final answer. Includes a Streamlit UI that shows live tool-call traces.",
    problem:
      "Need for a low-latency, multi-step agent that can both retrieve from a knowledge base and perform actions (arithmetic tools) while remaining fully observable.",
    solution:
      "LangGraph orchestration with conditional edges, Gemini embeddings + local FAISS store, Groq LLM inference, and Dockerized ingestion + execution pipeline.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "FAISS",
      "Groq",
      "Gemini Embeddings",
      "Docker",
      "Streamlit",
    ],
    features: [
      "Conditional routing and multi-step tool execution loops",
      "Gemini embeddings with local FAISS vector store",
      "Sub-second query latency (<600 ms)",
      "Dockerized ingestion pipeline and execution graph",
      "95%+ routing precision",
      "Live tool-call trace in Streamlit sidebar",
    ],
    github: "https://github.com/mynameisaditya26/LangGraph-RAG-Agent-with-Tool-Calling",
    liveDemo: null,
  },
  {
    id: "interview-coach",
    title: "AI Interview Prep Coach with Long-Term Memory",
    year: "2026",
    featured: true,
    description:
      "Personalized AI interview coach with cross-session candidate context retention powered by Mem0 long-term memory.",
    longDescription:
      "Engineered a personalized interview preparation coach that retains candidate context across sessions using Mem0. Combines Redis session caching, Qdrant vector retrieval, and Gemini embeddings for fast, contextual responses.",
    problem:
      "Interview prep tools lose context between sessions, making repeated practice less effective.",
    solution:
      "Mem0 long-term memory + Redis caching + Qdrant retrieval, with dynamic memory injection into LangChain system prompts.",
    technologies: [
      "Python",
      "LangChain",
      "Mem0",
      "Qdrant",
      "Redis",
      "Groq",
      "Gemini Embeddings",
      "Streamlit",
    ],
    features: [
      "Cross-session candidate context retention",
      "Memory lookup under 100 ms",
      "Dynamic memory injection into system prompts",
      "Improved contextual accuracy on repeat interactions",
    ],
    github:
      "https://github.com/mynameisaditya26/AI-Interview-Prep-Coach-with-Long-Term-Memory",
    liveDemo: null,
  },
  {
    id: "alia-agent",
    title: "Emotionally-Aware AI Agent (Alia)",
    year: "2025",
    featured: true,
    description:
      "Asynchronous Telegram agent enforcing strict response schemas and state separation via type-safe Pydantic models.",
    longDescription:
      "Alia is an interactive, emotionally-aware Telegram AI that maintains a natural persona while broadcasting internal mental state (affection, energy, raw thoughts) to a live FastAPI dashboard. Built with Pydantic AI for 100% structural reliability.",
    problem:
      "Most conversational agents lack strict schema enforcement and observable internal state.",
    solution:
      "Pydantic AI structured outputs, FastAPI + Logfire observability, Docker + Kubernetes deployment, and persistent emotion state.",
    technologies: [
      "Python",
      "Pydantic AI",
      "FastAPI",
      "Telegram Bot",
      "Groq",
      "Logfire",
      "Kubernetes",
      "Docker",
    ],
    features: [
      "Strict response schemas with 100% structural reliability",
      "Live mental-state dashboard (Glassmorphism UI)",
      "Logfire end-to-end telemetry (tokens, bottlenecks, background tasks)",
      "Containerized microservices on Kubernetes",
      "Background rituals and persistent emotion database",
    ],
    github:
      "https://github.com/mynameisaditya26/Emotionally-Aware-AI-Agent-with-Pydantic-AI",
    liveDemo: null,
  },
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    year: "2025",
    featured: true,
    description:
      "Automated code-analysis microservice that reviews, debugs, and provides structured optimization feedback on submitted codebases.",
    longDescription:
      "Full-stack application that accepts code submissions and returns structured debugging and optimization feedback powered by the OpenAI API. Backend uses Express with Redis rate-limiting and MongoDB for session storage.",
    problem:
      "Manual code review is time-consuming; developers need quick, structured feedback on bugs and optimizations.",
    solution:
      "RESTful Express APIs + Redis caching/rate-limiting + MongoDB session storage + OpenAI analysis pipeline.",
    technologies: [
      "Node.js",
      "Express.js",
      "Redis",
      "MongoDB",
      "OpenAI API",
      "EJS",
      "Tailwind CSS",
    ],
    features: [
      "Automated bug detection and optimization suggestions",
      "Redis rate-limiting and query caching to protect LLM quota",
      "MongoDB schema indexing for review sessions and logs",
      "Structured response format for developer productivity",
    ],
    github: "https://github.com/mynameisaditya26/ai-code-reviewer",
    liveDemo: null,
  },
  {
    id: "device-tracker",
    title: "Real-Time Device Tracker",
    year: "2025",
    featured: false,
    description:
      "Real-time device tracking system using Socket.io for low-latency communication and Leaflet.js for map visualization.",
    longDescription:
      "Built a real-time location tracking system that broadcasts continuous device updates over Socket.io and renders movement on interactive maps. Tested with 10+ concurrent users.",
    problem:
      "Need for low-latency live location sharing and visualization across multiple devices.",
    solution:
      "Socket.io for bidirectional real-time communication + Leaflet.js map rendering.",
    technologies: ["Node.js", "Express.js", "Socket.io", "Leaflet.js"],
    features: [
      "Low-latency Socket.io communication",
      "Continuous location broadcasting",
      "Live map visualization with Leaflet.js",
      "Tested with 10+ concurrent users",
    ],
    github: "https://github.com/mynameisaditya26/real-time-device-tracker",
    liveDemo: null,
  },
  {
    id: "cloud-drive",
    title: "Cloud Drive Backend",
    year: "2025",
    featured: false,
    description:
      "Secure cloud-based file storage platform with uploads, folder management, hierarchical navigation, authentication, and role-based access.",
    longDescription:
      "Backend for a Google Drive-like application supporting file uploads, folder hierarchy, authentication, session control, and role-based access. Uses Multer for uploads and EJS for server-side rendering.",
    problem:
      "Need for a secure, hierarchical file storage system with proper access control.",
    solution:
      "Express + MongoDB + Multer + session-based authentication and role checks.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Multer", "EJS"],
    features: [
      "File uploads and hierarchical folder navigation",
      "Authentication and role-based access control",
      "Session management and data protection",
      "Validation and efficient retrieval mechanisms",
    ],
    github: "https://github.com/mynameisaditya26/googleDriveClone",
    liveDemo: "https://google-drive-clone-one-pi.vercel.app",
  },
  {
    id: "student-management",
    title: "Student Management System",
    year: "2025",
    featured: false,
    description:
      "Full-stack application to manage student and course records with CRUD functionality, RESTful APIs, and MVC architecture.",
    longDescription:
      "Engineered a full-stack student and course management system with CRUD operations, server-side rendering, validation, and error handling following the MVC pattern.",
    problem:
      "Need for an efficient system to manage student and course records with data integrity.",
    solution:
      "Node.js/Express backend with MongoDB, MVC architecture, and validation layers.",
    technologies: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS"],
    features: [
      "Full CRUD for students and courses",
      "RESTful APIs and server-side rendering",
      "MVC architecture with validation and error handling",
    ],
    github: "https://github.com/mynameisaditya26/studentManagement",
    liveDemo: null,
  },
];
