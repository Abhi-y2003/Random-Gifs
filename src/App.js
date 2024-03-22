import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import bg from './asstes/bg.jpg'

function App() {
  return (
    <div className='background w-full h-screen flex flex-col relative items-center'>
      <h1 className='bg-white w-11/12 rounded-lg top-3 text-center
      mt-5 text-3xl px-7 py-3 font-bold '> RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/> 
      </div>
    </div>
  );
}

export default App;
