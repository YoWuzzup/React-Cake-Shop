import React from 'react'
import styles from './NewsContent.module.css'

export default function NewsContent() {
    const dummy = [1, 2]
    return (
    <div className={`${styles.newsContent}`}>
    <div className={`${styles.newsContent_wrapper} wrapper`}>
        <div className={`${styles.newsContent_allNews}`}>
            {dummy.map((item,index)=>(
                <div className={`${styles.newsContent_singleNews}`} key={`${item}_${index}`}>
                    
                    <img src='#' alt='pic' className={`${styles.newsContent_image}`} />

                    <div className={`${styles.newsContent_info}`} >
                        <div className={`${styles.newsContent_tags}`} >
                            <span> ice cream </span> 
                            <span> smoothies </span> 
                        </div>

                        <div className={`${styles.newsContent_name} satisfy`} >
                            Blueberry cheesecake recipe
                        </div>
                        <div className={`${styles.newsContent_about}`} >
                            <span > data /</span>
                            <span > bywho /</span>
                            <span > comments </span>
                        </div>
                        <div className={`${styles.newsContent_shareLinks}`} >
                            links
                        </div>

                    </div>

                </div>
            ))}

            
            <div className={`${styles.newsContent_nextButtonBlock}`} >
                <span className={`${styles.newsContent_nextName}`}>Older Posts</span>
                <button className={`${styles.newsContent_nextButton}`}></button>
            </div>
            
        </div>
        
        <div className={`${styles.newsContent_sides}`}>

            <form className={`${styles.newsContent_form}`}>
                <input className={`${styles.newsContent_input}`} placeholder='Looking for...' ></input>
                <button className={`${styles.newsContent_button}`}></button>
            </form>

            <div className={`${styles.newsContent_recentPosts}`}>
                dsa
            </div>
            
        </div>

    </div>
    </div>
    )
}
