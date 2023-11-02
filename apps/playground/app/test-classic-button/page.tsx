import { Pencil2Icon } from '@radix-ui/react-icons';
import {
  Button,
  Container,
  Flex,
  Section,
  Theme,
  ThemePanel,
  themeAccentColorsOrdered,
} from '@whop/frosted-ui';

export default function Test() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme asChild>
          <div id="root">
            <ThemePanel defaultOpen={false} />
            <Container px="5">
              <Section>
                <Flex direction="column" gap="2">
                  {themeAccentColorsOrdered.map((color) => (
                    <Flex key={color} gap="2">
                      <Button variant="classic" color={color}>
                        <Pencil2Icon />
                        Edit
                      </Button>
                      <Button variant="classic" color={color} highContrast>
                        <Pencil2Icon />
                        Edit
                      </Button>
                      <Button color={color} ml="4">
                        <Pencil2Icon />
                        Edit
                      </Button>
                      <Button color={color} highContrast>
                        <Pencil2Icon />
                        Edit
                      </Button>
                      <Button variant="soft" color={color} ml="4">
                        <Pencil2Icon />
                        Edit
                      </Button>
                      <Button variant="soft" color={color} highContrast>
                        <Pencil2Icon />
                        Edit
                      </Button>
                    </Flex>
                  ))}
                </Flex>
              </Section>
            </Container>
          </div>
        </Theme>
      </body>
    </html>
  );
}
