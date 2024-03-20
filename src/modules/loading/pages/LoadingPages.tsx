import { spiral } from 'ldrs';
export const LoadingPage = () => {

    spiral.register();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <l-spiral
                size="40"
                speed="0.9"
                color="black"
            ></l-spiral>
        </div>
    );
};
