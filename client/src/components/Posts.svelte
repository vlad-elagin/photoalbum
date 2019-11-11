<script>
  import PostsService from '../services/posts';

  const photosQuery = PostsService.getPhotos();
</script>

<style>
  .photos-page {
    width: 100%;
    height: 100%;
    padding-top: 25px;
  }

  .photos-page-content {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
</style>

<div class="photos-page">
  <div class="photos-page-content">
    <div class="photos-page-header d-flex align-items-center justify-content-between">
      {#await photosQuery}
        <span class="amount">Loading photos...</span>
      {:then photos}
        You have {photos} photos.
      {:catch}
        Failed to load photos.
      {/await}
      <button class="btn btn-primary">Add new photo</button>
    </div>
  </div>
</div>
