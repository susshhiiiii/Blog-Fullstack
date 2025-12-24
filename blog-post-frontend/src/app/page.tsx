import Image from "next/image";
import heropng from "../../public/hero.png"
export default function Home() {
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex flex-col justify-center items-start basis-1/2">
        <h1 className="font-bold text-7xl bg-linear-to-b mb-7 from-green-700 to-gray-400 bg-clip-text text-transparent">
          Better Design for your digital products.
        </h1>
        <p className="mb-7 text-xl">Turning your idea into Reality.We bring together the teams from the global tech Industry.</p>
        <button className="justify-self-start bg-green-700 rounded-md p-3 text-gray-200">See Our Work</button>
      </div>
      <div className="flex flex-col basis-1/2 justify-center">
        <Image src={heropng}  className="object-contain" alt={"hero png"}></Image>
      </div>
    </div>
  );
}
