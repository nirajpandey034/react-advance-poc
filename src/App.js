import './App.css';
import UserForm from './Components/UserForm';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserForm />
      </Provider>
    </div>
  );
}

export default App;
