import { Question } from './Questions'
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
                <Question 
                    question={'What is Bookmark?'}
                    answer={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`}
                /> 
                <Question 
                    question={'How can I request a new browser?'}
                    answer={`Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`}
                />                   
                <Question 
                    question={'Is there a mobile app?'}
                    answer={`Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.`}
                /> 
                <Question 
                    question={'What about other Chromium browsers?'}
                    answer={`Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                    vitae neque eget nisl gravida pellentesque non ut velit.`}
                />             
                                                                                 
            </div>
            <button className='justify-self-center py-4 px-6 bg-Blue600 text-white rounded-md font-bold hover:bg-transparent hover:border hover:border-Blue600 hover:text-Blue600'>
                More Info
            </button>
        </section>
    )
}