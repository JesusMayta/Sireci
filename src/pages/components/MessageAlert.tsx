interface options {
    message: string | undefined;
};

export const MessageAlert = ({ message }: options) => {
    return (
        <p className="text-red-600 text-sm mt-1 font-bold">
            {message}
        </p>
    );
};
