import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {github} from '../assets';
import {SectionWrapper} from '../hoc'
import { projects } from '../constants'; //CAMBIAR ESTO POR MIS PROYECTOS
import { fadeIn, textVariant } from '../utils/motion';
import { lazy } from 'react';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) =>{
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options ={{
          loading: lazy,
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            loading='lazy'
            src={image}
            alt={name} 
            className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open
                (source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  loading='lazy'
                  src={github}
                  alt="github"
                  className='object-contain'
                />
              </div>
            </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) =>
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          )}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Mis Proyectos
        </p>
        <h2 className={styles.sectionHeadText}>
         Proyectos.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          loading="lazy"
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Estos son mis principales proyectos creados ya sea como trabajo final del colegio
          como para conseguir diferentes certificados como desarrollo en videojuegos con Unity o desarrollo web con React.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((projects, index) =>
          <ProjectCard
          loading="lazy"
          key={`project-${index}`}
          index={index}
          {...projects}
          />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");