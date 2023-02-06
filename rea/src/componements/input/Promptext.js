import React from 'react';

const Promptext = ({ setPromptext }) => {


    return (
        <div className='flex flex-col m-3 '>
            <label htmlFor="promptext"> perroquet </label>
            <input
                type="text"
                name="promptext"
                id="promptext"
                className='border-2 border-black'
                onChange={(e) => {
                    setPromptext(e.target.value);
                }}
            />
        </div>
    );
};

export default Promptext;