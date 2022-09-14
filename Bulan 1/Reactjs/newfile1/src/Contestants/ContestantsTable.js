import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import '../Tugas Axios/index.css'

const ContestantsTable= () =>{
    let history = useHistory()
    const [namaStudent, setNamaStudent] =  useState([])
    const [fetchTrigger, setFetchTrigger] = useState(true)

    const addNewStudents = ()=>{
      history.push("/contestants/create")
  }
    useEffect(()=>{
    const fetchData = async()=>{
        let result = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
        setNamaStudent(result.data.map(x=>{ return {id: x.id, name: x.name,course: x.course, score: x.score} }) )
        setFetchTrigger(false)
    }
    if (fetchTrigger){
        fetchData()
    }


    
    }, [fetchTrigger])

      const handleEdit = (event) =>{
        let idStudent = event.target.value
        history.push(`/contestants/${idStudent}/edit`)
        
      }
    
      const handleDelete = (event) =>{
        let idStudent = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idStudent}`)
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
                            <td>{item.name}</td>
                            <td>{item.course}</td>
                            <td>{item.score}</td>
                            <td>{item.score <=100 && item.score >=80 ? 'A': item.score <= 80 && item.score >=70? 'B':
                            item.score <= 70 && item.score >=60 ? 'C': item.score <= 60 && item.score >=50? 'D':
                            item.score <= 50 && item.score >=0 ? 'E': 'Undifined'}</td>
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


