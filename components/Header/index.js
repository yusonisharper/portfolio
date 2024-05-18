import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleHomeScroll, handleWorkScroll, handleSkillScroll, handleExpScroll, handleEduScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const { name, showBlog, showResume } = data;

  const { basePath } = useRouter();

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}
              </h1>

              <div className="flex items-center">
                {(
                  data.darkMode && <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`${basePath}/images/${theme ? (theme === "dark" ? "moon.svg" : "sun.svg") : "moon.svg"
                        }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`${basePath}/images/${!open
                      ? theme ? (theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg") : "menu-white.svg"
                      : theme ? (theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg") : "cancel.svg"
                      }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme ? (theme === "dark" ? "bg-slate-800" : "bg-white") : "bg-slate-800"
                } shadow-md rounded-md`}
            >
              {
                <div className="grid grid-cols-1">
                  <Button onClick={handleHomeScroll}>Home</Button>
                  <Button onClick={handleWorkScroll}>Project</Button>
                  <Button onClick={handleSkillScroll}>Skill</Button>
                  <Button onClick={handleExpScroll}>Experience</Button>
                  <Button onClick={handleEduScroll}>Education</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:yushengw720@gmail.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:yushengw720@gmail.com")}
                  >
                    Contact
                  </Button>
                </div>
              }
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${theme ? (theme === "light" && "bg-white") : "light"
          } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleHomeScroll}>Home</Button>
            <Button onClick={handleWorkScroll}>Project</Button>
            <Button onClick={handleSkillScroll}>Skill</Button>
            <Button onClick={handleExpScroll}>Experience</Button>
            <Button onClick={handleEduScroll}>Education</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:yushengw720@gmail.com")}>
              Contact
            </Button>
            {data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`${basePath}/images/${theme ? (theme === "dark" ? "moon.svg" : "sun.svg") : "moon.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.open("mailto:yushengw720@gmail.com")}>
              Contact
            </Button>

            {data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`${basePath}/images/${theme ? (theme === "dark" ? "moon.svg" : "sun.svg") : "moon.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
