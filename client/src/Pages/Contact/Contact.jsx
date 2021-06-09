import React from 'react'
import { Header, GetInTouch, WhereToFindUs, Footer } from '../../Components'

import * as images from '../../Imgs/ContactPage'

export default function Contact() {
    const aboutUsHeaderInfo = {
        name: 'Contact us',
        text: 'Looking for the original and best high-protein smoothie on the planet? You\'ve found us! Oh, and we also sell ice cream.'
    }

    return (
    <>
    <Header name={aboutUsHeaderInfo.name} img={images.heroBlog} text={aboutUsHeaderInfo.text} />
    <GetInTouch bg={images.GetInTouchBackground} />
    <WhereToFindUs img={images.lollipop} />
    <Footer bgColor={'#38c4c4'} />
    </>
    )
}
