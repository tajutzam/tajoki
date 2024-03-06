const Why = () => {
    return (
        <section id="why-chose-us" className="mt-6 mb-4 bg-slate-100">
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="lg:text-center items-center text-center">
                        <h2
                            className="font-heading mb-4 text-lg bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                            Alasan memilih kami
                        </h2>
                        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        </p>
                        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto mx-auto text-center">
                            Dengan Tajoki, Anda dapat yakin tugas-tugas Anda diselesaikan dengan cepat dan berkualitas tinggi. Layanan profesional kami menjamin keamanan dan kerahasiaan data Anda. Percayakan pada Tajoki untuk solusi tugas yang mudah dan efisien!
                        </p>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="/privacy.png"></img>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Privasi Aman</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Joki di sini ga bakal ada yang namanya adu adu di kampus kalian
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="/trust.png" ></img>
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Terpercaya
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Dengan Tajoki, Anda dapat yakin tugas Anda ditangani oleh ahli yang dapat dipercaya. Kami telah membuktikan kredibilitas kami dalam memberikan hasil yang tepat waktu dan berkualitas tinggi. Percayakan pada Tajoki untuk tugas yang terpercaya
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="/price-tag.png" ></img>

                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Murah
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500"> Dapatkan layanan Tajoki dengan harga yang terjangkau. Kami menawarkan solusi terpercaya untuk tugas Anda tanpa menguras kantong Anda. Hemat uang Anda dengan Tajoki!
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="/quick.png" ></img>

                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Sat set
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Deadline mepet ? tenang tajoki bisa nyelesain tugas mu dalam hitungan menit aja !
                                </dd>
                            </div>
                        </dl>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Why;