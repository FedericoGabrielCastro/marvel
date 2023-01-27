import { MvSection } from '@layout/MvSection/MvSection';

/**
 *
 * @returns
 */
export const HomeViewTaskSection = () => {
  return (
    <MvSection>
      <div className='homeTask'>
        <h3>Challenge task:</h3>
        <div className='homeTask__list'>
          {/* TODO: remove this hardcode list and put something more prety. */}
          <ul>
            <li>Header, with navigation to the list of characters and the list of comics.</li>
            <li>Main, with the corresponding content.</li>
            <li>Footer, basic, can only be with the link to the project repository.</li>
            <li>Consumption of external API (for example using Axios)</li>
          </ul>
          <ul>
            <li>
              Loading, some component that tells us that the page is loading (it can be a Spinner)
            </li>
            <li>Landing, with Hero or Carousels (can be static or dynamic)</li>
            <li>Deployed App (for example on Netlify, https://www.netlify.com/)</li>
          </ul>
          <ul>
            <li>Integrate an external API, service management.</li>
            <li>Use of react-router-dom and hooks.</li>
            <li>Management of css, scss or sass.</li>
            <li>Minimal error handling.</li>
          </ul>
          <h4> - Display list of characters with: </h4>
          <ul>
            <li>Name</li>
            <li>Picture</li>
            <li>Pagination</li>
          </ul>
          <h4> - Character detail display: </h4>
          <ul>
            <li>Name</li>
            <li>Picture</li>
            <li>Description</li>
            <li>Comics in which he appears</li>
          </ul>
          <h4> - Display list of comics with:: </h4>
          <ul>
            <li>Title</li>
            <li>Picture</li>
            <li>Price</li>
          </ul>
          <h4> - Comic detail display: </h4>
          <ul>
            <li>Title</li>
            <li>Picture</li>
            <li>Price</li>
            <li>Description</li>
          </ul>
        </div>
      </div>
    </MvSection>
  );
};
