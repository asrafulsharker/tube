function loadPost(){
    fetch('https://openapi.programming-hero.com/api/videos/category/1000')
    .then(response => response.json())
    .then(data => displaypost(data.data))

} 

function timeAgo(seconds) {
  const currentDate = new Date();
  const postedDate = new Date(currentDate - seconds * 1000); // Convert seconds to milliseconds
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours >= 1) {
    return `${hours} hrs ${minutes % 60} min ago`;
  } else if (minutes >= 1) {
    return `${minutes} min ago`;
  } else {
    return 'just now';
  }
}


function displaypost(data){
    const container = document.getElementById('blog-content');
    for(const post of data){
        
        const div = document.createElement('div');
        div.innerHTML =
        `
              <div class="card bg-base-100 shadow-xl ">
              <figure><img src="${post.thumbnail}" alt="Shoes" class="w-full h-[250px]"/></figure>
              <div class="card-body">
                <div class="card-author flex gap-3">
                  <img class="rounded-full h-8 w-8" src="${post.authors[0].profile_picture}"  alt="">
                  <div class="author-details">
                      <div class="flex gap-3"><p class="text-xl font-bold">${post.title}</p> ${post.authors[0].verified ? '<img src="./v.svg" alt="Verified" />' : ''}</div>
                      <p class="">${post.authors[0].profile_name}</p>
                      <p class="">${timeAgo(post.others.posted_date)}</p>
                      <p>${parseInt(post.others.views, 10)}k views</p>
                  </div>
                </div>
              </div>
            </div>
        
        `;

        container.appendChild(div);
        console.log(post);
    }
}


loadPost();