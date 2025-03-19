import { Pencil1Icon } from '@radix-ui/react-icons';
import {
  //
  Avatar,
  Button,
  Dialog,
  Flex,
  IconButton,
  Select,
  Separator,
  Text,
  TextField,
  Theme,
  //
  ThemePanel,
} from 'frosted-ui';
import * as React from 'react';
import styles from './page.module.css';
import { users } from './users';

export default function Demo() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={styles.body}>
        <Theme asChild appearance="dark" accentColor="mint">
          <div id="root">
            <ThemePanel />

            {users.map((user) => (
              <React.Fragment key={user.id}>
                <Flex align="center" justify="between">
                  <Flex align="center" gap="3">
                    <Avatar src={user.image} fallback={user.name[0]} />
                    <Flex direction="column">
                      <Text size="2">{user.name}</Text>
                      <Text size="1" color="gray">
                        {user.handle}
                      </Text>
                    </Flex>
                  </Flex>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <IconButton aria-label="Edit user" variant="soft">
                        <Pencil1Icon />
                      </IconButton>
                    </Dialog.Trigger>
                    <Dialog.Content>
                      <Dialog.Title>{user.name}</Dialog.Title>
                      <Dialog.Description style={{ marginBottom: 24 }}>Edit and save details below.</Dialog.Description>

                      <Text size="1" weight="bold" color="gray" style={{ marginBottom: 8 }}>
                        Name
                      </Text>
                      <TextField.Input defaultValue={user.name} style={{ marginBottom: 16 }} />
                      <Text size="1" weight="bold" color="gray" style={{ marginBottom: 8 }}>
                        Role
                      </Text>
                      <Select.Root defaultValue={user.role}>
                        <Select.Trigger />
                        <Select.Content variant="soft" color="gray">
                          <Select.Item value="viewer">Viewer</Select.Item>
                          <Select.Item value="maintainer">Maintainer</Select.Item>
                          <Select.Item value="contributor">Contributor</Select.Item>
                          <Select.Item value="admin">Admin</Select.Item>
                        </Select.Content>
                      </Select.Root>

                      <Flex justify="end" gap="3" style={{ marginTop: 20 }}>
                        <Dialog.Close>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                          <Button>Save</Button>
                        </Dialog.Close>
                      </Flex>
                    </Dialog.Content>
                  </Dialog.Root>
                </Flex>
                <Separator size="4" style={{ marginTop: 24, marginBottom: 24 }} />
              </React.Fragment>
            ))}
          </div>
        </Theme>
      </body>
    </html>
  );
}
