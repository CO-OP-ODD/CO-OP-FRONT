import React from 'react'
import './App.scss'
import {ExamplePage} from "@/pages/Example/example-Page.tsx";
import './styles/index.scss';
import {cn} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";

function App() {
    const [isDark, setIsDark] = React.useState<boolean>(false);

    // the "dark" class must be added at to document root
    React.useEffect(()=>{
        if(isDark){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[])

    return (
        <div className={cn(isDark && "dark ", " bg-primary " +
            " w-screen h-screen flex flex-col justify-center items-center " +
            " gap-2 ")}>
            <Button
                variant="default"
                className={cn()}
                onClick={()=>{
                    setIsDark(prevState => !prevState)
                }}
            >
                Dark :{!isDark ? ' Off' : ' On'}
            </Button>
            <ExamplePage/>
        </div>
    )
}

export default App
