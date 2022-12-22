import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, UseDisclosureProps } from "@chakra-ui/react"

interface TermsProps {
  modal: UseDisclosureProps;
};

const Terms = ({ modal }: TermsProps) => {
  const { isOpen, onClose } = modal;

  return (
    <Modal isOpen={isOpen!} onClose={onClose!} size="2xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Termos de Serviço</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="justify">
          <Text pb="3">Aenean sit amet facilisis tortor. Duis cursus felis arcu, ac bibendum velit mollis nec. Duis nunc purus, mollis sit amet metus at, sodales sodales tellus. Nulla eget lorem libero. Maecenas eget accumsan odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tincidunt, purus non facilisis porttitor, nisl diam dictum elit, sit amet commodo elit erat ac ex. Nam risus arcu, pretium sit amet ligula in, pellentesque lobortis nunc. Proin quis mi at lorem porta feugiat. Etiam et lacus diam. Donec interdum vel justo ac gravida.</Text>

          <Text pb="3">Nulla a nunc quam. Donec lorem dolor, hendrerit in lobortis sed, convallis nec lorem. Vivamus sapien dui, accumsan eu augue a, lacinia consectetur libero. Praesent a malesuada turpis. Cras sit amet rutrum lacus. Aenean pretium rutrum turpis, et ullamcorper lacus laoreet vitae. Curabitur lectus erat, faucibus id dui in, lacinia tincidunt tortor. Etiam malesuada est finibus leo convallis tristique. Aliquam eget luctus magna.</Text>

          <Text pb="3">Praesent nec erat id nisi hendrerit porta sed commodo arcu. Etiam laoreet et tellus nec consequat. Vivamus porta eros massa, eu pulvinar tellus tempus eu. Sed pellentesque id nibh vehicula blandit. Proin at sapien eget tellus molestie finibus. Nulla aliquet pellentesque vehicula. In hac habitasse platea dictumst. Nullam ornare consequat est, vitae sagittis nulla iaculis sit amet. Praesent sed mattis urna. Donec quis enim facilisis, volutpat eros vitae, ultricies elit. Maecenas interdum felis tempus, viverra ligula non, rhoncus nunc. Suspendisse cursus arcu vitae lectus aliquet, a fringilla mauris mattis. Pellentesque a risus sit amet urna dictum malesuada ut ut nibh. Sed venenatis enim eu nibh convallis facilisis. Nulla faucibus erat non porta dignissim.</Text>

          <Text pb="3">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sollicitudin feugiat magna, vel iaculis ipsum egestas at. Integer aliquet, orci et lacinia tristique, nisl nisi semper libero, at tincidunt ipsum mauris id nunc. Quisque quis tortor vestibulum, fermentum ex a, volutpat leo. Suspendisse sodales porttitor nunc id efficitur. Aliquam erat volutpat. Phasellus eget euismod ipsum. Ut porttitor libero eget pretium elementum. Donec sollicitudin auctor porttitor. Integer in eleifend orci. In bibendum cursus tincidunt.</Text>

          <Text>Curabitur eu sapien suscipit, lacinia mauris ut, pretium ipsum. Mauris commodo non turpis eu bibendum. Nam mauris mauris, lobortis quis tortor in, euismod tempor purus. Curabitur congue elit sit amet nulla euismod, eget bibendum felis egestas. Integer mollis, turpis id sollicitudin viverra, sem justo consectetur erat, in placerat diam quam a elit. Pellentesque consequat, nunc a fermentum tempor, purus sem ultricies ante, egestas sodales eros augue vitae leo. Vestibulum ut sapien ultrices, euismod metus tristique, tempus arcu. Nulla facilisi. Pellentesque pellentesque viverra justo et accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper vitae ipsum feugiat convallis.</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='purple' mr={3} onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Terms;