//class instances 

const chatroom = new Chatroom('general', 'aashi');
//get the chat and render 
  chatroom.getChats((data) => {
    console.log(data);
  });