import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/start-page/Design inspiration-rafiki 1.svg";
import img2 from "../../assets/images/start-page/Design inspiration-rafiki 2.svg";
import img3 from "../../assets/images/start-page/Digital presentation-amico 3.svg";
function StartPageHome() {
  const [currentContent, setCurrentContent] = useState(0);
  const [activeContent, setActiveContent] = useState(true);
  const location = useLocation();
  const content = [
    {
      imgPath: img1,
      text: "Our platform helps those interested in the field of Software to find what matches their interests..",
    },
    {
      imgPath: img2,
      text: "You can also create or join teams for group projects..",
    },
    {
      imgPath: img3,
      text: "Make the learning process more easier and enjoyable..",
    },];

  useEffect(() => {
    const hideTime = setTimeout(() => {
      setActiveContent(false);
    }, 4500);
    const interval = setInterval(() => {
      setActiveContent(true);
      if (currentContent === 2) {
        setCurrentContent(0);
      } else {
        setCurrentContent((prev) => prev + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(hideTime);
    };
  }, [currentContent]);
  return (
    <div className="flex flex-row-reverse h-[calc(100vh_-_100px)] container ">
      <div className="w-1/2 flex items-center flex-col h-full justify-center ">
        {location.pathname === "/" ? (
          <>
            <p className="text-4xl text-center min-h-[200px]">{content[currentContent].text}</p>
            <Link to="/signup">
              <button className="btn shadow-btnshadow">{`Let's Start`}</button>
            </Link>
          </>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <div
        className={`w-1/2 transition-all duration-500  flex justify-center items-center flex-col gap-1  ${
          activeContent ? "opacity-100" : "opacity-0"
        } `}
      >
        <img src={content[currentContent].imgPath} alt="start-img" className="w-[80%]" />
      </div>
    </div>
  );
}

export default StartPageHome;