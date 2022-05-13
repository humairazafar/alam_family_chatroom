### Alam Family Chatroom
Project will utilize JavaScrip classes, OOP and firebase firestore. It will allow users to select a chat room from  five available option, send a message, and change name. 

### index.html
The index file is connected to three JavaScript files in the script folder, app.js, chat.js and ui.js.
I will be utilizing bootstrap frame work for designing, and a style.css file for any other custom styles. 
<img width="1440" alt="Screen Shot 2022-04-23 at 3 36 08 PM" src="https://user-images.githubusercontent.com/75461281/164984024-3381d52f-be49-4d37-be5c-f6d68c5e26d2.png">

#### chat.js
All the code and logic for chat will be done in chat.js file. The fisrt thing to do is to create a class ifo chat, with the properties of username, chatroom and created_at.  
````
class Chatroom {
  constructor(room, username){
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats')
  }
  ````
  We then create a async function to addchat which take a message, which is a string, getting a new date, making a chat object with all the properties and then wait for that object to be added using the add method in the chats collection and then we are returning the response.

````
 async addCaht(message){
    //format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    //save the chat document
    const response = await this.chats.add(chat);
    return response;
  }
}
````