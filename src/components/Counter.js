import './Counter.css'
import {useState} from 'react';
function Counter()
{
    const[count,setCount]=useState(0);
    function incHandler()
    {
        setCount(count+1);
    }

    function decHandler()
    {
        setCount(count-1);
    }

    function resetHandler()
    {
        setCount(0);
    }
    return(
        <div className='btn'>
            <div className='center-div'>
                <button onClick={incHandler} className='btninc'> + </button>
                <div> {count}</div>
                <button onClick={decHandler} className='btndec'> - </button>
            </div>
            <div>
            <button onClick={resetHandler} className='btnreset'> Reset </button>
            </div>
        </div>
    );
}
export default Counter;