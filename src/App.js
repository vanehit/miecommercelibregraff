
import './App.css';
import  NavBar  from './components/NavBar/NavBar';
import 'boxicons';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import { NotificationProvider } from './notification/Notification';





const App = () => {
  return (
      <div className="App">
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/detail/:productId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
                <Route path='/cart' element={<Cart />} />
              </Routes>
            </BrowserRouter> 
          </CartContextProvider>
        </NotificationProvider>
      </div>
  );
}



export default App;
