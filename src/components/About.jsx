import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'
import {SectionWrapper} from '../hoc'

import { styles } from '../styles.js'
import { services } from "../constants";
import {fadeIn,textVariant} from '../utils/motion.js'

const ServiceCard = ({title,index,icon}) => {
    return(
        <Tilt className={'xs:w-[250px] w-full'}>
            <motion.div
                variants={fadeIn('right', 'spring',0.5*index, 0.75)}
                className={'w-full green-pink-gradient p-[1px] rounded-[15px] shadow-card'}
            >
                <div
                    options={{
                        max:45,
                        scale:1,
                        speed:450
                    }}
                    className={'bg-tertiary rounded-[15px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'}
                >
                    <img src={icon} alt={title} className={'w-16 h-16 object-contain'}/>
                    <h3 className={'text-white text-center font-bold text-[18px]'}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
          variants={fadeIn("","",0.1,1)}
          className={'mt-3 text-secondary text-[16px] max-w-3xl leading-[28px]'}
      >
        As a frontend developer, I have a passion for creating visually
        appealing and user-friendly websites. With a strong background
        in HTML, CSS, and JavaScript, I specialize in developing interactive
        and responsive interfaces that provide an optimal user experience.
      </motion.p>

        <div className={'mt-20 flex flex-wrap gap-10'}>
            {services.map((service,index)=>(
                <ServiceCard
                    key={service.title}
                    index={index}
                    {...service}
                />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(About,'about')