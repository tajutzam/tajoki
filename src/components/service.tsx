import Card from "./Card"




const Service = () => {


    const content = [
        {
            title: 'Web Developer',
            sub: 'Informatika',
            price: 'Start from 100k',
            desc: 'Bisa banget nih tajokiin terkait dengan tugas web developer kamu',
            img: '/web.jpg'
        },
        {
            title: 'Android developer',
            sub: 'Informatika',

            price: 'Start from 100k',
            desc: 'lorem picsum',
            img: '/web.jpg'
        }, {
            title: 'Machine learning',
            sub: 'Informatika',

            price: 'Start from 100k',
            desc: 'lorem picsum',
            img: '/web.jpg'
        },
    ]

    return (
        <section id="why-chose-us" className="mt-6 mb-4 bg-slate-100">
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="lg:text-center items-center text-center">
                        <h2
                            className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                            Ada apa aja sih?
                        </h2>
                        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                        </p>
                    </div>
                    <div className="mt-10">
                        {content.map((item, index) => (
                            <Card title={item.title} description={item.desc} image={item.img} sub={item.sub}></Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service