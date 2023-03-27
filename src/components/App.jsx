import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Phonebook from './Phonebook';
import { persistor, store } from './redux/store';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        paddingTop: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Phonebook />
        </PersistGate>
      </Provider>
    </div>
  );
};
