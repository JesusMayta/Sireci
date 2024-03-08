import { useEffect } from "react";
import { useUiStore } from "../../../hooks";
import { PrincipalLayout } from "../../layouts"
import { Footer, TitlePage } from "../../components";
import { MarriageDocument, PrincipalView } from "../views";

export const MatrimonioPage = () => {

    const { isOpenViewForm, onChangeStateViewForm } = useUiStore();

    useEffect(() => {
        onChangeStateViewForm(false);
    }, []);

    return (
        <PrincipalLayout>
            <div className="flex flex-col justify-between h-full">
                <div className="h-[90%] flex bg-grad flex-col justify-between w-full">
                    <div className="pt-6 sm:pt-2">
                        <TitlePage title={(isOpenViewForm) ? 'Registrar partida de matrimonio' : 'Actas de matrimonio'} />
                    </div>

                    {(isOpenViewForm) ? (<MarriageDocument />) : (<PrincipalView />)}
                </div>

                <div className="h-[10%] w-full">
                    <Footer />
                </div>
            </div>
        </PrincipalLayout>
    );
};
