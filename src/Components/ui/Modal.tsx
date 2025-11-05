import {  Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import {  type ReactNode } from 'react'

type ModalData ={
    children:ReactNode
    open:boolean
    close:()=>void
}
export  const Modal = ({children ,open , close} :ModalData)=> {
  

  return (
    <>
      

      <Dialog open={open} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 ">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl p-6  bg-white duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium  mb-5 text-black">
                Update Post
              </DialogTitle>
              {children}
              
              
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

