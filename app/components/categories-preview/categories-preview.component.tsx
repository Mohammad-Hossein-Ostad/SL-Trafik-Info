import BusCategoryPreview from "../category-preview/bus-category-preview/bus-category-preview.component";
import MetroCategoryPreview from "../category-preview/metro-category-preview/metro-category-preview.component";
import TrainCategoryPreview from "../category-preview/train-category-preview/train-category-preview.component";
import TramCategoryPreview from "../category-preview/tram-category-preview/tram-category-preview.component";

export default async function CategoriesPreview() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <MetroCategoryPreview />
        <TrainCategoryPreview />
        <BusCategoryPreview />
        <TramCategoryPreview />
      </div>
    </div>
  );
}
