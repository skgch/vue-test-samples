import { mount } from '@vue/test-utils'
import QuantityComponent from '@/components/QuantityComponent'

describe('Counter', () => {

  it('quantity is zero by default', () => {
    const wrapper = mount(QuantityComponent)
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Cursor up sets quantity to 1', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(1)
  })

  it('Cursor down reduce quantity by 1', () => {
    const wrapper = mount(QuantityComponent)
    wrapper.vm.quantity = 5
    wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(4)
  })
})
