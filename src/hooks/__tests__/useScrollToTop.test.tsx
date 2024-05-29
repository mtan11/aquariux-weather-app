import { render, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useScrollToTop } from '../useScrollToTop';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const spyScrollTo = jest.fn();
Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });

describe('useScrollToTop', () => {
  it('should scroll to top on route change', () => {
    const TestComponent = () => {
      useScrollToTop();
      return <div>Test Component</div>;
    };

    render(
      <MemoryRouter initialEntries={['/initial']}>
        <TestComponent />
      </MemoryRouter>
    );

    act(() => {
      history.push('/new-route');
    });
    expect(spyScrollTo).toHaveBeenCalledWith(0, 0);
  });
});
