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
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
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

                    <TextFieldInput size="1" placeholder="Your name" />
                    <TextFieldInput size="2" placeholder="Your name" />
                    <TextFieldInput size="3" placeholder="Your name" />
                  </Flex>

                  <div />
                  <div />

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Icons (left)
                    </Heading>

                    <TextFieldRoot size="1">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Search" />
                    </TextFieldRoot>

                    <TextFieldRoot size="2">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Search" />
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Search" />
                    </TextFieldRoot>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Icons (right)
                    </Heading>

                    <TextFieldRoot size="1">
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot color="red">
                        <ExclamationTriangleIcon />
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="2">
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot color="red">
                        <ExclamationTriangleIcon />
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot color="red">
                        <ExclamationTriangleIcon />
                      </TextFieldSlot>
                    </TextFieldRoot>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Icons (both sides)
                    </Heading>

                    <TextFieldRoot size="1">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot color="red">
                        <ExclamationTriangleIcon />
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="2">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot color="red">
                        <ExclamationTriangleIcon />
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot color="red">
                        <ExclamationTriangleIcon />
                      </TextFieldSlot>
                    </TextFieldRoot>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Ghost buttons
                    </Heading>

                    <TextFieldRoot size="1">
                      <TextFieldSlot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your password" />
                      <TextFieldSlot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="2">
                      <TextFieldSlot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your password" />
                      <TextFieldSlot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <IconButton size="2" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your password" />
                      <TextFieldSlot>
                        <IconButton size="2" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <IconButton size="3" variant="ghost" color="gray">
                          <LockClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your password" />
                      <TextFieldSlot>
                        <IconButton size="3" variant="ghost" color="gray">
                          <EyeClosedIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Mixed content
                    </Heading>

                    <TextFieldRoot size="1">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="2">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot>
                        <IconButton size="1" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot>
                        <IconButton size="2" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="2" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot gap="4">
                        <IconButton size="3" variant="ghost" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="3" variant="ghost" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>
                  </Flex>

                  <Flex direction="column" align="start" gap="3">
                    <Heading size="3" mb="2">
                      Fringe (overrides)
                    </Heading>

                    <TextFieldRoot size="1">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot pr="0" gap="1">
                        <IconButton size="1" variant="soft" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="soft" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="2">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot px="1" gap="1">
                        <IconButton size="1" variant="soft" color="gray">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="1" variant="soft" color="gray">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <InfoCircledIcon />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Your name" />
                      <TextFieldSlot px="1" gap="1">
                        <IconButton size="2" variant="soft">
                          <Share2Icon />
                        </IconButton>
                        <IconButton size="2" variant="soft">
                          <StarIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <EnvelopeOpenIcon />
                      </TextFieldSlot>
                      <TextFieldInput
                        placeholder="your.email"
                        defaultValue="benoit"
                      />
                      <TextFieldSlot px="1" gap="2">
                        <Text size="3">@workos.com</Text>
                        <Tooltip content="Send email">
                          <IconButton>
                            <PaperPlaneIcon />
                          </IconButton>
                        </Tooltip>
                      </TextFieldSlot>
                    </TextFieldRoot>

                    <TextFieldRoot size="3">
                      <TextFieldSlot>
                        <EnvelopeOpenIcon />
                      </TextFieldSlot>
                      <TextFieldInput
                        placeholder="your.email"
                        defaultValue="benoit"
                      />
                      <TextFieldSlot px="1" gap="2">
                        <Text size="3">@workos.com</Text>
                        <Button>Send</Button>
                      </TextFieldSlot>
                    </TextFieldRoot>
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
