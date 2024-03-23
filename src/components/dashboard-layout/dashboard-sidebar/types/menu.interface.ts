import type {IconType} from "react-icons";

export interface IMenuItem {
    link: string
    name: string
    icon: IconType
}


export interface IMenuProps{
    item: IMenuItem
    classname: string
}