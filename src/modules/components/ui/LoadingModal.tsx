import { ring } from 'ldrs';

export const LoadingModal = () => {

    ring.register();

    return (
        <div className="fixed bg-black/80 inset-0 w-screen h-screen flex items-center justify-center z-40 antialiased">
            <l-ring
                size="40"
                stroke="5"
                bg-opacity="0"
                speed="2"
                color="white"
            ></l-ring>
        </div>
    );
};
