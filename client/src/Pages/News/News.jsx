import React from 'react'
import { Header, NewsContent, Footer } from '../../Components'

import * as images from '../../Imgs/NewsPage'

export default function News() {
    const aboutUsHeaderInfo = {
        name: 'Oh lala sweet stories',
        text: 'We take the time to sprout the grains in most all of products to release nutrients to remain dormant. most all of products to release.'
    }
    const colors= {
        textColor: '#000',
        nameColor: '#ff4562'
    }

    return (
    <>
    <Header 
        name={aboutUsHeaderInfo.name} img={images.heroBlog} 
        text={aboutUsHeaderInfo.text} colors={colors}    
    />
    <NewsContent />
    <Footer bgColor={'#38c4c4'} />
    </>
    )
}
