import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"

const BuahForm = () =>{
  const [daftarBuah, setDaftarBuah, inputName, setInputName, inputPrice, setInputPrice, inputWeight, 
    setInputWeight, showForm, setShowForm, 
    statusForm, setStatusForm, currentIndex, setCurrentIndex] = useContext(BuahContext)
  const addNewDataBuah = () => {
      setInputName("")
      setInputPrice()
      setInputWeight()
      setShowForm(true)
      setStatusForm("create")
  }
      

  const handleSubmit = (event) =>{
      event.preventDefault()
      if (currentIndex === -1){
          setDaftarBuah([...daftarBuah, {nama: inputName, hargaTotal: inputPrice, beratTotal: inputWeight}])
      } else {
          daftarBuah[currentIndex] = {nama: inputName, hargaTotal: inputPrice, beratTotal: inputWeight}
          setDaftarBuah(daftarBuah)
      }
      setCurrentIndex(-1)
      setShowForm(false)
      setInputName("")
      setInputPrice("")
      setInputWeight("")
  }

  const handleChange = (event) =>{
    setInputName(event.target.value)
  }
      
  const handleChange1 = (event) =>{
    setInputPrice(event.target.value)
  }

  const handleChange2 = (event) =>{
    setInputWeight(event.target.value)
  }

  
  return(
    <>
      {!showForm && <button className='button-add' onClick={addNewDataBuah}> Tambah Data Buah</button>}
      {showForm && (
      <>
        <h1 className="App">{statusForm === "create" ? "Tambah Data Buah Baru" : `Edit Data Buah ${inputName}`}</h1>
        <form className="custom-form" onSubmit={handleSubmit}>
            <div className="custom-input">
              <label htmlFor='name'>Nama:</label>
            <input type="text" value={inputName} onChange={handleChange} />
              <label htmlFor='harga'>Harga Total:</label>
            <input type="number" value={inputPrice} onChange={handleChange1} />
              <label htmlFor='berat'>Berat Total (dalam gram) :</label>
            <input type="number" value={inputWeight} onChange={handleChange2} />
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </>
      )}
    </>
  )   
}
    
export default BuahForm
