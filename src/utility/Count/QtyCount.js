"use client"
import React, { useState } from 'react';

const QtyCount = ({stk}) => {

    const [count , setCount] = useState(1);




    return (
        <div>
             <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                               {
                                count <= 1 ? "" :  <button onClick={()=> setCount(count-1)}
                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                <span className="m-auto text-2xl font-thin">-</span>
                            </button>
                               }
                                <h1
                                    className="flex justify-center items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    >{count} </h1>
                               {
                                count >= stk ? '' :  <button
                                onClick={()=> setCount(count+1)}
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                               }
                            </div>
        </div>
   
   );
};

export default QtyCount;