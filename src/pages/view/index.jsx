import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function ViewDetails () {
    const location = useLocation();
    const [birth, setBirth] = useState('');
    const [death, setDeath] = useState();

    useEffect(() => {
        randomize();
    }, [])

    //Create a function that ramdomized the birth and date of the person
    const randomize = () => {
        const birth = new Date(Math.floor(Math.random() * (new Date() - new Date(1930, 0, 1))));
        const death = new Date(Math.floor(Math.random() * (new Date() - new Date(birth.getFullYear(), 0, 1))));
        setBirth(`${birth.getMonth()}/${birth.getDate()}/${birth.getFullYear()}`);
        setDeath(`${death.getMonth()}/${death.getDate()}/${death.getFullYear()}`);
    }
    
        
    return (
        <div style={{

        }}>

            {
                location.state.details.occupied ? 
                <div>
                    <h1>Details</h1>
                    <h3>Plot area: {location.state.details.block} lot: {location.state.details.lot}</h3>
                    <h3>Name: {location.state.details.name}</h3>
                    <h3>Date: {birth} - {death}</h3>
                </div> : 
                <div>
                    <h1>No one is occupied in this plot area.</h1>
                    <h3>Plot area: {location.state.details.block} lot: {location.state.details.lot}</h3>
                </div>

            }

        </div>
    );
}