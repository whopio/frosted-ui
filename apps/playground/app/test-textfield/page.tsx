import {
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  EyeClosedIcon,
  InfoCircledIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PaperPlaneIcon,
  Share2Icon,
  StarIcon,
} from '@radix-ui/react-icons';
import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Text,
  TextField,
  Theme,
  ThemePanel,
  Tooltip,
} from 'frosted-ui';

export default function Test() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme asChild>
          <div id="root">
            <ThemePanel defaultOpen={false} />
            <Container>
              <div style={{ padding: 'var(--space-5) 0' }}>
                <Grid columns="3" gap="6">
                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Just the input
                    </Heading>

                    <TextField.Input size="1" placeholder="Your name" />
                    <TextField.Input size="2" placeholder="Your name" />
                    <TextField.Input size="3" placeholder="Your name" />
                  </Flex>

                  <div />
                  <div />

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Icons (left)
                    </Heading>

                    <TextField.Root size="1">
                      <TextField.Slot>
                        <MagnifyingGlassIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search" />
                    </TextField.Root>

                    <TextField.Root size="2">
                      <TextField.Slot>
                        <MagnifyingGlassIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search" />
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <MagnifyingGlassIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Search" />
                    </TextField.Root>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Icons (right)
                    </Heading>

                    <TextField.Root size="1">
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot color="red">
                        <ExclamationTriangleIcon />
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="2">
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot color="red">
                        <ExclamationTriangleIcon />
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot color="red">
                        <ExclamationTriangleIcon />
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Icons (both sides)
                    </Heading>

                    <TextField.Root size="1">
                      <TextField.Slot>
                        <MagnifyingGlassIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot color="red">
                        <ExclamationTriangleIcon />
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="2">
                      <TextField.Slot>
                        <MagnifyingGlassIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot color="red">
                        <ExclamationTriangleIcon />
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <MagnifyingGlassIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot color="red">
                        <ExclamationTriangleIcon />
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Ghost buttons
                    </Heading>

                    <TextField.Root size="1">
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                      <TextField.Input placeholder="Your password" />
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="2">
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                      <TextField.Input placeholder="Your password" />
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <IconButton size="2" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                      <TextField.Input placeholder="Your password" />
                      <TextField.Slot>
                        <IconButton size="2" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <IconButton size="3" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                      <TextField.Input placeholder="Your password" />
                      <TextField.Slot>
                        <IconButton size="3" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Mixed content
                    </Heading>

                    <TextField.Root size="1">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="2">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot>
                        <IconButton size="2" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="2" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot gap="4">
                        <IconButton size="3" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="3" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Fringe (overrides)
                    </Heading>

                    <TextField.Root size="1">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot pr="0" gap="1">
                        <IconButton size="1" variant="soft" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="soft" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="2">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot px="1" gap="1">
                        <IconButton size="1" variant="soft" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="soft" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <InfoCircledIcon />
                      </TextField.Slot>
                      <TextField.Input placeholder="Your name" />
                      <TextField.Slot px="1" gap="1">
                        <IconButton size="2" variant="soft">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="2" variant="soft">
                          <StarIcon />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <EnvelopeOpenIcon />
                      </TextField.Slot>
                      <TextField.Input
                        placeholder="your.email"
                        defaultValue="benoit"
                      />
                      <TextField.Slot px="1" gap="2">
                        <Text size="3">@workos.com</Text>
                        <Tooltip content="Send email">
                          <IconButton>
                            <PaperPlaneIcon />
                          </IconButton>
                        </Tooltip>
                      </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root size="3">
                      <TextField.Slot>
                        <EnvelopeOpenIcon />
                      </TextField.Slot>
                      <TextField.Input
                        placeholder="your.email"
                        defaultValue="benoit"
                      />
                      <TextField.Slot px="1" gap="2">
                        <Text size="3">@workos.com</Text>
                        <Button>Send</Button>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>
                </Grid>
              </div>
            </Container>
          </div>
        </Theme>
      </body>
    </html>
  );
}
