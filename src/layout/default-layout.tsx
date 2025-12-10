import {Link, Outlet} from 'react-router-dom';
import {NavMenu} from "@components/common/nav-menu/nav-menu.tsx";
import {cn} from "@lib/utils.ts";
import {useMobileMenu} from "@hooks/use-mobile-menu.ts";
import {SiSennheiser, IoIosMenu} from "@icons/index.ts";
import {Button} from "@components/ui/button.tsx";
import {MobileMenu} from "@components/common/mobile-menu/mobile-menu.tsx";

export default function DefaultLayout() {

    // get mobileMenu Hook
    const mobileMenu = useMobileMenu();

    return (
        <div>
            <header className={cn("w-full bg-white fixed z-50")}>
                <div className="hidden md:block">
                    <NavMenu/>
                </div>

                <div className="md:hidden flex items-center justify-between p-4">
                    <Link to="/" className="text-xl font-bold">
                        <SiSennheiser size="32"/>
                    </Link>
                    <Button onClick={mobileMenu.toggle}>
                        <IoIosMenu/>
                    </Button>
                </div>
            </header>
            {/* mobile-nav render here */}
            <MobileMenu isOpen={mobileMenu.isOpen} onOpenChange={mobileMenu.setIsOpen}/>

            <main lang="ko" className={cn("pt-[52px]")}>
                <Outlet/>
            </main>
            <footer>
                footer area
            </footer>
        </div>
    )
}


