// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: 'personal' | 'business' | 'admin';
  subscription: 'free' | 'pro' | 'business' | 'enterprise';
  createdAt: string;
  updatedAt: string;
}

// Email Types
export interface Email {
  id: string;
  userId: string;
  from: string;
  to: string[];
  subject: string;
  body: string;
  summary?: string;
  priority: 'low' | 'medium' | 'high';
  category: 'sales' | 'finance' | 'hr' | 'marketing' | 'support' | 'personal';
  isRead: boolean;
  isFlagged: boolean;
  attachments: Attachment[];
  suggestedActions: string[];
  extractedTasks: Task[];
  createdAt: string;
  receivedAt: string;
}

// Meeting Types
export interface Meeting {
  id: string;
  userId: string;
  title: string;
  duration: number;
  fileUrl: string;
  fileType: 'mp3' | 'mp4' | 'wav';
  transcription?: string;
  summary?: string;
  keyPoints: string[];
  actionItems: ActionItem[];
  participants: string[];
  status: 'uploaded' | 'processing' | 'completed' | 'failed';
  createdAt: string;
}

// Document Types
export interface Document {
  id: string;
  userId: string;
  fileName: string;
  fileType: 'pdf' | 'csv' | 'xlsx';
  fileUrl: string;
  summary?: string;
  keyInsights: string[];
  analysis?: {
    trends?: string[];
    anomalies?: string[];
    recommendations?: string[];
  };
  status: 'uploaded' | 'processing' | 'completed' | 'failed';
  createdAt: string;
}

// Task Types
export interface Task {
  id: string;
  userId: string;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignee?: string;
  source: 'email' | 'meeting' | 'manual';
  sourceId?: string;
  createdAt: string;
  updatedAt: string;
}

// Action Item Types
export interface ActionItem {
  id: string;
  task: string;
  owner: string;
  deadline: string;
  completed: boolean;
}

// Attachment Types
export interface Attachment {
  id: string;
  fileName: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
}

// Workflow Types
export interface Workflow {
  id: string;
  userId: string;
  name: string;
  description?: string;
  trigger: WorkflowTrigger;
  actions: WorkflowAction[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowTrigger {
  type: 'email' | 'meeting' | 'schedule';
  condition?: string;
}

export interface WorkflowAction {
  type: 'create_task' | 'send_email' | 'notify' | 'generate_summary';
  config: Record<string, unknown>;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
