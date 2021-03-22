import { useState } from 'react';
import ReactModal from 'react-modal';

import robot from '../source/robot.png';

export function Main() {
    const [open, setOpen] = useState(true);
    function close() {
        setOpen(false);
    }
    return (
        <section>
            <h1>Poa Lab</h1>

            <ReactModal 
            isOpen={open}  
            shouldCloseOnEsc={true} 
            shouldCloseOnOverlayClick={true}
            onRequestClose={close}
            style={
            {   overlay: {
                    display: 'grid',
                    placeItems: 'center',
                    height: '100vh',
                    padding: '0 5%' 
                },
                content: {
                    borderRadius:  '15px',
                    position: 'static',
                    background: 'var(--blue) none repeat scroll 0% 0%',
                    color:'white',
                }
            }
            }>
            <div className="modal">
                <div class="modalContainer">
                    <img src={robot} alt="robot" width='120px'></img>
                    <h2>Estamos de mudança! </h2>
                    <p>Continuaremos no campus Porto Alegre do IFRS e voltaremos em breve</p>
                </div>
                <div class="buttonContainer">
                    <span class="button" onClick={close}>OK</span>
                </div>
                </div>
            </ReactModal>

            <h3>O que é o Poa Lab? 🤔</h3>
            <p>
            O POA LAB é um laboratório de fabricação digital
            e está conectado à rede mundial de fab labs.
		    Opera como um programa de extensão do IFRS campus Porto Alegre.
            </p>
            <p>
		    Temos como missão popularizar o acesso
		    e letramento na fabricação digital,funcionando 
            como uma plataforma de criatividade,
		    aprendizagem e invenção.
            </p>

            <p>
            Ser um Fab Lab significa estar conectado
            a uma
            comunidade mundial de alunos, educadores,
            técnicos
            , pesquisadores e inovadores e desenvolver
            atividades dentro da filosofia do conhecimento aberto.
            </p>
            <p>Conheça a <a href="http://www.fabfoundation.org/index.php/the-fab-charter/i
            ndex.html" target="_blank">FAB CHARTER</a></p>
            <p>A Carta de Intenções que regra os Fab Labs</p>
            
        </section>
    )
}