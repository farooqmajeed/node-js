const address = {
    street:"",
    city:"",
    country:''
};
const street = address.street;
const city = address.city;
const country = address.country;

const { street, city, country } = address; // destructuring
// setting alias
const { street:st } = address; 