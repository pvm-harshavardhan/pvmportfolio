import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png"
import java from "../assets/java.png"
import mysql from "../assets/mysql.png"
import c from "../assets/c.png"

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-cyan-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: python,
            title: "Python",
            style: " shadow-yellow-600",
        },
        {
            id: 7,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 8,
            src: mysql,
            title: "MySql",
            style: "shadow-blue-900",
        },
        {
            id: 9,
            src: c,
            title: "C",
            style: "shadow-indigo-600",
        },
        {
            id: 10,
            src: java,
            title: "Java",
            style: "shadow-red-900",
        },
    ];

    return (
        <div
            name="Skills"
            className="w-full min-h-screen flex items-center justify-center 
            bg-gradient-to-b from-cyan-950 via-stone-900 to-stone-950 
            "
        >
            <div className="max-w-screen-lg w-full mx-auto p-4 pt-0 flex flex-col justify-center text-white">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </p>
                    <p className="py-6 text-stone-400 text-lg">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={title} className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;