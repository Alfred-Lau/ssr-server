import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            welcome to home, {props.name}
            <button onClick={()=>{alert('click')}}>click</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name
    }
}
export default connect(mapStateToProps, null)(Home)