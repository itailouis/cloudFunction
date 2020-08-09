module.exports = {
    listenForAppleResponseBody: (payload) => {
        
        let parsedMessage = payload;
        console.log(parsedMessage);
        return parsedMessage;
    }
};