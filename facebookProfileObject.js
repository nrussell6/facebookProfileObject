var facebookProfile = {
    userName: "",
    friends: 0,
    messages: [],
    addUserName: function newUserName(name){
        facebookProfile.userName = name;
    },
    postMessage: function addMessage(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function removeMessage(index){
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function friendCountIncrease(){
        facebookProfile.friends++;
    },
    removeFriend: function friendCountDecrease(){
        facebookProfile.friends--;
    }
};
