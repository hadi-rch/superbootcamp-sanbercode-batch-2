import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"

const BuahForm = () =>{
  const [daftarBuah, setDaftarBuah, inputName, seInputtName, inputPrice, setInputPrice, inputWeight, setInputWeight, showForm, setShowForm, 
    statusForm, setStatusForm, currentIndex, setCurrentIndex] = useContext(BuahContext)
  const addNewDataBuah = () => {
      seInputtName("")
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
      seInputtName("")
      setInputPrice("")
      setInputWeight("")
  }

  const handleChange = (event) =>{
    seInputtName(event.target.value)
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
        <div className="custom-form">
                        <form onSubmit={handleSubmit}>
                                <div className="kiri">
                                    <label htmlFor="name">Nama :</label>
                                </div>
                                <div className="kanan">
                                    <input required autoComplete="off" type="text" name= "name" value={inputName} onChange={handleChange} placeholder="masukan katakata"/>
                                </div>
                                <div className="kiri">
                                    <label htmlFor="name">Harga Total :</label>
                                </div>
                                <div className="kanan">
                                    <input required autoComplete="off" type="number" name="price" value={inputPrice} onChange={handleChange1} placeholder="masukan katakata"/>
                                </div>
                                <div className="kiri">
                                    <label htmlFor="name">Berat Total(dalam gram) :</label>
                                </div>
                                <div className="kanan">
                                    <input required autoComplete="off" type="number" min={2000} name="weight" value={inputWeight} onChange={handleChange2} placeholder="masukan katakata"/>
                                </div>
                                <div className="bebas">
                                    <input type="submit" value="Submit"/>
                                </div>

                        </form>
                     </div>

      </>
      )}
    </>
  )   
}
    
export default BuahForm
