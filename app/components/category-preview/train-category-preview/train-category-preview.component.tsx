import React from "react";
import Category from "../../category/category.component";
import Link from "next/link";
import Image from "next/image";

export default function TrainCategoryPreview() {
  return (
    <Category
      title="Pendeltåg"
      detail="Få den senaste informationen om pendeltågn"
      link="/pendeltag"
      children={
        <Link href="/pendeltag">
          <Image
            className="w-[400px] h-auto rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Sundbybergs_station.jpg"
            alt="train"
            width={300}
            height={300}
          />
        </Link>
      }
    />
  )
}
