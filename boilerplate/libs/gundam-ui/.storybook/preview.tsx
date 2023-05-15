import type { DecoratorFunction } from '@storybook/addons';
import type { StoryFn } from '@storybook/react';

import { GlobalStyle } from '../src/global-style';

const withGlobalStyleDecorator: DecoratorFunction<JSX.Element> = (
  StoryComponent: StoryFn
) => (
  <>
    <GlobalStyle />
    <StoryComponent />
  </>
);

const decorators = [withGlobalStyleDecorator];

export { decorators };
