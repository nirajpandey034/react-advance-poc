import './App.css';
import UserContainer from './Components/UserContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
      </Provider>
    </div>
  );
}

export default App;
