import arrow from '../assets/images/icon-arrow.svg'
export function FAQ(){
    return(
        <section className="w-5/6 mx-auto mt-40 grid gap-10 md:w-1/2 md:mt-40">
            <div className="text-center grid gap-2">
                <h1 className="text-2xl font-bold w-2/3 mx-auto">Frequently Asked Questions</h1>
                <p className="text-black/50 font-medium">
                    Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.
                </p>
            </div>

            <div className='grid gap-7'>
                <div className='grid gap-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-md font-bold hover:text-Red400'>What is Bookmark?</h1>
                        <button>
                            <img src={arrow} alt="arrow icon" />
                        </button>
                    </div>
                    <p className='text-black/50 hidden'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                    <hr />
                </div>      
                <div className='grid gap-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-md font-bold hover:text-Red400'>How can I request a new browser?</h1>
                        <button>
                            <img src={arrow} alt="arrow icon" />
                        </button>
                    </div>
                    <p className='text-black/50 hidden'>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                    <hr />
                </div>  
                <div className='grid gap-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-md font-bold hover:text-Red400'>Is there a mobile app?</h1>
                        <button>
                            <img src={arrow} alt="arrow icon" />
                        </button>
                    </div>
                    <p className='text-black/50 hidden'>
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.
                    </p>
                    <hr />
                </div>                
                <div className='grid gap-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-md font-bold hover:text-Red400'>What about other Chromium browsers?</h1>
                        <button>
                            <img src={arrow} alt="arrow icon" />
                        </button>
                    </div>
                    <p className='text-black/50 hidden'>
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </p>
                    <hr />
                </div>                                                                                    
            </div>
            <button className='justify-self-center py-4 px-6 bg-Blue600 text-white rounded-md font-bold hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>
                More Info
            </button>
        </section>
    )
}