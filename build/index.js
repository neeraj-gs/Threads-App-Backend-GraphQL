"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 8000;
app.get('/', (req, res) => {
    res.json({ message: 'Server is Running' });
});
app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`);
});
//for any trs file we need to first compile or buidl it and tehn run the code
