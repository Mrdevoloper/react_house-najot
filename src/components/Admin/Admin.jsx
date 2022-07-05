
import React, { useState } from "react"
import axios, { Axios } from "axios"
import './Admin.css'

function Admin(){
    const url = "https://najot-hause.herokuapp.com/company"
    const [data, setData] = useState({
         name: "",
         pic: ""
    })

    function submit (e) {
         e.preventDefault();
         axios.post(url, {
            name: data.name,
            pic: data.pic,
               
         })
         .then( res => {
            console.log(res.data);
         })
    }

    function handle (e){
              const newData = {... data}
              newData[e.target.id] = e.target.value
              setData(newData)
    }
    



    const url1 = "https://najot-hause.herokuapp.com/complex"
    const [complex, setcomplex] = useState({
        cmp_branch_name:"",
        company_id:""
    })


    function submit1 (e) {
        e.preventDefault();
        axios.post(url1, {
           cmp_branch_name: complex.cmp_branch_name,
           company_id: parseInt(complex.company_id),
              
        })
        .then( res => {
           console.log(res.complex);
        })
     
    }
    function handlee (e) {
        const newComplex = {... complex}
        newComplex[e.target.id] = e.target.value
        setcomplex(newComplex)
        console.log(newComplex);
}



// ROOOM///////////////////////////////////////////////////////////////////////////////////////////////

             
    const url2 = "https://najot-hause.herokuapp.com/rooms"
    const [rooms, setrooms] = useState({
        room_of_number:"",
        room_kv:"",
        room_per_price:"",
        cmp_branch_id:""
    })


    function submit2 (e) {
        e.preventDefault();
        axios.post(url2, {
           room_of_number:  parseInt(rooms.room_of_number),
           room_kv: parseInt(rooms.room_kv),
           room_per_price: parseInt(rooms.room_per_price),
           cmp_branch_id: parseInt(rooms.cmp_branch_id),

              
        })
        .then( res => {
           console.log(res.rooms);
        })
     
    }
    function handleee (e) {
        const newrooms = {... rooms}
        newrooms[e.target.id] = e.target.value
        setrooms(newrooms)
        console.log(newrooms);
}





// BANK///////////////////////////////////////////////////////////////////////////////////////////////////////////////






       
const url3 = "https://najot-hause.herokuapp.com/bank"
const [bank, setbank] = useState({
    bank_name:"", 
    bank_pic:"", 
    bank_limit_year:"", 
    bank_limit_price:"", 
    bank_limit_persent:""
})


function submit3 (e) {
    e.preventDefault();
    axios.post(url3, {
       bank_name:  bank.bank_name,
       bank_pic: bank.bank_pic,
       bank_limit_year: parseInt(bank.bank_limit_year),
       bank_limit_price: parseInt(bank.bank_limit_price),
       bank_limit_persent: parseInt(bank.bank_limit_persent),

          
    })
    .then( res => {
       console.log(res.bank);
    })
 
}
function handleeee (e) {
    const newbank = {... bank}
    newbank[e.target.id] = e.target.value
    setbank(newbank)
    console.log(newbank);
}







    return(
        <>
        
        <div>
        <h2 className="hed">ADD COMPANY</h2>
            <form onSubmit={(e) => submit(e)}>
                <input className="intut" onChange={ e => handle(e) } id="name" value={data.name} placeholder="CompanyName" type="text" />
                <input className="intut" onChange={ e => handle(e) } id="pic" value={data.pic} placeholder="CompanyPic" type="text" />
                <button className="btn1">submit</button>
            </form>
        </div>

        <div>
        <h2 className="hed">ADD COMPLEX</h2>

            <form onSubmit={(e) => submit1(e)}>
                <input className="intut" onChange={ e => handlee (e) } id="cmp_branch_name" value={complex.cmp_branch_name} placeholder="complex_name" type="text" />
                <input className="intut" onChange={ e => handlee (e) } id="company_id" value={complex.company_id} placeholder="company_id" type="text" />
                <button className="btn1">submit</button>
            </form>
        </div>

        <div>
        <h2 className="hed">ADD ROOM</h2>

            <form onSubmit={(e) => submit2(e)}>
                <input className="intut" onChange={ e => handleee (e) } id="room_of_number" value={rooms.room_of_number} placeholder="room_of_number" type="number" />
                <input className="intut" onChange={ e => handleee (e) } id="room_kv" value={rooms.room_kv} placeholder="room_kv" type="number" />
                <input className="intut" onChange={ e => handleee (e) } id="room_per_price" value={rooms.room_per_price} placeholder="room_per_price" type="number" />
                <input className="intut" onChange={ e => handleee (e) } id="cmp_branch_id" value={rooms.cmp_branch_id} placeholder="cmp_branch_id" type="number" />
                <button className="btn1">submit</button>
            </form>
        </div>
        <div>
        <h2 className="hed">ADD BANK</h2>

            <form onSubmit={(e) => submit3(e)}>
                <input className="intut" onChange={ e => handleeee (e) } id="bank_name" value={bank.bank_name} placeholder="bank_name" type="text" />
                <input className="intut" onChange={ e => handleeee (e) } id="bank_pic" value={bank.bank_pic} placeholder="bank_pic" type="text" />
                <input className="intut" onChange={ e => handleeee (e) } id="bank_limit_year" value={bank.bank_limit_year} placeholder="bank_limit_year" type="number" />
                <input className="intut" onChange={ e => handleeee (e) } id="bank_limit_price" value={bank.bank_limit_price} placeholder="bank_limit_price" type="number" />
                <input className="intut" onChange={ e => handleeee (e) } id="bank_limit_persent" value={bank.bank_limit_persent} placeholder="bank_limit_persent" type="number" />
                <button className="btn1">submit</button>
            </form>
        </div>
        </>
    )
}

export default Admin