import React from 'react';

// Chakra Ui 
import { Avatar } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Requests = () => {
    return (
        <div className="py-4">
            <div className="container">
                <h2 className="fw-bold">Friend requests</h2>
                <div className="mt-3">
                    <ul className="list-unstyled">
                        <li className="py-3 d-flex border-bottom">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
                            <div className="ms-3">
                                <h2 className="fw-bold">Javed Akhtar</h2>
                                <div className="mt-3">
                                    <Button backgroundColor="gold" className="me-2" size="sm">Accept</Button>
                                    <Button colorScheme="red" size="sm">Decline</Button>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 d-flex border-bottom">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
                            <div className="ms-3">
                                <h2 className="fw-bold">Javed Akhtar</h2>
                                <div className="mt-3">
                                    <Button backgroundColor="gold" className="me-2" size="sm">Accept</Button>
                                    <Button colorScheme="red" size="sm">Decline</Button>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 d-flex border-bottom">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
                            <div className="ms-3">
                                <h2 className="fw-bold">Javed Akhtar</h2>
                                <div className="mt-3">
                                    <Button backgroundColor="gold" className="me-2" size="sm">Accept</Button>
                                    <Button colorScheme="red" size="sm">Decline</Button>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 d-flex border-bottom">
                            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="lg" />
                            <div className="ms-3">
                                <h2 className="fw-bold">Javed Akhtar</h2>
                                <div className="mt-3">
                                    <Button backgroundColor="gold" className="me-2" size="sm">Accept</Button>
                                    <Button colorScheme="red" size="sm">Decline</Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Requests;
