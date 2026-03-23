import heroImage from '../assets/images/illustration-hero.svg'
import featureImage1 from '../assets/images/illustration-features-tab-1.svg'
export function Features(){
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
                <h2 className="font-medium text-lg underline underline-offset-[1.3rem] decoration-4 decoration-Red400">Simple Bookmarking</h2>
                <hr />
                <h2 className="text-lg">Speedy Searching</h2>
                <hr />
                <h2 className="text-lg">Easy Sharing</h2>
                <hr />
            </div>

            <div className='grid gap-7 md:grid-cols-2 lg:grid-cols-2 md:w-5/6 mx-auto py-10'>
                <div className='relative md:static md:w-full'>
                    <img src={featureImage1} alt="feature image 1" className='w-5/6 md:w-full mx-auto lg:w-full'/>
                    {/* <div className='absolute top-20 -z-10 left-0 h-40 w-5/6 rounded-r-full bg-Blue600 md:top-[25rem] md:w-[40%] md:h-56'></div> */}
                    <div className='hidden lg:flex absolute left-0 top-[24rem] rounded-r-full h-64 -z-10 w-1/3 bg-Blue600'>

                    </div>
                    <div className='flex absolute left-0 top-20 md:top-[24rem] rounded-r-full h-40 -z-10 lg:hidden w-2/3 md:w-1/3 bg-Blue600'>

                    </div>
                </div>
                <div className='w-5/6 mx-auto grid gap-5 place-content-start mt-10 md:mt-0 lg:mx-10 md:gap-7'>
                    <h1 className='text-2xl font-bold text-center md:text-left lg:text-left'>Bookmark in one click</h1>
                    <p className='text-black/50 text-center font-medium md:text-left lg:text-left'>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.
                    </p>
                    <button className='px-6 py-3 bg-Blue600 w-fit text-white font-bold rounded-lg justify-self-center md:justify-self-start lg:justify-self-start'>More info</button>
                </div>
            </div>
       </section>
    )
}