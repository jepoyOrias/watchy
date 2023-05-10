const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjFiZDJlMzkxMzk5ZGFkZjY3N2ZhMTVkNDliMDY2MCIsInN1YiI6IjVmMzM0YTc5OGE4OGIyMDAzNTllNDYxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._bCFhpESgXRHgfp0uKA2BN-1Axt3J9LIQqG4jRhAIRg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&append_to_response=images', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        response.results.map(item =>{
                  var movie = `<div
                    class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                    <img class="rounded-t-lg" src="https://image.tmdb.org/t/p/w400/${item?.poster_path}" alt=""/>
                    <a href="#!">
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </a>
                    </div>
                    <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    ${item?.original_title}
                    </h5>
                    <div class="text-caption text-gray-400 dark:text-white flex justify-between ">
                    <span>${item?.release_date}</span>
                        <a class="flex text-gray-900 dark:text-white ">${item?.vote_average} <img src="images/star.png" class="ms-2" width="24" height="24"></a>
                    </div>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 mt-5" id="overview">
                    ${item?.overview.substring(0,100)+ "..."}
                    </p>
                    <button type="button mt-auto"
                        class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  text-gray900 dark:text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-ripple-init data-te-ripple-color="light">
                        View More
                    </button>
                    </div>
                </div>`;
                $("#upcoming_movies").append(movie);
        });
    }
    
    )
    .catch(err => console.error(err));

    


  

