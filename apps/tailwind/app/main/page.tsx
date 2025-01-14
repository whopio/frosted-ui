import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Heading,
  IconButton,
  Inset,
  Separator,
  Tabs,
  Text,
  Theme,
  ThemePanel,
  Tooltip,
} from 'frosted-ui';
import localFont from 'next/font/local';
import WhopLogo from './WhopLogo';

const interVariable = localFont({
  src: '../../fonts/InterVariable.woff2',
  variable: '--inter-variable',
});

export default function Dashboard() {
  return (
    <html lang="en" suppressHydrationWarning className={interVariable.variable}>
      <body>
        {/* TODO: NextThemeProvider creates some infinite loop and app crashes */}
        {/* <NextThemeProvider> */}
        <Theme asChild appearance="dark" grayColor="gray" accentColor="blue">
          <div id="root" className="w-full bg-gray-1">
            <ThemePanel />
            <header className="sticky top-0 backdrop-blur-lg z-10 backdrop-saturate-150">
              <div
                className="absolute inset-0 bg-panel-translucent -z-[1]"
                style={{ filter: 'url(#myFilter' }}
              />
              <Container size="4">
                <Box>
                  <div className="py-4 flex items-center">
                    <WhopLogo className="w-[137px] h-auto" />
                  </div>
                </Box>
              </Container>

              <Separator color="gray" orientation="horizontal" size="4" />
              <Container size="4">
                <Box>
                  <div className="flex items-center">
                    <Tabs.Root defaultValue="1" className="-mb-[1px]">
                      <Tabs.List size="2">
                        <Tabs.Trigger value="Reselling">Reselling</Tabs.Trigger>
                        <Tabs.Trigger value="Trading">Trading</Tabs.Trigger>
                        <Tabs.Trigger value="Sports">Sports</Tabs.Trigger>
                        <Tabs.Trigger value="picks">picks</Tabs.Trigger>
                        <Tabs.Trigger value="E-commerce">
                          E-commerce
                        </Tabs.Trigger>
                        <Tabs.Trigger value="Life">Life</Tabs.Trigger>
                        <Tabs.Trigger value="hacks">hacks</Tabs.Trigger>
                        <Tabs.Trigger value="Business">Business</Tabs.Trigger>
                      </Tabs.List>
                    </Tabs.Root>
                  </div>
                </Box>
              </Container>
              <Separator
                color="gray"
                orientation="horizontal"
                size="4"
                className="relative z-[1]"
              />
            </header>
            <Container size="4">
              <div className="pt-[120px] flex flex-nowrap">
                <div className="w-full">
                  <Heading size="9" trim="start">
                    A marketplace for really cool internet products.
                  </Heading>
                  <Text as="p" color="gray" size="5" mt="4">
                    Entrepreneurial communities and software to help you earn
                    online.
                  </Text>
                  <Tooltip content="This is a tooltip">
                    <Button variant="classic" size="4" mt="6">
                      Get some money!
                    </Button>
                  </Tooltip>
                </div>
                <div className="w-[500px] shrink-0 pl-12">
                  <div className="flex gap-2 items-center">
                    <Heading size="5">Recent activity</Heading>
                    <Text size="2" color="blue" trim="both">
                      LIVE
                    </Text>
                  </div>

                  <div
                    className="flex flex-col gap-3 mt-4"
                    style={{
                      WebkitMaskImage:
                        'linear-gradient(175deg, black, transparent)',
                    }}
                  >
                    <ActivityCard title="Goat Sports Club" />
                    <ActivityCard title="Parlay Kings" />
                    <ActivityCard title="SneakerBot 2.0" />
                    <ActivityCard title="UI Design Course" />
                  </div>
                </div>
              </div>
            </Container>
            <div className="mt-12 bg-gray-3">
              <Container>
                <div className="flex justify-center gap-12 py-12">
                  <div className="text-center">
                    <Heading size="7">#172,264,047</Heading>
                    <Text size="2" color="gray">
                      Purchased on Whop
                    </Text>
                  </div>
                  <div className="text-center">
                    <Heading size="7" color="magenta">
                      #172,264,047
                    </Heading>
                    <Text size="2" color="gray">
                      Purchased on Whop
                    </Text>
                  </div>
                  <div className="text-center">
                    <Heading size="7" color="pink">
                      #172,264,047
                    </Heading>
                    <Text size="2" color="gray">
                      Purchased on Whop
                    </Text>
                  </div>
                </div>
              </Container>
            </div>
            <div className="mt-10">
              <Container>
                <div className="flex items-center justify-between">
                  <div>
                    <Heading size="5">Trending Products</Heading>
                    <Text size="3" color="gray">
                      Products currently in high demand.
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <IconButton variant="soft" color="gray" size="3">
                      <ArrowLeftIcon width="20" height="20" />
                    </IconButton>
                    <IconButton variant="soft" color="gray" size="3">
                      <ArrowRightIcon width="20" height="20" />
                    </IconButton>
                    <Button variant="surface" size="3">
                      See all <ChevronRightIcon width="16" height="16" />
                    </Button>
                  </div>
                </div>
                <div className="flex gap-4 py-8">
                  <GalleryCard title="Parlay Kings" />
                  <GalleryCard title="Parlay Kings" />
                  <GalleryCard title="Parlay Kings" />
                </div>
              </Container>
            </div>
          </div>
        </Theme>
        {/* </NextThemeProvider> */}
        <svg>
          <defs>
            <filter id="myFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.55"
                numOctaves="2"
              />
              <feComponentTransfer>
                <feFuncA type="linear" slope="89" intercept="-15" />
              </feComponentTransfer>
              <feComposite in="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
      </body>
    </html>
  );
}

const ActivityCard = ({ title }: { title: string }) => {
  return (
    <Card variant="surface">
      <div className="flex items-center gap-4">
        <Avatar size="3" fallback="AB" />
        <div>
          <Heading size="3">{title}</Heading>
          <Text size="2" color="gray">
            Someone just paid 99$
          </Text>
        </div>
      </div>
    </Card>
  );
};

const GalleryCard = ({ title }: { title: string }) => {
  return (
    <Card variant="classic" size="2" className="w-[400px]">
      <Inset side="top" pb="current">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          className="w-full h-[160px]"
        />
      </Inset>
      <div className="flex items-center gap-4">
        <Avatar size="3" fallback="AB" />
        <div>
          <Heading size="3">{title}</Heading>
          <Text size="2" color="gray">
            Experience the thrill of victory...
          </Text>
        </div>
      </div>
    </Card>
  );
};
