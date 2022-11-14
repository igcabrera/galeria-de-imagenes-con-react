import './card.css'

function Card(props) {
    return (
        <article className='imagen-galeria'>
            <section>
                <img alt={props.titulo_img} src={props.src_img} />
            </section>
            <section>
                <h3>{props.titulo_img}</h3>
            </section>
            <section>
                <p>{props.texto_img}</p>
            </section>
        </article>
    );
}

export default Card;