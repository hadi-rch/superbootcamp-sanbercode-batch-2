import React, {useContext } from "react"
import {BuahContext} from "./BuahContext"


 const BuahForm = () =>{
    const [setShowForm,setStatusForm,currentIndex,daftarBuah,setDaftarBuah,inputName,inputPrice,inputWeight
    ,setInputName,setInputPrice,setInputWeight,showForm, statusForm]=useContext(BuahContext)
    

    const addFruits = () => {
        setShowForm(true)
        setStatusForm("create")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentIndex === -1){
            setDaftarBuah([...daftarBuah,{nama:inputName, hargaTotal:inputPrice, beratTotal:inputWeight, hargaPerKg:inputPrice/inputWeight*1000}])
        }else{
            daftarBuah[currentIndex] = {nama:inputName, hargaTotal:inputPrice, beratTotal:inputWeight, hargaPerKg:inputPrice/inputWeight*1000}
        setDaftarBuah(daftarBuah)
        }
        
        setInputName("")
        setInputPrice("")
        setInputWeight("")
        setShowForm(false)
    };
    const handleChange = (event) => {
        let value = event.target.value
        setInputName(value)
    }
    const handleChange1 = (event) => {
        let value1 = event.target.value
        setInputPrice(value1)
    }
    const handleChange2 = (event) => {
        let value2 = event.target.value
        setInputWeight(value2)
    }
  

return(
        <>

            
        {!showForm &&<button className="button-add" onClick={addFruits}>Tambah Data Buah</button>}
        {showForm &&
            (
                <>
                <h1>{statusForm === "create" ? "Tambah Data Buah" : `Edit fruits Number ${currentIndex+1}`}</h1>
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
            )
        
        }
       
        </>
)

    }

export default BuahForm