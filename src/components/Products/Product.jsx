import React from 'react'
import { Button } from 'react-bootstrap'
import { Modal, Input, Checkbox, Card, Grid, Row, Text, Popover } from "@nextui-org/react";
import './product.css'


const Product = () => {
    const list = [
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Advocato",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Advocato",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
        {
            title: "Orange",
            img: "/images/fruit-1.jpeg",
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: "/images/fruit-2.jpeg",
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: "/images/fruit-3.jpeg",
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: "/images/fruit-4.jpeg",
            price: "$5.30",
        },
        {
            title: "Advocato",
            img: "/images/fruit-5.jpeg",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];
    const [visible, setVisible] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const pophoverclose = () => {
        setOpen(false)
    }
    const handler = () => {
        pophoverclose();
        setVisible(true)
    };
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
                <Grid xs={6} sm={3} key={index}>
                    <Card isPressable key={index}>
                        <Card.Body css={{ p: 0 }}>
                            <div className="pophover" key={index}>
                                <Popover >
                                    <Popover.Trigger isOpen={open} isClose={!open}>
                                        <box-icon name='dots-horizontal-rounded'></box-icon>
                                    </Popover.Trigger>
                                    <Popover.Content justify='center' align='center' >
                                        {/* <ul style={{ listStyle: 'none' }} className='option'>
                                            <li><Button size='sm'>Buy</Button></li>
                                            <li><Button size='sm'>Buy</Button></li>
                                        </ul> */}
                                        <p className='pophover-p' onClick={handler}>Edit</p>
                                        <Modal
                                            closeButton
                                            blur
                                            aria-labelledby="modal-title"
                                            open={visible}
                                            onClose={closeHandler}
                                        >
                                            <Modal.Header>
                                                <Text id="modal-title" size={18}>
                                                    Welcome to
                                                    <Text b size={18}>
                                                        StarBucks
                                                    </Text>
                                                </Text>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Card isPressable key={index}>
                                                    <Card.Body css={{ p: 0 }}>
                                                        <Card.Image
                                                            src={"https://nextui.org" + item.img}
                                                            objectFit="cover"
                                                            width="100%"
                                                            height={200}
                                                            alt={item.title}
                                                        />
                                                    </Card.Body>
                                                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                                                        <Row wrap="wrap" justify="space-between" align="center">
                                                            <Text b>{item.title}</Text>
                                                            <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                                                {item.price}
                                                            </Text>
                                                        </Row>
                                                    </Card.Footer>
                                                </Card>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button auto flat color="error" onClick={closeHandler}>
                                                    Close
                                                </Button>
                                                <Button auto onClick={closeHandler}>
                                                    Buy Now
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <hr className="pophover-hr" />
                                        <p className='pophover-p'>Add</p>
                                    </Popover.Content>
                                </Popover>
                            </div>
                            <Card.Image
                                src={"https://nextui.org" + item.img}
                                objectFit="cover"
                                width="100%"
                                height={200}
                                alt={item.title}
                            />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                            <Row wrap="wrap" justify="space-between" align="center">
                                <Text b>{item.title}</Text>
                                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                    {item.price}
                                </Text>
                            </Row>
                        </Card.Footer>
                    </Card>

                </Grid>
            ))}
        </Grid.Container>
    )
}

export default Product  