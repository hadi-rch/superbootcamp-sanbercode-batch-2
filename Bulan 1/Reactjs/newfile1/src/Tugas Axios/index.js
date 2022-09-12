import React, {useState, useEffect} from "react"
import axios from "axios"

const Student= () =>{
    const [namaStudent, setNamaStudent] =  useState([])
    const [inputName, setInputName] =  useState("")
    const [inputCourse, setInputCourse] =  useState("")
    const [inputScore, setInputScore] =  useState("")
    const [currentId, setCurrentId] =  useState(null)

    useEffect( () => {
        const fetchData = async () => {
          const result = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`)
    
          setNamaStudent(result.data.map(x=>{ return {id: x.id, name: x.name,course: x.course, score: x.score} }) )
        }
          
        fetchData()
      }, [])

      const handleEdit = (event) =>{
        let idStudent = event.target.value
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idStudent}`)
        .then(res => {
          let data = res.data
          setInputName(data.name)
          setInputCourse(data.course)
          setInputScore(data.score)
          setCurrentId(data.id)
        })
      }
    
      const handleDelete = (event) =>{
        let idStudent = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idStudent}`)
        .then(() => {
          let newNamaStudent = namaStudent.filter(el=> {return el.id !== idStudent})
          setNamaStudent(newNamaStudent)
        })
      }

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
          axios.post(`https://backendexample.sanbercloud.com/api/student-scores`, {name: inputName,course:inputCourse, score:inputScore})
          .then(res => {
              let data = res.data
              setNamaStudent([...namaStudent, {id: data.id, name: data.name, course: data.course, score: data.score}])
          })
        }else{
          axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: inputName,course:inputCourse, score:inputScore})
          .then(() => {
              let singlePeserta = namaStudent.find(el=> el.id === currentId)
              singlePeserta.name= inputName
              let singleCourse = namaStudent.find(el=> el.id === currentId)
              singleCourse.name= inputCourse
              let singleScore = namaStudent.find(el=> el.id === currentId)
              singleScore.name= inputScore
              setNamaStudent([...namaStudent])
          })      
        }
        setInputName("")
        setInputCourse("")
        setInputScore("")
        setCurrentId(null)
      }


      return(
        <>
          { namaStudent !== null &&
            (<div style={{width: "70%", margin: "0 auto", textAlign: "center"}}>
              <h1>Daftar Student</h1>
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
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                </tbody>
              </table>

                {/* Form */}
                <h1>Form Student</h1>
                <form className="custom-form" onSubmit={handleSubmit}>
            
                    <div className="custom-input">
                        <label htmlFor="name">Nama</label>
                        <input required autoComplete="off" type="text" name="name" value={inputName} onChange={handleChange} placeholder="Masukan Nama Siswa"/>
                    </div>
                    <div className="custom-input">
                        <label htmlFor="name">Mata Kuliah</label>
                        <input required autoComplete="off" type="text" name="course" value={inputCourse} onChange={handleChange1} placeholder="Masukan Mata Kuliah"/>
                    </div>
                    <div className="custom-input">
                        <label htmlFor="name">Nilai</label>
                        <input required autoComplete="off" type="number" name="score" value={inputScore} onChange={handleChange2} placeholder="Masukan Nilai"/>
                    </div>    
                <button>submit</button>
                </form>



            </div>)
          }
    
        </>
      )
    }
    
    export default Student


