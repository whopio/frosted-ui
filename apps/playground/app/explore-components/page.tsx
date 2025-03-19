/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ArrowRightIcon, CaretDownIcon, InfoCircledIcon, MagnifyingGlassIcon, StarIcon } from '@radix-ui/react-icons';
import {
  AlertDialog,
  //
  AspectRatio,
  //
  Avatar,
  //
  Badge,
  //
  Blockquote,
  //
  Button,
  Callout,
  //
  Card,
  //
  Checkbox,
  //
  Code,
  ContextMenu,
  Dialog,
  DropdownMenu,
  //
  Em,
  Flex,
  Grid,
  //
  Heading,
  HoverCard,
  //
  IconButton,
  //
  Inset,
  //
  Kbd,
  //
  Link,
  Popover,
  //
  Quote,
  RadioGroup,
  //
  ScrollArea,
  Select,
  //
  Separator,
  //
  Slider,
  //
  Strong,
  //
  Switch,
  //
  Table,
  Tabs,
  //
  Text,
  //
  TextArea,
  TextField,
  Theme,
  //
  ThemePanel,
  //
  Tooltip,
  avatarPropDefs,
  badgePropDefs,
  blockquotePropDefs,
  buttonPropDefs,
  calloutRootPropDefs,
  cardPropDefs,
  checkboxPropDefs,
  codePropDefs,
  contextMenuContentPropDefs,
  dropdownMenuContentPropDefs,
  headingPropDefs,
  hoverCardContentPropDefs,
  iconButtonPropDefs,
  kbdPropDefs,
  linkPropDefs,
  radioGroupPropDefs,
  selectRootPropDefs,
  selectTriggerPropDefs,
  sliderPropDefs,
  switchPropDefs,
  tableRootPropDefs,
  tabsListPropDefs,
  textAreaPropDefs,
  textFieldPropDefs,
  textPropDefs,
  //
  // helpers:
  themeAccentColorsOrdered,
} from 'frosted-ui';
import * as React from 'react';
import { NextThemeProvider } from '../next-theme-provider';
import styles from './page.module.css';
import { getPeopleForColor } from './people';

