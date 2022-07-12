import { useEffect, useState } from "react";
import QRCODE from "qrcode";
import { Container, Button, Heading } from "./qrStyle";
import Navbar from "../nav";

const QrMango = () => {

    const [src, setSrc] = useState('');
    useEffect(() => {
        QRCODE.toDataURL('paidMango').then((paid) => {
            setSrc(paid);
        })
    }, [])

    return (
        <>
        <Navbar/>
        <Container >
            <Heading>Scan QR code on the vending machine to get your Juice of choice</Heading>
             < img src={src} alt='QrCode' />
         <Button onClick={() => { document.location.href = "/"; }}>Return to Juice page</Button>
        </Container >
        </>
    )
};

export default QrMango;