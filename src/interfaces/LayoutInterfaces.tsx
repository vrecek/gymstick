import { Aliases } from "../functions/Client"
import { LinksList } from "./CommonInterfaces"

export type NavigationList = {
    cname: string
    list: LinksList<string>[]
}

export type WrapOptions = Aliases.Text<JSX.Element> & {
    darkNav?: boolean
}