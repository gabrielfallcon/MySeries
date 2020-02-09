import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'
import img from '../../assets/loader.gif'

import Header from '../../components/Header'

const Geners = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/genres').then(res => {
      setData(res.data.data)
    })
  }, [])

  if (data.length === 0) {
    return (
      <div>
        <Header />
        <div className='container'>
          <div className='row my-5 col-md-12'>
            <h3 className='col-md-8'>Não existem gêneros no momento</h3>
            <Button className='col-md-2' tag={Link} color='dark' to='/genres/newGenres'>Novo</Button>
          </div>
          <img src={img} />
        </div>
      </div>
    )
  }

  const deleteGenres = id => {
    axios.delete('/api/genres/' + id).then(res => {
      const filtrado = data.filter(item => item.id !== id)
      setData(filtrado)
    })
  }


  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row my-5 col-md-6'>
              <h3 className='col-md-5'>Generos</h3>
              <Button className='col-md-2' tag={Link} color='dark' to='/genres/newGenres'>Novo</Button>
            </div>
            <table className='table  table-striped'>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>Nome</th>
                  <th scope='col'>Ações</th>
                </tr>
              </thead>
              <tbody>
                {data.map(series => {
                  return (
                    <tr key={series.id}>
                      <th>{series.id}</th>
                      <td>{series.name}</td>
                      <td>
                        <Link className='btn btn-warning' to={'genres/:' + series.id}>Editar</Link>
                        <Button className='ml-2' onClick={() => deleteGenres(series.id)} color='danger'>Excluir</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Geners