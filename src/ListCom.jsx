import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const ListCom = (props) => {

    const[line,setLine] = useState(false);  //intial value will be false that we dont want the cut line initialy

    const cutIt =() =>{   //but when we click on button it will updated as true and cut line will be visible
        setLine(true);     //setline will update the value to true means there will be a cut line over the value.
    };

    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt}>   { /*onClick is used because we want that cutit line when we click on dlete button*/}
                    <DeleteIcon className="deleteIcon"/>
                    </span>
                <li style={{textDecoration:line ? "line-through":"none"}}>    {/*if line is true show line through else none and textdecoration*/}
                {props.text}
                </li>
                </div>

        </>
    );
};


export default ListCom;