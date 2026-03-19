export function Newsletter(){
    return(
        <form className="mt-20 bg-Blue600">
            <div className="w-5/6 mx-auto text-center grid gap-10 py-10 text-white font-rubik">
                <div className="grid gap-2">
                    <span className="tracking-[.2rem]">35,000+ ALREADY JOINED</span>
                    <h1 className="text-2xl font-medium">Stay up-to-date with what we’re doing</h1>
                </div>
                <div className="grid gap-5">
                    <input type="email" name="email" id="email" placeholder="Enter your email address" required
                    className="px-4 py-4 rounded-md"/>
                    <button className="bg-Red400 py-3 rounded-md font-medium text-lg">Contact Us</button>
                </div>
            </div>               
        </form>
    )
}