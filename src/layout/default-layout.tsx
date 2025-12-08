import {Outlet} from 'react-router-dom';
import {NavMenu} from "@components/common/nav-menu/nav-menu.tsx";
import ExampleNavMenu from "@components/common/demo-nav/demo-nav.tsx";

export default function DefaultLayout(){

    return(
        <div>
            <NavMenu/>
            <main lang="ko">
                <Outlet />
            </main>
            <footer>
                footer area
            </footer>
        </div>
    )
}


