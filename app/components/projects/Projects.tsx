import React from "react";
import careerCrafter from "/careerCrafter.png";
import recipe from "/recipe.png";
import Jobent from "/jobent.png";
import devdit from "/devdit.png";
export interface ProjectStatus {
  id: number;
  name: string;
  duration: string;
}

export interface Project {
  id: number;
  img: string;
  name: string;
  teamProject: boolean;
  description: string;
  features: string[];
  techStack: string[];
  status: ProjectStatus[];
  keyChallenges: string[];
  keyLearnings: string[];
  liveLink: string;
  clientLink: string;
  serverLink?: string;
}
const Projects = () => {
  const allProjects: Project = [
    {
      id: 1,
      img: careerCrafter,
      name: "Career Crafter",
      teamProject: true,
      description:
        "Career Crafter is an AI-powered networking platform that helps users find jobs, build resumes, create CVs, enhance skills, and connect with professionals through smart, personalized recommendations.",
      features: [
        "Job seekers can create their resumes and CVs.",
        "Job seekers can analyze their skills through our Skill Gap feature.",
        "If job seekers already have a resume, they can check whether it is ATS-friendly.",
        "Job seekers can improve their interview skills through our Mock Interview feature.",
        "Job seekers receive job posts that match their skills and can apply directly.",
        "Users can chat live, make video calls, and voice calls with their connected contacts.",
        "Users are guided through our AI Chatbot feature.",
        "Users receive personalized guidance from our AI Mentor on how to improve their desired skills.",
        "Users can access more AI features by purchasing our Premium Plan.",
        "Users can share job posts, and the shared recipients can apply for those jobs.",
        "Users can save job posts and apply later when ready.",
      ],
      techStack: [
        "React JS",
        "Tailwind CSS",
        "React Router",
        "Redux Toolkit",
        "Stripe",
        "JWT",
        "Express JS",
        "Node JS",
        "MongoDB",
        "Socket.io",
        "Shadcn UI",
        "Axios JS",
        "Firebase",
      ],
      status: [
        {
          id: 1,
          name: "Timeline",
          duration: "2 months",
        },
        {
          id: 2,
          name: "Role",
          duration: "Full Stack",
        },
        {
          id: 3,
          name: "Team",
          duration: "5 members",
        },
        {
          id: 4,
          name: "Status",
          duration: "Completed",
        },
      ],
      keyChallenges: [
        "Integrating multiple AI features like resume builder, skill gap analysis, and mock interviews",
        "Ensuring accurate job recommendations based on user skills",
        "Implementing ATS resume analysis with secure file uploads",
        "Building real-time chat, voice, and video calling",
        "Creating smooth interactions for AI chatbot and AI mentor",
        "Managing premium feature access and subscription flow",
        "Handling large datasets for jobs, users, and resumes",
        "Maintaining fast AI response times and system performance",
        "Building responsive UI similar to professional job platforms",
        "Ensuring data security for profiles, calls, and resumes",
        "Synchronizing saved, shared, and applied job actions",
        "Managing team collaboration across multiple feature modules",
      ],
      keyLearnings: [
        "Hands-on experience integrating AI into real applications",
        "Understanding resume parsing, ATS checks, and document handling",
        "Improved skills in job-matching algorithms and recommendations",
        "Learned to build real-time chat, voice, and video call features",
        "Better knowledge of scalable backend and API design",
        "Improved AI feature optimization and performance tuning",
        "Enhanced UI/UX skills for complex user dashboards",
        "Experience with premium subscription logic",
        "Gained secure file upload and processing experience",
        "Learned team collaboration using Git and code review workflows",
        "Gained experience with real-time communication technologies",
        "Improved debugging and performance optimization skills",
      ],
      liveLink: "https://careercrafter5.web.app",
      clientLink: "https://github.com/moshiurrahmandeap11/careerCrafter-client",
      serverLink:
        "https://github.com/moshiurrahmandeap11/careerCrafter-ServerV2",
    },
    {
      id: 2,
      img: devdit,
      name: "Devdit",
      teamProject: false,
      description:
        "Devdit is a dynamic single-page web app that lets users create, discover, and engage in discussions on a variety of topics. It helps people share knowledge and stay connected with community conversations.",
      features: [
        "Advanced tag-based search system powered by backend filtering",
        "Post popularity sorting using MongoDB aggregation (upvote − downvote)",
        "Full voting system with real-time upvote/downvote tracking",
        "Announcement system with dynamic visibility and live count on navbar",
        "Membership system unlocking Gold badge and unlimited posts",
        "User Dashboard with badges, recent posts, and post analytics",
        "Admin Dashboard with user management, reports management, and announcements",
        "Admin ability to add dynamic tags that update the entire platform",
        "Report feedback system with dropdown-based actions and admin moderation panel",
        "Pie chart analytics for admin showing total posts, comments, and users",
        "Comment system with modal-based long comment preview and reporting",
        "Pagination implemented across all tables and posts (client + server)",
        "Secure JWT authentication with protected routes for both user and admin",
        "TanStack Query integrated for optimized and cached data fetching",
      ],
      techStack: [
        "React JS",
        "Tailwind css",
        "React Router",
        "Tanstack Query",
        "Stripe",
        "JWT",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Axios JS",
        "Firebase",
      ],
      keyChallenges: [
        "Implementing JWT auth with social login",
        "Securing Firebase and MongoDB with env variables",
        "Handling role-based routes for User and Admin",
        "Building complex dashboard layouts",
        "Server-side pagination for posts and users",
        "Backend tag-based search functionality",
        "Upvote/downvote logic with MongoDB aggregation",
        "Comment system with reporting functionality",
        "Membership restriction for non-premium users",
        "Integrating TanStack Query for data fetching",
        "Smooth deployment without CORS issues",
        "Ensuring reload-safe private routes",
        "Admin analytics with pie chart",
        "Dynamic tag creation from admin panel",
      ],
      status: [
        {
          id: 1,
          name: "Timeline",
          duration: "10 days",
        },
        {
          id: 2,
          name: "Role",
          duration: "Full Stack",
        },
        {
          id: 3,
          name: "Team",
          duration: "Solo",
        },
        {
          id: 4,
          name: "Status",
          duration: "Completed",
        },
      ],
      keyLearnings: [
        "Mastered MERN full-stack workflow",
        "Built JWT + social authentication",
        "Learned role-based access control",
        "Improved MongoDB queries & aggregation",
        "Skilled in TanStack Query usage",
        "Gained experience with react-hook-form",
        "Learned server side pagination functionality",
        "Better understanding of dynamic routing",
        "Handled secure deployment with env keys",
        "Integrated react-share for social sharing",
        "Built admin tools: user management & reports",
        "Improved problem-solving with complex features",
        "Practiced data visualization with charts",
      ],
      liveLink: "https://dev-forum-by-ubaid.netlify.app",
      clientLink: "https://github.com/noob-ubaid/devdit-client",
      serverLink: "https://github.com/noob-ubaid/devdit-server",
    },
    {
      id: 3,
      img: Jobent,
      name: "Jovent",
      teamProject: false,
      description:
        "Jobent is a community-driven platform for discovering, creating, and joining local social development events. It helps people connect with like-minded individuals while contributing to positive change in their communities.",
      features: [
        "Email/password and social login authentication with JWT protection",
        "Create Event system with validation and future-date restriction",
        "Upcoming Events page with backend search and filtering by event type",
        "Private Event Details page with event joining functionality",
        "Joined Events page showing events in sorted date order",
        "Manage Events dashboard allowing users to update their own events",
        "Backend API storing all created and joined event data",
        "Dynamic theme toggle (light/dark) affecting entire UI",
        "Fully protected routes with persistent login after reload",
        "Responsive grid layout for all events and pages",
        "Success toasts/alerts for login, registration, and event creation",
        "Gallery and newsletter UI sections adding visual value to the platform",
      ],
      techStack: [
        "React js",
        "Tailwind css",
        "React Router",
        "JWT",
        "Node JS",
        "Express js",
        "Mongodb",
        "Firebase",
        "Axios js",
        "GSAP",
        "Framer Motion",
      ],
      keyLearnings: [
        "Implemented complete authentication flow using Firebase and JWT together",
        "Gained deep understanding of private routing and token-based authorization",
        "Enhanced backend skills by building search and filter APIs using MongoDB queries",
        "Improved frontend state handling with protected pages and conditional rendering",
        "Learned how to validate complex forms including password rules and event creation rules",
        "Practiced working with future-only date selection using react-datepicker",
        "Strengthened CRUD skills by developing event creation, editing, updating, and joining features",
        "Improved UI/UX skills through theme toggling and responsive layout design",
        "Gained experience managing user-specific data like joined events and created events",
        "Learned proper deployment workflow for client and server using Firebase and Vercel",
      ],
      keyChallenges: [
        "Implementing backend-based search and filter logic using MongoDB queries",
        "Ensuring users cannot select past dates while creating or updating events",
        "Managing JWT authentication along with Firebase social login",
        "Protecting private routes so users don’t get redirected after reload",
        "Structuring database relations for event creators and joined events",
        "Building role-specific pages like Manage Events and Joined Events",
        "Sorting joined events by date dynamically",
        "Maintaining responsive UI consistency across all pages",
        "Preventing unauthorized updates or deletes to events not created by the user",
        "Deploying both server and client without CORS / 404 / 504 errors",
      ],
      status: [
        {
          id: 1,
          name: "Timeline",
          duration: "7 days",
        },
        {
          id: 2,
          name: "Role",
          duration: "Full Stack",
        },
        {
          id: 3,
          name: "Team",
          duration: "Solo",
        },
        {
          id: 4,
          name: "Status",
          duration: "Completed",
        },
      ],
      liveLink: "https://social-development-by-ubaid.netlify.app",
      clientLink: "https://github.com/noob-ubaid/Social-Development",
      serverLink: "https://github.com/noob-ubaid/Social-development-server",
    },
    {
      id: 4,
      img: recipe,
      name: "Recipe Book",
      teamProject: false,
      description:
        "Recipe Book is a trusted platform for food enthusiasts to discover, learn, and share recipes with a vibrant community. Whether you're a beginner or a passionate home chef, Recipe Book is the perfect place to connect and inspire.",
      features: [
        "Dynamic Top Recipes section using MongoDB sort and limit by like count",
        "Complete authentication with email/password and Google social login",
        "Fully protected routes for Add Recipe, My Recipes, and Recipe Details",
        "Add Recipe system with categories, cuisine type, ingredients, instructions, and image",
        "Recipe details page with like functionality and real-time like count text",
        "User-specific My Recipes dashboard with update and delete support",
        "Update recipe modal with pre-filled forms and instant data syncing",
        "Cuisine-type filtering on All Recipes using backend queries",
        "Dark/light theme toggle for better user experience",
        "Custom 404 page with food-themed UI and no navbar/footer",
        "Fully responsive design optimized for mobile, tablet, and desktop",
      ],
      techStack: [
        "React js",
        "Tailwind css",
        "React Router",
        "Express js",
        "Mongodb",
        "Firebase",
        "Axios js",
      ],
      keyLearnings: [
        "Implemented full authentication system using email/password and Google login",
        "Learned to manage protected routes and persist login on reload",
        "Built CRUD operations for recipes including create, update, and delete",
        "Improved backend skills using MongoDB sorting, limiting, and filtering",
        "Handled form validation for passwords and recipe form fields",
        "Designed a dynamic top recipes section based on like count",
        "Enhanced UI/UX experience with custom sliders, modals, and custom toasts",
        "Worked with advanced UI libraries like Lottie, React Tooltip, and Awesome Reveal",
        "Gained experience with theme toggling between dark and light modes",
        "Learned to structure responsive layouts across mobile, tablet, and desktop",
      ],
      keyChallenges: [
        "Implementing like button logic where users cannot like their own recipes",
        "Updating like count dynamically and showing real-time interest text",
        "Building a protected recipe details page with redirect to login",
        "Creating an update modal with pre-filled data and syncing updates to the database",
        "Securing Firebase and MongoDB environment variables",
        "Ensuring no reload errors appear on private or dynamic routes",
        "Implementing cuisine-type filtering logic on the backend",
        "Managing user-only access on My Recipes page without exposing other users' data",
        "Maintaining responsive card grids for All Recipes and Top Recipes sections",
        "Avoiding lorem text and designing unique, visually appealing UI components",
      ],
      status: [
        {
          id: 1,
          name: "Timeline",
          duration: "5 days",
        },
        {
          id: 2,
          name: "Role",
          duration: "Full Stack",
        },
        {
          id: 3,
          name: "Team",
          duration: "Solo",
        },
        {
          id: 4,
          name: "Status",
          duration: "Completed",
        },
      ],
      liveLink: "https://recipe-book-by-ubaid.netlify.app",
      clientLink: "https://github.com/noob-ubaid/Recipe-app",
      serverLink: "https://github.com/noob-ubaid/Recipe-book-server",
    },
  ];
  return <div></div>;
};

export default Projects;
