<template>
  <li class="node-tree">
    <b-btn v-b-toggle.collapse1 style='margin-bottom: 10px' variant="primary">{{node.name}}</b-btn>

    <!-- To collapse -->
    <b-collapse id="collapse1" class="mt-2">
      <ul v-if="node.sublevels && node.sublevels.length">
        <node v-for="level in node.sublevels" :node="level" :key='level'></node>
      </ul>
      <!-- Products go here -->
      <!-- <input v-model='availability'></input> -->
        <!-- <div>
          <button v-on:click='orderByStock()'>order stock</button>
        </div> -->
        <div>
          <label>Filtrar por disponibilidad: </label>
          <select v-model='availability'>
            <option value="2">Todos los productos</option>
            <option value="1">Disponible</option>
            <option value="0">No Disponible</option>
          </select>

          <label>Filtrar por cantidad: </label>
          <input v-model='stock'></input>

          <br/>

          <label>Filtrar por rango de precios (desde): </label>
          <input v-model='lowerPrice'></input>

          <label>Filtrar por rango de precios (hasta): </label>
          <input v-model='upperPrice'></input>
        </div>
        <b-input-group size="lg">
          <b-form-input v-model='searchedProduct'></b-form-input>
        </b-input-group>
        <div>
          <b-button variant="secondary" size='sm' v-on:click='orderByStock()'>Ordenar por cantidad</b-button>
          <b-button variant="secondary" size='sm' v-on:click='orderByAvailability()'>Ordenar por disponibilidad</b-button>
          <b-button variant="secondary" size='sm' v-on:click='orderByPrice()'>Ordenar por precio</b-button>
        </div>
        <li v-for="prod in products.products" :key='prod' v-if='(prod.sublevel_id == node.id)'>
          <b-card v-if='( ((!searchedProduct) || (prod.name.includes(searchedProduct) || (prod.name == searchedProduct))) && ((prod.available == availability) || ("2" == availability) ) && ((prod.quantity == stock) || (!stock)) && ((convertPrice(prod.price) >= lowerPrice) && (convertPrice(prod.price) <= upperPrice)) || (!upperPrice && !lowerPrice) )'>
            {{prod.name}}
            {{prod.price}}
            {{prod.available}}
            {{prod.quantity}}
            <br/>
            <b-button variant="success">Añadir al carrito de compras</b-button>
          </b-card>
        </li>
    </b-collapse>
  </li>
</template>

<script>
import productsJson from '../json-data/products.json'
var numeral = require('numeral');
var _ = require('lodash');
export default {
  name: "node",
  props: {
    node: Object
  },
  data () {
    return {
      products: [{}],
      searchedProduct: '',
      availability: '2',
      lowerPrice: 0,
      upperPrice: 20000,
      stock: '',
    }
  },
  created () {
    let vc = this
    vc.products = productsJson
  },
  methods: {
    convertPrice (price) {
      let myNum = numeral(price)
      return myNum._value
    },
    orderByStock () {
      let vc = this

      vc.products.products =  _.orderBy(vc.products.products, 'quantity');
    },   
    orderByAvailability () {
      let vc = this

      vc.products.products =  _.orderBy(vc.products.products, 'available');
    },    
    orderByPrice () {
      let vc = this
      console.log('order price')
      console.log(numeral(vc.products.products[0].price)._value)

      for (let i=0; i<vc.products.products.length; i++) {
        vc.products.products[i].price = (numeral(vc.products.products[i].price)._value)
        console.log(vc.products.products[i].price)
      }

      vc.products.products =  _.orderBy(vc.products.products, 'price');
    },             
  }
};
</script>