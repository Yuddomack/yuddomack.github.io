// import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import PostView from '@/components/pages/PostView';

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = shallowMount(PostView); // Vue.extend(PostView);
    // const vm = Constructor.vm; // new Constructor().$mount();
    expect(Constructor.find('.post-view').exists()).toBe(true);
  });
});
