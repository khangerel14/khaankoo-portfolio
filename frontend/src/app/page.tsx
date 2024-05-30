import { About, Navbar, Projects, Skills } from "@/components";
import { Toggle } from "@/images";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Toggle />
    </div>
  );
}
