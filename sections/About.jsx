'use client';


import {motion} from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer }  from '../utils/motion'

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'></div>
      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}} className={`${styles.flexCenter} flex-col ${styles.innerWidth}`}>
        <TypingText title="| About Metaverses" textStyles="text-center"/>
        <motion.p className='mt-[8px] font-normal sm:text-[20px] text-[20px] text-secondary-white text-center' variants={fadeIn('up', 'tween', 0.2, 1)}>
        Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into reality. Let's explore the madness of the metaverse by scrolling down
        </motion.p>
        <motion.img variants={fadeIn('up', 'tween', 0.3, 1 )} src="/arrow-down.svg"alt="down-arrow" className='my-5 w-[18px] h-[28px] object-contain' />
      </motion.div>
  </section>
);

export default About;
