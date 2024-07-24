import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{ //ter todas as propriedades de image
    hasBorder?: boolean;

}
export function Avatar({ hasBorder = true, ...props } : AvatarProps){ // ...props = todas as propriedades passada pela interface

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props} />
    )
}