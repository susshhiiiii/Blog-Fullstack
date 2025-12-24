import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full">
      <div className="relative mb-12 w-full h-60">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className="object-cover grayscale-100"
        />
        <div className="bg-green-600 absolute bottom-2 left-2 text-white font-bold">
          <h1 className="text-2xl">Digital Storytellers</h1>
          <h2 className="text-xl">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="flex gap-24 flex-col md:flex-row">
        <div className="flex flex-col basis-1/2">
          <h1 className="font-bold text-4xl mb-8">Who Are We?</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, unde
            quasi. Quis maxime odit hic itaque culpa accusamus beatae, fugiat,
            totam reiciendis cum at dolor. Aliquam quos vitae molestiae saepe.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            qui voluptatibus possimus quia ex eum, quos omnis maxime illo fugiat
            debitis quisquam, inventore cumque error esse voluptate eveniet
            placeat iusto! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cupiditate, deserunt fuga, quasi perferendis odit praesentium
            placeat explicabo, vero ad architecto maiores! Placeat corrupti eum
            ab. Quos voluptas ipsa libero quo?
          </p>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
            maiores, velit fugiat a aliquam distinctio doloribus cumque ab vitae
            dicta possimus id consequuntur ea quidem laborum autem quam
            cupiditate vel?
          </p>
        </div>
        <div className="flex flex-col basis-1/2">
          <h1 className="font-bold text-4xl mb-8">What We Do?</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            laborum ea saepe laudantium porro placeat consequatur nulla
            necessitatibus id! Dolor possimus aut nobis, labore libero itaque
            voluptas. Dicta, unde praesentium?
          </p>
          <ul className="space-y-2">
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Creative Illustrations
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Dynamic Websites
            </li>
            <li className="relative pl-4 before:content-['-'] before:absolute before:left-0">
              Fast and Handy Mobile Apps
            </li>
          </ul>
          <button className="bg-green-600 text-white rounded px-4 py-2 self-start mt-4">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default About;
