import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const ContestantsTable= () =>{
    let history = useHistory()
    const [namaStudent, setNamaStudent] =  useState([])
    const [fetchTrigger, setFetchTrigger] = useState(true)

    const addNewStudents = ()=>{
      history.push("/contestants/create")
  }
    useEffect(()=>{
    const fetchData = async()=>{
        let result = await axios.get(`http://localhost:8080/api/mahasiswa`)
        setNamaStudent(result.data.map(x=>{ return {id: x.id, nama: x.nama,mataKuliah: x.mataKuliah, nilai: x.nilai} }) )
        setFetchTrigger(false)
    }
    if (fetchTrigger){
        fetchData()
    }


    
    }, [fetchTrigger])

      const handleEdit = (event) =>{
        let idStudent = event.target.value
        history.push(`/contestants/${idStudent}/edit`)
        console.log(idStudent)
        
      }
    
      const handleDelete = (event) =>{
        let idStudent = parseInt(event.target.value)
        axios.delete(`http://localhost:8080/api/mahasiswa/${idStudent}`)
        .then(() => {
          setFetchTrigger(true)
        }).catch((err)=>{
            console.log(err)
        })
      }

      return(
        <>
          { namaStudent !== null &&
            ( <div className="App">
              <h1>Nilai Mahasiswa</h1>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>Indeks Nilai</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      namaStudent.map((item, index)=>{
                        
                 return(
                                                
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.nama}</td>
                            <td>{item.mataKuliah}</td>
                            <td>{item.nilai}</td>
                            <td>{item.nilai <=100 && item.nilai >=80 ? 'A': item.nilai <= 80 && item.nilai >=70? 'B':
                            item.nilai <= 70 && item.nilai >=60 ? 'C': item.nilai <= 60 && item.nilai >=50? 'D':
                            item.nilai <= 50 && item.nilai >=0 ? 'E': 'Undifined'}</td>
                            <td>
                            <button className="button-edit" onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button className="button-delete" onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                </tbody>
              </table>
              <button className="button-add" onClick={addNewStudents}> Tambah Data Siswa</button>
            

            </div>
            )
          }
    
        </>
      )
    }
    
    export default ContestantsTable


