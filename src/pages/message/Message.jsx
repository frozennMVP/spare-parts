import React, { useState, useEffect} from 'react';
import './Message.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { REST_API } from '../../utils/urlApi';


const fetchData = () => {
    return axios
      .get(`${REST_API}/message`)
      .then(response => response.data);
  };


const Message = () => {
    const [messages, setMessages] = useState([])
    const { id } = useParams()
 

    useEffect(() => {
        fetchData(id).then(data => setMessages(data))
    }, [id])
    console.log(messages)

    return (
        <div>
            <h4 style={{
                margin: "25px"
            }}> Все сообщения ({messages.length})</h4>
            <div>
                {messages.map(message => (
                    <div className='MessageUnder' key={message.id}>
                        <div className='Message-content'>
                            <h5>{message.userName} : {message.userNumber} </h5>
                            <div>
                                <p>{message.userDate}</p>
                            </div>
                        </div>
                        <div>
                            <p>{message.userText}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Message;