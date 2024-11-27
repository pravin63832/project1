import './Hero.css'
import arrow from './assets/arrow.png'
import pause from './assets/pause.jpg'
import play from './assets/play.png'
 
const Hero =({HeroData,setHeroCount,heroCount,setPlayStatus,playStatus})=>{
    return (
      <div className='hero'>
        <div className="hero-text">
        <p>{HeroData.text1}</p>
        <p>{HeroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the Brands</p>
        <img src={arrow} alt=""/>
      </div>
      <div className="hero-dot play">
        <ul className='hero-dots'>
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>

        </ul>
      </div>
      <div className='hero-play'>
        <img onClick={()=>setPlayStatus(!playStatus)}src={playStatus?pause:play} alt=""/>
        <p>Watch For Better Experience</p>
      </div>

      </div>
    )
  }
  
  export default Hero