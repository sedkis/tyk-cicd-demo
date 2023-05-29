
const getAuthToken = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
        req.authToken = req.headers.authorization.split(' ')[1];
    } else {
        req.authToken = null;
    }
    next();
};


export const isAuthenticated = (req, res, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req;

            if (authToken != "foobar") {
                return res
                .status(401)
                .send({ error: 'You are not authorized to make this request' });    
            }
            
            return next();
        } catch (e) {
            console.error(e)
            return res
                .status(401)
                .send({ error: 'You are not authorized to make this request' });
        }
    });
};


// export const isAdminAuthenticated = (req, res, next) => {
//     getAuthToken(req, res, async () => {
//         const { authToken } = req;
//             if (authToken == process.env.SECRET) {
//                 return next();
//             }   

//             console.warn("someone is doing funky stuff", authToken)

//             return res
//                 .status(401)
//                 .send({ error: 'You are not authorized to make this request' });
//     });
// };