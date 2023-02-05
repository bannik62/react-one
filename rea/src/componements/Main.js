import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="container justify-center ">

                <div className="bar flex justify-around border-2 border-black m-20 ">
                        <li><p>menu1</p></li>
                        <li><p>menu2</p></li>
                        <li><p>menu3</p></li>
                    
                </div>

                <div className="menu flex border-2 border-black " >
                    <div className="main1 w-25 "><p>main1</p></div>
                    <div className="main2 w-50 "><p>main2</p></div>

                </div>
            </div>

        </div>
    );
};

export default Main;