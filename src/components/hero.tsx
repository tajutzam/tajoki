


const Hero = () => {


    return (
        <section
            className={`relative bg-[url(/cookie-the-pom-gySMaocSdqs-unsplash.jpg)] bg-cover bg-center bg-no-repeat`}
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Tugas susah ?
                        <strong className="block font-extrabold text-blue-800"> Tajoki aja </strong>
                    </h1>

                    <p className="mt-4 max-w-lg text-lg sm:text-xl/relaxed text-black lg:text-white sm:text-black md:text-black">
                        Joki tugas informatika start 25k aja 👋
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="https://wa.me/6285175286933?text=Halo,%20saya%20mau%20joki%20coding."
                            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Order Sekarang
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;