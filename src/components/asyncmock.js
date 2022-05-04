

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
        name: 'Block Brock Bauhaus Pastel', 
        price: 250, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/19609/1.jpeg?width=300&mode=max&upscale=false&format=webp&quality=90', 
        stock: 25, 
        description:'Block Brock Bauhaus Pastel Cosido Chico'
    },
    { 
        id: 3, 
        name: 'Block Brock Bauhaus', 
        price: 1680, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/19609/1.jpeg?width=300&mode=max&upscale=false&format=webp&quality=90', 
        stock: 30, 
        description:'Block Brock Bauhaus Pastel Cosido Doble Oficio'
    },
    { 
        id: 4, 
        name: 'Block Brock Berlin/Chambril', 
        price: 189, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/14042/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Block Brock Berlin/Chambril Tinta Cosido Chico'
    },
    { 
        id: 5, 
        name: 'Block Canson Black A3', 
        price: 2530, 
        category: 'artistica', 
        img:'https://www.ramospapeleria.com.ar/img/p/29336/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 30, 
        description:'Block Canson Black A3 240 Grs 20 Hs*'
    },
    { 
        id: 6, 
        name: 'Cuaderno Canson A6 X 50 Hs', 
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
        name: 'Carpeta Carton Oficio 2 Rab', 
        price: 565, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/30433/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 16, 
        description:'Carpeta Carton Oficio 2 Aro 40mm Rab Negro'
    },
    
    { id: 12, 
        name: 'Carpeta Cartulina 3 Solapas', 
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
        name: 'Clasificador Lama A4', 
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
    { id: 16, 
        name: 'Bandeja Metal Enrejada 2 Pisos', 
        price: 2947, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/40833/0f66d4b0df764b62a43e85229d27cdf0.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Bandeja Metal Enrejada 2 Pisos Verd Manzana Values'
    },
    { id: 17, 
        name: 'Portaclips Con Iman', 
        price: 435, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/25887/808f563656b44f71a20e81b31807bf81.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 5, 
        description:'Portaclips Con Iman Redondo Grande'
    },
    { id: 18, 
        name: 'Organizador Liggo O-life Cuadrado', 
        price: 1329, 
        category: 'comercial', 
        img:'https://www.ramospapeleria.com.ar/img/p/41634/ead8263cb4dc4d2eb3f1c0933e5a8a15.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 5, 
        description:'Organizador Liggo O-life Cuadrado Rojo S929'
    },
    { id: 19, 
        name: 'Tyrannosaurus Rex Dna', 
        price: 6860, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/33720/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'4m-Fm002 Tyrannosaurus Rex Dna'
    },
    { id: 20, 
        name: 'Ciencia-Accion Y Reaccion-Maquina Goldberg', 
        price: 3509, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/36531/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Ciencia-Accion Y Reaccion-Maquina Goldberg'
    },
    { id: 21, 
        name: 'Ciencia-Accion Y Reaccion-Maquina Goldberg', 
        price: 3509, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/36531/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Ciencia-Accion Y Reaccion-Maquina Goldberg'
    },
    { id: 22, 
        name: 'Ciencia-Destreza Mental', 
        price: 3509, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/41188/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Ciencia-Destreza Mental'
    },
    { id: 23, 
        name: 'Ciencia-Cubierxpertos', 
        price: 2096, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/35127/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Ciencia-Cubierxpertos'
    },
    { id: 24, 
        name: 'Arte Para Colorear Buhos', 
        price: 750, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/38548/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Arte Para Colorear Buhos Pinta Tus Propios Disenos'
    },
    { id: 25, 
        name: 'Snoopy- Los Verdaderos Amigos Son', 
        price: 517, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/38952/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Snoopy- Los Verdaderos Amigos Son'
    },
    { id: 26, 
        name: 'El Jardin Secreto Colorea', 
        price: 1266, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/38646/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'El Jardin Secreto Colorea Y Encuentra Los Tesoros Escondidos'
    },
    { id: 27, 
        name: 'Primeras Letras Plastigal 606', 
        price: 1390, 
        category: 'regaleria', 
        img:'https://www.ramospapeleria.com.ar/img/p/41362/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 10, 
        description:'Primeras Letras Plastigal 606'
    },

    { id: 28, 
        name: 'Pad Gamer ', 
        price: 450, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/40864/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Pad Gamer Hvmp837 Acolchonado Gamenote'
    },
    { id: 29, 
        name: 'Mouse HAVIT Gm203b Usb Retroiluminado 6 Botones ', 
        price: 1100, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/40878/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Mouse HAVIT Gm203b Usb Retroiluminado 6 Botones'
    },
    { id: 30, 
        name: 'Auricular Gamer Con Vincha Hlhvl-2031d ', 
        price: 2300, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/39548/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Auricular Gamer Con Vincha Hlhvl-2031d'
    },
    { id: 31, 
        name: 'Toner Gtc Ricoh 310 Alternativo', 
        price: 3740, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/38603/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Toner Gtc Ricoh 310 Alternativoe'
    },
    { id: 32, 
        name: 'Papel Arcolor Transfer P/Ropa Clara Ink/Laser', 
        price: 296, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/24974/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Papel Arcolor Transfer P/Ropa Clara Ink/Laser'
    },
    { id: 33, 
        name: 'Pen Drive Kingston Exodia Dtx 32gb Azul', 
        price: 890, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/30349/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Pen Drive Kingston Exodia Dtx 32gb Azul'
    },
    { id: 34, 
        name: 'Cinta Gtc Cifra Maquina Calcular', 
        price: 220, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/40864/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Cinta Gtc Cifra Maquina Calcular'
    },
    { id: 35, 
        name: 'Cinta Gtc Epson Erc 03', 
        price: 490, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/19153/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Cinta Gtc Epson Erc 03'
    },
    { id: 36, 
        name: 'Cable Usb/Micro 1mt HAVIT H6111 P/Android', 
        price: 410, 
        category: 'tecnologia', 
        img:'https://www.ramospapeleria.com.ar/img/p/40864/1.jpeg?quality=95&width=490&height=350&mode=max&upscale=false&format=webp', 
        stock: 8, 
        description:'Cable Usb/Micro 1mt HAVIT H6111 P/Android'
    }
]

const categories = [
    {id: 'artistica', description: 'Artistica'},
    {id: 'comercial', description: 'Comercial'},
    {id: 'regaleria', description: 'Regaleria'},
    {id: 'tecnologia', description: 'Tecnologia'}
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