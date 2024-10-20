import {ReactComponent as More} from '../img/arrow_right_alt_24dp_FF750C_FILL0_wght400_GRAD0_opsz24.svg'
import {ReactComponent as MyLogo} from '../img/mic.svg'
import '../estilo/Servicos_Adm.css'

const MyComponent = () => {
 

    return (
        <>
        <div className="Chat">
           
            <MyLogo/>
            <button className='borda'>Olá, em que posso ajudar? </button></div>
            <h1>Serviços</h1> 
             <section id='align'>
                
                <div className='servicoscard'></div>
                <div className='servicoscard'></div>
                <div className='servicoscard'></div>
                <div className='servicoscard'></div>
                <div className='servicoscard'></div>
                <div className='servicoscard'></div> 
               <div className='align2'>
                <h2>Mais serviços</h2>
                </div>
                </section>

            
        </>  
    )
} ;
export default MyComponent

