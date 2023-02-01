import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ok ,j'ai compris.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export function Bod() {
  return (
    <div className='Bod mx-auto w-1/2 border-2 border-black m-2 '>
      <p> bonjour je suis le body </p>
      <div>
        <img src={logo} alt="My Image" />
      </div>
    </div>
  );

};

export function Formulaire() {
  return (

    <form className="Formulaire flex-column items-center m-2 mx-auto border-2 border-black w-1/2">
      <div className=' m-5  border-2 border-black'>
        <div className="w-1/2 p-2">
          <label htmlFor="firstName" className="block font-bold mb-2 p-5 ">First Name:</label>
          <input type="text" id="firstName" className="w-full border p-2" />
        </div>
        <div className="w-1/2 p-2">
          <label htmlFor="lastName" className="block font-bold mb-2">Last Name:</label>
          <input type="text" id="lastName" className="w-full border p-2" />
        </div>
        <div className="w-1/2 p-2">
          <label htmlFor="address" className="block font-bold mb-2">Address:</label>
          <input type="text" id="address" className="w-full border p-2" />
        </div>
        <div className="w-1/2 p-2">
          <label htmlFor="email" className="block font-bold mb-2">Email:</label>
          <input type="email" id="email" className="w-full border p-2" />
        </div>
        </div >
    </form>


  )



};

