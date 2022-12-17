import React from 'react'
import Client, { DD } from '../../../../functions/Client'
import { ChangeContent, DropdownContent, DropdownOptionArray } from '../../../../interfaces/HomepageInterfaces'
import Option from './Option'

const DropdownContainer = ({setContent}: ChangeContent) => {
    const [allDds] = React.useState<DD.DropDown[]>([...Array(3)].map(x => new Client.DropDown(300)))

    const options: DropdownOptionArray[] = [
        {
            header: 'See our offer',
            hiddenText: 'Nam finibus odio a nisl consectetur, vel rutrum sapien imperdiet. Donec non feugiat nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tempus nulla non metus interdum ultrices eget id quam. In efficitur diam non dolor sagittis, vitae viverra massa tempor. Donec a rutrum sapien. Praesent ut libero ac tortor dignissim pulvinar. Quisque ac est elementum, elementum metus at, molestie massa. ',
            ddIndex: 0,
            allDds: allDds,
            topic: 'Stuff',
            contentValue: DropdownContent.CARD
        },

        {
            header: 'Explore our blog',
            hiddenText: 'Duis vestibulum elementum tempus. Fusce placerat dui turpis, quis convallis odio commodo a. Maecenas in nulla vel enim hendrerit efficitur. Integer pulvinar dolor ut tristique pretium. Donec viverra velit vel justo fringilla finibus. Vestibulum turpis purus, tempor ac elementum sed, rutrum non lacus. Curabitur sagittis enim vitae varius aliquet. Nam mattis pellentesque enim auctor sodales.',
            ddIndex: 1,
            allDds: allDds,
            topic: 'Blog',
            contentValue: DropdownContent.BLOG
        },

        {
            header: 'Check our socials',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore expedita, sed dolorem laudantium corrupti nesciunt, sunt laboriosam mollitia aliquid officiis? Ea doloribus molestiae aperiam ullam neque eum maiores asperiores.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur ad laudantium magnam molestiae eius, dignissimos suscipit exercitationem libero repudiandae tempore quae praesentium molestias placeat hic quis!',
            ddIndex: 2,
            allDds: allDds,
            topic: 'Socials',
            contentValue: DropdownContent.SOCIALS
        }
    ]


    return (
        <section className="dropdown-container">

            {
                options.map((x, i) => (
                    <Option
                        key={i}
                        header={x.header}
                        hiddenText={x.hiddenText}
                        topic={x.topic}
                        contentValue={x.contentValue}
                        ddIndex={x.ddIndex}
                        allDds={x.allDds}
                        setContent={setContent}
                    />
                ))
            }

        </section>
    )
}

export default DropdownContainer