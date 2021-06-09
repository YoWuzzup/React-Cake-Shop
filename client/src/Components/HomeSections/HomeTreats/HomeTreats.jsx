import React from 'react'
import styles from './HomeTreats.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeTreats({ bg, icons }) {
    return (
    <div className={`${styles.HomeTreats}`} style={{backgroundImage: `url(${bg})`}}>
        <div className={`${styles.HomeTreats_wrapper} wrapper`}>
        
            <div className={`${styles.HomeTreats_info}`}
                data-aos='fade'
                data-aos-anchor-placement="bottom-top"
            >
                <div className={`${styles.HomeTreats_header}`}>
                    ICONS
                </div>
                <div className={`${styles.HomeTreats_slogan} satisfy`}>
                    More treats!
                </div>
                <div className={`${styles.HomeTreats_para}`}>
                    Custom created icons crafted for Smoothies and Ice Creams, 
                    including the most popular ones like FontAwesome or Icon 7 Stroke.
                </div>
            </div>

            <div className={`${styles.HomeTreats_iceCreamIcons}`}>
                {icons.map((item,index)=>{ 
                    let delay = null;
                    if(index === 0 || index === 6 || index === 12) { delay = 0}
                    if(index === 1 || index === 7 || index === 13) { delay = 200}
                    if(index === 2 || index === 8 || index === 14) { delay = 400}
                    if(index === 3 || index === 9 || index === 15) { delay = 600}
                    if(index === 4 || index === 10 || index === 16) { delay = 800}
                    if(index === 5 || index === 11 || index === 17) { delay = 1000}

                    return (
                    <div className={`${styles.HomeTreats_Cream}`}                         
                        data-aos-anchor-placement="bottom-top"
                        data-aos='fade'
                        key={`${item}_${index}`}
                        data-aos-delay={`${delay}`}
                    >
                        <FontAwesomeIcon 
                            className={`${styles.HomeTreats_icon}`} 
                            icon={item.img} size='5x'
                        />
                    </div>
                )})}
            </div>

        </div>
    </div>
    )
}
