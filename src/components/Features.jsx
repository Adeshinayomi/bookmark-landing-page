import { useState } from 'react'
import featureImage1 from '../assets/images/illustration-features-tab-1.svg'
import featureImage2 from '../assets/images/illustration-features-tab-2.svg'
import featureImage3 from '../assets/images/illustration-features-tab-3.svg'
export function Features(){
    let [current,setCurrent]=useState(0)
    const tabs=[{
        name:'Bookmark in one click',
        text:`Organize your bookmarks however you like. Our simple drag-and-drop interface 
            gives you complete control over how you manage your favourite sites.`,
        image:featureImage1
    },{
        name:'Intelligent search',
        text:`Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.`,
        image:featureImage2
    },{
        name:'Share your bookmarks',
        text:`Easily share your bookmarks and collections with others. Create a shareable 
            link that you can send at the click of a button.`,
        image:featureImage3
    }]
    return(
       <section className="md:relative mt-14 grid gap-10">
            <div className=" w-5/6 mx-auto grid gap-5 md:w-1/2 md:mx-auto">
                <h1 className="text-3xl font-bold text-center">
                    Features
                </h1>
                <p className="text-center text-black/50">
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className=" w-5/6 mx-auto text-center grid gap-5 md:flex md:justify-center">
                <hr />
                <button className={`font-medium text-lg hover:text-Red400 ${current === 0?'underline':''} underline-offset-[1.3rem] decoration-4 decoration-Red400 cursor-pointer`} onClick={()=>{setCurrent(0)}}>Simple Bookmarking</button>
                <hr />
                <button className={`text-lg hover:text-Red400 ${current === 1?'underline':''} underline-offset-[1.3rem] decoration-4 decoration-Red400 cursor-pointer`} onClick={()=>{setCurrent(1)}}>Speedy Searching</button>
                <hr />
                <button className={`text-lg hover:text-Red400  ${current === 2?'underline':''} underline-offset-[1.3rem] decoration-4 decoration-Red400 cursor-pointer`} onClick={()=>{setCurrent(2)}}>Easy Sharing</button>
                <hr />
            </div>

            <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-2 md:w-5/6 mx-auto py-10'>
                <div className='relative md:static md:w-full md:h-full'>
                    <img src={tabs[current].image} alt="feature image 1" width={100} className='md:h-full w-5/6 md:w-full mx-auto lg:w-5/6'/>
                    <div className='hidden lg:flex absolute left-0 top-[24rem] rounded-r-full h-64 -z-10 w-[40%] bg-Blue600'>

                    </div>
                    <div className='flex absolute left-0 top-20 md:top-[24rem] rounded-r-full h-40 -z-10 lg:hidden w-2/3 md:w-1/3 bg-Blue600'>

                    </div>
                </div>
                <div className='w-5/6 mx-auto grid gap-5 place-content-start mt-10 md:mt-0 lg:mx-10 md:gap-7'>
                    <h1 className='text-2xl font-bold text-center md:text-left lg:text-left'>{tabs[current].name}</h1>
                    <p className='text-black/50 text-center font-medium md:text-left lg:text-left'>
                        {tabs[current].text}
                    </p>
                    <button className='px-6 py-3 bg-Blue600 w-fit text-white font-bold rounded-lg justify-self-center md:justify-self-start lg:justify-self-start hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>More info</button>
                </div>
            </div>
       </section>
    )
}