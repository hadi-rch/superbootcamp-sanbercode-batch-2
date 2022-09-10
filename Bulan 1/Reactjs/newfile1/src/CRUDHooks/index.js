import { useState } from "react"

const CRUDHooks = ()=>{
    const [footballers, setFootballers] = useState(["Ronaldo", "Messi", "Lewandowski", "Benzema"])
    const [inputName, setInputName] = useState("") // state for inputName
    const [showForm, setShowForm] = useState(false) // state for show form edit or create
    const [statusForm, setStatusForm] = useState("create") // state for status form edit or create
    const [currentIndex, setCurrentIndex] = useState(-1) // state for currentIndex (for handleEdit function)

    // trigger for show create form
    const addNewFootballer = ()=>{
        setShowForm(true)
        setStatusForm("create")
    }

    const handleSubmit = (event)=>{
        event.preventDefault()

        if (currentIndex === -1){
            // create section
            setFootballers([...footballers, inputName])
        }else{
            // update section
            footballers[currentIndex] = inputName
            setFootballers(footballers)
        }

        // clear form
        setCurrentIndex(-1)
        setInputName("")
        setShowForm(false)
    }

    const handleChange = (event)=>{
        let value = event.target.value
        setInputName(value)
    }

    // trigger for show edit form
    const handleEdit = (event)=>{
        let index = Number(event.target.value)
        let currentFootballer = footballers[index]

        setStatusForm("edit")
        setCurrentIndex(index)
        setInputName(currentFootballer)
        setShowForm(true)

    }

    // trigger for delete data from array footballers
    const handleDelete = (event)=>{
        let index = Number(event.target.value)
        if (currentIndex !== -1){
            //clear form
            setCurrentIndex(-1)
            setInputName("")
            setShowForm(false)
        }

        // filter return data without equal value
        let newFootballers = footballers.filter((item)=>{
            return item !== footballers[index]
        })

        setFootballers(newFootballers)
    }
    return (
        <>
            <h1>Footballer List</h1>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {footballers.map((value, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{value}</td>
                                <td>
                                    <button className="button-edit mr-10" onClick={handleEdit} value={index}>Edit</button>
                                    <button className="button-delete" onClick={handleDelete} value={index}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {!showForm && <button className="button-add" onClick={addNewFootballer}> Add New Footballer</button>}
            {showForm && 
                (
                    <>
                        <h1>{statusForm === "create" ? "Add New Footballer" : `Edit Footballer Number ${currentIndex+1}`}</h1>
                        <div className="custom-form">
                            <form onSubmit={handleSubmit}>
                                <div className="custom-input">
                                    <label htmlFor="name">Name</label>
                                    <input required autoComplete="off" type="text" name="name" value={inputName} onChange={handleChange} placeholder="Insert Footballer name.."/>
                                </div>
                                <input type="submit" value="Submit"/>
                            </form>
                        </div>
                    </>

                )
            }
 

        </>
    )
}

export default CRUDHooks
