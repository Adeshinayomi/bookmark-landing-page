import heroImage from '../assets/images/illustration-hero.svg'
export function Features(){
    return(
       <section className="mt-14 grid gap-10">
            <div className=" w-5/6 mx-auto grid gap-5">
                <h1 className="text-3xl font-bold text-center">
                    Features
                </h1>
                <p className="text-center text-black/50">
                    Our aim is to make it quick and easy for you to access your favourite websites. 
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className=" w-5/6 mx-auto text-center grid gap-5">
                <hr />
                <h2 className="font-medium text-lg underline underline-offset-[1.3rem] decoration-4 decoration-Red400">Simple Bookmarking</h2>
                <hr />
                <h2 className="text-lg">Speedy Searching</h2>
                <hr />
                <h2 className="text-lg">Easy Sharing</h2>
                <hr />
            </div>

            <div className='grid gap-7'>
                <div className='relative'>
                    <img src={heroImage} alt="hero image" />
                    <div className='absolute top-20 -z-10 left-0 h-48 w-5/6 rounded-r-full bg-Blue600'></div>
                </div>
                <div className='w-5/6 mx-auto grid gap-3'>
                    <h1 className='text-2xl font-bold text-center'>Bookmark in one click</h1>
                    <p className='text-black/50 text-center'>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface 
                        gives you complete control over how you manage your favourite sites.
                    </p>
                </div>
            </div>
       </section>
    )
}