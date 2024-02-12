
export const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="w-8 h-8 border-4 border-t-transparent border-blue-800 rounded-full animate-spin"></div>
            <p className="ml-3 text-xl">Cargando...</p>
        </div>
    );
};
