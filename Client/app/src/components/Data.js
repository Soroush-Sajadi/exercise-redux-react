import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux'

const Data = ({ userData, fetchData }) => {
    useEffect(() => {
        fetchData()
    },[]);
    console.log(userData.user.Search ? 'asasd' : null)
    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                userData.user.Search ? 
                <div>
                     <p>{userData.user.Search[0].Title}</p>
                </div>
                :
                null
            
        
    )

}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchData: () => dispatch(fetchData())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Data);