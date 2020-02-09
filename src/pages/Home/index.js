import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

import './styles.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='content-pgt'>
                <div className='btns'>
                    <button className='btn1 btnn'>SÉRIES</button>
                    <button className='btn2 btnn'>FILMES</button>
                </div>
                <Link to='/genres'><h5>GÊNEROS</h5></Link>
            </div>
        </div>

    )
}

export default Home