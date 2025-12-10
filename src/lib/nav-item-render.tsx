// create depth menu
import type {NavRoute} from "@/types";
import {NavigationMenuItem, navigationMenuTriggerStyle} from "@components/ui/navigation-menu.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuTrigger
} from "@components/ui/dropdown-menu.tsx";
import {cn} from "@lib/utils.ts";

export const renderDepthMenu = (multipleMenu: NavRoute) => {
    return (
        <NavigationMenuItem key={`${multipleMenu.href}-${multipleMenu.title}`}>
            {/* this is trigger button: need styling */}
            <DropdownMenu>
                <DropdownMenuTrigger
                    className={cn(navigationMenuTriggerStyle(), "px-6 bg-white box-border py-1.5 rounded-full",)}>{multipleMenu.title}</DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuGroup>
                        {multipleMenu.items?.map((subItem) => {
                            return (
                                <DropdownMenuItem>
                                    {subItem.title}
                                </DropdownMenuItem>
                            )
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </NavigationMenuItem>
    )
}
