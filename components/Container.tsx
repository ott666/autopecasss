import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps extends HTMLAttributes<HTMLElement>{
    children:ReactNode
}

export const Container = ({children, ...rest}: ContainerProps) =>{
    return(
        <div className={twMerge("px-[16px] w-full min-[576px]:max-w-none  lg:px-[32px]  lg:max-w-[1280px] min-[1440px]:max-w-[1568px]  mx-auto", rest.className)}>
            {children}
        </div>
    )
}