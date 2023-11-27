import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store.js';


function App() {

  
  return (
    <>
      <Provider store={store}>
         
              <Navbar />         
              <Outlet/>
              <Footer />

      </Provider> 
    </>
  );
}

export default App;
