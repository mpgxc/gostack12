"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWord = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWord(request, response) {
    var user = CreateUser_1.default({
        name: "mpgxc",
        email: "mpgxc@live.com",
        password: 12345,
        techs: [
            "Node",
            "React",
            "React Native",
            { title: "React", experience: 12345 },
            { title: "React Native", experience: 123 }
        ]
    });
    return response.json({ user: user });
}
exports.helloWord = helloWord;
