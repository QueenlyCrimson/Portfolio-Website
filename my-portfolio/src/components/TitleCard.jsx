import Typed from "typed.js"
import { useEffect, useRef } from "react"

const TitleCard = () => {

  const el = useRef(null);


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Apps", "Stories", "Interactive Experiences", "Connections"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 700,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return(
    <div className="titlebox">
      <div className="titleboxitem" >
        <img className="portrait" src="https://media.discordapp.net/attachments/710881503592185867/1118703867379585074/1684017274256.png?width=600&height=600" alt="">
        </img>
        <div>
          Erin Keys
        </div>
      </div>
      <div className="titleboxitem">A Software Developer who loves to make...</div>
      <div className="titleboxitem"><span className="typedmoment" ref={el}></span></div>
      
    </div>
  )
}

export default TitleCard