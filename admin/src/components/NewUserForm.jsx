import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const NewUserForm = ({ isOpen, setIsOpen }) => {

    // function open() {
    //     setIsOpen(true);
    // }

    return (
        <>
            {/* <Button
                onClick={open}
                className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white"
            >
                Open dialog
            </Button> */}

            {
                isOpen &&
                <div className="fixed w-full min-h-screen bg-black/70 top-0 left-0">
                    <Dialog
                        open={isOpen}
                        className="relative z-10 focus:outline-none"
                        onClose={() => setIsOpen(false)}>

                        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                            <div className='flex min-h-full items-center justify-center p-4 '>
                                <DialogPanel className="w-full max-w-xl rounded-lg px-10 py-5 bg-white" >
                                    <div>
                                        <DialogTitle className="text-lg text-center items-center font-medium text-gray-900">New User</DialogTitle>

                                    </div>
                                </DialogPanel>
                            </div>
                        </div>

                    </Dialog>
                </div>
            }
        </>
    );
};

export default NewUserForm;


