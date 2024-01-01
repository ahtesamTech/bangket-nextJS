// "use client"


const useAllProduct = async () => {

   
     // Implement your data fetching logic here
   const response = await fetch('https://dummyjson.com/product', {
    next: {
      revalidate: 5,
    },
    });
  const data = await response.json();

    return data;
};

export default useAllProduct;