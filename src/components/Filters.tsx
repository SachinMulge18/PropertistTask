import React from 'react'
interface Props {
    mode: 'Buy' | 'Rent'
    onModeChange: (mode: 'Buy' | 'Rent') => void
    selectedBhk: number | null
    onBhkChange: (bhk: number | null) => void
}

const BHK_OPTIONS = [1, 2, 3, 4, 5]
const Filters = ({ mode, onModeChange, selectedBhk, onBhkChange }: Props) => {
    return (

        <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                    onClick={() => onModeChange('Buy')}
                    className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors ${mode === 'Buy' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Buy
                </button>
                <button
                    onClick={() => onModeChange('Rent')}
                    className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors ${mode === 'Rent' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    Rent
                </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-500 font-semibold">BHK:</span>
                <button
                    onClick={() => onBhkChange(null)}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${selectedBhk === null
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                        }`}
                >
                    All
                </button>
                {BHK_OPTIONS.map((bhk) => (
                    <button
                        key={bhk}
                        onClick={() => onBhkChange(selectedBhk === bhk ? null : bhk)}
                        className={`px-3 py-1 rounded-full text-sm border transition-colors ${selectedBhk === bhk
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                            }`}
                    >
                        {bhk} BHK
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filters
