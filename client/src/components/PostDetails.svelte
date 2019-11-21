<script>
  import { fade } from 'svelte/transition';

  export let post;
  export let close;
</script>

<style>
  .modal {
    display: block;
    background-color: rgba(0,0,0, .8);
  }
</style>

<div class="modal" in:fade out:fade>
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        Have you seen this gorgeous photo?

        <button type="button" class="close" on:click={close}>
          <span>&times;</span>
        </button>
      </div>

      <div class="modal-body">
        <img src={post.photoSrc} alt="Post image" >
      </div>

      <div class="modal-footer">
        <p>{post.description}</p>
        <span>{post.date}</span>
        <button class="btn btn-primary">Edit</button>
      </div>
    </div>
  </div>
</div>