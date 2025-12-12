import React from "react";
let menu = [
  {
    heading: "Deep Sea Snow White Cod Fillet",
    price: "$20",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    heading: "Steak With Rosemary Butter",
    price: "$22",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    heading: "Cucumber Salad",
    price: "$18",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    heading: "Natural Wine Pairing",
    price: "$90",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const Home = () => {
  let items = menu;
  return (
    <div>
      <HomeLandingPage />
      <Menu menu={items} />
      <Cook />
      <Something />
    </div>
  );
};

const HomeLandingPage = () => {
  return (
    <div className="bg-[#233000] text-white h-full relative  p-15">
      <div className="flex m-auto w-[90%] mb-10 h-screen ">
        <div className=" z-10">
          <h1 className="text-8xl m-5">
            Healthy Eating <br /> is important <br />
            part of lifestyle
          </h1>
          <p className="m-3 text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Neque congue arcu
          </p>
          <p className="[writing-mode:vertical-lr] font-bold p-3 text-[25px]">
            Scroll --------------------------------
          </p>
        </div>
        <div className="relative pt-25">
          <div className="">
            <img
              src="Image1.jpg"
              alt="picture of a dish"
              className="w-[600px]"
            />
          </div>
          <div className="flex gap-11 absolute -bottom-15 -left-90">
            <img
              src="spices1-removebg-preview.png"
              alt="image of a spice"
              className="w-[250px] "
            />
            <img
              src="spices2.png"
              alt="image of a spice"
              className="w-[250px] "
            />
            <img
              src="spices3.png"
              alt="image of a spice"
              className="w-[250px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-30 flex gap-40 m-auto w-[90%]">
        <div>
          <img src="hlpimage1.png" alt="image of a dish" className="w-2xl" />
          <h1 className="text-[68px] m-8 font-bold ">
            Start to plan <br /> your diet today
          </h1>
          <p className="text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br />
            elit. Neque congue arcu
          </p>
        </div>
        <div>
          <p className="font-bold text-[24px]">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Neque congue arcu
          </p>
          <img
            src="hlgimage2.png"
            alt="image of a dish"
            className="mt-10 w-[508px] h-[710px]"
          />
        </div>
      </div>
    </div>
  );
};

const Menu = ({ menu }) => {
  return (
    <>
      <div className="p-4 m-auto w-[90%] ">
        <div className="mb-15 grid grid-cols-2 relative">
          <div>
            <h1 className="text-[108px] font-extrabold pt-8">Our Menu</h1>
            <p className="text-[24px] font-normal">
              This is a section of your menu. Give your section <br /> a brief
              description
            </p>
          </div>
          <div className="absolute left-[1050px] -top-[15px] w-[430px]">
            <img
              src="/Image.png"
              alt="image of  leaves"
              s
              className="w-[900px] h-[400px] "
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[45px]">
          {menu.map((menu) => (
            <MenuList menu={menu} key={menu.heading} />
          ))}
        </div>
      </div>
    </>
  );
};

const MenuList = ({ menu }) => {
  return (
    <div className="mb-8">
      <p className="font-bold text-[48px] text-right border-b-4 border-dashed ">
        {menu.price}
      </p>
      <h1 className="font-extrabold text-[64px]">{menu.heading}</h1>
      <p className="font-normal text-[24px]">{menu.content}</p>
    </div>
  );
};

const Cook = () => {
  return (
    <div className="bg-[#EBF0E4] w-full h-[720px] pt-30 ">
      <div className="m-auto w-[90%] grid grid-cols-2 ">
        <div className="relative">
          <img
            src="/Leaf.png"
            alt="image of a leaf"
            className="absolute -top-[50px] left-[10px] w-[350px]"
          />
          <img
            src="/brown-wooden-round-plate-with-food 1.png"
            alt="image of a cooking utensil"
            className="absolute top-[60px] left-[120px] w-[278px] z-2"
          />
          <img
            src="/man-in-black-crew-neck-t-shirt-eating 1.png"
            alt="image of a man "
            className="absolute top-[70px]  left-[130px] w-[550px] z-1"
          />
        </div>
        <div className="pt-20">
          <h1 className="text-[75px]/19 font-extrabold">
            Excellent <br /> cook
          </h1>
          <p className="font-normal text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Purus lorem id penatibus imperdiet. Turpis egestas ultricies <br />{" "}
            purus auctor tincidunt lacus nunc.{" "}
          </p>
          <img
            src="/Leaf.png"
            alt="image of a leaf"
            className="w-[300px] rotate-240 pt-40 h-"
          />
        </div>
      </div>
    </div>
  );
};

const Something = () => {
  return <p>something</p>;
};
export default Home;
