import './header.css'

function Header(props) {
    return (
        <h1 className='titulo-pagina' >{props.texto_titulo}</h1>
    );
}

export default Header;