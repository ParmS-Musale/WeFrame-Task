import {
    Home,
    FileText,
    User,
    Users,
    Monitor,
    BarChart2,
    Video,
    Move,
    Bell,
    Play,
    Settings,
    Headphones,
} from 'lucide-react'

const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard' },
    { icon: <FileText size={20} />, label: 'Content', active: true },
    { icon: <User size={20} />, label: 'User' },
    { icon: <Users size={20} />, label: 'Task' },
    { icon: <Monitor size={20} />, label: 'App/Web' },
    { icon: <BarChart2 size={20} />, label: 'Analytics' },
    { icon: <Video size={20} />, label: 'Media' },
    { icon: <Move size={20} />, label: 'Customize' },
    { icon: <Bell size={20} />, label: 'Notifications' },
    { icon: <Play size={20} />, label: 'Subscription' },
    { icon: <Settings size={20} />, label: 'Settings' },
]

export default function Sidebar() {
    return (
        <div className="w-60 mt-12  bg-white p-4 flex flex-col justify-between">
            <div className="space-y-4 flex flex-col justify-center">
                {menuItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex items-center gap-2 px-2 py-2 w-32 rounded-xl  cursor-pointer transition-colors ${item.active
                            ? 'bg-[#1E154D] text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {item.icon}
                        <span className="text-xs font-medium">{item.label}</span>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-indigo-100 text-black cursor-pointer hover:bg-indigo-200 transition-colors">
                    <Headphones size={20} />
                    <span className="text-sm font-medium">Contact Support</span>
                </div>
            </div>
        </div>
    )
}
