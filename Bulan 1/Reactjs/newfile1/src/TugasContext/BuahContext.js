import React, { useState, createContext } from "react";


export const BuahContext = createContext();

export const BuahProvider = props => {
    const [daftarBuah, setDaftarBuah] = useState([
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
    ])

    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState(0)
    const [inputWeight, setInputWeight] = useState(0)
    const [showForm, setShowForm] = useState(false) 
    const [statusForm, setStatusForm] = useState("create") 
    const [currentIndex, setCurrentIndex] = useState(-1)

  return (
    <BuahContext.Provider value={[daftarBuah, setDaftarBuah,inputName,setInputName,inputPrice,setInputPrice
    ,inputWeight,setInputWeight,showForm,setShowForm,statusForm,setStatusForm,currentIndex,setCurrentIndex]}>
      {props.children}
    </BuahContext.Provider>
  );
};