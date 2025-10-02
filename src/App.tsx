import { Heading } from "./components/Heading"

import './styles/theme.css';
import './styles/global.css';

export function App(){
    return(
        <>
        <Heading color="white" vars={2}>Ola com children</Heading>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi quam similique blanditiis adipisci, </p> 
       <p>commodi quibusdam nulla molestias cumque vero quia ratione numquam consectetur dolorum architecto optio qui. Soluta, alias.</p>
        </>
    )
}