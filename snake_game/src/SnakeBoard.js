import React, { useState } from 'react';
import Blank from './blank.png';

const SnakeBoard = () => {
    const width=10;
    const height=10;
    let initialRows = [];
    for(let i=0; i <10; i++){
        initialRows.push([]);
        for(let k=0; k<10; k++){
            initialRows[i].push('blank')
        }
    }

    const randomPosition = () => {
        const position = {
            x: Math.floor(Math.random()*width),
            y: Math.floor(Math.random()*height)
        };
        return position;
    }

    const [rows, setRows] = useState(initialRows);
    const [snake, setSnake] = useState([{x:0,y:0},{x:1,y:0}]);
    const [direction, setDirection] = useState('right');
    const [food, setFood] = useState(randomPosition);

    

    const displayRows = rows.map(row =>
            <li>
                {row.map(e => {
                    switch(e){
                        case 'blank':
                            return <img src={Blank}/>
                                }
                        })
                }
            </li>
        );

    return(
        <div>
            <ul style={{width:'500px', padding:'0px'}} class='img500'>
            { displayRows }
            </ul>
        </div>
    )
}

export default SnakeBoard;