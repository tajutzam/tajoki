"use client"
import Why from "@/components/why";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Service from "@/components/service";

export default function Home() {


  const pesan = () => {
    alert('pesan')
  }

  return (
    <main className="flex flex-col h-screen justify-between scroll-smooth focus:scroll-auto">
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Why></Why>
        <Service></Service>
      </div>
      <Footer></Footer>
      <div className="fixed bottom-8 right-8">
        <a
          href="https://wa.me/6285175286933?text=Halo,%20saya%20mau%20joki%20coding."
          className="block rounded-lg bg-white px-4 py-2 text-sm font-medium text-white shadow focus:outline-none focus:ring"
        >
          <div className="flex gap-2 items-center">
            <img src="/whatsapp.png" alt="" className="h-10" />
            <h5 className="text-gray-800">Order sekarang</h5>
          </div>
        </a>
      </div>
    </main>
  );
}
