<script>
  import PostsService from '../services/posts';
  import Post from './Post.svelte';
  import PostDetails from './PostDetails.svelte';
  import notify from "../utils/notification";

  let posts = null;
  PostsService
    .getPhotos()
    .then(resPosts => {
      posts = resPosts;
    })
    .catch(err => {
      console.log('nu che tam');
      notify(
        "danger",
        err.message
      );
    });
  
  let activePost = null;
  const onPostClick = (post) => {
    activePost = post;
  }
  const closeDetails = () => {
    activePost = null;
  }
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

  .photos-page-header {
    padding: 0 15px;
    margin-bottom: 25px;
  }

  .row {
    margin: 0;
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

    <div class="photos-page-wrapper container">
      <div class="row">
        {#if Array.isArray(posts)}
          {#each posts as post}
            <Post {post} {onPostClick} />
          {/each}
        {/if}
      </div>
    </div>
  </div>

  {#if activePost !== null}
    <PostDetails post={activePost} close={closeDetails} />
  {/if}
</div>
