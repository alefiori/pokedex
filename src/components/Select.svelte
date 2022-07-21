<script lang="ts">
  type T = $$Generic<{ name: string }>

  export let onValueChange: (element: T) => {}
  export let elements: Array<T>
  let selectedElement: T = elements[0]
</script>

<select
  name="pokedex"
  bind:value={selectedElement}
  on:change={() => onValueChange(selectedElement)}
>
  {#each elements as element}
    <option value={element}>
      {element.name}
    </option>
  {/each}
</select>
