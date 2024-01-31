export default function Navbar() {
    return (
        <div className="navbar bg-neutral fixed z-10 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white">Portfolio</a>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="flex-row items-center gap-6 px-1 text-white hidden lg:flex cursor-pointer">
                    <div className="w-1/3">
                        <li><a className="transition-all hover:font-semibold" href="#about">About</a></li>
                    </div>
                    <div className="w-1/3">
                        <li><a className="transition-all hover:font-semibold" href="#education">Education</a></li>
                    </div>
                    <div className="w-1/3">
                        <li><a className="transition-all hover:font-semibold" href="#projects">Projects</a></li>
                    </div>
                </ul>
                <a className="ml-6 btn bg-slate-100 hover:bg-slate-200 active:bg-slate-300" href="https://github.com/greennyumbs" target="_blank" rel="noreferrer">
                    Visit Github
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' className='w-8' />
                </a>
            </div>
        </div>
    )
}