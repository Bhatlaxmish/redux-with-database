import ReactDOM from 'react-dom/client';
import { Provider } from 'react';
import './index.css';
import App from './App';
import store from './components/store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);
