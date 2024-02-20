import { tailChase } from "ldrs";
export const LoadComponent = () => {

    tailChase.register();

    return (
        <div className="w-full h-full flex items-center justify-center ">
            <l-tail-chase
                size="40"
                speed="1.75"
                color="black"
            >
            </l-tail-chase>
        </div>
    )
}
