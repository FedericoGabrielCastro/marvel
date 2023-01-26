import { BsGithub } from 'react-icons/bs';

/**
 * MvFooter.
 *
 * Puporse:
 * - Render a Footer.
 *
 * Reference:
 * - https://react-icons.github.io/react-icons/
 *
 * @returns Footer component.
 */
const MvFooter = () => {
  return (
    <footer className='MvFooter'>
      <a
        className='MvFooter__link'
        target='_blank'
        href='https://github.com/FedericoGabrielCastro/marvel'
        alt='Go to github'
      >
        <BsGithub />
        <p>Github repository</p>
        <BsGithub />
      </a>
    </footer>
  );
};

export default MvFooter;
