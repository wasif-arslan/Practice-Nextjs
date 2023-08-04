import {client} from "@/lib/sanityClient"




export const getProductData =async () => {
    const res = await client.fetch(`*[_type=="product"]`);
    return res
}



export default async function ProductData() {
    const data = await getProductData()
    console.log(data)

    return (
        <div>
            
        </div>
    )
}