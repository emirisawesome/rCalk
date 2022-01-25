import React, { useState } from 'react';



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

    if (e == 'C') {
      DelLastSimbol()
      return
    }
    if (e == 'AC') {
      CleanResult()
      return
    }
    if (e == '=') {
      Calk()
      return
    }

    AddSimbol(e)
  }

  return (
    <div>
      <textarea disabled={true} value={result}></textarea>
      <div className='btnWrapper'>
        {
          buttonArr.map((e, i) => {
            return <button onClick={() => { GetNum(e) }} key={i}>{e}</button>
          })
        }
      </div>
    </div>
  );
};

export default App;