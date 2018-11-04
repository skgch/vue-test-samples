import { shallowMount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it('message without authority', () => {
    const wrapper = factory()
    expect(wrapper.find('span').text()).toBe('権限がありません')
    expect(wrapper.find('button').text()).toBe('送信する')
  })

  it('message with authority', () => {
    const wrapper = factory({ isAdmin: true })
    expect(wrapper.find('span').text()).toBe('管理者権限を実行する')
    expect(wrapper.find('button').text()).toBe('送信する')
  })
})

const factory = (propsData) => {
  const msg = '送信する'
  return shallowMount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}
