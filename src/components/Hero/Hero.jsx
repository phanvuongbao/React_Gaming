import CoverImg from "../../assets/Hero/hero1.jpeg";
import HeroPng from "../../assets/Hero/hero_png.png";

const bgImage = {
  backgroundImage: `url(${CoverImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};




const Hero = () => {
  return (
    <>
    <div style={bgImage} className="min-h-[550px] w-full overflow-hidden">
        <div className="bg-primary/80 flex items-center min-h-[550px]">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Content Section */}
                <div>
                    <p className="text-sm text-blue-500">Discover Games You Will Love</p>
                    <h1 className="text-5xl font-bold text-white">Read About Games That You Enjoy</h1>
                    <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-500 inline-block px-6 py-3
                    rounded-2xl font-semibold text-white">
                        Start Exploring
                    </button>
                </div>
                <div>
                    <div>
                        <img src={HeroPng} alt="Not Found" />
                    </div>
                    <div>
                    </div>
                </div>
                </div>
            </div>   
        </div>
    </div>
    </>
  )
}

export default Hero
