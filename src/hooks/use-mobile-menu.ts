import React from "react";

export function useMobileMenu() {
    /** state */
    // mobile drawer state check
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    //prevent body scroll when menu in open
    React.useEffect(()=>{
        if(isOpen){
            document.body.style.overflow="hidden";
        }else{
            document.body.style.overflow ="unset";
        }

        return()=>{
            // when mobile menu ends
            document.body.style.overflow ="unset"; // set by default
        }
    },[isOpen]);

    // toggle for setIsOpen
    const toggle = () => setIsOpen(prev=> !prev);
    // open method
    const open = () => setIsOpen(true);
    // close method
    const close = () => setIsOpen(false);

    // return hook variables
    return {isOpen, toggle, open, close, setIsOpen}
}
