<template>
  <div id="app">
    <!-- <div class="banner">
      <h1>El Baratón</h1>
      <b-button variant="success">Ir al carrito de compras</b-button>
    </div> -->
    <!-- <div>
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

        <b-modal id="shopping-cart" title="Confirmación de orden" hide-footer>
          <p v-if='purchases.length == 0' class="my-4">¡Tu carrito está vacío!</p>
          <ul id="shopping-list">
            <li v-for="item in purchases" :key='item'>
              {{ item.name }}
              {{ item.price }}
              <b-button variant="danger" v-on:click='removeFromCart(item)'>Eliminar</b-button>
            </li>
          </ul>
          <b-btn class="mt-3" variant="success" block v-on:click="buy">Confirmar Compra</b-btn>
        </b-modal>
      </div> -->

  <div>
    <tree :tree-data="tree"></tree>
  </div>

      <!-- Categories go here -->
      <!-- <div>
        <ul id="categories">
          <li v-for="cat in categories.categories" :key='cat'>
            <b-btn v-b-toggle.collapse1 style='margin-bottom: 10px'variant="primary">{{cat.name}}</b-btn>
            <b-collapse id="collapse1" class="mt-2">
              <b-card>
                <li v-for="sub in cat.sublevels" :key='sub'>
                  <b-btn v-b-toggle.collapse1_inner style='margin-bottom: 10px' size="sm">{{sub.name}}</b-btn>
                    <b-collapse id="collapse1_inner" class="mt-2">
                      <li v-for="prod in products.products" :key='prod'>
                        <b-card v-if='prod.sublevel_id == sub.id'>
                          {{prod.name}}
                          {{prod.price}}
                          <br/>
                          <b-button variant="success" v-on:click='addToCart(prod)'>Añadir al carrito de compras</b-button>
                        </b-card>
                      </li>
                    </b-collapse>
                </li>
              </b-card>
            </b-collapse>
          </li>
        </ul>
      </div> -->

    </div>
</template>

<script>
import productsJson from '../json-data/products.json'
import categoriesJson from '../json-data/categories.json'
import Tree from './Tree'
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
        ],




        tree: {
          label: "A cool folder",
          children: [
            {
              label: "A cool sub-folder 1",
              children: [
                { label: "A cool sub-sub-folder 1" },
                { label: "A cool sub-sub-folder 2" }
              ]
            },
            { label: "This one is not that cool" }
          ]
        },



trie: { "categories": [
	{
		"id": 1,
		"name": "Bebidas",
		"sublevels": [
			{
				"id": 1,
				"name": "Gaseosas",
				"sublevels": [
					{
						"id": 2,
						"name": "Con azúcar"
					},
					{
						"id": 3,
						"name": "Sin azúcar"
					}
				]
			}
		]
	},
	{
		"id": 2,
		"name": "Desayunos",
		"sublevels": [
			{
				"id": 4,
				"name": "Fake 1",
				"sublevels": [
					{
						"id": 5,
						"name": "Fake 2"
					},
					{
						"id": 6,
						"name": "Fake 3",
						"sublevels": [
							{
								"id": 7,
								"name": "Fake 4"
							}
						]
					}
				]
			}
		]
	},
	{
		"id": 8,
		"name": "Almuerzos",
		"sublevels": [
			{
				"id": 9,
				"name": "Fake 5"
			},
			{
				"id": 10,
				"name": "Fake 6"
			}
		]
	},
	{
		"id": 11,
		"name": "Vinos",
		"sublevels": [
			{
				"id": 12,
				"name": "Fake 8"
			},
			{
				"id": 13,
				"name": "Fake 9"
			}
		]
	}
]
}



      }
    },
    components: {
      Tree
    },
    created () {
      let vc = this
      vc.products = productsJson
      vc.categories = categoriesJson
    },
    mounted () {
      let vc = this

      const purchases = JSON.parse(vc.$localStorage.get('purchases'))
      if (purchases) {
        vc.purchases = purchases
      }
    },
    methods: {
      addToCart (product) {
        let vc = this

        vc.purchases.push(product)
        vc.$localStorage.set('purchases', JSON.stringify(vc.purchases))
      },
      removeFromCart (product) {
        let vc = this

        let index = vc.purchases.indexOf(product)
        vc.purchases.splice(index, 1)
        vc.$localStorage.set('purchases', JSON.stringify(vc.purchases))
      },
      buy () {
        let vc = this

        if (vc.purchases.length > 0) {
          vc.purchases = []
          vc.$localStorage.set('purchases', JSON.stringify(vc.purchases))
          alert("Compra exitosa")
        } else {
          alert("El carrito está vacío. No se ha efectuado ninguna compra")
        }
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
