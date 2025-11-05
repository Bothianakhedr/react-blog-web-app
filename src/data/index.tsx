import type { FormInputLogin, FormInputRegister } from "../types";

export const register_Form: FormInputRegister[] = [
  {
    label: "user Name",
    placeholder: "userName...",
    type: "text",
    name: "userName",
    id: "userName",
  },
  {
    label: "Email",
    placeholder: "Email...",
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
];
export const login_Form: FormInputLogin[] = [
  {
    label: "Email",
    placeholder: "Email...",
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
];

export const posts = [
  {
    id: 1,
    title: "Introduction to React",
    // slug: "introduction-to-react",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state efficiently.",
    author: "Bosy Khedr",
    // tags: ["React", "Frontend", "JavaScript"],
    // coverImage: "https://example.com/react-cover.jpg",
    // status: "published",
    createdAt: "2025-11-01T09:00:00Z",
    likes:1
  },
  {
    id: 2,
    title: "JavaScript Basics for Beginners",
    content:
      "JavaScript is the core programming language of the web. It allows you to make websites interactive and dynamic through DOM manipulation and event handling.",
    author: "Omar Ahmed",
    // tags: ["JavaScript", "Programming", "Frontend"],
    // coverImage: "https://example.com/js-cover.jpg",
    createdAt: "2025-10-25T11:30:00Z",
    likes :4

  },
  {
    id: 3,
    title: "Using CSS Grid for Modern Layouts",
    content:
      "CSS Grid is a powerful layout system that helps you design complex, responsive web layouts easily. It provides rows, columns, and precise placement control.",
    author: "Sara Ali",
    // coverImage: "https://example.com/css-grid.jpg",
    createdAt: "2025-10-20T15:45:00Z",
    likes:2
  },
  {
    id: 4,
    title: "Using CSS Grid for Modern Layouts",
    content:
      "CSS Grid is a powerful layout system that helps you design complex, responsive web layouts easily. It provides rows, columns, and precise placement control.",
    author: "Sara Ali",
    // coverImage: "https://example.com/css-grid.jpg",
    createdAt: "2025-10-20T15:45:00Z",
    likes:3
  },
  {
    id: 5,
    title: "Using CSS Grid for Modern Layouts",
    content:
      "CSS Grid is a powerful layout system that helps you design complex, responsive web layouts easily. It provides rows, columns, and precise placement control.",
    author: "Sara Ali",
    // tags: ["CSS", "Layout", "Frontend"],
    // coverImage: "https://example.com/css-grid.jpg",
    createdAt: "2025-10-20T15:45:00Z",
    likes:6
  },
];
