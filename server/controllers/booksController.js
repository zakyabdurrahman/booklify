const { default: axios } = require("axios");
const baseUrl = require("../utils/baseUrl");

class BooksController {
    static async readAll(req, res, next) {
        try {
            let {title} = req.query;
            if (!title) title = ''; 

            const response = await axios.get(`${baseUrl}/volumes`, {
                params: {
                    q: `intitle:${title}`
                }
            })

            
            
            res.status(200).json({
                message: 'Success hitting google books',
                data: response.data.items.map((item) => {
                    

                    const {
                        id,
                        volumeInfo : {
                            title,
                            authors,
                            publisher,
                            publishedDate,
                            pageCount,
                            categories,
                            description,
                            imageLinks,
                            language
                        }
                    } = item
                    
                    let newObj = {
                        title,
                        authors,
                        publisher,
                        publishedDate,
                        pageCount,
                        categories,
                        description,
                        imageLinks,
                        id,
                        language
                    }


                    return newObj
                }),
                
                
            })

        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}

module.exports = BooksController;