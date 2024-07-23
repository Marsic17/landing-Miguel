const products = [
    {
        id: '1',
        name: 'b450 pro max',
        price: 60,
        category: 'motherboard',
        img: 'https://m.media-amazon.com/images/I/81cgZOTcrPL._AC_SX466_.jpg',
        stock: 30,
        description: 'motherboard b450 pro msi'
    },
    {id: '2', name: 'radeon rx6600', price: 200, category: 'video card', img: 'https://m.media-amazon.com/images/I/81Vtsr0wIVL.__AC_SY300_SX300_QL70_FMwebp_.jpg', stock: 18, description: 'radeon graphics card'},
    {id: '3', name: 'amd ryzen 7 5700g', price: 180, category: 'processor', img: 'https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_FMwebp_.jpg', stock: 22, description: 'processor amd'}
]

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}