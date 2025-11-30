"use client";
import React from "react";
import Title from "../shared/Title";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
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
  shortDescription: string;
  techStack: string[];
  status: ProjectStatus[];
  keyChallenges: string[];
  keyLearnings: string[];
  liveLink: string;
  clientLink: string;
  serverLink?: string;
}
export const allProjects: Project[] = [
  {
    id: 1,
    img: "/careerCrafter.png",
    name: "Career Crafter",
    teamProject: true,
    shortDescription:
      "AI-powered platform to build resumes, enhance skills, and connect with professionals.",
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
      { id: 1, name: "Timeline", duration: "2 months" },
      { id: 2, name: "Role", duration: "Full Stack" },
      { id: 3, name: "Team", duration: "5 members" },
      { id: 4, name: "Status", duration: "Completed" },
    ],
    keyChallenges: [
      "Integrating multiple AI features",
      "Accurate job recommendations",
      "ATS resume analysis and secure uploads",
      "Real-time chat and calls",
      "Smooth AI chatbot and mentor interactions",
      "Managing premium access",
      "Handling large datasets",
      "Maintaining system performance",
      "Responsive UI design",
      "Ensuring data security",
      "Syncing saved/shared/applied jobs",
      "Team collaboration across modules",
    ],
    keyLearnings: [
      "Integrating AI into real apps",
      "Resume parsing and ATS handling",
      "Job-matching algorithms",
      "Building real-time chat/calls",
      "Scalable backend and APIs",
      "Optimizing AI features",
      "Complex dashboard UI/UX",
      "Premium subscription logic",
      "Secure file handling",
      "Team collaboration via Git",
      "Real-time communication tech",
      "Debugging and optimization",
    ],
    liveLink: "https://careercrafter5.web.app",
    clientLink: "https://github.com/moshiurrahmandeap11/careerCrafter-client",
    serverLink: "https://github.com/moshiurrahmandeap11/careerCrafter-ServerV2",
  },
  {
    id: 2,
    img: "/devdit.png",
    name: "Devdit",
    teamProject: false,
    shortDescription:
      "Interactive developer forum app with discussions, voting, dashboards, and analytics.",
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
    status: [
      { id: 1, name: "Timeline", duration: "10 days" },
      { id: 2, name: "Role", duration: "Full Stack" },
      { id: 3, name: "Team", duration: "Solo" },
      { id: 4, name: "Status", duration: "Completed" },
    ],
    keyChallenges: [
      "JWT auth with social login",
      "Securing DBs with env variables",
      "Role-based routes",
      "Complex dashboards",
      "Server-side pagination",
      "Backend tag search",
      "Upvote/downvote logic",
      "Comment reporting",
      "TanStack Query integration",
      "Smooth deployment",
      "Reload-safe private routes",
      "Admin analytics charts",
      "Dynamic admin tags",
    ],
    keyLearnings: [
      "MERN full-stack workflow",
      "JWT + social auth",
      "Role-based access",
      "MongoDB queries & aggregation",
      "TanStack Query usage",
      "React-hook-form handling",
      "Server-side pagination",
      "Dynamic routing",
      "Secure deployment",
      "Social sharing integration",
      "Admin management tools",
      "Complex feature problem-solving",
      "Data visualization with charts",
    ],
    liveLink: "https://dev-forum-by-ubaid.netlify.app",
    clientLink: "https://github.com/noob-ubaid/devdit-client",
    serverLink: "https://github.com/noob-ubaid/devdit-server",
  },
  {
    id: 3,
    img: "/jobent.png",
    name: "Jovent",
    teamProject: false,
    shortDescription:
      "Community platform for discovering, creating and join local social development events.",
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
    status: [
      { id: 1, name: "Timeline", duration: "7 days" },
      { id: 2, name: "Role", duration: "Full Stack" },
      { id: 3, name: "Team", duration: "Solo" },
      { id: 4, name: "Status", duration: "Completed" },
    ],
    keyChallenges: [
      "Backend search/filter logic",
      "Prevent past date selection",
      "JWT + Firebase login",
      "Protect private routes",
      "Database relations for events",
      "Role-specific pages",
      "Sorting joined events",
      "Responsive UI",
      "Prevent unauthorized edits",
      "Deployment issues",
    ],
    keyLearnings: [
      "Auth flow with Firebase + JWT",
      "Private routing & tokens",
      "Search/filter APIs with MongoDB",
      "Frontend state & protected pages",
      "Form validation",
      "Future-only date selection",
      "CRUD for events",
      "Responsive UI & themes",
      "User-specific data handling",
      "Client/server deployment workflow",
    ],
    liveLink: "https://social-development-by-ubaid.netlify.app",
    clientLink: "https://github.com/noob-ubaid/Social-Development",
    serverLink: "https://github.com/noob-ubaid/Social-development-server",
  },
  {
    id: 4,
    img: "/recipe.png",
    name: "Recipe Book",
    teamProject: false,
    shortDescription:
      "Food platform for discovering, sharing, and managing recipes with community features.",
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
    status: [
      { id: 1, name: "Timeline", duration: "5 days" },
      { id: 2, name: "Role", duration: "Full Stack" },
      { id: 3, name: "Team", duration: "Solo" },
      { id: 4, name: "Status", duration: "Completed" },
    ],
    keyChallenges: [
      "Like button logic",
      "Dynamic like counts",
      "Protected recipe pages",
      "Update modal with syncing",
      "Securing env variables",
      "Prevent reload errors",
      "Backend cuisine filtering",
      "User-only dashboard access",
      "Responsive card grids",
      "Unique, appealing UI",
    ],
    keyLearnings: [
      "Full authentication system",
      "Protected routes & login persistence",
      "CRUD for recipes",
      "MongoDB sorting/filtering",
      "Form validation",
      "Dynamic top recipes section",
      "UI/UX enhancements",
      "Advanced UI libraries",
      "Theme toggling",
      "Responsive layouts",
    ],
    liveLink: "https://recipe-book-by-ubaid.netlify.app",
    clientLink: "https://github.com/noob-ubaid/Recipe-app",
    serverLink: "https://github.com/noob-ubaid/Recipe-book-server",
  },
];

const Projects = () => {
  return (
    <div className="mt-16">
      <Title text="Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
        {allProjects.map((project, idx) => (
          <div
            key={project.id}
            className="shadow-md border-2 rounded-xl"
          >
            <div className="relative w-full h-56 border-b-2 ">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover bg-center rounded-t-xl"
              />
            </div>
            <div className="p-3 mt-2">
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-2xl">{project.name}</p>
                <div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.liveLink}
                        className="text-text-color"
                        target="_blank"
                      >
                        <TbWorld size={25} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-medium text-xs ">View website</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <p className=" text-text-color mt-3  font-medium tracking-normal leading-[26px]">
                {project.shortDescription}
              </p>
              <div className="flex items-center justify-between gap-4 mt-3">
                <p className="text-green-600 bg-green-100 dark:bg-gray-800 dark:text-green-400 py-1 px-2 rounded-sm text-xs">
                  All features operational
                </p>
                <Link
                  href={`/project/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-text-color font-medium hover:underline flex items-center gap-1"
                >
                  View Details <FaArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
