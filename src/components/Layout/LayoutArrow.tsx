import React from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import Icon from '../Common/Icon'

const LayoutArrow = () => {
    const arrowRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const c = arrowRef.current!
        let visible: boolean = false

        window.addEventListener('scroll', () => {
            if(!visible && window.scrollY > 400) {
                c.style.opacity = '1'
                c.style.pointerEvents = 'all'

                visible = true

            }else if(visible && window.scrollY <= 400) {
                c.style.opacity = '0'
                c.style.pointerEvents = 'none'

                visible = false
            }
        })
    }, [])


    return (
        <Icon reference={arrowRef} action={() => window.scrollTo(0, 0)} cname='layout-arrow'>
            <BiArrowToTop />
        </Icon>
    )
}

export default LayoutArrow