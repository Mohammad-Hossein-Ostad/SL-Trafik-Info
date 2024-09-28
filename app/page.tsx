import React from "react";
import CategoriesPreview from "./components/categories-preview/categories-preview.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { ThemeProvider } from "./context/theme-context";

export default async function Home() {
  return (
    <main>
        <CategoriesPreview />
    </main>
  );
}
