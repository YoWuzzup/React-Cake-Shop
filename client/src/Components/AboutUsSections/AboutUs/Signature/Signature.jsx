import React from 'react'
import styles from './Signature.module.css'

export default function Signature({ img, bgColor }) {
    return (
    <div className={`${styles.signature}`} style={{backgroundColor: bgColor}}>
    <div className={`${styles.signature_wrapper}`}>

        <div className={`${styles.signature_header} satisfy`}>Localy owned shop</div>
        <div className={`${styles.signature_subHeader}`}>OUR HAVENS OF SELF-INDULGENCE</div>

        <div className={`${styles.signature_firstPara}`}>Sweet toffee bonbon gummies liquorice lollipop icing biscuit. Pudding caramels powder gingerbread pie liquorice wafer jelly beans icing. Sweet roll sweet roll macaroon cotton candy sesame snaps. Sesame snaps jujubes wafer sugar plum. Soufflé pudding liquorice donut.</div>
        <div className={`${styles.signature_secondPara}`}>Biscuit cake lemon drops muffin halvah. Marzipan halvah tootsie roll marshmallow donut. Gummi bears caramels sesame snaps sweet roll candy canes. Brownie sweet roll cotton candy carrot cake. Cake tiramisu donut. Halvah sesame snaps dessert sesame snaps cake. Muffin jujubes jelly-o topping.</div>

        <img src={img} alt={`signature`} />

        <div className={`${styles.signature_byWho}`}>Jessie Love Joy</div>

    </div>
    </div>
    )
}
