import React, { useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux'
import './style.css'


function Movie ({ userData, fetchData }) {
    const [input, setInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
        movie: '',
        }
      );

    const handleChange = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setInput({[name]: newValue});
    }

    const search = async () => {
        await fetchData(`http://localhost:3000/api/${input.movie}`)
        console.log(userData)
    }
    return  (
        <div className="wrap">
            <input className="input" type="text" name="movie" value={input.movie} placeholder="Username" onChange={ handleChange } />
            <input className="button" type="submit" vlaue="Search" onClick={search}/>
            {userData.user.Search ?
                <div className="Serie-info">
                    {userData.loading ? <h2>loading</h2>
                    :
                    <>
                        {userData.error ? <h2>{userData.error}</h2>
                        :
                        (<div className="Serie-info">
                        {userData.user.Search.map((item, index) => 
                        <div key={index} className="episodes"> <img className="img" src={item.Poster}/> <div className="text">
                            <p className="title">{item.Title}</p>  <p className="p">Released: {item.Year}</p> 
                            <p className="p">Type: {item.Type}</p></div> 
                        </div>)}
                        </div>  )
                        }  
                    </>
                    }
                </div>
            :
              null
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        fetchData: (url) => dispatch(fetchData(url))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Movie);



