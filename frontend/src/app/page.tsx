import { About, Contact, Navbar, Projects, Skills } from "@/components";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <div>
      <AnimatedCursor />
      <Navbar />
      <About /> 
    </div>
  );
}
