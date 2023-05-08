import React, { useState } from 'react'

export default function Login() {

    const [data, setData]= useState({
        phone:'',
        password:'',
    });
    
   
    const inputForm = (event) => {
        console.log('clicked')
        // console.log(event.target.value);
        // console.log(event.target.name);
        // const name = event.target.name;
        // const value = event.target.value;
        // setData((preValue)=>{
        //     console.log(preValue);
        // });
        // const [name,value] = event.target;
        // setData((preValue) =>{
        //     console.log(preValue);
        //     return {
        //         ...preValue,
        //         [name]: 'value',

        //     }
        // })
    }

    const formSubmit = (event) =>{
        event.preventDefault();
        alert('Your Form Is Submitted Successfully!!!')
    }
   



  return (
    <section className="container-fluid bg">
    <div className="row d-flex justify-content-center">
        <div className="col-md-4">
        <div className="login">
            <h2>Login {data.phone} {data.password}</h2>
            <form onSubmit={formSubmit}>
                <div className="inputBox">
                    <input type="number" className="form-control" placeholder="Phone Number" onChange={inputForm} />
                </div>
                <div className="inputBox">
                    <input type="password" className="form-control"  placeholder="Enter Your Password" onChange={inputForm}/>
                </div>
                <div className="inputBox">
                    <input type="submit" value="Submit" className="submit-btn" />
                </div>
            </form>
        </div>

        </div>
    </div>

    </section>
    
    // <section  style={sectionStyle}>
    //     <div className="container ">
    //         <div className="row login">
    //             <div className="col-md-6">
    //                 <div class="card loginCard">
    //                     <h5 class="loginHeading">Login</h5>
    //                     <div class="card-body">
    //                         <div className="row">
    //                             <div className="col-md-6">
    //                                 <img src="/login.jpg" alt="" className="loginImg" />
    //                             </div>

    //                             <div className="col-md-6">
    //                                 <form>
    //                                     <div class="input-group mb-4">
    //                                         <span class="input-group-text" id="inputGroup-sizing-sm">
    //                                             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
    //                                                 <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
    //                                                 <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    //                                             </svg>
    //                                         </span>
    //                                         <input type="number" class="form-control" id="email" name="email" />
    //                                     </div>

    //                                     <div class="input-group mb-4">
    //                                         <span class="input-group-text" id="inputGroup-sizing-sm">
    //                                             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
    //                                                 <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
    //                                                 <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    //                                             </svg>
    //                                         </span>
    //                                         <input type="password" class="form-control" id="password" name="password"/>
    //                                     </div>
                                       
    //                                     <button type="submit" class="login-btn">Submit</button>
    //                                 </form>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>      
    //     </div>
    // </section>
  )
}
