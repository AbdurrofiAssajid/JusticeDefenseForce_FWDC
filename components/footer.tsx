import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Justice Defence Force  | All rights reserved.
      </small>

     <p className="font-bold italic">
        <Link href="https://islamic-law-consulting.vercel.app/"
          target="_blank">
         Islamic Law consultation - The easiest way to consult about legal laws in Islam</Link>
     </p>
    </footer>
  );
}