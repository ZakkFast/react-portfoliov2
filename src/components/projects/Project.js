import React from 'react';
import ProjectCard from './ProjectCard';
import myTunesImg from '../../images/myTunes.gif'
import dndImg from '../../images/DnD5EResource.gif'
import iWeatherImg from '../../images/iWeather.gif'
import SnewzImg from '../../images/SnewZ.gif'


const data = [
  {
    name: 'myTunes',
    desc: 'A mock up of iTunes web app. Eye-catching and functional Web Applications coded by hand. Colorful imagination comes to life on-screen with designs that are stylized and stunning, yet simple to use.',
    url: 'https://zakkfast.github.io/myTunes/',
    img: myTunesImg,
    repo: 'https://github.com/ZakkFast/myTunes',
    id: 1,
  },
  {
    name: 'Dungeons & Dragons Compendium',
    desc: 'A compendium for all DnD 5th Edition Players. The Forgotten Realms is at your finger tips. In the fast paced world we live in today we all have unique needs and demands  in which cookie-cutter web applications cant always solve.  So I create custom tailored solutions to fit your exact requirements.',
    url: 'https://zakkfast.github.io/dnd-5e-resource/',
    img: dndImg,
    repo: 'https://github.com/ZakkFast/dnd-5e-resource',
    id: 2,
  },
  {
    name: 'iWeather',
    desc: 'A simple, yet beautiful weather app. There is so much information in the world, and I can use technologies to bring it all to you and your clients with a click of a button. Stylized, clean, and functional is always my goal.',
    url: 'https://github.com/ZakkFast/iWeather',
    img: iWeatherImg,
    repo: 'https://github.com/ZakkFast/iWeather',
    id: 3,
  },
  {
    name: 'sNewZ',
    desc: 'SnewZ is a application that a user can use to get current informations on tradable companies on the market. With a simple search the user can get all the info and related news they need to make concious decisions in the finicial world.',
    url: 'https://sjrohrxd.github.io/SNEWZ/',
    img: SnewzImg,
    repo: 'https://github.com/SJROHRXD/SNEWZ',
    id: 4,
  },
];

export default function Project() {
  return (
    <section id='what-i-do'>
      <div className='container'>
        <div className='what-i-do'>
          {data.map((project) => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              url={project.url}
              img={project.img}
              repo={project.repo}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
