// This file exports TypeScript types and interfaces used throughout the application for better type safety.

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
}

export interface Skill {
    name: string;
    level: string; // e.g., "beginner", "intermediate", "advanced"
}

export interface ContactInfo {
    email: string;
    phone?: string; // optional
}