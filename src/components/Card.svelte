<script lang="ts">
  export let imageUrl: string
  export let title: string
</script>

<div class="card">
  <img class="card__image" src={imageUrl} alt={title} />
  <div class="card__title">{title}</div>
</div>
