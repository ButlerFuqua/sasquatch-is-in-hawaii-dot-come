import Image from "next/image";

import StandardButton from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <br />

      <div id="wrapper" className="p-1">
        <div id="headerSection" className="customContainer mx-auto text-center mb-2 text-4xl font-black">
          <h1>Sasquatch is in Hawai'i</h1>
        </div>

        <div id="topJoinAndStoreButtons" className="sticky top-0 customContainer mx-auto flex justify-around">
          <StandardButton text="Join" />
          <StandardButton text="Share" />
        </div>


        <br />


        <div id="videoWrapper" className="container mx-auto flex justify-center">
          {/* @ts-ignore */}
          <iframe className="rounded" width="560" height="315" src="https://www.youtube.com/embed/djfYLdBeWhY?si=sbPyruQN75tW8NCN" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>


        <div id="shareWrapper" className="sticky top-0 customContainer mx-auto flex justify-around mt-1">
          <StandardButton text="Share Video on Youtube" className="" />
          <StandardButton text="Share this site" className="" />
        </div>

      </div>
    </main>
  );
}
