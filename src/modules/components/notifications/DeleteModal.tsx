import { LuAlertTriangle } from 'react-icons/lu';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useUiStore } from '../../../hooks';

export const DeleteModal = () => {

    const { isOpenDeleteModal, startCloseDeleteModal } = useUiStore();

    return (
        <Transition appear show={isOpenDeleteModal} as={Fragment}>
            <Dialog as="div" className="relative z-40" onClose={startCloseDeleteModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/90" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 flex justify-center  gap-x-3 "
                                >
                                    <LuAlertTriangle className="text-xl text-yellow-600" />
                                    Mensaje de alerta
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-700 text-center">¿Estas seguro de eliminar el certificado?
                                    </p>
                                </div>

                                <div className="mt-4 w-full flex justify-center">
                                    <button
                                        type="button"
                                        className="rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={startCloseDeleteModal}
                                    >
                                        Sí, eliminar!
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
