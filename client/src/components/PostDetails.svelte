<script>
  import { fade } from 'svelte/transition';
  import tinytime from 'tinytime';

  export let post;
  export let close;

  const template = tinytime('Taken at {H}:{mm}, {DD} {MM}');
</script>

<style type="text/scss">
  .modal {
    display: block;
    background-color: rgba(0,0,0, .8);
  }

  .modal-body img {
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
  }

  .modal-footer {
    p {
      margin: 8px 0 0;
      max-width: 60%;
    }

    span {
      margin-top: 8px;
      margin-left: auto;
    }

    .btn {
      margin-left: 20px;
    }
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

      <div class="modal-footer d-flex align-items-start justify-content-between">
        <p>{post.description}</p>
        <span>{template.render(new Date(post.createdAt))}</span>
        <button class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</div>