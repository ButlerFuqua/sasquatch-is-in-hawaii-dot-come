
import StandardButton from "./Button";


type ModalPropType = {
    children: any;
    showModal: boolean;
    closeAction: Function;
}

export default function Modal({ children, showModal, closeAction }: ModalPropType) {

    if (!showModal) {
        return null;
    }
    return (
        <div className="min-h-screen fixed top-0 left-0 bg-white w-full z-10 h-full">
            <div className="flex justify-center p-3">
                <StandardButton text="close" onClick={closeAction} borderColor="border-black" />
            </div>
            {children}
        </div>
    )
}