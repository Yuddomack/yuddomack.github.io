// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import PostHeader from '@/components/organism/PostHeader';

describe('PostHeader.vue', () => {
  it('should render correct contents', () => {
    const Constructor = shallowMount(PostHeader);
    expect(Constructor.find('.navBar').exists()).toBe(true);
  });
});
