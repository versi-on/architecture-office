import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/style/app.css';
import './assets/style/responsive.css';

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
