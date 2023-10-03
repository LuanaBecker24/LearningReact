import './Formulario.css';
import CampoTexto from '../Banner/CampoTexto';

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os países que você gostaria de visitar: </h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome"/>
            </form>
        </section>
    );
};

export default Formulario;