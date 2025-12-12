import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,

} from "@components/ui/navigation-menu"
import {cn} from "@lib/utils.ts";
import type {NavRoute} from "@/types";
import {Link} from "react-router-dom";
import {navigation} from "@/data";
import {LogoLink} from "@components/common/nav-menu/logo-link/logo-link.tsx";
import {cva} from "class-variance-authority";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@components/ui/dropdown-menu.tsx";


export const NavMenu = () => {
    // state
    // activeSection status Store state
    const [activeSection, setActiveSection] = React.useState<string>("");

    // single menu style
    const navigationSingleMenuStyle = cva(
        "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground "
    )

    /* TODO: fix flickering
    * link: https://ryanschiang.com/shadcn-radix-dropdown-flicker-hover
    * */

    // create single menu
    const renderSingleMenu = (singleItemParam: NavRoute) => {
        // get current activated href value
        const isActive = activeSection === singleItemParam.href;
        return (
            <NavigationMenuItem key={`${singleItemParam.href}-${singleItemParam.title}`}>
                <NavigationMenuLink asChild className={cn("")}>
                    <Link

                        key={singleItemParam.href}
                        to={singleItemParam.href}
                        title={singleItemParam.title}
                        onClick={() => {
                            setActiveSection(singleItemParam.href);
                        }}
                        // if this item set into active
                        className={cn(navigationSingleMenuStyle(), "rounded-full" ,isActive && "bg-accent" +
                            " text-accent-foreground")}
                    >
                        {singleItemParam.title}
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        )
    }

    // create depth menu
    const renderDepthMenu = (multipleMenu: NavRoute) => {
        return (
            <NavigationMenuItem key={`${multipleMenu.href}-${multipleMenu.title}`}>
                {/* this is trigger button: need styling */}
                <DropdownMenu>
                    <DropdownMenuTrigger className={cn(navigationMenuTriggerStyle(), "px-6 bg-white box-border py-1.5 rounded-full", )}>{multipleMenu.title}</DropdownMenuTrigger>
                    <DropdownMenuContent className={cn("w-fit")} align="start">
                        <DropdownMenuGroup>
                            {multipleMenu.items?.map((subItem) => {
                                return (
                                    <DropdownMenuItem>
                                        <Link to={subItem.href}>
                                            {subItem.title}
                                        </Link>
                                    </DropdownMenuItem>
                                )
                            })}
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </NavigationMenuItem>
        )}

        return (
                <div className={cn("flex justify-around")}>
                    <NavigationMenu className={cn("")}>
                        <NavigationMenuList className={cn(" py-2 flex justify-center")}>
                            <LogoLink className={cn(" py-2")}/>
                            {
                                navigation.map((menuItem) => {
                                    if (menuItem.items === undefined) {
                                        return renderSingleMenu(menuItem)
                                    } else {
                                        return renderDepthMenu(menuItem)
                                    }
                                })
                            }
                            {/* right sight login area */}
                            <div className={cn("ml-auto flex gap-1")}>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="/login"
                                            className={cn(navigationSingleMenuStyle(), "rounded-full")}
                                        >
                                            Login
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to="/login"
                                            className={cn(navigationSingleMenuStyle(), "rounded-full p-")}
                                        >
                                            help
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </div>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
        )
    }
