

const appleRepository = require("../repositories/apple-decord");
const { listenForAppleResponseBody } = appleRepository;


module.exports = {
    appleHome: (req, res) => {
        return res.status(200).json({
            success: true,
            message: "apple route confirmed :)",
        })
    },

    pushEvents: async (req, res) => {
        try {
			console.log(req.body)
		let messageResponse = await listenForAppleResponseBody(req.body.responseBody);
		
		return res.status(200).json({
            success: true,
            message: "apple route confirmed :)",
			data: messageResponse,
        });
                     
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't process object ",
                data: error
            })                        
        }
    },

   

    

};