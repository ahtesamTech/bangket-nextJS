// "use client"


const UseDetail = async (id) => {

   
    // Implement your data fetching logic here
  const response = await fetch(`https://dummyjson.com/product/${id}`, {
   next: {
     revalidate: 5,
   },
   });
 const data = await response.json();

   return data;
};

export default UseDetail;