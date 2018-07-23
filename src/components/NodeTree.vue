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
        <div>
          <label>Filtrar por disponibilidad: </label>
          <select v-model='availability'>
            <option value="1">Disponible</option>
            <option value="0">No Disponible</option>
          </select>
        </div>
        <b-input-group size="lg">
          <b-form-input v-model='searchedProduct'></b-form-input>
        </b-input-group>
        <li v-for="prod in products.products" :key='prod' v-if='(prod.sublevel_id == node.id)'>
          <b-card v-if='( ((!searchedProduct) || (prod.name.includes(searchedProduct) || (prod.name == searchedProduct))) && ((prod.available == availability)) )'>
            {{prod.name}}
            {{prod.price}}
            {{prod.available}}
            <br/>
            <b-button variant="success">Añadir al carrito de compras</b-button>
          </b-card>
        </li>
    </b-collapse>
  </li>
</template>

<script>
import productsJson from '../json-data/products.json'
export default {
  name: "node",
  props: {
    node: Object
  },
  data () {
    return {
      products: [{}],
      searchedProduct: '',
      availability: '1',
      lowerPrice: 0,
      upperPrice: 999999999999,
      lowerStock: 0,
      upperStock: 999999999999,
    }
  },
  created () {
    let vc = this
    vc.products = productsJson
  }
};
</script>