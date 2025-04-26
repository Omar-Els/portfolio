import { useState } from "react";
import "./main.css";
import { myprojects } from "./myprojects";
import { AnimatePresence, motion, spring } from "framer-motion";
const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myprojects);

  // الريوزبلتي بتوفر عليا كتابة الكود كل مرة

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myprojects.filter((item) => {
      // الفيند افضل من الفلتر علشان بتجيب اول عنصر يحقق الشرط بس

      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section ">
        <button
          onClick={() => {
            setcurrentActive("all");

            setArr(myprojects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring",damping:8,stiffness:50}}
                key={item.imgPath}
                className="card"
              >
                <img width={200} src={item.imgPath} alt="" />
                <div style={{ width: "200px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid eaque ad, illum id mollitia minima voluptatibus
                    nulla
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};
export default Main;
