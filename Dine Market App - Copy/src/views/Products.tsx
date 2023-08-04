import ProductCart from "@/components/ProductCart";
import ListOfProducts from "@/utils/mock";
import { StaticImageData } from "next/image";

export default function ProductList() {
  const productChoncks = ListOfProducts.slice(0, 3);
  return (
    <section>
      <div className="flex justify-between mt-16">
        {productChoncks.map((product) => (
          <ProductCart
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.image as StaticImageData}
            category={product.category}
            id={product.id}

          ></ProductCart>
        ))}
      </div>
    </section>
  );
}
