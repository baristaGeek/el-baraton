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
                   <b-button variant="success">Ir al carrito de compras</b-button>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <div class="bottom">
      To get started, edit <code>./src/components/App.vue</code> and save to reload.<br/>
      <span class="fade">
        {{products}}
      </span>
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
        products: [],
        categories: []
      }
    },
    created () {
      let vc = this
      vc.products = productsJson
      vc.categories = categoriesJson
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
