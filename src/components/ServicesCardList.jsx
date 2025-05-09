import React from "react";
import blueLogo from "../assets/images/blueLogo.png";

const ServicesCardList = () => {
  const CardData = [
    {
      id: 1,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
      logo: blueLogo,
    },
    {
      id: 2,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
      logo: blueLogo,
    },
    {
      id: 3,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
      logo: blueLogo,
    },
    {
      id: 4,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
      logo: blueLogo,
    },
    {
      id: 5,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
      logo: blueLogo,
    },
    {
      id: 6,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
      logo: blueLogo,
    },
  ];

  return (
    <>
      <section id="service">
        <h1 className="font-extrabold text-4xl text-center p-5">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 px-8">
          {CardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col  justify-center items-center gap-5 mb-4 border-1 border-gray-400 p-5 rounded-lg hover:transition delay-100 duration-200 ease-in-out hover:scale-110 hover:border-4"
            >
              <div className="flex items-center gap-2">
                <img src={card.logo} alt="" className="w-8 h-8" />
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </div>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesCardList;
