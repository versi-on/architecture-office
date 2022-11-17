import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Header from './components/Header';
import './assets/style/app.css';

function App() {

  return (
    <div className="App wrapper">
      <BrowserRouter>
        <Header />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
