import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Mail, 
  Phone, 
  Building2, 
  Calendar,
  RefreshCw,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Sparkles,
  Trash2,
  Edit,
  Newspaper,
  BookOpen,
  Settings,
  Save,
  Wrench,
  Lock,
  LogOut,
  Shield,
  Users,
  UserPlus,
  User,
  Globe,
  Search,
  Send,
  ExternalLink,
  LayoutDashboard,
  Headphones,
  FileEdit,
  TrendingUp,
  ChevronRight,
  Key,
  BarChart3,
  Monitor,
  Smartphone,
  MapPin
} from "lucide-react";
import { format } from "date-fns";

interface Quote {
  id: string;
  referenceNumber: string;
  quoteType: string;
  status: string;
  notes: string | null;
  insuredName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  state: string;
  createdAt: string;
  address?: string;
  garagingAddress?: string;
  dotNumber?: string;
  mcNumber?: string;
  yearsInBusiness?: string;
  effectiveDate?: string;
  expirationDate?: string;
  currentCarrier?: string;
  currentPremium?: string;
  liabilityLimit?: string;
  operatingRadius?: string;
  statesOfOperation?: string[];
  filingsNeeded?: string[];
  hasAutoLiability?: boolean;
  hasPhysicalDamage?: boolean;
  hasWorkersComp?: boolean;
  hasGeneralLiability?: boolean;
  hasUmbrella?: boolean;
  hasInlandMarine?: boolean;
  hasMedPay?: boolean;
  vehicles?: any[];
  drivers?: any[];
  lossHistory?: any[];
  uploadedDocuments?: string[];
  [key: string]: any;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface ServiceRequest {
  id: string;
  requestType: string;
  policyNumber: string;
  insuredName: string;
  contactName: string;
  email: string;
  phone: string;
  effectiveDate: string | null;
  details: string;
  additionalInfo: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string | null;
  readTime: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  active: boolean;
  lastLogin: string | null;
  createdAt: string;
}

interface NewsRelease {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string | null;
  published: boolean;
  publishDate: string;
  createdAt: string;
  updatedAt: string;
}

interface SiteContent {
  id: string;
  section: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  buttonText: string | null;
  buttonLink: string | null;
  imageUrl: string | null;
  metadata: any;
  updatedAt: string;
}

interface DashboardStats {
  totalQuotes: number;
  newQuotes: number;
  totalContacts: number;
  newContacts: number;
  totalServiceRequests: number;
  newServiceRequests: number;
}

interface AnalyticsStats {
  totalViews: number;
  uniqueVisitors: number;
  todayViews: number;
  todayVisitors: number;
  topPages: { page: string; views: number }[];
  topReferrers: { referrer: string; count: number }[];
  locations: { country: string; count: number }[];
  devices: { device: string; count: number }[];
}

interface VisitorSession {
  id: string;
  sessionId: string;
  ipAddress: string;
  userAgent: string;
  country: string | null;
  city: string | null;
  referrer: string | null;
  firstPage: string;
  lastPage: string;
  pageCount: number;
  createdAt: string;
  lastSeenAt: string;
}

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "bg-blue-500" },
  { value: "in-progress", label: "In Progress", color: "bg-yellow-500" },
  { value: "quoted", label: "Quoted", color: "bg-green-500" },
  { value: "closed", label: "Closed", color: "bg-gray-500" },
];

const BLOG_CATEGORIES = [
  "Insurance Basics",
  "TNC & Rideshare",
  "NEMT",
  "Limousine",
  "Taxi",
  "Cost Savings",
  "Regulations",
  "Industry News",
];

const NEWS_CATEGORIES = [
  "Company News",
  "Product Launch",
  "Partnership",
  "Industry Update",
  "Award",
  "Event",
];

const CONTENT_SECTIONS = [
  { id: "homepage_hero", label: "Homepage Hero", description: "Main banner section on homepage" },
  { id: "homepage_about", label: "Homepage About", description: "About section on homepage" },
  { id: "homepage_cta", label: "Homepage CTA", description: "Call to action section" },
  { id: "about_intro", label: "About Page Intro", description: "Introduction on about page" },
  { id: "about_mission", label: "About Page Mission", description: "Mission statement" },
  { id: "services_intro", label: "Services Intro", description: "Services page introduction" },
  { id: "contact_info", label: "Contact Information", description: "Company contact details" },
  { id: "footer_tagline", label: "Footer Tagline", description: "Tagline in footer" },
];

const QUOTE_TYPE_LABELS: Record<string, string> = {
  limousine: "Limousine",
  rideshare: "Rideshare",
  tnc: "TNC",
  nemt: "NEMT",
  "public-auto": "Public Auto",
  taxi: "Taxi",
  "school-bus": "School Bus",
};

