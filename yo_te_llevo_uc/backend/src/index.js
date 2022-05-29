require('dotenv').config();

const app = require('/home/afalarconm/Tec. y App Web/Proyecto-IIC2513-1-grupo-23/yo_te_llevo_uc/backend/src/app.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);