import React from 'react'
import styles from './HomeVideoSection.module.css'

export default function HomeVideoSection({ logo }) {
    return (
        <div className={`${styles.VideoSection}`}>
            <div className={`${styles.VideoSection_wrapper} wrapper`}>
                
            <div className={`${styles.VideoSection_header}`} 
                data-aos-anchor-placement="bottom-top"
                data-aos='fade'
            >
                <img  className={`${styles.VideoSection_logo}`} alt='Bolt Builder' src={`${logo}`} />
                <div className={`${styles.VideoSection_slogan} satisfy`}>
                    Save time - use Bold Builder!
                </div>
            </div>

            <div className={`${styles.VideoSection_about}`} >

                <div className={`${styles.VideoSection_video}`}
                    data-aos-anchor-placement="bottom-top"
                    data-aos='fade-right'
                >
                    video
                </div>

                <div className={`${styles.VideoSection_info}`}
                    data-aos-anchor-placement="bottom-top"
                    data-aos='fade'
                >
                    <div className={`${styles.VideoSection_info_header}`}>
                        BEST PRACTICES ON THE MARKET <br />
                        COLLECTED IN ONE PAGE BUILDER.
                    </div>
                    <div className={`${styles.VideoSection_info_firstPara}`}>
                        Bold Builder is a free WordPress page builder. 
                        It’s integrated with OhLaLa theme and it features drag and drop interface, 
                        many content elements, 
                        clipboard functionality and has the fastest user interface around.
                    </div>
                    <div className={`${styles.VideoSection_info_secondPara}`}>
                        Your opinion matters to us – give it a try and let us know your opinion.
                    </div>
                </div>

            </div>

            </div>
        </div>
    )
}
