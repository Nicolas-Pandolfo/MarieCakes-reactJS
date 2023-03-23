const products = [
    {
        id: '1',
        name: "Alfajor de Maicena",
        price: 950,
        category: "alfajores",
        img: 'https://www.ohmargott.com/content/uploads/2020/05/DSC00628-01-e1588557286234.jpeg',
        stock: 60,
        description: 'Descripcion de Alfajor de Maicena'
    },
    {
        id: '2',
        name: "Box dia del Niño",
        price: 4400,
        category: "boxes",
        img: 'https://pijamadaselmundodelupe.com/wp-content/uploads/2020/08/Box-Dulce-dia-del-ni%C3%B1o-2.jpg',
        stock: 5,
        description: 'Descripcion Box dia del Niño'
    },
    {
        id: '3',
        name: "Cookies Halloween",
        price: 3500,
        category: "cookies",
        img: 'https://sallysbakingaddiction.com/wp-content/uploads/2021/10/halloween-cookies-royal-icing.jpg',
        stock: 120,
        description: 'Descripcion Cookies Halloween'
    },
    {
        id: '4',
        name: "Tarta de Frutilla",
        price: 2800,
        category: "tartas",
        img: 'https://i.pinimg.com/736x/83/34/8f/83348f4ca9036addd8795da485806337.jpg',
        stock: 8,
        description: 'Descripcion Tarta de Frutilla'
    },
    {
        id: '5',
        name: "Drip Cake",
        price: 9300,
        category: "tortas",
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/297/942/products/drip111-df85f1df8ab9bd0ced15240777444660-1024-1024.jpg',
        stock: 3,
        description: 'Descripcion Drip Cake'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}