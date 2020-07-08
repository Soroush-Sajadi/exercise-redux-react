import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../redux'

const Data = ({ userData, fetchData }) => {
    useEffect(() => {
        fetchData()
    },[]);
    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.err ? (
        <h2>{userData.err}</h2>
    ) : (
        <div>
            {userData.user.map( item => item.coord )}
        </div>
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