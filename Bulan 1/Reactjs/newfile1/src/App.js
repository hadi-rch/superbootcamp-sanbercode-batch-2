import './App.css';
import React from 'react';
import Routes from './TugasRouter';
import { ThemeProvider } from './Context/theme';

  function App()  {
    
    return (
      <ThemeProvider>
        <Routes/>
      </ThemeProvider>
      );

    }
  export default App;


























// import React, { useState } from 'react';

// const App = () => {
//   // Deklarasi variabel state baru yang kita sebut "stateCount"
//   const [stateCount, setStateCount] = useState(0);

//   return (
//     <div>
//       <p>Anda menekan sebanyak { stateCount } kali</p>
//       <button onClick={() => setStateCount (stateCount + 1)}>
//         Klik saya
//       </button>
//     </div>
//   );
// }

// export default App