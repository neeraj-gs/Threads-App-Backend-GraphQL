"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express4_1 = require("@apollo/server/express4");
const graphql_1 = __importDefault(require("./graphql"));
const express_1 = __importDefault(require("express"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = Number(process.env.PORT) || 8000;
        app.use(express_1.default.json()); //any requirest as json we need to parse it
        app.get('/', (req, res) => {
            res.json({ message: 'Server is Running' });
        });
        //we cant await at global level so write entire code into a fucntion and run inside it
        // const gqlServer = await expressMiddleware(createApolloGraphqlServer())
        app.use('/graphql', (0, express4_1.expressMiddleware)(yield (0, graphql_1.default)()));
        app.listen(PORT, () => {
            console.log(`Server is Running at http://localhost:${PORT}`);
        });
        //for any trs file we need to first compile or buidl it and tehn run the code
    });
}
init();
