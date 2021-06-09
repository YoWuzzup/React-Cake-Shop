import React from 'react'
import { ProductsPreviewSection, Vitamin, ProductsNewOffer, NutritionalFacts,
         IcecreamPercentage, MonthlyMenu, Footer} from '../../Components'

import * as images from '../../Imgs'

export default function Products() {
    const imgForNewOfferSlider = [images.innerCreams05, images.innerCreams10, images.innerCreams11]

    const strawberry = {
        name: 'Strawberry dreams',
        text: 'We ’re in a fall state of mind with these limited-time seasonal favorites! Our strawberry, banana and mango smoothies are packed with goodn-ess.',
        vitamins: {
            A: {
                name: 'A',
                percentage: '160%'
            },
            C: {
                name: 'C',
                percentage: '20%'
            }
        }
    }

    const apple = {
        name: 'Apple day',
        text: 'These wholesome and nutritionally balanced smoothies are a perfect on the go meal. Hand crafted with a kitchen fresh taste, these smoothies.',
        vitamins: {
            A: {
                name: 'A',
                percentage: '160%'
            },
            C: {
                name: 'C',
                percentage: '15%'
            }
        }
    }

    const melon = {
        name: 'Melon yellow',
        text: 'Made with ingredients so classic, these blended-to-ordermasterpieces practically invented smoothies. All of your favorites are in the mix: real whole fruit.',
        vitamins: {
            A: {
                name: 'A',
                percentage: '120%'
            },
            C: {
                name: 'C',
                percentage: '15%'
            }
        }
    }
    
    const nutritionalInfo = [
        {name: 'Fat', level: '20%'},
        {name: 'Sugar', level: '80%'},
        {name: 'Carbonhydrates', level: '50%'},
        {name: 'Protein', level: '60%'},
        {name: 'Calories', level: '45%'}
    ]

    const icecreamInfo = [
        {name: 'Apple', level: '20%',},
        {name: 'Cream', level: '80%'},
        {name: 'Honey', level: '50%'},
        {name: 'Vanilla', level: '60%'},
    ]

    const multiColoredHeader = {header: 'Multi Colored Ice Cream', para: 'Sugar plum lollipop pastry toffee biscuit tart cotton candy croissant. Extraordinary sesame snaps marshmallow danish chocolate.'}
    const premiumChocolateHeader = {header: 'Multi Colored Ice Cream', para: 'Enjoy that old fashioned ice cream parlor taste with classic gourmet marvelous chocolate ice cream. The perfect blend is with fresh sweet cream.'}

    const bgForApple = '#5cc4c4'
    const bgForMelon = '#90ac24'

    return (
        <>
        <ProductsPreviewSection logo={images.previewLogo} bg={images.previewBg} vitaminImg={images.smoothie06} strawberry={strawberry}/>
        <Vitamin img={images.smoothie01} name={apple.name} text={apple.text} vitamins={apple.vitamins} bgColor={bgForApple} reversed={true}/>
        <Vitamin img={images.smoothie05} name={melon.name} text={melon.text} vitamins={melon.vitamins} bgColor={bgForMelon}/>
        <ProductsNewOffer imgs={imgForNewOfferSlider} />
        <NutritionalFacts bgImgs={images.innerProductHero01} nutritionalInfo={nutritionalInfo} />
        <IcecreamPercentage bgImgs={images.innerProductHero02} icecreamInfo={icecreamInfo} header={multiColoredHeader} reversed={true} />
        <IcecreamPercentage bgImgs={images.innerProductHero03} icecreamInfo={icecreamInfo} header={premiumChocolateHeader} />
        <NutritionalFacts bgImgs={images.innerProductHero04} reversed={true} nutritionalInfo={nutritionalInfo} />
        <MonthlyMenu bgImg={images.bluePattern} img={images.triangleYellow} />
        <Footer bgColor={'#7bb924'} />
        </>
    )
}
