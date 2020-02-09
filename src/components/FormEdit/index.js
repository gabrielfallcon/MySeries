import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import { Button } from 'reactstrap'
import '../styles.css'

const FormEdit = ({ history, match }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios.get('/api/genres/' + match.params.id).then(res => {
            setName(res.statusText)
            console.log(res)
        })
    }, [match.params.id])



    const save = () => {
        axios.put('/api/genres/' + match.params.id, {
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
                <h1>Editar Gênero</h1>

                <form onSubmit={save} >
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} className='form-control' id='name' />
                    </div>
                    <Button type='submit'color='dark'>Salvar</Button>
                </form>
            </div>
        </div>
    )
}

export default FormEdit