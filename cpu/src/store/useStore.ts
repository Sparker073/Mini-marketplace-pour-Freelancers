import { create } from 'zustand';

interface Expert {
  name: string;
  expertise: string;
  role: string;
  company: string;
  featured: boolean;
  category: string;
  linkedin?: string;
  email?: string;
  phone?: string;
  cv?: string;
}

interface StoreState {
  experts: Expert[];
  activeCategory: string;
  searchQuery: string;
  setActiveCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  getFilteredExperts: () => Expert[];
  addExpert: (expert: Expert) => void;
}

const experts = [
  {
    name: "Jonah Elbaz",
    expertise: "Verified Expert in Engineering",
    role: "JavaScript Developer",
    company: "Facebook",
    featured: false,
    category: "Development",
    linkedin: "https://linkedin.com/in/jonah-elbaz",
    email: "jonah.elbaz@example.com",
    phone: "+1 (555) 123-4567"
  },
  {
    name: "Casey Arrington",
    expertise: "Verified Expert in Product Management",
    role: "Product Manager",
    company: "SpaceX",
    featured: false,
    category: "Business",
    linkedin: "https://linkedin.com/in/casey-arrington",
    email: "casey.arrington@example.com",
    phone: "+1 (555) 234-5678"
  },
  {
    name: "Vladimir Mitrović",
    expertise: "Verified Expert in Engineering",
    role: "C# Developer",
    company: "Apple",
    featured: true,
    category: "Development",
    linkedin: "https://linkedin.com/in/vladimir-mitrovic",
    email: "vladimir.mitrovic@example.com",
    phone: "+1 (555) 345-6789"
  },
  {
    name: "Emily Dubow",
    expertise: "Verified Expert in Design",
    role: "UI/UX Designer",
    company: "Samsung",
    featured: false,
    category: "Design",
    linkedin: "https://linkedin.com/in/emily-dubow",
    email: "emily.dubow@example.com",
    phone: "+1 (555) 456-7890"
  },
  {
    name: "Anuar Heberlein",
    expertise: "Verified Expert in Management Consulting",
    role: "M&A Expert",
    company: "Bain & Company",
    featured: false,
    category: "Business",
    linkedin: "https://linkedin.com/in/anuar-heberlein",
    email: "anuar.heberlein@example.com",
    phone: "+1 (555) 567-8901"
  },
  {
    name: "Sarah Chen",
    expertise: "Verified Expert in Data Science",
    role: "ML Engineer",
    company: "Google",
    featured: true,
    category: "Data Science",
    linkedin: "https://linkedin.com/in/sarah-chen",
    email: "sarah.chen@example.com",
    phone: "+1 (555) 678-9012"
  },
  {
    name: "Marcus Thompson",
    expertise: "Verified Expert in Marketing",
    role: "Growth Specialist",
    company: "HubSpot",
    featured: false,
    category: "Marketing",
    linkedin: "https://linkedin.com/in/marcus-thompson",
    email: "marcus.thompson@example.com",
    phone: "+1 (555) 789-0123"
  }
];

export const useStore = create<StoreState>((set, get) => ({
  experts,
  activeCategory: 'All',
  searchQuery: '',
  setActiveCategory: (category) => set({ activeCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  addExpert: (expert) => set((state) => ({ experts: [...state.experts, expert] })),
  getFilteredExperts: () => {
    const { experts, activeCategory, searchQuery } = get();
    return experts.filter(expert => {
      const matchesCategory = activeCategory === 'All' || expert.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        expert.company.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}));