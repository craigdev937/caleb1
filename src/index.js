import express from "express";

(async () => {
    const app = express();

    app.get("/", (req, res) => res.json({
        APO: "Welcome to AWS!"
    }));

    const port = process.env.PORT || 9000;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();




