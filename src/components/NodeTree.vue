<template>
  <li class="node-tree">
    <span class="label">{{ node.name }}</span>

    <ul v-if="node.sublevels && node.sublevels.length">
      <node v-for="level in node.sublevels" :node="level" :key='level'></node>
    </ul>
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