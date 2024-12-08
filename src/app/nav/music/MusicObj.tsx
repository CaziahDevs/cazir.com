import React from 'react'

interface musicObjProps {
    title: string;
    img: string;


}
const MusicObj: React.FC<musicObjProps> = ({
    title,
    img
}) => {
    return (
        <div className=''>
            <h3>{title}</h3>
            <img src={img} alt={title} className='w-20 h-20' />
        </div>
    )
}

export default MusicObj