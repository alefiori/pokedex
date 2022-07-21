<script lang="ts">
  export let imageUrl: string
  export let title: string
</script>

<div>
  <img src={imageUrl} alt={title} />
  <h2>{title}</h2>
</div>
