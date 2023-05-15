import { render } from '@testing-library/react';

import GundamUi from './gundam-ui';

describe('GundamUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GundamUi />);
    expect(baseElement).toBeTruthy();
  });
});
