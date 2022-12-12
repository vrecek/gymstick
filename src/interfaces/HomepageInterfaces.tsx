import { Aliases } from "../functions/Client"

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