import React, { ReactNode } from "react";
import CategoriesPreview from "./components/categories-preview/categories-preview.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

export default async function Home() {
  return (
    <main>
      <Header />
      <CategoriesPreview />
      <Footer />
    </main>
  );
}
