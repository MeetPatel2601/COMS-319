

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },
    
                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },
    
                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },
    
                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },
    
                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },
    
                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },
    
                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },
    
                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },
    
                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },
    
                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },
    
            ]
        };
    }

    render() {
        return (
 <div>
<table>

<tr>
<th>Manufacturer</th>
<th>Model</th>
<th>
<button onClick={(e) => this.tableSort()}>
<b>Year</b>
</button>
</th>
<th>Stock</th>
<th>Price</th>
<th>Option</th>
</tr>




{this.state.cars.map((item) => {
return (
<tr >
<td>{item.manufacturer}</td>
<td>{item.model}</td>
<td>{item.year}</td>
<td>&nbsp;&nbsp;{item.stock}</td>
<td>${item.price}.00</td>
<td><button onClick={(e) => this.updateStock(item) + 1}>
Increment</button></td>
</tr>

);
})}

</table>
</div>



	
        );
    };
}


ReactDOM.render(<App />, document.getElementById("app"))