import Game1 from "../../assets/game/1.avif";
import Game2 from "../../assets/game/2.jpg";
import Game3 from "../../assets/game/3.jpeg";
import Game4 from "../../assets/game/4.jpeg";
import Game5 from "../../assets/game/5.avif";
import Game6 from "../../assets/game/6.jpeg";
import { FaFire } from "react-icons/fa";
import CharacterPng from "../../assets/characters/character1.png"

const GameCardData = [
    {
        id:1,
        title: "Spider - Man 2",
        image: Game1,
        followers: "100 followers",
    },
    {
        id:2,
        title: "Grand theft auto V",
        image: Game2,
        followers: "50 followers",
    },
    {
        id:3,
        title: "It Takes Two",
        image: Game3,
        followers: "300 followers",
    },
    {
        id:4,
        title: "Counter Strike 2",
        image: Game4,
        followers: "330 followers",
    },
    {
        id:5,
        title: "Hunt",
        image: Game5,
        followers: "90 followers",
    },
    {
        id:6,
        title: "Dragons Dogma",
        image: Game6,
        followers: "10 followers",
    },
    
];

const TrendingGame = () => {
  return (
    <>
    <section className="py-10 bg-primary text-white">
        <div className="container relative">
          {/* Header section */}
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Currently Trending Games</h1>
            <button className="bg-gray-400/50 text-white rounded-xl px-4 py-2">
              View All
            </button>
          </div>
          {/* Trending Games Card section */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
              {/* Game Card */}
              {GameCardData.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[300px] object-cover rounded-xl"
                    />
                    <div className="text-center">
                      <p className="flex items-center justify-center gap-2 mt-2">
                        <FaFire />
                        <span>{item.followers}</span> 
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Character Png */}
          <img
            src={CharacterPng}
            alt="not found"
            className="absolute left-[-90px] top-0 z-[1]
             h-[340px]"
          />
        </div>
      </section>
    </>
  )
}

export default TrendingGame
