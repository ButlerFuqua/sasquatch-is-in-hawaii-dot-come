import Image from "next/image";

import StandardButton from "@/components/Button";

export default function Home() {
  return (

    <main className="min-h-screen">
      <br />

      <div id="wrapper" className="p-1">
        <div id="headerSection" className="customContainer mx-auto text-center mb-3">
          <h1 className="text-4xl font-black mb-1">Sasquatch is in Hawai'i</h1>
          <p>A self-obsorbed media guru and an Alabama Squatcher try to find Sasquatch in the one location no one has looked -Hawai'i</p>
        </div>



        {/* 

NEXT: Get ALL Buttons to work
THEN: Add Social Follow Buttons
THEN: COLOR PALLET
THEN: FOOTER LINKS
THENK: COOL BACKGROUND

*/}



        <div id="topJoinAndStoreButtons" className="sticky top-0 customContainer mx-auto flex justify-around bg-white py-1">
          <StandardButton text="Join" className="" fontColorClass="text-black" />
          <StandardButton text="Share" borderColor="border-primary_alt" className="" />
        </div>


        <div id="videoWrapper" className="container mx-auto flex justify-center">
          {/* @ts-ignore */}
          <iframe className="rounded" width="560" height="315" src="https://www.youtube.com/embed/djfYLdBeWhY?si=sbPyruQN75tW8NCN" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>


        {/* <div id="shareWrapper" className="sticky top-0 customContainer mx-auto flex justify-around mt-1">
          <StandardButton text="Share Video from Youtube" bgColorClass="bg-red-500" className="flex-1" />
          <StandardButton text="Share this site" bgColorClass="bg-yellow-400" fontColorClass="text-black" className="flex-1" />
        </div> */}

      </div>
    </main>
  );
}
