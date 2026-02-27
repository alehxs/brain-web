// src/app/staff/data.ts
export type Staff = {
  name: string;
  src: string;
  href?: string;
  alt?: string;
  subtitle?: string;
};

// You can keep this list updated with staff-specific info if needed
export const staffList: Staff[] = [
  {
    name: "Michael Garrido",
    src: "/people/staff/michael-garrido.jpeg",
    subtitle: "Business Program Manager",
    alt: " Michael Garrido",
  },
];