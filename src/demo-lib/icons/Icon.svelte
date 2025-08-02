<script module>
  import pathsByName from './IconPaths'
  export const iconOptions = Object.keys(pathsByName)
  export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw']
</script>

<script>
  /**
   * @typedef {Object} Props
   * @property {string} [name]
   * @property {string} [direction]
   * @property {string} [color]
   */

  /** @type {Props} */
  let { name = 'arrow', direction = 'n', color = 'white' } = $props();
  let paths = $derived(pathsByName[name] || [])
  let rotation = $derived(directions.indexOf(direction) * 45)
</script>

<svg
  class="c"
  viewBox="0 0 16 16"
  fill-rule="evenodd"
  clip-rule="evenodd"
  {color}
  style={`transform: rotate(${rotation}deg)`}
>
  {#each paths as path}
    <path d={path} />
  {/each}
</svg>

<style>
  .c {
    width: 1em;
    height: 1em;
    fill: currentColor;
    transition: all 0.3s ease-out;
    overflow: visible;
  }
</style>
