import BusCategoryPreview from "../category-preview/bus-category-preview/bus-category-preview.component";
import MetroCategoryPreview from "../category-preview/metro-category-preview/metro-category-preview.component";
import TrainCategoryPreview from "../category-preview/train-category-preview/train-category-preview.component";
import TramCategoryPreview from "../category-preview/tram-category-preview/tram-category-preview.component";

export default function CategoriesPreview() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto mt-20 p-4">
      <MetroCategoryPreview />
      <TrainCategoryPreview />
      <BusCategoryPreview />
      <TramCategoryPreview />
    </div>
  );
}
