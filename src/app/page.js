

import ProductCard from "@/components/Card/ProductCard";
import HomeSlider from "@/components/Slider/HomeSlider";
import useAllProduct from "@/hooks/useAllProduct";
import Navber from "@/utility/Navber/Navber";



const HomePage = async () => {

    
  const data = await useAllProduct();
  // console.log(data);
 


  return (
    <div>
       <Navber></Navber>
      <div className="max-w-7xl mx-auto">
     
     <div className="w-full p-2">
     <HomeSlider></HomeSlider>
     </div>
     <hr></hr>
     <h1 className="text-center text-2xl text-orange-600 font-medium">Our product</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-3">

    {
      data.products?.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
    }


     </div>
      
    </div>
    </div>
  );
};

export default HomePage;