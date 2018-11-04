import { mount, shallowMount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    const wrapper = mount(Greeting)
    // console.log(wrapper.html())
    // expect(wrapper.html().includes('Vue and TDD')).toBe(true)
    expect(wrapper.text()).toMatch('Vue and TDD')
  })
})
