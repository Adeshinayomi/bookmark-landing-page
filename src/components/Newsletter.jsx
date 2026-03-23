export function Newsletter(){
    return(
        <form className="mt-20 bg-Blue600">
            <div className="w-5/6 mx-auto text-center grid gap-10 py-10 text-white font-rubik">
                <div className="grid gap-2">
                    <span className="tracking-[.2rem]">35,000+ ALREADY JOINED</span>
                    <h1 className="text-2xl font-medium">Stay up-to-date with what we’re doing</h1>
                </div>
                <div className="grid gap-5 md:flex md:justify-self-center">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" required
                    className="px-4 py-4 rounded-md md:px-6"/>
                    <button className="bg-Red400 py-3 rounded-md font-medium text-lg md:px-6 hover:bg-white hover:border-2 hover:border-Red400 hover:text-Red400">Contact Us</button>
                </div>
            </div>               
        </form>
    )
}