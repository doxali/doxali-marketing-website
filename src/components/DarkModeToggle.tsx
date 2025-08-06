import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = saved === "dark" || (!saved && prefersDark);

    if (enabled) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full shadow-md transition hover:scale-105
        bg-[#2fc4a0] text-white"
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
}
