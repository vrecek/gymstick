import React from 'react'
import handleViewport from 'react-in-viewport'
import '../../../css/Dropdowns.css'
import { Viewport } from '../../../interfaces/CommonInterfaces'
import { DropdownContent } from '../../../interfaces/HomepageInterfaces'
import Content from './Content/Content'
import Content_Blog from './Content/Content_Blog/Content_Blog'
import Content_Card from './Content/Content_Card/Content_Card'
import Content_Socials from './Content/Content_Socials/Content_Socials'
import Content_Text from './Content/Content_Text/Content_Text'
import DropdownContainer from './DropdownContainer/DropdownContainer'

const Dropdowns = ({forwardedRef, inViewport}: Viewport) => {
    const [content, setContent] = React.useState<JSX.Element>(<Content_Text />)

    const changeContent = (value: DropdownContent): void => {
        switch(value) {
            case DropdownContent.BLOG:
                setContent(<Content_Blog />)
            break;

            case DropdownContent.CARD:
                setContent(<Content_Card />)
            break;

            case DropdownContent.SOCIALS:
                setContent(<Content_Socials />)
            break;

            case DropdownContent.TEXT:
                setContent(<Content_Text />)
            break;

            default: break
        }
    }    

    React.useEffect(() => {
        forwardedRef.current.className = inViewport
            ? 'dropdowns viewport'
            : 'dropdowns'
    }, [inViewport])
    
    return (
        <section ref={forwardedRef} className="dropdowns">

            <DropdownContainer setContent={changeContent} />

            <Content content={content} />

            <div className="bg"></div>

        </section>
    )
}

export default handleViewport(Dropdowns)