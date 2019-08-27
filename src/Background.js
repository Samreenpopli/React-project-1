import React from 'react';

class Background extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        pictures:[],
    };
}

componentDidMount(){
   
    fetch("https://randomuser.me/api/?results=2")
      .then(results=> results.json())
      .then((data)=> {
        this.setState({pictures:data.results});  
    }
    )
   } 


render()
{   
    console.log("state:",this.state.pictures);  
    return (
        <ul>
            {this.state.pictures.map(item=>(
                <div>{item.name.title}
                <div>{item.name.first}
                <div>{item.name.last}
                <div>
                <img src={item.picture.large}/>
                </div>
                </div>
                </div>

                
                </div>
            ))}
        </ul>
    );
}
}

export default Background;