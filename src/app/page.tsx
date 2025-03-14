'use client'
import Navbar from "../components/Navbar";
import { useEffect, useRef } from "react";

export default function Home() {
  const currentMonthYear = new Date().toLocaleString('default', { month: 'short', year: 'numeric' });

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>{currentMonthYear}</div>
      </div>
    </>
  );
}
