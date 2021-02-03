import React from 'react'
import logo from '../../logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import Yelp from '../../util/Yelp'
import SearchBar from '../SearchBar/SearchBar'

const component = React.Component

class App extends component {
    
    constructor(props) {
        super(props)
        this.state = {
            businesses: []
        }
        this.searchYelp = this.searchYelp.bind(this)
    }
    searchYelp(term, location, sortBy) {
        //alert(`searching yelp for ${term} as business, ${location} as location while sorted as ${sortBy}`)
        Yelp.search(term, location, sortBy)
            .then( businesses => {
                this.setState({businesses: businesses})
            })
    }
    
    render() {
        return (
            <div className="App">
              <h1>ravenous</h1>
              <SearchBar searchYelp={this.searchYelp}/>
              <BusinessList businesses={this.state.businesses}/> 
            </div>
          );
    }
}

export default App;
