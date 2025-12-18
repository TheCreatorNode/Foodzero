import React from "react";
import Button from "../components/Button.jsx";
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

let serviceItems = [
  {
    image: "homepage/Icon_fish.png",
    heading: "Premium Quality",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
  },
  {
    image: "homepage/Vector.png",
    heading: "Seasonal Vegetables",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
  },
  {
    image: "homepage/Icon_lemon.png",
    heading: "Fresh Fruit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu",
  },
];

const Home = () => {
  let items = menu;
  let services = serviceItems;
  return (
    <div>
      <HomeLandingPage />
      <Menu menu={items} />
      <Cook />
      <Service services={services} />
      <FoodContent />
      <Form />
      <Balance />
      <Comment />
    </div>
  );
};

const HomeLandingPage = () => {
  return (
    <div className="bg-[#233000] text-white h-full relative  p-15">
      <div className="flex m-auto w-[90%] mb-[300px] h-screen  ">
        <div className=" z-10">
          <h1 className="text-9xl m-5">
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
        <div className=" pt-25 ">
          <div className="absolute right-20 top-[180px]">
            <img
              src="homepage/Image1.jpg"
              alt="picture of a dish"
              className="w-[600px]"
            />
          </div>
          <div className="flex gap-11 absolute top-[720px] right-50">
            <img
              src="homepage/spices1-removebg-preview.png"
              alt="image of a spice"
              className="w-[250px] "
            />
            <img
              src="homepage/spices2.png"
              alt="image of a spice"
              className="w-[250px] "
            />
            <img
              src="homepage/spices3.png"
              alt="image of a spice"
              className="w-[250px]"
            />
          </div>
        </div>
      </div>
      <div className="mt-30 flex gap-40 mx-auto w-[90%]">
        <div>
          <img
            src="homepage/hlpimage1.png"
            alt="image of a dish"
            className="w-2xl"
          />
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
            src="homepage/hlgimage2.png"
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
              src="/homepage/Image.png"
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
      <div className="m-auto w-[80%] grid grid-cols-2 gap-15 ">
        <div className="relative">
          <img
            src="/homepage/Leaf.png"
            alt="image of a leaf"
            className="absolute -top-[50px] left-2.5 w-[350px]"
          />
          <img
            src="homepage/brown-wooden-round-plate-with-food 1.png"
            alt="image of a cooking utensil"
            className="absolute top-[60px] left-[120px] w-[278px] z-2"
          />
          <img
            src="/homepage/man-in-black-crew-neck-t-shirt-eating 1.png"
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
            src="/homepage/Leaf.png"
            alt="image of a leaf"
            className="w-[290px] rotate-240 pt-40 h-"
          />
        </div>
      </div>
    </div>
  );
};

const Service = ({ services }) => {
  return (
    <div className="flex justify-center items-center m-auto w-[70%] gap-15 p-10 h-[400px]">
      {services.map((service) => (
        <ServiceList services={service} key={service.heading} />
      ))}
    </div>
  );
};

const ServiceList = ({ services }) => {
  return (
    <div>
      <div className="w-[50%] m-auto p-8 bg-[#EBF0E4] rounded-[50%]">
        <img src={services.image} alt="icon" className="w-[120px]" />
      </div>
      <h2 className="text-[28px] font-extrabold m-5 text-center">
        {services.heading}
      </h2>
      <p className="text-center text-[16px] font-normal">{services.text}</p>
    </div>
  );
};

