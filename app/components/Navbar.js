import { ChevronDown, ArrowLeft, ArrowLeftIcon } from 'lucide-react'
import Image from 'next/image'

export default function NavBar() {
    return (
    
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <button variant="ghost" size="icon" className="h-8 w-8">
                    <ArrowLeftIcon className="h-4 w-4" />
                </button>
                <h1 className="text-xl font-semibold">Stories</h1>
            </div>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300" />
                    <span className="text-sm">Akshay Patel</span>
                </div>
                <button variant="ghost" size="icon" className="h-8 w-8">
                    <div className="w-4 h-4" />
                </button>
            </div>
        </header>
    )
}
