import {Section0} from "@components/features/hero/modules/section-0/section-0.tsx";
import {Section1} from "@components/features/hero/modules/section-1/section-1.tsx";
import {Section2} from "@components/features/hero/modules/section-2/section-2.tsx";
import {Section3} from "@components/features/hero/modules/section-3/section-3.tsx";
import {Section4} from "@components/features/hero/modules/section-4/section-4.tsx";

export const Hero = () => {

    return(
        <div className="hero">

            {/* section-0 */}
            <Section0/>

            {/* section-1 : news area */}
            <Section1/>

            {/* section-2 : shop now area */}
            <Section2/>

            {/* section-3 : event, tour news */}
            <Section3/>

            {/* section-4 : products area */}
            <Section4/>
        </div>
    )
}
