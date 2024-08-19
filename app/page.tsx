import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
   <h1 className="text-2xl font-black">Sasquatch is in Hawai'i</h1>
   <h2>Coming soon</h2>
   <h3>Join email list</h3>
   <p>
      <a className="text-xl font-black" href="https://butlerfuqua.beehiiv.com/subscribe" target="_blank">Newsletter Signup Page ↗️</a>
   </p>
    </main>
  );
}
