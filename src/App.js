import React, { useEffect, useState } from 'react'
import { Header, CreateContainer, MainContainer, MenuContainer, AboutContainer } from './components'
import { Route, Routes } from 'react-router-dom'
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import CartContainer from './components/CartContainer';

const App = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => { }, [scrollValue, cartShow]);
  
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header/>

      <main className='mt-14 md:mt-20 px-4 md:px-16 py-6 w-full'>
        <Routes>
          <Route path='/' element={ <MainContainer /> } />
          <Route path='/createItems' element={ <CreateContainer/> } />
          <Route path='/menu' element={<MenuContainer/>}/>
          <Route path='/about' element={<AboutContainer/>}/>
        </Routes>
      </main>
      {cartShow && <CartContainer />}
    </div>
  )
}

export default App