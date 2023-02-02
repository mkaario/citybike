import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import StationView from "./StationView";

export const handlers = [
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.json("Nice dummy response"), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("StationView component", () => {
  test("renders StationDetail items after successfully getting data from state", async () => {
    const initialStations = [
      {
        mapId: 1,
        id: 501,
        nameFinnish: "Hanasaari",
        nameSwedish: "Hanaholmen",
        NameEnglish: "Hanasaari",
        osoite: "Hanasaarenranta 1",
        kaupunki: "Espoo",
        stad: "Esbo",
        operaattori: "CityBike Finland",
        kapasiteetti: 10,
        x: 24.840319,
        y: 60.16582,
      },
      {
        mapId: 2,
        id: 503,
        nameFinnish: "Keilalahti",
        nameSwedish: "Kägelviken",
        NameEnglish: "Keilalahti",
        osoite: "Keilalahdentie 2",
        kaupunki: "Espoo",
        stad: "Esbo",
        operaattori: "CityBike Finland",
        kapasiteetti: 28,
        x: 24.827467,
        y: 60.171524,
      },
    ];
    const initialSelectedStation = {
      mapId: 2,
      id: 503,
      nameFinnish: "Keilalahti",
      nameSwedish: "Kägelviken",
      NameEnglish: "Keilalahti",
      osoite: "Keilalahdentie 2",
      kaupunki: "Espoo",
      stad: "Esbo",
      operaattori: "CityBike Finland",
      kapasiteetti: 28,
      x: 24.827467,
      y: 60.171524,
    };
    renderWithProviders(<StationView />, {
      preloadedState: {
        storedStations: {
          stations: initialStations,
          selectedStation: initialSelectedStation,
        },
      },
    });

    const stationElements = await screen.findAllByTestId(
      "station_detail_container"
    );
    expect(stationElements).not.toHaveLength(0);
  });
});
