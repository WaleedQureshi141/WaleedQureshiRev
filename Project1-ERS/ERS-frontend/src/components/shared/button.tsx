import React from "react";

interface ButtonProps
{
    // allows to have this: <Button>{children}<Button/>
    children: React.ReactNode;
}

export function Button({children} : ButtonProps)
{
    return(
        <button className="border bg-black text-white rounded-lg">
            {children}
        </button>
    )
}