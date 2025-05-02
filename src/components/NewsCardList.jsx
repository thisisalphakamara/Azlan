import React from "react";
import azlanMain from "../assets/images/azlanMain.jpg";
import elephant from "../assets/images/elephant.jpg";
import tech from "../assets/images/tech.jpg";
import hands from "../assets/images/hands.jpg";
import couple from "../assets/images/couple.jpg";
import girl from "../assets/images/girl.png";

const NewsCardList = () => {
  const ListData = [
    {
      id: 1,
      photo: azlanMain,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
    },
    {
      id: 2,
      photo: elephant,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
    },
    {
      id: 3,
      photo: tech,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
    },
    {
      id: 4,
      photo: hands,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
    },
    {
      id: 5,
      photo: couple,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
    },
    {
      id: 6,
      photo: girl,
      title: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum animi fugit placeat excepturi ad sit consectetur esse sapiente. Sunt cumque eum quae laboriosam assumenda, velit architecto quas atque veniam.",
    },
  ];

  return (
    <>
      <section id="news">
        <h1 className="font-extrabold text-4xl text-center">News</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 p-8">
          {ListData.map((List) => (
            <div
              key={List.id}
              className="border-1 border-gray-400 rounded-lg p-4 flex flex-col gap-5 items-center hover:border-4 hover:transition delay-100 duration-200 ease-in-out hover:scale-110"
            >
              <img src={List.photo} alt="" className="w-full h-45 rounded-lg" />
              <h1 className="font-bold text-center">{List.title}</h1>
              <p>{List.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsCardList;
