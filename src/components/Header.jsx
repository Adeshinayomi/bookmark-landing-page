import bookmarkLogo from '../assets/images/logo-bookmark.svg'
import hamburger from '../assets/images/icon-hamburger.svg'
export function Header(){
    return(
        <header className='fixed top-0 left-0 w-full'>
            <nav className='w-5/6 mx-auto flex py-5 items-center justify-between'>
                <div>
                    <img src={bookmarkLogo} alt="bookmark logo" />
                </div>
                

                <button>
                    <img src={hamburger} alt="hamburger icon" width={20}/>
                </button>
            </nav>
        </header>
    )
}