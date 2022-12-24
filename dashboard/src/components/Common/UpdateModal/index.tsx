import {
    Button, FormControl, FormLabel, Input, ModalBody, ModalCloseButton, Modal,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast
} from "@chakra-ui/react";
import { api } from "../../../services/api";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";



interface ModalProps {
    tipo: string,
    id: number,
    name: string,
    model: string,
    brand: string,
    price: string
}

function UpdateModal({ tipo, id, name, model, brand, price }: ModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const toast = useToast();

    const [nameForm, setName] = useState<string>(name);
    const [modelForm, setModel] = useState<string>(model);
    const [brandForm, setBrand] = useState<string>(brand);
    const [priceForm, setPrice] = useState<string>(price);

    const updateCar = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        api.post("/update-car", {
            id,
            nameForm,
            modelForm,
            brandForm,
            priceForm,
        }).then(() => {
            toast({
                title: 'Cadastro alterado com sucesso!',
                description: "",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
            onClose();
            navigate('/cadastro');
        })
            .catch(e => {
                toast({
                    title: 'Erro na alteração!',
                    description: "Confira suas informações e tente novamente.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme='orange'>{tipo}</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent
                    as="form"
                    onSubmit={updateCar}>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Carro</FormLabel>
                            <Input value={nameForm} onChange={e => setName(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Modelo</FormLabel>
                            <Input value={modelForm} onChange={e => setModel(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Marca</FormLabel>
                            <Input value={brandForm} onChange={e => setBrand(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Preço</FormLabel>
                            <Input value={priceForm} onChange={e => setPrice(e.target.value)} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UpdateModal;