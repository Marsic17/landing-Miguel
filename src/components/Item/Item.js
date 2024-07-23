import './Item.css'

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    precio: ${price}
                </p>
                <p className='Info'>
                    stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <link to={`/Item/${id}`} className='Option'>Ver detalles </link>
            </footer>
        </article>
    )
}

export default Item