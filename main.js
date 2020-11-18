// need to retreive name, address, phone numbers, thumbnail, birthdate, and the date they became a member (stored as registered.date).


const customerCards = document.createElement('div')
customerCards.classList.add('customer-cards')

function monthNumberToString(month){
    if (month === 0) {
        return "Jan"
    } else if (month === 1) {
        return "Feb"
    } else if (month === 2) {
        return "March"
    } else if (month === 3) {
        return "April"
    } else if (month === 4) {
        return "May"
    } else if (month === 5) {
        return "Jun"
    } else if (month === 6) {
        return "July"
    } else if (month === 7) {
        return "Aug"
    } else if (month === 8) {
        return "Sept"
    } else if (month === 9) {
        return "Oct"
    } else if (month === 10) {
        return "Nov"
    } else if (month === 11) {
        return "Dec"
    }
}




for (let customer of customers) {
    console.log(customer)


    
    
    // create and setup person container
    const personContainer = document.createElement('div')
    personContainer.classList.add("person")
    
    // create image tag and assign image source
    const customerImage = document.createElement('img')
    customerImage.src = customer.picture.medium
    personContainer.appendChild(customerImage)
    customerImage.classList.add('image')
    
    // create name element
    const customerName = document.createElement('p')
    function capitalName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    customerName.innerText = capitalName(customer.name.first) + " " + capitalName(customer.name.last)
    personContainer.appendChild(customerName)
    customerName.classList.add('customer-name')

    // create email element
    const customerEmail = document.createElement('p')
    customerEmail.innerText = customer.email
    personContainer.appendChild(customerEmail)
    customerEmail.classList.add('email')

    // create location container that will house the address components
    const customerLocation = document.createElement('div')
    personContainer.appendChild(customerLocation)
    customerLocation.classList.add('location')
    
    // create street element inside customerLocation container
    const customerAddress = document.createElement('p')
    customerAddress.innerText = customer.location.street.number + " " + customer.location.street.name
    customerLocation.appendChild(customerAddress)

    // create city, state, zip elements inside customerLocation container
    const customerCityStateZip = document.createElement('p')
    const state = usStates.find(function(s) {
        return s.name === customer.location.state.toUpperCase()
    })
    customerCityStateZip.innerText = customer.location.city + ", " + state.abbreviation + " " + customer.location.postcode
    customerLocation.appendChild(customerCityStateZip)

    // create DOB inside personContainer
    const customerDOB = document.createElement('p')
    const dob = new Date(customer.dob.date)
    customerDOB.innerText = "DOB: " + monthNumberToString(dob.getMonth()) + " " + dob.getDate() + ", " + dob.getFullYear()
    console.log(customerDOB)
    personContainer.appendChild(customerDOB)
    customerDOB.classList.add('dob')

    // create membership start date inside personContainer
    const customerMembership = document.createElement('p')
    const membershipDate = new Date(customer.registered.date)
    customerMembership.innerText = "Member since: " + monthNumberToString(dob.getMonth()) + " " + dob.getDate() + ", " + dob.getFullYear()
    personContainer.appendChild(customerMembership)
    customerMembership.classList.add('membership')

    // we're done adding content to person, add the person
    // to the customerCards container
    customerCards.appendChild(personContainer)
}

// find the spot on the page where you want all the shit
// and then, Add the customerCards to the found area
const body = document.querySelector('body')
body.appendChild(customerCards)

