import React, { useState } from 'react'

const SearchBar = (props) => {

    const [name, setName] = useState("");

    const handleChange = (e) => {
      setName(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit(name);
    }
    
    
    return (
        <div className="container" style={{ marginTop: "4rem" }}>
            <div className="row">
                <div className="col-md-8 mx-auto">

                    <form className="d-flex input-set" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2" onChange={handleChange} value={name} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary px-5 fs-5" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
