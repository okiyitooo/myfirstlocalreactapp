const apiKey = "FdD_1Y0A2-9vB3uygZJJc9UAaYJE_gfcqOWbFMAQJAmw-KnCMhFGuhIwVQiE9SZoazrDkFyl0gD4M4lo-lpl0UNvpB6XfMV_RAA5qlwhmAPPD-RnLcWzMXAebPEZYHYx"
const Yelp = {
    search: function (term,location,sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { headers: { Authorization: `Bearer ${apiKey}` } })
            .then( response => response.json() )
            .then( jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map( business => {
                    
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }})
            }
        } )
    }
}
export default Yelp;