import { useState } from 'react'
import { Button, Form, Row, Col, Alert} from 'react-bootstrap'
import useCategorias from '../hooks/useCategorias'
import useBebidas from '../hooks/useBebidas'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const [alerta, setAlerta] = useState('')
    const { categorias } = useCategorias()
    const { consultarBebidas } = useBebidas()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('') //para que se oculte el alerta si completo los campos
        consultarBebidas(busqueda)
    
    
    }


  return (
    <Form
        onSubmit={handleSubmit}>

            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
        <Row>
            <Col md={6}>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
                <Form.Control 
                    id='nombre'
                    type="text" 
                    placeholder="Ej: Tequila, Vodka,etc" 
                    name='nombre'
                    value={busqueda.nombre}
                    onChange={e => setBusqueda ({
                        ...busqueda,
                        [e.target.name]: e.target.value
                    })}/>
            </Form.Group>  
            </Col>
            <Col md={6}>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
                <Form.Select
                    id='categoria'
                    name='categoria'
                    value={busqueda.categoria}
                    onChange={e => setBusqueda ({
                        ...busqueda,
                        [e.target.name]: e.target.value
                    })}>
                <option>- Selecciona Categoría -</option>
                {categorias.map(categoria => (
                    <option
                    key={categoria.strCategory}
                    value={categoria.steCategory}>
                    {categoria.strCategory}
                    </option>
                ))}

                </Form.Select>
            </Form.Group>  
            
            </Col>
        </Row>
        <Row className='justify-content-end'>
            <Col md={3}>
            <style type="text/css">
                {`
                .btn-flat {
                    background-color: #f1a129;
                    color: white;
                }
                .btn-flat:hover {
                    background-color: #f9ad3c;
                    color: white;
                }
                `}
            </style>
                <Button
                    className='text-uppercase w-100'
                    type='submit'
                    variant='flat'
                >
                    Buscar
                </Button>
            </Col>
        </Row>
    </Form>
  )
}

export default Formulario

