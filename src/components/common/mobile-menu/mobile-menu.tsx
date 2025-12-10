import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle} from "@components/ui/sheet.tsx";
import {cn} from "@lib/utils.ts";
import {navigation} from "@/data";
import type {NavRoute} from "@/types";
import {Link} from "react-router-dom";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@components/ui/accordion.tsx";

interface MobileMenuProps {
    isOpen: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const MobileMenu = (
    {
        isOpen,
        onOpenChange
    }: MobileMenuProps
) => {

    const renderSingleMobMenu = (singleMenu: NavRoute) => {

        return (
            <Link
                className={cn("py-4")}
                key={singleMenu.href}
                to={singleMenu.href}
                onClick={() => {
                }}
            >
                {singleMenu.title}
            </Link>
        )
    }

    const renderDepthMobMenu = (multipleMenu: NavRoute) => {
        return (
            <div key={`${multipleMenu.href}-${multipleMenu.title}`}>
                {/* this is trigger button: need styling */}
                <Accordion
                    type="single"
                    collapsible
                    className={cn("w-full")}
                >
                    <AccordionItem value={multipleMenu.title}>
                        <AccordionTrigger>{multipleMenu.title}</AccordionTrigger>
                        <AccordionContent className={cn("flex flex-col items-start")}>
                            {multipleMenu.items?.map((subItem) => (
                                <Link
                                    className={cn("w-full py-2")}
                                    to={subItem.href}
                                >
                                    {subItem.title}
                                </Link>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        )
    }

    return (
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Sennheiser</SheetTitle>
                    <SheetDescription>
                        copy right &copy; 202N Sennheiser
                    </SheetDescription>
                </SheetHeader>
                <nav className={cn("flex flex-col gap-2")}>
                    {/* render nav with dummyDB */}
                    {navigation.map((menuItem) => {
                        if (menuItem.items === undefined) {
                            // case single
                            return (
                                renderSingleMobMenu(menuItem)
                            )
                        } else {
                            // else depth menu
                            return (
                                renderDepthMobMenu(menuItem)
                            )
                        }

                    })}
                </nav>
            </SheetContent>
        </Sheet>

    )
}
