import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCheckDouble } from "react-icons/bi";
import Center from "./Center";
import Prrofile from "./Prrofile";
import axios from "axios";
import { UserContext } from"../userContex";
import { useEffect ,useContext} from "react";


export const Chatbox = () => {

    const [allUsers, setAllUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);
  
//  const getAllUser = async () => {
//         const response = await axios({
//             method: 'get',
//             url: `/user/all`
//         });
//         console.log(response.data);
//         setAllUsers(response.data.users);
//     }

  async function getAllUser() {
    const response = await axios.get(
      `http://localhost:8080/user/all`
    );
    setAllUsers(response.data);
  }
  
  useEffect(() => {
    getAllUser();
  }, []);


  return (
    <div className="">
      
      <div className=" bg-white h-full w-[375px] absolute -z-10 text-black  text-sm  ">
      
        <div className="flex border-b-[1px] border-gray-200 p-2 gap-3 items-center overflow-hidden ">
          <div>
           
            <AiOutlinePlus className="text-grey-300 border-gray-200 border-2 rounded-full w-7 h-7  m-3 mx-3 " />

            <p className="">My Story</p>
          </div>

          {allUsers.map((user, i) => {
            return(
  
            <>
              <div className="p-1">
                <img
                  className="rounded-full w-12 h-12"
                  src="https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg"
                  alt=""
                />
                <p>{user.firstName}</p>
              </div>
            </>)
  

          })} 
          
        </div>
          

         

        <div className="flex-column gap-5   ">

          {allUsers.map((user, i) => {
            return(
  
            
          <div className="flex gap-3 items-center px-3 py-2  border-b-2 border-gray-200 ">
            <img
              className="rounded-full w-12 h-12"
              src="https://image.shutterstock.com/image-photo/smiling-young-middle-eastern-man-260nw-2063524544.jpg"
              alt=""
            />
            <div className="">
              <h5 className="mt-3">{user.firstName} </h5>
              <p className="overflow text-gray-500">
                hey how are you its been long We hav..
              </p>
            </div>
            <BiCheckDouble />
                </div>
                  )
  

          })} 

      </div>
      </div>
      <Center/>
                  {/* </> ) })} */}

        {/* <Prrofile/> */ }
                          
    </div>
  );
};



