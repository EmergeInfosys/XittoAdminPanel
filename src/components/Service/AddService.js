import React from 'react'
import { Link } from 'react-router-dom'

export default function AddService() {
  return (
    <section className="container">
        <div className="row justify-content-end my-4">
            <div className="col-md-4">
                <Link className="login-btn" to="/view-service">Go Back</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <form class="my-4">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label for="title" className="form-label">Service Title</label>
                            <input type="text" className="form-control" id="title" name="title"/>
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Brand</label>
                            <select id="inputState" className="form-select" name='brand'>
                                <option selected>Choose Brand...</option>
                                <option >Brand One</option>
                                <option >Brand Two</option>
                                <option >Brand Three</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="order" className="form-label">Position</label>
                            <input type="number" className="form-control" id="order" name="order"/>
                        </div>
                        <div className="col-md-12">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="col-6">
                            <label for="image" className="form-label">Image</label>
                            <input type="file" className="form-control" id="image" name="image" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>    
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success ">Create Service</button>
                            <button type="reset" className="btn btn-danger mx-3">Reset Service</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
