import React from 'react'
import styles from './NewsSinglePost.module.css'

export default function NewsSinglePost({ img }) {
    return (
    <div className={`${styles.newsSinglePost}`}>
        
        <img className={`${styles.newsSinglePost_img}`} src={img} alt={`single post`} />
        
        <div className={`${styles.newsSinglePost_tags}`}>ICE CREAM RECIPES</div>

        <div className={`${styles.newsSinglePost_name} satisfy`}>How to make best ice cream</div>
        
        <div className={`${styles.newsSinglePost_aboutPost}`}>
            <div className={`${styles.newsSinglePost_time}`}>10.10</div>
            <div className={`${styles.newsSinglePost_by}`}>by me</div>
            <div className={`${styles.newsSinglePost_comments}`}>0</div>
        </div>

        <div className={`${styles.newsSinglePost_content}`}>We provide leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate</div>
    
    </div>
    )
}
