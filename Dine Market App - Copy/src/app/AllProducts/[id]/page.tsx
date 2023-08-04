import ProductCart from "@/components/ProductCart";
import ListOfProducts from "@/utils/mock";
import Image from "next/image";

const GetProductsDeails = (id: number) => {
  return ListOfProducts.filter((product) => product.id === id);
};

export default function Page({ params }: { params: { id: string} }) {
  const productId = parseInt(params.id, 10);

  const result = GetProductsDeails(productId);
  return (
    <section>
    <div className="flex justify-evenly flex-wrap mt-16 ">
      {result.map((Product) => (
        <div key={Product.id} className="flex justify-between">
          <div>
            <Image src={Product.image} alt={Product.name}></Image>
          </div>
          <div className="ml-5">
            Product Details
            <p>Name: {Product.name}</p>
            <p>Price: ${Product.price}</p>
            <p>Category: {Product.category}</p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
