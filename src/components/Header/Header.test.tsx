import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index';

describe('Header Component', () => {
  it('renders logo and navigation links correctly', () => {
    const { getByAltText, getByTitle, getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByTitle('Aquariux')).toBeInTheDocument();

    expect(getByText('Home')).toBeInTheDocument();
  });

  it('navigates to Home page when Home link is clicked', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    const homeLink = getByText('Home');
    fireEvent.click(homeLink);

    // Assuming that the Home route is represented by '/'
    expect(window.location.pathname).toBe('/');
  });
});
