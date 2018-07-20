<template>
  <li class="node-tree">
    <b-btn v-b-toggle.collapse1 style='margin-bottom: 10px'variant="primary">{{node.name}}</b-btn>

    <!-- To collapse -->
    <b-collapse id="collapse1" class="mt-2">
      <ul v-if="node.sublevels && node.sublevels.length">
        <node v-for="level in node.sublevels" :node="level" :key='level'></node>
      </ul>
    </b-collapse>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object
  }
};
</script>