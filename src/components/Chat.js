import React, { useEffect, useState } from "react";
import ScrollToBottom, { useAtStart } from "react-scroll-to-bottom";
import Axios from 'axios';
import useAuth from '../hooks/useAuth';
import dateFormat from "dateformat";

function Chat({viaje}) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const { currentUser } = useAuth();
  const [trip, setTrip] = useState("");

  console.log(viaje);

  useEffect(() => {
      setTrip(viaje);
    }, [viaje]);


  // get all of the trips messages
  useEffect(() => {
    Axios.get(`http://localhost:3001/message/viaje/${viaje}`)
      .then(res => {
        console.log(res.data);  
        setMessageList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

// post new message
  const sendMessage = async () => {
    const requestOptions = {
      method: 'Post',
      headers: {
          'Authorization': `Bearer ${currentUser.token}`
      }
    };
    if (currentMessage !== "") {
      const messageData = {
        
        ViajeId: trip,
        UserId: currentUser.id,
        author: currentUser.username,
        content: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await Axios.post('http://localhost:3001/message/new', messageData, requestOptions)
            .then(response => {
                setMessageList(response.data);
                console.log(response);
            }
            ).catch(error => {
                console.log(messageData)
                console.log(error);
            }); 
      setCurrentMessage("");
    }
  };


  return (
    <div className="chat-window">
      <div className="chat-header">
        <p className='text-center text-xl font-bold'> Chat {viaje}</p>
      </div>
      <div className="chat-body border-2 rounded-md py-3 px-3 mb-2">
        <ScrollToBottom className="message-container">
          { Array.isArray(messageList) ? (messageList).map((messageContent) => {
            return (
                <div className="flex flex-column justify-between">
                  
                  <div className="message-time">
                    <p className="text-sm" id="time">
                    
                    {dateFormat(messageContent.createdAt, "h:MM TT")}</p>
                  </div>

                  <div className="message-content flex-wrap px-2">
                    <p className="font-semibold flex-wrap">{messageContent.content}</p>
                  </div>

                  <div className="message-author">
                    <p className="" id="author">{messageContent.author}</p>
                  </div>
                </div>
            );
          }): ""}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          className="shadow appearance-none border rounded py-2 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={currentMessage}
          placeholder="Escribir mensaje"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage} type="button" class="inline-flex items-center justify-center rounded-lg px-3 py-2 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
               <span class="font-bold">Enviar</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;
