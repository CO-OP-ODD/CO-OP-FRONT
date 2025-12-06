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
} from "@/components/ui/navigation-menu"
import {cn} from "@/lib/utils.ts";
import type {NavRoute} from "@/types";
import {Link} from "react-router-dom";
import {navigation} from "@/data";
import sennheiserSvg from '@assets/sennheiser.svg';
import {LogoLink} from "@components/common/nav-menu/logo-link/logo-link.tsx";


export const NavMenu = () => {
    // state
    // activeSection status Store state
    const [activeSection, setActiveSection] = React.useState<string>("");

    //

    // create single menu
    const renderSingleMenu = (singleItemParam: NavRoute) => {
        // get current activated href value
        const isActive = activeSection === singleItemParam.href;
        return(
            <NavigationMenuItem key={`${singleItemParam.href}-${singleItemParam.title}`}>
                <NavigationMenuLink asChild className={cn("bg-transparent")}>
                    <Link
                        key={singleItemParam.href}
                        to={singleItemParam.href}
                        title={singleItemParam.title}
                        onClick={()=>{
                            setActiveSection(singleItemParam.href);
                        }}
                        // if this item set into active
                        className={cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground")}
                    >
                        {singleItemParam.title}
                    </Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        )
    }

    // create depth menu
    const renderDepthMenu = (multipleMenu: NavRoute) => {
        return(
            <NavigationMenuItem key={`${multipleMenu.href}-${multipleMenu.title}`}>
                <NavigationMenuTrigger>{multipleMenu.title}</NavigationMenuTrigger>
                {/* inner menu content */}
                <NavigationMenuContent>
                    <ul className={cn("grid gap-3 ")}>
                        {multipleMenu.items?.map((subitem)=>{
                            // link active check
                            const isActive = activeSection === subitem.href;
                            return(
                                <li key={`${subitem.href}-${subitem.title}`}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to={subitem.href}
                                            onClick={()=>{}} // need Link onClick event
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
                </NavigationMenuContent>
            </NavigationMenuItem>
        )
    }


    return(
        <NavigationMenu className={cn("page-container justify-between")}>

            <NavigationMenuList className={cn("w-full")}>
                <LogoLink />
                {
                    navigation.map((menuItem)=>{
                        if(menuItem.items === undefined){
                            return renderSingleMenu(menuItem)
                        } else{
                            return renderDepthMenu(menuItem)
                        }
                    })
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}
