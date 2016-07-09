jest.unmock('../request')

import Request from '../request'

const request = Request('http://test.com/api/')

describe('Request', () => {
  it('#get', () => {
    expect(request.get).toBeDefined()
  })

  it('#post', () => {
    expect(request.post).toBeDefined()
  })

  it('#put', () => {
    expect(request.put).toBeDefined()
  })

  it('#delete', () => {
    expect(request.delete).toBeDefined()
  })
})
