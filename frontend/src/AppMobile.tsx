import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { MobileBottomNav } from '@components/mobile/MobileBottomNav';
import { MobileLogin } from '@pages/mobile/MobileLogin';
import { MobileSignup } from '@pages/mobile/MobileSignup';
import { MobileDashboard } from '@pages/mobile/MobileDashboard';
import { MobileEmails } from '@pages/mobile/MobileEmails';
import { MobileEmailDetail } from '@pages/mobile/MobileEmailDetail';
import { MobileTasks } from '@pages/mobile/MobileTasks';
import { MobileMeetings } from '@pages/mobile/MobileMeetings';
import { MobileDocuments } from '@pages/mobile/MobileDocuments';
import { MobileSettings } from '@pages/mobile/MobileSettings';
import { useAuth } from '@hooks/useAuth';

function AppMobile() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<MobileLogin />} />
          <Route path="/signup" element={<MobileSignup />} />

          {/* App Routes - with Bottom Navigation */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <>
                  <MobileDashboard />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/emails"
            element={
              isAuthenticated ? (
                <>
                  <MobileEmails />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/emails/:id"
            element={
              isAuthenticated ? (
                <>
                  <MobileEmailDetail />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/meetings"
            element={
              isAuthenticated ? (
                <>
                  <MobileMeetings />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/documents"
            element={
              isAuthenticated ? (
                <>
                  <MobileDocuments />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/tasks"
            element={
              isAuthenticated ? (
                <>
                  <MobileTasks />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/settings"
            element={
              isAuthenticated ? (
                <>
                  <MobileSettings />
                  <MobileBottomNav />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-center" />
    </>
  );
}

export default AppMobile;
