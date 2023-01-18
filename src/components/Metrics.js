import {
    Card,
    Title,
    Text,
    ColGrid,
} from '@tremor/react';
import React, { Component } from 'react';
export default class Base extends Component {
    render() {
        return (
            <main>
                <Title>Dashboard</Title>
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

                <ColGrid numColsMd={ 2 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                    <Card>
                        <div className="h-44" />
                    </Card>
                    <Card>
                        <div className="h-44" />
                    </Card>
                    <Card>
                        <div className="h-44" />
                    </Card>
                    <Card>
                        <div className="h-44" />
                    </Card>
                </ColGrid>
            </main>
        );
    }
}