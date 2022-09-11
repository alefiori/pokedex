<script lang="ts">
  import { onMount } from 'svelte'

  export let fetchFunction: () => void

  let elementRef: HTMLElement

  onMount(() =>
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchFunction()
      }
    }).observe(elementRef)
  )
</script>

<div class="infinite-scroll" bind:this={elementRef}>Infinite Scroll</div>
