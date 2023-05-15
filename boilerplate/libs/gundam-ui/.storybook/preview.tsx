import type { DecoratorFunction } from '@storybook/addons';
import type { StoryFn } from '@storybook/react';
import { ThemeProvider } from '../src/lib/theme-provider';
import { Sandbox } from '../src/lib/Sandbox';

const withGlobalStyleDecorator: DecoratorFunction<JSX.Element> = (
  StoryComponent: StoryFn
) => (
  <ThemeProvider>
    <Sandbox>
      <StoryComponent />
    </Sandbox>
  </ThemeProvider>
);

const decorators = [withGlobalStyleDecorator];

export { decorators };
