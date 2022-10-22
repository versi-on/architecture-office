import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import './assets/style/app.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
