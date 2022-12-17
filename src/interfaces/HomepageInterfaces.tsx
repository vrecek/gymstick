import { Aliases, DD } from "../functions/Client"

export type UserReview = {
    name: string
    avatar: string
}

export type Review = UserReview & {
    text: string
}

export type BlogInfo = {
    tags: string[]
    category: string
}

export type BlogText = {
    title: string
    text: string
}

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
    allDds: DD.DropDown[]
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

export type CardOptions = {
    type: CardType
    desc: string
    price: number
    list: ListBools
}

export type CardLiElement = {
    isActive: boolean
    text: string
}

export enum CardType {
    POPULAR = 'Popular,blue',
    BEGINNER = 'Beginner,green',
    ADVANCED = 'Advanced,red'
}

export type ListDescs = [string, string, string, string, string, string]
export type ListBools = [boolean, boolean, boolean, boolean, boolean, boolean]