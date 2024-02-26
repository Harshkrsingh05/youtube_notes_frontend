import Image from "next/image";
import Hero from "./components/Hero";
import Response from "./components/response";
export default function Home() {
  return (
    <div className="h-full w-full">
      {/* <Hero/> */}
      <Response/>
    </div>
  );
}
