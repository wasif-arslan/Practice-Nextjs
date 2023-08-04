import ProductCart from "@/components/ProductCart";
import ListOfProducts from "@/utils/mock";
import { StaticImageData } from "next/image";

const GetProductsByCategory = (category: string) => {
  return ListOfProducts.filter((product) => product.category === category);
};

export default function Page({ params }: { params: { categoryName: string } }) {
  const result = GetProductsByCategory(params.categoryName);

  return (
    <section>
      <div className="flex justify-evenly flex-wrap mt-16">
        {result.length > 0 ? (
          result.map((product) => (
            <ProductCart
              key={product.id}
              title={product.name}
              price={product.price}
              img={product.image as StaticImageData}
              category={product.category}
              id={product.id}
            ></ProductCart>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </section>
  );
}
