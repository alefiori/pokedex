<script lang="ts">
  import placeholder from '../assets/images/placeholder.png'

  export let imageUrl: string
  export let title: string
</script>

<div class="card">
  <img
    class="card__image"
    src={imageUrl}
    alt={title}
    on:error={() => (imageUrl = placeholder)}
  />
  <div class="card__title">{title}</div>
</div>
