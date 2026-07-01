export type AppKind =
  | 'marketing'
  | 'landing'
  | 'portfolio'
  | 'dashboard'
  | 'tickets'
  | 'scheduler'
  | 'inventory'
  | 'crm'
  | 'chatbot'
  | 'email'
  | 'serviceOrders'
  | 'catalog'
  | 'finance'
  | 'clients'
  | 'auth'
  | 'blog'
  | 'reports'
  | 'condo'
  | 'delivery'
  | 'clinic';

export interface ThemeTokens {
  name: string;
  bg: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  muted: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  shadow: string;
  onPrimary: string;
  heroOverlay: string;
  heroTint: string;
  pattern: string;
  radius: string;
}

export interface VisualProfile {
  name: string;
  layout: string;
  texture: string;
  density: string;
  radius: string;
  cta: string;
}

export interface MetricItem {
  label: string;
  value: string;
  trend: string;
  note: string;
  tone: string;
}

export interface RecordItem {
  id: string;
  title: string;
  owner: string;
  email: string;
  phone: string;
  status: string;
  stage: string;
  priority: string;
  amount: number;
  date: string;
  category: string;
  description: string;
  progress: number;
  meta: string;
  tags: string[];
}

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  featured: boolean;
  image: string;
}

export interface PlanItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface ProofPoint {
  title: string;
  text: string;
}

export interface WorkflowStep {
  step: string;
  label: string;
}

export interface PostItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  author: string;
  date: string;
  readTime: string;
}

export interface ChatMessage {
  role: 'assistant' | 'user';
  text: string;
}

export interface AppData {
  kind: AppKind;
  categoryTitle: string;
  optionTitle: string;
  brandName: string;
  tagline: string;
  summary: string;
  audience: string;
  styleName: string;
  parentSlug: string;
  optionSlug: string;
  visual: VisualProfile;
  theme: ThemeTokens;
  heroImage: string;
  metrics: MetricItem[];
  records: RecordItem[];
  services: CatalogItem[];
  products: CatalogItem[];
  plans: PlanItem[];
  faq: FaqItem[];
  testimonials: TestimonialItem[];
  proofPoints: ProofPoint[];
  workflow: WorkflowStep[];
  posts: PostItem[];
  messages: ChatMessage[];
  timeSlots: string[];
  prompt: string;
  scopeBullets: string[];
  differentialBullets: string[];
}
