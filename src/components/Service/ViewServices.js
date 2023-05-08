import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom';



export default function ViewServices() { 
     
  const serviceData = [
    {id: "1", title:"Service title one", brand:"Epson", description:"hello desc one here", order:"1",image:"https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"},
    {id: "2", title:"Service title two", brand:"Brother", description:"hello desc two here", order:"2",image:"https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"},
    {id: "3", title:"Service title three", brand:"Canone", description:"hello desc three here", order:"3",image:"https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
];
//  function service(val){
//     return (
//         <Data
//             id={val.id}
//             title={val.title}
//             brand={val.brand}
//             description={val.description}
//             order={val.order}


//         />
//     );
//  }
  return (
    <section className="container">
        <div className="row justify-content-center my-4">
            <div className="col-md-4">
                <h3 className="text-white">All Services</h3>
            </div>
            <div className="col-md-4">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search Services..." aria-label="Search"/>
                    <button className="login-btn" type="submit">Search</button>
                </form>
            </div>
            <div className="col-md-4">
                <Link className="login-btn" to="/add-service">Add Service</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark my-4">
                    <thead>
                        <tr>
                        <th scope="col">Sn</th>
                        <th scope="col">Title</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col">Order</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* {serviceData.map(service)} */}
                       
                        {serviceData.map((val) => {
                            return (
                                <Data
                                    key={val.id}
                                    sn={val.id}
                                    title={val.title}
                                    brand={val.brand}
                                    description={val.description}
                                    order={val.order}
                                    image={val.image}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}
