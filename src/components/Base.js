import {Card,Title,Text,ColGrid,Col,Block,Flex, Metric, BadgeDelta, Bold} from '@tremor/react'
import json from '../base.json'
import React, { Component } from 'react'
class Base extends (Component){
  constructor(props){
    super();
    this.state={json}
    }
    render() {
        return (
            <div>
                { this.state.json.Metrics.map((item) => {
               
                    return (
                        <div>
                            <Metric>{item.title}</Metric>
                            <ColGrid numCols={1} numColsSm={2} numColsLg={4} gapX="gap-x-2" gapY="gap-y-2">
                                
                                <Card decoration="bottom" decorationColor={item.color}>
                                    <Flex alignItems="items-start">
                                        <Block truncate={true}>
                                            <Title>Deploy Frequency </Title>
                                            <Metric truncate={true}>{item.DF} Days</Metric>
                                        </Block>
                                        <BadgeDelta deltaType={item.DT} text={item.D} />
                                    </Flex>
                                </Card>
                            
                                < Card decoration="bottom" decorationColor={item.color}>
                                    <Flex alignItems="items-start">
                                        <Block truncate={true}>
                                            <Title>Time to Recovery </Title>
                                            <Metric truncate={true}>{item.TR} Days</Metric>
                                        </Block>
                                        <BadgeDelta deltaType={item.DT} text={item.D} />
                                    </Flex>
                                </Card>
                                <Card decoration="bottom" decorationColor={item.color}>
                                    <Flex alignItems="items-start">
                                        <Block truncate={true}>
                                            <Title>Lead Time for Changed </Title>
                                            <Metric truncate={true}>{item.LT} Days</Metric>
                                        </Block>
                                        <BadgeDelta deltaType={item.DT} text={item.D} />
                                    </Flex>
                                </Card>
                                <Card decoration="bottom" decorationColor={item.color}>
                                    <Flex alignItems="items-start">
                                        <Block truncate={true}>
                                            <Title>Change Failure Rate </Title>
                                            <Metric truncate={true}>{item.CFR} %</Metric>
                                        </Block>
                                        <BadgeDelta deltaType={item.DT} text={item.D} />
                                    </Flex>
                                </Card>
                            </ColGrid>
                            <br></br>
                        </div>
                        
                    );
                })
            }
            </div>
        );
    }
}
export default Base;