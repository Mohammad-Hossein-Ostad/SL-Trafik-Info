"use client";

import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    return setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <button className="text-black dark:text-white" onClick={toggleTheme}>
      {theme} mode
    </button>
  );
}
