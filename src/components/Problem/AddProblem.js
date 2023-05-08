import React from 'react'

export default function AddProblem() {
  return (
    <section className="container">
        <div className="row">
            <div className="col-md-12">
                <form class="my-4">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label for="title" className="form-label">Problem Title</label>
                            <input type="text" className="form-control" id="title" name="title"/>
                        </div>

                        <div className="col-md-4">
                            <label for="inputState" className="form-label">Service</label>
                            <select id="inputState" className="form-select" name='service'>
                                <option selected>Choose Service...</option>
                                <option >Service One</option>
                                <option >Service Two</option>
                                <option >Service Three</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label for="price" className="form-label">Price</label>
                            <input type="number" className="form-control" id="price" name="price"/>
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
                            <button type="submit" className="btn btn-success ">Create Problems</button>
                            <button type="reset" className="btn btn-danger mx-3">Reset Problems</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}
