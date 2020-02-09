import React from 'react'
import Header from '../../components/Header'

import './styles.css'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='content-pgt'>
                <h2>PELO QUE VOÊCE PROCURA?</h2>
                <div className='btns'>
                    <button className='btn1 btnn'>SÉRIES</button>
                    <button className='btn2 btnn'>FILMES</button>
                </div>
            </div>
        </div>

    )
}

export default Home