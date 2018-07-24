<template>
  <ul class="node-tree">
    <b-btn v-b-toggle.collapse1 style='margin-bottom: 10px; background-color:#f33959; border-color:#f33959' variant="primary">{{node.name}}</b-btn>
    <!-- To collapse -->
    <b-collapse id="collapse1" class="mt-2">
      <ul v-if="node.sublevels && node.sublevels.length">
        <node v-for="(level, idx) in node.sublevels" :node="level" :key='idx'></node>
      </ul>
        <div>
          <div>
            <label>Filtrar por disponibilidad </label>
            <b-form-select v-model="availability" class="mb-3" size='sm'>
              <option value="2">Todos los productos</option>
              <option value="1">Disponible</option>
              <option value="0">No Disponible</option>
            </b-form-select>
          </div>

          <div>
            <b-form inline>
              <label>Filtrar por cantidad </label>
              <b-input v-model='stock' class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Escriba una cantidad" />
              
              <label>Filtrar por rango de precios desde </label>
              <b-input v-model='lowerPrice' class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Escriba un precio" />
              <label>Hasta</label>
              <b-input v-model='upperPrice' class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Escriba un precio" />
            </b-form>
          </div>
          <br/>
          <div>
            <b-form inline>
              <label>Filtrar por nombre del producto</label>
              <b-input v-model='searchedProduct' class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Escriba un nombre" />
            </b-form>
          </div>
          <br/>
        </div>
        <div>
          <b-button variant="secondary" size='sm' v-on:click='orderByStock()'>Ordenar por cantidad</b-button>
          <b-button variant="secondary" size='sm' v-on:click='orderByAvailability()'>Ordenar por disponibilidad</b-button>
          <b-button variant="secondary" size='sm' v-on:click='orderByPrice()'>Ordenar por precio</b-button>
        </div>
        <ul v-for="(prod, idx) in products.products" :key='idx' v-if='(prod.sublevel_id == node.id)'>
          <b-card v-if='( ((!searchedProduct) || (prod.name.includes(searchedProduct) || (prod.name == searchedProduct))) && ((prod.available == availability) || ("2" == availability) ) && ((prod.quantity == stock) || (!stock)) && ((convertPrice(prod.price) >= lowerPrice) && (convertPrice(prod.price) <= upperPrice)) || (!upperPrice && !lowerPrice) )'>
            <strong>{{prod.name}}</strong>
            {{prod.price}}
            <p>Stock: {{prod.quantity}}</p>
            <br/>
            <b-button variant="success" v-if='prod.available' @click='addToCart(prod)'>Añadir al carrito de compras</b-button>
            <b-button disabled variant="success" v-else>Producto no disponible</b-button>
          </b-card>
        </ul>
    </b-collapse>
  </ul>
</template>

<script>
import productsJson from '../json-data/products.json'
var numeral = require('numeral');
var _ = require('lodash');
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions([
      'addToCart',
    ]),    
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