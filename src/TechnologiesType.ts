export interface TechnologyType {
    id: string;
    name: string;
    category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";
    description: string;
    icon: string;
    rating: number;
    difficulty: "Beginner-Friendly" | "Intermediate" | "Advanced";
    badge:
    | "Popular"
    | "Flexible"
    | "Fast"
    | "Essential"
    | "Top SQL"
    | "Reliable"
    | "Modern"
    | "Containers";
}