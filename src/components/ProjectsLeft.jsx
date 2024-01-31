import LearningMate from '../assets/learningmate.png'
import Member from './Member'
import Php from '../assets/php.png'
import Php2 from '../assets/php2.png'
import Medkid from '../assets/medkid.png'

export default function ProjectsLeft() {
    return (
        <div id='projects'>
            <div className="hero bg-base-100 py-5 mt-10">
                <div className="hero-content flex-col lg:flex-row mx-5">
                    <img src={LearningMate} className="max-w-sm rounded-lg shadow-2xl w-72 mr-20" />
                    <div>
                        <h1 className="text-4xl font-bold">LearningMate Mobile Application</h1>
                        <p className="py-6 text-xl">A learning hub mobile application enabling seamless scheduling and<br />assignment management for academic students and teachers.</p>
                        <div className="flex gap-3">
                            <a className="btn bg-slate-200 active:bg-slate-400 hover:bg-slate-300" href="https://youtu.be/-UUN-7ohB-A?si=NmaDfFMkNDdW_3KA&t=784" target="_blank" rel="noreferrer">
                                <img src='https://cdn-icons-png.flaticon.com/256/82/82118.png' className='w-4' />
                                Demo
                            </a>
                            <a className="btn bg-slate-600 active:bg-slate-800 hover:bg-slate-700 text-slate-200"
                            href="https://github.com/LonebirdRamin/LearningMate" target="_blank" rel="noreferrer">
                                <img src='https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png' className='w-5' />
                                Github
                            </a>
                        </div>
                        <Member />
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 py-5">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-col ml-20">
                        <img src={Php} className="max-w-sm rounded-lg shadow-2xl my-3 w-full" />
                        <img src={Php2} className="max-w-sm rounded-lg shadow-2xl my-3 w-full" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold">Work tracking for content creator</h1>
                        <p className="py-6 text-xl">A PHP-based web application for a leading content creator,<br/>enhancing workflow tracking.
                        Streamlined content creation processes<br/>for improved efficiency.</p>
                        <div className="flex gap-3">
                            <a className="btn bg-slate-600 active:bg-slate-800 hover:bg-slate-700 text-slate-200"
                            href="https://github.com/greennyumbs/content-creator-work-tracking" target="_blank" rel="noreferrer">
                                <img src='https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png' className='w-5' />
                                Github
                            </a>
                        </div>
                        <Member />
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 py-5 mt-10">
                <div className="hero-content flex-col lg:flex-row mx-5">
                    <img src={Medkid} className="max-w-sm rounded-lg shadow-2xl w-72 mr-20" />
                    <div>
                        <h1 className="text-4xl font-bold">MedKid Mobile Application</h1>
                        <p className="py-6 text-xl">A mobile application that users can order the medications online from<br/>
                        their nearby pharmarcies using Glideapps for application development
                        <br/>and Zapier as API tool.</p>
                        <div className="flex gap-3">
                            <a className="btn bg-slate-200 active:bg-slate-400 hover:bg-slate-300" href="https://possible-roll-8887.glideapp.io/dl/d0a5f4" target="_blank" rel="noreferrer">
                                <img src='https://cdn-icons-png.flaticon.com/256/82/82118.png' className='w-4' />
                                Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}