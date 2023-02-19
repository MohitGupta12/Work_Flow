const form = document.querySelector('#search');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let search_term = form.elements.query.value;
    let headers = { params: { q: search_term } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, headers);
    console.log(res.data);

    let dataArray = res.data;
    makeImage(dataArray);

    form.elements.query.value = "";

})

function makeImage(data) {
    for (let elm of data) {
        // console.log(elm);
        if (elm.show.image) {
            const img = document.createElement('img');
            img.src = elm.show.image.medium;
            document.body.appendChild(img);
        }

    }
}
