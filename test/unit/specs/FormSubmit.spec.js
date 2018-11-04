import { shallowMount } from '@vue/test-utils'
import flushPromises from "flush-promises"
import FormSubmit from '@/components/FormSubmit.vue'

let url = ''
let data = ''
const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url,
      data = _data
      resolve()
    })
  }
}

describe('FormSubmit.vue', () => {
  it('render message', async () => {
    const wrapper = shallowMount(FormSubmit, {
      mocks: {
        $http: mockHttp
      }
    })

    wrapper.find('[data-username]').setValue('alice')
    wrapper.find('form').trigger('submit.prevent')

    await flushPromises()
    expect(wrapper.find('.message').text())
      .toBe('aliceさん、お問い合わせ、ありがとうございます。')
  })
})
