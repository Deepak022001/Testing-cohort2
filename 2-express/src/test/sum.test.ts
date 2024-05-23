import { it, describe, expect } from '@jest/globals';
import axios from 'axios';
import { app } from '../express';
import request from 'supertest';
import { response } from 'express';

describe('Tests the sum function', () => {
  it('should return 3 when 1+2 ', async () => {
    // const res = await axios.post('http://localhost:3000', {
    //   a: 1,
    //   b: 2,
    // });
    const res = await request(app).post('/sum').send({
      a: 1,
      b: 2,
    });
    expect(res.body.answer).toBe(3);
    expect(res.statusCode).toBe(200);
  });
  it('Number is too big ', async () => {
    // const res = await axios.post('http://localhost:3000', {
    //   a: 1,
    //   b: 2,
    // });
    const res = await request(app).post('/sum').send({
      a: 100000,
      b: 2,
    });
    expect(res.body.message).toBe(undefined);
    expect(res.statusCode).toBe(422);
  });
});
describe('multiplication', () => {
  it('should return right value if one value is 0', async () => {
    const res = await request(app).post('/multiply').send({
      a: 0,
      b: 1000,
    });
    expect(res.body.answer).toBe(0);
  });
});
