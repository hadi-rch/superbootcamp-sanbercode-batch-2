import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory, useParams } from "react-router-dom"

const ContestantsForm = () => {
    let {id} = useParams()
    let history = useHistory()
    const [inputName, setInputName] =  useState("")
    const [inputCourse, setInputCourse] =  useState("")
    const [inputScore, setInputScore] =  useState("")
    const [currentId, setCurrentId] =  useState(null)

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get(`http://localhost:8080/api/mahasiswa/${id}`)
            let data = res.data
            setCurrentId(id)
            setInputName(data.nama)
            setInputCourse(data.mataKuliah)
            setInputScore(data.nilai)
            
        }
        if (id){
            fetchData()
        }
        
        
    },[id])


    const handleChange = (event) =>{
        let inputValue = event.target.value
        setInputName(inputValue)
      }
      const handleChange1 = (event) =>{
        let inputValue = event.target.value
        setInputCourse(inputValue)
      }
      const handleChange2 = (event) =>{
        let inputValue = event.target.value
        setInputScore(inputValue)
      }

        

      const handleSubmit = (event) =>{
        event.preventDefault()
    
        if (currentId === null){
          // untuk create data baru
          axios.post(`http://localhost:8080/api/mahasiswa`, {nama: inputName,mataKuliah:inputCourse, nilai:inputScore})
          .then(res => {
            history.push("/contestants")
              })
        }else{
          axios.put(`http://localhost:8080/api/mahasiswa/${currentId}`, {nama: inputName,mataKuliah:inputCourse, nilai:inputScore})
          .then(() => {
            history.push("/contestants")
          })      
        }
        setInputName("")
        setInputCourse("")
        setInputScore("")
        setCurrentId(null)
      }




    return (
        <>  
                <h1>Form Students </h1>
                <form className="custom-form" onSubmit={handleSubmit}>
            
                    <div className="custom-input">
                        <div className="kiri">
                          <label htmlFor="name">Nama</label>
                        </div>
                        <div className="kanan">
                          <input required autoComplete="off" type="text" name="nama" value={inputName} onChange={handleChange} placeholder="Masukan Nama Siswa"/>
                        </div>
                    </div>
                    <div className="custom-input">
                        <div className="kiri">
                        <label htmlFor="name">Mata Kuliah</label>
                        </div>
                        <div className="kanan">
                        <input required autoComplete="off" type="text" name="mataKuliah" value={inputCourse} onChange={handleChange1} placeholder="Masukan Mata Kuliah"/>
                    </div>
                    </div>
                    <div className="custom-input">
                        <div className="kiri">
                        <label htmlFor="name">Nilai</label>
                        </div>
                        <div className="kanan">
                        <input required autoComplete="off" type="number" min={0} max={100} name="nilai" value={inputScore} onChange={handleChange2} placeholder="Masukan Nilai"/>
                        </div>    
                    </div>
                    <br/>
                    <div className="custom-input">    
                        <button className="btn">submit</button>
                    </div>
                </form>

                  </>

    )
}
export default ContestantsForm