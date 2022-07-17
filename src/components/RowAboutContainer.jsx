import React, { useEffect, useRef, useState } from "react";
import NotFound from "../img/NotFound.svg";

const RowAboutContainer = ({ flag, data, scrollValue }) => {
    const rowContainer = useRef();

    const [items, setItems] = useState([]);

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);

    return (
        <div
            ref={rowContainer}
            className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${flag
                ? "overflow-x-scroll scrollbar-none"
                : "overflow-x-hidden flex-wrap justify-center"
                }`}
        >
            {/* Show data by card */}
            {data && data.length > 0 ? (
                data.map((item) => (
                    <div
                        key={item?.id}
                        className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                    >
                        <div className="w-full flex items-center justify-between">
                            <div className="w-20 h-20 -mt-8 drop-shadow-2xl">
                                <img
                                    src={item?.imageURL}
                                    alt=""
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-end justify-end -mt-8">
                            <p className="text-textColor font-semibold text-base md:text-lg">
                                {item?.nama}
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-headingColor font-semibold">
                                    <span className="text-sm text-green-600">NIM. </span> {item?.nim}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (

                // notifikasi jika data kosong
                <div className="w-full flex flex-col items-center justify-center">
                    <img src={NotFound} className="h-340" />
                    <p className="text-xl text-headingColor font-semibold my-2">
                        Items Not Available
                    </p>
                </div>
            )}
        </div>
    );
};

export default RowAboutContainer;