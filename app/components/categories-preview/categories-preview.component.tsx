import CategoryPreview from "../category-preview/category-preview.component";
import Image from "next/image";
import { Tag } from "../category-preview/category-preview.component";

export default async function CategoriesPreview() {
  return (
    <>
      <CategoryPreview
        title="Metro"
        detail="Obtain the lateast information on tunnelbanna"
        children={
          <Image
            className="w-[400px] h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/C30_Metro_20200811_04.jpg/1920px-C30_Metro_20200811_04.jpg"
            alt="metro"
            width={300}
            height={300}
          />
        }
      />
      <CategoryPreview
        title="Pendeltåg"
        detail="Obtain the lateast information on pendeltåg"
        children={
          <Image
            className="w-[400px] h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Sundbybergs_station.jpg"
            alt="metro"
            width={300}
            height={300}
          />
        }
      />
    </>
  );
}
