import React, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import RowContainer from "./RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from '../context/StateProvider';

const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => { }, [scrollValue]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
    </div>
  )
}
export default MainContainer