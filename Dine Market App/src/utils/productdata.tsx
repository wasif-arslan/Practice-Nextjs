import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../sanity/lib/image";
import { Button } from "@/components/ui/button";

interface IProduct {
  price: number;
  _id: string;
  title: string;
  image: IImage;
  category: {
    name: string;
  };
}

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    _id,
    title,
    image,
    category -> {
      name
    }
  }`);
  return res;
};

export default async function ProductData() {
  const data: IProduct[] = await getProductData();

  return (
    <div className="flex justify-evenly flex-wrap mt-16">
      {data.map((item) => (
        <div>
          <Image
            src={urlForImage(item.image).url()}
            width={300}
            height={300}
            alt="product"
          ></Image>
          <h2>{item.title}</h2>
          <h2>{item.price}</h2>
          <Button className="bg-black h-12 px-8 mt-4"> Add to Cart</Button>
        </div>
      ))}
    </div>
  );
}
