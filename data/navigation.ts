// ============================================
// NAVIGATION - Edit menu items here
// ============================================

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "</Home>", href: "#home" },
  { id: "about", label: "</AboutMe>", href: "#about" },
  { id: "education", label: "</Education>", href: "#education" },
  { id: "skills", label: "</Skills>", href: "#skills" },
  { id: "experience", label: "</Experience>", href: "#experience" },
  { id: "projects", label: "</Projects>", href: "#projects" },
];
