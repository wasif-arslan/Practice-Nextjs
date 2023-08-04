import ProductCart from "@/components/ProductCart";
import ListOfProducts from "@/utils/mock";
import { StaticImageData } from "next/image";
import { Image as IImage } from "sanity";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "sanity/lib/image";

interface IProduct {
  price: number;
  _id: string;
  title: string;
  image: IImage;
  category: {
    name: string;
  };
}

const getProductData = async () => {
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

export default async function AllProducts() {
  const data: IProduct[] = await getProductData();
  return (
    <div className="flex justify-evenly flex-wrap mt-16">
      {data.map((item) => (
        <ProductCart
          key={item._id}
          title={item.title}
          price={item.price}
          image={item.image}
          category={item.category}
          _id={item._id}
        ></ProductCart>
      ))}
    </div>
  );
}
