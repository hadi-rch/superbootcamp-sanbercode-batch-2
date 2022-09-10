import { useState } from "react"

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
 



    const handleSubmit = (event) => {
        event.preventDefault()
        setDaftarBuah([...daftarBuah,inputName])
        setDaftarBuah([...daftarBuah,inputPrice])
        setDaftarBuah([...daftarBuah,inputWeight])
        setInputName("")
        setInputPrice("")
        setInputWeight("")
    };
    


    const handleChange = (event) => {
        let value = event.target.value.nama
        setInputName(value)
        let value1 = event.target.value.hargaTotal
        setInputPrice(value1)
        let value2 = event.target.value.beratTotal
        setInputWeight(value2)

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
                                    <button className="button-edit1" value={index}>Edit</button>
                                    <button className="button-edit2" value={index}>Delete</button>
                                </td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
            <h1>Form Daftar Harga Buah</h1>
            <div className="custom-form">
                    <form onSubmit={handleSubmit}>
                        <div classname="custom-input">
                            <label for="fname">Nama :</label>
                            <input required autoComplete="off" type="text" name= "name" value={inputName} onChange={handleChange} placeholder="masukan katakata"/>
                        </div>
                        <div className="custom-input2">
                            <label for="fname">Harga Total :</label>
                            <input required autoComplete="off" type="text" name="price" value={inputPrice} onChange={handleChange} placeholder="masukan katakata"/>
                        </div>
                        <div className="custom-input3">
                            <label for="fname">Berat Total(dalam gram) :</label>
                            <input required autoComplete="off" type="text" name="weight" value={inputWeight} onChange={handleChange} placeholder="masukan katakata"/>
                        </div>
                        <div class="row">
                                <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </>
    )
  }
export default CRUDFruits;