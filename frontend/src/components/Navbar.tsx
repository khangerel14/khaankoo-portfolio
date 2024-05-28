import { Icon } from "@/images"

export const Navbar = () => {
  return (
    <div className="p-4 my-5 text-xl">
      <div className="flex mx-auto w-[1440px] justify-between items-center">
        <div className="flex gap-3 items-center font-bold">
          <Icon />
          <button>Khaankoo</button>
        </div>
        <div className="flex gap-4 items-center font-medium">
          <a className="hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition">About</a>
          <a className="hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition">Skills</a>
          <a className="hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition">Projects</a>
          <a className="hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition">Education</a>
          <a className="hover:text-violet-950 p-2 hover:translate-y-3 ease-in-out cursor-pointer transition">Contact me</a>
          <a className="transform p-1.5 px-3 rounded-full button-80">Github Profile</a>
        </div>
      </div>
    </div>
  )
}