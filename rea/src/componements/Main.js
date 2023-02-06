import React, { useState } from 'react';
import Promptext from './input/Promptext';

const Main = () => {
    const [promptext, setPromptext] = useState("");

    return (

        <div className="container-liquid justify-center  ">

            <div className="bar flex justify-around border-2 border-black m-20 ">
                <li><p>menu1</p></li>
                <li><p>menu2</p></li>
                <li><p>menu3</p></li>

            </div>
            <div className="bar flex justify-around border-2 border-black m-20 ">
                <Promptext setPromptext={setPromptext}/>
            </div>

            <div className="mainmenu flex border-2 border-black mb-5  " >
                <div className="main1 w-1/2 p-3 ">
                    <p>Le perroquet !</p>
                    <p>{promptext}</p>
                </div>
                <div className="main2 w-1/2 p-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut rerum ducimus magni cupiditate accusamus odio facere asperiores quaerat commodi ipsa culpa libero, dignissimos nulla enim beatae repellat quia non vero voluptate consequatur sunt corporis provident nam. Sint laudantium nobis
                        sit sed ipsam aut blanditiis, architecto provident autem optio illo incidunt?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;