import { FcServices, FcPlus, FcConferenceCall, FcLike, FcReading } from 'react-icons/fc';
import { GiDeathSkull } from "react-icons/gi";

const routes = [
    { id: 1, to: '/nacimiento', name: 'Nacimiento', icon: FcPlus },
    { id: 2, to: '/matrimonio', name: 'Matrimonio', icon: FcLike },
    { id: 3, to: '/defuncion', name: 'Defunción', icon: GiDeathSkull },
    { id: 4, to: '/mantenimiento', name: 'Mantenimiento', icon: FcServices },
    { id: 5, to: '/personas', name: 'Personas', icon: FcReading },

];

export const SideLinks = {
    'user': [...routes],
    'admin': [
        ...routes,
        { id: 6, to: '/usuarios', name: 'Usuarios', icon: FcConferenceCall },
    ]
};