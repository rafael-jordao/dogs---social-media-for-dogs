import React from 'react'
import styles from './ImageSkeleton.module.css'
import Loading from './Loading'

const ImageSkeleton = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = React.useState(true);
    
    const handleImageLoad = ({target}) => {
        setSkeleton(false);
        target.style.opacity = 1;
    };
    
    return (
        <div className={styles.wrapper}>
           {skeleton && <div className={styles.skeleton}></div>}
            <img onLoad={handleImageLoad} className={styles.img} alt={alt} src='' {...props} />
        </div>
    )
}

export default ImageSkeleton