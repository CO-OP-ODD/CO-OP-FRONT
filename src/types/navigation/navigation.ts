import React from "react";

type basicNavMenuType ={
    title: string;
    href: string;
    description?: string;

}

export interface SubMenuItem extends basicNavMenuType{
    children?: React.ReactNode;
}


export interface NavRoute extends basicNavMenuType {
    items?: SubMenuItem[];
}
