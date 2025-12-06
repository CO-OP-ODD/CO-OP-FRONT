import {Outlet} from 'react-router-dom';
import {NavMenu} from "@components/common/nav-menu/nav-menu.tsx";
import {cn} from "@/lib/utils.ts";

export default function DefaultLayout(){

    return(
        <div>
            <header className={cn("w-full backdrop-blur ")}>
                <NavMenu/>
            </header>
            <main lang="ko">
                <Outlet />
            </main>
            <footer>
                footer area
            </footer>
        </div>
    )
}


