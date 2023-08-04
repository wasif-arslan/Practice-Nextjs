import ProductCart from "@/components/ProductCart";
import ListOfProducts from "@/utils/mock";
import { StaticImageData } from "next/image";

const AllProducts = () => {
  return (
    <div className="flex justify-evenly flex-wrap mt-16">
      {ListOfProducts.map((Product) => (
        <ProductCart
          key={Product.id}
          title={Product.name}
          price={Product.price}
          img={Product.image as StaticImageData}
          category={Product.category}
          id={Product.id}

        ></ProductCart>
      ))}
    </div>
  );
};

export default AllProducts;
