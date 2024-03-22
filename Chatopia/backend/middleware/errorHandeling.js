// when a route is not found, this middleware will be called and will send a 404 status code
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}
/* const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: `${err.message} - Status Code: ${statusCode}`,
        // stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
} */

// This middleware will be called if there is an error in the code
const errorHandler = (err, req, res, next) => {                               
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // if the status code is 200,(because the request was successful) then we will set the status code to 500 (because there was an error in the code) else we will set the status code to the status code that was sent
    res.status(statusCode);
    const errorPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Error ${statusCode}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f8f9fa;
                    color: #343a40;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .error-container {
                    max-width: 600px;
                    padding: 40px;
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    font-size: 48px;
                    margin-bottom: 20px;
                    color: #dc3545;
                }
                p {
                    font-size: 24px;
                    margin-bottom: 30px;
                }
                a {
                    color: #007bff;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class="error-container">
                <h1>OPPS! Error ${statusCode}</h1>
                <p>${err.message}</p>
            </div>
        </body>
        </html>
    `;
    res.send(errorPage);
}



module.exports = { notFound, errorHandler };