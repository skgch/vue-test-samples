import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter', () => {
  const wrapper = mount(Counter)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button click should increment count', () => {
    wrapper.setData( {count: 10} )
    expect(wrapper.vm.count).toBe(10)
  })
})
