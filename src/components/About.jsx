import Skills from "./Skills.jsx"
import Profile from "../assets/profile.jpg"

export default function About() {
    return (
        <>
            <div id="about" className="hero pt-24 pb-5 bg-base-100  min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-x-24">
                    {/* <img src={Profile} alt='profile'
                        className="max-w-sm rounded-lg shadow-2xl" /> */}
                    <div className="avatar">
                        <div className="w-full rounded-full shadow-2xl">
                            <img src={Profile} />
                        </div>
                    </div>
                    <div className="pl-7">
                        <h1 className="text-5xl
                        font-bold bg-gradient-to-r 
                        from-blue-600 via-green-500 
                        to-indigo-400 inline-block
                        text-transparent bg-clip-text">
                            Hi there! I'm Green,
                        </h1>
                        <p className="text-xl py-3 pb-5">
                            A 21-year-old third-year international computer engineering student at <a className='font-semibold hover:underline hover:text-orange-400 transition-all' href="https://www.cpe.kmutt.ac.th/" target="_blank" rel="noopener noreferrer">KMUTT</a>.
                            I'm interested in <strong>Full-stack</strong> and <strong>Back-end development</strong>.
                        </p>
                        <div>
                            <p className='text-2xl font-bold pr-5'>Technical skills</p>
                            <Skills url="https://skillicons.dev/icons?i=nestjs,redis,express,dotnet,js,ts,flutter,react,html,css,go,dart,c,cs,py,php,mysql,firebase,supabase,mongodb,nodejs,docker,kubernetes,git&perline=12" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}