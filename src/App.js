import imaageSrc from './image/imageSrc.jpg'
import './App.css';

function App() {
  return (
    <>
 
 <div style={{border:'solid 1px black', width:'100vw'}}>

 <h1 className='title red'>Your name here</h1>

 <br/>

 <img src= {imaageSrc} alt="...."/>

 <br/>

 <img src="/imagePub.jpg"alt="...."/>

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4"/>

</video>

</>  );
}

export default App;
