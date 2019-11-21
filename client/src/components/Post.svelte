<script>
  import tinytime from 'tinytime';

  export let post;
  export let onPostClick;

  const template = tinytime('Taken at {H}:{mm}, {DD} {MM}');
</script>

<style>
  .photos-photo {
    border: 2px solid var(--primary);
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    transition: transform .2s ease;
  }

  .photos-photo:hover {
    transform: scale(1.1);
  }

  .date {
    color: var(--secondary);
    font-size: smaller;
  }

  .description {
    margin-bottom: 0.5rem;
    color: var(--dark);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .post-image {
    width: 100%;
    height: 200px;
  }

  .post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  figcaption {
    padding: 10px;
  }
</style>

<div class="col-12 col-md-6 col-lg-4">
  <figure class="photos-photo" on:click={() => onPostClick(post)}>
    <div class="post-image">
      <img src={post.photoSrc} alt="Post image" >
    </div>

    <figcaption>
      <p class="description">{post.description}</p>
      <span class="date">{template.render(new Date(post.createdAt))}</span>
    </figcaption>
  </figure>
</div>
