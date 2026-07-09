import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Login } from '@pages/auth/Login';
import { Signup } from '@pages/auth/Signup';
import { Dashboard } from '@pages/Dashboard';
import { EmailList } from '@pages/emails/EmailList';
import { EmailDetail } from '@pages/emails/EmailDetail';
import { TaskList } from '@pages/tasks/TaskList';
import { MeetingList } from '@pages/meetings/MeetingList';
import { DocumentList } from '@pages/documents/DocumentList';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emails" element={<EmailList />} />
          <Route path="/emails/:id" element={<EmailDetail />} />
          <Route path="/meetings" element={<MeetingList />} />
          <Route path="/documents" element={<DocumentList />} />
          <Route path="/tasks" element={<TaskList />} />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
