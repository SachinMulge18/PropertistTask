import { useNavigate, useParams } from 'react-router-dom'
import propertiesData from "../data/properties.json"
import { ArrowBigLeft, MapPin } from 'lucide-react'
const PropertyDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const property = propertiesData.find((item) => item.id === Number(id))

    if (!property) {
        return <div className="p-5">Property not found</div>
    }
    return (
        <>
            <div className='bg-gray-50 min-h-screen'>
                <div className='max-w-5xl mx-auto px-4 py-6'>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-800 text-sm mb-5 transition-colors"
                    >
                        <ArrowBigLeft className='size-5' />
                        Back to listings
                    </button>

                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <div className="relative h-64 sm:h-80 md:h-96">
                            <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                            <span
                                className={`absolute top-4 left-4 text-sm font-semibold px-3 py-1.5 rounded-full ${property.type === 'Buy' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'}`}
                            >
                                {property.type === 'Buy' ? 'For Sale' : 'For Rent'}
                            </span>
                        </div>

                        <div className="bg-white p-5 rounded-xl shadow">
                            <div className="flex items-center justify-between gap-4">
                                <h1 className="text-2xl md:text-3xl font-bold">{property.title}</h1>

                                <span className="bg-black text-white px-4 py-2 rounded-lg w-fit">
                                    {property.type}
                                </span>
                            </div>

                            <p className="text-gray-600 my-3 flex items-center gap-1"><MapPin className='size-4' /> {property.location}</p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">

                                <p className='bg-gray-50 rounded-xl p-3 text-center'>
                                    <p className='text-xs text-gray-400 mb-1'>BHK </p>
                                    <p className='font-semibold text-gray-800 text-sm'>{property.price}</p>
                                </p>
                                <p className='bg-gray-50 rounded-xl p-3 text-center'>
                                    <p className='text-xs text-gray-400 mb-1'>BHK </p>
                                    <p className='font-semibold text-gray-800 text-sm'>{property.bhk}BHK</p>
                                </p>


                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 mt-5">
                                <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                                    Contact Owner
                                </button>
                                <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors">
                                    Schedule Visit
                                </button>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    )
}

export default PropertyDetails
