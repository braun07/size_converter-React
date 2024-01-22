import { useState } from 'react';

function App() {
  function SubmitForm() {
    console.log('teste');
  }

  return (
    <>
      <div id="SizeMain">
        <header>
          <span>Welcome to my</span>
          <h1>Size Converter's</h1>
        </header>

        <form onSubmit={SubmitForm} className='form'>

        </form>
      </div>
    </>
  )
}

export default App
