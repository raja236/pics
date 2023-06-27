import React from 'react';
import'./ImageList.css'
import ImageCard from './ImangeCard';
const Images= (props)=>{
  const images = props.images.map((image)=>{
 return <ImageCard key={image.id} image={image}/>
 });

    return <div className='image-list'>{images}</div>
    
}
export default Images;