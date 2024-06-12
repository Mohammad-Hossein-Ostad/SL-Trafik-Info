import React from "react";
import Category from '../../category/category.component'
import Link from "next/link";
import Image from "next/image";

export default function BusCategoryPreview() {
  return (
    <Category
      title="Buss"
      detail="Få den senaste informationen om bussar"
      link="/buss"
      children={
        <Link href="/buss">
          <Image
            className="w-[400px] h-auto rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/SL_bus_line_77_on_Sankt_Eriksbron.JPG/1920px-SL_bus_line_77_on_Sankt_Eriksbron.JPG"
            alt="bus"
            width={300}
            height={300}
          />
        </Link>
      }
    />
  );
}
