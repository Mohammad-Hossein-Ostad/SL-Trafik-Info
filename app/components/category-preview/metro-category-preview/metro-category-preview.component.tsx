import React from "react";
import Category from "../../category/category.component";
import Image from "next/image";
import Link from "next/link";

export default function MetroCategoryPreview() {
  return (
    <Category
      title="Tunnelbana"
      detail="Få den senaste informationen om tunnelbanan"
      link="/metro"
      node={
        <Link href="/metro">
          <Image
            className="rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/C30_Metro_20200811_04.jpg/1920px-C30_Metro_20200811_04.jpg"
            alt="Picture of metro"
            width={400}
            height={300}
            priority={true}
          />
        </Link>
      }
    />
  );
}
