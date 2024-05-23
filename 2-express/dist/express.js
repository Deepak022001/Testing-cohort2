"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;
    res.json({ answer: result });
});
exports.app.post('/sum', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    if (a > 100000 || b > 100000) {
        return res.status(411).json({
            message: 'Sorry we dont support big numbers',
        });
    }
    const result = a + b;
    res.json({ answer: result });
});
exports.app.post('/multiply', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a * b;
    res.json({ answer: result });
});