import './App.css';

import React from 'react';
// import CustomHeader from "./Header"
// import Intro from "./Tugas-Intro-ReactJS/tugasIntroReact"
// import First from "./Tugas-Hooks/tugasHooks"
// import CRUDFruits from './TugasCRUDHooks/fruits';
// import Peserta from './axios/latihan';
// import JawabanCrud from './TugasCRUDHooks/jawabanCRUD';
import Student from './Tugas Axios';



function App()  {
  // let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  
 return (
    <div className="App">
    {/* <CustomHeader/>
      <First/>
      <Intro/> */}
      {/* <JawabanCrud/> */}
      {/* <Peserta/> */}
      {/* <CRUDFruits/> */}
      <Student/>
    </div>
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