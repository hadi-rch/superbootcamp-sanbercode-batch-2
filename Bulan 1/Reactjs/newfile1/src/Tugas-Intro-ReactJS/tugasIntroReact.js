import logo from '../logo.png';
 
    let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]

    function Todo({props}) {
        return(
            <>
            {props.map(todo=>{
                    return <div key={todo}><input type="checkbox"/>{todo}<hr/></div>
                })
            }
            </>
        )
    }
    
    function tugasIntroReact(){  
        return(
        <div className="body">
            <div className="form">
                <div className="logo">
                    <img src={logo}  alt="logo" />
                </div>
                <h2 className="h2">THINGS TO DO</h2>
                <p>During bootcamp in sanbercode<hr /></p>
                <div className="mkl">
                    <Todo props={thingsToDo}/>
                </div>
                <input type="submit" value="SEND" className="button" /> 
            </div>
         </div>
        );
    }

    export default tugasIntroReact