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
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
  Theme,
  ThemePanel,
} from '@whop/frosted-ui';
import WhopLogo from './WhopLogo';

export default function Dashboard() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* TODO: NextThemeProvider creates some infinite loop and app crashes */}
        {/* <NextThemeProvider> */}
        <Theme asChild appearance="dark" grayColor="gray" accentColor="iris">
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
                    <TabsRoot defaultValue="1" className="-mb-[1px]">
                      <TabsList size="2">
                        <TabsTrigger value="Reselling">Reselling</TabsTrigger>
                        <TabsTrigger value="Trading">Trading</TabsTrigger>
                        <TabsTrigger value="Sports">Sports</TabsTrigger>
                        <TabsTrigger value="picks">picks</TabsTrigger>
                        <TabsTrigger value="E-commerce">E-commerce</TabsTrigger>
                        <TabsTrigger value="Life">Life</TabsTrigger>
                        <TabsTrigger value="hacks">hacks</TabsTrigger>
                        <TabsTrigger value="Business">Business</TabsTrigger>
                      </TabsList>
                    </TabsRoot>
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
                  <Button variant="classic" size="4" mt="6">
                    Get some money!
                  </Button>
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
                    <Heading size="7">#172,264,047</Heading>
                    <Text size="2" color="gray">
                      Purchased on Whop
                    </Text>
                  </div>
                  <div className="text-center">
                    <Heading size="7">#172,264,047</Heading>
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
