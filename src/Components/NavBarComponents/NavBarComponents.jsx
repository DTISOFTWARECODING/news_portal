import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const NavBarComponents = () => {

    return (
        <section className="mt-12.5 space-y-5">
            <p className="font-family-UnifrakturMaguntia text-6xl text-center">The News portal</p>
            <p className="font-Poppins text-lg text-[#807F7F] leading-7.5 text-center ">Journalism Without Fear or Favour</p>
            <p className="font-Poppins text-lg leading-7.5 text-center ">{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
            <div className="border py-4 pl-4 pr-23.75 flex items-center gap-5">
                <button className="bg-[#D72050] py-2.25 px-6 text-white font-Poppins text-xl font-medium">Latest</button>
                <marquee >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</marquee>
            </div>
        </section>
    );
};

export default NavBarComponents;