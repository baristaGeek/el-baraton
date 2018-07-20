<template>
  <div id="app">
    <!-- <div class="banner">
      <h1>El Baratón</h1>
      <b-button variant="success">Ir al carrito de compras</b-button>
    </div> -->
    <div>
        <b-navbar toggleable type="light" variant="light">
            <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
            <b-navbar-brand>El Baratón</b-navbar-brand>
            <b-collapse is-nav id="nav_text_collapse">
                <b-navbar-nav>
                   <b-button variant="success" v-b-modal.shopping-cart>Ir al carrito de compras</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div class="bottom">
      <!-- Shopping cart -->
        <b-modal id="shopping-cart" title="Confirmación de orden">
          <p v-if='purchases.length == 0' class="my-4">¡Tu carrito está vacío!</p>
          <div v-if='purchases.length > 0'>{{purchases}}</div>

          <ul id="shopping-list">
            <li v-for="item in purchases" :key='item'>
              {{ item }}
              <!-- <button v-on:click='removeFromCart(products.products[9])'>Eliminar</button> -->
              <b-button variant="danger" v-on:click='removeFromCart(products.products[9])'>Eliminar</b-button>
            </li>
          </ul>

        </b-modal>
      </div>
      <!-- Categories go here -->
      <div>
        <b-btn v-b-toggle.collapse1 variant="primary">{{categories.categories[0].name}}</b-btn>
        <b-collapse id="collapse1" class="mt-2">
          <b-card>
            <p class="card-text">Collapse contents Here</p>
            <b-btn v-b-toggle.collapse1_inner size="sm">{{categories.categories[0].sublevels[0].name}}</b-btn>
            <b-collapse id=collapse1_inner class="mt-2">
              <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-btn v-b-toggle.collapse1_inner size="sm">{{categories.categories[0].sublevels[0].sublevels[0].name}}</b-btn>
                <b-collapse id=collapse1_inner class="mt-2">
                  <!-- Products go here -->
                  <b-card>
                    {{products.products[9].name}}
                    {{products.products[9].price}}
                    <br/>
                    <b-button variant="success" v-on:click='addToCart(products.products[9])'>Añadir al carrito de compras</b-button>
                  </b-card>
                </b-collapse>
              </b-card>
            </b-collapse>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import productsJson from '../json-data/products.json'
import categoriesJson from '../json-data/categories.json'
  export default {
    name: 'app',
    data () {
      return {
        products: [{
          },
        ],
        categories: [{
          },
        ],
        purchases: [
          // {
          // },
        ]
      }
    },
    created () {
      let vc = this
      vc.products = productsJson
      vc.categories = categoriesJson
    },
    methods: {
      addToCart (product) {
        let vc = this

        vc.purchases.push(product)
      },
      removeFromCart (product) {
        let vc = this

        let index = vc.purchases.indexOf(product)
        vc.purchases.splice(index, 1)
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 50px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }
</style>
