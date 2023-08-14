import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";

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

export default async function Page({params}:{params:{_id: string}}) {
  const data: IProduct[] = await getProductData();
  

  const result = data.filter((res) => res._id === params._id);
  

  console.log(result);

  if (!result) {
    return <div>No Products Found</div>;
  }

  return (
    <section>
      <div className="flex justify-evenly flex-wrap mt-16 ">
        {result.map((item) => (
          <div key={item._id} className="flex justify-between">
            <div>
              <Image
                src={urlForImage(item.image).url()}
                width={300}
                height={300}
                alt={item.title}
              ></Image>
            </div>
            <div className="ml-5">
              Product Details
              <p>Name: {item.title}</p>
              <p>Price: {item.price}</p>
              <p>Category: {item.category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
