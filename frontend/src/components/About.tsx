'use client'
import { Profile } from "@/images";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type TypewriterHelper = () => void;

export const About = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Coder', 'Full Stack Developer'],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="flex max-w-screen-xl mx-auto items-center my-32">
      <div className="flex flex-col gap-3 w-1/2 items-start justify-start h-64">
        <div className="flex flex-col text-3xl font-bold gap-3">
          <h1>HI, I'm</h1>
          <p>Khangerel Be-ochir</p>
          <div className="flex text-xl gap-2">
            <h1>I am a</h1>
            <p className="text-violet-950">{text}<Cursor cursorStyle='|'/></p>
          </div>
          <p className="text-lg">Your friendly neighborhood frontend developer, UX architect, and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences,</p>
        </div>
        <button className="contact">contact me</button>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <div className="rounded-full h-80 w-80 bg-black relative z-10">
          <div className="transparent absolute z-20"><Profile /></div>
        </div>
      </div>
    </div>
  )
}