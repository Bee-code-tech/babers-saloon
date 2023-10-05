import React from 'react'

const SectionHeader = ({title, subTitle}) => {
  return (
    <>
    <div className="flex items-center flex-col gap-5 justify-center my-8">
      <h1 className="text-[40px] lg:text-[55px] md:text-[50px] font-bold text-center">
        {title}
      </h1>
      <p className="text-center">
        {subTitle}
      </p>
      <span  className='h-[3px] w-[100px] bg-black rounded-md mt-[-10px] ' >

      </span>
    </div>
    </>
  )
}

export default SectionHeader