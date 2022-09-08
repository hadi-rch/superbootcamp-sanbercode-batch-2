// Tambahkan '0' untuk satu digit angka. Untuk itu nomornya harus
 //dikonversi ke string, karena angka tidak memiliki metode panjang
// import {useState, useEffect} from 'react'    
import React from 'react';
import CountDown from "./fifth"
import './tugas-hooks.css';

// const countDown = time => {
//     return String(time).length === 1 ? `${time}` : `${time}`;
//   };
  
//   const format = time => {
//     // Ubah detik menjadi menit dan ambil seluruh bagian
//     const minutes = Math.floor(time / 60);
  
//     // Mendapatkan detik tersisa setelah mengonversi menit
//     const seconds = time % 60;
  
//     //Mengembalikan nilai gabungan sebagai string dalam format mm:ss
//     return `${minutes}:${countDown(seconds)}`;
//   };
  
  function App() {
    const [counter, setCounter] = React.useState(100);
    React.useEffect(() => {
      let timer;
      if (counter > 0) {
        timer = setTimeout(() => setCounter(c => c - 1), 1000);
      }
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }, [counter]);
    return (
      <div className="cdn">
        <h1><CountDown/></h1>
        <h3>{counter === 0 ? "" : <div>Countdown: {(counter)}</div>}</h3>
      </div>
    );
  }
  export default App;