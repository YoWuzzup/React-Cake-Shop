import React from 'react'
import { TriangleAndPic } from '../../'
import { triangleBlue, triangleWhite, triangleGirl, triangleMacaroons, 
    triangleDonut1, triangleDonut2, triangleDonut3, triangleCakePops, bigBg, smallBg } 
    from '../../../Imgs/TheGoldOne/index'

export default function GoldLinks() {
    const texts = {
        about: 'About me',
        macaroons: 'Macaroons',
        donuts: 'Donuts',
        lollipops: 'Lollipops'
    }

    const colors = {
        white: '#fff',
        lightBlue: '#45aae0'
    }

    const imgArray = [triangleDonut1, triangleDonut2, triangleDonut3]
    return (
        <>
        <div style={{background: `url(${smallBg}) no-repeat`, backgroundSize: 'cover', 
            height: '83vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}
        >
            <TriangleAndPic sideImg={triangleGirl} img={triangleBlue} text={texts.about} color={colors.white} reversed={false} />
        </div>

        <div style={{background: `url(${bigBg}) bottom center no-repeat`, backgroundSize: 'cover'}}>
            <TriangleAndPic sideImg={triangleMacaroons} img={triangleWhite} text={texts.macaroons} color={colors.lightBlue} reversed={true} btn={true} />
            <TriangleAndPic sideImg={imgArray} img={triangleWhite} text={texts.donuts} color={colors.lightBlue} reversed={false} btn={true} />
            <TriangleAndPic sideImg={triangleCakePops} img={triangleWhite} text={texts.lollipops} color={colors.lightBlue} reversed={true} btn={true} />
        </div>
        </>
    )
}
