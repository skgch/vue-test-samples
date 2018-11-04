import { shallowMount } from '@vue/test-utils'
import Emitter from '@/components/Emitter.vue'

describe('Emiter.vue', () => {
  it('emit with mount', () => {
    const wrapper = shallowMount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0])
      .toEqual(['name', 'password'])
  })

  it('emit without mount', () => {
    const events = {}
    const $emit = (event, ...args) => {
      events[event] = [...args]
    }

    Emitter.methods.emitEvent.call({ $emit })

    expect(events.myEvent).toEqual(['name', 'password'])
  })
})
