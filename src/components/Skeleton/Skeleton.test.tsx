import { render } from '@testing-library/react';
import Skeleton from './index';

describe('Skeleton Component', () => {
  it('renders the Skeleton component', () => {
    const { getByRole } = render(<Skeleton />);

    const skeletonElement = getByRole('status');
    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveClass('animate-pulse');
  });
});
