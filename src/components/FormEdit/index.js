import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import { Button } from 'reactstrap'

const FormEdit = ({ history }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios.get('api/genres/1').then(res => {
            setName(res.data.name)
        })
    }, [])

    // const save = () => {
    //     axios.post('/api/genres', {
    //         name
    //     }).then(res => {
    //         setSuccess(true)
    //     })
        
    //     history.push('/genres')
    // }

    return (
        <div>
            <Header />
            <div className='container col-md-6'>
                <h1>Editar Gênero</h1>

                <form >
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

export default FormEdit