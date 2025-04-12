import React from 'react'
import Image from 'next/image'
import { FolderKanban, LayoutTemplate, LucideIcon, PackageOpen, Proportions, SquareUser, Truck } from 'lucide-react'
type ServiceCardProps = {
    Icon: LucideIcon;
    title: string;
    description: string;
};
export default function ServiceCards({ Icon, title, description, }: ServiceCardProps) {
    return (
        <div>
            <Icon />
            <h3>{title}</h3>
            <p>{description}</p>
            <button>Contact Us</button>
        </div>
    )
}
{/* <Truck />
            <LayoutTemplate />
            <Proportions />
            <PackageOpen />
            <FolderKanban /> */}