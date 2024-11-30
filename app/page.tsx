'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiJavascript, SiHtml5, SiCss3, SiFigma, 
  SiAdobephotoshop, SiGit, SiGithub, SiVisualstudiocode 
} from 'react-icons/si'

export default function Home() {
  const [currentRole, setCurrentRole] = useState('Software Engineer')
  const roles = ['Software Engineer', 'UI/UX Designer', 'Web Developer', 'Problem Solver', 'Game Developer', 'Mobile Developer', 'AI Engineer']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prevRole => {
        const currentIndex = roles.indexOf(prevRole)
        return roles[(currentIndex + 1) % roles.length]
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: 'Frontend Development', description: 'Expertise in React, Next.js, and modern CSS frameworks' },
    { name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces' },
    { name: 'Responsive Web Design', description: 'Ensuring seamless experiences across all devices' },
    { name: 'Performance Optimization', description: 'Improving load times and overall site performance' }
  ]

  const projects = [
    {
      title: 'Flutter App',
      description: 'A cross-platform mobile application developed using Flutter framework. Features include real-time data synchronization, custom animations, and integration with RESTful APIs.',
      image: '/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_@3x-1-scaled.jpg'  
    },
    {
      title: 'Tic Tac Ultimate',
      description: 'An advanced version of the classic Tic-Tac-Toe game, built with React and featuring an unbeatable AI opponent using the minimax algorithm.',
      image: '/1_JWStOGfx3DvZDDphuMNvgQ.jpg' 
    },
    {
      title: 'Catch Me',
      description: 'An interactive web game developed with vanilla JavaScript, HTML5 Canvas, and CSS3. Demonstrates proficiency in game logic implementation and browser performance optimization.',
      image: '/catch-me-screenshot.jpg' 
    },
    {
      title: 'Weather Forecast',
      description: 'A weather forecasting web application that integrates with multiple weather APIs. Built with Next.js and featuring server-side rendering for improved SEO and performance.',
      image: '/weather-forecast-screenshot.jpg' 
    }
  ]
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0B1F] to-[#1A1830] text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-20 pt-32 relative">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="w-64 h-64 mx-auto mb-6 relative">
            <div className="absolute -mt-8 -ml-8 inset-0 w-80 h-80 bg-blue-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
            <Image
              src="/pic.jpg"
              alt="Avatar"
              width={512}
              height={512}
              className="relative z-10 rounded-full border-4 border-blue-900"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 animate-fade-in-down">
            Hello! I Am <span className="text-blue-400">Afnan Ahmad Tariq</span>
          </h1>
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">
            I&apos;m a <span className="text-blue-400">{currentRole}</span>
          </h2>
          <p className="text-gray-400 animate-fade-in-up">
            Currently, I&apos;m a Software Engineering Student at <span className="text-blue-400">COMSATS University Islamabad</span>
          </p>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto animate-fade-in-up">
            I am a motivated software engineering student having skills in software development and
            software deployment while also having interest in data science, AI, cloud technologies and
            cyber security, and some basic experience in those fields. I also have interest in Japan and
            its culture as there are many IT companies that dominates world wide such as Sony
            Entertainment.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8 animate-fade-in-down">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-[#1A1830] border-none rounded-xl transition-transform hover:scale-105 duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-20 text-center">
        <p className="text-xl mb-8 animate-fade-in-down">
          I&apos;m currently looking to join a <span className="text-blue-400">cross-functional</span> team
        </p>
        <p className="text-gray-400 mb-12 animate-fade-in-up">that values improving people&apos;s lives through accessible design</p>
        <div className="relative w-96 h-96 mx-auto">
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-float">
            <Image
                  src="/a.svg"
                  alt={`A`}
                  width={60}
                  height={95}
                  className="rounded-lg"
                />
            </span>
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            {[SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, 
              SiCss3, SiFigma, SiAdobephotoshop, SiGit, SiGithub, SiVisualstudiocode].map((Icon, i) => (
              <div
                key={i}
                className="absolute w-10 h-10 bg-[#1A1830] rounded-full flex items-center justify-center"
                style={{
                  left: `${50 + 40 * Math.cos(2 * Math.PI * i / 12)}%`,
                  top: `${50 + 40 * Math.sin(2 * Math.PI * i / 12)}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Icon className="text-blue-400 w-6 h-6 animate-spin-reverse-slow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-2xl font-bold mb-8 animate-fade-in-down">Featured Projects</h2>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-none' : ''}`}>
                <h3 className="text-sm text-blue-400 mb-2 animate-fade-in-left">Featured Project</h3>
                <h4 className="text-xl font-bold mb-4 animate-fade-in-left">{project.title}</h4>
                <p className="text-gray-400 mb-4 animate-fade-in-left">{project.description}</p>
              </div>
              <div className="bg-[#1A1830] rounded-3xl p-4 transition-transform hover:scale-105 duration-300">
                <Image
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={400}
                  className="rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-[#0D0B1F]">
        <h2 className="text-2xl font-bold mb-8 animate-fade-in-down">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

