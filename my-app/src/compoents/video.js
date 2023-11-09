import './video.css';

function Video ({title, id, channels, views, time}) {

   return (
   <>
   <div className='container'>
      <div>
   <img className="dummy" src ={(`https://picsum.photos/id/${id}/200/300`)} alt = "dummy images" />
   </div>
   <div className='title'>{title}✅</div>
   <div claasName="channels">{channels}</div>
   <div className='views'>{views}<span>.</span>{time}</div>
   </div>
</>
   );
}

export default Video;