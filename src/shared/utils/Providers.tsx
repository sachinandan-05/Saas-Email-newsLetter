'use client'
import { NextUIProvider } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import React from "react"


interface childrendProps {
    children: React.ReactNode
}
export default function Provider({ children }: childrendProps) {
    const pathName = usePathname()
    return (
        <NextUIProvider>

            {pathName !== "/dashboard/newe-email" &&
                pathName !== "/" &&
                pathName !== "sign-up" &&
                pathName !== "subscribe" &&
                pathName !== "/sign-in" ? (
                <div className="w-full flex">
                    <div className="h-screen w-[290px] overflow-y-scroll"></div>
                </div>
            ) : (<>{children}</>)
            }
        </NextUIProvider>
    );


}