function getStatusBadge(status: string) {
  const statusConfig = STATUS_OPTIONS.find(s => s.value === status) || STATUS_OPTIONS[0];
  const icons: Record<string, React.ReactNode> = {
    new: <AlertCircle className="w-3 h-3 mr-1" />,
    "in-progress": <Clock className="w-3 h-3 mr-1" />,
    quoted: <CheckCircle className="w-3 h-3 mr-1" />,
    closed: <XCircle className="w-3 h-3 mr-1" />,
  };
  return (
    <Badge className={`${statusConfig.color} text-white flex items-center`}>
      {icons[status]}
      {statusConfig.label}
    </Badge>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export default function Admin() {
  const { toast } = useToast();
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [authChecking, setAuthChecking] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  
  // Sidebar navigation state
  const [activeSection, setActiveSection] = useState("dashboard");
  
  // Admin users state
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([]);
  const [showUserForm, setShowUserForm] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "agent",
    active: true,
  });
  
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newsReleases, setNewsReleases] = useState<NewsRelease[]>([]);
  const [siteContent, setSiteContent] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [quoteDetailsOpen, setQuoteDetailsOpen] = useState(false);
  const [selectedServiceRequest, setSelectedServiceRequest] = useState<ServiceRequest | null>(null);
  const [serviceDetailsOpen, setServiceDetailsOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [contactDetailsOpen, setContactDetailsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");
  
  // Blog form state
  const [blogDialogOpen, setBlogDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogForm, setBlogForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "InsureLimos Team",
    imageUrl: "",
    readTime: "",
    published: false,
  });
  const [generating, setGenerating] = useState(false);
  const [aiTopic, setAiTopic] = useState("");
  const [aiCategory, setAiCategory] = useState("");

  // Analytics state
  const [analyticsStats, setAnalyticsStats] = useState<AnalyticsStats | null>(null);
  const [recentSessions, setRecentSessions] = useState<VisitorSession[]>([]);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  // News form state
  const [newsDialogOpen, setNewsDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsRelease | null>(null);
  const [newsForm, setNewsForm] = useState({
    title: "",
    slug: "",
    summary: "",
    content: "",
    category: "",
    author: "InsureLimos",
    imageUrl: "",
    published: false,
    publishDate: new Date().toISOString().split('T')[0],
  });

  // Content form state
  const [contentDialogOpen, setContentDialogOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<string | null>(null);
  const [contentForm, setContentForm] = useState({
    section: "",
    title: "",
    subtitle: "",
    content: "",
    buttonText: "",
    buttonLink: "",
    imageUrl: "",
  });

  // Check authentication status
  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/status");
      const data = await res.json();
      setIsAuthenticated(data.isAuthenticated);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setAuthChecking(false);
    }
  };

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        setLoginEmail("");
        setLoginPassword("");
        toast({ title: "Welcome!", description: "You have successfully logged in." });
        fetchData();
      } else {
        setLoginError(data.error || "Invalid credentials");
      }
    } catch (error) {
      setLoginError("Login failed. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      setIsAuthenticated(false);
      setStats(null);
      setQuotes([]);
      setContacts([]);
      setServiceRequests([]);
      toast({ title: "Logged out", description: "You have been logged out successfully." });
    } catch (error) {
      toast({ title: "Error", description: "Logout failed", variant: "destructive" });
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, allRes, serviceRes, blogRes, newsRes, contentRes] = await Promise.all([
        fetch("/api/dashboard/stats"),
        fetch("/api/dashboard/all"),
        fetch("/api/service-requests"),
        fetch("/api/blog/all"),
        fetch("/api/news/all"),
        fetch("/api/site-content"),
      ]);
      
      // Check if any response is 401 (unauthorized)
      if (statsRes.status === 401 || allRes.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      
      const statsData = await statsRes.json();
      const allData = await allRes.json();
      const serviceData = await serviceRes.json();
      const blogData = await blogRes.json();
      const newsData = await newsRes.json();
      const contentData = await contentRes.json();
      
      if (statsData.success) setStats(statsData.stats);
      if (allData.success) {
        setQuotes(allData.data.quotes);
        setContacts(allData.data.contacts);
      }
      if (serviceData.success) setServiceRequests(serviceData.requests);
      if (blogData.success) setBlogPosts(blogData.posts);
      if (newsData.success) setNewsReleases(newsData.releases);
      if (contentData.success) setSiteContent(contentData.content);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  // Fetch analytics data
  const fetchAnalytics = async () => {
    setAnalyticsLoading(true);
    try {
      const [statsRes, sessionsRes] = await Promise.all([
        fetch("/api/analytics/stats"),
        fetch("/api/analytics/sessions?limit=50"),
      ]);
      
      if (statsRes.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      
      const statsData = await statsRes.json();
      const sessionsData = await sessionsRes.json();
      
      if (statsData.success) setAnalyticsStats(statsData.stats);
      if (sessionsData.success) setRecentSessions(sessionsData.sessions);
    } catch (error) {
      console.error("Failed to fetch analytics:", error);
      toast({
        title: "Error",
        description: "Failed to load analytics data",
        variant: "destructive",
      });
    } finally {
      setAnalyticsLoading(false);
    }
  };

  // Fetch analytics when analytics section is active
  useEffect(() => {
    if (isAuthenticated && activeSection === "analytics") {
      fetchAnalytics();
    }
  }, [isAuthenticated, activeSection]);

  const updateQuoteStatus = async (id: string, status: string, notes?: string) => {
    try {
      const response = await fetch(`/api/quotes/transport/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      
      if (response.ok) {
        toast({ title: "Status Updated", description: "Quote status has been updated." });
        fetchData();
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/contact/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        toast({ title: "Status Updated", description: "Contact status has been updated." });
        fetchData();
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  };

  const updateServiceRequestStatus = async (id: string, status: string, notes?: string) => {
    try {
      const response = await fetch(`/api/service-requests/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, notes }),
      });
      
      if (response.ok) {
        toast({ title: "Status Updated", description: "Service request status has been updated." });
        fetchData();
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to update status", variant: "destructive" });
    }
  };

  // Blog functions
  const resetBlogForm = () => {
    setBlogForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      author: "InsureLimos Team",
      imageUrl: "",
      readTime: "",
      published: false,
    });
    setEditingBlog(null);
    setAiTopic("");
    setAiCategory("");
  };

  const generateBlogWithAI = async () => {
    if (!aiTopic || !aiCategory) {
      toast({ title: "Error", description: "Please enter a topic and select a category", variant: "destructive" });
      return;
    }
    
    setGenerating(true);
    try {
      const response = await fetch("/api/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic, category: aiCategory }),
      });
      
      const data = await response.json();
      if (data.success) {
        setBlogForm({
          ...blogForm,
          title: data.generated.title,
          slug: slugify(data.generated.title),
          excerpt: data.generated.excerpt,
          content: data.generated.content,
          category: aiCategory,
          readTime: data.generated.readTime,
        });
        toast({ title: "Content Generated", description: "AI-generated blog post is ready for review." });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({ title: "Generation Failed", description: error.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const saveBlogPost = async () => {
    try {
      const url = editingBlog ? `/api/blog/${editingBlog.id}` : "/api/blog";
      const method = editingBlog ? "PATCH" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogForm),
      });
      
      const data = await response.json();
      if (data.success) {
        toast({ title: "Success", description: editingBlog ? "Blog post updated" : "Blog post created" });
        setBlogDialogOpen(false);
        resetBlogForm();
        fetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const deleteBlogPost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    
    try {
      const response = await fetch(`/api/blog/${id}`, { method: "DELETE" });
      if (response.ok) {
        toast({ title: "Deleted", description: "Blog post has been deleted" });
        fetchData();
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete post", variant: "destructive" });
    }
  };

  const editBlog = (post: BlogPost) => {
    setEditingBlog(post);
    setBlogForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      author: post.author,
      imageUrl: post.imageUrl || "",
      readTime: post.readTime || "",
      published: post.published,
    });
    setBlogDialogOpen(true);
  };

  // News functions
  const resetNewsForm = () => {
    setNewsForm({
      title: "",
      slug: "",
      summary: "",
      content: "",
      category: "",
      author: "InsureLimos",
      imageUrl: "",
      published: false,
      publishDate: new Date().toISOString().split('T')[0],
    });
    setEditingNews(null);
  };

  const generateNewsWithAI = async () => {
    if (!aiTopic || !aiCategory) {
      toast({ title: "Error", description: "Please enter a topic and select a category", variant: "destructive" });
      return;
    }
    
    setGenerating(true);
    try {
      const response = await fetch("/api/news/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic, category: aiCategory }),
      });
      
      const data = await response.json();
      if (data.success) {
        setNewsForm({
          ...newsForm,
          title: data.generated.title,
          slug: slugify(data.generated.title),
          summary: data.generated.summary,
          content: data.generated.content,
          category: aiCategory,
        });
        toast({ title: "Content Generated", description: "AI-generated news release is ready for review." });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({ title: "Generation Failed", description: error.message, variant: "destructive" });
    } finally {
      setGenerating(false);
    }
  };

  const saveNewsRelease = async () => {
    try {
      const url = editingNews ? `/api/news/${editingNews.id}` : "/api/news";
      const method = editingNews ? "PATCH" : "POST";
      
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newsForm),
      });
      
      const data = await response.json();
      if (data.success) {
        toast({ title: "Success", description: editingNews ? "News release updated" : "News release created" });
        setNewsDialogOpen(false);
        resetNewsForm();
        fetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const deleteNewsRelease = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news release?")) return;
    
    try {
      const response = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (response.ok) {
        toast({ title: "Deleted", description: "News release has been deleted" });
        fetchData();
      }
    } catch (error) {
      toast({ title: "Error", description: "Failed to delete release", variant: "destructive" });
    }
  };

  const editNews = (release: NewsRelease) => {
    setEditingNews(release);
    setNewsForm({
      title: release.title,
      slug: release.slug,
      summary: release.summary,
      content: release.content,
      category: release.category,
      author: release.author,
      imageUrl: release.imageUrl || "",
      published: release.published,
      publishDate: release.publishDate.split('T')[0],
    });
    setNewsDialogOpen(true);
  };

  // Content functions
  const resetContentForm = () => {
    setContentForm({
      section: "",
      title: "",
      subtitle: "",
      content: "",
      buttonText: "",
      buttonLink: "",
      imageUrl: "",
    });
    setEditingContent(null);
  };

  const editContent = (sectionId: string) => {
    const existing = siteContent.find(c => c.section === sectionId);
    setEditingContent(sectionId);
    setContentForm({
      section: sectionId,
      title: existing?.title || "",
      subtitle: existing?.subtitle || "",
      content: existing?.content || "",
      buttonText: existing?.buttonText || "",
      buttonLink: existing?.buttonLink || "",
      imageUrl: existing?.imageUrl || "",
    });
    setContentDialogOpen(true);
  };

  const saveContent = async () => {
    try {
      const response = await fetch("/api/site-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contentForm),
      });
      
      const data = await response.json();
      if (data.success) {
        toast({ title: "Success", description: "Content saved successfully" });
        setContentDialogOpen(false);
        resetContentForm();
        fetchData();
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    }
  };

  const getContentForSection = (sectionId: string) => {
    return siteContent.find(c => c.section === sectionId);
  };

  // Show loading while checking auth
  if (authChecking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login form when not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold text-primary">Admin Portal</CardTitle>
            <p className="text-muted-foreground mt-2">Sign in to access the admin dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm" data-testid="text-login-error">
                  {loginError}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@insurelimos.net"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="pl-10"
                    required
                    data-testid="input-login-email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="pl-10"
                    required
                    data-testid="input-login-password"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={loginLoading}
                data-testid="button-login-submit"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "leads", label: "Leads", icon: FileText },
    { id: "support", label: "Support", icon: Headphones },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "cms", label: "CMS", icon: FileEdit },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "press", label: "Press", icon: Newspaper },
    { id: "users", label: "Users", icon: Users },
    { id: "seo", label: "SEO", icon: Globe },
  ];

  const getLeadStatusCounts = () => {
    const counts = { new: 0, contacted: 0, inProgress: 0, converted: 0, lost: 0 };
    quotes.forEach(q => {
      if (q.status === "new") counts.new++;
      else if (q.status === "contacted") counts.contacted++;
      else if (q.status === "in-progress") counts.inProgress++;
      else if (q.status === "quoted" || q.status === "converted") counts.converted++;
      else if (q.status === "closed" || q.status === "lost") counts.lost++;
    });
    return counts;
  };

  const leadStatusCounts = getLeadStatusCounts();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a2744] text-white flex flex-col fixed h-screen">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-bold text-white">InsureLimos</h1>
          <p className="text-sm text-blue-300">Admin Portal</p>
        </div>
        
        <nav className="flex-1 py-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                activeSection === item.id 
                  ? "bg-orange-500 text-white" 
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
              data-testid={`nav-${item.id}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4 space-y-1">
          <p className="text-xs text-gray-400 px-2 mb-2">Admin</p>
          <button className="w-full flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors text-sm">
            <Key className="w-4 h-4" />
            <span>Change Password</span>
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-2 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors text-sm"
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Dashboard View */}
        {activeSection === "dashboard" && (
          <div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide" data-testid="text-admin-title">
                Welcome Back, {adminName || "Admin"}
              </h1>
              <p className="text-muted-foreground">Here's what's happening with your leads today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Leads</p>
                      <p className="text-4xl font-bold text-gray-800" data-testid="text-total-quotes">{stats?.totalQuotes || 0}</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">This Week</p>
                      <p className="text-4xl font-bold text-gray-800">{stats?.newQuotes || 0}</p>
                    </div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">This Month</p>
                      <p className="text-4xl font-bold text-gray-800">{stats?.totalQuotes || 0}</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Converted</p>
                      <p className="text-4xl font-bold text-gray-800">{leadStatusCounts.converted}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lead Status Breakdown and Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Lead Status Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-gray-700">New</span>
                    </div>
                    <span className="font-semibold text-gray-800">{leadStatusCounts.new}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-gray-700">Contacted</span>
                    </div>
                    <span className="font-semibold text-gray-800">{leadStatusCounts.contacted}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-pink-500" />
                      <span className="text-gray-700">In Progress</span>
                    </div>
                    <span className="font-semibold text-gray-800">{leadStatusCounts.inProgress}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-gray-700">Converted</span>
                    </div>
                    <span className="font-semibold text-gray-800">{leadStatusCounts.converted}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-gray-700">Lost</span>
                    </div>
                    <span className="font-semibold text-gray-800">{leadStatusCounts.lost}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    onClick={() => setActiveSection("leads")} 
                    className="w-full justify-start bg-[#1a2744] hover:bg-[#243352] text-white"
                  >
                    View All Leads
                  </Button>
                  <Button 
                    onClick={() => setActiveSection("leads")} 
                    variant="ghost" 
                    className="w-full justify-start text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                  >
                    View New Leads ({stats?.newQuotes || 0})
                  </Button>
                  <Button 
                    onClick={() => setActiveSection("cms")} 
                    variant="ghost" 
                    className="w-full justify-start text-gray-700 hover:bg-gray-100"
                  >
                    Manage Website Content
                  </Button>
                  <Button 
                    onClick={fetchData} 
                    variant="outline" 
                    className="w-full justify-start"
                    data-testid="button-refresh"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                    Refresh Data
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Leads Section (formerly Quotes) */}
        {activeSection === "leads" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
                <p className="text-muted-foreground">View and manage all quote submissions</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Quote Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                {quotes.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No quote submissions yet</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Reference #</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Business</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>State</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {quotes.map((quote) => (
                          <TableRow key={quote.id} data-testid={`row-quote-${quote.id}`}>
                            <TableCell className="font-mono font-bold text-primary">
                              {quote.referenceNumber}
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col gap-1">
                                <Badge variant="outline">
                                  {QUOTE_TYPE_LABELS[quote.quoteType] || quote.quoteType}
                                </Badge>
                                {quote.additionalInfo?.includes("advertising landing page") && (
                                  <Badge className="bg-purple-500 text-white text-xs">
                                    Ad Lead
                                  </Badge>
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-muted-foreground" />
                                {quote.insuredName}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col gap-1 text-sm">
                                <span>{quote.contactName}</span>
                                <a href={`mailto:${quote.contactEmail}`} className="text-primary hover:underline flex items-center gap-1">
                                  <Mail className="w-3 h-3" />
                                  {quote.contactEmail}
                                </a>
                              </div>
                            </TableCell>
                            <TableCell>{quote.state}</TableCell>
                            <TableCell>
                              <Select
                                defaultValue={quote.status}
                                onValueChange={(value) => updateQuoteStatus(quote.id, value)}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {STATUS_OPTIONS.map((opt) => (
                                    <SelectItem key={opt.value} value={opt.value}>
                                      <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 rounded-full ${opt.color}`} />
                                        {opt.label}
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell className="text-sm text-muted-foreground">
                              {format(new Date(quote.createdAt), "MMM d, yyyy")}
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => { setSelectedQuote(quote); setQuoteDetailsOpen(true); }}
                                data-testid={`button-view-quote-${quote.id}`}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Support Section (Service Requests + Contacts) */}
        {activeSection === "support" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Support Center</h1>
                <p className="text-muted-foreground">Manage service requests and contact messages</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            
            <Tabs defaultValue="services" className="space-y-4">
              <TabsList>
                <TabsTrigger value="services">
                  <Wrench className="w-4 h-4 mr-2" />
                  Service Requests ({serviceRequests.length})
                </TabsTrigger>
                <TabsTrigger value="contacts">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Messages ({contacts.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Client Service Requests</CardTitle>
              </CardHeader>
              <CardContent>
                {serviceRequests.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No service requests yet</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Request Type</TableHead>
                          <TableHead>Policy #</TableHead>
                          <TableHead>Insured</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Details</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {serviceRequests.map((request) => (
                          <TableRow key={request.id} data-testid={`row-service-${request.id}`}>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">
                                {request.requestType?.replace(/-/g, ' ') || 'General'}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-mono font-bold text-primary">
                              {request.policyNumber}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-muted-foreground" />
                                {request.insuredName}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="font-medium">{request.contactName}</div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Mail className="w-3 h-3" />
                                  <a href={`mailto:${request.email}`}>{request.email}</a>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Phone className="w-3 h-3" />
                                  {request.phone}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="max-w-xs">
                              <p className="truncate" title={request.details}>{request.details}</p>
                            </TableCell>
                            <TableCell>{getStatusBadge(request.status)}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-sm">
                                <Calendar className="w-3 h-3" />
                                {format(new Date(request.createdAt), "MMM d, yyyy")}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedServiceRequest(request);
                                    setServiceDetailsOpen(true);
                                  }}
                                  data-testid={`button-view-service-${request.id}`}
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                <Select
                                  value={request.status}
                                  onValueChange={(value) => updateServiceRequestStatus(request.id, value)}
                                >
                                  <SelectTrigger className="w-28">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {STATUS_OPTIONS.map((option) => (
                                      <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                {contacts.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No contact messages yet</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Phone</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {contacts.map((contact) => (
                          <TableRow key={contact.id}>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>
                              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                                {contact.email}
                              </a>
                            </TableCell>
                            <TableCell>{contact.phone}</TableCell>
                            <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                            <TableCell>{getStatusBadge(contact.status)}</TableCell>
                            <TableCell>{format(new Date(contact.createdAt), "MMM d, yyyy")}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    setSelectedContact(contact);
                                    setContactDetailsOpen(true);
                                  }}
                                  data-testid={`button-view-contact-${contact.id}`}
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  View
                                </Button>
                                <Select
                                  value={contact.status}
                                  onValueChange={(value) => updateContactStatus(contact.id, value)}
                                >
                                  <SelectTrigger className="w-28">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {STATUS_OPTIONS.map((option) => (
                                      <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Analytics Section */}
        {activeSection === "analytics" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Website Analytics</h1>
                <p className="text-muted-foreground">Track visitor activity and page performance</p>
              </div>
              <Button onClick={fetchAnalytics} variant="outline" data-testid="button-refresh-analytics">
                <RefreshCw className={`w-4 h-4 mr-2 ${analyticsLoading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>

            {/* Analytics Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Total Page Views</p>
                      <p className="text-4xl font-bold text-gray-800" data-testid="text-total-views">
                        {analyticsStats?.totalViews || 0}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Unique Visitors</p>
                      <p className="text-4xl font-bold text-gray-800" data-testid="text-unique-visitors">
                        {analyticsStats?.uniqueVisitors || 0}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Today's Views</p>
                      <p className="text-4xl font-bold text-gray-800" data-testid="text-today-views">
                        {analyticsStats?.todayViews || 0}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Today's Visitors</p>
                      <p className="text-4xl font-bold text-gray-800" data-testid="text-today-visitors">
                        {analyticsStats?.todayVisitors || 0}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Pages and Referrers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Top Pages</CardTitle>
                </CardHeader>
                <CardContent>
                  {analyticsStats?.topPages && analyticsStats.topPages.length > 0 ? (
                    <div className="space-y-3">
                      {analyticsStats.topPages.slice(0, 10).map((page, index) => (
                        <div key={page.page} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400 w-6">{index + 1}.</span>
                            <span className="text-sm font-medium truncate max-w-[200px]" title={page.page}>
                              {page.page}
                            </span>
                          </div>
                          <Badge variant="secondary">{page.views} views</Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No page view data yet</p>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Top Referrers</CardTitle>
                </CardHeader>
                <CardContent>
                  {analyticsStats?.topReferrers && analyticsStats.topReferrers.length > 0 ? (
                    <div className="space-y-3">
                      {analyticsStats.topReferrers.slice(0, 10).map((ref, index) => (
                        <div key={ref.referrer} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400 w-6">{index + 1}.</span>
                            <span className="text-sm font-medium truncate max-w-[200px]" title={ref.referrer}>
                              {ref.referrer || "Direct"}
                            </span>
                          </div>
                          <Badge variant="secondary">{ref.count} visits</Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No referrer data yet</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Locations and Devices */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Visitor Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {analyticsStats?.locations && analyticsStats.locations.length > 0 ? (
                    <div className="space-y-3">
                      {analyticsStats.locations.slice(0, 10).map((loc, index) => (
                        <div key={loc.country} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400 w-6">{index + 1}.</span>
                            <span className="text-sm font-medium">{loc.country || "Unknown"}</span>
                          </div>
                          <Badge variant="outline">{loc.count} visitors</Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No location data yet</p>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Device Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {analyticsStats?.devices && analyticsStats.devices.length > 0 ? (
                    <div className="space-y-4">
                      {analyticsStats.devices.map((device) => {
                        const total = analyticsStats.devices.reduce((sum, d) => sum + d.count, 0);
                        const percentage = total > 0 ? Math.round((device.count / total) * 100) : 0;
                        return (
                          <div key={device.device}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium flex items-center gap-2">
                                {device.device === "Mobile" ? (
                                  <Smartphone className="w-4 h-4" />
                                ) : (
                                  <Monitor className="w-4 h-4" />
                                )}
                                {device.device}
                              </span>
                              <span className="text-sm text-gray-500">{device.count} ({percentage}%)</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${device.device === "Mobile" ? "bg-blue-500" : "bg-green-500"}`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No device data yet</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Recent Visitors */}
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Recent Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                {recentSessions.length > 0 ? (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Pages</TableHead>
                          <TableHead>Entry Page</TableHead>
                          <TableHead>Referrer</TableHead>
                          <TableHead>Device</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentSessions.slice(0, 20).map((session) => {
                          const isMobile = session.userAgent?.toLowerCase().includes("mobile");
                          return (
                            <TableRow key={session.id} data-testid={`row-session-${session.id}`}>
                              <TableCell className="text-sm text-muted-foreground">
                                {format(new Date(session.createdAt), "MMM d, h:mm a")}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-muted-foreground" />
                                  <span className="text-sm">
                                    {session.city && session.country
                                      ? `${session.city}, ${session.country}`
                                      : session.country || "Unknown"}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">{session.pageCount}</Badge>
                              </TableCell>
                              <TableCell className="text-sm max-w-[150px] truncate" title={session.firstPage}>
                                {session.firstPage}
                              </TableCell>
                              <TableCell className="text-sm max-w-[150px] truncate" title={session.referrer || "Direct"}>
                                {session.referrer || "Direct"}
                              </TableCell>
                              <TableCell>
                                {isMobile ? (
                                  <Smartphone className="w-4 h-4 text-blue-500" />
                                ) : (
                                  <Monitor className="w-4 h-4 text-green-500" />
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground py-8">No visitor sessions recorded yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* CMS Section */}
        {activeSection === "cms" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Content Management</h1>
                <p className="text-muted-foreground">Edit the text and content that appears across your website</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Site Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CONTENT_SECTIONS.map((section) => {
                    const content = getContentForSection(section.id);
                    return (
                      <Card key={section.id} className="border">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">{section.label}</CardTitle>
                            <Button variant="outline" size="sm" onClick={() => editContent(section.id)}>
                              <Edit className="w-4 h-4 mr-1" />
                              Edit
                            </Button>
                          </div>
                          <p className="text-xs text-muted-foreground">{section.description}</p>
                        </CardHeader>
                        <CardContent>
                          {content ? (
                            <div className="space-y-1 text-sm">
                              {content.title && <p><strong>Title:</strong> {content.title}</p>}
                              {content.subtitle && <p><strong>Subtitle:</strong> {content.subtitle}</p>}
                              {content.content && (
                                <p className="text-muted-foreground line-clamp-2">{content.content.replace(/<[^>]*>/g, '').slice(0, 100)}...</p>
                              )}
                              <p className="text-xs text-muted-foreground mt-2">
                                Last updated: {format(new Date(content.updatedAt), "MMM d, yyyy")}
                              </p>
                            </div>
                          ) : (
                            <p className="text-sm text-muted-foreground italic">No content set yet</p>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Blog Section */}
        {activeSection === "blog" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
                <p className="text-muted-foreground">Create and manage blog posts for your website</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Blog Posts</CardTitle>
                <Dialog open={blogDialogOpen} onOpenChange={(open) => {
                  setBlogDialogOpen(open);
                  if (!open) resetBlogForm();
                }}>
                  <DialogTrigger asChild>
                    <Button data-testid="button-new-blog">
                      <Plus className="w-4 h-4 mr-2" />
                      New Post
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{editingBlog ? "Edit Blog Post" : "Create Blog Post"}</DialogTitle>
                      <DialogDescription>Create or edit a blog post for your website</DialogDescription>
                    </DialogHeader>
                    
                    {/* AI Generation Section */}
                    <div className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-blue-50">
                      <h4 className="font-semibold flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        Generate with AI
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="md:col-span-2">
                          <Input
                            placeholder="Enter topic (e.g., 'Tips for reducing fleet insurance costs')"
                            value={aiTopic}
                            onChange={(e) => setAiTopic(e.target.value)}
                          />
                        </div>
                        <Select value={aiCategory} onValueChange={setAiCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {BLOG_CATEGORIES.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button 
                        onClick={generateBlogWithAI} 
                        disabled={generating}
                        className="mt-3"
                        variant="secondary"
                      >
                        {generating ? (
                          <>
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate Content
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Title</Label>
                          <Input
                            value={blogForm.title}
                            onChange={(e) => {
                              setBlogForm({ ...blogForm, title: e.target.value, slug: slugify(e.target.value) });
                            }}
                            placeholder="Blog post title"
                          />
                        </div>
                        <div>
                          <Label>Slug</Label>
                          <Input
                            value={blogForm.slug}
                            onChange={(e) => setBlogForm({ ...blogForm, slug: e.target.value })}
                            placeholder="url-friendly-slug"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Category</Label>
                          <Select value={blogForm.category} onValueChange={(v) => setBlogForm({ ...blogForm, category: v })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {BLOG_CATEGORIES.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Read Time</Label>
                          <Input
                            value={blogForm.readTime}
                            onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                            placeholder="5 min read"
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Excerpt</Label>
                        <Textarea
                          value={blogForm.excerpt}
                          onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                          placeholder="Brief summary of the post"
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label>Content (HTML)</Label>
                        <Textarea
                          value={blogForm.content}
                          onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                          placeholder="<h2>Introduction</h2><p>Content here...</p>"
                          rows={12}
                          className="font-mono text-sm"
                        />
                      </div>

                      <div>
                        <Label>Image URL</Label>
                        <Input
                          value={blogForm.imageUrl}
                          onChange={(e) => setBlogForm({ ...blogForm, imageUrl: e.target.value })}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <Switch
                          checked={blogForm.published}
                          onCheckedChange={(checked) => setBlogForm({ ...blogForm, published: checked })}
                        />
                        <Label>Published</Label>
                      </div>
                    </div>

                    <DialogFooter>
                      <Button variant="outline" onClick={() => setBlogDialogOpen(false)}>Cancel</Button>
                      <Button onClick={saveBlogPost}>
                        {editingBlog ? "Update Post" : "Create Post"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {blogPosts.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No blog posts yet. Create your first post!</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Created</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {blogPosts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell className="font-medium">{post.title}</TableCell>
                            <TableCell><Badge variant="outline">{post.category}</Badge></TableCell>
                            <TableCell>
                              <Badge className={post.published ? "bg-green-500" : "bg-gray-400"}>
                                {post.published ? "Published" : "Draft"}
                              </Badge>
                            </TableCell>
                            <TableCell>{format(new Date(post.createdAt), "MMM d, yyyy")}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => editBlog(post)}>
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => deleteBlogPost(post.id)}>
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Press Section */}
        {activeSection === "press" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Press & News</h1>
                <p className="text-muted-foreground">Manage news releases and press announcements</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>News Releases</CardTitle>
                <Dialog open={newsDialogOpen} onOpenChange={(open) => {
                  setNewsDialogOpen(open);
                  if (!open) resetNewsForm();
                }}>
                  <DialogTrigger asChild>
                    <Button data-testid="button-new-news">
                      <Plus className="w-4 h-4 mr-2" />
                      New Release
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>{editingNews ? "Edit News Release" : "Create News Release"}</DialogTitle>
                      <DialogDescription>Create or edit a news release for your website</DialogDescription>
                    </DialogHeader>
                    
                    <div className="border rounded-lg p-4 bg-gradient-to-r from-purple-50 to-blue-50">
                      <h4 className="font-semibold flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        Generate with AI
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="md:col-span-2">
                          <Input
                            placeholder="Enter topic (e.g., 'New partnership with major carrier')"
                            value={aiTopic}
                            onChange={(e) => setAiTopic(e.target.value)}
                          />
                        </div>
                        <Select value={aiCategory} onValueChange={setAiCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Category" />
                          </SelectTrigger>
                          <SelectContent>
                            {NEWS_CATEGORIES.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button 
                        onClick={generateNewsWithAI} 
                        disabled={generating}
                        className="mt-3"
                        variant="secondary"
                      >
                        {generating ? (
                          <>
                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate Content
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="space-y-4 mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Title</Label>
                          <Input
                            value={newsForm.title}
                            onChange={(e) => {
                              setNewsForm({ ...newsForm, title: e.target.value, slug: slugify(e.target.value) });
                            }}
                            placeholder="News headline"
                          />
                        </div>
                        <div>
                          <Label>Slug</Label>
                          <Input
                            value={newsForm.slug}
                            onChange={(e) => setNewsForm({ ...newsForm, slug: e.target.value })}
                            placeholder="url-friendly-slug"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Category</Label>
                          <Select value={newsForm.category} onValueChange={(v) => setNewsForm({ ...newsForm, category: v })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {NEWS_CATEGORIES.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Publish Date</Label>
                          <Input
                            type="date"
                            value={newsForm.publishDate}
                            onChange={(e) => setNewsForm({ ...newsForm, publishDate: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <Label>Summary</Label>
                        <Textarea
                          value={newsForm.summary}
                          onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                          placeholder="Brief summary of the news release"
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label>Content (HTML)</Label>
                        <Textarea
                          value={newsForm.content}
                          onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                          placeholder="<p>LOS ANGELES, CA - December 2024...</p>"
                          rows={12}
                          className="font-mono text-sm"
                        />
                      </div>

                      <div>
                        <Label>Image URL</Label>
                        <Input
                          value={newsForm.imageUrl}
                          onChange={(e) => setNewsForm({ ...newsForm, imageUrl: e.target.value })}
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <Switch
                          checked={newsForm.published}
                          onCheckedChange={(checked) => setNewsForm({ ...newsForm, published: checked })}
                        />
                        <Label>Published</Label>
                      </div>
                    </div>

                    <DialogFooter>
                      <Button variant="outline" onClick={() => setNewsDialogOpen(false)}>Cancel</Button>
                      <Button onClick={saveNewsRelease}>
                        {editingNews ? "Update Release" : "Create Release"}
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {newsReleases.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No news releases yet. Create your first release!</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Publish Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {newsReleases.map((release) => (
                          <TableRow key={release.id}>
                            <TableCell className="font-medium">{release.title}</TableCell>
                            <TableCell><Badge variant="outline">{release.category}</Badge></TableCell>
                            <TableCell>
                              <Badge className={release.published ? "bg-green-500" : "bg-gray-400"}>
                                {release.published ? "Published" : "Draft"}
                              </Badge>
                            </TableCell>
                            <TableCell>{format(new Date(release.publishDate), "MMM d, yyyy")}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" onClick={() => editNews(release)}>
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" onClick={() => deleteNewsRelease(release.id)}>
                                  <Trash2 className="w-4 h-4 text-red-500" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Section */}
        {activeSection === "users" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
                <p className="text-muted-foreground">Manage admin users and access permissions</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Admin Users</CardTitle>
                <Button data-testid="button-new-user">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </CardHeader>
              <CardContent>
                {adminUsers.length === 0 ? (
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No admin users configured yet.</p>
                    <p className="text-sm text-muted-foreground mt-2">Add users to manage access to the admin portal.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Login</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {adminUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="font-medium">{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">{user.role}</Badge>
                            </TableCell>
                            <TableCell>
                              <Badge className={user.active ? "bg-green-500" : "bg-gray-400"}>
                                {user.active ? "Active" : "Inactive"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {user.lastLogin ? format(new Date(user.lastLogin), "MMM d, yyyy") : "Never"}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* SEO Section */}
        {activeSection === "seo" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">SEO Tools</h1>
                <p className="text-muted-foreground">Manage search engine optimization and indexing</p>
              </div>
              <Button onClick={fetchData} variant="outline">
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            <Card className="bg-white border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Search Engine Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">URL Submission APIs</h3>
                  <p className="text-blue-800 text-sm mb-4">
                    Submit your pages to search engines for faster indexing. This uses both IndexNow (for Google, Yandex, Bing) 
                    and Bing's direct URL Submission API for maximum coverage.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={async () => {
                        try {
                          const response = await fetch("/api/admin/submit-urls", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            credentials: "include",
                          });
                          const data = await response.json();
                          if (data.success) {
                            toast({
                              title: "URLs Submitted",
                              description: `All site pages submitted. IndexNow: ${data.indexNow ? '✓' : '✗'}, Bing: ${data.bing ? '✓' : '✗'}`,
                            });
                          } else {
                            throw new Error(data.error);
                          }
                        } catch (error: any) {
                          toast({
                            title: "Submission Failed",
                            description: error.message || "Failed to submit URLs",
                            variant: "destructive",
                          });
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                      data-testid="button-submit-all-urls"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit All Site Pages
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Search className="w-4 h-4" />
                        IndexNow
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        IndexNow is supported by Google, Bing, Yandex, and others. New blog/news posts are 
                        automatically submitted when published.
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">Active</Badge>
                        <span className="text-xs text-muted-foreground">Auto-submits new content</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Bing Webmaster API
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Direct URL submission to Bing's index. Allows up to 10,000 URLs per day for faster 
                        Bing indexing.
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500">Active</Badge>
                        <span className="text-xs text-muted-foreground">API key configured</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Quick Links</h3>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://www.bing.com/webmasters" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Bing Webmaster Tools
                    </a>
                    <a 
                      href="https://search.google.com/search-console" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Google Search Console
                    </a>
                    <a 
                      href="/sitemap.xml" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Sitemap
                    </a>
                    <a 
                      href="/robots.txt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Robots.txt
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quote Details Dialog */}
        <Dialog open={quoteDetailsOpen} onOpenChange={setQuoteDetailsOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">
                Quote Details - {selectedQuote?.referenceNumber}
              </DialogTitle>
              <DialogDescription>
                {QUOTE_TYPE_LABELS[selectedQuote?.quoteType || ''] || selectedQuote?.quoteType} | 
                Submitted {selectedQuote?.createdAt && format(new Date(selectedQuote.createdAt), "MMMM d, yyyy 'at' h:mm a")}
              </DialogDescription>
            </DialogHeader>
            {selectedQuote && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Business Information</h3>
                    <DetailRow label="Business Name" value={selectedQuote.insuredName} />
                    <DetailRow label="Address" value={selectedQuote.address} />
                    <DetailRow label="Garaging Address" value={selectedQuote.garagingAddress} />
                    <DetailRow label="State" value={selectedQuote.state} />
                    <DetailRow label="Years in Business" value={selectedQuote.yearsInBusiness} />
                    <DetailRow label="DOT Number" value={selectedQuote.dotNumber} />
                    <DetailRow label="MC Number" value={selectedQuote.mcNumber} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Contact Information</h3>
                    <DetailRow label="Contact Name" value={selectedQuote.contactName} />
                    <DetailRow label="Email" value={selectedQuote.contactEmail} isEmail />
                    <DetailRow label="Phone" value={selectedQuote.contactPhone} isPhone />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Policy Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <DetailRow label="Effective Date" value={selectedQuote.effectiveDate} />
                    <DetailRow label="Expiration Date" value={selectedQuote.expirationDate} />
                    <DetailRow label="Current Carrier" value={selectedQuote.currentCarrier} />
                    <DetailRow label="Current Premium" value={selectedQuote.currentPremium} />
                    <DetailRow label="Liability Limit" value={selectedQuote.liabilityLimit} />
                    <DetailRow label="Operating Radius" value={selectedQuote.operatingRadius} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Coverage Requirements</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CoverageItem label="Auto Liability" checked={selectedQuote.hasAutoLiability} />
                    <CoverageItem label="Physical Damage" checked={selectedQuote.hasPhysicalDamage} />
                    <CoverageItem label="Workers Comp" checked={selectedQuote.hasWorkersComp} />
                    <CoverageItem label="General Liability" checked={selectedQuote.hasGeneralLiability} />
                    <CoverageItem label="Umbrella" checked={selectedQuote.hasUmbrella} />
                    <CoverageItem label="Inland Marine" checked={selectedQuote.hasInlandMarine} />
                    <CoverageItem label="Med Pay" checked={selectedQuote.hasMedPay} />
                  </div>
                  {selectedQuote.statesOfOperation && selectedQuote.statesOfOperation.length > 0 && (
                    <DetailRow label="States of Operation" value={selectedQuote.statesOfOperation.join(', ')} />
                  )}
                  {selectedQuote.filingsNeeded && selectedQuote.filingsNeeded.length > 0 && (
                    <DetailRow label="Filings Needed" value={selectedQuote.filingsNeeded.join(', ')} />
                  )}
                </div>

                {selectedQuote.vehicles && (
                  (() => {
                    const vehiclesArr = typeof selectedQuote.vehicles === 'string' 
                      ? JSON.parse(selectedQuote.vehicles) 
                      : selectedQuote.vehicles;
                    return vehiclesArr && vehiclesArr.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Vehicles ({vehiclesArr.length})</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead>Make</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>VIN</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Seating</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {vehiclesArr.map((v: any, i: number) => (
                            <TableRow key={i}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell>{v.year || '-'}</TableCell>
                              <TableCell>{v.make || '-'}</TableCell>
                              <TableCell>{v.model || '-'}</TableCell>
                              <TableCell className="font-mono text-xs">{v.vin || '-'}</TableCell>
                              <TableCell>{v.value ? `$${v.value}` : '-'}</TableCell>
                              <TableCell>{v.seatingCapacity || v.passengers || '-'}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                    ) : null;
                  })()
                )}

                {selectedQuote.drivers && (
                  (() => {
                    const driversArr = typeof selectedQuote.drivers === 'string' 
                      ? JSON.parse(selectedQuote.drivers) 
                      : selectedQuote.drivers;
                    return driversArr && driversArr.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2">Drivers ({driversArr.length})</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>DOB</TableHead>
                            <TableHead>License #</TableHead>
                            <TableHead>State</TableHead>
                            <TableHead>Experience</TableHead>
                            <TableHead>Violations</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {driversArr.map((d: any, i: number) => (
                            <TableRow key={i}>
                              <TableCell>{i + 1}</TableCell>
                              <TableCell>{d.name || `${d.firstName || ''} ${d.lastName || ''}`.trim() || '-'}</TableCell>
                              <TableCell>{d.dateOfBirth || d.dob || '-'}</TableCell>
                              <TableCell className="font-mono text-xs">{d.licenseNumber || d.license || '-'}</TableCell>
                              <TableCell>{d.licenseState || d.state || '-'}</TableCell>
                              <TableCell>{d.yearsExperience || d.experience || '-'} yrs</TableCell>
                              <TableCell>{d.violations || d.accidents || '0'}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                    ) : null;
                  })()
                )}

                {selectedQuote.lossHistory && (
                  (() => {
                    const lossArr = typeof selectedQuote.lossHistory === 'string' 
                      ? JSON.parse(selectedQuote.lossHistory) 
                      : selectedQuote.lossHistory;
                    return lossArr && lossArr.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg border-b pb-2 text-red-600">Loss History</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-red-50">
                            <TableHead>Date</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {lossArr.map((l: any, i: number) => (
                            <TableRow key={i}>
                              <TableCell>{l.date || l.lossDate || '-'}</TableCell>
                              <TableCell>{l.type || l.lossType || '-'}</TableCell>
                              <TableCell>{l.description || '-'}</TableCell>
                              <TableCell>{l.amount ? `$${l.amount}` : '-'}</TableCell>
                              <TableCell>{l.status || 'Closed'}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                    ) : null;
                  })()
                )}

                {selectedQuote.notes && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg border-b pb-2">Additional Notes</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{selectedQuote.notes}</p>
                  </div>
                )}

                {selectedQuote.uploadedDocuments && selectedQuote.uploadedDocuments.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg border-b pb-2">Uploaded Documents</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedQuote.uploadedDocuments.map((doc: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-sm">
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Status: </span>
                    {getStatusBadge(selectedQuote.status)}
                  </div>
                  <Select
                    value={selectedQuote.status}
                    onValueChange={(value) => {
                      updateQuoteStatus(selectedQuote.id, value);
                      setSelectedQuote({ ...selectedQuote, status: value });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Service Request Details Dialog */}
        <Dialog open={serviceDetailsOpen} onOpenChange={setServiceDetailsOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">
                Service Request Details
              </DialogTitle>
              <DialogDescription>
                {selectedServiceRequest?.requestType?.replace(/-/g, ' ').replace(/_/g, ' ')} | 
                Submitted {selectedServiceRequest?.createdAt && format(new Date(selectedServiceRequest.createdAt), "MMMM d, yyyy 'at' h:mm a")}
              </DialogDescription>
            </DialogHeader>
            {selectedServiceRequest && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Policy Information</h3>
                  <DetailRow label="Policy Number" value={selectedServiceRequest.policyNumber} />
                  <DetailRow label="Named Insured" value={selectedServiceRequest.insuredName} />
                  <DetailRow label="Effective Date" value={selectedServiceRequest.effectiveDate} />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Contact Information</h3>
                  <DetailRow label="Contact Name" value={selectedServiceRequest.contactName} />
                  <DetailRow label="Email" value={selectedServiceRequest.email} isEmail />
                  <DetailRow label="Phone" value={selectedServiceRequest.phone} isPhone />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Request Details</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedServiceRequest.details}</p>
                  </div>
                </div>

                {selectedServiceRequest.additionalInfo && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg border-b pb-2">Additional Information</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{selectedServiceRequest.additionalInfo}</p>
                  </div>
                )}

                {selectedServiceRequest.notes && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg border-b pb-2">Admin Notes</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{selectedServiceRequest.notes}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Status: </span>
                    {getStatusBadge(selectedServiceRequest.status)}
                  </div>
                  <Select
                    value={selectedServiceRequest.status}
                    onValueChange={(value) => {
                      updateServiceRequestStatus(selectedServiceRequest.id, value);
                      setSelectedServiceRequest({ ...selectedServiceRequest, status: value });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Contact Message Details Dialog */}
        <Dialog open={contactDetailsOpen} onOpenChange={setContactDetailsOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">
                Contact Message Details
              </DialogTitle>
              <DialogDescription>
                Submitted {selectedContact?.createdAt && format(new Date(selectedContact.createdAt), "MMMM d, yyyy 'at' h:mm a")}
              </DialogDescription>
            </DialogHeader>
            {selectedContact && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Contact Information</h3>
                  <DetailRow label="Name" value={selectedContact.name} />
                  <DetailRow label="Email" value={selectedContact.email} isEmail />
                  <DetailRow label="Phone" value={selectedContact.phone} isPhone />
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Message</h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                </div>

                {selectedContact.notes && (
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg border-b pb-2">Admin Notes</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap">{selectedContact.notes}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-muted-foreground">Status: </span>
                    {getStatusBadge(selectedContact.status)}
                  </div>
                  <Select
                    value={selectedContact.status}
                    onValueChange={(value) => {
                      updateContactStatus(selectedContact.id, value);
                      setSelectedContact({ ...selectedContact, status: value });
                    }}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Content Edit Dialog */}
        <Dialog open={contentDialogOpen} onOpenChange={(open) => {
          setContentDialogOpen(open);
          if (!open) resetContentForm();
        }}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                Edit {CONTENT_SECTIONS.find(s => s.id === editingContent)?.label}
              </DialogTitle>
              <DialogDescription>
                Update the content for this section of your website
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={contentForm.title}
                  onChange={(e) => setContentForm({ ...contentForm, title: e.target.value })}
                  placeholder="Section title"
                />
              </div>
              
              <div>
                <Label>Subtitle</Label>
                <Input
                  value={contentForm.subtitle}
                  onChange={(e) => setContentForm({ ...contentForm, subtitle: e.target.value })}
                  placeholder="Section subtitle"
                />
              </div>

              <div>
                <Label>Content (HTML supported)</Label>
                <Textarea
                  value={contentForm.content}
                  onChange={(e) => setContentForm({ ...contentForm, content: e.target.value })}
                  placeholder="Main content..."
                  rows={6}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Button Text</Label>
                  <Input
                    value={contentForm.buttonText}
                    onChange={(e) => setContentForm({ ...contentForm, buttonText: e.target.value })}
                    placeholder="Get a Quote"
                  />
                </div>
                <div>
                  <Label>Button Link</Label>
                  <Input
                    value={contentForm.buttonLink}
                    onChange={(e) => setContentForm({ ...contentForm, buttonLink: e.target.value })}
                    placeholder="/quote"
                  />
                </div>
              </div>

              <div>
                <Label>Image URL</Label>
                <Input
                  value={contentForm.imageUrl}
                  onChange={(e) => setContentForm({ ...contentForm, imageUrl: e.target.value })}
                  placeholder="https://..."
                />
              </div>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => setContentDialogOpen(false)}>Cancel</Button>
              <Button onClick={saveContent}>
                <Save className="w-4 h-4 mr-2" />
                Save Content
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}

function DetailRow({ label, value, isEmail, isPhone }: { label: string; value: any; isEmail?: boolean; isPhone?: boolean }) {
  if (!value) return null;
  
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      {isEmail ? (
        <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a>
      ) : isPhone ? (
        <a href={`tel:${value}`} className="text-primary hover:underline">{value}</a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

function CoverageItem({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {checked ? (
        <CheckCircle className="w-4 h-4 text-green-500" />
      ) : (
        <XCircle className="w-4 h-4 text-gray-300" />
      )}
      <span className={checked ? "font-medium" : "text-muted-foreground"}>{label}</span>
    </div>
  );
}
