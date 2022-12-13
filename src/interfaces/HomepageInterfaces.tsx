import Client, { Aliases, DD } from "../functions/Client"

export type TileDetails = {
    icon: JSX.Element
    header: string
    text: string
    btnFunc: React.MouseEventHandler
    btnText: string
}

export type SliderInterval = {
    interval: NodeJS.Timer | undefined,
    setTime: React.Dispatch<React.SetStateAction<NodeJS.Timer | undefined>>
}

export type SliderButtonsOptions = Aliases.Text<JSX.Element> & SliderInterval

export type DropdownOption = DropdownHeader & ChangeContent & {
    hiddenText: string
}

export interface DropdownOptionArray extends Omit<DropdownOption, 'setContent'> {}

export type DropdownHeader = ChangeContent & {
    header: string
    topic: string
    ddIndex: number
    allDds: DD.DropDownType[]
    contentValue: DropdownContent
}

export enum DropdownContent {
    BLOG = 'BLOG',
    CARD = 'CARD',
    SOCIALS = 'SOCIALS',
    TEXT = 'TEXT'
}

export type ChangeContent = {
    setContent: (value: DropdownContent) => void
}