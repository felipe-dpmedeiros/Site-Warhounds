import { useRef } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    const boxRef = useRef();
    useGSAP(() => {
    gsap.from(boxRef.current, {opacity: 0, y:0, delay:0.3, duration: 1, ease:'power3.out'})
  }, [])

    return (
    <div ref={boxRef}>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
           <img src={appleImg} alt="Apple" width={30}
           height={30}/> 

           <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav

            ) => (
                    <div key={nav} className="px-5 text-xl cursor-pointer text-gray hover:text-white transition-all">
                        {nav}
                    </div>
                )
            )} 
           </div>

           <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="pesquisa" width={20} height={20}/>
            <img src={bagImg} alt="bag" width={20} height={20}/>
           </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
