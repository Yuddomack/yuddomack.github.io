import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import PostToc from '@/components/molecule/PostToc';

// [Vue warn]: Failed to resolve directive: @bind
// [Vue warn]: Failed to resolve directive: @on
// 이게 뭘까 -> v-on:click -> @click인데 eslint에서 @v-on:click으로 규칙이 되어있네?
describe('PostToc.vue', () => {
  let Constructor = null;

  beforeAll(() => {
    Constructor = shallowMount(PostToc, {});
  });

  it('should render correct contents', () => {
    expect(Constructor.find('.tocHeader').exists()).toBe(true);
  });

  // TODO: 두 케이스는 서로에게 의존적인데, 이걸 현명하게 분리하는 케이스를 만드는 방법은?
  // [Vue warn]: You may have an infinite update loop in a component render function.
  it('should activate toc header', async () => {
    const activeTocButton = Constructor.find('.see').find('button');
    activeTocButton.trigger('click');
    await Vue.nextTick();

    const asideClasses = Constructor.find('aside').classes();
    expect(asideClasses).toContain('active');
  });

  it('should deactivate toc header', async () => {
    const deactiveTocButton = Constructor.find('.tocClose').find('button');
    deactiveTocButton.trigger('click');
    await Vue.nextTick();

    const asideClasses = Constructor.find('aside').classes();
    expect(asideClasses).not.toContain('active');
  });
});
