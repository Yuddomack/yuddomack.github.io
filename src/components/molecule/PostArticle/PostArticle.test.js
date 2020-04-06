// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import PostArticle from '@/components/molecule/PostArticle';

describe('PostHeader.vue', () => {
  it('should render correct contents', () => {
    const Constructor = shallowMount(PostArticle);
    expect(Constructor.find('article').exists()).toBe(true);
  });
});
