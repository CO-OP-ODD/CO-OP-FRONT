import {NavigationMenuItem, NavigationMenuLink} from "@components/ui/navigation-menu.tsx";
import {Link} from "react-router-dom";
import SennheiserIcon from "@assets/sennheiser.svg?react";
import {cn} from "@/lib/utils.ts";

export const LogoLink = ({className}:{className?:string}) => {

    return(
        <NavigationMenuItem className={cn("link ",className)}>
            <NavigationMenuLink asChild>
                <Link to="/">
                    <SennheiserIcon/>
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
