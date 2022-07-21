<script lang="ts">
  import { beforeUpdate } from 'svelte'
  import arrowCloseIcon from '../assets/icons/arrow-close.png'
  import arrowOpenIcon from '../assets/icons/arrow-open.png'

  type T = $$Generic<{ name: string }>

  export let title: string
  export let onValueChange: (element: T) => {}
  export let elements: Array<T>
  let selectedElement: T
  let isOpened = false

  beforeUpdate(() => {
    if (!selectedElement && !!elements?.length) {
      selectedElement = elements[0]
    }
  })

  const selectElement = (element: T): void => {
    selectedElement = element
    onValueChange(element)
    isOpened = false
  }
</script>

{#if !!selectedElement}
  <div class="select noselect">
    <div class="select__title">{title}</div>
    <div
      class="select__selected-option"
      on:click={() => (isOpened = !isOpened)}
    >
      {selectedElement.name}
      <img
        class="select__icon"
        src={isOpened ? arrowCloseIcon : arrowOpenIcon}
        alt={isOpened ? 'close' : 'open'}
      />
    </div>
    {#if isOpened}
      <div class="select__options">
        {#each elements as element}
          <div class="select__option" on:click={() => selectElement(element)}>
            {element.name}
          </div>
        {/each}
      </div>
    {/if}
  </div>
{/if}
