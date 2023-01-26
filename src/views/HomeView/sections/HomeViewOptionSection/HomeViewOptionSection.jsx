import { MvSection } from '@layout/MvSection/MvSection';
import { motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';

/**
 * images.
 *
 * Purpose:
 * - Call images from google and set in this array.
 * TODO: Put this images in assets folder
 */
const images = [
  'https://as01.epimg.net/meristation/imagenes/2021/03/12/reportajes/1615546576_319724_1615546812_noticia_normal.jpg',
  'https://imagenes.razon.com.mx/files/image_640_434/uploads/2020/05/31/5ed3727a93471.jpeg',
  'https://media.revistagq.com/photos/5eb5499da458ae53fb864fba/16:9/w_2560%2Cc_limit/peliculas-marvel.jpg',
  'https://sm.ign.com/t/ign_es/screenshot/default/amalgam-destacada_whdg.1280.jpg',
  'https://depor.com/resizer/l--pr8Er05IjpMx1t5_OlCvVx7I=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/AJSO3FP4JFAH3JYUMVNM4BVJ2M.jpg',
  'https://play-lh.googleusercontent.com/ee01AA3DPYZAfnXQ8EBbDVvPAvXNu2N0omd6NE7cT48G0xGyx0h5JxxVRz7eIJZsvA',
];

/**
 * variants.
 *
 * Purpose:
 * - Framer motion carrusel variants
 */
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

/**
 * HomeViewOptionSection.
 *
 * Purpose:
 * - Section to choose characters or comic.
 *
 * @returns HomeView section.
 */
export const HomeViewOptionSection = () => {
  /**
   * useState.
   *
   * Purpose:
   * - Set initial state for page and direction.
   */
  const [[page, direction], setPage] = useState([0, 0]);

  /**
   * imageIndex.
   *
   * Purpose:
   * - Calc img in array.
   */
  const imageIndex = wrap(0, images.length, page);

  /**
   * paginate.
   *
   * Purpose:
   * - Set pagination carrousel.
   *
   * @param newDirection Check direction carrosuel.
   */
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  /**
   * timeout
   *
   * Puporse:
   * - Automatic carrousel.
   */
  setTimeout(() => {
    paginate(+1);
  }, 4000);

  return (
    <MvSection>
      <div className='homeViewCarrusel'>
        <h1>Marvel app</h1>
        {/* <div className='prev' onClick={() => paginate(-1)}>
          {'<<<'}
        </div> */}
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
          }}
          // drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        {/* <div className='next' onClick={() => paginate(1)}>
          {'>>>'}
        </div> */}
      </div>
    </MvSection>
  );
};
