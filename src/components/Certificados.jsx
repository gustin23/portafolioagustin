import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {SectionWrapper} from '../hoc'
import { certificados } from '../constants'; //CAMBIAR ESTO POR MIS PROYECTOS
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) =>{
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options ={{
          max: 45,
          scale: 1.1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[250px]'>
          <img
            src={image}
            alt={name} 
            className='w-full h-full object-cover rounded-2xl'
            />

        </div>

        <div className='mt-1'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  )
}


const Certificados = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
        Certificados.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Estos son los diferentes certificados que consegui a lo largo de los años en AprendeProgramando.
        </motion.p>
      </div>

      <div className='mt-[20px] flex flex-wrap gap-7'>
        {certificados.map((certificados, index) =>
          <ProjectCard
          key={`project-${index}`}
          index={index}
          {...certificados}
          />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(Certificados, "work");