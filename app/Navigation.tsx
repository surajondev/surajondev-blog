"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { IconContext } from "react-icons";

export const Navigation = () => {
  const [hoveredX, setHoveredX] = useState(false);
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
  return (
    <div className="flex container mx-auto w-6/12 font-arcade justify-between">
      <ul className="flex flex-row gap-10 mt-5 mb-5 heading2">
        <Link href="/">
          <li className="hover:underline cursor-pointer border-purple-600">
            Surajondev
          </li>
        </Link>
        <Link href="/blog">
          <li className="hover:underline cursor-pointer">Blog</li>
        </Link>
        <Link href="/about-author">
          <li className="hover:underline cursor-pointer">About Author</li>
        </Link>
      </ul>
      <ul className="flex flex-row gap-10 mt-5 mb-5 heading2">
        <IconContext.Provider
          value={{
            size: "20px",
            className: "social-link",
          }}
        >
          <Link href="https://x.com/surajondev">
            <BsTwitterX
              style={{ color: hoveredX ? "#a78bfa" : "white" }}
              onMouseEnter={() => setHoveredX(true)}
              onMouseLeave={() => setHoveredX(false)}
            />
          </Link>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            size: "20px",
            className: "social-link",
          }}
        >
          <Link href="https://www.linkedin.com/in/surajondev/">
            <BsLinkedin
              style={{ color: hoveredLinkedIn ? "#a78bfa" : "white" }}
              onMouseEnter={() => setHoveredLinkedIn(true)}
              onMouseLeave={() => setHoveredLinkedIn(false)}
            />
          </Link>
        </IconContext.Provider>
      </ul>
    </div>
  );
};
