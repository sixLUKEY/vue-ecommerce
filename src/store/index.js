import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    brands: null,
    brand: null
  },
  mutations: {
    setProducts: ( state, products ) => {
      state.products = products
    },
    setProduct: ( state, product ) => {
      state.product = product
    },
    setBrands: ( state, brands ) => {
      state.brands = brands
    },
    setBrand: ( state, brand ) => {
      state.brand = brand
    }
  },
  actions: {
    getProducts: async ( context ) => {
      fetch( "https://sixlukey.github.io/products.json" )
      .then(( res ) => res.json())
      .then(( products ) => context.commit( "setProducts", products )) 
    },
    getProduct: async ( context, id ) => {
      fetch( "https://sixlukey.github.io/products.json/" + id )
      .then(( res ) => res.json())
      .then(( product ) => context.commit( "setProduct", product ))
    },
    getBrands: async ( context ) => {
      fetch( "https://sixlukey.github.io/brands.json" )
      .then(( res ) => res.json())
      .then(( brands ) => context.commit( "setBrands", brands ))
    },
    getBrand: async ( context, id ) => {
      fetch( "https://sixlukey.github.io/brands.json/" + id )
      .then(( res ) => res.json())
      .then(( brand ) => context.commit( "setBrand", brand ))
    }
  },
})
