'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import Navbar from '@/components/Navbar'
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, 
  SiHtml5, SiFigma, SiAdobephotoshop, SiGit, SiFlutter,
  SiMongodb, SiExpress, SiPython
} from 'react-icons/si'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentRole, setCurrentRole] = useState('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = ['Software Engineer', 'UI/UX Designer', 'Web Developer', 'Problem Solver', 'Game Developer', 'Mobile Developer', 'AI Engineer']
  const [roleIndex, setRoleIndex] = useState(0)
  const [typing, setTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    let typingTimeout: string | number | NodeJS.Timeout | undefined
    let roleChangeTimeout: string | number | NodeJS.Timeout | undefined

    const currentString = roles[roleIndex]

    // Function to type out the current role
    const typeRole = () => {
      if (typing) {
        // Typing effect
        typingTimeout = setInterval(() => {
          // Add one character at a time until the full word is typed
          if (charIndex < currentString.length) {
            setCurrentRole((prev) => prev + currentString[charIndex])
            setCharIndex((prev) => prev + 1)
          } else {
            // After fully typing the role, stop typing and start deleting
            clearInterval(typingTimeout)
            setTimeout(() => {
              setTyping(false)
            }, 1000) // Delay before starting to delete
          }
        }, 150) // Speed of typing effect
      } else {
        // Deleting effect
        typingTimeout = setInterval(() => {
          setCurrentRole((prev) => prev.slice(0, prev.length - 1))
          
          if (currentRole.length === 0) {
            clearInterval(typingTimeout)
            setTimeout(() => {
              // After deleting, switch to next role
              setRoleIndex((prev) => (prev + 1) % roles.length)
              setTyping(true) // Start typing the next role
              setCharIndex(0)
            }, 1000) // Delay before switching role
          }
        }, 100) // Speed of deleting effect
      }
    }

    typeRole()

    return () => {
      clearInterval(typingTimeout)
      clearTimeout(roleChangeTimeout)
    }
  }, [roleIndex, typing, charIndex, currentRole, roles])

 
  const skills = [
    { name: 'Frontend Development', description: 'Expertise in React, Next.js, and modern CSS frameworks' },
    { name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user interfaces' },
    { name: 'Responsive Web Design', description: 'Ensuring seamless experiences across all devices' },
    { name: 'Performance Optimization', description: 'Improving load times and overall site performance' }
  ]

  const projects = [
    {
      tech:'Flutter | Python',
      title: 'Flutter App',
      description: 'A cross-platform mobile application developed using Flutter framework. Features include real-time data synchronization, custom animations, and integration with RESTful APIs.',
      image: '/Whats-the-Difference-Between-UX-Design-vs.-UI-Design_@3x-1-scaled.jpg', 
      url: 'https://catchme-game.vercel.app/'
    },
    {
      tech:'API | JSON',
      title: 'Weather Forecast',
      description: 'A weather forecasting web application that integrates with multiple weather APIs. Built with Next.js and featuring server-side rendering for improved SEO and performance.',
      image: '/1_JWStOGfx3DvZDDphuMNvgQ.jpg', 
      url: 'https://catchme-game.vercel.app/'
    },
    {
      tech:'Java | JavaFX',
      title: 'Tic Tac Ultimate | Quixo',
      description: 'An advanced version of the classic Tic-Tac-Toe game, built with React and featuring an unbeatable AI opponent using the minimax algorithm.',
      image: '/1_JWStOGfx3DvZDDphuMNvgQ.jpg', 
      url: 'https://catchme-game.vercel.app/'
    },
    {
      tech:'Vanilla Js',
      title: 'Catch Me',
      description: 'An interactive web game developed with vanilla JavaScript, HTML5, and CSS3. Demonstrates proficiency in game logic implementation and browser performance optimization.',
      image: '/screenshots/catch-me.png', 
      url: 'https://catchme-game.vercel.app/'
    }
  ]
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0B1F] to-[#1A1830] text-white">
      <Navbar />
      <div className='main'>
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 py-20 pt-32 relative">
          <div className="max-w-2xl mx-auto text-center relative">
            <div className="w-32 h-32 lg:w-64 lg:h-64 mx-auto mb-6 relative">
              <div className="absolute -mt-2 -ml-2 lg:-mt-8 lg:-ml-8 inset-0 w-50 h-50 lg:w-80 lg:h-80 bg-blue-500 rounded-full opacity-30 blur-xl animate-pulse"></div>
              <Image
                src="/pic.png"
                alt="Avatar"
                width={512}
                height={512}
                className="relative z-10 rounded-full border-4 border-blue-900"
              />
            </div>
            <h1 className="text-xl lg:text-3xl font-bold mb-4 animate-fade-in-down">
              Hello! I Am <span className="text-blue-400">Afnan Ahmad Tariq</span>
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold mb-4 animate-fade-in-up">
              I&apos;m a <span className="text-blue-400">{currentRole}</span>
              <span className="animate-blink text-blue-400">|</span> 
            </h2>
            <p className="text-sm lg:text-base text-gray-400 animate-fade-in-up">
              Currently, I&apos;m a Software Engineering Student at <span className="text-blue-400">COMSATS University Islamabad</span>
            </p>
            <p className="text-sm lg:text-base text-gray-400 mt-4 max-w-xl mx-auto animate-fade-in-up">
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
          <div className="relative w-64 h-64 lg:h-96 lg:w-96 mx-auto">
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
              {[SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiHtml5, SiFigma, SiAdobephotoshop, SiGit, SiPython,  
                SiMongodb, SiFlutter, SiExpress].map((Icon, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 lg:w-10 lg:h-10 bg-[#1A1830] rounded-full flex items-center justify-center"
                  style={{
                    left: `${50 + 40 * Math.cos(2 * Math.PI * i / 12)}%`,
                    top: `${50 + 40 * Math.sin(2 * Math.PI * i / 12)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon className="text-blue-400 w-4 h-4 lg:w-6 lg:h-6 animate-spin-reverse-slow" />
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
                    <h3 className="text-sm text-blue-400 mb-2 animate-fade-in-left">{project.tech}</h3>
                    <h4 className="text-xl font-bold mb-4 animate-fade-in-left">{project.title}</h4>
                    <p className="text-gray-400 mb-4 animate-fade-in-left">{project.description}</p>
                  </div>
                  <div className="bg-[#1A1830] rounded-3xl p-4 transition-transform cursor-pointer hover:scale-105 duration-300">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        width={800}
                        height={400}
                        className="rounded-2xl"
                      />
                    </a>
                  </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}