import React from 'react'
import cars from '../cars.json'
import {Card, CardContent, Divider, CardActions, Link} from '@material-ui/core'

// import material ui components here //
// Container, Paper, Chip //

 const Car = (props) => {
     let id = parseInt(props.match.params.id);
     let car = cars.find(car => car.id === id)
    return (         
    <div>
            <Card>
                <CardContent>
                    <span>{car.Name}</span>
                    <ul>
                        <li>id: {car.id}</li>
                        <li>Name: {car.Name}</li>    
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        <li>Weight_in_lbs: {car["Weight_in_lbs"]}</li>
                        <li>Acceleration: {car["Acceleration"]}</li>
                        <li>Year: {car["Year"]}</li>
                        <li>Origin: {car["Origin"]}</li>
                    </ul>
                </CardContent>
                    <Divider />

            </Card>  
    </div>
    )
 }

export default Car