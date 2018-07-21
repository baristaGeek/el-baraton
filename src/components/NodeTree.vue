<template>
  <li class="node-tree">
    <b-btn v-b-toggle.collapse1 style='margin-bottom: 10px' variant="primary">{{node.name}}</b-btn>

    <!-- To collapse -->
    <b-collapse id="collapse1" class="mt-2">
      <ul v-if="node.sublevels && node.sublevels.length">
        <node v-for="level in node.sublevels" :node="level" :key='level'></node>
      </ul>
      <!-- Products go here -->
        <li v-for="prod in products.products" :key='prod' v-if='prod.sublevel_id == node.id'>
          <b-card>
            {{prod.name}}
            {{prod.price}}
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
      products: [{}]
    }
  },
  created () {
    let vc = this
    vc.products = productsJson
  }
};
</script>