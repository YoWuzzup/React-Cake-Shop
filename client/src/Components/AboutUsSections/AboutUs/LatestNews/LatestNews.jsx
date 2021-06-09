import React from 'react'
import { NewsSinglePost } from '../../../'
import styles from './LatestNews.module.css'

export default function LatestNews({ imgs }) {
    return (
    <div className={`${styles.latestNews}`} >
    <div className={`${styles.latestNews_wrapper} wrapper`}>

        <div className={`${styles.latestNews_title}`} >
            <div className={`${styles.latestNews_para}`} >TAKE A LOOK AT OUR</div>
            <div className={`${styles.latestNews_slogan} satisfy`} >Latest news</div>
        </div>

        <div className={`${styles.latestNews_posts}`} >
            <NewsSinglePost img={imgs} />
            <NewsSinglePost img={imgs} />
            <NewsSinglePost img={imgs} />
        </div>

    </div>
    </div>
    )
}
