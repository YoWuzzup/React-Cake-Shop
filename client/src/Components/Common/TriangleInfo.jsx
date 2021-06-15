import React from 'react'
import styles from './TriangleInfo.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        },
    },
    btn: {
        position: 'absolute',
        marginTop: '100px',
        width: '150px',
        height: '45px',
        backgroundColor: 'rgb(69, 170, 224)',
        color: '#fff',
        border: 'none',
        borderRadius: '50px'
    }
}));

export default function TriangleInfo({ img, text, color, reversed, btn }) {
    const classes = useStyles()

    return (
        <>
        <div className={`${styles.MonthlyMenu_content}`}
        >
            <img className={`${styles.MonthlyMenu_img}`} alt='MonthlyMenu' 
                src={`${img}`} style={{transform: reversed ? 'rotateY(0deg)' : 'rotateY(180deg)'}}
            />    

            <div className={`${styles.MonthlyMenu_words} satisfy`} 
                style={{color: color ? color : ''}}>
                {text}
            </div>
            {btn ?
                <Button variant='contained' color='default' className={`${classes.btn} rglrBtn`} >
                    Order now
                </Button>
                :
                null
            }
        </div>   
        </>
    )
}
