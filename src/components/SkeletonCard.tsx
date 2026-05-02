const SkeletonCard = () => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow animate-pulse">
            <div className="h-52 bg-gray-300"></div>

            <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    )
}

export default SkeletonCard