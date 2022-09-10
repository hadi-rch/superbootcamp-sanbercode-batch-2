import { useState } from "react"
import '../TugasCRUDHooks/fruit2.css'

const CRUDFruits = ()=>{
    const [daftarBuah, setDaftarBuah] = useState([
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
    ])
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputWeight, setInputWeight] = useState("")
    const [showForm, setShowForm] = useState(false) 
    const [statusForm, setStatusForm] = useState("create") 
    const [currentIndex, setCurrentIndex] = useState(-1)

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
                                        <input required autoComplete="off" type="text" name="price" value={inputPrice} onChange={handleChange1} placeholder="masukan katakata"/>
                                    </div>
                                    <div className="kiri">
                                        <label htmlFor="name">Berat Total(dalam gram) :</label>
                                    </div>
                                    <div className="kanan">
                                        <input required autoComplete="off" type="text" name="weight" value={inputWeight} onChange={handleChange2} placeholder="masukan katakata"/>
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
export default CRUDFruits;