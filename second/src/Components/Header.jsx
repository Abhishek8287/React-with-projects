import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        left={'4'}
        top={'4'}
        colorScheme="purple"
        p={'0'}
        height={'10'}
        width={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button colorScheme="purple" variant={'ghost'}>
                <Link to="/">React</Link>
              </Button>
              <Button colorScheme="purple" variant={'ghost'}>
                video
              </Button>
              <Button colorScheme="purple" variant={'ghost'}>
                Images
              </Button>
              <Button colorScheme="purple" variant={'ghost'}>
                Home
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
