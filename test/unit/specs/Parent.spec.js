import { mount, shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  it('renders a parent', () => {
    const shallowWrapper = shallowMount(Parent)
    const mountWrapper = mount(Parent)
    // expect(shallowWrapper.text()).toMatch('Child component')
    expect(mountWrapper.text()).toMatch('Child component')
  })
})
