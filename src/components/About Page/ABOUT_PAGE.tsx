import React from 'react'
import '../../css/AboutPage.css'
import LayoutWrap from '../Layout/LayoutWrap'
import AboutHeader from './AboutHeader/AboutHeader'
import AboutText from './AboutText/AboutText'
import Details from './Details/Details'
import about1 from '../../images/about1.jpg'
import about2 from '../../images/about2.jpg'

const ABOUT_PAGE = () => {
    return (
        <LayoutWrap darkNav={true}>

            <main className="about-page">

                <AboutHeader />

                <AboutText />

                <Details 
                    cname='reverse'
                    num={1}
                    mark='Conqestaur'
                    header='Proin commodo iaculis nunc congue'
                    text='Nullam in est mattis tortor suscipit pellentesque. Phasellus eu mollis leo. Sed ullamcorper, sem id accumsan convallis, dui tellus auctor mi, id hendrerit leo est eget ante. Nam tincidunt est et ornare hendrerit. Morbi lacus libero, hendrerit sit amet commodo a, aliquam ac lorem. Aenean in lorem quis leo gravida pellentesque quis sed dolor.'
                    image={about1}
                />

                <Details 
                    num={2}
                    mark='Bibendum'
                    header='Nunc lobortis pulvinar nunc vel tristique'
                    text='Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed maximus nulla aliquet dignissim sagittis. Proin vulputate nulla vel felis blandit, nec interdum enim pretium. Nulla ut condimentum nisl, eu gravida diam. Aenean ipsum odio'
                    image={about2}
                />

            </main>

        </LayoutWrap>
    )
}

export default ABOUT_PAGE