import CategoriesPreview from "./components/categories-preview/categories-preview.component";
import Header from "./components/header/header.component";

export default async function Home() {

  return (
    <main className="h-screen items-center">
      <Header />
      <CategoriesPreview />
    </main>
  );
}
