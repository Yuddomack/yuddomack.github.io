import Vue from 'vue';
import PostView from './index.vue';

describe('PostView', () => {
  test('PostView Component', () => {
    const cmp = new Vue(PostView).$mount();
    expect(cmp.name).toBe('PostView');
  });
});
