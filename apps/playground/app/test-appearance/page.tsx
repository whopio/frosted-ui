import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Separator,
  Switch,
  Text,
  TextArea,
  Theme,
  ThemePanel,
} from 'frosted-ui';
import * as React from 'react';

export default function Test() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme asChild appearance="dark">
          <div id="root">
            <ThemePanel />

            <DocsSection title="Nested appearances test">
              <SampleNestedUI title="Global appearance">
                <Theme asChild appearance="dark">
                  <SampleNestedUI title="Always dark">
                    <Theme asChild appearance="light">
                      <SampleNestedUI title="Always light">
                        <Theme asChild appearance="dark">
                          <SampleNestedUI title="Always dark" />
                        </Theme>
                      </SampleNestedUI>
                    </Theme>
                  </SampleNestedUI>
                </Theme>
              </SampleNestedUI>
            </DocsSection>

            <DocsSection title="Nested colors test">
              <SampleNestedUI title="Global color">
                <Theme asChild accentColor="mint">
                  <SampleNestedUI title="Always mint">
                    <Theme asChild accentColor="amber">
                      <SampleNestedUI title="Always amber">
                        <Theme asChild accentColor="tomato">
                          <SampleNestedUI title="Always tomato" />
                        </Theme>
                      </SampleNestedUI>
                    </Theme>
                  </SampleNestedUI>
                </Theme>
              </SampleNestedUI>
            </DocsSection>

            <DocsSection title="Mixed nested themes test">
              <SampleNestedUI title="Global theme">
                <Theme asChild accentColor="mint" appearance="dark">
                  <SampleNestedUI title="Dark, Mint">
                    <Theme asChild accentColor="amber" appearance="light">
                      <SampleNestedUI title="Light, Amber">
                        <Theme asChild accentColor="tomato" appearance="dark">
                          <SampleNestedUI title="Dark, Tomato" />
                        </Theme>
                      </SampleNestedUI>
                    </Theme>
                  </SampleNestedUI>
                </Theme>
              </SampleNestedUI>
            </DocsSection>
          </div>
        </Theme>
      </body>
    </html>
  );
}

const SampleNestedUI = React.forwardRef<
  React.ElementRef<typeof Flex>,
  React.ComponentPropsWithoutRef<typeof Flex>
>(({ children, title, ...props }, forwardedRef) => {
  return (
    <Flex
      p="5"
      gap="9"
      {...props}
      ref={forwardedRef}
      style={{
        boxShadow: '0 0 0 1px var(--gray-a6)',
        borderRadius: 'var(--radius-2)',
      }}
    >
      <div>
        <Heading size="2" trim="start" mb="3">
          {title}
        </Heading>
        <Flex direction="column" gap="3">
          <Grid gap="1">
            <Text as="p" weight="bold">
              Feedback
            </Text>
            <TextArea variant="classic" placeholder="Your feedback" />
          </Grid>
          <Flex asChild justify="between">
            <label>
              <Text color="gray" size="2">
                Attach screenshot?
              </Text>
              <Switch size="1" defaultChecked highContrast />
            </label>
          </Flex>
          <Grid columns="2" gap="2">
            <Button variant="surface">Back</Button>
            <Button variant="classic">Submit</Button>
          </Grid>
        </Flex>
      </div>

      {children}
    </Flex>
  );
});
SampleNestedUI.displayName = 'SampleNestedUI';

function DocsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Container mx="6">
        <Section size="2">
          <Heading size="6" weight="regular" mb="4" as="h2">
            {title}
          </Heading>
          {children}
        </Section>
      </Container>
      <Separator size="4" />
    </>
  );
}
