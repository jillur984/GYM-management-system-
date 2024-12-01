"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link for dynamic routing
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import SidebarFilter from "../components/Sidebarfilter";

interface Trainer {
  name: string;
  email: string;
  specialization: string;
  experience: string;
  rating: string;
}

const AllTrainer: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const trainers: Trainer[] = [
    {
      name: "Jillur Rahman",
      email: "jillur@example.com",
      specialization: "Physical Fitness",
      experience: "10 Years",
      rating: "★★★★★",
    },
    {
      name: "Abdul Muhith",
      email: "muhit@example.com",
      specialization: "Regular Exercise",
      experience: "8 Years",
      rating: "★★★★☆",
    },
    {
      name: "Muktadir Nayem",
      email: "nayem@example.com",
      specialization: "Strength & Conditioning",
      experience: "6 Years",
      rating: "★★★★☆",
    },
  ];

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto py-8 px-4 space-y-8 lg:space-y-0 lg:space-x-8 mt-16">
      {/* Sidebar Section */}
      <SidebarFilter />
      {/* Trainers Section */}
      <main className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-slate-800 text-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            {/* Trainer Image */}
            <div className="h-40 bg-gray-200 flex items-center justify-center relative">
              <Image
                src="/body2.jpg"
                height={200}
                width={200}
                alt="trainer"
                className="object-fill w-full h-full"
              />
              {/* Three Dots Menu here */}
              <button
                onClick={() => toggleMenu(index)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition"
              >
                <FaEllipsisV className="text-xl" />
              </button>

              {activeMenu === index && (
                <div className="absolute top-12 right-4 bg-white text-black shadow-lg rounded-md w-32 z-10">
                  <ul className="py-2">
                    <li
                      onClick={() => alert(`Edit Trainer: ${trainer.name}`)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Edit
                    </li>
                    <li
                      onClick={() => alert(`Delete Trainer: ${trainer.name}`)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-100">
                {trainer.name}
              </h2>
              <p className="text-sm text-gray-400">{trainer.email}</p>
              <p className="mt-3 text-sm text-gray-300">
                <strong>Specialization:</strong> {trainer.specialization}
              </p>
              <p className="mt-1 text-sm text-gray-300">
                <strong>Experience:</strong> {trainer.experience}
              </p>
              <p className="mt-1 text-yellow-500 text-sm">{trainer.rating}</p>
              <Link href={`/trainer/${trainer.name}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default AllTrainer;
