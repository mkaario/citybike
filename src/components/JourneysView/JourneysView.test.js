import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/test-utils'
import JourneysView from './JourneysView'

export const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(ctx.json('Nice dummy response'), ctx.delay(150))
  })
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe('JourneysView component', () => {

    test('renders JourneyDetail items after successfully getting data from state', async () => {
        const initialJourneys = [{
            id:1,
            distance:937,
            duration:476,
            departureTime:"2021-07-01T18:08:39",
            departureStationNumber:402,
            departureStationName:"Bermudankuja",
            returnTime:"2021-07-01T18:16:38",
            returnStationNumber:64,
            returnStationName:"Tyynenmerenkatu",
          },
          {
            id:2,
            distance:17,
            duration:26,
            departureTime:"2021-07-02T16:08:39",
            departureStationNumber:32,
            departureStationName:"Testikuja",
            returnTime:"2021-08-01T09:17:38",
            returnStationNumber:24,
            returnStationName:"Westendinasema",
          }]
      renderWithProviders(<JourneysView />, {preloadedState: {
        storedJourneys: {
            journeys: initialJourneys
      }}})
    
    const journeyElements = await screen.findAllByTestId('journey_detail_container');
      expect(journeyElements).not.toHaveLength(0)
    })
})
