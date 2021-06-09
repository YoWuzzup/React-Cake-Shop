import React from 'react'
import { Header, Signature, FullWidthSlider, LatestNews, ShopMap, Footer } from '../../Components'

import * as images from '../../Imgs/AboutUsPage'

export default function AboutUs() {
    const aboutUsHeaderInfo = {
        name: 'Our story',
        text: 'Looking for the original and best high-protein smoothie on the planet? You’ve found us! Oh, and we also sell ice cream.'
    }

    const sliderImages = [
        images.innerCreams10, images.innerCreams10, images.innerCreams10,
        images.innerCreams10, images.innerCreams10, images.innerCreams10
    ]

    return (
        <>
        <Header name={aboutUsHeaderInfo.name} img={images.aboutUsImg} text={aboutUsHeaderInfo.text} />
        <Signature img={images.signature} bgColor={'#fadcdc'}/>
        <FullWidthSlider imgs={sliderImages} />
        <LatestNews imgs={images.aboutUsImg} />
        <ShopMap />
        <Footer bgColor={'#38c4c4'} />
        </>
    )
}
