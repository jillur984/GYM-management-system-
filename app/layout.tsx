import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { dbConnect } from "@/services/mongo";

dbConnect();
export const metadata: Metadata = {
  title: "Gym Management System",
  description:
    "Gym Management App is a full-stack application to manage Trainers and Trainees by Admin.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
