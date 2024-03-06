
const Card = ({title , sub , image , description}) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg mt-3">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={image} alt=""></img>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <a href="#" className="hover:underline">{title}</a>
                    </p>
                    <a href="#" className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{sub}</p>
                        <p className="mt-3 text-base text-gray-500">{description}</p>
                    </a>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <button className="px-8 bg-blue-500 rounded-lg py-3 text-white">Pesan sekarang</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;