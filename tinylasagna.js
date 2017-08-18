//Inside of a componentDidMount function on the PlayList component
//You should have the following fetch call to retrieve the playlists
//from the server. Don't worry as much about how these function for now, as much placing
//them in the right locations and getting them to work/sync up properly with the component.

//******************************************************************************
//******************************************************************************
//copy and paste into componentDidMount in your PlayList component.
fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })


//Also in your PlayList component you should have a function that manually updates
//the playlist when a user presses a button. Use the following "fetchData" function
//to manually update your playlist.

fetchData = (e) => {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

///^^^^^^^^ The above function could also be written as a method :
///////////////////////////
// fetchData(e) {
//  e.preventDefault();
//  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//    return results.json();
//  }).then(data => {
//    this.setState({songs: data});
//  })
// }
///////////////////////////
//However if using the method version, you will need to bind `this` to the method
//in the constructor() method. So the method has access to "this". Like so:
////////////////////////////
// constructor(props) {
//   super(props);
//
//   this.fetchData = this.fetchData.bind(this);
// }
//******************************************************************************
//******************************************************************************
//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (dependin on the syntax you choose) will be comparable to this:

addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
  this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
}

//******************************************************************************
