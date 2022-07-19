import React from 'react'
import { Card, Grid, Text } from "@nextui-org/react";
import { Avatar } from '@nextui-org/react';


import './employee.css'

const Employee = (props) => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Grid.Container Display="flex" Direction="column" xs={12}>
                        <Grid.Container xs={6}>
                            <Avatar
                                size="xls"
                                src={`${props.img}`}
                                color="primary"
                                bordered
                                squared
                            />
                        </Grid.Container>
                        <Grid.Container xs={6} Display='flex' Direction='row'>
                            <Text p>Name: {props.name}</Text>
                            <Text p>Age: {props.age}</Text>
                            <Text p>Role:{props.role} </Text>
                            <Text p>salary:{props.salary} </Text>
                        </Grid.Container>
                    </Grid.Container>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Employee