const products = [
    {
        id: '1',
        name: "Alfajor de Maicena",
        price: 950,
        category: "alfajores",
        img: 'https://drive.google.com/file/d/1Zxt9h19L_OyGpHGlYHV0ubhxbDSzdD2N/view?usp=share_link',
        stock: 60,
        description: 'Descripcion de Alfajor de Maicena'
    },
    {
        id: '2',
        name: "Box dia del Niño",
        price: 4400,
        category: "boxes",
        img: 'https://drive.google.com/file/d/1RE7uqDnVsnW3XU0ycGu6OaTM1cag4OAI/view?usp=share_link',
        stock: 5,
        description: 'Descripcion Box dia del Niño'
    },
    {
        id: '3',
        name: "Cookies Halloween",
        price: 3500,
        category: "cookies",
        img: 'https://drive.google.com/file/d/140gG9z3nL6CbsAvbJcoSOIzd4yp94C3m/view?usp=share_link',
        stock: 120,
        description: 'Descripcion Cookies Halloween'
    },
    {
        id: '4',
        name: "Tarta de Frutilla",
        price: 2800,
        category: "tartas",
        img: 'https://drive.google.com/file/d/1_AvrWYIhsYl7b8X6Jnp23jGaABM62pUk/view?usp=share_link',
        stock: 8,
        description: 'Descripcion Tarta de Frutilla'
    },
    {
        id: '5',
        name: "Drip Cake",
        price: 9300,
        category: "tortas",
        img: 'https://drive.google.com/file/d/1AfR8-Klv0kMJwbqkD_uza2-Qz6ZK2Keo/view?usp=share_link',
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