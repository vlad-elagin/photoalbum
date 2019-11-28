<script>
  import { fade } from 'svelte/transition';
  import PostsService from '../services/posts';
  import notify from '../utils/notification';

  export let close;

  let description = '';

  const reader = new FileReader();
  let imageSrc = null;
  const onImageSelect = ({ target  }) => {
    if (target.files && target.files[0]) {
      const img = new Image();
      img.onload = ({ target: loadedImage }) => {
        if (loadedImage.width > 1500 || loadedImage.height > 1500) {
          notify('danger', 'Max image size is 1500x1500.');
          target.value = '';
          return;
        }
        imageSrc = img.src;
      }

      reader.onload = function(e) {
        img.src = e.target.result;
      }
      reader.readAsDataURL(target.files[0]);
    }
  }

  const onSave = () => {
    console.log('saving');
    if (!imageSrc) {
      notify('danger', 'Select a photo to upload.');
      return;
    }
  }
</script>

<style type="text/scss">
  .modal-content {
    min-height: 500px;
  }

  .modal-footer {
    button:last-of-type {
      margin-left: 15px;
    }
  }

  .preview {
    border: 1px solid var(--primary);
    border-radius: 5px;
    overflow: hidden;
    max-height: 400px;

    &-image {
      width: 100%;
      object-fit: cover;
    }
  }
</style>

<div class="modal" in:fade out:fade>
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        New Post

        <button type="button" class="close" on:click={close}>
          <span>&times;</span>
        </button>
      </div>

      <div class="modal-body row">
        <div class="col-4 form-group">
          <label for="photo">Pick a photo</label>
          <input
            type="file"
            id="photo"
            accept="image/x-png,image/jpeg"
            class="mb-3 form-control-file"
            on:change={onImageSelect}
          >
          <label for="description">
            Photo description
          </label>
          <textarea
            id="description"
            bind:value={description}
            class="form-control"
            rows="7"
          ></textarea>
        </div>
        <div class="col-8">
          <div class="preview d-flex justify-content-center align-items-center h-100">
            {#if imageSrc}
              <img src={imageSrc} alt="photo preview" class="preview-image">
            {:else}
              <span>Preview</span>
            {/if}
          </div>
        </div>
      </div>

      <div class="modal-footer d-flex align-items-center justify-content-end">
        <button class="btn" on:click={close}>Close</button>
        <button class="btn btn-primary" on:click={onSave}>Save</button>
      </div>
    </div>
  </div>
</div>