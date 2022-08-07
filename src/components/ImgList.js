import React from 'react';
import Img from './Img';

const ImgList = props => {

  const results = props.data;
  const imageName = props.imagesName;
  let imgs;

  if (results.length) {
    imgs = results.map(img => {
      let id = img.id;
      let path = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
      return <Img className="size" url={`${path}`} key={id} />
    });
  } else {
    imgs = <div className='page-not_found'>
      <h1>No Images Found</h1>
      <p>Please try a different search term</p>
    </div>
  }

  return (
    <div>
      <h1 className='image-name'>{imageName}</h1>
      <ul>
        {imgs}
      </ul>
    </div>
  );
}

export default ImgList;