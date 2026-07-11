"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Comp-Ex 2026 (VCMDWA)",
    description: `During a one-month internship, I engineered a comprehensive full-stack event management ecosystem for Compex 2026, central India's largest tech fair. Built a secure attendee registration portal, a real-time admin dashboard for live check-ins, and automated database scripts.`,
    link: "https://github.com/AdityaGandhi25/Compex-Ticket-Booking-Website",
    images: [
      "/assets/projects-screenshots/project-1.png",
    ],
  },
  {
    id: 2,
    name: "ClearImpact: NGO Transparency",
    description: `Built a data-driven donation platform to solve trust deficits in the nonprofit sector, utilizing Anandwan as a foundational case study. Architected features to bridge the gap between financial contributions and ground-reality impact.`,
    link: "",
    images: [
      "/assets/projects-screenshots/project-2.png",
    ],
  },
  {
    id: 3,
    name: "Stock Price Trend & Forecast Tool",
    description: `Built a Python-based financial analysis script to fetch live market data and evaluate short-term stock trends using Moving Averages (MA10, MA20, EMA10). Implemented a baseline ARIMA time-series forecasting model to project next-day closing prices.`,
    link: "",
    images: [
      "/assets/projects-screenshots/project-3-placeholder.png",
    ],
  },
  {
    id: 4,
    name: "Product Price Recommendation",
    description: `Developing a Product Pricing Recommendation browser extension using Python and OpenAI to analyze product data and deliver actionable pricing insights. Applying academic knowledge of data structures to build a practical, real-world business analytics engine. (In Progress)`,
    link: "",
    images: [
      "/assets/projects-screenshots/project-4-placeholder.png",
    ],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
