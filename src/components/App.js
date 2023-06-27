import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import "semantic-ui-css/semantic.min.css";
import Images from "./ImageList";
class App extends React.Component{
    state={images:[]};
    onSearchSubmit= async term =>{
     const response = await unsplash.get('/search/photos',{
        params:{ query: term }
      }); 
    this.setState({images:response.data.results})
    }
    render(){
        return (
            <div className ="ui container" style={{marginTop :'10px'}}>
            <SearchBar onSubmitChild ={this.onSearchSubmit}/>
            <Images images ={this.state.images}/>
            </div>
        );
    }
}
export default App