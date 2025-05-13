
'use client'


import { useState } from "react"
import { 
    IoArchive, 
    IoCartOutline, 
    IoCartSharp 
} from "react-icons/io5"

interface CartCounterProps {
    initialValue?: number
}


export const CartCounter = ({ initialValue = 1 }: CartCounterProps) => {

    const [counter, setCounter] = useState<number>( initialValue )

    return (
        <div className="flex flex-col justify-center items-center">
            <span className="text-5xl mt-2">{ counter }</span>
            <div className="flex justify-between items-center gap-4 mt-2">
                <button
                    onClick={() => setCounter(counter - 1)}
                    disabled={counter <= 0}
                    className="flex justify-center items-center text-white w-[100] bg-gray-900 hover:bg-gray-600 transition-all p-2 rounded cursor-pointer disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed">
                    -1
                </button>
                <button
                    onClick={() => setCounter(counter + 1)}
                    disabled={counter >= 10}
                    className="flex justify-center items-center text-white w-[100] bg-gray-900 hover:bg-gray-600 transition-all p-2 rounded cursor-pointer disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed">
                    +1
                </button>
            </div>
            <div className="fixed bottom-5 right-5">
                {
                    counter === 1 && (
                        <span className="flex justify-center items-center gap-3 text-green-600 bg-green-100 border-2 border-green-600 text-lg p-2 rounded">
                            <IoCartSharp size={ 30 } />
                            Tienes { counter } producto en el carrito
                        </span>
                    )
                }
                {
                    counter > 1 && counter < 10 && (
                        <span className="flex justify-center items-center gap-3 text-green-600 bg-green-100 border-2 border-green-600 text-lg p-2 rounded">
                            <IoCartSharp size={ 30 } />
                            Tienes { counter } productos en el carrito
                        </span>
                    )
                }
                {
                    counter === 10 && (
                        <span className="flex justify-center items-center gap-3 text-yellow-600 bg-yellow-100 border-2 border-yellow-600 text-lg p-2 rounded">
                            <IoArchive size={ 30 } />
                            Has alcanzado el máximo de productos en el carrito
                        </span>
                    )
                }
                {
                    counter === 0 && (
                        <span className="flex justify-center items-center gap-3 text-red-600 bg-red-100 border-2 border-red-600 text-lg p-2 rounded">
                            <IoCartOutline size={ 30 } />
                            No hay productos en el carrito
                        </span>
                    )
                }
            </div>
        </div>
    )
}
