

const products = [
    { 
        id: 1, 
        name: 'Espatula Plastica Condor', 
        price: 290, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/30987/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 25, 
        description:'Espatula Plastica Condor Para Decoracion'
    },
    { 
        id: 2, 
        name: 'Block Brock Bauhaus Pastel Cosido Chico', 
        price: 250, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/19609/1.jpeg?width=300&mode=max&upscale=false&format=webp&quality=90', 
        stock: 25, 
        description:'Block Brock Bauhaus Pastel Cosido Chico'
    },
    { 
        id: 3, 
        name: 'Block Brock Bauhaus Pastel Oficio', 
        price: 1680, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/19609/1.jpeg?width=300&mode=max&upscale=false&format=webp&quality=90', 
        stock: 30, 
        description:'Block Brock Bauhaus Pastel Cosido Doble Oficio'
    },
    { 
        id: 4, 
        name: 'Block Brock Berlin/Chambril Tinta Cosido Chico', 
        price: 189, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/14042/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Block Brock Berlin/Chambril Tinta Cosido Chico'
    },
    { 
        id: 5, 
        name: 'Block Canson Black A3 240 Grs 20 Hs*', 
        price: 2530, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/29336/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Block Canson Black A3 240 Grs 20 Hs*'
    },
    { 
        id: 6, 
        name: 'Cuaderno Canson A6 X 50 Hs Liso Espiral', 
        price: 1650, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/36231/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Cuaderno Canson A6 X 50 Hs Liso Espiral'
    },
    { 
        id: 7, 
        name: 'Espatula Artmate N 12', 
        price: 650, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/23333/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Espatula Artmate N 12'
    },
    { 
        id: 8, 
        name: 'Espatula Stassen S 590 N 15', 
        price: 1190, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/28198/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Espatula Stassen S 590 N 15l'
    },
    { 
        id: 9, 
        name: 'Espatula Artmate N 1', 
        price: 450, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/37471/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Espatula Artmate N 1'
    },
    { id: 10, 
        name: 'Carpeta Carton A4', 
        price: 565, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/30436/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Carpeta Carton A4 2 Aro 20mm Rab Azul'
    },
    { id: 11, 
        name: 'Carpeta Carton Oficio 2 Rab Negro', 
        price: 565, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/30433/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Carpeta Carton Oficio 2 Aro 40mm Rab Negro'
    },
    
    { id: 12, 
        name: 'Carpeta Cartulina 3 Solapas Rosa', 
        price: 95, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/27409/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Carpeta Cartulina 3 Solapas Rosa 240grs'
    },
    { id: 13, 
        name: 'Clasificador Pastel Amarill of 12 Divisiones', 
        price: 847, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/39239/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Clasificador Pastel Amarill of 12 Divisiones'
    },
    { id: 14, 
        name: 'Clasificador Lama A4 31 Divisiones', 
        price: 1963, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/19096/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Clasificador Lama A4 31 Divisiones'
    },
    { id: 15, 
        name: 'Clasificador Rideo Esquela A5', 
        price: 590, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/34074/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Clasificador Rideo Esquela A5'
    },
    
    { id: 13, 
        name: 'Tyrannosaurus Rex Dna', 
        price: 6860, 
        category: 'REGALERIA', 
        img:'https://www.ramospapeleria.com.ar/img/p/33720/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'4m-Fm002 Tyrannosaurus Rex Dna'
    },

    { id: 14, 
        name: 'Pad Gamer ', 
        price: 450, 
        category: 'TECNOLOGIA', 
        img:'https://www.ramospapeleria.com.ar/img/p/40864/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Pad Gamer Hvmp837 Acolchonado Gamenote'
    }
]

const categories = [
    {id: 'artistica', description: 'ARTISTICA'},
    {id: 'comercial', description: 'COMERCIAL'},
    {id: 'regaleria', description: 'REGALERIA'},
    {id: 'tecnologia', description: 'TECNOLGIA'}
]
export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 2000)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 3000)
    })
}