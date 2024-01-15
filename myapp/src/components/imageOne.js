
import { Parallax } from 'react-parallax';
import imageP from '../imgs/gamification.gif'
import TextBox from './textBox';


const imageOne = () => (
    <div  className='outerdiv'>
    <Parallax className='image' bgImage={imageP} strength={1000}>
       <div className='content'>
         <span className='img-txt'> </span>
       </div> 
    </Parallax>
    <TextBox/> 
   </div>
);

export default imageOne;