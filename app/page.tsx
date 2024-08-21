"use client"

import Image from "next/image";

import StandardButton from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";
import TextInput from "@/components/TextInput";
import ButtonLink from "@/components/ButtonLink";
import axios from "axios";
import Loader from "@/components/Loader";

export default function Home() {

  const [showJoinModal, setShowJoinModal] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const backupErrorMessage = `Sorry! There was an error. Try again?`;

  const handleCloseJoinModal = () => {
    setShowJoinModal(false);
  }

  const handleOpenJoinModal = () => {
    setShowJoinModal(true);
  }

  const handleShareClick = () => {
    console.log('SHARE!');
  }

  const handleSubmission = async (event: any) => {
    event.preventDefault();

    alert('hey')

    setShowLoader(true);

    try {
      await axios.post(`/api/signup`, {
        email: subscribeEmail.trim().toLowerCase(),
      });
    } catch (error: any) {
      let errorMsg = ``;
      switch (error.response?.status) {
        case 400:
          errorMsg = `Email or message is invalid.`;
          break;
        default:
          errorMsg = backupErrorMessage;
          break;
      }
      setErrorMessage(errorMsg);
      setShowLoader(false);
      console.error(error);
      setTimeout(() => { setErrorMessage(null) }, 3000)
      return;
    }

    setSubscribeEmail('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setShowLoader(false);
  }
  return (

    <main className="min-h-screen">


      {/* Join Modal */}
      <Modal showModal={showJoinModal} closeAction={handleCloseJoinModal}>
        <div className="container p-1 flex flex-col justify-center h-full">
          <div>

            {!showLoader
              ? <form className="flex" onSubmit={handleSubmission}>
                <TextInput inputType="email" value={subscribeEmail} setValue={setSubscribeEmail} required={true} />
                <StandardButton buttonType="submit" text="Subscribe" className="ml-1" />
              </form>
              : <div style={{ height: `3rem`, }} className="flex justify-center w-100 items-center rounded">
                <Loader />
              </div>
            }


            <p className="my-2 font-bold text-center">Real Updates <span className="font-black">ONLY</span></p>
            <p className="text-center mt-2">Your email will not be shared or sold, and you will not be bombarded with emails.</p>
          </div>
        </div>
      </Modal>

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
          <StandardButton onClick={handleOpenJoinModal} text="Join" className="" fontColorClass="text-black" />
          <StandardButton onClick={handleShareClick} text="Share" borderColor="border-primary_alt" className="" />
        </div>


        <div id="videoWrapper" className="container mx-auto flex justify-center">
          {/* @ts-ignore */}
          <iframe className="rounded" width="560" height="315" src="https://www.youtube.com/embed/djfYLdBeWhY?si=sbPyruQN75tW8NCN" title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
        <div className="flex justify-center p-2">
          <ButtonLink href="https://sasquatch-is-in-hawaii.printful.me/" text="Visit Store" />
        </div>


        {/* <div id="shareWrapper" className="sticky top-0 customContainer mx-auto flex justify-around mt-1">
          <StandardButton text="Share Video from Youtube" bgColorClass="bg-red-500" className="flex-1" />
          <StandardButton text="Share this site" bgColorClass="bg-yellow-400" fontColorClass="text-black" className="flex-1" />
        </div> */}

      </div>
    </main>
  );
}
