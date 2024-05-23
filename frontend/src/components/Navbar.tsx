const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-xl bg-gray-50 rounded-3xl px-6 my-7">
        <div className="flex justify-between items-center h-16">
            <div>
                <button className="font-semibold">Khangerel</button>
            </div>
            <div className="flex gap-9 items-center font-light text-xl">
                <button>Home</button>
                <button>About</button>
                <button>Resume</button>
                <button>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
