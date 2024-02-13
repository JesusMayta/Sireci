import { FcServices, FcPlus, FcConferenceCall, FcLike } from 'react-icons/fc';
import { GiDeathSkull } from "react-icons/gi";

export const sideLinks = [
    { id: 1, to: '/nacimiento', name: 'Nacimiento', icon: FcPlus },
    { id: 2, to: '/matrimonio', name: 'Matrimonio', icon: FcLike },
    { id: 3, to: '/', name: 'Defunción', icon: GiDeathSkull },
    { id: 4, to: '/', name: 'Usuarios', icon: FcConferenceCall },
    { id: 5, to: '/', name: 'Mantenimiento', icon: FcServices }
];