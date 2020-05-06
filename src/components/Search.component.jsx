import React from 'react'

const Search = ({ handleSubmit }) => {
    return (
        <div className="container mt-5 mb-5">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <input type="text" className="form-control" name="city" autoComplete="off" />
                    </div>
                    <div className="col-md-4 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search
