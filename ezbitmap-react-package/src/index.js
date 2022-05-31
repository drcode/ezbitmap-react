import ezbitmap from '@lisperati/ezbitmap';
import React from 'react';

function Ezbitmap(props){
  const ref=React.useRef(null);
  let ascii=props.children;
  const [image,setImage]=React.useState();
  const width=image?image.width:0;
  const height=image?image.height:0;
  React.useEffect(()=>{
    const image=ezbitmap(ascii,{debugging:props.debugging});
    setImage(image);
  },[ascii,props.debugging]);
  React.useEffect(()=>{
    if (!image)
      return;
    const context=ref.current.getContext('2d');
    context.imageSmoothingEnabled=false;
    context.putImageData(image,0,0);
  },[image]);
  return (
      <canvas style={{imageRendering:"pixelated",
                      ...props.style,
                      ...(props.bigPixels?({width:width*4,height:height*4}):{}),
                     }}
             onClick={props.onClick}
             width={width}
             height={height}
             ref={ref}/>
  );
}

export default Ezbitmap;
