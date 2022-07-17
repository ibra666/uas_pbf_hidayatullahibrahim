import React, { useEffect, useRef, useState } from 'react'
import { useStateValue } from "../context/StateProvider";
import RowAboutContainer from './RowAboutContainer';
import { getAllMemberItems } from '../utils/firebaseFunctions';
import { actionType } from '../context/reducer';

const AboutContainer = () => {
    const [{ memberItems }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => { }, [scrollValue]);

    const fetchData = async () => {
        await getAllMemberItems().then((data) => {
          dispatch({
            type: actionType.SET_MEMBER_ITEMS,
            memberItems: data,
          });
        });
      };

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <section className="w-full my-6">
                <RowAboutContainer
                    scrollValue={scrollValue}
                    flag={false}
                    data={memberItems}
                />
                {/* {cartShow && <CartContainer />} */}
            </section>
        </div>
    )
}
export default AboutContainer