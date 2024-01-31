import Profile from "../assets/profile.jpg"
import Golf from "../assets/golf.jpg"
import Mark from "../assets/mark.jpg"
import Kong from "../assets/kong.jpg"
import Ramin from "../assets/ramin.jpg"

export default function Member() {
    return (
        <div className="flex-col mt-6 inline-block">
            <btn className="w-full bg-slate-800 inline-block text-center text-md font-medium rounded-xl py-1 text-white">Team member</btn>
            <div className="avatar flex mt-2 gap-2">
                <div className="w-14 rounded-full shadow-md">
                    <img src={Profile} />
                </div>
                <div className="w-14 rounded-full shadow-md">
                    <img src={Ramin} />
                </div>
                <div className="w-14 rounded-full shadow-md">
                    <img src={Kong} />
                </div>
                <div className="w-14 rounded-full shadow-md">
                    <img src={Golf} />
                </div>
                <div className="w-14 rounded-full shadow-md">
                    <img src={Mark} />
                </div>
            </div>

        </div>
    )
}