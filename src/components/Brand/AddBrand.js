import React from 'react'
import { Link } from 'react-router-dom'

export default function AddBrand() {
  return (
    <section className="container">
    <div className="row justify-content-end my-4">
            
            <div className="col-md-4">
                <Link className="login-btn" to="/view-brand">Go Back</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <form className="my-4">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label for="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" name="title"/>
                        </div>
                        <div className="col-6">
                            <label for="image" className="form-label">Image</label>
                            <input type="file" className="form-control" id="image" name="image" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>    
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-success ">Add Brand</button>
                            <button type="reset" className="btn btn-danger mx-3">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
