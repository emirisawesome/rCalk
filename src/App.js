import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [result, useResult] = useState('')

  const buttonArr = [
    '0', '1', '2',
    '3', '4', '5',
    '6', '7', '8',
    '9', '+', '-',
    '*', '/', 'AC',
    'C', '=',
  ];

  const AddSimbol = (e) => useResult(result + e)
  const DelLastSimbol = () => useResult(result.substring(0, result.length - 1))
  const CleanResult = () => useResult('')
  const Calk = () => useResult(eval(result))


  const GetNum = (e) => {
    // useResult(result + e)

    if (e === 'C') {
      DelLastSimbol()
      return
    }
    if (e === 'AC') {
      CleanResult()
      return
    }
    if (e === '=') {


      try {
        Calk()
      } catch (error) {
        console.warn('некорреутные данные');
        CleanResult()
      }
      return
    }

    AddSimbol(e)
  }

  return (
    <div className='App'>
      <div className="mainWrapper">
        <div className="output">{result}</div>
        <div className='btnWrapper'>
          {
            buttonArr.map((e, i) => {
              return <button onClick={() => { GetNum(e) }} key={i}>{e}</button>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default App;