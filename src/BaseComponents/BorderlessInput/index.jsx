import React from "react";


export const BorderlessInput=({
    type = "text",
    name="email",
    placeholder = "Enter Your Email",
    icon="",
    onChange,
    extraTailwindClasses = "",
  })=>{
    return(
        
			      <div className=" myDiv mt-10 mb-6 relative border-b-2 border-b-blue-900 duration-500 hover:border-rebornit-primary">
			      	<i className={`${icon} inline-flex mt-1 absolute text-xl text-gray-500 hover:text-rebornit-primary top-1 left-4`}></i>
				      <input type={type} name={name} placeholder={placeholder} className={`w-full border-none pl-12 pt-2 pb-3 text-base font-bold  duration-300 placeholder:text-gray-500 outline-none  focus:bg-slate-200 focus:placeholder:text-gray-600 ${extraTailwindClasses}`}/>
			      </div>			
        
    );
}

