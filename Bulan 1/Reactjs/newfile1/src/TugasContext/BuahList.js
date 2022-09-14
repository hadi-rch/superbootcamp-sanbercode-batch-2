import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"

const BuahList = () =>{
  const [daftarBuah, setDaftarBuah, inputName, setInputName, inputPrice, setInputPrice, inputWeight, 
    setInputWeight, showForm, setShowForm, statusForm, 
    setStatusForm, currentIndex, setCurrentIndex] = useContext(BuahContext)

  const handleEdit = (event) => {
    let index = Number(event.target.value)
    let currentDataBuah = daftarBuah[index]

    setStatusForm("edit")
    setCurrentIndex(index)
    setInputName(currentDataBuah.nama)
    setInputPrice(currentDataBuah.hargaTotal)
    setInputWeight(currentDataBuah.beratTotal)
    setShowForm(true)
}

const handleDelete = (event) => {
    let index = Number(event.target.value)
    if (currentIndex !== -1){
        setCurrentIndex(-1)
        setInputName("")
        setInputPrice()
        setInputWeight()
        setShowForm(false)
    }

    let newDataBuah = daftarBuah.filter((item) => {
        return item !== daftarBuah[index]
    })

    setDaftarBuah(newDataBuah)
}
  

  return(
    <>
    <h1 className="App">Daftar Buah</h1>
    <table className="custom-table">
    <thead>
        <tr>    
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per kg</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
    {daftarBuah.map((el, index)=>{
        return(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{el.nama}</td>
            <td>{el.hargaTotal}</td>
            <td>{el.beratTotal/1000} kg</td>
            <td>{el.hargaTotal/(el.beratTotal/1000)}</td>
            <td>
                <button className="button-edit mr-10" onClick={handleEdit} value={index}>Edit</button>
                <button className="button-delete" onClick={handleDelete} value={index}>Delete</button>
            </td>
        </tr>    
            
        ) 
      })}

    </tbody>
    </table>
    </>
  )

}

export default BuahList
