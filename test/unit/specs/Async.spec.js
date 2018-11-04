import { shallowMount } from '@vue/test-utils'
import flushPromises from "flush-promises"
import Async from '@/components/Async.vue'
import axios from 'axios'

// jest.mock('axios', () => ({
//   get: jest.fn()
// }))
jest.mock('axios')

describe('Async.vue', () => {
  it('fetch results ES6', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'value'}))
    const wrapper = shallowMount(Async)

    wrapper.find('button').trigger('click')

    await flushPromises()
    expect(wrapper.vm.value).toBe('value')
  })

  it('fetch results with an error ES6', async () => {
    axios.get.mockImplementation(() => Promise.reject('error!'))
    const wrapper = shallowMount(Async)

    wrapper.find('button').trigger('click')

    await flushPromises()
    expect(wrapper.vm.value).toBe('error!')
  })

  it('fetch results ES7', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'value'}))
    const wrapper = shallowMount(Async)

    wrapper.vm.fetchResultsES7()

    await flushPromises()
    expect(wrapper.vm.value).toBe('value')
  })

  it('fetch results with an error ES7', async () => {
    axios.get.mockImplementation(() => Promise.reject('error!!!'))
    const wrapper = shallowMount(Async)

    wrapper.vm.fetchResultsES7()

    await flushPromises()
    expect(wrapper.vm.value).toBe('error!!!')
  })

  it('fetch results with api ES6', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'value'}))
    const wrapper = shallowMount(Async)

    wrapper.vm.fetchResultsWithApiES6()

    await flushPromises()
    expect(wrapper.vm.value).toBe('value')
  })

  it('fetch results with api has an error ES6', async () => {
    axios.get.mockImplementation(() => Promise.reject())
    const wrapper = shallowMount(Async)

    wrapper.vm.fetchResultsWithApiES6()

    await flushPromises()
    expect(wrapper.vm.value).toBe('hello')
  })

  it('fetch results with api ES7', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'value'}))
    const wrapper = shallowMount(Async)

    wrapper.vm.fetchResultsWithApiES7()

    await flushPromises()
    expect(wrapper.vm.value).toBe('value')
  })

  it('fetch results with api has an error ES7', async () => {
    axios.get.mockImplementation(() => Promise.reject())
    const wrapper = shallowMount(Async)

    wrapper.vm.fetchResultsWithApiES7()

    await flushPromises()
    expect(wrapper.vm.value).toBe('hello')
  })
})
