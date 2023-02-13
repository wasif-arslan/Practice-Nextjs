export default function GiveName({ params, searchParams }: {
    params: {
        products: string 
},
    searchParams: { id: string },
  }) {
    
      return (
        <div>
              My name is {params.products}.
        </div>
      )
    }