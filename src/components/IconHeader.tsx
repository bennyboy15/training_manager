import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

type Props = {
    icon: IconName,
    title: string
}

function IconHeader({icon, title}: Props) {
    return (
        <div className="flex gap-2">
            <DynamicIcon name={icon} color="#3845ff" />
            <h1 className="font-semibold text-gray-700">{title}</h1>
        </div>
    )
}

export default IconHeader