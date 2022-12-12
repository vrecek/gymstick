import React from 'react'
import { Aliases as a } from '../../../../functions/Client'
import { SliderInterval } from '../../../../interfaces/HomepageInterfaces'

const SliderButtons = ({interval, setTime}: SliderInterval) => {
    const IMAGE_COUNT: number = 3,
          INTERVAL_TIME: number = 6000,
          buttonsRef = React.useRef<HTMLDivElement>(null)


    const changeSlide = (e: React.MouseEvent, nr: number): void => {
        const t: HTMLElement = e.target as HTMLElement,
              slider: HTMLElement = t.parentElement!.parentElement!.children[0] as HTMLElement


        clearInterval(interval)
        setTime(
            setInterval(
                () => intervalFunc(t.parentElement!, slider), 
                INTERVAL_TIME
            )
        )

        setaActiveButton(t.parentElement!, t)

        slider.style.transition = '.5s'
        slider.style.translate = `-${nr * 100}% 0`
        
        setSlide(slider, nr + 1)
    }


    React.useEffect(() => {
        const btnsContainer: HTMLElement = buttonsRef.current!,
              slider: HTMLElement = btnsContainer.parentElement!.children[0] as HTMLElement


        slider.addEventListener('transitionend', () => {
            const nr: number = getSlide(slider)

            if(nr >= IMAGE_COUNT + 2) {
                slider.style.transition = '0s'
                slider.style.translate = '-100% 0'

                setSlide(slider, 2)
            }
        })


        setTime(
            setInterval(
                () => intervalFunc(btnsContainer, slider), 
                INTERVAL_TIME
            )
        )

    }, [])


    const intervalFunc = (btnContainer: HTMLElement, slider: HTMLElement): void => {
        if(!document.hasFocus()) return

        const nr: number = getSlide(slider)

        setaActiveButton(btnContainer, btnContainer.children?.[nr - 1] ? nr - 1 : 0)

        slider.style.transition = '.5s'
        slider.style.translate = `-${nr * 100}% 0`

        setSlide(slider, nr + 1)
    }


    const getSlide = (slider: HTMLElement): number => parseInt(slider.getAttribute('slide') ?? '2')

    const setSlide = (slider: HTMLElement, nr: number): void => slider.setAttribute('slide', nr.toString())

    const setaActiveButton = (btnContainer: HTMLElement, btn: HTMLElement | number): void => {
        const buttons: a.Elem[] = Array.from(btnContainer.children as a.Coll<a.Elem>)

        for(let x of buttons) x.className = ''
        
        typeof btn === 'number'
            ? buttons[btn].className = 'active'
            : btn.className = 'active'
    }


    return (
        <section ref={buttonsRef} className="slider-buttons">

            {
                [...Array(IMAGE_COUNT)].map((x, i) => (
                    <span className={i === 0 ? 'active' : ''} onClick={(e) => changeSlide(e, i + 1)} key={i}>
                        
                    </span>
                ))
            }

        </section>
    )
}

export default SliderButtons