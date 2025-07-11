import {
  AccessibilityIcon,
  CameraIcon,
  ChevronDownIcon,
  ClockIcon,
  CodeIcon,
  CookieIcon,
  DiscordLogoIcon,
  EnvelopeOpenIcon,
  GearIcon,
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
  MixerVerticalIcon,
  MobileIcon,
  // App icons
  NotionLogoIcon,
  ReloadIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import {
  Accordion,
  Avatar,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  DropdownMenu,
  Heading,
  IconButton,
  Inset,
  Popover,
  Separator,
  Strong,
  Text,
  TextArea,
  TextField,
  Theme,
  ThemePanel,
  Tooltip,
} from 'frosted-ui';
// import { HideCursor } from './hide-cursor';
/* Inter variable setup */
import localFont from 'next/font/local';
const interVariable = localFont({
  src: '../../fonts/InterVariable.woff2',
  variable: '--inter-variable',
});
const SidebarButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className={
        'fui-reset flex items-center text-gray-a10 gap-4 w-full h-[42px] pl-4 rounded-md hover:bg-gray-a3 hover:text-gray-a12 dark:hover:shadow-[0px_0px_0px_1px_var(--gray-a4)_inset] dark:hover:bg-[linear-gradient(_95deg,transparent,transparent,transparent,var(--accent-a4)_)]'
      }
    >
      {children}
    </button>
  );
};
const DashboardCard = () => {
  return (
    <div className="flex-1 relative min-h-[202px] p-6 border border-gray-a3 rounded-lg overflow-hidden bg-panel-solid">
      <WhopSVG />
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div
            className={[
              'relative flex w-[60px] h-[60px] justify-center items-center rounded-[18px] border border-gray-a3 bg-panel-solid',
              "after:content-[''] after:absolute after:inset-[12px] after:border after:border-green-6 after:rounded-3 after:bg-gradient-to-b from-green-a3 to-transparent",
            ].join(' ')}
          />
          <div className="flex flex-col gap-2">
            <Text color="gray" size="1" trim="both">
              <Tooltip content="SWAG" open>
                <Strong>APPS SUPPORTED</Strong>
              </Tooltip>
            </Text>
            <Accordion.Root
              type="multiple"
              // collapsible
              style={{ width: 600 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <Accordion.Item value="item-1">
                  <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                  <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2">
                  <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
                  <Accordion.Content>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3">
                  <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
                  <Accordion.Content>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.Content>
                </Accordion.Item>
              </div>
            </Accordion.Root>
            <div className="flex justify-center gap-1 px-2 py-1 rounded-3 border border-gray-a3">
              <NotionLogoIcon width="20" height="20" className="text-blue-9" />
              <DiscordLogoIcon width="20" height="20" className="text-lime-9" />
              <LinkedInLogoIcon width="20" height="20" className="text-yellow-9" />
              <GitHubLogoIcon width="20" height="20" className="text-tomato-9" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Heading size="3" trim="both">
            Trading
          </Heading>
          <Text size="2" color="gray" trim="both">
            Choose this to offer access to trading insights, tips, and lessons.
          </Text>
        </div>
      </div>
    </div>
  );
};

const WhopSVG = () => {
  return (
    <div className="absolute bottom-0 right-0 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="306"
        height="117"
        viewBox="0 0 306 117"
        fill="none"
        className="dark:hidden"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M363.247 29.3265L244.198 148.376C204.722 187.852 157.795 180.712 130.762 153.679L249.811 34.6295C291.308 -6.86682 338.166 4.24574 363.247 29.3265ZM119.948 142.865L233.487 29.3262C205.77 1.6095 163.385 -8.70491 122.639 32.041L65.8814 88.799L119.948 142.865ZM109.133 23.9202L55.0664 77.9864L1.10451 23.8159C27.4004 -2.48001 74.599 -10.6134 109.133 23.9202Z"
          fill="url(#paint0_linear_350_1383123)"
        />
        <path
          d="M363.247 29.3265L363.6 29.68L363.954 29.3265L363.6 28.9729L363.247 29.3265ZM130.762 153.679L130.409 153.325L130.055 153.679L130.409 154.032L130.762 153.679ZM249.811 34.6295L250.165 34.983L249.811 34.6295ZM233.487 29.3262L233.84 29.6798L234.194 29.3262L233.84 28.9727L233.487 29.3262ZM119.948 142.865L119.594 143.219L119.948 143.572L120.301 143.219L119.948 142.865ZM122.639 32.041L122.993 32.3945L122.639 32.041ZM65.8814 88.799L65.5278 88.4455L65.1743 88.799L65.5278 89.1526L65.8814 88.799ZM55.0664 77.9864L54.7122 78.3393L55.0657 78.6942L55.4199 78.34L55.0664 77.9864ZM109.133 23.9202L109.486 24.2738L109.84 23.9202L109.486 23.5667L109.133 23.9202ZM1.10451 23.8159L0.750954 23.4623L0.39808 23.8152L0.750271 24.1688L1.10451 23.8159ZM244.551 148.729L363.6 29.68L362.893 28.9729L243.844 148.022L244.551 148.729ZM130.409 154.032C144.011 167.634 162.623 176.237 182.808 176.468C203.001 176.699 224.728 168.552 244.551 148.729L243.844 148.022C224.191 167.675 202.717 175.696 182.82 175.468C162.915 175.24 144.547 166.756 131.116 153.325L130.409 154.032ZM249.458 34.2759L130.409 153.325L131.116 154.032L250.165 34.983L249.458 34.2759ZM363.6 28.9729C350.98 16.3527 332.879 7.24315 312.703 6.51191C292.515 5.78021 270.295 13.4392 249.458 34.2759L250.165 34.983C270.825 14.3235 292.782 6.79056 312.667 7.51125C332.565 8.23241 350.433 17.2195 362.893 29.68L363.6 28.9729ZM233.133 28.9727L119.594 142.512L120.301 143.219L233.84 29.6798L233.133 28.9727ZM122.993 32.3945C143.285 12.1022 163.936 4.56778 182.924 5.50951C201.925 6.45187 219.339 15.8858 233.133 29.6798L233.84 28.9727C219.917 15.0499 202.281 5.46829 182.974 4.51073C163.654 3.55254 142.74 11.2338 122.286 31.6874L122.993 32.3945ZM66.2349 89.1526L122.993 32.3945L122.286 31.6874L65.5278 88.4455L66.2349 89.1526ZM120.301 142.512L66.2349 88.4455L65.5278 89.1526L119.594 143.219L120.301 142.512ZM55.4199 78.34L109.486 24.2738L108.779 23.5667L54.7128 77.6329L55.4199 78.34ZM0.750271 24.1688L54.7122 78.3393L55.4206 77.6335L1.45874 23.463L0.750271 24.1688ZM109.486 23.5667C74.7238 -11.1957 27.2068 -2.99349 0.750954 23.4623L1.45806 24.1695C27.594 -1.96652 74.4743 -10.031 108.779 24.2738L109.486 23.5667Z"
          fill="url(#paint1_linear_350_13836231)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_350_1383123"
            x1="182.027"
            y1="23.484"
            x2="182.158"
            y2="132.005"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E5E9EE" stopOpacity="0.16" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_350_13836231"
            x1="182.027"
            y1="21.891"
            x2="182.158"
            y2="89.1537"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1E5EA" stopOpacity="0.35" />
            <stop offset="1" stopColor="#EAEDF0" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="306"
        height="117"
        viewBox="0 0 306 117"
        fill="none"
        className="hidden dark:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M363.247 29.3265L244.198 148.376C204.722 187.852 157.795 180.712 130.762 153.679L249.811 34.6295C291.308 -6.86682 338.166 4.24574 363.247 29.3265ZM119.948 142.865L233.487 29.3262C205.77 1.6095 163.385 -8.70491 122.639 32.041L65.8814 88.799L119.948 142.865ZM109.133 23.9202L55.0664 77.9864L1.10451 23.8159C27.4004 -2.48001 74.599 -10.6134 109.133 23.9202Z"
          fill="url(#paint0_linear_350_13836)"
        />
        <path
          d="M363.247 29.3265L363.6 29.68L363.954 29.3265L363.6 28.9729L363.247 29.3265ZM130.762 153.679L130.409 153.325L130.055 153.679L130.409 154.032L130.762 153.679ZM249.811 34.6295L250.165 34.983L249.811 34.6295ZM233.487 29.3262L233.84 29.6798L234.194 29.3262L233.84 28.9727L233.487 29.3262ZM119.948 142.865L119.594 143.219L119.948 143.572L120.301 143.219L119.948 142.865ZM122.639 32.041L122.993 32.3945L122.639 32.041ZM65.8814 88.799L65.5278 88.4455L65.1743 88.799L65.5278 89.1526L65.8814 88.799ZM55.0664 77.9864L54.7122 78.3393L55.0657 78.6942L55.4199 78.34L55.0664 77.9864ZM109.133 23.9202L109.486 24.2738L109.84 23.9202L109.486 23.5667L109.133 23.9202ZM1.10451 23.8159L0.750954 23.4623L0.39808 23.8152L0.750271 24.1688L1.10451 23.8159ZM244.551 148.729L363.6 29.68L362.893 28.9729L243.844 148.022L244.551 148.729ZM130.409 154.032C144.011 167.634 162.623 176.237 182.808 176.468C203.001 176.699 224.728 168.552 244.551 148.729L243.844 148.022C224.191 167.675 202.717 175.696 182.82 175.468C162.915 175.24 144.547 166.756 131.116 153.325L130.409 154.032ZM249.458 34.2759L130.409 153.325L131.116 154.032L250.165 34.983L249.458 34.2759ZM363.6 28.9729C350.98 16.3527 332.879 7.24315 312.703 6.51191C292.515 5.78021 270.295 13.4392 249.458 34.2759L250.165 34.983C270.825 14.3235 292.782 6.79056 312.667 7.51125C332.565 8.23241 350.433 17.2195 362.893 29.68L363.6 28.9729ZM233.133 28.9727L119.594 142.512L120.301 143.219L233.84 29.6798L233.133 28.9727ZM122.993 32.3945C143.285 12.1022 163.936 4.56778 182.924 5.50951C201.925 6.45187 219.339 15.8858 233.133 29.6798L233.84 28.9727C219.917 15.0499 202.281 5.46829 182.974 4.51073C163.654 3.55254 142.74 11.2338 122.286 31.6874L122.993 32.3945ZM66.2349 89.1526L122.993 32.3945L122.286 31.6874L65.5278 88.4455L66.2349 89.1526ZM120.301 142.512L66.2349 88.4455L65.5278 89.1526L119.594 143.219L120.301 142.512ZM55.4199 78.34L109.486 24.2738L108.779 23.5667L54.7128 77.6329L55.4199 78.34ZM0.750271 24.1688L54.7122 78.3393L55.4206 77.6335L1.45874 23.463L0.750271 24.1688ZM109.486 23.5667C74.7238 -11.1957 27.2068 -2.99349 0.750954 23.4623L1.45806 24.1695C27.594 -1.96652 74.4743 -10.031 108.779 24.2738L109.486 23.5667Z"
          fill="url(#paint1_linear_350_13836)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_350_13836"
            x1="182.027"
            y1="23.484"
            x2="182.158"
            y2="132.005"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.03" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_350_13836"
            x1="182.027"
            y1="21.891"
            x2="182.158"
            y2="89.1537"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.07" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default function Dashboard() {
  return (
    /* Inter variable setup */
    <html lang="en" suppressHydrationWarning className={'frosted-ui ' + interVariable.variable}>
      <body>
        {/* <NextThemeProvider> */}
        <Theme asChild appearance="dark" grayColor="gray" accentColor="blue">
          <div id="root" className="w-full h-[100vh] bg-gray-1 flex flex-no-wrap p-2">
            <ThemePanel />
            <aside className="h-full w-[300px] py-2 px-4">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex px-4 py-2">
                    <Popover.Root>
                      <Popover.Trigger>
                        <Card variant="ghost" style={{ flex: 1 }} asChild>
                          <button className="fui-reset">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <Avatar fallback="PB" />
                                <Text>Parlay Banditz</Text>
                              </div>
                              <ChevronDownIcon />
                            </div>
                          </button>
                        </Card>
                      </Popover.Trigger>
                      <Popover.Content size="3" style={{ width: 300 }}>
                        <div className="flex gap-3">
                          <Avatar
                            size="3"
                            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                            fallback="A"
                          />
                          <div style={{ flexGrow: 1 }}>
                            <TextArea size="2" placeholder="Write a comment…" style={{ height: 80 }} />

                            <div className="flex justify-between items-center gap-3 mt-3">
                              <div className="flex items-center gap-2">
                                <label>
                                  <Checkbox size="2" />
                                  <Text size="2">Send to group</Text>
                                </label>
                              </div>

                              <Popover.Close>
                                <Button autoFocus size="2">
                                  Comment
                                </Button>
                              </Popover.Close>
                            </div>
                          </div>
                        </div>
                      </Popover.Content>
                    </Popover.Root>
                  </div>
                  <div className="flex flex-col gap-1 pt-6">
                    <SidebarButton>
                      <HomeIcon width="24" height="24" />
                      Home
                    </SidebarButton>
                    <SidebarButton>
                      <AccessibilityIcon width="24" height="24" />
                      Products
                    </SidebarButton>
                    <SidebarButton>
                      <MixerVerticalIcon width="24" height="24" />
                      Product pages
                    </SidebarButton>
                    <SidebarButton>
                      <EnvelopeOpenIcon width="24" height="24" />
                      Apps
                    </SidebarButton>
                    <SidebarButton>
                      <CookieIcon width="24" height="24" />
                      Links
                    </SidebarButton>
                    <SidebarButton>
                      <MobileIcon width="24" height="24" />
                      Customers
                    </SidebarButton>
                    <SidebarButton>
                      <ReloadIcon width="24" height="24" />
                      Stats
                    </SidebarButton>
                    <SidebarButton>
                      <RocketIcon width="24" height="24" />
                      Affiliates
                    </SidebarButton>
                    <SidebarButton>
                      <ClockIcon width="24" height="24" />
                      Payments
                    </SidebarButton>
                    <SidebarButton>
                      <CodeIcon width="24" height="24" />
                      Feedback
                    </SidebarButton>
                    <SidebarButton>
                      <CameraIcon width="24" height="24" />
                      Resolution center
                    </SidebarButton>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-3">
                    <Avatar fallback="IM" />
                    <Text>Ilya Miskov</Text>
                  </div>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <IconButton variant="surface" size="3">
                        <GearIcon width="20" height="20" color="var(--gray-10)" />
                      </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content align="end" size="2">
                      <DropdownMenu.Item>Sign up</DropdownMenu.Item>
                      <DropdownMenu.Item>Log in</DropdownMenu.Item>

                      <DropdownMenu.Separator />

                      <DropdownMenu.Item>Air Cover</DropdownMenu.Item>
                      <DropdownMenu.Item>Cancellations</DropdownMenu.Item>
                      <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger>Hosting</DropdownMenu.SubTrigger>

                        <DropdownMenu.SubContent>
                          <DropdownMenu.Item>Resources</DropdownMenu.Item>
                          <DropdownMenu.Item>Community forum</DropdownMenu.Item>
                          <DropdownMenu.Item>Hosting guide</DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item>Your home</DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Sub>

                      <DropdownMenu.Separator />

                      <DropdownMenu.Item>Help Centre</DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </div>
              </div>
            </aside>
            <main className="h-full flex-1 rounded-5 border border-solid border-gray-a4 dark:bg-[rgba(255,255,255,0.01)]">
              <div className="px-[54px] pr-12">
                <div className="flex flex-row items-center justify-between py-4">
                  <div>
                    <Breadcrumbs.Root>
                      <Breadcrumbs.Item>PRODUCTS</Breadcrumbs.Item>
                      <Breadcrumbs.Item>PICK A CATEGORY</Breadcrumbs.Item>
                    </Breadcrumbs.Root>
                  </div>
                  <div>
                    <div className="flex items-center gap-4">
                      <TextField.Root>
                        <TextField.Input placeholder="Search" type="search" size="3" />
                      </TextField.Root>
                      <Separator orientation="vertical" />
                      <div className="flex items-center gap-4">
                        <IconButton variant="ghost" color="gray" size="3">
                          <CookieIcon width="20" height="20" />
                        </IconButton>
                        <IconButton variant="ghost" color="gray" size="3">
                          <EnvelopeOpenIcon width="20" height="20" />
                        </IconButton>
                        <IconButton variant="ghost" color="gray" size="3">
                          <MixerVerticalIcon width="20" height="20" />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between pb-7">
                  <div>
                    <div className="flex flex-col gap-2">
                      <Heading
                        size="8"
                        style={{
                          fontFeatureSettings: `'liga' 1, 'calt' 1`,
                        }}
                      >
                        {"Choose what you're selling ->"}
                      </Heading>
                      <Text color="gray">Choose what you're selling</Text>
                    </div>
                  </div>
                  <div>
                    <Card variant="surface">
                      <Inset>
                        <div className="px-3 py-2">
                          <Breadcrumbs.Root>
                            <Breadcrumbs.Item>Pick category</Breadcrumbs.Item>
                            <Breadcrumbs.Item>Add an app</Breadcrumbs.Item>
                            <Breadcrumbs.Item>Add price</Breadcrumbs.Item>
                          </Breadcrumbs.Root>
                        </div>
                      </Inset>
                    </Card>
                  </div>
                </div>
                <Separator size="4" />
                <div className="flex flex-col gap-9">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <Heading size="4">Recommended for you</Heading>
                      <Text size="2" color="gray">
                        Our most popular picks
                      </Text>
                    </div>
                    <div className="flex gap-4">
                      <DashboardCard />
                      <div className="flex-1" />
                      <div className="flex-1" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <Heading size="4">All categories</Heading>
                      <Text size="2" color="gray">
                        Our most popular picks
                      </Text>
                    </div>
                    <div className="flex gap-4">
                      <DashboardCard />
                      <DashboardCard />
                      <DashboardCard />
                    </div>
                  </div>
                </div>
                <div className="flex mt-8">
                  <Button variant="soft" color="gray" className="w-full" size="4">
                    Load more
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </Theme>
        {/* </NextThemeProvider> */}
      </body>
    </html>
  );
}
