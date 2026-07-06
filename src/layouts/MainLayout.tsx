import React from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-owncart-cream text-owncart-ink relative selection:bg-owncart-mango selection:text-owncart-forest-dark overflow-x-hidden">
      {/* Main Header Navigation */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 flex flex-col">{children}</main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
};
