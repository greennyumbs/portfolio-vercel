export default function Education() {
    return (
        <div id='education' className='flex flex-col items-center justify-center min-h-screen'>
            <div className='mb-8'>
                <h1 className="text-5xl
                    font-bold bg-gradient-to-r 
                    from-blue-600 via-green-500 
                    to-indigo-400 inline-block
                    text-transparent bg-clip-text">
                    Education
                </h1>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-1/2">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">2015-2021</time>
                        <div className="text-lg font-black">Suankularb Wittayalai Thonburi School</div>
                        Science-Mathematics (Mini English Program) <br />
                        GPAX: 3.75
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">2021-Now</time>
                        <div className="text-lg font-black">King Mongkut's University of Technology Thonburi</div>
                        <strong>Computer Engineering International Program</strong><br />
                        GPAX: 3.82 (6 semesters)
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="orange" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                        <time className="font-mono italic">June-August 2024</time>
                        <div className="text-lg font-black">Full-Stack Developer Internship @PRIMO World</div>
                        Worked with a versatile tech stack, including <span className='text-blue-500 font-semibold'>React</span> and <span className='text-blue-500 font-semibold'>Vue.js</span> for frontend development,
                        <span className='text-blue-500 font-semibold'> Flutter</span> for cross-platform mobile applications, and <span className='text-blue-500 font-semibold'>NestJS</span> for scalable server-side functionalities.
                        This diverse experience expanded my skills in creating dynamic and responsive interfaces across web and mobile platforms.
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="grey" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">August 2024-May 2025</time>
                        <div className="text-lg font-black">Software Developer Internship @Tokio Marine Life Insurance</div>
                        I'm interning as a Software Developer at Tokio Marine Life Insurance,
                        where I'll be gaining valuable experience in building and maintaining
                        robust systems utilizing <span className='text-green-700 font-semibold'>ASP .NET, Golang, Node.js, SQL, and NoSQL</span>. This internship
                        will allow me to apply my programming skills to the insurance industry,
                        contributing to the development of efficient and reliable applications.
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    )
}