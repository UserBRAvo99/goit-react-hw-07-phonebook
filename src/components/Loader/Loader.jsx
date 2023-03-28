import { ThreeDots } from 'react-loader-spinner';

import style from './loader.module.scss';

function Loader() {
  return (
    <div className={style.loaderThreeDots}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3d5475"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
