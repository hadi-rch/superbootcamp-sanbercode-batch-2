import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"


const BuahList = () =>{

  const [daftarBuah,currentIndex,setInputName,setInputPrice,setInputWeight, setCurrentIndex,setShowForm
,setStatusForm,setDaftarBuah] = useContext(BuahContext)

  const handleDelete = (event) => {
    let index = parseInt(event.target.value)
    if(currentIndex !== -1){
    setInputName("")
    setInputPrice("")
    setInputWeight("")
    setShowForm(false)
    setStatusForm("create")
    setCurrentIndex(-1)
    }
    
    let newFruits = daftarBuah.filter((item)=>{
        return item !== daftarBuah[index]
    })
    setDaftarBuah(newFruits)
}
const handleEdit = (event) => {
    let index = parseInt(event.target.value)
    let currentDaftarBuah = daftarBuah[index]

    setInputName(currentDaftarBuah.nama)
    setInputPrice(currentDaftarBuah.hargaTotal)
    setInputWeight(currentDaftarBuah.beratTotal)
    setCurrentIndex(index)
    setShowForm(true)
    setStatusForm("edit")
}

  return(
<>
                <h1>Daftar Harga Buah</h1>
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
                        {daftarBuah.map((value, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{value.nama}</td>
                                <td>{value.hargaTotal}</td>
                                <td>{value.beratTotal/1000} Kg</td>
                                <td>{value.hargaTotal/value.beratTotal*1000}</td>
                                <td>
                                    <button className="button-edit" onClick={handleEdit} value={index}  >Edit</button>
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