import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-3'>
          <div className='w-3 h-3 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-60 h-20 violet-gradient'/>
        </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>John</span></h1>
            <p className={`${styles.heroSubText} text-white-50 mt-0`}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
            </p>
          </div>
      </div>
      <ComputersCanvas/>

      <div className={'absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center'}>
        <a href="#about">
          <div className={'w-[25px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center items-start pt-1.5 pr-0.5'}>
            <motion.div
              animate={{
                y:[0,24,0],
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className={'w-2.5 h-2.5 rounded-full bg-secondary my-0'}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero