import React, { useState } from "react";
import axios from "axios";

export default function CommentBox(props) {
    const [ comment, setComment ] = useState('');
    console.log(props._id + " is the id from comment box");
    const handleClick = async  (e)=>{
        e.preventDefault();
        console.log(comment);
        console.log('sending comment request');
        const response = await axios({
            method :'post',
            url : '/comment/addComment/' + props._id,
            data : {
                comment : comment
            }
        });
        setComment('');
        console.log(response);
    }

    
    return (
        <div>
            <div class="max-w-lg shadow-md">
                <form color="black" action="" class="w-full p-4">
                    <div class="mb-2">
                        <label for="comment" class="text-lg text-gray-600">Add a comment</label>
                        <textarea style = {{color : 'black'}}class="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            onChange={(e)=>{
                                setComment(e.target.value);
                            }}      name="comment" placeholder=""></textarea>
                    </div>
                    <button onClick = {handleClick} class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
                </form>
            </div>
        </div>
    )
}