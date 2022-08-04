import React, { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

export default function CommentViewBox(props){
    const [ showReplyBox, setShowReplyBox ] = useState(false);
    const [ reply, setReply ] = useState('');

    const handleClick = async(e)=>{
        e.preventDefault();
        console.log('Sending request to add reply');
        const response = await axios({
            method : 'PUT',
            url : '/comment/addReply/' + props._id,
            data : {
                comment : reply
            }            
        });
        setReply('');
        console.log(response.data);
    }

    if(!props){
        return <div>
            Loading...
        </div>
    }

    

    return(
        <div style={{border : '1px solid white'}}>
            {props.comment}
            <br></br>
        <Button onClick={()=>{
            setShowReplyBox(!showReplyBox);
        }}variant="outlined">Reply</Button>
        {showReplyBox && <div>
            <div class="max-w-lg shadow-md">
                <form color="black" action="" class="w-full p-4">
                    <div class="mb-2">
                        <label for="comment" class="text-lg text-gray-600">Add a reply</label>
                        <textarea value = {reply} style = {{color : 'black'}}class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            onChange={(e)=>{
                                setReply(e.target.value);
                            }}      name="comment" placeholder=""></textarea>
                    </div>
                    <button onClick = {handleClick} class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Reply</button>
                </form>
            </div>
        </div>}


        </div>
    )
}