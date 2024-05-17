import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Header from "../components/Header";
import SkillCardList from "../components/SkillCard";
import Socials from "../components/Socials";
import WorkCardList from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useRouter } from 'next/router';
import { useTheme } from "next-themes";

// Local Data
import data from "../data/portfolio.json";
import ExperienceCardList from "../components/ExperienceCard";
import EducationCardList from "../components/EducationCard";

export default function Home() {
  const { basePath } = useRouter();
  // Ref
  const homeRef = useRef();
  const workRef = useRef(); //project
  const skillRef = useRef();
  const expRef = useRef();
  const eduRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle" ref={homeRef}></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleHomeScroll={() => handleScroll(homeRef)}
          handleWorkScroll={() => handleScroll(workRef)}
          handleSkillScroll={() => handleScroll(skillRef)}
          handleExpScroll={() => handleScroll(expRef)}
          handleEduScroll={() => handleScroll(eduRef)}
          handleAboutScroll={() => handleScroll(aboutRef)}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
          <Socials className="mt-2 laptop:mt-5" /> {/*Social*/}
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects</h1>
          <WorkCardList className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4" /> {/*Projects*/}
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={skillRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Skills</h1>
          <SkillCardList className="mt-5 tablet:m-10 grid grid-cols-4 laptop:grid-cols-6 gap-8" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={expRef}>
          <h1 className="text-2xl text-bold">Experiences</h1>
          <ExperienceCardList className="m-5 laptop:mt-10 grid grid-cols-1 gap-4" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={eduRef}>
          <h1 className="text-2xl text-bold">Educations</h1>
          <div className="flex items-center justify-center">
            <EducationCardList className="m-5 w-full laptop:w-3/5 laptop:mt-10 grid gap-4" />
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara} <Button type="primary" onClick={() => window.open(`${basePath}/Yusheng-Wang-resume.pdf`)} >Resume</Button>
          </p>
        </div>
        <Footer className=""/>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
