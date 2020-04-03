import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';

describe('HellowWorld', () => {
  test('HelloWorld Component', () => {
    const cmp = new Vue(HelloWorld).$mount();
    expect(cmp.msg).toBe('Welcome to Your Vue.js App');
  });
});
