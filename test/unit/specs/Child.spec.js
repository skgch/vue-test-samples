import { mount, shallowMount } from '@vue/test-utils'
import Child from '@/components/Child.vue'

describe('Child.vue', () => {
  it('renders a child', () => {
    const shallowWrapper = shallowMount(Child)
    const mountWrapper = mount(Child)
    expect(shallowWrapper.text()).toMatch('Child component')
    expect(mountWrapper.text()).toMatch('Child component')
  })
})
