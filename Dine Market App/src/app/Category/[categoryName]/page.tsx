import ProductCart from "@/components/ProductCart";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";

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

const GetProductsByCategory = async (category: { name: string }) => {
  const data: IProduct[] = await getProductData();

  return data.filter((product) => product.category.name === product.category.name);
};

export default async function Page({ params }: { params : {categoryName: { name: string }}} ) {
  const result = await GetProductsByCategory(params.categoryName);

  return (
    <section>
      <div className="flex justify-evenly flex-wrap mt-16">
        { result.length > 0 ? (
           result.map((item) => (
            <ProductCart
            key={item._id}
            title={item.title}
            price={item.price}
            image={item.image}
            category={item.category}
            _id={item._id}
            ></ProductCart>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </section>
  );
}