const FoodContent = () => {
  return (
    <div className="grid grid-cols-2 mx-auto w-[80%] relative my-8">
      <div>
        <h3 className="bg-[#5E6600] text-[16px] font-extrabold w-[97px] text-white py-1 px-7 text-center absolute left-[395px] top-2">
          Fashion
        </h3>
        <img
          src="homepage/Feature Image.png"
          alt="Image of a dish"
          className="w-[500px]"
        />
        <div className="w-[70%]">
          <div className="flex items-center my-2">
            <img
              src="homepage/julie.png"
              alt="image of a person"
              className="w-10]"
            />
            <div className="gap-3 text-[12px] space-x-3 text-[#5E6600] ">
              <span>Julie Christie</span>
              <span>•</span>
              <span>October 17,2021</span>
              <span>•</span>
              <span>3:33 pm</span>
              <span>•</span>
              <span>2 comments</span>
            </div>
          </div>
          <h1 className="text-[30px] leading-[35px] font-extrabold m-4 border-b-2 border-dashed pb-4">
            Fruit and vegetables and <br /> protection against diseases
          </h1>
          <p className="text-[12px] font-extrabold text-[#4D4D4D] pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-1 m-4 text-[18px] relative">
            <span>Read More</span>
            <span>
              <img
                src="homepage/arrow.png"
                alt="arrow icon"
                className="w-[25px] absolute top-2"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="relative">
        <h3 className="bg-[#5E6600] text-[16px] font-extrabold w-[97px] text-white py-1 px-4 text-center absolute top-2 left-[395px]">
          Fashion
        </h3>
        <img
          src="homepage/Feature Image (1).png"
          alt="Image of a dish"
          className="w-[500px]"
        />
        <div className="w-[75%]">
          <div className="flex items-center my-2">
            <img
              src="homepage/dianne.png"
              alt="image of a person"
              className="w-10]"
            />
            <div className="gap-3 text-[12px] space-x-3 text-[#5E6600] ">
              <span>Dianne Russell</span>
              <span>•</span>
              <span>October 17,2021</span>
              <span>•</span>
              <span>3:33 pm</span>
              <span>•</span>
              <span>2 comments</span>
            </div>
          </div>
          <h1 className="text-[30px] leading-[35px] font-extrabold m-4 border-b-2 border-dashed pb-4">
            Asparagus Spring Salad with Rocket, Goat's Cheese
          </h1>
          <p className="text-[12px] font-extrabold text-[#4D4D4D] pl-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <div className="flex gap-1 m-4 text-[18px] relative">
            <span>Read More</span>
            <span>
              <img
                src="homepage/arrow.png"
                alt="arrow icon"
                className="w-[25px] absolute top-2"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center p-15 bg-[#EBF0E4]">
      <div className="text-center py-10">
        <h1 className="text-[75px] font-extrabold">Make a Reservation</h1>
        <p className="font-normal text-[#4D4D4D] ">
          Get in touch with restaurant
        </p>
      </div>
      <form className="p-20">
        <input type="date" className=" border-2 px-20 py-2.5" />
        <select className="border-2 px-20 py-2.5 mx-5">
          <option value="evening">6:00pm</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select className="border-2 px-20 py-2.5 space-x-10 ">
          <option value="two">2 persons</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </form>
      <Button>Book Now</Button>
    </div>
  );
};

const Item = ({ children, image }) => {
  return (
    <div className="relative">
      <p className="font-extrabold text-[24px] absolute left-4 top-8 text-[#233000]">
        {children}
      </p>
      <span className="absolute left-60 top-10">
        <img
          src="/homepage/arrow.png"
          alt="arrow vector"
          className="w-[30px]"
        />
      </span>
      <img src={image} alt="image of meals" className="w-[300px]" />
    </div>
  );
};

const Balance = () => {
  return (
    <div className="flex flex-col  justify-center items-center p-30">
      <div>
        <h1 className="font-extrabold text-[70px] text-center leading-22">
          Calories Energy <br /> Balance
        </h1>
        <p className="text-center text-[#4D4D4D] font-normal pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
      <div className="flex gap-10">
        <Item image="/homepage/pxpy.png">Starters</Item>
        <Item image="/homepage/steef.png">Mains</Item>
        <Item image="/homepage/soup.png">Soups</Item>
      </div>
    </div>
  );
};

const Comment = () => {
  return (
    <div>
      <div className="flex relative justify-center items-center pb-20">
        <p className="font-extrabold text-[25px] z-2  ">
          “ Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
          Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies
          purus Lorem ipsum dolor sit amet.
        </p>
        <img
          src="/homepage/quota.png"
          alt="quotation"
          className="w-[200px] absolute right-[300px] top-1"
        />
      </div>
      <div className="">
        <div className="flex flex-row justify-center items-center space-x-[500px]">
          <div className="flex gap-8">
            <img
              src="/homepage/Avatar.png"
              alt="picture of a female"
              className="w-[100px]"
            />
            <div className="mt-5">
              <p className="font-extrabold text-[20px]">John Doe </p>
              <p className="text-[#4D4D4D] text-[10px] font-normal">Blogger</p>
            </div>
          </div>
          <div className=" flex flex-row gap-5">
            <img
              src="/homepage/arrow.png"
              alt="arrow vector"
              className="rotate-180"
            />
            <p>2/3</p>
            <img src="/homepage/arrow.png" alt="arrow vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
