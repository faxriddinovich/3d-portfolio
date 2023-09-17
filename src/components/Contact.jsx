import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from "../styles.js";
import { EarthCanvas } from './canvas'
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import { slideIn } from "../utils/motion.js";

//template_9cjw0uo
//service_lmyopbc
//3IUUHGecl1BGa1KHd


const Contact = () => {

  const [ form, setForm ] = useState({
    name:'',
    email:'',
    message:""
  })

  const formRef = useRef()

  const [loading, setLoading] = useState(false)

  function handleChange(e){
    const { name, value } = e.target

    setForm({...form,[name]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

    emailjs.send(
        'service_lmyopbc',
        'template_9cjw0uo',
        {
          from_name: form.name,
          to_name: 'Asliddin',
          from_email: form.email,
          to_email: 'eliboyevasleshka@gmail.com',
          message: form.message
        },
        '3IUUHGecl1BGa1KHd'
        ).then(()=> {
          setLoading(false)
          alert("Thank you! I'll check your message as soon as possible.")
          setForm({
            name:'',
            email:'',
            message:""
          })
    },(error)=>{
          setLoading(false)
          console.log(error)
          alert(error.message)
    })
  }

  return (
    <div className={'xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden'}>
      <motion.div
        variants = { slideIn( 'left', 'tween', 0.2, 1) }
        className={'flex-[0.75] bg-black-100 p-8 rounded-2xl'}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={'mt-12 flex flex-col gap-8'}
        >
          <label className={'flex flex-col'}>
            <span className={'mb-4 text-white font-medium'}>Your name:</span>
            <input
                type="text"
                name={'name'}
                value={form.name}
                onChange={handleChange}
                className={'bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'}
                placeholder={"What's your name?"}
            />
          </label>

          <label className={'flex flex-col'}>
            <span className={'mb-4 text-white font-medium'}>Your email:</span>
            <input
                type="email"
                name={'email'}
                value={form.email}
                onChange={handleChange}
                className={'bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'}
                placeholder={"What's your email?"}
            />
          </label>

          <label className={'flex flex-col'}>
            <span className={'mb-4 text-white font-medium'}>Your message:</span>
            <textarea
                rows={7}
                name={'message'}
                value={form.message}
                onChange={handleChange}
                className={'bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'}
                placeholder={"What do you want to say?"}
            />
          </label>

          <button type="submit" className={'bg-tertiary py-3 px-8 w-fit font-bold text-white outline-none shadow-md shadow-primary rounded-xl'}>{loading ? "Sending" : "Send"}</button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right",'tween',0.2,1)}
        className={'xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'}
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,'contact')