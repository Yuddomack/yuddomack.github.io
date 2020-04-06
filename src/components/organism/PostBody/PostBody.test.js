// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import PostBody from '@/components/organism/PostBody';

describe('PostBody.vue', () => {
  it('should render correct contents', () => {
    const Constructor = shallowMount(PostBody);
    expect(Constructor.find('.content').exists()).toBe(true);
  });
});
