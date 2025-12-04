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
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
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
  AlertCircle
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
  serviceType: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  description: string | null;
  status: string;
  notes: string | null;
  createdAt: string;
}

interface DashboardStats {
  totalQuotes: number;
  newQuotes: number;
  totalContacts: number;
  newContacts: number;
  totalServiceRequests: number;
  newServiceRequests: number;
}

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "bg-blue-500" },
  { value: "in-progress", label: "In Progress", color: "bg-yellow-500" },
  { value: "quoted", label: "Quoted", color: "bg-green-500" },
  { value: "closed", label: "Closed", color: "bg-gray-500" },
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

export default function Admin() {
  const { toast } = useToast();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [noteText, setNoteText] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, allRes] = await Promise.all([
        fetch("/api/dashboard/stats"),
        fetch("/api/dashboard/all"),
      ]);
      
      const statsData = await statsRes.json();
      const allData = await allRes.json();
      
      if (statsData.success) setStats(statsData.stats);
      if (allData.success) {
        setQuotes(allData.data.quotes);
        setContacts(allData.data.contacts);
        setServiceRequests(allData.data.serviceRequests);
      }
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

  useEffect(() => {
    fetchData();
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-primary" data-testid="text-admin-title">Admin Portal</h1>
            <p className="text-muted-foreground">Manage quote submissions and contacts</p>
          </div>
          <Button onClick={fetchData} variant="outline" data-testid="button-refresh">
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Quote Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold" data-testid="text-total-quotes">{stats.totalQuotes}</span>
                  {stats.newQuotes > 0 && (
                    <Badge className="bg-blue-500" data-testid="badge-new-quotes">{stats.newQuotes} new</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Contact Messages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold" data-testid="text-total-contacts">{stats.totalContacts}</span>
                  {stats.newContacts > 0 && (
                    <Badge className="bg-blue-500" data-testid="badge-new-contacts">{stats.newContacts} new</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Service Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold" data-testid="text-total-service">{stats.totalServiceRequests}</span>
                  {stats.newServiceRequests > 0 && (
                    <Badge className="bg-blue-500" data-testid="badge-new-service">{stats.newServiceRequests} new</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="quotes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="quotes" data-testid="tab-quotes">Quote Requests</TabsTrigger>
            <TabsTrigger value="contacts" data-testid="tab-contacts">Contact Messages</TabsTrigger>
          </TabsList>

          {/* Quotes Tab */}
          <TabsContent value="quotes">
            <Card>
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
                              <Badge variant="outline">
                                {QUOTE_TYPE_LABELS[quote.quoteType] || quote.quoteType}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-muted-foreground" />
                                {quote.insuredName}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="font-medium">{quote.contactName}</div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Mail className="w-3 h-3" />
                                  <a href={`mailto:${quote.contactEmail}`}>{quote.contactEmail}</a>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Phone className="w-3 h-3" />
                                  <a href={`tel:${quote.contactPhone}`}>{quote.contactPhone}</a>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{quote.state}</TableCell>
                            <TableCell>{getStatusBadge(quote.status)}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-sm">
                                <Calendar className="w-3 h-3" />
                                {format(new Date(quote.createdAt), "MMM d, yyyy")}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Select
                                  value={quote.status}
                                  onValueChange={(value) => updateQuoteStatus(quote.id, value)}
                                >
                                  <SelectTrigger className="w-32" data-testid={`select-status-${quote.id}`}>
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
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button 
                                      variant="outline" 
                                      size="sm"
                                      onClick={() => {
                                        setSelectedQuote(quote);
                                        setNoteText(quote.notes || "");
                                      }}
                                      data-testid={`button-view-${quote.id}`}
                                    >
                                      <Eye className="w-4 h-4" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                    <DialogHeader>
                                      <DialogTitle>Quote Details - {quote.referenceNumber}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="text-sm text-muted-foreground">Business Name</p>
                                          <p className="font-medium">{quote.insuredName}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Quote Type</p>
                                          <p className="font-medium">{QUOTE_TYPE_LABELS[quote.quoteType] || quote.quoteType}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Contact Name</p>
                                          <p className="font-medium">{quote.contactName}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Email</p>
                                          <p className="font-medium">{quote.contactEmail}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">Phone</p>
                                          <p className="font-medium">{quote.contactPhone}</p>
                                        </div>
                                        <div>
                                          <p className="text-sm text-muted-foreground">State</p>
                                          <p className="font-medium">{quote.state}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <p className="text-sm text-muted-foreground mb-2">Notes</p>
                                        <Textarea
                                          value={noteText}
                                          onChange={(e) => setNoteText(e.target.value)}
                                          placeholder="Add notes about this quote..."
                                          rows={4}
                                        />
                                        <Button 
                                          className="mt-2" 
                                          onClick={() => {
                                            if (selectedQuote) {
                                              updateQuoteStatus(selectedQuote.id, selectedQuote.status, noteText);
                                            }
                                          }}
                                        >
                                          Save Notes
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
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
                          <TableRow key={contact.id} data-testid={`row-contact-${contact.id}`}>
                            <TableCell className="font-medium">{contact.name}</TableCell>
                            <TableCell>
                              <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                                {contact.email}
                              </a>
                            </TableCell>
                            <TableCell>
                              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                            </TableCell>
                            <TableCell className="max-w-xs truncate">{contact.message}</TableCell>
                            <TableCell>{getStatusBadge(contact.status)}</TableCell>
                            <TableCell>
                              {format(new Date(contact.createdAt), "MMM d, yyyy")}
                            </TableCell>
                            <TableCell>
                              <Select
                                value={contact.status}
                                onValueChange={(value) => updateContactStatus(contact.id, value)}
                              >
                                <SelectTrigger className="w-32">
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
    </div>
  );
}
