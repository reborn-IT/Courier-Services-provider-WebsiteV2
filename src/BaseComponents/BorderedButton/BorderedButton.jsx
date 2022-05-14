import React from "react";

export const BorderedButton=({ children, styles, extraTailwindClasses = "", clickHandler })=>{
    return (
        <div>
            <button class="px-8 py-4 text-medium text-purple-600 font-bold rounded-full border border-black-100 border-purple-200 mt-6 hover:text-white hover:bg-purple-600 hover:border-transparent hover:scale-75 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 duration-1000 ">Message</button>
        </div>
    );
}