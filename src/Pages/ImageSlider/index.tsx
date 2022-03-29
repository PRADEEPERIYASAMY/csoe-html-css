import React, { useState } from "react";
import styles from "./imageslider.module.css";
import classnames from 'classnames'
import { count } from "console";

const ImageSlider = () => {

    const [counter,setCounter] = useState<number>(0);

    const images: string[] = ["https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1563387852576-964bc31b73af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80",
        "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"

    ]

    const handlerNext = ()=>{
        if(counter === 4) setCounter(0);
        else setCounter(val => val+1);
    }

    const handlePrevious = ()=>{
        if(counter === 0) setCounter(4);
        else setCounter(val => val-1);
    }

    return <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.slider_wrap}>
            <ul className={styles.slider}>
                <li><img src={images[counter]} alt="" ></img></li>
            </ul>
            <div className={classnames(styles.btns,styles.next)} onClick = {() => handlePrevious()}> 
                <i className="fa fa-arrow-right"></i>
            </div>
            <div  className={classnames(styles.btns,styles.previous)} onClick = {() => handlerNext()}>
                <i className="fa fa-arrow-left"></i>
            </div>
            <div className={styles.counter}></div>
            <div className={styles.pagination_wrap}>
                <ul>
                </ul>
            </div>
        </div>
    </div>
    </div>
}

export default ImageSlider;
