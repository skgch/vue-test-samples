import { shallowMount } from '@vue/test-utils'
import NumberRender from '@/components/NumberRender.vue'

describe('NumberRender.vue', () => {
  it('render even', () => {
    const wrapper = shallowMount(NumberRender, {
      propsData: {
        even: true
      }
    })
    expect(wrapper.text()).toBe('2, 4, 6, 8')
  })

  it('render odd', () => {
    const localThis = { even: false }
    expect(NumberRender.computed.numbers.call(localThis)).toBe('1, 3, 5, 7, 9')
  })
})
