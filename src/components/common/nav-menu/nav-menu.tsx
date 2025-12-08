import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle,
    NavigationMenuViewport,

} from "@components/ui/navigation-menu"
import {cn} from "@/lib/utils.ts";
import type {NavRoute} from "@/types";
import {Link} from "react-router-dom";
import {navigation} from "@/data";
import {LogoLink} from "@components/common/nav-menu/logo-link/logo-link.tsx";
import {cva} from "class-variance-authority";


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
                <NavigationMenuLink asChild className={cn("rounded-full")}>
                    <Link
                        key={singleItemParam.href}
                        to={singleItemParam.href}
                        title={singleItemParam.title}
                        onClick={() => {
                            setActiveSection(singleItemParam.href);
                        }}
                        // if this item set into active
                        className={cn(navigationSingleMenuStyle(), isActive && "bg-accent text-accent-foreground")}
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


                    <DropdownMenu
                    <ul className={cn("")}>
                        {multipleMenu.items?.map((subitem) => {
                            // link active check
                            const isActive = activeSection === subitem.href;
                            return (
                                <li key={`${subitem.href}-${subitem.title}`}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to={subitem.href}
                                            onClick={() => {
                                            }} // need Link onClick event
                                            // if current menu activated set styles
                                            className={cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground")}
                                        >
                                            {subitem.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            )
                        })}
                    </ul>



        )
    }


    return (
        <header className={cn("w-full relative")}>
            <div className={cn(" page-container flex justify-between")}>
                <NavigationMenu className={cn("w-full")}>
                    <NavigationMenuList className={cn("")}>
                        <LogoLink className={cn("rounded-full", navigationSingleMenuStyle())}/>
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
                                        className={cn(navigationSingleMenuStyle())}
                                    >
                                        Login
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </div>
                    </NavigationMenuList>
                    <NavigationMenuViewport/>
                </NavigationMenu>
            </div>
        </header>
    )
}
