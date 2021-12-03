# README

Introduction

Skybnb is an Airbnb clone where you can look up listings for houses, apartments, and hotels to stay at. Users will be able
to create their own listings, book a stay at a place they like, and leave reviews on places they've been too!

Live Site

* [Live Site](https://skysbnb.herokuapp.com/#/)

Techonologies

Backend
* Ruby
* Ruby on Rails
* Postgresql

Frontend
* React
* Redux
* HTML
* CSS
* AWS
* Git

Features

For my Users Log in and Sign in I decided to use modals which gives the appearance of a form popping up
over the background. The forms to Log in and Sign up have built in errors that correspond to the fields 
that causes the errors, and once logged in the Navbar and functionality you have changes. You are allowed
full features of the website only when logged in. The way I set up my errors for it to display to each field
was a bit tricky. I had to store my errors in an object, and I referenced them based off the first work in each error. 
This allowed me to key into my object in my component and only render the corresponding errors.

```
case RECEIVE_SESSION_ERRORS:
        let allErrors = {}
        action.errors.forEach(err => {
          let objectKey = err.split(' ')[0].toLowerCase()
            allErrors[objectKey] = err
```

When users want to create a listing they are prompted through a multi-paged form. This form has the appearance
of being multipaged, but the way its working is that every time you hit next, the same component is being rendered
its just a different part of it based off a counter. This was one of the challenges I faced in the production of the website. 
As you can see here there are ternarys set on the render form that designates a certain page to render. 

``` 
    this.pageIndex === 2 ? (
      <div className="form-container">
         <div className="login-form-left">
            <label className="form-label"> Where is your listing located?</label>
         </div>
         <div className="login-form-right">
            <div className='listing-type'>
              <div id='input-headers'>Address</div>
              <input placeholder="Address is kept private until booking" 
                     type="text" value={this.state.address} 
                     onChange={this.update('address')}/>
              <div id='input-headers'>City</div>
              <input placeholder="Full name of the city"
                     type="text" value={this.state.city} 
                     onChange={this.update('city')}/>   
              <div id='input-headers'>State</div>
              <input placeholder="Enter your states abbreviations ex: CA" 
                     type="text" value={this.state.state} 
                     onChange={this.update('state')}/> 
              <div id='input-headers'>Zip Code</div>
              <input placeholder="Closest applicable zip code" 
                     type="text" value={this.state.zipCode} 
                     onChange={this.update('zipCode')}
           </div>   
         </div>
         ) : null
```

Future Features

I plan to keep adding to this website. I will be adding a reservation method so you can actually
book your stay at places. I will also be further implementing the map to make it dynamic to the city
you are looking at, while also adding numerous more cities. Lastly, I will be adding a dynamic search function
to my website, so you can look up places by city and corresponding results show up. 

