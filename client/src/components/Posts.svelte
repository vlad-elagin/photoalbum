<script>
  import PostsService from '../services/posts';

  let posts = null;
  PostsService
    .getPhotos()
    .then(res => {
      console.log(res.data);
      posts = res.data.posts;
    })
    .catch(err => console.log(err));
  
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
      {#if posts === null}
        <span class="amount">Loading photos...</span>
      {:else if posts.length === 0}
        <span class="amount">You have no photos!</span>
      {:else}
        <span class="amount">You have {posts.length} photos.</span>
      {/if}
      <button class="btn btn-primary">Add new photo</button>
    </div>
  </div>
</div>
