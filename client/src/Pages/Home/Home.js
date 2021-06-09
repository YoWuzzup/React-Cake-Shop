import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { MainPreviewSection, HomeHomePages, HomeLoadingSpeed, HomeInnerPages,
         HomeFeatures, HomeTreats, HomeVideoSection, HomeDocumentation, HomeFooter} from '../../Components'

// HomeHomePages previewProducts 
import * as innerPagesImages from '../../Imgs'

const featuresInfo = [
    {name: 'SAMPLE PAGES', img: [`fas`,`pallet`], description: 'Use our page composer to copy, paste, duplicate or add shortcodes and customize your pages.', aosDelay: 0},
    {name: 'EASY TO USE', img: [`fas`,`cube`], description: 'With carefully crafted elements you can add as many widgets, posts, products or pages as you want.', aosDelay: 250},
    {name: 'MADE FOR CRAFT', img: [`fas`,`question`], description: 'Since tailored for crafting business you will find it packed with carefully selected features.', aosDelay: 500},
    {name: 'FULLY RESPONSIVE', img: [`fas`,`mobile-alt`], description: 'Whatever the device you are using your site will run as it should be, with fully responsive adaptible layout.', aosDelay: 0},
    {name: 'TYPOGRAPHY & COLORS', img: [`fas`,`pencil-alt`], description: 'All Google fonts are at your disposal for free use. Together with two different colors you are all set to go.', aosDelay: 250},
    {name: 'WordPress CUSTOMIZER', img: [`fab`,`wordpress`], description: 'Options panel is powered by native WordPress customizer so you can change any setting very easy.', aosDelay: 500},
    {name: 'MULTILANGUAGE WPML SUPPORT', img: [`fas`,`globe-americas`], description: 'Our Theme is created with best translation practices in mind and already contains language .pot files for easier translation.', aosDelay: 0},
    {name: 'CHILD THEME READY', img: [`fas`,`vector-square`], description: 'All of the functions and templates in the theme have been setup so that they can be more easily overwritten by a child theme.', aosDelay: 250},
    {name: 'COST CALCULATOR', img: [`fas`,`calculator`], description: 'This is simple quote estimation plugin which allows you to easily create quote or price estimation forms.', aosDelay: 500},
]

const homeTreatsImages = [
    {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]},
    {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]},
    {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]},
    {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]},
    {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]},
    {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]}, {img: [`fas`,`ice-cream`]},
]

export default function Home() {
    const nextSectionRef = React.useRef(null)
    const [previewProducts] = React.useState([
        {name: 'The Gold One', img: innerPagesImages.theGoldOne, aosAnimation: 'fade-right', aosDelay: 0},
        {name: 'The Pastel One', img: innerPagesImages.thePastelOne, aosAnimation: 'fade-left', aosDelay: 200},
        {name: 'The Exotic One', img: innerPagesImages.theExoticOne, aosAnimation: 'fade-right', aosDelay: 0},
        {name: 'The Chocolate One', img: innerPagesImages.theChocolateOne, aosAnimation: 'fade', aosDelay: 200},
        {name: 'The Single Page One', img: innerPagesImages.theSinglePageOne, aosAnimation: 'fade-left', aosDelay: 400},
    ])

    const [innerPages] = React.useState([
        {name: 'Products portfolio', img: innerPagesImages.productPortfolio, aosAnimation: 'fade', aosDelay: 0},
        {name: 'Single product', img: innerPagesImages.singleProduct, aosAnimation: 'fade', aosDelay: 250},
        {name: 'Menu', img: innerPagesImages.menu, aosAnimation: 'fade', aosDelay: 500},
        {name: 'About Us', img: innerPagesImages.aboutUs, aosAnimation: 'fade', aosDelay: 0},
        {name: 'Product calculator', img: innerPagesImages.productCalculator, aosAnimation: 'fade', aosDelay: 250},
        {name: 'Testimonials', img: innerPagesImages.testimonials, aosAnimation: 'fade', aosDelay: 500},
        {name: 'Contact', img: innerPagesImages.contact, aosAnimation: 'fade', aosDelay: 750},
        {name: 'Ice cream products', img: innerPagesImages.icecreamProducts, aosAnimation: 'fade', aosDelay: 0},
        {name: 'Smoothie products', img: innerPagesImages.smoothieProducts, aosAnimation: 'fade', aosDelay: 250},
        {name: 'Special offer', img: innerPagesImages.specialOffer, aosAnimation: 'fade', aosDelay: 500},

    ])

    function handleRef() {
        nextSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    React.useEffect(()=>{
        Aos.init({ duration: 500, once: false })
    })

    return (
    <>
    <MainPreviewSection handleRef={handleRef} />
    <HomeHomePages nextSectionRef={nextSectionRef} previewProducts={previewProducts}/>
    <HomeLoadingSpeed />
    <HomeInnerPages innerPages={innerPages} />
    <HomeFeatures featuresInfo={featuresInfo} bgImg={innerPagesImages.chocolate} />
    <HomeTreats bg={innerPagesImages.treatsBackground} icons={homeTreatsImages} />
    <HomeVideoSection logo={innerPagesImages.boldBuilder} />
    <HomeDocumentation bg={innerPagesImages.mailBgImg} />
    <HomeFooter  gif={innerPagesImages.iceCreamGif} />
    </>
    )
}
