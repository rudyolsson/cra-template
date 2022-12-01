# 🧱 Components And Styling

## Styling Solutions
Styled components is used to write CSS-in-JS.
- [styled-components](https://styled-components.com/)

Component styles are declared in a `Component.styles.tsx` file as the same level as the component. They are imported in the component file and used in the following example to increase readability of styled-components:

```
import * as S from './styles'
import { ChildComponent } from '@/components/ChildComponent';

export const Component = () => {
  return (
    <S.Wrapper>
      <S.Title>Title Example</S.Title>
      <ChildComponent />
    </S.Wrapper>
  );
};
```

## Storybook

[Storybook](https://storybook.js.org/) is a great tool for developing and testing components in isolation. Think of it as a catalogue of all the components your application is using. Very useful for developing and discoverability of components.

[Storybook Story Example Code](../src/components/Elements/Button/Button.stories.tsx)
