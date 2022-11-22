import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Header from './components/Header';
import './assets/style/app.css';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App wrapper">
      <BrowserRouter>
        <Header />
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
