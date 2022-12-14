import React from 'react'
import Client, { DD } from '../../../../functions/Client'
import { ChangeContent, DropdownContent, DropdownOptionArray } from '../../../../interfaces/HomepageInterfaces'
import Option from './Option'

const DropdownContainer = ({setContent}: ChangeContent) => {
    const [allDds] = React.useState<DD.DropDown[]>([...Array(3)].map(x => new Client.DropDown(300)))

    const options: DropdownOptionArray[] = [
        {
            header: 'See our offer',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore expedita, sed dolorem laudantium corrupti nesciunt, sunt laboriosam mollitia aliquid officiis? Ea doloribus molestiae aperiam ullam neque eum maiores asperiores.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur ad laudantium magnam molestiae eius, dignissimos suscipit exercitationem libero repudiandae tempore quae praesentium molestias placeat hic quis! Tempore, maxime iusto?',
            ddIndex: 0,
            allDds: allDds,
            topic: 'Stuff',
            contentValue: DropdownContent.CARD
        },

        {
            header: 'Explore our blog',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore expedita, sed dolorem laudantium corrupti nesciunt, sunt laboriosam mollitia aliquid officiis? Ea doloribus molestiae aperiam ullam neque eum maiores asperiores.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur ad laudantium magnam molestiae eius, dignissimos suscipit exercitationem libero repudiandae tempore quae praesentium molestias placeat hic quis! Tempore, maxime iusto?',
            ddIndex: 1,
            allDds: allDds,
            topic: 'Blog',
            contentValue: DropdownContent.BLOG
        },

        {
            header: 'Check our socials',
            hiddenText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore expedita, sed dolorem laudantium corrupti nesciunt, sunt laboriosam mollitia aliquid officiis? Ea doloribus molestiae aperiam ullam neque eum maiores asperiores.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aspernatur ad laudantium magnam molestiae eius, dignissimos suscipit exercitationem libero repudiandae tempore quae praesentium molestias placeat hic quis! Tempore, maxime iusto?',
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