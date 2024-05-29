import { render } from '@testing-library/react';
import ErrorMessage from './index';

describe('ErrorMessage component', () => {
  it('renders without crashing', () => {
    render(<ErrorMessage message="Test error message" />);
  });

  it('renders title and message correctly', () => {
    const { getByText } = render(
      <ErrorMessage title="Error Title" message="Test error message" />
    );
    expect(getByText('Error Title')).toBeInTheDocument();
    expect(getByText('TEST ERROR MESSAGE')).toBeInTheDocument(); // Message is converted to uppercase
  });

  it('applies custom className correctly', () => {
    const { container } = render(
      <ErrorMessage message="Test error message" className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
