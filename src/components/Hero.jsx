import React from 'react'
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo);


    useGSAP(()=>{
      gsap.to("#title",{
        opacity:1,
        translateY:10,
        ease:"power1.inOut",
        delay:2
      })
      gsap.to("#subTitle",{
      translateY:-30,
      opacity:1,
      delay:2,
      ease:"power1.out"
      })
    },[]);
    

   useEffect(()=>{

     

   },[]) 

   
  return (
    <>  
    <section className='w-full h-[calc(100vh-60px)] bg-black'>
    <div className='h-5/6 w-full flex-center flex-col'>
      <p id='title' className='sm:mt-5 mt-10 opacity-0 font-semibold text-3xl max-md:mb-10  text-center'> IPhone 15</p>
      <div className=" flex-center md:w-11/12 w-9/12">
        <video className='' autoPlay muted playsInline={true} key={videoSrc}  >
        <source src={videoSrc} type='video/mp4'/>
        </video>
      </div>
    </div>

    <div className=" opacity-0" id='subTitle'>
        <a href="#highlights">
        <p className="font-normal text-xl">From $199/month or $999</p>
        </a>
    </div>    
    </section>

    </>
  )
}

export default Hero
