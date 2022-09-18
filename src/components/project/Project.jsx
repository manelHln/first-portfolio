import React from "react";
import "./project.css";


const projects = [{
    id: 1,
    title: "E-commerce",
    techs: ["ReactJs", "Mongodb", "ExpressJs"],
    desc: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    links: [{
        href: "www.live.com",
        title: "Live"
    },
    {
        href: "www.github.com",
        title: "Github"
        }],
    color: "#df505c"
},
{
    id: 2,
    title: "WhatGpt",
    techs: ["ReactJs", "Mongodb", "ExpressJs"],
    desc: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    links: [{
        href: "www.live.com",
        title: "Live"
    },
    {
        href: "www.github.com",
        title: "Github"
        }],
        color: "#7650df"
},
{
    id: 3,
    title: "Keeper",
    techs: ["ReactJs", "Mongodb", "ExpressJs"],
    desc: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    links: [{
        href: "www.live.com",
        title: "Live"
    },
    {
        href: "www.github.com",
        title: "Github"
        }],
        color: "#0c8c1a"
},
{
    id: 4,
    title: "API 1",
    techs: ["ReactJs", "Mongodb", "ExpressJs"],
    desc: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    links: [{
        href: "www.live.com",
        title: "Live"
    },
    {
        href: "www.github.com",
        title: "Github"
        }],
        color: "#ff5b0b"
},
{
    id: 5,
    title: "API 2",
    techs: ["ReactJs", "Mongodb", "ExpressJs"],
    desc: ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    links: [{
        href: "www.live.com",
        title: "Live"
    },
    {
        href: "www.github.com",
        title: "Github"
        }],
        color: "#090cae"
}];

const P = ({project}) => {
    return (
        <div className="project__container project--bg-color" style={{borderLeftColor: project.color}}>
        <img src="assets/pic.jpeg" alt="project" className="project__img project--bg-color" />
        <div className="project__wrapper project--bg-color">
            <div className="project__info project--bg-color">
                <p className="project__title project--bg-color">{project.title}</p>
                    <p className="project__techs project--bg-color">Technologies used: {project.techs.map(tech => {
                        return (
                            <span className="project--bg-color" style={{color: project.color, fontWeight: 500}}>{tech} </span>
                    )
                })} </p>
                <ul className="project__desc project--bg-color">
                        {project.desc.map(desc => {
                            return (
                                <li className="project--bg-color">{desc}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="project__links project--bg-color">
                    {project.links.map(link => {
                        return (
                        <span><a href={link.href} className="project--bg-color project__links--src" style={{color: project.color}}>{link.title}</a></span>
                    )
                })}
            </div>
        </div>
    </div>
        )
    }

export default function Project() {
    return (
        <div className="project">
            <div className="project__heading">
                <hr className="project__heading--bar" />
                <span className="project__heading--text">Take a look at my</span>
            </div>
            <h2 className="project__heading--title">Projects</h2>
            {projects.map(project => {
                return (
                    <P key={project.id} project={project} />
                )
            })}
        </div>
    );
}