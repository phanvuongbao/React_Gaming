import CharacterPng2 from "../../assets/characters/character2.png"
import Game1 from "../../assets/game/9.avif"
import Game2 from "../../assets/game/4.jpeg"
import Game3 from "../../assets/game/6.jpeg"
import Game4 from "../../assets/game/1.avif"
const game1Cover = {
    backgroundImage : `url(${Game1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "350px",
};

const game2Cover = {
    backgroundImage : `url(${Game2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
};
const game3Cover = {
    backgroundImage : `url(${Game3})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
};


const Recomments = () => {
  return (
    <section className="py-10 bg-primary text-white">
        <div className="container relative">
            {/* Header Section */}
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">
                    Recommended Articles
                </h1>
                <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
                    View All
                </button>
            </div>
            {/* Recommend Articles Card */}
            <div className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-4 mt-8">
                    <div style={game1Cover} className="sm:row-span-2 sm:col-span-2 h-[300px] relative rounded-xl">
                        <div className="bg-black/30 h-full w-full">
                            <div className="absolute bottom-0 left-0 w-full">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img src={Game4} alt="" className="h-[140px] min-w-[60px] object-cover rounded-xl" />
                                    </div>
                                    <div className="mt-3 ">
                                        <h1 className="font-semibold text-xl">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nemo.
                                        </h1>
                                        <p className="text-sm text-white/80">
                                            Lorem ipsum dolor sit lor sit amet consectetur adipisicing elit. Cum, veniam..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={game2Cover} className=" relative sm:row-span-1  rounded-xl">
                    <div className="bg-black/30 h-full w-full">
                            <div className="absolute bottom-0 left-0 w-full">
                                <div className="flex justify-center items-center gap-4">
                                    <div>
                                        <img src={Game2} alt="" className="h-[90px] min-w-[80px] object-cover rounded-xl" />
                                    </div>
                                    <div className="mt-3 ">
                                        <h1 className="font-semibold text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                                        </h1>
                                        <p className="text-xs text-white/80">
                                            Lorem ipsum dolor sit lor sit amet consectetur adipisicing elit. Cum, veniam..
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={game3Cover} className=" rounded-xl">
                    <div className="bg-black/30 h-full w-full relative">
                            <div className="absolute bottom-0 left-0 w-full">
                                <div className="flex justify-center items-center gap-4">
                                    <div>
                                        <img src={Game3} alt="" className="h-[90px] min-w-[80px] object-cover rounded-xl" />
                                    </div>
                                    <div className="mt-3 ">
                                        <h1 className="font-semibold text-sm">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit
                                        </h1>
                                        <p className="text-xs text-white/80">
                                            Lorem ipsum dolor sit lor sit amet consectetur adipisicing 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            {/* Character Png */}
            <img src={CharacterPng2} alt="" 
            className="absolute right-[-150px] top-[50px]
            z-[11] h-[340px]"/>
        </div>
    </section>
  )
}

export default Recomments
