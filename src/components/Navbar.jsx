export default function Navbar() {
    return (
        <div className="navbar bg-neutral fixed z-10 w-full">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-white">Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* <ul className="menu menu-horizontal px-1 text-white gap-4">
                    <a className="btn" href="#about">About</a>
                    <a className="btn" href="#education">Education</a>
                    <a className="btn" href="#">Projects</a>
                </ul> */}
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal px-1 text-white gap-4">
                    <a className="btn" href="#about">About</a>
                    <a className="btn" href="#education">Education</a>
                    <a className="btn" href="#">Projects</a>
                    <a className="btn glass text-white">Visit GitHub</a>
                </ul>
            </div>
        </div>
    )
}