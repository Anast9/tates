// logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {name: 'Моя девушка - инопланетянка', year: 2022},
         {name: 'Глоток молодости', year: 2018},
         {name: 'Невеста на замену', year: 2019}
  
        
      ],
  
      pageTitle: 'Дорамы смотреть онлайн',
      showCars: false
    }
  }


  toggleCarsHandler = () =>{

    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = pageTitle =>{
      this.setState({pageTitle})
  }

  onChageName = (name, index) =>{
 const car = this.state.cars[index]
 car.name = name
 const cars = [...this.state.cars]
  cars[index] = car
  this.setState({cars})
}

deleteHandler = (index) =>{
  let cars = this.state.cars.concat()
  cars.splice(index, 1)

  this.setState({cars})

}
  
  render() {

    console.log('Render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null;
if(this.state.showCars){
  cars = this.state.cars.map((car, index) =>{
    return (
      < Car
          key={index}
          name={car.name}
           year={car.year} 
           onDelete={this.deleteHandler.bind(this, index)}
           onChageName={event => this.onChageName(event.target.value, index)}
           />
    )
  
  })
}

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>

       


<button onClick={this.toggleCarsHandler}>Поиск  Дорам</button>

<div style={{
  width: 400,
  margin: 'auto',
  paddingTop: '20px'
}}>
{cars}
 </div>
 </div>
);

}

}


export default App;
