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
        <div>
            <input className="login" type="text" name="movie" value={input.movie} placeholder="Username" onChange={ handleChange } />
            <input type="submit" vlaue="Search" onClick={search}/>
            {userData.user.Search ?
                <div>
                    {userData.loading ? <h2>loading</h2>
                    :
                    <>
                        {userData.error ? <h2>{userData.error}</h2>
                        :
                        <div>
                            {userData.user.Search.map(item => item.Title)}
                        </div>
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



