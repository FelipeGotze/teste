import {
  Avatar,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  SkeletonCircle,
  SkeletonText,
  Text,
  useBreakpointValue
} from "@chakra-ui/react";
import { useContext } from "react";
import { FiUser } from 'react-icons/fi';
import { GoChevronDown } from 'react-icons/go';
import { MdLogout } from 'react-icons/md';
import { AuthContext } from "../../../../contexts/AuthContext";

const Profile = () => {
  const { signOut, user } = useContext(AuthContext);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Menu>
      <MenuButton
        as={Button}
        p="0"
        bgColor="transparent"
        rightIcon={<GoChevronDown />}
        _focus={{ boxShadow: 'none' }}
        _hover={{ bgColor: 'transparent' }}
        _active={{ bgColor: 'transparent' }}
      >
        <HStack textAlign="left">
          {
            user ? (
              <Avatar size="sm" name={user?.name} />
            ) : (
              <SkeletonCircle size='32px' />
            )
          }
          {
            isWideVersion &&
            <Box ml="2" lineHeight="16px" fontWeight="normal">
              {
                user ? (
                  <>
                    <Text m="0" p="0" fontSize="sm">{user?.name}</Text>
                    <Text m="0" p="0" fontSize="xs">{user?.email}</Text>
                  </>
                ) : (
                  <>
                    <SkeletonText w="150px" h="16px" mt="1" noOfLines={1} />
                    <SkeletonText w="150px" h="16px" noOfLines={1} />
                  </>
                )
              }
            </Box>
          }
        </HStack>
      </MenuButton>
      <Portal>
        <MenuList fontSize="sm" zIndex="99">
          <MenuItem icon={<FiUser />}>Minhas Informações</MenuItem>
          <MenuItem icon={<MdLogout />} onClick={signOut}>Sair</MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  )
}

export default Profile;