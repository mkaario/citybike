import { screen, render } from '@testing-library/react'
import NavigationList from './NavigationList'
import {BrowserRouter as Router} from 'react-router-dom'

describe('NavigationList component', () => {
    test('renders navigation for journeys and stations', () => {
        render(<Router><NavigationList/></Router>);

        const navlinkELement = screen.getAllByTestId('navlink');
        expect(navlinkELement).toHaveLength(2);

    })
})