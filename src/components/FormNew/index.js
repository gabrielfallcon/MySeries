import React, { useState } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import { Button } from 'reactstrap'
import '../styles.css'


const FormNew = ({ history }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const save = () => {
        axios.post('/api/genres', {
            name
        }).then(res => {
            setSuccess(true)
        })
        
        history.push('/genres')
    }

    return (
        <div>
            <Header />
            <div className='container col-md-6'>
                <h1>Novo Gênero</h1>

                <form onSubmit={save}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} className='form-control' id='name' placeholder='nome da serie' />
                    </div>
                    <Button type='submit'color='dark'>Salvar</Button>
                </form>
            </div>
        </div>
    )
}

export default FormNew