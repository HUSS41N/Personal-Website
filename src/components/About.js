import React,{useState} from "react"

const About = () => {
  const [showText,setShowText] = useState(false)
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 600){
      setShowText(true)
    } 
  })
  return (
    <div>
      <section className="about" id="about">
			<p id="about_text" className={ showText ? "text-focus-in" : ""}>
				I'm a full stack developer based in Delhi,India with
				determination for delivering end-to-end Web solutions. I'm
				passionate about improving the lives of others through my
				products and am constantly looking to learn new things everyday.
			</p>
		</section>
    </div>
  )
}

export default About