import { Pencil1Icon } from '@radix-ui/react-icons';
import {
  //
  Avatar,
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  IconButton,
  Select,
  Separator,
  Text,
  TextFieldInput,
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
                  <DialogRoot>
                    <DialogTrigger>
                      <IconButton aria-label="Edit user" variant="soft">
                        <Pencil1Icon />
                      </IconButton>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>{user.name}</DialogTitle>
                      <DialogDescription mb="5">
                        Edit and save details below.
                      </DialogDescription>

                      <Text size="1" weight="bold" color="gray" mb="1">
                        Name
                      </Text>
                      <TextFieldInput defaultValue={user.name} mb="2" />
                      <Text size="1" weight="bold" color="gray" mb="1">
                        Role
                      </Text>
                      <Select.Root defaultValue={user.role}>
                        <Select.Trigger />
                        <Select.Content variant="soft" color="gray">
                          <Select.Item value="viewer">Viewer</Select.Item>
                          <Select.Item value="maintainer">
                            Maintainer
                          </Select.Item>
                          <Select.Item value="contributor">
                            Contributor
                          </Select.Item>
                          <Select.Item value="admin">Admin</Select.Item>
                        </Select.Content>
                      </Select.Root>

                      <Flex justify="end" gap="3" mt="5">
                        <DialogClose>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </DialogClose>
                        <DialogClose>
                          <Button>Save</Button>
                        </DialogClose>
                      </Flex>
                    </DialogContent>
                  </DialogRoot>
                </Flex>
                <Separator size="4" my="3" />
              </React.Fragment>
            ))}
          </div>
        </Theme>
      </body>
    </html>
  );
}
