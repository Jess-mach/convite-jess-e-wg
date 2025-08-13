import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'


export function App () {
    console.log('Oi');

    return (
    <>
        <Heading attr={123} attr2= 'String' >
            Olá Mundo!
        </Heading>
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque
        incidunt accusamus commodi quasi sit, doloribus in fugiat, repellat
        laudantium voluptas praesentium labore dolore unde! Aliquam, dolorem! A,
        quia rerum!
        </p>
    </>
 );
}

