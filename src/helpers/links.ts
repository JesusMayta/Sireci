import { FcServices, FcPlus, FcConferenceCall, FcLike } from 'react-icons/fc';
import { GiDeathSkull } from "react-icons/gi";

export const routes = [
    { id: 1, to: '/nacimiento', name: 'Nacimiento', icon: FcPlus },
    { id: 2, to: '/matrimonio', name: 'Matrimonio', icon: FcLike },
    { id: 3, to: '/', name: 'Defunción', icon: GiDeathSkull },
    { id: 4, to: '/mantenimiento', name: 'Mantenimiento', icon: FcServices }
];

export const SideLinks = {
    'user': [...routes],
    'admin': [
        ...routes,
        { id: 5, to: '/usuarios', name: 'Usuarios', icon: FcConferenceCall },
    ]
};