export default function ExploreComponents() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProvider>
          <Theme asChild>
            <div id="root">
              <ThemePanel />

              <div style={{ margin: 32 }}>
                <Heading id="alert-dialog" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#alert-dialog">
                    Alert Dialog
                  </Link>
                </Heading>
                <Flex gap="4" align="center" style={{ marginBottom: 64 }}>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button size="1">Open</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="1" style={{ width: 300 }}>
                      <AlertDialog.Title size="2" style={{ marginBottom: 8 }}>
                        Revoke access
                      </AlertDialog.Title>
                      <AlertDialog.Description size="1" style={{ marginBottom: 12 }}>
                        Are you sure? This application will no longer be accessible and any existing sessions will be
                        expired.
                      </AlertDialog.Description>

                      <Flex gap="2" style={{ marginTop: 12 }} justify="end">
                        <AlertDialog.Cancel>
                          <Button size="1" variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button size="1" color="red">
                            Revoke
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button size="2">Open</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="2" style={{ width: 400 }}>
                      <AlertDialog.Title style={{ marginBottom: 8 }}>Revoke access</AlertDialog.Title>
                      <AlertDialog.Description size="2" style={{ marginBottom: 20 }}>
                        Are you sure? This application will no longer be accessible and any existing sessions will be
                        expired.
                      </AlertDialog.Description>

                      <Flex gap="3" style={{ marginTop: 16 }} justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button color="red">Revoke</Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button size="3">Open</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="3" style={{ width: 400 }}>
                      <AlertDialog.Title>Revoke access</AlertDialog.Title>
                      <AlertDialog.Description size="2" style={{ marginBottom: 20 }}>
                        Are you sure? This application will no longer be accessible and any existing sessions will be
                        expired.
                      </AlertDialog.Description>

                      <Flex gap="3" style={{ marginTop: 16 }} justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button color="red">Revoke</Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>

                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button size="4">Open</Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content size="4" style={{ width: 450 }}>
                      <AlertDialog.Title size="6">Revoke access</AlertDialog.Title>
                      <AlertDialog.Description size="3" style={{ marginBottom: 24 }}>
                        Are you sure? This application will no longer be accessible and any existing sessions will be
                        expired.
                      </AlertDialog.Description>

                      <Flex gap="3" style={{ marginTop: 24 }} justify="end">
                        <AlertDialog.Cancel>
                          <Button size="3" variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button size="3" color="red">
                            Revoke
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </Flex>

                <Heading id="aspect-ratio" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#aspect-ratio">
                    Aspect Ratio
                  </Link>
                </Heading>
                <Grid columns="4" gap="4" style={{ marginBottom: 64 }}>
                  {['2 / 3', '1 / 1', '16 / 9'].map((ratio) => (
                    <div key={ratio}>
                      <Text as="p" size="1" color="gray" style={{ marginBottom: 8 }}>
                        {ratio.replace(' / ', ':')}
                      </Text>
                      <AspectRatio ratio={eval(ratio)}>{aspectRatioImage}</AspectRatio>
                    </div>
                  ))}
                </Grid>

                <Heading id="avatar" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#avatar">
                    Avatar
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={5}>Accent</th>
                            <th colSpan={5}>Gray</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{upperFirst('Default')}</td>
                            <td>
                              <Avatar src={getPeopleForColor('gray')[0].image} fallback="V" />
                            </td>
                            <td>
                              <Avatar fallback="V" />
                            </td>
                            <td>
                              <Avatar fallback="BG" />
                            </td>
                            <td>
                              <Avatar fallback={<AvatarIconFallback />} />
                            </td>
                            <td>
                              <Avatar fallback="V" highContrast />
                            </td>
                            <td>
                              <Avatar color="gray" src={getPeopleForColor('gray')[0 + 2].image} fallback="V" />
                            </td>
                            <td>
                              <Avatar color="gray" fallback="V" />
                            </td>
                            <td>
                              <Avatar color="gray" fallback="BG" />
                            </td>
                            <td>
                              <Avatar color="gray" fallback={<AvatarIconFallback />} />
                            </td>
                            <td>
                              <Avatar color="gray" fallback="V" highContrast />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={5}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Avatar color={color} src={getPeopleForColor(color)[0].image} fallback="V" />
                              </td>
                              <td>
                                <Avatar color={color} fallback="V" />
                              </td>
                              <td>
                                <Avatar color={color} fallback="BG" />
                              </td>
                              <td>
                                <Avatar color={color} fallback={<AvatarIconFallback />} />
                              </td>
                              <td>
                                <Avatar color={color} fallback="V" highContrast />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>&nbsp;</td>
                          </tr>
                          {avatarPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Avatar size={size} fallback="BG" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="badge" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#badge">
                    Badge
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>Accent</th>
                            <th>Gray</th>
                          </tr>
                        </thead>
                        <tbody>
                          {badgePropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Flex gap="4">
                                  <Badge variant={variant}>New</Badge>
                                  <Badge variant={variant} highContrast>
                                    New
                                  </Badge>
                                </Flex>
                              </td>
                              <td>
                                <Flex gap="4">
                                  <Badge variant={variant} color="gray">
                                    New
                                  </Badge>
                                  <Badge variant={variant} color="gray" highContrast>
                                    New
                                  </Badge>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {badgePropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {badgePropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Flex align="center" justify="center" gap="4">
                                    <Badge variant={variant} color={color}>
                                      New
                                    </Badge>
                                    <Badge variant={variant} color={color} highContrast>
                                      New
                                    </Badge>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {badgePropDefs.variant.values.map((variant, index) => (
                            <React.Fragment key={variant}>
                              {index > 0 && (
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              )}
                              {badgePropDefs.size.values.map((size) => (
                                <tr key={size}>
                                  <td>Size {size}</td>
                                  <td style={{ textAlign: 'left' }}>
                                    <Badge size={size} variant={variant}>
                                      New
                                    </Badge>
                                  </td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="blockquote" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#blockquote">
                    Blockquote
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                    <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <Grid style={{ marginTop: 24, marginBottom: 24, whiteSpace: 'nowrap' }} gap="6" columns="auto auto">
                      <Flex direction="column" gap="6">
                        <Text style={{ marginBottom: -20 }} size="1" color="gray" align="center">
                          Accent
                        </Text>

                        <Blockquote size="4">
                          Perfect typography is certainly the most elusive of all arts.
                          <br />
                          Sculpture in stone alone comes near it in obstinacy.
                        </Blockquote>

                        <Blockquote size="3">
                          Perfect typography is certainly the most elusive of all arts.
                          <br />
                          Sculpture in stone alone comes near it in obstinacy.
                        </Blockquote>

                        <Blockquote size="2">
                          Perfect typography is certainly the most elusive of all arts.
                          <br />
                          Sculpture in stone alone comes near it in obstinacy.
                        </Blockquote>
                      </Flex>

                      <Flex direction="column" gap="6">
                        <Text style={{ marginBottom: -20 }} size="1" color="gray" align="center">
                          Gray
                        </Text>

                        <Blockquote size="4" color="gray">
                          Perfect typography is certainly the most elusive of all arts.
                          <br />
                          Sculpture in stone alone comes near it in obstinacy.
                        </Blockquote>

                        <Blockquote size="3" color="gray">
                          Perfect typography is certainly the most elusive of all arts.
                          <br />
                          Sculpture in stone alone comes near it in obstinacy.
                        </Blockquote>

                        <Blockquote size="2" color="gray">
                          Perfect typography is certainly the most elusive of all arts.
                          <br />
                          Sculpture in stone alone comes near it in obstinacy.
                        </Blockquote>
                      </Flex>
                    </Grid>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Flex gap="6">
                                  <Blockquote color={color}>
                                    Perfect typography is certainly the most elusive of all arts.
                                    <br />
                                    Sculpture in stone alone comes near it in obstinacy.
                                  </Blockquote>
                                  <Blockquote color={color} highContrast>
                                    Perfect typography is certainly the most elusive of all arts.
                                    <br />
                                    Sculpture in stone alone comes near it in obstinacy.
                                  </Blockquote>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <tbody>
                          {blockquotePropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Blockquote size={size}>
                                  Perfect typography is certainly
                                  <br />
                                  the most elusive of all arts.
                                </Blockquote>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-weights">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {blockquotePropDefs.weight.values.map((weight) => (
                            <tr key={weight}>
                              <td>{upperFirst(weight)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Blockquote weight={weight}>
                                  Perfect typography is certainly the most elusive of all arts.
                                  <br />
                                  Sculpture in stone alone comes near it in obstinacy.
                                </Blockquote>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="button" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#button">
                    Button
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          {buttonPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Button variant={variant}>
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                              </td>
                              <td>
                                <Button variant={variant} highContrast>
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                              </td>
                              <td>
                                <Button variant={variant} color="gray">
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                              </td>
                              <td>
                                <Button variant={variant} color="gray" highContrast>
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                              </td>
                              <td>
                                <Button variant={variant} disabled>
                                  Next <ArrowRightIcon width="16" height="16" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {buttonPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {buttonPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Flex align="center" justify="center" gap="4">
                                    <Button variant={variant} color={color}>
                                      Next <ArrowRightIcon width="16" height="16" />
                                    </Button>
                                    <Button variant={variant} color={color} highContrast>
                                      Next <ArrowRightIcon width="16" height="16" />
                                    </Button>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {buttonPropDefs.variant.values.map((variant, index) => (
                            <React.Fragment key={variant}>
                              {index > 0 && (
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              )}
                              {buttonPropDefs.size.values.map((size) => (
                                <tr key={size}>
                                  <td>Size {size}</td>
                                  <td style={{ textAlign: 'left' }}>
                                    <Button size={size} variant={variant}>
                                      Next <ArrowRightIcon {...buttonSizeToIconSize(size)} />
                                    </Button>
                                  </td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="callout" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#callout">
                    Callout
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>Accent</th>
                            <th>Gray</th>
                          </tr>
                        </thead>
                        <tbody>
                          {calloutRootPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Callout.Root variant={variant}>
                                  <Callout.Icon>
                                    <InfoCircledIcon width="16" height="16" />
                                  </Callout.Icon>
                                  <Callout.Text>
                                    Please <Link href="#">upgrade</Link> to the new version.
                                  </Callout.Text>
                                </Callout.Root>
                                <Callout.Root variant={variant} highContrast style={{ marginTop: 16 }}>
                                  <Callout.Icon>
                                    <InfoCircledIcon width="16" height="16" />
                                  </Callout.Icon>
                                  <Callout.Text>
                                    Please <Link href="#">upgrade</Link> to the new version.
                                  </Callout.Text>
                                </Callout.Root>
                              </td>
                              <td>
                                <Callout.Root variant={variant} color="gray">
                                  <Callout.Icon>
                                    <InfoCircledIcon width="16" height="16" />
                                  </Callout.Icon>
                                  <Callout.Text>
                                    Please <Link href="#">upgrade</Link> to the new version.
                                  </Callout.Text>
                                </Callout.Root>
                                <Callout.Root variant={variant} color="gray" highContrast style={{ marginTop: 16 }}>
                                  <Callout.Icon>
                                    <InfoCircledIcon width="16" height="16" />
                                  </Callout.Icon>
                                  <Callout.Text>
                                    Please <Link href="#">upgrade</Link> to the new version.
                                  </Callout.Text>
                                </Callout.Root>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {calloutRootPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {calloutRootPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Callout.Root variant={variant} color={color}>
                                    <Callout.Icon>
                                      <InfoCircledIcon width="16" height="16" />
                                    </Callout.Icon>
                                    <Callout.Text>
                                      Please <Link href="#">upgrade</Link> to the new version.
                                    </Callout.Text>
                                  </Callout.Root>
                                  <Callout.Root variant={variant} color={color} highContrast style={{ marginTop: 16 }}>
                                    <Callout.Icon>
                                      <InfoCircledIcon width="16" height="16" />
                                    </Callout.Icon>
                                    <Callout.Text>
                                      Please <Link href="#">upgrade</Link> to the new version.
                                    </Callout.Text>
                                  </Callout.Root>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {calloutRootPropDefs.variant.values.map((variant) => (
                              <th key={variant} style={{ textAlign: 'left' }}>
                                {upperFirst(variant)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {calloutRootPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              {calloutRootPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Flex>
                                    <Callout.Root variant={variant} size={size}>
                                      <Callout.Icon>
                                        <InfoCircledIcon {...calloutSizeToIconSize(size)} />
                                      </Callout.Icon>
                                      <Callout.Text>
                                        Please <Link href="#">upgrade</Link> to the new version.
                                      </Callout.Text>
                                    </Callout.Root>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="card" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#card">
                    Card
                  </Link>
                </Heading>
                <div style={{ marginTop: 24, marginBottom: 24, whiteSpace: 'nowrap' }}>
                  <div style={{ marginTop: 24, marginBottom: 24 }}>
                    <Flex direction="column" style={{ marginBottom: 64, width: 1000 }}>
                      <Flex justify="center" position="relative" style={{ padding: 100 }}>
                        <Flex
                          align="center"
                          justify="center"
                          position="absolute"
                          inset="0"
                          style={{ overflow: 'hidden' }}
                        >
                          <PanelBackgroundImage id="1" width="100%" height="200%" />
                        </Flex>

                        <Card variant="classic" size="4" style={{ width: 400 }}>
                          <div style={{ marginBottom: 20, height: 48 }}>
                            <Heading as="h3" size="6" style={{ marginTop: 4 }}>
                              Sign up
                            </Heading>
                          </div>

                          <div style={{ marginBottom: 24 }}>
                            <label>
                              <Text as="div" size="2" weight="medium" style={{ marginBottom: 8 }}>
                                Email address
                              </Text>
                              <TextField.Input variant="classic" placeholder="Enter your email" />
                            </label>
                          </div>

                          <div style={{ marginBottom: 24, position: 'relative' }}>
                            <div style={{ marginTop: -2, position: 'absolute', top: 0, right: 0 }}>
                              <Link href="#card" size="2">
                                Forgot password?
                              </Link>
                            </div>

                            <label>
                              <Text as="div" size="2" weight="medium" style={{ marginBottom: 8 }}>
                                Password
                              </Text>
                              <TextField.Input variant="classic" placeholder="Enter your password" />
                            </label>
                          </div>

                          <Flex style={{ marginTop: 32 }} justify="end" gap="3">
                            <Button variant="surface" highContrast color="gray">
                              Create an account
                            </Button>
                            <Button>Sign in</Button>
                          </Flex>
                        </Card>
                      </Flex>
                    </Flex>
                  </div>

                  <div style={{ marginTop: 24, marginBottom: 24 }}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th />
                          {cardPropDefs.variant.values.map((variant) => (
                            <th key={variant} style={{ textAlign: 'left' }}>
                              {upperFirst(variant)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(['1', '2', '3'] as const).map((size) => (
                          <tr key={size}>
                            <td>Size {size}</td>
                            {cardPropDefs.variant.values.map((variant) => (
                              <td key={variant}>
                                <Flex>
                                  <Card
                                    asChild
                                    variant={variant}
                                    size={size}
                                    style={{
                                      marginRight: 8,
                                      marginLeft: variant === 'ghost' ? 12 : 0,
                                      marginTop: variant === 'ghost' ? 16 : 0,
                                      marginBottom: variant === 'ghost' ? 16 : 0,
                                    }}
                                  >
                                    <button>
                                      <Flex
                                        align="center"
                                        //  @ts-ignore
                                        gap={String(+size + 1)}
                                      >
                                        <Avatar
                                          // @ts-ignore
                                          size={String(+size + 2)}
                                          src={getPeopleForColor('gray')[0].image}
                                          fallback="V"
                                        />
                                        <div>
                                          <Text
                                            as="div"
                                            weight="medium"
                                            // @ts-ignore
                                            size={String(+size + 1)}
                                          >
                                            Emily Adams
                                          </Text>

                                          <Text as="div" color="gray" size="2">
                                            emily.adams@example.com
                                          </Text>
                                        </div>
                                      </Flex>
                                    </button>
                                  </Card>
                                </Flex>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <Heading id="checkbox" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#checkbox">
                    Checkbox
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{upperFirst('Default')}</td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox />
                                <Checkbox defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox highContrast defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox color="gray" />
                                <Checkbox color="gray" defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox color="gray" highContrast defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Checkbox disabled />
                                <Checkbox disabled defaultChecked />
                              </Flex>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>{upperFirst('Default')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <Checkbox color={color} />
                                  <Checkbox color={color} defaultChecked />
                                  <Checkbox color={color} highContrast defaultChecked />
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>{upperFirst('Default')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {checkboxPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Flex align="center" justify="start" gap="4">
                                  <Checkbox size={size} defaultChecked />
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="code" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#code">
                    Code
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                    <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                          </tr>
                        </thead>
                        <tbody>
                          {codePropDefs.variant.values.map((variant) => (
                            <tr key={variant} style={{ verticalAlign: 'baseline' }}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Flex>
                                  <Code variant={variant}>console.log()</Code>
                                </Flex>
                              </td>
                              <td>
                                <Flex>
                                  <Code variant={variant} highContrast>
                                    console.log()
                                  </Code>
                                </Flex>
                              </td>
                              <td>
                                <Flex>
                                  <Code variant={variant} color="gray">
                                    console.log()
                                  </Code>
                                </Flex>
                              </td>
                              <td>
                                <Flex>
                                  <Code variant={variant} color="gray" highContrast>
                                    console.log()
                                  </Code>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {codePropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color} style={{ verticalAlign: 'baseline' }}>
                              <td>{upperFirst(color)}</td>
                              {codePropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Flex align="center" justify="center" gap="4">
                                    <Code variant={variant} color={color}>
                                      console.log()
                                    </Code>
                                    <Code variant={variant} color={color} highContrast>
                                      console.log()
                                    </Code>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <Flex direction="column" gap="4">
                        {codePropDefs.size.values.map((size) => (
                          <Flex align="center" key={size}>
                            <div style={{ width: 80, flexShrink: 0 }}>
                              <Text color="gray" size="1">
                                Size {size}
                              </Text>
                            </div>
                            <Code size={size}>console.log()</Code>
                          </Flex>
                        ))}
                      </Flex>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-weights">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {(['regular', 'bold'] as const).map((weight) => (
                            <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                              <td>{upperFirst(weight)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Code weight={weight}>console.log()</Code>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="context-menu" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#context-menu">
                    Context Menu
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Default</td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content>
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea highContrast />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content highContrast>
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea color="gray" />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content color="gray">
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                            <td>
                              <ContextMenu.Root>
                                <ContextMenu.Trigger>
                                  <RightClickArea color="gray" highContrast />
                                </ContextMenu.Trigger>
                                <ContextMenu.Content color="gray" highContrast>
                                  <ExampleContextMenuContent />
                                </ContextMenu.Content>
                              </ContextMenu.Root>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <ContextMenu.Root>
                                    <ContextMenu.Trigger>
                                      <RightClickArea color={color} />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.Content color={color}>
                                      <ExampleContextMenuContent />
                                    </ContextMenu.Content>
                                  </ContextMenu.Root>
                                  <ContextMenu.Root>
                                    <ContextMenu.Trigger>
                                      <RightClickArea color={color} highContrast />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.Content color={color} highContrast>
                                      <ExampleContextMenuContent />
                                    </ContextMenu.Content>
                                  </ContextMenu.Root>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>{upperFirst('Default')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contextMenuContentPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td>
                                <Flex>
                                  <ContextMenu.Root>
                                    <ContextMenu.Trigger>
                                      <RightClickArea size={size} />
                                    </ContextMenu.Trigger>
                                    <ContextMenu.Content size={size}>
                                      <ExampleContextMenuContent />
                                    </ContextMenu.Content>
                                  </ContextMenu.Root>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="dialog" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#dialog">
                    Dialog
                  </Link>
                </Heading>
                <Flex gap="4" align="center" style={{ marginBottom: 64 }}>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button size="1">Open</Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="1" style={{ maxWidth: 300 }}>
                      <Dialog.Title size="3" style={{ marginBottom: 8 }}>
                        Edit profile
                      </Dialog.Title>
                      <Dialog.Description size="2" style={{ marginBottom: 12 }}>
                        Make changes to your profile.
                      </Dialog.Description>

                      <Flex direction="column" gap="3">
                        <label>
                          <Text as="div" size="1" style={{ marginBottom: 8 }} weight="bold">
                            Name
                          </Text>
                          <TextField.Input size="1" defaultValue="Freja Johnsen" placeholder="Enter your full name" />
                        </label>
                        <label>
                          <Text as="div" size="1" style={{ marginBottom: 8 }} weight="bold">
                            Email
                          </Text>
                          <TextField.Input size="1" defaultValue="freja@example.com" placeholder="Enter your email" />
                        </label>
                      </Flex>

                      <Flex gap="2" style={{ marginTop: 12 }} justify="end">
                        <Dialog.Close>
                          <Button size="1" variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button size="1" autoFocus>
                            Save
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button size="2">Open</Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="2" style={{ maxWidth: 400 }}>
                      <Dialog.Title style={{ marginBottom: 8 }}>Edit profile</Dialog.Title>
                      <Dialog.Description size="2" style={{ marginBottom: 20 }}>
                        Make changes to your profile.
                      </Dialog.Description>

                      <Flex direction="column" gap="3">
                        <label>
                          <Text as="div" size="2" style={{ marginBottom: 8 }} weight="bold">
                            Name
                          </Text>
                          <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
                        </label>
                        <label>
                          <Text as="div" size="2" style={{ marginBottom: 8 }} weight="bold">
                            Email
                          </Text>
                          <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
                        </label>
                      </Flex>

                      <Flex gap="3" style={{ marginTop: 16 }} justify="end">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button autoFocus>Save</Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button size="3">Open</Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="3" style={{ maxWidth: 500 }}>
                      <Dialog.Title>Edit profile</Dialog.Title>
                      <Dialog.Description size="2" style={{ marginBottom: 20 }}>
                        Make changes to your profile.
                      </Dialog.Description>

                      <Flex direction="column" gap="3">
                        <label>
                          <Text as="div" size="2" style={{ marginBottom: 8 }} weight="bold">
                            Name
                          </Text>
                          <TextField.Input defaultValue="Freja Johnsen" placeholder="Enter your full name" />
                        </label>
                        <label>
                          <Text as="div" size="2" style={{ marginBottom: 8 }} weight="bold">
                            Email
                          </Text>
                          <TextField.Input defaultValue="freja@example.com" placeholder="Enter your email" />
                        </label>
                      </Flex>

                      <Flex gap="3" style={{ marginTop: 16 }} justify="end">
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button autoFocus>Save</Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>

                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Button size="4">Open</Button>
                    </Dialog.Trigger>
                    <Dialog.Content size="4">
                      <Dialog.Title size="6">Edit profile</Dialog.Title>
                      <Dialog.Description size="3" style={{ marginBottom: 24 }}>
                        Make changes to your profile.
                      </Dialog.Description>

                      <Flex direction="column" gap="5">
                        <label>
                          <Text as="div" size="3" style={{ marginBottom: 8 }} weight="bold">
                            Name
                          </Text>
                          <TextField.Input size="3" defaultValue="Freja Johnsen" placeholder="Enter your full name" />
                        </label>
                        <label>
                          <Text as="div" size="3" style={{ marginBottom: 8 }} weight="bold">
                            Email
                          </Text>
                          <TextField.Input size="3" defaultValue="freja@example.com" placeholder="Enter your email" />
                        </label>
                      </Flex>

                      <Flex gap="3" style={{ marginTop: 32 }} justify="end">
                        <Dialog.Close>
                          <Button size="3" variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button size="3" autoFocus>
                            Save
                          </Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </Flex>

                <Heading id="dropdown-menu" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#dropdown-menu">
                    Dropdown Menu
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{upperFirst('Default')}</td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button>
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content>
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button highContrast>
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content highContrast>
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button color="gray">
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content color="gray">
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                            <td>
                              <DropdownMenu.Root>
                                <DropdownMenu.Trigger>
                                  <Button color="gray" highContrast>
                                    Options
                                    <CaretDownIcon width="16" height="16" />
                                  </Button>
                                </DropdownMenu.Trigger>
                                <DropdownMenu.Content color="gray" highContrast>
                                  <ExampleDropdownMenuContent />
                                </DropdownMenu.Content>
                              </DropdownMenu.Root>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>{upperFirst('Default')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                      <Button color={color}>
                                        Options
                                        <CaretDownIcon width="16" height="16" />
                                      </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content color={color}>
                                      <ExampleDropdownMenuContent />
                                    </DropdownMenu.Content>
                                  </DropdownMenu.Root>
                                  <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                      <Button color={color} highContrast>
                                        Options
                                        <CaretDownIcon width="16" height="16" />
                                      </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content color={color} highContrast>
                                      <ExampleDropdownMenuContent />
                                    </DropdownMenu.Content>
                                  </DropdownMenu.Root>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>{upperFirst('Default')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dropdownMenuContentPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td>
                                <Flex>
                                  <DropdownMenu.Root>
                                    <DropdownMenu.Trigger>
                                      <Button size={size}>
                                        Options
                                        <CaretDownIcon {...buttonSizeToIconSize(size)} />
                                      </Button>
                                    </DropdownMenu.Trigger>
                                    <DropdownMenu.Content size={size}>
                                      <ExampleDropdownMenuContent />
                                    </DropdownMenu.Content>
                                  </DropdownMenu.Root>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="em" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#em">
                    Em
                  </Link>
                </Heading>
                <div style={{ marginBottom: 64, width: 580 }}>
                  Versions of the <Em>Lorem ipsum</Em> text have been used in typesetting at least since the 1960s, when
                  it was popularized by advertisements for Letraset transfer sheets. It is typically a corrupted version
                  of <Em>De finibus bonorum et malorum</Em>, a 1st-century BC text by the Roman statesman and
                  philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
                </div>

                <Heading id="heading" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#heading">
                    Heading
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="specimen">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                    <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="specimen">
                    <div style={{ marginTop: 24, marginBottom: 24, width: 560 }}>
                      <Heading size="9">The principles of the typographic craft are difficult to master</Heading>
                    </div>

                    <Flex style={{ marginTop: 24, marginBottom: 24 }} gap="6">
                      <div style={{ width: 340 }}>
                        <Heading size="5" style={{ marginBottom: 8 }}>
                          The principles of the typographic craft are difficult to master
                        </Heading>
                        <Text as="p" size="3">
                          The goal of typography is to relate font size, line height, and line width in a proportional
                          way that maximizes beauty and makes reading easier and more pleasant.
                        </Text>
                      </div>

                      <div style={{ width: 320 }}>
                        <Heading size="4" style={{ marginBottom: 8 }}>
                          The principles of the typographic craft are difficult to master
                        </Heading>
                        <Text as="p" size="3">
                          The goal of typography is to relate font size, line height, and line width in a proportional
                          way that maximizes beauty and makes reading easier and more pleasant.
                        </Text>
                      </div>
                    </Flex>

                    <Flex style={{ marginTop: 24, marginBottom: 24 }} gap="6">
                      <div style={{ width: 290 }}>
                        <Heading size="3" style={{ marginBottom: 8 }}>
                          The principles of the typographic craft are difficult to master
                        </Heading>
                        <Text as="p" size="2">
                          The goal of typography is to relate font size, line height, and line width in a proportional
                          way that maximizes beauty and makes reading easier and more pleasant.
                        </Text>
                      </div>

                      <div style={{ width: 260 }}>
                        <Heading size="2" style={{ marginBottom: 8 }}>
                          The principles of the typographic craft are difficult to master
                        </Heading>
                        <Text as="p" size="1">
                          The goal of typography is to relate font size, line height, and line width in a proportional
                          way that maximizes beauty and makes reading easier and more pleasant.
                        </Text>
                      </div>
                    </Flex>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Heading color={color}>The quick brown fox jumps over the lazy dog</Heading>
                                <Heading color={color} highContrast>
                                  The quick brown fox jumps over the lazy dog
                                </Heading>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {headingPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Heading size={size}>
                                  The quick brown fox
                                  <br />
                                  jumps over the lazy dog
                                </Heading>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-weights">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {headingPropDefs.weight.values.map((weight) => (
                            <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                              <td>{upperFirst(weight)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Heading weight={weight}>The quick brown fox jumps over the lazy dog</Heading>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="hover-card" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#hover-card">
                    Hover Card
                  </Link>
                </Heading>
                <Flex direction="column" gap="4" style={{ marginBottom: 64 }}>
                  {hoverCardContentPropDefs.size.values.map((size) => (
                    <Text key={size} size={size}>
                      Technology revolutionized{' '}
                      <HoverCard.Root>
                        <HoverCard.Trigger>
                          <Link href="#">typography</Link>
                        </HoverCard.Trigger>

                        <HoverCard.Content size={size} side="top">
                          <Flex>
                            <Inset side="left" pr="current">
                              <InsetImage style={{ width: 120 }} />
                            </Inset>
                            <Text as="p" size={size} style={{ maxWidth: 150 + 50 * Number(size) }}>
                              <Strong>Typography</Strong> is the art and technique of arranging type to make written
                              language legible, readable and appealing when displayed.
                            </Text>
                          </Flex>
                        </HoverCard.Content>
                      </HoverCard.Root>{' '}
                      in the latter twentieth century.
                    </Text>
                  ))}
                </Flex>

                <Heading id="icon-button" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#icon-button">
                    Icon Button
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          {iconButtonPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <IconButton variant={variant}>
                                  <StarIcon width="16" height="16" />
                                </IconButton>
                              </td>
                              <td>
                                <IconButton variant={variant} highContrast>
                                  <StarIcon width="16" height="16" />
                                </IconButton>
                              </td>
                              <td>
                                <IconButton variant={variant} color="gray">
                                  <StarIcon width="16" height="16" />
                                </IconButton>
                              </td>
                              <td>
                                <IconButton variant={variant} color="gray" highContrast>
                                  <StarIcon width="16" height="16" />
                                </IconButton>
                              </td>
                              <td>
                                <IconButton variant={variant} disabled>
                                  <StarIcon width="16" height="16" />
                                </IconButton>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {iconButtonPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {iconButtonPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Flex align="center" justify="center" gap="4">
                                    <IconButton variant={variant} color={color}>
                                      <StarIcon width="16" height="16" />
                                    </IconButton>
                                    <IconButton variant={variant} color={color} highContrast>
                                      <StarIcon width="16" height="16" />
                                    </IconButton>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {iconButtonPropDefs.variant.values.map((variant, index) => (
                            <React.Fragment key={variant}>
                              {index > 0 && (
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              )}
                              {iconButtonPropDefs.size.values.map((size) => (
                                <tr key={size}>
                                  <td>Size {size}</td>
                                  <td style={{ textAlign: 'left' }}>
                                    <IconButton size={size} variant={variant}>
                                      <StarIcon {...buttonSizeToIconSize(size)} />
                                    </IconButton>
                                  </td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="inset" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#inset">
                    Inset
                  </Link>
                </Heading>
                <div style={{ marginTop: 24, marginBottom: 24 }}>
                  <Flex style={{ marginTop: 24, marginBottom: 24 }} gap="6">
                    <Card size="2">
                      <Flex>
                        <Inset side="left" clip="padding-box" pr="current">
                          <InsetImage />
                        </Inset>
                        <Text as="p" size="3" style={{ width: 240 }}>
                          <Strong>Typography</Strong> is the art and technique of arranging type to make written
                          language legible, readable and appealing when displayed.
                        </Text>
                      </Flex>
                    </Card>

                    <Card size="2">
                      <Flex>
                        <Text as="p" size="3" style={{ width: 240 }}>
                          <Strong>Typography</Strong> is the art and technique of arranging type to make written
                          language legible, readable and appealing when displayed.
                        </Text>
                        <Inset side="right" clip="padding-box" pl="current">
                          <InsetImage />
                        </Inset>
                      </Flex>
                    </Card>
                  </Flex>

                  <Flex style={{ marginTop: 24, marginBottom: 24 }} gap="6">
                    <Card size="2" style={{ width: 300 }}>
                      <Inset side="top" clip="padding-box" pb="current">
                        <InsetImage style={{ width: '100%', height: 160 }} />
                      </Inset>
                      <Text as="p" size="3" style={{ width: 240 }}>
                        <Strong>Typography</Strong> is the art and technique of arranging type to make written language
                        legible, readable and appealing when displayed.
                      </Text>
                    </Card>

                    <Card size="2" style={{ width: 300 }}>
                      <Text as="p" size="3" style={{ width: 240 }}>
                        <Strong>Typography</Strong> is the art and technique of arranging type to make written language
                        legible, readable and appealing when displayed.
                      </Text>
                      <Inset side="bottom" clip="padding-box" pt="current">
                        <InsetImage style={{ width: '100%', height: 160 }} />
                      </Inset>
                    </Card>
                  </Flex>
                </div>

                <Heading id="kbd" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#kbd">
                    Kbd
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="specimen">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>

                  <Tabs.Content value="specimen">
                    <Flex direction="column" gap="4" style={{ marginTop: 24, marginBottom: 24 }}>
                      <Text as="p" size="2">
                        Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to toggle dark mode.
                      </Text>
                      <Text as="p" size="3">
                        Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to toggle dark mode.
                      </Text>
                      <Text as="p" size="4">
                        Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to toggle dark mode.
                      </Text>
                      <Text as="p" size="5">
                        Press <Kbd>⌘ C</Kbd> to show/hide the Theme Panel, or press <Kbd>⌘ D</Kbd> to toggle dark mode.
                      </Text>
                    </Flex>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <div style={{ marginTop: 24, marginBottom: 24 }}>
                        <Flex direction="column" gap="4" style={{ whiteSpace: 'nowrap' }}>
                          {kbdPropDefs.size.values.map((size) => (
                            <Flex align="center" key={size}>
                              <div style={{ width: 80, flexShrink: 0 }}>
                                <Text color="gray" size="1">
                                  Size {size}
                                </Text>
                              </div>
                              <Kbd size={size}>⌥ J</Kbd>
                            </Flex>
                          ))}
                        </Flex>
                      </div>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="link" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#link">
                    Link
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="specimen">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                    <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="specimen">
                    <Grid style={{ marginTop: 24, marginBottom: 24 }} gap="6" columns="440px 440px">
                      <Flex direction="column" gap="6">
                        <Text style={{ marginBottom: -20 }} size="1" color="gray" align="center">
                          Accent
                        </Text>

                        <Text as="p" size="4">
                          Susan Kare is an American artist and <Link href="#link">graphic designer</Link>, who
                          contributed <Link href="#link">interface</Link> elements and{' '}
                          <Link href="#link">typefaces</Link> for the first <Link href="#link">Apple Macintosh</Link>{' '}
                          personal computer from 1983 to 1986.
                        </Text>

                        <Text as="p" size="3">
                          Susan Kare is an American artist and <Link href="#link">graphic designer</Link>, who
                          contributed <Link href="#link">interface</Link> elements and{' '}
                          <Link href="#link">typefaces</Link> for the first <Link href="#link">Apple Macintosh</Link>{' '}
                          personal computer from 1983 to 1986.
                        </Text>

                        <Text as="p" size="2">
                          Susan Kare is an American artist and <Link href="#link">graphic designer</Link>, who
                          contributed <Link href="#link">interface</Link> elements and{' '}
                          <Link href="#link">typefaces</Link> for the first <Link href="#link">Apple Macintosh</Link>{' '}
                          personal computer from 1983 to 1986.
                        </Text>
                      </Flex>

                      <Flex direction="column" gap="6">
                        <Text style={{ marginBottom: -20 }} size="1" color="gray" align="center">
                          Gray
                        </Text>

                        <Text as="p" size="4" color="gray">
                          Susan Kare is an American artist and <Link href="#link">graphic designer</Link>, who
                          contributed <Link href="#link">interface</Link> elements and{' '}
                          <Link href="#link">typefaces</Link> for the first <Link href="#link">Apple Macintosh</Link>{' '}
                          personal computer from 1983 to 1986.
                        </Text>

                        <Text as="p" size="3" color="gray">
                          Susan Kare is an American artist and <Link href="#link">graphic designer</Link>, who
                          contributed <Link href="#link">interface</Link> elements and{' '}
                          <Link href="#link">typefaces</Link> for the first <Link href="#link">Apple Macintosh</Link>{' '}
                          personal computer from 1983 to 1986.
                        </Text>

                        <Text as="p" size="2" color="gray">
                          Susan Kare is an American artist and <Link href="#link">graphic designer</Link>, who
                          contributed <Link href="#link">interface</Link> elements and{' '}
                          <Link href="#link">typefaces</Link> for the first <Link href="#link">Apple Macintosh</Link>{' '}
                          personal computer from 1983 to 1986.
                        </Text>
                      </Flex>
                    </Grid>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Flex gap="6">
                                  <Link href="/" color={color}>
                                    Frosted UI
                                  </Link>
                                  <Link href="/" color={color} highContrast>
                                    Frosted UI
                                  </Link>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <Flex direction="column" gap="4">
                        {linkPropDefs.size.values.map((size) => (
                          <Flex align="center" key={size}>
                            <div style={{ width: 80, flexShrink: 0 }}>
                              <Text color="gray" size="1">
                                Size {size}
                              </Text>
                            </div>
                            <Link href="/" size={size}>
                              Frosted UI
                            </Link>
                          </Flex>
                        ))}
                      </Flex>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-weights">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {linkPropDefs.weight.values.map((weight) => (
                            <tr key={weight}>
                              <td>{upperFirst(weight)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Link href="/" weight={weight}>
                                  Frosted UI
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="popover" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#popover">
                    Popover
                  </Link>
                </Heading>
                <Flex align="center" gap="4" style={{ marginTop: 24, marginBottom: 24 }}>
                  <Popover.Root>
                    <Popover.Trigger>
                      <Button size="1">
                        <ChatBubbleIcon width="14" height="14" />
                        Comment
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="1" style={{ width: 250 }}>
                      <Flex gap="3">
                        <Avatar
                          size="2"
                          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          fallback="A"
                        />
                        <div style={{ flexGrow: 1 }}>
                          <TextArea size="1" placeholder="Write a comment…" style={{ height: 80 }} />

                          <Flex gap="3" style={{ marginTop: 12 }} justify="between">
                            <Flex align="center" gap="2" asChild>
                              <label>
                                <Checkbox />
                                <Text size="1">Send to group</Text>
                              </label>
                            </Flex>

                            <Popover.Close>
                              <Button autoFocus size="1">
                                Comment
                              </Button>
                            </Popover.Close>
                          </Flex>
                        </div>
                      </Flex>
                    </Popover.Content>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger>
                      <Button size="2">
                        <ChatBubbleIcon width="16" height="16" />
                        Comment
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="2" style={{ width: 320 }}>
                      <Flex gap="4">
                        <Avatar
                          size="3"
                          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          fallback="A"
                        />
                        <div style={{ flexGrow: 1 }}>
                          <TextArea placeholder="Write a comment…" style={{ height: 100 }} />
                          <Flex gap="3" style={{ marginTop: 12 }} justify="between">
                            <Flex align="center" gap="2" asChild>
                              <label>
                                <Checkbox />
                                <Text size="2">Send to group</Text>
                              </label>
                            </Flex>

                            <Popover.Close>
                              <Button autoFocus size="2">
                                Comment
                              </Button>
                            </Popover.Close>
                          </Flex>
                        </div>
                      </Flex>
                    </Popover.Content>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger>
                      <Button size="3">
                        <ChatBubbleIcon width="16" height="16" />
                        Comment
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="3" style={{ width: 400 }}>
                      <Flex gap="4">
                        <Avatar
                          size="4"
                          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          fallback="A"
                        />
                        <div style={{ flexGrow: 1 }}>
                          <TextArea size="3" placeholder="Write a comment…" style={{ height: 120 }} />
                          <Flex gap="3" style={{ marginTop: 16 }} justify="between">
                            <Flex align="center" gap="2" asChild>
                              <label>
                                <Checkbox />
                                <Text size="2">Send to group</Text>
                              </label>
                            </Flex>

                            <Popover.Close>
                              <Button autoFocus size="3">
                                Comment
                              </Button>
                            </Popover.Close>
                          </Flex>
                        </div>
                      </Flex>
                    </Popover.Content>
                  </Popover.Root>

                  <Popover.Root>
                    <Popover.Trigger>
                      <Button size="4">
                        <ChatBubbleIcon width="18" height="18" />
                        Comment
                      </Button>
                    </Popover.Trigger>
                    <Popover.Content size="4" style={{ width: 400 }}>
                      <Flex gap="4">
                        <Avatar
                          size="5"
                          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                          fallback="A"
                        />
                        <div style={{ flexGrow: 1 }}>
                          <TextArea size="3" placeholder="Write a comment…" style={{ height: 120 }} />
                          <Flex gap="3" style={{ marginTop: 16 }} justify="between">
                            <Flex align="center" gap="2" asChild>
                              <label>
                                <Checkbox size="2" />
                                <Text size="3">Send to group</Text>
                              </label>
                            </Flex>

                            <Popover.Close>
                              <Button autoFocus size="3">
                                Comment
                              </Button>
                            </Popover.Close>
                          </Flex>
                        </div>
                      </Flex>
                    </Popover.Content>
                  </Popover.Root>
                </Flex>

                <Heading id="quote" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#quote">
                    Quote
                  </Link>
                </Heading>
                <div style={{ marginBottom: 64, width: 580 }}>
                  <Quote style={{ marginLeft: '-0.4em' }}>
                    A man who would letterspace lower case would steal sheep
                    <span style={{ marginRight: '-0.2em' }}>,</span>
                  </Quote>{' '}
                  Frederic Goudy liked to say. The reason for not letterspacing lower case is that it hampers
                  legibility. But there are some lowercase alphabets to which this principle doesn’t apply. Moderate
                  letterspacing can make a face such as lowercase Univers bold condensed more legible rather than less
                </div>

                <Heading id="radio-group" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#radio-group">
                    Radio Group
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          {radioGroupPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <RadioGroup.Root variant={variant}>
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                  <RadioGroup.Root variant={variant} defaultValue="value">
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                </Flex>
                              </td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <RadioGroup.Root variant={variant} highContrast defaultValue="value">
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                </Flex>
                              </td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <RadioGroup.Root variant={variant} color="gray">
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                  <RadioGroup.Root variant={variant} color="gray" defaultValue="value">
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                </Flex>
                              </td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <RadioGroup.Root variant={variant} color="gray" highContrast defaultValue="value">
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                </Flex>
                              </td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <RadioGroup.Root variant={variant} disabled>
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                  <RadioGroup.Root variant={variant} disabled defaultValue="value">
                                    <RadioGroup.Item value="value" />
                                  </RadioGroup.Root>
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {radioGroupPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {radioGroupPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Flex align="center" justify="center" gap="4">
                                    <RadioGroup.Root variant={variant} color={color}>
                                      <RadioGroup.Item value="value" />
                                    </RadioGroup.Root>

                                    <RadioGroup.Root variant={variant} color={color} defaultValue="value">
                                      <RadioGroup.Item value="value" />
                                    </RadioGroup.Root>

                                    <RadioGroup.Root variant={variant} color={color} highContrast defaultValue="value">
                                      <RadioGroup.Item value="value" />
                                    </RadioGroup.Root>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {radioGroupPropDefs.variant.values.map((variant) => (
                              <th key={variant} style={{ textAlign: 'left' }}>
                                {upperFirst(variant)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {radioGroupPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              {radioGroupPropDefs.variant.values.map((variant) => (
                                <td key={variant} style={{ textAlign: 'left' }}>
                                  <Flex align="center" justify="start" gap="4">
                                    <RadioGroup.Root size={size} variant={variant} defaultValue="value">
                                      <RadioGroup.Item value="value" />
                                    </RadioGroup.Root>
                                  </Flex>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="scroll area" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#scroll area">
                    Scroll Area
                  </Link>
                </Heading>
                <Flex align="start" direction="column" style={{ marginTop: 24, marginBottom: 24 }}>
                  <Card size="2">
                    <Inset>
                      <ScrollArea
                        type="always"
                        scrollbars="vertical"
                        style={{
                          width: 520,
                          height: 180,
                          // @ts-ignore
                          '--scrollarea-scrollbar-margin-top': 'var(--space-3)',
                          '--scrollarea-scrollbar-margin-bottom': 'var(--space-3)',
                          '--scrollarea-scrollbar-margin-left': 'var(--space-3)',
                          '--scrollarea-scrollbar-margin-right': 'var(--space-3)',
                        }}
                      >
                        <Inset p="current" style={{ margin: 0 }}>
                          <div style={{ paddingRight: 24 }}>
                            <Flex direction="column" gap="4">
                              <Text as="p" size="2">
                                Three fundamental aspects of typography are legibility, readability, and aesthetics.
                                Although in a non-technical sense “legible” and “readable” are often used synonymously,
                                typographically they are separate but related concepts.
                              </Text>

                              <Text as="p" size="2">
                                Legibility describes how easily individual characters can be distinguished from one
                                another. It is described by Walter Tracy as “the quality of being decipherable and
                                recognisable”. For instance, if a “b” and an “h”, or a “3” and an “8”, are difficult to
                                distinguish at small sizes, this is a problem of legibility.
                              </Text>

                              <Text as="p" size="2">
                                Typographers are concerned with legibility insofar as it is their job to select the
                                correct font to use. Brush Script is an example of a font containing many characters
                                that might be difficult to distinguish. The selection of cases influences the legibility
                                of typography because using only uppercase letters (all-caps) reduces legibility.
                              </Text>
                            </Flex>
                          </div>
                        </Inset>
                      </ScrollArea>
                    </Inset>
                  </Card>
                </Flex>

                <Heading id="select" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#select">
                    Select
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>Accent</th>
                            <th>Gray</th>
                            <th>Placeholder</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectTriggerPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Select.Root defaultValue="apple">
                                  <Select.Trigger variant={variant} />
                                  <Select.Content variant={selectTriggerVariantToSelectContentVariant(variant)}>
                                    <ExampleSelectContent />
                                  </Select.Content>
                                </Select.Root>
                              </td>
                              <td>
                                <Select.Root defaultValue="apple">
                                  <Select.Trigger variant={variant} color="gray" />
                                  <Select.Content
                                    variant={selectTriggerVariantToSelectContentVariant(variant)}
                                    color="gray"
                                    highContrast
                                  >
                                    <ExampleSelectContent />
                                  </Select.Content>
                                </Select.Root>
                              </td>
                              <td>
                                <Select.Root>
                                  <Select.Trigger variant={variant} placeholder="Choose a fruit…" />
                                  <Select.Content variant={selectTriggerVariantToSelectContentVariant(variant)}>
                                    <ExampleSelectContent />
                                  </Select.Content>
                                </Select.Root>
                              </td>
                              <td>
                                <Select.Root defaultValue="apple" disabled>
                                  <Select.Trigger variant={variant} />
                                  <Select.Content variant={selectTriggerVariantToSelectContentVariant(variant)}>
                                    <ExampleSelectContent />
                                  </Select.Content>
                                </Select.Root>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {selectTriggerPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {selectTriggerPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <Select.Root defaultValue="apple">
                                    <Select.Trigger variant={variant} color={color} />
                                    <Select.Content
                                      variant={selectTriggerVariantToSelectContentVariant(variant)}
                                      color={color}
                                    >
                                      <ExampleSelectContent />
                                    </Select.Content>
                                  </Select.Root>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectTriggerPropDefs.variant.values.map((variant, index) => (
                            <React.Fragment key={variant}>
                              {index > 0 && (
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              )}
                              {selectRootPropDefs.size.values.map((size) => (
                                <tr key={size}>
                                  <td>Size {size}</td>
                                  <td style={{ textAlign: 'left' }}>
                                    <Select.Root size={size} defaultValue="apple">
                                      <Select.Trigger variant={variant} />
                                      <Select.Content variant={selectTriggerVariantToSelectContentVariant(variant)}>
                                        <ExampleSelectContent />
                                      </Select.Content>
                                    </Select.Root>
                                  </td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="separator" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#separator">
                    Separator
                  </Link>
                </Heading>
                <Flex style={{ marginTop: 24, marginBottom: 24, whiteSpace: 'nowrap' }}>
                  <Text size="2">
                    Tools for building high-quality, accessible UI.
                    <Separator style={{ marginTop: 12, marginBottom: 12 }} size="4" />
                    <Flex gap="3" align="center">
                      Themes
                      <Separator orientation="vertical" />
                      Primitives
                      <Separator orientation="vertical" />
                      Icons
                      <Separator orientation="vertical" />
                      Colors
                    </Flex>
                  </Text>
                </Flex>

                <Heading id="slider" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#slider">
                    Slider
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sliderPropDefs.variant.values.map((variant, index) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <Slider defaultValue={[33 + 17 * index]} variant={variant} />
                              </td>
                              <td>
                                <Slider defaultValue={[33 + 17 * index]} variant={variant} highContrast />
                              </td>
                              <td>
                                <Slider defaultValue={[33 + 17 * index]} variant={variant} color="gray" />
                              </td>
                              <td>
                                <Slider defaultValue={[33 + 17 * index]} variant={variant} color="gray" highContrast />
                              </td>
                              <td>
                                <Slider defaultValue={[33 + 17 * index]} variant={variant} disabled />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {sliderPropDefs.variant.values.map((variant) => (
                              <th key={variant} colSpan={2}>
                                {upperFirst(variant)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color, index) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {sliderPropDefs.variant.values.map((variant) => (
                                <React.Fragment key={variant}>
                                  <td>
                                    <Slider defaultValue={[30 + index * 2]} color={color} variant={variant} />
                                  </td>
                                  <td>
                                    <Slider
                                      defaultValue={[30 + index * 2]}
                                      color={color}
                                      variant={variant}
                                      highContrast
                                    />
                                  </td>
                                </React.Fragment>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sliderPropDefs.variant.values.map((variant, index) => (
                            <React.Fragment key={variant}>
                              {index > 0 && (
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              )}
                              {sliderPropDefs.size.values.map((size, sizeIndex) => (
                                <tr key={size}>
                                  <td>Size {size}</td>
                                  <td style={{ textAlign: 'left' }}>
                                    <Flex align="center" justify="start" gap="4">
                                      <Slider defaultValue={[33 + 17 * sizeIndex]} size={size} variant={variant} />
                                    </Flex>
                                  </td>
                                </tr>
                              ))}
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="switch" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#switch">
                    Switch
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th colSpan={2}>Accent</th>
                            <th colSpan={2}>Gray</th>
                            <th>Disabled</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{upperFirst('Default')}</td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch />
                                <Switch defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch highContrast defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch color="gray" />
                                <Switch color="gray" defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch color="gray" highContrast defaultChecked />
                              </Flex>
                            </td>
                            <td>
                              <Flex align="center" justify="center" gap="4">
                                <Switch disabled />
                                <Switch disabled defaultChecked />
                              </Flex>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>{upperFirst('Default')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Flex align="center" justify="center" gap="4">
                                  <Switch color={color} />
                                  <Switch color={color} defaultChecked />
                                  <Switch color={color} highContrast defaultChecked />
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>
                              <mark>SWAG</mark>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {switchPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Flex align="center" justify="start" gap="4">
                                  <Switch size={size} defaultChecked />
                                </Flex>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="table" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#table">
                    Table
                  </Link>
                </Heading>
                <div style={{ marginTop: 24, marginBottom: 24, whiteSpace: 'nowrap' }}>
                  <Flex direction="column" style={{ marginBottom: 64, width: 1000 }}>
                    <Flex justify="center" position="relative" style={{ padding: 100 }}>
                      <Flex
                        align="center"
                        justify="center"
                        position="absolute"
                        inset="0"
                        style={{ overflow: 'hidden' }}
                      >
                        <PanelBackgroundImage id="1" width="100%" height="200%" />
                      </Flex>

                      <Table.Root variant="surface" size="2">
                        <Table.Table>
                          <Table.Header>
                            <Table.Row>
                              <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                              <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                              <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                            </Table.Row>
                          </Table.Header>

                          <Table.Body>
                            <Table.Row>
                              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                              <Table.Cell>danilo@example.com</Table.Cell>
                              <Table.Cell>Developer</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                              <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                              <Table.Cell>zahra@example.com</Table.Cell>
                              <Table.Cell>Admin</Table.Cell>
                            </Table.Row>

                            <Table.Row>
                              <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                              <Table.Cell>jasper@example.com</Table.Cell>
                              <Table.Cell>Developer</Table.Cell>
                            </Table.Row>
                          </Table.Body>
                        </Table.Table>
                      </Table.Root>
                    </Flex>
                  </Flex>

                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th />
                        {tableRootPropDefs.variant.values.map((variant) => (
                          <th
                            key={variant}
                            style={{
                              paddingRight: 'var(--space-8)',
                              paddingBottom: 'var(--space-5)',
                            }}
                          >
                            {upperFirst(variant)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableRootPropDefs.size.values.map((size) => (
                        <tr key={size}>
                          <td>Size {size}</td>
                          {tableRootPropDefs.variant.values.map((variant) => (
                            <td
                              key={variant}
                              style={{
                                paddingRight: 'var(--space-8)',
                                paddingBottom: 'var(--space-8)',
                              }}
                            >
                              <Table.Root variant={variant} size={size}>
                                <Table.Table>
                                  <Table.Header>
                                    <Table.Row>
                                      <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                                      <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                                      <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                                    </Table.Row>
                                  </Table.Header>

                                  <Table.Body>
                                    <Table.Row>
                                      <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                      <Table.Cell>danilo@example.com</Table.Cell>
                                      <Table.Cell>Developer</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                      <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                      <Table.Cell>zahra@example.com</Table.Cell>
                                      <Table.Cell>Admin</Table.Cell>
                                    </Table.Row>

                                    <Table.Row>
                                      <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                                      <Table.Cell>jasper@example.com</Table.Cell>
                                      <Table.Cell>Developer</Table.Cell>
                                    </Table.Row>
                                  </Table.Body>
                                </Table.Table>
                              </Table.Root>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Heading id="tabs" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#tabs">
                    Tabs
                  </Link>
                </Heading>
                <Flex gap="8" align="end" style={{ marginBottom: 64 }}>
                  {tabsListPropDefs.size.values.map((size) => (
                    <Tabs.Root key={size} defaultValue="account" activationMode="manual">
                      <Tabs.List size={size}>
                        <Tabs.Trigger value="account">Account</Tabs.Trigger>
                        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                      </Tabs.List>
                    </Tabs.Root>
                  ))}
                </Flex>

                <Heading id="text" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#text">
                    Text
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="specimen">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="specimen">Specimen</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                    <Tabs.Trigger value="all-weights">All weights</Tabs.Trigger>
                  </Tabs.List>

                  <Tabs.Content value="specimen">
                    <div style={{ marginTop: 24, marginBottom: 24, width: 760 }}>
                      <Text as="p" size="5">
                        The goal of typography is to relate font size, line height, and line width in a proportional way
                        that maximizes beauty and makes reading easier and more pleasant. The question is: What
                        proportion(s) will give us the best results? The golden ratio is often observed in nature where
                        beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these
                        attributes in our typography.
                      </Text>
                    </div>

                    <div style={{ marginTop: 24, marginBottom: 24, width: 700 }}>
                      <Text as="p" size="4">
                        The goal of typography is to relate font size, line height, and line width in a proportional way
                        that maximizes beauty and makes reading easier and more pleasant. The question is: What
                        proportion(s) will give us the best results? The golden ratio is often observed in nature where
                        beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these
                        attributes in our typography.
                      </Text>
                    </div>

                    <div style={{ marginTop: 24, marginBottom: 24, width: 640 }}>
                      <Text as="p" size="3">
                        The goal of typography is to relate font size, line height, and line width in a proportional way
                        that maximizes beauty and makes reading easier and more pleasant. The question is: What
                        proportion(s) will give us the best results? The golden ratio is often observed in nature where
                        beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these
                        attributes in our typography.
                      </Text>
                    </div>

                    <div style={{ marginTop: 24, marginBottom: 24, width: 572 }}>
                      <Text as="p" size="2">
                        The goal of typography is to relate font size, line height, and line width in a proportional way
                        that maximizes beauty and makes reading easier and more pleasant. The question is: What
                        proportion(s) will give us the best results? The golden ratio is often observed in nature where
                        beauty and utility intersect; perhaps we can use this “divine” proportion to enhance these
                        attributes in our typography.
                      </Text>
                    </div>

                    <Grid gap="6" columns="2" align="center" style={{ width: 540, margin: '48px 0' }}>
                      <div>
                        <Text size="3" as="div" weight="bold">
                          Quick Look
                        </Text>
                        <Text size="2" as="div">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>

                      <div>
                        <Text size="2" as="div" weight="bold">
                          Quick Look
                        </Text>
                        <Text size="2" as="div">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>

                      <div style={{ width: '90%' }}>
                        <Text size="2" as="div" weight="bold">
                          Quick Look
                        </Text>
                        <Text size="1" as="div">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>

                      <div style={{ width: '90%' }}>
                        <Text size="1" as="div" weight="bold">
                          Quick Look
                        </Text>
                        <Text size="1" as="div">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>
                    </Grid>

                    <Grid gap="6" columns="2" align="center" style={{ width: 540, margin: '48px 0' }}>
                      <div>
                        <Text size="3" as="div" weight="medium">
                          Quick Look
                        </Text>
                        <Text size="2" as="div" color="gray">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>

                      <div>
                        <Text size="2" as="div" weight="medium">
                          Quick Look
                        </Text>
                        <Text size="2" as="div" color="gray">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>

                      <div style={{ width: '90%' }}>
                        <Text size="2" as="div" weight="medium">
                          Quick Look
                        </Text>
                        <Text size="1" as="div" color="gray">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>

                      <div style={{ width: '90%' }}>
                        <Text size="1" as="div" weight="medium">
                          Quick Look
                        </Text>
                        <Text size="1" as="div" color="gray">
                          Extensions from the installed software may add new features to this app.
                        </Text>
                      </div>
                    </Grid>

                    <Grid
                      gap="6"
                      columns="repeat(4, auto)"
                      align="center"
                      style={{ whiteSpace: 'nowrap', margin: '48px 0' }}
                    >
                      <Flex direction="column" align="center" gap="1">
                        <Button variant="surface" color="gray" highContrast size="1">
                          Quick Look
                        </Button>
                        <Text size="1" color="gray">
                          Opens in a new window
                        </Text>
                      </Flex>

                      <Flex direction="column" align="center" gap="1">
                        <Button variant="surface" color="gray" highContrast size="2">
                          Quick Look
                        </Button>
                        <Text size="1" color="gray">
                          Opens in a new window
                        </Text>
                      </Flex>

                      <Flex direction="column" align="center" gap="1">
                        <Button variant="surface" color="gray" highContrast size="2">
                          Quick Look
                        </Button>
                        <Text size="2" color="gray">
                          Opens in a new window
                        </Text>
                      </Flex>

                      <Flex direction="column" align="center" gap="1">
                        <Button variant="surface" color="gray" highContrast size="3">
                          Quick Look
                        </Button>
                        <Text size="2" color="gray">
                          Opens in a new window
                        </Text>
                      </Flex>
                    </Grid>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color} style={{ verticalAlign: 'baseline' }}>
                              <td>{upperFirst(color)}</td>
                              <td>
                                <Text style={{ marginRight: 16 }} color={color}>
                                  The quick brown fox jumps over the lazy dog
                                </Text>
                                <Text color={color} highContrast>
                                  The quick brown fox jumps over the lazy dog
                                </Text>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <Flex direction="column" gap="4" style={{ whiteSpace: 'nowrap' }}>
                        {textPropDefs.size.values.map((size) => (
                          <Flex align="center" key={size}>
                            <div style={{ width: 80, flexShrink: 0 }}>
                              <Text color="gray" size="1">
                                Size {size}
                              </Text>
                            </div>
                            <Text size={size}>The quick brown fox jumped over the lazy dog</Text>
                          </Flex>
                        ))}
                      </Flex>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-weights">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table} style={{ whiteSpace: 'nowrap' }}>
                        <tbody>
                          {textPropDefs.weight.values.map((weight) => (
                            <tr key={weight} style={{ verticalAlign: 'baseline' }}>
                              <td>{upperFirst(weight)}</td>
                              <td style={{ textAlign: 'left' }}>
                                <Text weight={weight}>The quick brown fox jumps over the lazy dog</Text>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="text-area" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#text-area">
                    Text Area
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>Accent</th>
                            <th>Gray</th>
                            <th>Disabled</th>
                            <th>Read-only</th>
                          </tr>
                        </thead>
                        <tbody>
                          {textAreaPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <TextArea variant={variant} placeholder="Reply to comment" />
                              </td>
                              <td>
                                <TextArea variant={variant} color="gray" placeholder="Reply to comment" />
                              </td>
                              <td>
                                <TextArea
                                  variant={variant}
                                  placeholder="Reply to comment"
                                  defaultValue="The :autofill CSS pseudo-class matches when an <input> element has its value autofilled by the browser."
                                  disabled
                                />
                              </td>
                              <td>
                                <TextArea
                                  variant={variant}
                                  placeholder="Reply to comment"
                                  defaultValue="The :autofill CSS pseudo-class matches when an <input> element has its value autofilled by the browser."
                                  readOnly
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {textAreaPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {textAreaPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <TextArea color={color} variant={variant} placeholder="Reply to comment" />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {textAreaPropDefs.variant.values.map((variant) => (
                              <th key={variant} style={{ textAlign: 'left' }}>
                                {upperFirst(variant)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {textAreaPropDefs.size.values.map((size) => (
                            <tr key={size}>
                              <td>Size {size}</td>
                              {textAreaPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <TextArea
                                    size={size}
                                    variant={variant}
                                    placeholder="Reply to comment"
                                    style={{ width: 120 + Number(size) * 20 }}
                                  />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="text-field" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#text-field">
                    Text Field
                  </Link>
                </Heading>
                <Tabs.Root defaultValue="theme-colors">
                  <Tabs.List size="2">
                    <Tabs.Trigger value="theme-colors">Theme colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-colors">All colors</Tabs.Trigger>
                    <Tabs.Trigger value="all-sizes">All sizes</Tabs.Trigger>
                  </Tabs.List>
                  <Tabs.Content value="theme-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th>Accent</th>
                            <th>Gray</th>
                            <th>Disabled</th>
                            <th>Read-only</th>
                          </tr>
                        </thead>
                        <tbody>
                          {textFieldPropDefs.variant.values.map((variant) => (
                            <tr key={variant}>
                              <td>{upperFirst(variant)}</td>
                              <td>
                                <TextField.Root variant={variant}>
                                  <TextField.Slot>
                                    <MagnifyingGlassIcon width="16" height="16" />
                                  </TextField.Slot>
                                  <TextField.Input placeholder="Search" />
                                  <TextField.Slot>
                                    <IconButton variant="ghost" color="gray" size="1">
                                      <InfoCircledIcon />
                                    </IconButton>
                                  </TextField.Slot>
                                </TextField.Root>
                              </td>
                              <td>
                                <TextField.Root variant={variant} color="gray">
                                  <TextField.Slot>
                                    <MagnifyingGlassIcon width="16" height="16" />
                                  </TextField.Slot>
                                  <TextField.Input placeholder="Search" />
                                  <TextField.Slot>
                                    <IconButton variant="ghost" color="gray" size="1">
                                      <InfoCircledIcon />
                                    </IconButton>
                                  </TextField.Slot>
                                </TextField.Root>
                              </td>
                              <td>
                                <TextField.Root variant={variant}>
                                  <TextField.Slot>
                                    <MagnifyingGlassIcon width="16" height="16" />
                                  </TextField.Slot>
                                  <TextField.Input placeholder="Search" defaultValue="Quick brown fox" disabled />
                                  <TextField.Slot>
                                    <IconButton variant="ghost" color="gray" size="1" disabled>
                                      <InfoCircledIcon />
                                    </IconButton>
                                  </TextField.Slot>
                                </TextField.Root>
                              </td>
                              <td>
                                <TextField.Root variant={variant}>
                                  <TextField.Slot>
                                    <MagnifyingGlassIcon width="16" height="16" />
                                  </TextField.Slot>
                                  <TextField.Input placeholder="Search" defaultValue="Quick brown fox" readOnly />
                                  <TextField.Slot>
                                    <IconButton variant="ghost" color="gray" size="1">
                                      <InfoCircledIcon />
                                    </IconButton>
                                  </TextField.Slot>
                                </TextField.Root>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-colors">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            {textFieldPropDefs.variant.values.map((variant) => (
                              <th key={variant}>{upperFirst(variant)}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {themeAccentColorsOrdered.map((color) => (
                            <tr key={color}>
                              <td>{upperFirst(color)}</td>
                              {textFieldPropDefs.variant.values.map((variant) => (
                                <td key={variant}>
                                  <TextField.Root color={color} variant={variant}>
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="16" height="16" />
                                    </TextField.Slot>
                                    <TextField.Input placeholder="Search" />
                                    <TextField.Slot>
                                      <IconButton variant="ghost" color="gray" size="1">
                                        <InfoCircledIcon />
                                      </IconButton>
                                    </TextField.Slot>
                                  </TextField.Root>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>

                  <Tabs.Content value="all-sizes">
                    <div style={{ marginTop: 24, marginBottom: 24 }}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th />
                            <th style={{ textAlign: 'left' }}>Default</th>
                          </tr>
                        </thead>
                        <tbody>
                          {textFieldPropDefs.variant.values.map((variant, index) => (
                            <React.Fragment key={variant}>
                              {index > 0 && (
                                <tr>
                                  <td>&nbsp;</td>
                                </tr>
                              )}
                              <tr>
                                <td>Size 1</td>
                                <td>
                                  <TextField.Root size="1" variant={variant} style={{ width: 140 }}>
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="14" height="14" />
                                    </TextField.Slot>
                                    <TextField.Input placeholder="Search" />
                                  </TextField.Root>
                                </td>
                              </tr>
                              <tr>
                                <td>Size 2</td>
                                <td>
                                  <TextField.Root size="2" variant={variant} style={{ width: 160 }}>
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="16" height="16" />
                                    </TextField.Slot>
                                    <TextField.Input placeholder="Search" />
                                    <TextField.Slot>
                                      <IconButton variant="ghost" color="gray" size="1">
                                        <InfoCircledIcon />
                                      </IconButton>
                                    </TextField.Slot>
                                  </TextField.Root>
                                </td>
                              </tr>
                              <tr>
                                <td>Size 3</td>
                                <td>
                                  <TextField.Root size="3" variant={variant}>
                                    <TextField.Slot>
                                      <MagnifyingGlassIcon width="18" height="18" />
                                    </TextField.Slot>
                                    <TextField.Input placeholder="Search" />
                                    <TextField.Slot>
                                      <IconButton variant="ghost" color="gray" size="2">
                                        <InfoCircledIcon />
                                      </IconButton>
                                    </TextField.Slot>
                                  </TextField.Root>
                                </td>
                              </tr>
                            </React.Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tabs.Content>
                </Tabs.Root>

                <Heading id="tooltip" style={{ marginBottom: 24 }}>
                  <Link color="gray" underline="hover" highContrast href="#tooltip">
                    Tooltip
                  </Link>
                </Heading>
                <Flex style={{ marginTop: 24, marginBottom: 24 }}>
                  <Tooltip content="The quick brown fox">
                    <Flex
                      p="4"
                      tabIndex={0}
                      align="center"
                      style={{
                        outline: 0,
                        borderRadius: 'var(--radius-3)',
                        border: `1px dashed var(--accent-7)`,
                        cursor: 'default',
                        color: 'var(--accent-12)',
                        backgroundColor: 'var(--accent-a2)',
                      }}
                    >
                      <Text size="2" trim="both">
                        Hover here
                      </Text>
                    </Flex>
                  </Tooltip>
                </Flex>
              </div>
            </div>
          </Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
}

function AvatarIconFallback() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: '60%', height: '60%' }}
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExampleDropdownMenuContent() {
  return (
    <>
      <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent>
          <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
          <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>

      <DropdownMenu.Separator />
      <DropdownMenu.Item>Share</DropdownMenu.Item>
      <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </DropdownMenu.Item>
    </>
  );
}

function RightClickArea(props: {
  size?: (typeof contextMenuContentPropDefs.size.values)[number];
  color?: (typeof contextMenuContentPropDefs.color.values)[number];
  highContrast?: boolean;
}) {
  const {
    size = contextMenuContentPropDefs.size.default,
    color = 'accent',
    highContrast = contextMenuContentPropDefs.highContrast.default,
  } = props;
  return (
    <Grid
      data-accent-color={color}
      height={size === '2' ? '8' : '6'}
      px="3"
      style={{
        placeItems: 'center',
        borderRadius: 'var(--radius-3)',
        border: `1px dashed var(--accent-7)`,
        cursor: 'default',
        whiteSpace: 'nowrap',
        backgroundColor: 'var(--accent-a2)',
      }}
    >
      {/* @ts-ignore */}
      <Text size={size} color={color} highContrast={highContrast}>
        Right-click here
      </Text>
    </Grid>
  );
}

function ExampleContextMenuContent() {
  return (
    <>
      <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
      <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

      <ContextMenu.Sub>
        <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
        <ContextMenu.SubContent>
          <ContextMenu.Item>Move to project…</ContextMenu.Item>
          <ContextMenu.Item>Move to folder…</ContextMenu.Item>

          <ContextMenu.Separator />
          <ContextMenu.Item>Advanced options…</ContextMenu.Item>
        </ContextMenu.SubContent>
      </ContextMenu.Sub>

      <ContextMenu.Separator />
      <ContextMenu.Item>Share</ContextMenu.Item>
      <ContextMenu.Item>Add to favorites</ContextMenu.Item>
      <ContextMenu.Separator />
      <ContextMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </ContextMenu.Item>
    </>
  );
}

function ExampleSelectContent() {
  return (
    <>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="orange">Orange</Select.Item>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="grapes" disabled>
          Grape
        </Select.Item>
      </Select.Group>

      <Select.Separator />

      <Select.Group>
        <Select.Label>Vegetables</Select.Label>
        <Select.Item value="carrot">Carrot</Select.Item>
        <Select.Item value="potato">Potato</Select.Item>
      </Select.Group>
    </>
  );
}

const aspectRatioImage = (
  <img
    src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
    alt="A photo of a blue sky opening up from within a red canyon."
    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
  />
);

function buttonSizeToIconSize(buttonSize: (typeof buttonPropDefs.size.values)[number]) {
  if (buttonSize === '1' || buttonSize === '2') return { width: 16, height: 16 };
  if (buttonSize === '3') return { width: 18, height: 18 };
  if (buttonSize === '4') return { width: 20, height: 20 };
}

function calloutSizeToIconSize(calloutSize: (typeof calloutRootPropDefs.size.values)[number]) {
  if (calloutSize === '1' || calloutSize === '2') return { width: 16, height: 16 };
  if (calloutSize === '3') return { width: 20, height: 20 };
}

const InsetImage = (props: React.ComponentPropsWithoutRef<'img'>) => (
  <img
    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
    alt="Bold typography"
    {...props}
    style={{
      display: 'block',
      objectFit: 'cover',
      height: '100%',
      width: 150,
      backgroundColor: 'var(--gray-5)',
      ...props.style,
    }}
  />
);

function selectTriggerVariantToSelectContentVariant(
  triggerVariant: (typeof selectTriggerPropDefs.variant.values)[number],
) {
  if (triggerVariant === 'soft' || triggerVariant === 'ghost') return 'soft';
  return 'solid';
}

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ChatBubbleIcon = (props: React.ComponentPropsWithoutRef<'svg'>) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const PanelBackgroundImage = ({ id, style, ...props }: React.ComponentPropsWithoutRef<'svg'> & { id: string }) => (
  <svg
    width="2560"
    height="1920"
    viewBox="0 0 2560 1920"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.6, ...style }}
    {...props}
  >
    <g>
      <path
        d="M-119.809 -1055.99L859.027 -684.98C915.435 -663.6 955.626 -624.994 968.519 -579.807L1129.49 -15.6245L1860.47 -241.727C1919.02 -259.836 1985.68 -257.939 2042.09 -236.559L3020.93 134.453C3124.79 173.822 3164.97 266.777 3110.66 342.073L2850.06 703.385C2827.36 734.857 2790.34 759.666 2745.28 773.604L1467.45 1168.86L1748.58 2154.16C1758.67 2189.52 1751.28 2226.32 1727.72 2258.12L1361.75 2752.01L203.258 2312.91C146.85 2291.53 106.659 2252.92 93.7664 2207.73L-67.2076 1643.55L-798.184 1869.65C-856.73 1887.76 -923.398 1885.87 -979.806 1864.48L-2138.3 1425.38L-1787.63 925.687C-1765.05 893.507 -1727.57 868.111 -1681.77 853.942L-405.167 459.07L-686.568 -527.183C-696.491 -561.961 -689.511 -598.157 -666.811 -629.629L-406.21 -990.941C-351.902 -1066.24 -223.676 -1095.36 -119.809 -1055.99Z"
        fill={`url(#paint0_radial_37_453-${id})`}
      />
      <path
        d="M885.9 -99.2158L1864.74 271.796C1921.14 293.177 1961.34 331.783 1974.23 376.97L2135.2 941.152L2866.18 715.049C2924.72 696.94 2991.39 698.837 3047.8 720.218L4026.64 1091.23C4130.5 1130.6 4170.68 1223.55 4116.37 1298.85L3855.77 1660.16C3833.07 1691.63 3796.05 1716.44 3750.99 1730.38L2473.16 2125.63L2754.29 3110.94C2764.38 3146.29 2756.99 3183.09 2733.43 3214.9L2367.46 3708.79L1208.97 3269.68C1152.56 3248.3 1112.37 3209.7 1099.48 3164.51C816.824 2173.87 747.087 1929.46 319.141 429.593C309.218 394.815 316.198 358.619 338.898 327.147L599.499 -34.1647C653.807 -109.461 782.033 -138.585 885.9 -99.2158Z"
        fill={`url(#paint1_radial_37_453-${id})`}
      />
      <path
        d="M1597.13 169.784L2575.97 540.796C2632.38 562.177 2672.57 600.783 2685.46 645.97L2846.44 1210.15L3577.41 984.049C3635.96 965.94 3702.63 967.837 3759.03 989.218L4737.87 1360.23C4841.74 1399.6 4881.91 1492.55 4827.61 1567.85L4567 1929.16C4544.3 1960.63 4507.28 1985.44 4462.22 1999.38L3184.4 2394.63L3465.53 3379.94C3475.61 3415.29 3468.23 3452.09 3444.66 3483.9L3078.69 3977.79L1920.2 3538.68C1863.79 3517.3 1823.6 3478.7 1810.71 3433.51L1649.74 2869.33L918.759 3095.43C860.213 3113.54 793.545 3111.64 737.138 3090.26L-421.356 2651.15L-70.6875 2151.46C-48.1049 2119.28 -10.63 2093.89 35.1782 2079.72L1311.78 1684.85L1030.38 698.593C1020.45 663.815 1027.43 627.619 1050.13 596.147L1310.73 234.835C1365.04 159.539 1493.27 130.415 1597.13 169.784Z"
        fill={`url(#paint2_radial_37_453-${id})`}
      />
      <g filter={`url(#filter0_f_37_453-${id})`}>
        <path
          d="M2395.71 -658.308L3374.55 -287.296C3430.96 -265.915 3471.15 -227.309 3484.04 -182.122L3645.01 382.06L4375.99 155.958C4434.54 137.848 4501.2 139.745 4557.61 161.126L5536.45 532.138C5640.32 571.507 5680.49 664.461 5626.18 739.757L5365.58 1101.07C5342.88 1132.54 5305.86 1157.35 5260.8 1171.29L3982.97 1566.54L4264.1 2551.84C4274.19 2587.2 4266.81 2624 4243.24 2655.81L3877.27 3149.7L2718.78 2710.59C2662.37 2689.21 2622.18 2650.6 2609.29 2605.42L2448.31 2041.24L1717.34 2267.34C1658.79 2285.45 1592.12 2283.55 1535.72 2262.17L377.222 1823.06L727.891 1323.37C750.473 1291.19 787.948 1265.8 833.756 1251.63L2110.35 856.754L1828.95 -129.498C1819.03 -164.277 1826.01 -200.472 1848.71 -231.944L2109.31 -593.257C2163.62 -668.552 2291.85 -697.677 2395.71 -658.308Z"
          fill={`url(#paint3_radial_37_453-${id})`}
        />
      </g>
      <path
        d="M3059.26 767.932L3310.25 1618.16C3324.72 1667.15 3315.74 1727.88 3285.79 1783.6L2911.89 2479.3L3514.51 2558.36C3562.77 2564.69 3599.15 2596.78 3613.62 2645.77L3864.61 3496C3891.25 3586.22 3837.41 3706.98 3744.37 3765.74L3297.91 4047.66C3259.03 4072.22 3217.48 4082.97 3180.34 4078.1L2126.89 3939.89L1473.9 5154.88C1450.47 5198.48 1415.9 5235.81 1376.24 5260.35L760.412 5641.34L463.348 4635.06C448.884 4586.06 457.863 4525.33 487.81 4469.61L861.713 3773.92L259.094 3694.86C210.828 3688.53 174.448 3656.44 159.984 3607.44L-137.08 2601.17L474.823 2206.89C514.228 2181.5 556.514 2170.3 594.278 2175.25L1646.71 2313.32L2300.33 1097.17C2323.38 1054.28 2357.22 1017.43 2396.11 992.876L2842.57 710.953C2935.61 652.202 3032.62 677.712 3059.26 767.932Z"
        fill={`url(#paint4_radial_37_453-${id})`}
      />
    </g>
    <defs>
      <filter
        id={`filter0_f_37_453-${id}`}
        x="213.223"
        y="-839.851"
        width="5601.16"
        height="4153.55"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="82" result="effect1_foregroundBlur_37_453" />
      </filter>
      <radialGradient
        id={`paint0_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-804.109 -2036.8) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--accent-7)" />
        <stop offset="0.364583" stopColor="var(--accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--accent-9)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint1_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(201.6 -1080.02) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--accent-2)" />
        <stop offset="0.333803" stopColor="var(--accent-1)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--accent-9)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint2_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(912.834 -811.021) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.140625" stopColor="var(--accent-3)" />
        <stop offset="0.333803" stopColor="var(--accent-7)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--accent-9)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint3_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1711.41 -1639.11) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--accent-7)" />
        <stop offset="0.333803" stopColor="var(--accent-1)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--accent-9)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint4_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(3479.06 -623.459) rotate(113.028) scale(8332.26 4870.62)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--accent-7)" />
        <stop offset="0.333803" stopColor="var(--accent-1)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--accent-9)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
    </defs>
  </svg>
);
