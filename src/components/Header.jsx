import bookmarkLogo from '../assets/images/logo-bookmark.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
export function Header(){
    return(
        <header className='w-full bg-white z-20'>
            <nav className='w-5/6 mx-auto flex py-5 items-center justify-between'>
                <div>
                    <img src={bookmarkLogo} alt="bookmark logo" />
                </div>
                
                <ul className='hidden md:flex gap-5 md:text-sm text-black/50 font-medium items-center'>
                    <li><a href="#">FEATURE</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><button className='px-4 py-2 text-white font-bold bg-Red400 rounded-md md:text-sm'>LOGIN</button></li>
                </ul>
                <button className='md:hidden'>
                    <img src={hamburger} alt="hamburger icon" width={20}/>
                </button>
            </nav>
        </header>
    )
}