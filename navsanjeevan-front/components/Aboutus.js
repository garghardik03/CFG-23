'use client';

import { Carousel } from 'flowbite-react';

export default function Aboutus() {
  return (
    <Carousel slideInterval={5000}>
      <img
        alt="..."
        classsName='object-scale-down'
        src="https://t4.ftcdn.net/jpg/02/87/12/91/240_F_287129197_EE8GY37vcoWHpXuFQJyrAhUNJH3cVv9Z.jpg"
        // style={{objectFit:'contain !important',aspectRatio:'16 / 9'}}
      />
      <img
        alt="..."
        classsName='object-scale-down'
        src="https://previews.123rf.com/images/yongkiet/yongkiet1606/yongkiet160600006/59494884-landscape-green-rice-fields-are-beautiful-produce-grains-in-thailand-16-9-wide-screen.jpg"
        // style={{objectFit:'contain !important',aspectRatio:'16 / 9'}}
      />
      <img
        alt="..."
        classsName='object-scale-down '
        src="https://newsonair.com/wp-content/uploads/2022/04/3-1-696x418.jpeg"
        // style={{objectFit:'contain !important',aspectRatio:'16 / 9'}}
      />
      <img
        alt="..."
        classsName='object-scale-down'
        src="https://imgnew.outlookindia.com/public/uploads/articles/2021/5/21/Picture_(3).jpg"
        // style={{objectFit:'contain !important',aspectRatio:'16 / 9'}}
      />
      <img
        alt="..."
        classsName='object-scale-down'
        src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-02/16/full/1550336964-2024.jpg?im=FeatureCrop,size=(826,465)"
        // style={{objectFit:'contain !important',aspectRatio:'16 / 9'}}
      />
    </Carousel>
    
  )
}


