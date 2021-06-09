import React from 'react'
import styles from './NutritionalFacts.module.css'
import { OrderNowButton } from '../../'

export default function NutritionalFacts({ bgImgs, reversed, nutritionalInfo }) {
    return (
    <div className={`${styles.nutritional}`} 
        style={{backgroundImage: `url(${bgImgs})`, 
        justifyContent: reversed ? 'flex-end' : 'flex-start'}}
    >

        <div className={`${styles.nutritional_info}`} style={{textAlign: reversed ? 'left' : 'right'}}>
            
            <div className={`${styles.nutritional_slogan} satisfy`}>Banana-Kiwi Delight</div>
            <div className={`${styles.nutritional_para}`}>
                Our juices, smoothies and bowls are made with high quality, good-for-you ingredients.<br/> 
                We’re in a fall state of mind with these limited-time seasonal favorites! 
                Our smoothies are packed with goodness like vitamin A and C. Get them while you can!
            </div>
            <div className={`${styles.nutritional_subHeader}`}>NUTRITIONAL FACTS</div>
            <div className={`${styles.nutritional_composition}`}>
                {nutritionalInfo.map((item,index)=>(
                    <div className={`${styles.nutritionalInfos}`} key={`${item}_${index}`}
                        style={{justifyContent: reversed ? 'flex-start' : 'flex-end',
                        borderRadius: reversed ? '20px 50px 50px 50px' : '50px 20px 50px 50px'
                        }}
                    >
                        <div className={`${styles.nutritionalWidth}`} 
                            style={{width: item.level, textAlign: reversed ? 'left' : 'right',
                            borderRadius: reversed ? '20px 50px 50px 50px' : '50px 20px 50px 50px'
                            }}
                        >
                            {item.name}
                        </div>
                    </div>
                ))}

            </div>

            <OrderNowButton reversed={reversed} />
        
        </div>

    </div>
    )
}
