import { useEffect, useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import propertyData from "../data/properties.json"
import SearchBar from '../components/SearchBar'
import type { Property } from '../types/property'
import SkeletonCard from '../components/SkeletonCard'
import Filters from '../components/Filters'
import { useDebounse } from '../hooks/useDebouseHook'

const Home = () => {
    const [properties, setProperties] = useState<Property[]>([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)
    const [mode, setMode] = useState<'Buy' | 'Rent'>('Buy')
    const [selectedBhk, setSelectedBhk] = useState<number | null>(null)

    const debounceSearch = useDebounse(search, 350)

    useEffect(() => {
        setTimeout(() => {
            setProperties(propertyData)
            setLoading(false)
        }, 1500)
    }, [])

    const filtered = properties.filter((p) => {
        const matchesMode = p.type === mode
        const matchesBhk = selectedBhk === null || p.bhk === selectedBhk
        const matchesSearch =
            debounceSearch.trim() === '' ||
            p.location.toLowerCase().includes(debounceSearch.toLowerCase())

        return matchesMode && matchesBhk && matchesSearch
    })

    console.log("filtered", filtered)
    console.log(mode)

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className="bg-blue-600 py-10 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                        Find Your Perfect Home
                    </h1>
                    <p className="text-blue-100 mb-6 text-sm sm:text-base">
                        Search from hundreds of verified properties across areas
                    </p>
                    <SearchBar value={search} onChange={setSearch} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
                    <Filters
                        mode={mode}
                        onModeChange={(m) => { setMode(m); setSelectedBhk(null) }}
                        selectedBhk={selectedBhk}
                        onBhkChange={setSelectedBhk} />
                </div>

                {!loading && (
                    <p className="text-lg capitalize text-gray-500 mb-4">
                        {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
                        {debounceSearch && ` for "${debounceSearch}"`}
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
                    {loading ? Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    )) :
                        filtered.map((property) => (
                            <PropertyCard
                                key={property.id}
                                property={property}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
