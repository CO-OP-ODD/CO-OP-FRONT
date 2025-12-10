import {NavigationMenuItem, NavigationMenuLink} from "@components/ui/navigation-menu.tsx";
import {Link} from "react-router-dom";
import {cn} from "@/lib/utils.ts";
import {SiSennheiser} from "react-icons/si";

export const LogoLink = ({className}:{className?:string}) => {

    return(
        <NavigationMenuItem className={cn("link ", className)}>
            <NavigationMenuLink asChild>
                <Link className={cn("")} to="/">
                    <SiSennheiser size='20'/>
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
