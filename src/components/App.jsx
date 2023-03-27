import Phonebook from './Phonebook';
import style from './app.module.scss';

export const App = () => {
  return (
    <div className={style.app}>
      <Phonebook />
    </div>
  );
};
