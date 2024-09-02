import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="container mx-auto lg:w-6/12 md:w-8/12 w-10/12 font-arcade text-center heading2 mt-16 mb-8">
      <hr className="border-gray-300 mb-8" />
      Build by <span className="text-purple-300">Suraj Vishwakarma</span>.
      Inspired from
      <Link href="https://flaviocopes.com/" className="text-purple-300">
        {" "}
        Flavio.
      </Link>
    </div>
  );
};
