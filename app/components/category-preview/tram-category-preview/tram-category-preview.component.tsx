import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Category from '../../category/category.component'

export default function TramCategoryPreview() {
  return (
    <Category
      title="Tvärbanan"
      detail='Få den senaste informationen om Tvärbanan'
      link='/tvarbanan'
      children={
        <Link href="/tvarbanan">
          <Image
            className="w-[400px] h-auto rounded-lg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Tv%C3%A4rbanan_2.jpg/1920px-Tv%C3%A4rbanan_2.jpg"
            alt="Picture of bus"
            width={300}
            height={300}
          />
        </Link>
      }
    />
  );
}
