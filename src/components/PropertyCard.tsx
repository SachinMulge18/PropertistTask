import type { Property } from '../types/property'
import { useNavigate } from 'react-router-dom'
import { Home, MapPin } from 'lucide-react'

interface Props {
    property: Property
}

const PropertyCard = ({ property }: Props) => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate(`/property/${property.id}`)}
            className="relative bg-white rounded-xl overflow-hidden shadow cursor-pointer hover:scale-[1.02] transition"
        >
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-52 object-cover"
            />

            <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${property.type === 'Buy'
                    ? 'bg-blue-600 text-white'
                    : 'bg-green-600 text-white'
                    }`}
            >
                {property.type === 'Buy' ? 'For Sale' : 'For Rent'}
            </span>

            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{property.title}</h2>
                    <span className="text-sm bg-black text-white px-2 py-1 rounded">
                        {property.type}
                    </span>
                </div>

                <p className="flex items-center gap-1 text-gray-600 mt-2"> <MapPin className='size-4' /> {property.location}</p>

                <div className="flex justify-between items-center mt-3">
                    <p className="font-bold text-blue-600">{property.price}</p>
                    <p className='flex items-center gap-1'> <Home className='size-4' />{property.bhk} BHK</p>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard
