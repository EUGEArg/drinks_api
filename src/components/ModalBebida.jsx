import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebidas()

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i=1; i < 16; i++) { //cantidad de ingredientes
            if(receta [`strIngredient${i}`]) {
                ingredientes.push( //agrega el ingrediente a la lista
                    <li key={i}>
                        {receta [`strIngredient${i}`]} {receta[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando ? 
            <Modal show={modal} onHide={handleModalClick}>         
                <Image 
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />    
                <Modal.Header>
                    <Modal.Title>{receta.srtDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones</h2>
                        {receta.strInstructions}
                        <h3>Ingredientes y Cantidad</h3>
                        {mostrarIngredientes()}                    
                    </div>
                </Modal.Body>
            </Modal>             
        : <Spinner />
    )
}

export default ModalBebida