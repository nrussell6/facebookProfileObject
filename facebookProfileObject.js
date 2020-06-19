var facebookProfile = {
    userName: "", //Your username
    friends: 0, //how many friends you have
    messages: [], //an empty array that'll contain your messages.
    
    //Changes the user name
    addUserName: function newUserName(name){
        facebookProfile.userName = name;
    },
    
    //Adds a string message to your messages array.
    postMessage: function addMessage(message){
        facebookProfile.messages.push(message);
    },
    
    //deletes a message. Specify a number for which one in the array to delete, starting at 0
    deleteMessage: function removeMessage(index){
        facebookProfile.messages.splice(index, 1);
    },
    
    //Increases how many friends you have
    addFriend: function friendCountIncrease(){
        facebookProfile.friends++;
    },
    
    //reduces how many friends you have
    removeFriend: function friendCountDecrease(){
        facebookProfile.friends--;
    }
};

/******TEST CASES*****/
//addUserName - 
// facebookProfile.addUserName("Nick");
// console.log(facebookProfile.userName);

//postMessage
// facebookProfile.postMessage("Message 1");
// facebookProfile.postMessage("Message2");
// facebookProfile.postMessage("Message3");
// console.log(facebookProfile.messages);

//deleteMessage
//ADDING MESSAGES ONE CAN BE DELETED
// facebookProfile.postMessage("Message 1");
// facebookProfile.postMessage("Message2");
// facebookProfile.postMessage("Message3");
// console.log(facebookProfile.messages);
// facebookProfile.deleteMessage(1);
// console.log(facebookProfile.messages);

//addFriend
// facebookProfile.addFriend();
// console.log(facebookProfile.friends);

//removeFriend
// facebookProfile.addFriend();
// facebookProfile.addFriend();
// facebookProfile.addFriend();
// facebookProfile.addFriend();
// facebookProfile.removeFriend();
// console.log(facebookProfile.friends);
