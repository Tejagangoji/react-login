const express = require('express');
const cors = require('cors');
const {OAuth2Client} = require('google-auth-library');
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

const clientId="109092872940-4tltrf0b6b91qi2vovsi9qrv7jddtebp.apps.googleusercontent.com";

const authClient = new OAuth2Client(clientId);

app.post('/token', async (req, res) => {
    const {idToken} = req.body;
    if(idToken) {
        const data = await authClient.verifyIdToken({idToken, audience: clientId});
        return res.json(data);
    }
})


app.listen(process.env.PORT || 5000, () => console.log("server is running"));
