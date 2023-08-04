import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProductsCart(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) {
  return (
    <Link href={`/AllProducts/${props.id}`}>
    <div className="py-8">
      <Image src={props.img} alt="product"></Image>
      <h3 className="font-bold text-lg mt-3">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
      <p className="font-bold text-base">
        Category: <span className="text-base font-normal capitalize">{props.category}</span>
      </p>
    </div>
</Link>  );
}
